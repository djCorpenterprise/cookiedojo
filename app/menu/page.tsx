import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Menu | Cookie Dojo',
  description:
    'Boutique treat pricing from Cookie Dojo — dipped treats, chocolate-dipped strawberries, coconut macaroons, candy sushi, and custom upgrades.',
};

export default function MenuPage() {
  return (
    <>
      <section className="bg-cream-light pt-16 md:pt-24 pb-12">
        <div className="max-w-content mx-auto px-6 md:px-10 text-center">
          <p className="eyebrow mb-4">Our Menu</p>
          <h1 className="font-serif text-5xl md:text-6xl text-espresso">
            Boutique Treat Pricing
          </h1>
          <div className="divider-ornament mt-6">
            <div className="diamond" />
          </div>
          <p className="mt-6 max-w-xl mx-auto text-espresso/70 leading-relaxed">
            Final pricing may vary for custom design requests, specialty
            packaging, rush turnaround, or delivery. Ready to order? Request a
            quote below.
          </p>
        </div>
      </section>

      <section className="bg-cream py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <div className="relative w-full shadow-[0_30px_60px_-20px_rgba(61,40,23,0.25)]">
            <Image
              src="/images/menu-printed.jpg"
              alt="Cookie Dojo Boutique Treat Pricing menu"
              width={1130}
              height={1412}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      <section className="bg-espresso text-cream-light py-20">
        <div className="max-w-content mx-auto px-6 md:px-10 text-center">
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            Ready to place an order?
          </h2>
          <p className="mt-4 text-cream/75 max-w-xl mx-auto">
            Tell us what you&apos;re thinking and we&apos;ll send a full quote.
          </p>
          <div className="mt-8">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center px-8 py-4 bg-cream-light text-espresso font-medium tracking-wider uppercase text-sm hover:bg-rose hover:text-cream-light transition-colors"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
