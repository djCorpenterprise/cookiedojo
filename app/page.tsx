import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-cream-light overflow-hidden">
        <div className="max-w-content mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-20 md:pb-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="eyebrow mb-5">Jacksonville, FL · Est. 2024</p>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-espresso tracking-tight">
                Boutique
                <br />
                Handcrafted
                <br />
                <span className="text-rose italic">Treats.</span>
              </h1>
              <div className="divider-ornament my-8 !justify-start">
                <div className="diamond" />
              </div>
              <p className="text-lg md:text-xl text-espresso/75 leading-relaxed max-w-lg">
                Chocolate-dipped strawberries, signature cookies, candy sushi,
                and custom branded desserts — made by hand in Jacksonville for
                events, gifting, and everything in between.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link href="/quote" className="btn-primary">
                  Request a Quote
                </Link>
                <Link href="/menu" className="btn-secondary">
                  View Menu
                </Link>
              </div>
            </div>

            {/* Hero image placeholder — drop your hero image at /public/images/hero.jpg */}
            <div className="relative aspect-[4/5] lg:aspect-auto lg:h-[600px] bg-cream border border-espresso/10">
              <div className="absolute inset-0 flex items-center justify-center text-espresso/30 text-sm">
                <HeroPlaceholder />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="eyebrow mb-4">The Cookie Dojo Way</p>
            <h2 className="font-serif text-4xl md:text-5xl text-espresso leading-tight">
              Every treat, made with intention.
            </h2>
            <div className="divider-ornament mt-6">
              <div className="diamond" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-10 md:gap-12">
            <ValueProp
              title="Handcrafted"
              body="Every order is made to order in small batches. No factory lines, no shortcuts — just real ingredients and attention to detail."
            />
            <ValueProp
              title="Custom Branded"
              body="Logo match, color match, themed packaging, and personalized cards — we can bring your brand or event to life in edible form."
            />
            <ValueProp
              title="Locally Delivered"
              body="Serving Jacksonville and surrounding areas within a 25-mile delivery radius. Pickup also available by appointment."
            />
          </div>
        </div>
      </section>

      {/* FEATURED CATEGORIES */}
      <section className="bg-cream-light py-20 md:py-28">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="eyebrow mb-4">What We Make</p>
            <h2 className="font-serif text-4xl md:text-5xl text-espresso leading-tight">
              A little of everything delicious.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <CategoryCard
              title="Dipped Treat Sets"
              description="Pretzel rods, Oreos, and rice crispy treats — dipped, drizzled, and decorated."
              priceFrom="From $14"
            />
            <CategoryCard
              title="Chocolate Strawberries"
              description="Hand-dipped, beautifully drizzled, sold by the dozen for gifting or events."
              priceFrom="$48 / dozen"
            />
            <CategoryCard
              title="Candy Sushi Tray"
              description="Our signature showstopper — a playful tray that always steals the show."
              priceFrom="From $55"
            />
            <CategoryCard
              title="Coconut Macaroons"
              description="Chewy coconut with a dark chocolate drizzle. Sold by the dozen."
              priceFrom="$30 / dozen"
            />
            <CategoryCard
              title="Baker's Choice Box"
              description="A rotating mixed assortment selected by Betty based on what's fresh."
              priceFrom="$24"
            />
            <CategoryCard
              title="Custom & Branded"
              description="Logo-matched desserts, themed packaging, and personalized cards for your brand or event."
              priceFrom="Quoted"
            />
          </div>

          <div className="text-center mt-12">
            <Link href="/menu" className="btn-secondary">
              See Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="bg-espresso text-cream-light py-20 md:py-24">
        <div className="max-w-content mx-auto px-6 md:px-10 text-center">
          <p className="eyebrow !text-sage-light mb-4">Planning Something Special?</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight max-w-3xl mx-auto">
            Weddings, corporate gifting, birthdays, showers — we do it all.
          </h2>
          <p className="mt-6 text-cream/75 max-w-xl mx-auto">
            Tell us about your event and we&apos;ll put together a custom quote.
            A 10-day lead time applies to larger orders.
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

function ValueProp({ title, body }: { title: string; body: string }) {
  return (
    <div className="text-center md:text-left">
      <h3 className="font-serif text-2xl text-espresso mb-3">{title}</h3>
      <div className="w-10 h-px bg-sage mb-4 mx-auto md:mx-0" />
      <p className="text-espresso/70 leading-relaxed">{body}</p>
    </div>
  );
}

function CategoryCard({
  title,
  description,
  priceFrom,
}: {
  title: string;
  description: string;
  priceFrom: string;
}) {
  return (
    <div className="bg-cream border border-espresso/10 p-8 hover:border-sage transition-colors">
      <div className="flex justify-between items-start mb-4">
        <h3 className="font-serif text-2xl text-espresso">{title}</h3>
      </div>
      <p className="text-espresso/70 text-sm leading-relaxed mb-6">
        {description}
      </p>
      <p className="eyebrow !text-rose">{priceFrom}</p>
    </div>
  );
}

function HeroPlaceholder() {
  return (
    <div className="text-center p-8">
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
        className="mx-auto mb-4 opacity-40"
      >
        <circle cx="60" cy="60" r="58" stroke="#7A8F5A" strokeWidth="2" />
        <path
          d="M60 30 L60 90 M52 40 L68 40 M52 55 L68 55 M52 70 L68 70 M52 85 L68 85"
          stroke="#7A8F5A"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
      <p className="text-xs uppercase tracking-widest">
        Drop hero image at /public/images/hero.jpg
      </p>
    </div>
  );
}
