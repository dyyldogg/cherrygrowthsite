import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-6xl px-4">
      <div className="grid gap-8 border-t border-black/10 py-12 text-sm text-black/70 sm:grid-cols-4">
        
        {/* Column 1: Logo & Tagline */}
        <div className="col-span-1 sm:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <img
              src="/cherrygrowth-logo.svg"
              alt="CherryGrowth"
              className="h-5 w-auto"
            />
          </div>
          <p className="mb-4 leading-relaxed">
            Client management and engagement platform for real estate teams.
          </p>
          <p className="text-xs text-black/40">
            © {new Date().getFullYear()} CherryGrowth LLC. All rights reserved.
          </p>
        </div>

        {/* Column 2: Product */}
        <div>
          <h4 className="font-medium text-black mb-4">Product</h4>
          <ul className="space-y-2">
            <li><Link href="#" className="hover:text-black transition-colors">Platform</Link></li>
            <li><Link href="#" className="hover:text-black transition-colors">Communications</Link></li>
            <li><Link href="#" className="hover:text-black transition-colors">Client Portal</Link></li>
          </ul>
        </div>

        {/* Column 3: Legal */}
        <div>
          <h4 className="font-medium text-black mb-4">Legal</h4>
          <ul className="space-y-2">
            <li><Link href="/privacy" className="hover:text-black transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-black transition-colors">Terms of Service</Link></li>
            <li><Link href="/terms" className="hover:text-black transition-colors">SMS Compliance</Link></li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div>
          <h4 className="font-medium text-black mb-4">Contact</h4>
          <ul className="space-y-2">
            <li>1940 Haste St, Berkeley, CA 94704 #B</li>
            <li><a href="mailto:hello@cherrygrowth.com" className="hover:text-black transition-colors">hello@cherrygrowth.com</a></li>
            <li>(310) 907-5746</li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-black/5 py-6 text-center text-xs text-black/40">
        Built for compliance and reliability
      </div>
    </footer>
  );
}
