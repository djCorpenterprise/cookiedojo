import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Corporate Services | Cookie Dojo',
  description:
    'Custom branded desserts, client gifting, holiday gifting, and corporate events from Cookie Dojo. Logo and color matching, personalized thank-you cards, 25-mile delivery radius.',
};

export default function CorporatePage() {
  return (
    <>
      {/* Hero with photo */}
      <section className="bg-cream-light pt-16 md:pt-24 pb-20">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="eyebrow mb-4">For Business</p>
              <h1 className="font-serif text-5xl md:text-6xl leading-[1.05] text-espresso">
                Corporate <span className="italic text-rose">Gifting</span> &amp;
                Branded Desserts.
              </h1>
              <div className="divider-ornament mt-8 !justify-start">
                <div className="diamond" />
              </div>
              <p className="mt-6 text-lg text-espresso/75 leading-relaxed max-w-2xl">
                Make your next client meeting, employee recognition event, or
                holiday gifting campaign unforgettable. We create custom treats
                matched to your brand, with personalized thank-you cards included.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link href="/quote" className="btn-primary">
                  Request a Corporate Quote
                </Link>
                <Link href="/menu" className="btn-secondary">
                  View Menu
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/5] lg:h-[620px] lg:aspect-auto shadow-[0_30px_60px_-20px_rgba(61,40,23,0.25)]">
              <Image
                src="/images/gift-box-pink.jpg"
                alt="Custom themed gift box with ribbon, dipped treats, and branded desserts"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-cream py-20 md:py-24">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="eyebrow mb-4">What&apos;s Included</p>
            <h2 className="font-serif text-4xl md:text-5xl text-espresso leading-tight">
              The full white-glove treatment.
            </h2>
            <div className="divider-ornament mt-6">
              <div className="diamond" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Feature
              number="01"
              title="Logo &amp; Color Matching"
              body="Brand-matched colors and logo-printed edible images on cookies, cake pops, and crispy treats."
            />
            <Feature
              number="02"
              title="Personalized Cards"
              body="Thank-you cards or personalized notes included with every corporate order — perfect for client gifting."
            />
            <Feature
              number="03"
              title="Premium Packaging"
              body="Themed gift boxes, individually wrapped treats, and presentation-ready trays for events."
            />
            <Feature
              number="04"
              title="Local Delivery"
              body="Delivered within 25 miles of Jacksonville. Delivery fee quoted by mileage at the time of order."
            />
          </div>
        </div>
      </section>

      {/* Themed showcase */}
      <section className="bg-cream-light py-20">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="eyebrow mb-4">Color-Matched in Action</p>
            <h2 className="font-serif text-4xl text-espresso leading-tight">
              Your brand, in edible form.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <ThemedShot
              image="/images/gift-box-pink.jpg"
              alt="Pink themed gift box with variety of treats"
              caption="Soft pinks &amp; florals"
            />
            <ThemedShot
              image="/images/cake-pops-green.jpg"
              alt="Green themed gift box with cake pops"
              caption="Rich greens &amp; golds"
            />
            <ThemedShot
              image="/images/cake-pops-blue.jpg"
              alt="Blue themed cake pops and dipped treats"
              caption="Electric blues"
            />
          </div>
        </div>
      </section>

      {/* Perfect For */}
      <section className="bg-cream-light py-20 md:py-24">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="eyebrow mb-4">Perfect For</p>
            <h2 className="font-serif text-4xl md:text-5xl text-espresso leading-tight">
              Every occasion, covered.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {[
              'Client appreciation gifts',
              'Employee recognition',
              'Holiday gifting campaigns',
              'Office parties &amp; events',
              'Conference &amp; trade show giveaways',
              'Real estate closing gifts',
              'Wedding &amp; bridal showers',
              'Corporate retreats',
              'Product launches',
            ].map((item) => (
              <div
                key={item}
                className="bg-cream border border-espresso/10 px-6 py-5 flex items-center gap-3"
              >
                <span className="text-sage text-xl">◆</span>
                <span
                  className="text-espresso"
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ordering Terms */}
      <section className="bg-cream py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <p className="eyebrow mb-4">How It Works</p>
            <h2 className="font-serif text-4xl md:text-5xl text-espresso leading-tight">
              Ordering &amp; Payment.
            </h2>
            <div className="divider-ornament mt-6">
              <div className="diamond" />
            </div>
          </div>

          <ol className="space-y-6">
            <Step
              number="1"
              title="Submit a Quote Request"
              body="Tell us about your event, what you&apos;re thinking, and when you need it. The more detail, the better."
            />
            <Step
              number="2"
              title="Receive a Custom Quote"
              body="We&apos;ll review your request and send a detailed quote, usually within 24–48 hours."
            />
            <Step
              number="3"
              title="Pay Your Stripe Invoice"
              body="Once you approve the quote, you&apos;ll receive a Stripe invoice via email. Your order is confirmed as soon as payment is received."
            />
            <Step
              number="4"
              title="We Get to Work"
              body="Your order is prepared by hand and delivered on the date you specified — fresh, branded, and ready to impress."
            />
          </ol>

          {/* Policies */}
          <div className="mt-14 bg-cream-light border border-sage/30 p-8">
            <h3 className="eyebrow !text-sage-dark mb-4">Please Note</h3>
            <ul className="space-y-3 text-espresso/80 text-sm leading-relaxed">
              <li>
                <strong className="text-espresso">Minimum lead time:</strong>{' '}
                Corporate, wedding, and large event orders require a minimum of
                10 days&apos; notice.
              </li>
              <li>
                <strong className="text-espresso">Minimum order:</strong> 2
                dozen minimum for corporate and event orders.
              </li>
              <li>
                <strong className="text-espresso">Payment in advance:</strong>{' '}
                All custom and large orders require full payment in advance via
                Stripe invoice. Your order is not confirmed until payment is
                received.
              </li>
              <li>
                <strong className="text-espresso">Delivery radius:</strong>{' '}
                Delivery available within 25 miles of Jacksonville, FL.
                Delivery fee quoted by mileage.
              </li>
              <li>
                <strong className="text-espresso">Rush orders:</strong>{' '}
                Orders needed in under 10 days may be accepted at our discretion
                with a rush fee of $20 to $35.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-espresso text-cream-light py-20">
        <div className="max-w-content mx-auto px-6 md:px-10 text-center">
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            Let&apos;s create something memorable.
          </h2>
          <p className="mt-6 text-cream/75 max-w-xl mx-auto">
            Share your vision with us and we&apos;ll put together a custom quote.
          </p>
          <div className="mt-10">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center px-8 py-4 bg-cream-light text-espresso font-medium tracking-wider uppercase text-sm hover:bg-rose hover:text-cream-light transition-colors"
            >
              Request Your Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Feature({
  number,
  title,
  body,
}: {
  number: string;
  title: string;
  body: string;
}) {
  return (
    <div>
      <p className="eyebrow !text-rose mb-3">{number}</p>
      <h3
        className="font-serif text-2xl text-espresso mb-3"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <div className="w-10 h-px bg-sage mb-4" />
      <p className="text-espresso/70 text-sm leading-relaxed">{body}</p>
    </div>
  );
}

function ThemedShot({
  image,
  alt,
  caption,
}: {
  image: string;
  alt: string;
  caption: string;
}) {
  return (
    <div>
      <div className="relative aspect-[4/5] overflow-hidden bg-cream-dark">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
      </div>
      <p
        className="mt-4 text-center eyebrow !text-rose"
        dangerouslySetInnerHTML={{ __html: caption }}
      />
    </div>
  );
}

function Step({
  number,
  title,
  body,
}: {
  number: string;
  title: string;
  body: string;
}) {
  return (
    <li className="flex gap-5">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-sage text-cream-light flex items-center justify-center font-serif text-xl">
        {number}
      </div>
      <div className="pt-1">
        <h3 className="font-serif text-xl text-espresso mb-2">{title}</h3>
        <p
          className="text-espresso/70 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: body }}
        />
      </div>
    </li>
  );
}
