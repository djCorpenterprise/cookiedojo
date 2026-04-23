import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';

type ItemSelection = {
  name: string;
  quantity: string;
  notes: string;
};

type QuotePayload = {
  name: string;
  email: string;
  phone: string;
  eventDate: string;
  eventType: string;
  fulfillment: string;
  deliveryAddress?: string;
  theme?: string;
  notes?: string;
  referral?: string;
  items: ItemSelection[];
  upgrades: string[];
};

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as QuotePayload;

    // Basic validation
    if (!body.name || !body.email || !body.phone || !body.eventDate) {
      return NextResponse.json(
        { error: 'Missing required fields.' },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.TO_EMAIL || 'cookiedojojax@gmail.com';
    const fromEmail = process.env.FROM_EMAIL || 'quotes@cookiedojo.com';

    if (!apiKey) {
      console.error('RESEND_API_KEY is not set');
      return NextResponse.json(
        { error: 'Email service is not configured.' },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    // Send to Betty
    const adminEmail = await resend.emails.send({
      from: `Cookie Dojo Quotes <${fromEmail}>`,
      to: [toEmail],
      replyTo: body.email,
      subject: `New Quote Request — ${body.name} (${body.eventType || 'Event'})`,
      html: buildAdminEmail(body),
    });

    if (adminEmail.error) {
      console.error('Admin email error:', adminEmail.error);
      throw new Error('Failed to send admin email.');
    }

    // Send confirmation to customer
    await resend.emails.send({
      from: `Cookie Dojo <${fromEmail}>`,
      to: [body.email],
      subject: 'We received your quote request — Cookie Dojo',
      html: buildCustomerEmail(body),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Quote submission error:', err);
    return NextResponse.json(
      { error: 'Failed to submit quote request.' },
      { status: 500 }
    );
  }
}

function buildAdminEmail(data: QuotePayload): string {
  const itemsHtml =
    data.items.length > 0
      ? data.items
          .map(
            (item) => `
        <tr>
          <td style="padding: 8px 12px; border-bottom: 1px solid #EDE4D0;">${escapeHtml(item.name)}</td>
          <td style="padding: 8px 12px; border-bottom: 1px solid #EDE4D0;">${escapeHtml(item.quantity || '—')}</td>
          <td style="padding: 8px 12px; border-bottom: 1px solid #EDE4D0;">${escapeHtml(item.notes || '—')}</td>
        </tr>`
          )
          .join('')
      : '<tr><td colspan="3" style="padding: 8px 12px;">No items specified</td></tr>';

  const upgradesHtml =
    data.upgrades.length > 0
      ? data.upgrades.map((u) => `<li>${escapeHtml(u)}</li>`).join('')
      : '<li>None selected</li>';

  return `
  <div style="font-family: Georgia, serif; background: #FAF6EC; padding: 40px 20px; color: #3D2817;">
    <div style="max-width: 600px; margin: 0 auto; background: #FFF; padding: 40px; border: 1px solid #EDE4D0;">
      <h1 style="font-size: 28px; margin: 0 0 8px; color: #3D2817;">New Quote Request</h1>
      <p style="color: #7A8F5A; font-size: 12px; letter-spacing: 0.2em; text-transform: uppercase; margin: 0 0 30px;">Cookie Dojo</p>

      <h2 style="font-size: 16px; color: #7A8F5A; letter-spacing: 0.15em; text-transform: uppercase; margin: 30px 0 12px;">Contact</h2>
      <table style="width: 100%; font-family: Arial, sans-serif; font-size: 14px;">
        <tr><td style="padding: 6px 0; width: 130px; color: #7A6B55;"><strong>Name:</strong></td><td>${escapeHtml(data.name)}</td></tr>
        <tr><td style="padding: 6px 0; color: #7A6B55;"><strong>Email:</strong></td><td><a href="mailto:${escapeHtml(data.email)}" style="color: #C67B6B;">${escapeHtml(data.email)}</a></td></tr>
        <tr><td style="padding: 6px 0; color: #7A6B55;"><strong>Phone:</strong></td><td>${escapeHtml(data.phone)}</td></tr>
        ${data.referral ? `<tr><td style="padding: 6px 0; color: #7A6B55;"><strong>Found us via:</strong></td><td>${escapeHtml(data.referral)}</td></tr>` : ''}
      </table>

      <h2 style="font-size: 16px; color: #7A8F5A; letter-spacing: 0.15em; text-transform: uppercase; margin: 30px 0 12px;">Event</h2>
      <table style="width: 100%; font-family: Arial, sans-serif; font-size: 14px;">
        <tr><td style="padding: 6px 0; width: 130px; color: #7A6B55;"><strong>Date Needed:</strong></td><td>${escapeHtml(data.eventDate)}</td></tr>
        <tr><td style="padding: 6px 0; color: #7A6B55;"><strong>Event Type:</strong></td><td>${escapeHtml(data.eventType || '—')}</td></tr>
        <tr><td style="padding: 6px 0; color: #7A6B55;"><strong>Fulfillment:</strong></td><td>${escapeHtml(data.fulfillment || '—')}</td></tr>
        ${data.deliveryAddress ? `<tr><td style="padding: 6px 0; color: #7A6B55;"><strong>Delivery Address:</strong></td><td>${escapeHtml(data.deliveryAddress)}</td></tr>` : ''}
      </table>

      <h2 style="font-size: 16px; color: #7A8F5A; letter-spacing: 0.15em; text-transform: uppercase; margin: 30px 0 12px;">Items Requested</h2>
      <table style="width: 100%; font-family: Arial, sans-serif; font-size: 14px; border-collapse: collapse;">
        <thead>
          <tr style="background: #F5EFE0;">
            <th style="padding: 8px 12px; text-align: left; color: #3D2817;">Item</th>
            <th style="padding: 8px 12px; text-align: left; color: #3D2817;">Quantity</th>
            <th style="padding: 8px 12px; text-align: left; color: #3D2817;">Notes</th>
          </tr>
        </thead>
        <tbody>${itemsHtml}</tbody>
      </table>

      <h2 style="font-size: 16px; color: #7A8F5A; letter-spacing: 0.15em; text-transform: uppercase; margin: 30px 0 12px;">Upgrades</h2>
      <ul style="font-family: Arial, sans-serif; font-size: 14px; padding-left: 20px;">${upgradesHtml}</ul>

      ${
        data.theme
          ? `<h2 style="font-size: 16px; color: #7A8F5A; letter-spacing: 0.15em; text-transform: uppercase; margin: 30px 0 12px;">Theme / Colors / Logo</h2>
             <p style="font-family: Arial, sans-serif; font-size: 14px; line-height: 1.6; background: #F5EFE0; padding: 15px; border-left: 3px solid #7A8F5A;">${escapeHtml(data.theme)}</p>`
          : ''
      }

      ${
        data.notes
          ? `<h2 style="font-size: 16px; color: #7A8F5A; letter-spacing: 0.15em; text-transform: uppercase; margin: 30px 0 12px;">Additional Notes</h2>
             <p style="font-family: Arial, sans-serif; font-size: 14px; line-height: 1.6; background: #F5EFE0; padding: 15px; border-left: 3px solid #7A8F5A;">${escapeHtml(data.notes)}</p>`
          : ''
      }

      <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #EDE4D0; text-align: center; color: #7A6B55; font-size: 12px;">
        Reply to this email to respond directly to ${escapeHtml(data.name)}.
      </div>
    </div>
  </div>`;
}

function buildCustomerEmail(data: QuotePayload): string {
  return `
  <div style="font-family: Georgia, serif; background: #FAF6EC; padding: 40px 20px; color: #3D2817;">
    <div style="max-width: 600px; margin: 0 auto; background: #FFF; padding: 40px; border: 1px solid #EDE4D0;">
      <h1 style="font-size: 32px; margin: 0 0 8px; color: #3D2817; text-align: center;">Cookie Dojo</h1>
      <p style="text-align: center; color: #C67B6B; font-size: 14px; letter-spacing: 0.2em; text-transform: uppercase; margin: 0 0 40px;">Quote Request Received</p>

      <p style="font-family: Arial, sans-serif; font-size: 15px; line-height: 1.7;">Hi ${escapeHtml(data.name.split(' ')[0])},</p>

      <p style="font-family: Arial, sans-serif; font-size: 15px; line-height: 1.7;">
        Thank you so much for reaching out to Cookie Dojo! We&apos;ve received your quote request for <strong>${escapeHtml(data.eventType || 'your event')}</strong> on <strong>${escapeHtml(data.eventDate)}</strong>.
      </p>

      <p style="font-family: Arial, sans-serif; font-size: 15px; line-height: 1.7;">
        We&apos;ll review the details and get back to you within <strong>24–48 hours</strong> with a custom quote. Once you approve it, you&apos;ll receive a Stripe invoice by email to confirm your order.
      </p>

      <div style="background: #F5EFE0; border-left: 3px solid #7A8F5A; padding: 20px; margin: 30px 0; font-family: Arial, sans-serif; font-size: 14px; line-height: 1.6;">
        <p style="margin: 0 0 10px; font-weight: 600; color: #3D2817;">A quick reminder:</p>
        <p style="margin: 0;">
          Orders require full payment in advance via Stripe invoice, and are not confirmed until paid. A 10-day minimum lead time applies to custom and large orders.
        </p>
      </div>

      <p style="font-family: Arial, sans-serif; font-size: 15px; line-height: 1.7;">
        In the meantime, feel free to reply to this email with any additional details, inspiration photos, or questions.
      </p>

      <p style="font-family: Arial, sans-serif; font-size: 15px; line-height: 1.7; margin-top: 30px;">
        Talk soon,<br/>
        <strong>Betty</strong><br/>
        <em style="color: #C67B6B;">Cookie Dojo</em>
      </p>

      <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #EDE4D0; text-align: center; color: #7A6B55; font-size: 12px;">
        <p style="margin: 0;">Cookie Dojo · Jacksonville, FL</p>
        <p style="margin: 4px 0 0;"><a href="mailto:cookiedojojax@gmail.com" style="color: #C67B6B; text-decoration: none;">cookiedojojax@gmail.com</a></p>
      </div>
    </div>
  </div>`;
}

function escapeHtml(str: string): string {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
