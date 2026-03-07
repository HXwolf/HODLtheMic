
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main className="pt-20">
        <div className="container mx-auto px-6 py-16 max-w-4xl">
          <h1 className="text-4xl font-bold text-yellow-500 mb-12 text-center font-['Orbitron']">Legal Information</h1>
          
          {/* Privacy Policy Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 font-['Orbitron']">Privacy Policy</h2>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-lg">
                <strong>Effective Date:</strong> January 1, 2025
              </p>
              
              <div>
                <h3 className="text-xl font-semibold text-yellow-500 mb-3">1. Information We Collect</h3>
                <p>At HODL the Mic, we respect your privacy and are committed to protecting your personal information. We collect information you provide when you:</p>
                <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                  <li>Subscribe to our newsletter</li>
                  <li>Contact us through our website</li>
                  <li>Participate in our events or community activities</li>
                  <li>Interact with our social media channels</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-yellow-500 mb-3">2. How We Use Your Information</h3>
                <p>We use the information we collect to:</p>
                <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                  <li>Send you updates about HODL the Mic events and content</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-yellow-500 mb-3">3. Information Sharing</h3>
                <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share information with trusted partners who assist us in operating our website and conducting our business.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-yellow-500 mb-3">4. Data Security</h3>
                <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-yellow-500 mb-3">5. Your Rights</h3>
                <p>You have the right to:</p>
                <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-yellow-500 mb-3">6. Contact Us</h3>
                <p>If you have questions about this Privacy Policy, please contact us through our website's contact form or social media channels.</p>
              </div>
            </div>
          </section>

          {/* Terms of Service Section */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-8 font-['Orbitron']">Terms of Service</h2>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-lg">
                <strong>Effective Date:</strong> January 1, 2025
              </p>
              
              <div>
                <h3 className="text-xl font-semibold text-yellow-500 mb-3">1. Acceptance of Terms</h3>
                <p>By accessing and using the HODL the Mic website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-yellow-500 mb-3">2. Use License</h3>
                <p>Permission is granted to temporarily download one copy of the materials on HODL the Mic's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
                <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to reverse engineer any software contained on the website</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-yellow-500 mb-3">3. Tickets, Merchandise, or Donations</h3>
                <p>All sales are final unless otherwise specified.</p>
                <p className="mt-2">We are not responsible for issues caused by third-party platforms (such as ticketing systems or payment providers).</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-yellow-500 mb-3">4. Blockchain &amp; Educational Content Disclaimer</h3>
                <p>Content on this website, including information about blockchain, crypto, or related technologies, is provided for educational and entertainment purposes only.</p>
                <p className="mt-2">Nothing on this site should be considered financial, investment, or legal advice.</p>
                <p className="mt-2">You are solely responsible for any decisions or actions you take related to blockchain, crypto, or financial matters.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-yellow-500 mb-3">5. Disclaimer</h3>
                <p>The materials on HODL the Mic's website are provided on an 'as is' basis. HODL the Mic makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-yellow-500 mb-3">6. Limitations</h3>
                <p>In no event shall HODL the Mic or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on HODL the Mic's website, even if HODL the Mic or an authorized representative has been notified orally or in writing of the possibility of such damage.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-yellow-500 mb-3">7. Accuracy of Materials</h3>
                <p>The materials appearing on HODL the Mic's website could include technical, typographical, or photographic errors. HODL the Mic does not warrant that any of the materials on its website are accurate, complete, or current.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-yellow-500 mb-3">8. Links</h3>
                <p>HODL the Mic has not reviewed all of the sites linked to our website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by HODL the Mic of the site.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-yellow-500 mb-3">9. Modifications</h3>
                <p>HODL the Mic may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-yellow-500 mb-3">10. Governing Law</h3>
                <p>These terms and conditions are governed by and construed in accordance with the laws of the United States and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-yellow-500 mb-3">11. Contact Information</h3>
                <p>Questions about the Terms of Service should be sent to us through our website's contact form or social media channels.</p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
