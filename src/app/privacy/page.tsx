import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <main className="mx-auto min-h-[calc(100dvh-64px)] w-full max-w-4xl px-4 py-20">
      <h1
        className="text-[clamp(2.5rem,5vw,4rem)] font-normal leading-[1.1] tracking-tight text-black mb-16"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        Privacy Policy
      </h1>
      
      <div className="text-lg leading-relaxed text-black/80 space-y-12">
        <div className="space-y-6 border-b border-black/10 pb-12">
          <p className="font-medium text-black/60 uppercase tracking-wider text-sm">Last updated: 11/26/2025</p>

          <p className="text-xl text-black/90">
            CherryGrowth LLC ("CherryGrowth", "we", "us") provides virtual assistant matching and management services. This policy explains how we collect, use, and share information.
          </p>
        </div>

        <section className="space-y-4">
          <h3 className="text-2xl font-medium text-black" style={{ fontFamily: "var(--font-playfair)" }}>Information We Collect</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Contact information you submit (name, email, phone number)</li>
            <li>Communication preferences and consent records with timestamps</li>
            <li>Message delivery metadata (timestamps, carrier delivery information, read receipts)</li>
            <li>Website analytics and form submission data</li>
            <li>Account activity and authentication logs</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-medium text-black" style={{ fontFamily: "var(--font-playfair)" }}>How We Use Information</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>To provide communications services and respond to inquiries</li>
            <li>To send SMS messages per your explicit consent for appointment reminders, service updates, and billing confirmations</li>
            <li>To maintain opt-in/opt-out records and ensure TCPA compliance</li>
            <li>To ensure reliable delivery, troubleshoot issues, and prevent abuse</li>
            <li>To improve our matching algorithms and service quality</li>
            <li>To maintain security and prevent unauthorized access</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-medium text-black" style={{ fontFamily: "var(--font-playfair)" }}>SMS Communications</h3>
          <p>We use SMS communications to deliver transactional messages including appointment reminders, service status updates, and billing confirmations. Key details:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Consent:</strong> We obtain explicit written consent before sending any SMS messages</li>
            <li><strong>Message Types:</strong> Transactional service notifications only (non-promotional)</li>
            <li><strong>Frequency:</strong> Message frequency varies based on service activity</li>
            <li><strong>Opt-Out:</strong> Reply STOP to any message to immediately unsubscribe</li>
            <li><strong>Help:</strong> Reply HELP for assistance or contact hello@cherrygrowth.com</li>
            <li><strong>Records:</strong> We store opt-in timestamps, consent records, and complete audit trails</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-medium text-black" style={{ fontFamily: "var(--font-playfair)" }}>Data Sharing</h3>
          <p>
            We share necessary data with trusted service providers (e.g., SMS platforms, wireless carriers, and cloud infrastructure) solely to deliver messages and operate our services. We do not sell personal data to third parties.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-medium text-black" style={{ fontFamily: "var(--font-playfair)" }}>Data Retention</h3>
          <p>
            We retain information for as long as needed to provide services and as required by law. Message logs, consent records, and audit trails are retained for compliance purposes. You may request deletion of your data by contacting us at hello@cherrygrowth.com.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-medium text-black" style={{ fontFamily: "var(--font-playfair)" }}>Your Rights and Choices</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Opt-Out:</strong> Reply STOP to any SMS message or contact us to opt out</li>
            <li><strong>Access:</strong> Request access to your personal data through our support team</li>
            <li><strong>Correction:</strong> Update your information by contacting support</li>
            <li><strong>Deletion:</strong> Request deletion of your data (subject to legal retention requirements)</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-medium text-black" style={{ fontFamily: "var(--font-playfair)" }}>Security</h3>
          <p>
            We use enterprise-grade security measures including encryption, access control, and secure data transmission. All data is stored on secure infrastructure.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-medium text-black" style={{ fontFamily: "var(--font-playfair)" }}>Children's Privacy</h3>
          <p>
            Our services are intended for individuals 18 years and older. We do not knowingly collect information from children under 18.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-medium text-black" style={{ fontFamily: "var(--font-playfair)" }}>International Users</h3>
          <p>
            We operate in the United States. If you access our services from other regions, your data may be transferred to and processed in the U.S.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-medium text-black" style={{ fontFamily: "var(--font-playfair)" }}>Changes to This Policy</h3>
          <p>
            We may update this policy from time to time. Material changes will be reflected here with an updated date. Continued use of our services after changes constitutes acceptance.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-medium text-black" style={{ fontFamily: "var(--font-playfair)" }}>Contact Us</h3>
          <p>
            CherryGrowth LLC<br />
            1940 Haste St, Berkeley, CA 94704 Apartment #B<br />
            Email: <a href="mailto:hello@cherrygrowth.com" className="underline decoration-black/30 underline-offset-4 hover:decoration-black transition-all">hello@cherrygrowth.com</a><br />
            Phone: (310) 907-5746
          </p>
        </section>
      </div>

      <div className="mt-32">
        <Footer />
      </div>
    </main>
  );
}
