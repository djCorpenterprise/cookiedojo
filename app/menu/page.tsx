import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Menu | Cookie Dojo',
  description:
    'Boutique treat pricing from Cookie Dojo — dipped treats, chocolate-dipped strawberries, coconut macaroons, candy sushi, and custom upgrades.',
};

export default function MenuPage() {
  return (
    <>
      {/* Header */}
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

      {/* Menu body */}
      <section className="bg-cream py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <div className="bg-cream-light border border-espresso/10 p-8 md:p-14 space-y-14">
            {/* Dipped Treat Sets */}
            <MenuSection title="Dipped Treat Sets">
              <MenuRow
                name="Pretzel Rods"
                tiers={[
                  { label: '3 count', price: '$14' },
                  { label: '5 count', price: '$22' },
                  { label: '10 count', price: '$40' },
                ]}
              />
              <MenuRow
                name="Oreo Cookies"
                tiers={[
                  { label: '3 count', price: '$14' },
                  { label: '5 count', price: '$22' },
                  { label: '10 count', price: '$40' },
                ]}
              />
              <MenuRow
                name="Rice Crispy Treats"
                tiers={[
                  { label: '3 count', price: '$14' },
                  { label: '5 count', price: '$22' },
                  { label: '10 count', price: '$40' },
                ]}
              />
            </MenuSection>

            <Divider />

            {/* Baker's Choice */}
            <MenuSection title="Baker's Choice Variety Box">
              <div className="text-center">
                <p className="font-serif text-2xl text-espresso mb-2">$24</p>
                <p className="text-espresso/70 max-w-md mx-auto">
                  A rotating mixed assortment selected by the baker based on
                  current availability.
                </p>
              </div>
            </MenuSection>

            <Divider />

            {/* By the Dozen */}
            <MenuSection title="By the Dozen">
              <SimpleRow
                name="Chocolate-Dipped Strawberries"
                price="$48 / dozen"
              />
              <SimpleRow
                name="Coconut Macaroons with Chocolate Drizzle"
                price="$30 / dozen"
              />
            </MenuSection>

            <Divider />

            {/* Candy Sushi */}
            <MenuSection title="Cookie Dojo Favorite Candy Sushi Tray">
              <SimpleRow name="Standard" price="$55" />
              <SimpleRow name="Deluxe" price="$72" />
            </MenuSection>

            <Divider />

            {/* Upgrades */}
            <MenuSection title="Upgrades & Add-Ons">
              <UpgradeRow
                name="Individually wrapped"
                price="+$6 per dozen"
              />
              <UpgradeRow
                name="Premium gift box / themed packaging"
                price="+$8 to $15"
              />
              <UpgradeRow
                name="Custom colors or theme work"
                price="+$10 to $20"
              />
              <UpgradeRow
                name="Edible image / logo work"
                price="starting at +$12"
              />
              <UpgradeRow name="Rush orders" price="+$20 to $35" />
              <UpgradeRow name="Delivery" price="quoted by mileage" />
            </MenuSection>

            {/* Disclaimer */}
            <div className="pt-8 text-center text-rose text-sm italic border-t border-espresso/10">
              <p>
                Strawberries and macaroons are sold separately by the dozen.
              </p>
              <p className="mt-1">
                Final pricing may vary for custom design requests, specialty
                packaging, rush turnaround, or delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
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

function MenuSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-center eyebrow !text-base !text-sage-dark mb-6 tracking-[0.25em]">
        {title}
      </h2>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

function MenuRow({
  name,
  tiers,
}: {
  name: string;
  tiers: { label: string; price: string }[];
}) {
  return (
    <div className="text-center">
      <p className="font-serif text-lg text-espresso">
        <span>{name}</span>
        <span className="text-espresso/40 mx-2">—</span>
        {tiers.map((t, i) => (
          <span key={t.label}>
            <span className="text-rose">{t.price}</span>
            <span className="text-espresso/60"> / {t.label}</span>
            {i < tiers.length - 1 && (
              <span className="text-espresso/30 mx-3">•</span>
            )}
          </span>
        ))}
      </p>
    </div>
  );
}

function SimpleRow({ name, price }: { name: string; price: string }) {
  return (
    <div className="text-center font-serif text-lg text-espresso">
      <span>{name}</span>
      <span className="text-espresso/40 mx-2">—</span>
      <span className="text-rose">{price}</span>
    </div>
  );
}

function UpgradeRow({ name, price }: { name: string; price: string }) {
  return (
    <div className="flex justify-between items-baseline gap-4 border-b border-dotted border-espresso/20 pb-2">
      <span className="text-espresso">{name}</span>
      <span className="text-rose whitespace-nowrap">{price}</span>
    </div>
  );
}

function Divider() {
  return <div className="h-px bg-espresso/15" />;
}
