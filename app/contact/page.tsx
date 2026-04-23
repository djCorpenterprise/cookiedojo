import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Cookie Dojo',
  description:
    'Get in touch with Cookie Dojo — boutique handcrafted treats in Jacksonville, Florida.',
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-cream-light pt-16 md:pt-24 pb-20">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <div className="text-center max-w-2xl mx-auto">
            <p className="eyebrow mb-4">Say Hello</p>
            <h1 className="font-serif text-5xl md:text-6xl text-espresso">
              Let&apos;s Connect
            </h1>
            <div className="divider-ornament mt-6">
              <div className="diamond" />
            </div>
            <p className="mt-6 text-espresso/70 leading-relaxed">
              Got a question, an idea, or just want to say hi? We&apos;d love to
              hear from you. For orders and quote requests, please use the
              quote form so we can capture all the details.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream py-16">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <ContactCard
              label="Email"
              primary="cookiedojojax@gmail.com"
              href="mailto:cookiedojojax@gmail.com"
              description="Best way to reach us. We respond within 24–48 hours."
            />
            <ContactCard
              label="Service Area"
              primary="Jacksonville, FL"
              description="Delivery available within 25 miles. Pickup available by appointment."
            />
          </div>

          <div className="mt-10 max-w-3xl mx-auto bg-cream-light border border-sage/30 p-8 text-center">
            <h2 className="font-serif text-2xl text-espresso mb-3">
              Placing an order?
            </h2>
            <p className="text-espresso/70 mb-6 max-w-lg mx-auto">
              Use our quote form so we can capture your event date, items,
              colors, and any custom details. You&apos;ll hear back from Betty
              within 24–48 hours.
            </p>
            <Link href="/quote" className="btn-primary">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactCard({
  label,
  primary,
  description,
  href,
}: {
  label: string;
  primary: string;
  description: string;
  href?: string;
}) {
  const content = (
    <>
      <p className="eyebrow mb-3">{label}</p>
      <p className="font-serif text-2xl text-espresso mb-3">{primary}</p>
      <p className="text-espresso/70 text-sm leading-relaxed">{description}</p>
    </>
  );

  return (
    <div className="bg-cream-light border border-espresso/10 p-8 hover:border-sage transition-colors">
      {href ? (
        <a href={href} className="block">
          {content}
        </a>
      ) : (
        content
      )}
    </div>
  );
}
