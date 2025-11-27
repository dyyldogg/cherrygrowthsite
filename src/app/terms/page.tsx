import Footer from "@/components/Footer";

export default function TermsOfService() {
  return (
    <main className="mx-auto min-h-[calc(100dvh-64px)] w-full max-w-4xl px-4 py-20">
      <h1
        className="text-[clamp(2.5rem,5vw,4rem)] font-normal leading-[1.1] tracking-tight text-black mb-16"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        Terms of Service
      </h1>
      
      <div className="text-lg leading-relaxed text-black/80 space-y-12">
        <div className="space-y-6 border-b border-black/10 pb-12">
          <p className="font-medium text-black/60 uppercase tracking-wider text-sm">Last updated: 11/26/2025</p>

          <p className="text-xl text-black/90">
            By using CherryGrowth services, you agree to these Terms of Service.
          </p>
        </div>

        <section className="space-y-4">
          <h3 className="text-2xl font-medium text-black" style={{ fontFamily: "var(--font-playfair)" }}>Services</h3>
          <p>
            CherryGrowth provides virtual assistant matching and management services, including appointment reminders, service status updates, billing confirmations, and account notifications.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-medium text-black" style={{ fontFamily: "var(--font-playfair)" }}>SMS/Mobile Terms</h3>
          
          <div className="space-y-4 pl-4 border-l-2 border-black/10">
            <div>
              <h4 className="font-bold text-black">Program Information</h4>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li><strong>Program Name:</strong> CherryGrowth Client Communications</li>
                <li><strong>Description:</strong> We send transactional service messages including appointment reminders, service updates, billing confirmations, and account notifications (non-promotional)</li>
                <li><strong>Opt-In:</strong> Subscribe via our web forms, client portal, or by providing explicit consent to a CherryGrowth representative</li>
                <li><strong>Frequency:</strong> Recurring; message frequency varies based on service activity</li>
                <li><strong>Cost:</strong> Message and data rates may apply as charged by your mobile carrier</li>
                <li><strong>Opt-Out:</strong> Reply STOP to any message to cancel at any time</li>
                <li><strong>Help:</strong> Reply HELP for assistance or contact hello@cherrygrowth.com or (310) 907-5746</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-medium text-black" style={{ fontFamily: "var(--font-playfair)" }}>User Responsibilities</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>You must be 18 years or older to use our services</li>
            <li>Provide accurate and current contact information</li>
            <li>Maintain the security of your account credentials</li>
            <li>Comply with applicable laws and regulations</li>
            <li>Not use services for unlawful or prohibited purposes</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-medium text-black" style={{ fontFamily: "var(--font-playfair)" }}>Consent and Data Usage</h3>
          <p>By opting in to SMS communications:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>You provide explicit written consent to receive SMS messages at the provided phone number</li>
            <li>We store your phone number, consent timestamp, and opt-in method for compliance purposes</li>
            <li>We share necessary data with messaging vendors and wireless carriers to deliver messages</li>
            <li>We maintain audit logs of all messages sent and delivery status</li>
            <li>You may withdraw consent at any time by replying STOP or contacting us</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-medium text-black" style={{ fontFamily: "var(--font-playfair)" }}>Carrier Information</h3>
          <p>
            Wireless carriers are not liable for delayed or undelivered messages. Message delivery depends on carrier network availability and device compatibility.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-medium text-black" style={{ fontFamily: "var(--font-playfair)" }}>Prohibited Content</h3>
          <p>
            We do not send SHAFT content (sex, hate, alcohol to minors, firearms, tobacco) or other prohibited content as defined by CTIA guidelines and carrier policies.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-medium text-black" style={{ fontFamily: "var(--font-playfair)" }}>Service Availability</h3>
          <p>
            We strive for high availability but do not guarantee uninterrupted service. We may perform maintenance or updates that temporarily affect service availability.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-medium text-black" style={{ fontFamily: "var(--font-playfair)" }}>Limitation of Liability</h3>
          <p>
            CherryGrowth shall not be liable for indirect, incidental, special, consequential, or punitive damages arising from your use of our services.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-medium text-black" style={{ fontFamily: "var(--font-playfair)" }}>Termination</h3>
          <p>
            We may terminate or suspend access to our services immediately, without prior notice, for conduct that violates these Terms or is harmful to other users or our business.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-medium text-black" style={{ fontFamily: "var(--font-playfair)" }}>Changes to Terms</h3>
          <p>
            We reserve the right to modify these Terms at any time. Material changes will be effective upon posting to this page with an updated date.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-medium text-black" style={{ fontFamily: "var(--font-playfair)" }}>Governing Law</h3>
          <p>
            These Terms are governed by the laws of the State of California, without regard to conflict of law principles.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-medium text-black" style={{ fontFamily: "var(--font-playfair)" }}>Contact</h3>
          <p>
            CherryGrowth LLC<br />
            1940 Haste St, Berkeley, CA 94704 Apartment #B<br />
            Email: <a href="mailto:hello@cherrygrowth.com" className="underline decoration-black/30 underline-offset-4 hover:decoration-black transition-all">hello@cherrygrowth.com</a><br />
            Phone: (310) 907-5746
          </p>
          <p className="mt-4 text-sm text-black/60">
            For more information about our data practices, see our <a href="/privacy" className="underline hover:text-black">Privacy Policy</a>.
          </p>
        </section>
      </div>

      <div className="mt-32">
        <Footer />
      </div>
    </main>
  );
}
