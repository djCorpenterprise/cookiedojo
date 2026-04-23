import Link from 'next/link';
import { DojoMark } from './Navbar';

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream-light mt-24">
      <div className="max-w-content mx-auto px-6 md:px-10 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <DojoMark size={36} />
              <span className="font-serif text-2xl tracking-wide">
                Cookie Dojo
              </span>
            </div>
            <p className="text-cream/70 max-w-sm leading-relaxed">
              Boutique handcrafted treats, corporate gifting, and custom branded
              desserts from Jacksonville, FL.
            </p>
            <p className="mt-4 text-sm text-cream/60">
              Delivery available within 25 miles of Jacksonville.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-sage-light mb-4">
              Explore
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/menu" className="hover:text-sage-light transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/corporate" className="hover:text-sage-light transition-colors">
                  Corporate Services
                </Link>
              </li>
              <li>
                <Link href="/quote" className="hover:text-sage-light transition-colors">
                  Request Quote
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-sage-light transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-sage-light transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-sage-light mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:cookiedojojax@gmail.com"
                  className="hover:text-sage-light transition-colors"
                >
                  cookiedojojax@gmail.com
                </a>
              </li>
              <li className="text-cream/70">Jacksonville, FL</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-xs text-cream/50">
            © {new Date().getFullYear()} Cookie Dojo. All rights reserved.
          </p>
          <p className="text-xs text-cream/50">
            Site by{' '}
            <a
              href="https://coastaldigital.co"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sage-light transition-colors"
            >
              Coastal Digital
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
