'use client';

import { useState } from 'react';

type ItemSelection = {
  name: string;
  quantity: string;
  notes: string;
};

const MENU_ITEMS = [
  'Dipped Pretzel Rods',
  'Dipped Oreo Cookies',
  'Dipped Rice Crispy Treats',
  "Baker's Choice Variety Box",
  'Chocolate-Dipped Strawberries',
  'Coconut Macaroons',
  'Candy Sushi Tray — Standard',
  'Candy Sushi Tray — Deluxe',
  'Custom / Other',
];

const EVENT_TYPES = [
  'Corporate Gifting',
  'Client Appreciation',
  'Employee Recognition',
  'Holiday Gifting',
  'Wedding',
  'Bridal Shower',
  'Baby Shower',
  'Birthday',
  'Party / Event',
  'Just Because',
  'Other',
];

const UPGRADES = [
  'Individually wrapped (+$6 per dozen)',
  'Premium gift box / themed packaging (+$8–$15)',
  'Custom colors or theme work (+$10–$20)',
  'Edible image / logo work (+$12 and up)',
  'Rush order (+$20–$35)',
  'Personalized thank-you cards (included for corporate)',
];

export default function QuoteForm() {
  const [items, setItems] = useState<ItemSelection[]>([
    { name: '', quantity: '', notes: '' },
  ]);
  const [upgrades, setUpgrades] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const addItem = () =>
    setItems([...items, { name: '', quantity: '', notes: '' }]);

  const removeItem = (idx: number) =>
    setItems(items.filter((_, i) => i !== idx));

  const updateItem = (idx: number, field: keyof ItemSelection, value: string) => {
    const next = [...items];
    next[idx] = { ...next[idx], [field]: value };
    setItems(next);
  };

  const toggleUpgrade = (upgrade: string) => {
    setUpgrades((prev) =>
      prev.includes(upgrade)
        ? prev.filter((u) => u !== upgrade)
        : [...prev, upgrade]
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus('idle');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      eventDate: formData.get('eventDate'),
      eventType: formData.get('eventType'),
      fulfillment: formData.get('fulfillment'),
      deliveryAddress: formData.get('deliveryAddress'),
      theme: formData.get('theme'),
      notes: formData.get('notes'),
      referral: formData.get('referral'),
      items: items.filter((i) => i.name),
      upgrades,
    };

    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Submission failed.');
      }

      setStatus('success');
      (e.target as HTMLFormElement).reset();
      setItems([{ name: '', quantity: '', notes: '' }]);
      setUpgrades([]);
    } catch (err) {
      setStatus('error');
      setErrorMessage(
        err instanceof Error ? err.message : 'Something went wrong.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-cream-light border border-sage p-10 md:p-14 text-center">
        <div className="w-16 h-16 rounded-full bg-sage mx-auto mb-6 flex items-center justify-center">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#F5EFE0"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="font-serif text-3xl text-espresso mb-3">
          Quote request received!
        </h3>
        <p className="text-espresso/75 max-w-md mx-auto">
          Thank you for reaching out. Betty will review your request and get
          back to you within 24–48 hours with a custom quote.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-8 btn-secondary"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      {/* Contact */}
      <fieldset>
        <legend className="font-serif text-2xl text-espresso mb-6">
          Your Contact Info
        </legend>
        <div className="grid md:grid-cols-2 gap-5">
          <Field label="Full Name" name="name" required />
          <Field label="Email" name="email" type="email" required />
          <Field label="Phone" name="phone" type="tel" required />
          <Field label="How did you hear about us?" name="referral" />
        </div>
      </fieldset>

      {/* Event details */}
      <fieldset>
        <legend className="font-serif text-2xl text-espresso mb-6">
          Event Details
        </legend>
        <div className="grid md:grid-cols-2 gap-5">
          <Field
            label="Date Needed"
            name="eventDate"
            type="date"
            required
            hint="10-day minimum for large orders"
          />
          <SelectField
            label="Type of Event"
            name="eventType"
            options={EVENT_TYPES}
            required
          />
          <div className="md:col-span-2">
            <label className="form-label">Fulfillment</label>
            <div className="grid grid-cols-2 gap-3">
              <label className="flex items-center gap-3 p-4 bg-white border border-espresso/20 cursor-pointer hover:border-sage has-[:checked]:border-sage has-[:checked]:bg-sage/5 transition-colors">
                <input
                  type="radio"
                  name="fulfillment"
                  value="Delivery"
                  defaultChecked
                  className="accent-sage"
                />
                <span>Delivery (within 25 mi)</span>
              </label>
              <label className="flex items-center gap-3 p-4 bg-white border border-espresso/20 cursor-pointer hover:border-sage has-[:checked]:border-sage has-[:checked]:bg-sage/5 transition-colors">
                <input
                  type="radio"
                  name="fulfillment"
                  value="Pickup"
                  className="accent-sage"
                />
                <span>Pickup</span>
              </label>
            </div>
          </div>
          <div className="md:col-span-2">
            <Field
              label="Delivery Address (if applicable)"
              name="deliveryAddress"
              hint="Street, City, ZIP — helps us calculate delivery fee"
            />
          </div>
        </div>
      </fieldset>

      {/* Items */}
      <fieldset>
        <div className="flex items-baseline justify-between mb-6">
          <legend className="font-serif text-2xl text-espresso">
            What Would You Like?
          </legend>
          <span className="text-xs text-espresso/50 uppercase tracking-wider">
            2 dozen corporate min
          </span>
        </div>
        <div className="space-y-4">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 md:grid-cols-[2fr_1fr_2fr_auto] gap-3 items-end bg-white border border-espresso/15 p-4"
            >
              <div>
                <label className="form-label">Item</label>
                <select
                  value={item.name}
                  onChange={(e) => updateItem(idx, 'name', e.target.value)}
                  className="form-input"
                >
                  <option value="">Select an item…</option>
                  {MENU_ITEMS.map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="form-label">Quantity</label>
                <input
                  type="text"
                  value={item.quantity}
                  onChange={(e) => updateItem(idx, 'quantity', e.target.value)}
                  placeholder="e.g. 2 dozen"
                  className="form-input"
                />
              </div>
              <div>
                <label className="form-label">Notes</label>
                <input
                  type="text"
                  value={item.notes}
                  onChange={(e) => updateItem(idx, 'notes', e.target.value)}
                  placeholder="Flavors, size…"
                  className="form-input"
                />
              </div>
              <button
                type="button"
                onClick={() => removeItem(idx)}
                disabled={items.length === 1}
                className="px-4 py-3 text-rose border border-rose/30 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-rose hover:text-cream-light transition-colors text-sm"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={addItem}
          className="mt-4 text-sm font-medium text-sage-dark hover:text-espresso uppercase tracking-wider"
        >
          + Add Another Item
        </button>
      </fieldset>

      {/* Upgrades */}
      <fieldset>
        <legend className="font-serif text-2xl text-espresso mb-2">
          Upgrades &amp; Add-Ons
        </legend>
        <p className="text-sm text-espresso/60 mb-5">
          Select any that interest you — we&apos;ll price them in your quote.
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          {UPGRADES.map((upgrade) => (
            <label
              key={upgrade}
              className="flex items-start gap-3 p-4 bg-white border border-espresso/15 cursor-pointer hover:border-sage has-[:checked]:border-sage has-[:checked]:bg-sage/5 transition-colors"
            >
              <input
                type="checkbox"
                checked={upgrades.includes(upgrade)}
                onChange={() => toggleUpgrade(upgrade)}
                className="mt-1 accent-sage"
              />
              <span className="text-sm text-espresso">{upgrade}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Theme & notes */}
      <fieldset>
        <legend className="font-serif text-2xl text-espresso mb-6">
          Theme, Colors &amp; Special Requests
        </legend>
        <div className="space-y-5">
          <TextareaField
            label="Theme, Colors, or Logo Details"
            name="theme"
            placeholder="e.g. Navy and gold for a corporate event, or 'match the logo at attachedbrand.com'"
            rows={3}
          />
          <TextareaField
            label="Anything Else We Should Know?"
            name="notes"
            placeholder="Dietary restrictions, allergies, inspiration photos (you can email these separately), etc."
            rows={4}
          />
        </div>
      </fieldset>

      {/* Disclaimer */}
      <div className="bg-cream-light border-l-4 border-sage p-6 text-sm text-espresso/80 leading-relaxed">
        <p className="font-semibold text-espresso mb-2 uppercase tracking-wider text-xs">
          Before You Submit
        </p>
        <p>
          By submitting this request, you understand that all orders require
          payment in advance via Stripe invoice and are not confirmed until
          paid. A <strong>10-day minimum lead time</strong> applies to custom
          and large orders. Corporate and event orders have a{' '}
          <strong>2 dozen minimum</strong>.
        </p>
      </div>

      {/* Error */}
      {status === 'error' && (
        <div className="bg-rose/10 border border-rose p-4 text-sm text-rose-dark">
          <strong>Something went wrong:</strong> {errorMessage} Please try again
          or email us directly at cookiedojojax@gmail.com.
        </div>
      )}

      {/* Submit */}
      <div className="pt-4">
        <button
          type="submit"
          disabled={submitting}
          className="w-full md:w-auto btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? 'Sending…' : 'Submit Quote Request'}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = 'text',
  required = false,
  hint,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  hint?: string;
}) {
  return (
    <div>
      <label className="form-label">
        {label} {required && <span className="text-rose">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="form-input"
      />
      {hint && <p className="mt-1.5 text-xs text-espresso/50">{hint}</p>}
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
  required = false,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <div>
      <label className="form-label">
        {label} {required && <span className="text-rose">*</span>}
      </label>
      <select name={name} required={required} className="form-input">
        <option value="">Select one…</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

function TextareaField({
  label,
  name,
  placeholder,
  rows = 4,
}: {
  label: string;
  name: string;
  placeholder?: string;
  rows?: number;
}) {
  return (
    <div>
      <label className="form-label">{label}</label>
      <textarea
        name={name}
        placeholder={placeholder}
        rows={rows}
        className="form-input resize-none"
      />
    </div>
  );
}
