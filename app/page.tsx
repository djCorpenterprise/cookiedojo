import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <>
      {/* LANDSCAPE HERO — candy sushi bamboo shot with overlay */}
      <section className="relative bg-cream-light overflow-hidden">
        <div className="relative h-[580px] md:h-[680px] lg:h-[760px]">
          <Image
            src="/images/hero-sushi-bamboo.jpg"
            alt="Cookie Dojo candy sushi tray on bamboo mat with palm leaves"
            fill
            priority
            className="object-cover object-right"
            sizes="100vw"
          />
          {/* Cream gradient fade on the left for legibility */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(90deg, rgba(245,239,224,0.97) 0%, rgba(245,239,224,0.85) 30%, rgba(245,239,224,0.4) 50%, rgba(245,239,224,0) 70%)',
            }}
            aria-hidden
          />
          {/* Headline overlay */}
          <div className="relative h-full max-w-content mx-auto px-6 md:px-10">
            <div className="relative z-10 h-full flex items-center">
              <div className="max-w-xl">
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
                <p className="text-lg md:text-xl text-espresso/80 leading-relaxed max-w-md">
                  Chocolate-dipped strawberries, signature cookies, candy
                  sushi, and custom branded desserts — made by hand in
                  Jacksonville.
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
              body="Logo match, color match, themed packaging, and personalized cards — we bring your brand or event to life in edible form."
            />
            <ValueProp
              title="Locally Delivered"
              body="Serving Jacksonville and surrounding areas within a 25-mile delivery radius. Pickup also available by appointment."
            />
          </div>
        </div>
      </section>

      {/* FEATURED CATEGORIES WITH PHOTOS */}
      <section className="bg-cream-light py-20 md:py-28">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="eyebrow mb-4">What We Make</p>
            <h2 className="font-serif text-4xl md:text-5xl text-espresso leading-tight">
              A little of everything delicious.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <PhotoCard
              image="/images/strawberries.jpg"
              alt="Chocolate-dipped strawberries with white drizzle"
              title="Chocolate Strawberries"
              description="Hand-dipped and beautifully drizzled — sold by the dozen."
              priceFrom="$48 / dozen"
            />
            <PhotoCard
              image="/images/candy-sushi.jpg"
              alt="Cookie Dojo signature candy sushi tray"
              title="Candy Sushi Tray"
              description="Our signature showstopper — always steals the show."
              priceFrom="From $55"
            />
            <PhotoCard
              image="/images/cake-pops-blue.jpg"
              alt="Blue-themed cake pops and dipped treats"
              title="Dipped Treat Sets"
              description="Pretzel rods, Oreos, and crispy treats — dipped, drizzled, decorated."
              priceFrom="From $14"
            />
            <PhotoCard
              image="/images/coconut-macaroons.jpg"
              alt="Coconut macaroons with chocolate drizzle"
              title="Coconut Macaroons"
              description="Chewy coconut with a dark chocolate drizzle. By the dozen."
              priceFrom="$30 / dozen"
            />
            <PhotoCard
              image="/images/gift-box-pink.jpg"
              alt="Pink floral gift box with ribbon and assorted treats"
              title="Custom Gift Boxes"
              description="Themed gift boxes with pretzel rods, dipped Oreos, and crispy treats."
              priceFrom="Quoted"
            />
            <PhotoCard
              image="/images/cake-pops-green.jpg"
              alt="Green themed cake pops and rice crispy treats in kraft box"
              title="Custom & Branded"
              description="Logo-matched desserts, branded packaging, and personalized cards."
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

function PhotoCard({
  image,
  alt,
  title,
  description,
  priceFrom,
}: {
  image: string;
  alt: string;
  title: string;
  description: string;
  priceFrom: string;
}) {
  return (
    <div className="group bg-cream border border-espresso/10 hover:border-sage transition-colors overflow-hidden flex flex-col">
      <div className="relative aspect-[4/3] overflow-hidden bg-cream-dark">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-7 flex flex-col flex-1">
        <h3 className="font-serif text-2xl text-espresso mb-2">{title}</h3>
        <p className="text-espresso/70 text-sm leading-relaxed mb-5 flex-1">
          {description}
        </p>
        <p className="eyebrow !text-rose">{priceFrom}</p>
      </div>
    </div>
  );
}
