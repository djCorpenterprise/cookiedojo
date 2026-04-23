import type { Metadata } from 'next';
import QuoteForm from '@/components/QuoteForm';

export const metadata: Metadata = {
  title: 'Request a Quote | Cookie Dojo',
  description:
    'Request a custom quote for boutique treats, corporate gifting, or event desserts from Cookie Dojo in Jacksonville, FL.',
};

export default function QuotePage() {
  return (
    <>
      {/* Header */}
      <section className="bg-cream-light pt-16 md:pt-20 pb-10">
        <div className="max-w-content mx-auto px-6 md:px-10 text-center">
          <p className="eyebrow mb-4">Let&apos;s Make Something Sweet</p>
          <h1 className="font-serif text-5xl md:text-6xl text-espresso">
            Request a Quote
          </h1>
          <div className="divider-ornament mt-6">
            <div className="diamond" />
          </div>
          <p className="mt-6 max-w-xl mx-auto text-espresso/70 leading-relaxed">
            Tell us about your event and what you&apos;re thinking. We&apos;ll
            send a custom quote within 24–48 hours, and you&apos;ll confirm your
            order via Stripe invoice.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="bg-cream py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
