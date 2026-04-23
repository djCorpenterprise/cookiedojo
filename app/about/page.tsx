import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Cookie Dojo',
  description:
    'Cookie Dojo is a boutique treat studio in Jacksonville, Florida, handcrafting desserts for events, corporate gifting, and custom occasions.',
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-cream-light pt-16 md:pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <div className="text-center">
            <p className="eyebrow mb-4">Our Story</p>
            <h1 className="font-serif text-5xl md:text-6xl text-espresso leading-tight">
              Small batch. Big heart.
            </h1>
            <div className="divider-ornament mt-6">
              <div className="diamond" />
            </div>
          </div>

          <div className="prose prose-lg max-w-none mt-12 space-y-6 text-espresso/80 leading-relaxed">
            <p className="text-xl">
              Cookie Dojo was born in Jacksonville, Florida from a simple idea:
              every treat should feel like a gift — beautifully made, carefully
              packaged, and unmistakably handcrafted.
            </p>
            <p>
              What started as baking for friends and family has grown into a
              boutique treat studio creating desserts for weddings, corporate
              gifting, client appreciation, birthdays, and just-because moments.
              Every order is made by hand, in small batches, with attention to
              detail you can taste.
            </p>
            <p>
              We specialize in custom branded desserts — logo-matched colors,
              themed packaging, and personalized cards that turn treats into
              memorable keepsakes. Whether it&apos;s a tray of chocolate-dipped
              strawberries for a client meeting, a signature candy sushi tray
              for a birthday, or 10 dozen logo cookies for a conference,
              we&apos;ll put as much care into your order as we would if it
              were for our own family.
            </p>
            <p>
              Because at the end of the day, that&apos;s what this is — family
              recipes, family care, shared with yours.
            </p>
          </div>

          {/* Signature block */}
          <div className="mt-16 text-center">
            <p className="font-serif text-2xl italic text-rose">— Betty</p>
            <p className="eyebrow mt-2">Baker &amp; Owner</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-cream py-20">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-3 gap-10 text-center">
            <Value
              title="Handmade"
              body="Every order made in small batches, to order. No factory shortcuts."
            />
            <Value
              title="Personal"
              body="Your event, your colors, your brand — we tailor every detail to you."
            />
            <Value
              title="Local"
              body="Proudly made in Jacksonville, delivered within 25 miles."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-espresso text-cream-light py-20">
        <div className="max-w-content mx-auto px-6 md:px-10 text-center">
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            Ready to work together?
          </h2>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center px-8 py-4 bg-cream-light text-espresso font-medium tracking-wider uppercase text-sm hover:bg-rose hover:text-cream-light transition-colors"
            >
              Request a Quote
            </Link>
            <Link
              href="/menu"
              className="inline-flex items-center justify-center px-8 py-4 border border-cream-light text-cream-light font-medium tracking-wider uppercase text-sm hover:bg-cream-light hover:text-espresso transition-colors"
            >
              View Menu
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Value({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h3 className="font-serif text-2xl text-espresso mb-3">{title}</h3>
      <div className="w-10 h-px bg-sage mx-auto mb-4" />
      <p className="text-espresso/70 leading-relaxed">{body}</p>
    </div>
  );
}
