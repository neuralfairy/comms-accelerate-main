import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Mail, ShieldCheck } from "lucide-react";

const PrivacyPolicy = () => {
  const sections = [
    {
      id: "scope",
      title: "1. Scope",
      content: (
        <>
          <p>
            This Privacy Policy describes how TechMaster60 Solutions ("TechMaster60," "we," "us," or "our") handles information in connection with this website and the messaging strategy services described here. It applies to visitors who browse this website, people who contact us, and users who learn about or use our sales messaging, analytics, and integration services.
          </p>
          <p>
            This policy does not replace the privacy terms that may apply when you use a separate platform, CRM, communication tool, or external sales service linked from this website. Those providers handle information under their own privacy practices and terms.
          </p>
        </>
      ),
    },
    {
      id: "information",
      title: "2. Information We May Handle",
      content: (
        <>
          <p>Depending on how you interact with TechMaster60, information may include:</p>
          <ul>
            <li><strong>Contact information:</strong> information you choose to provide when contacting us by email or using a linked support, demo, quote, partnership, or booking service.</li>
            <li><strong>Service information:</strong> details needed to discuss messaging strategy, sales team training, CRM integration requirements, and customer conversion goals.</li>
            <li><strong>Messaging and performance information:</strong> subject lines, message variants, campaign feedback, open and response information, meeting-booking activity, conversion activity, and related revenue attribution when these are provided through or processed by our services.</li>
            <li><strong>Technical and usage information:</strong> limited information normally available when a website or service is used, such as browser or device details and the pages or features accessed.</li>
          </ul>
          <p>
            The content of this website does not provide a custom account registration form or in-site message submission form. If you follow an external link, the third-party service may request additional information.
          </p>
        </>
      ),
    },
    {
      id: "sources",
      title: "3. How Information Is Obtained",
      content: (
        <>
          <p>We may receive information directly from you, through a service you authorize or connect, or as part of providing and improving TechMaster60 services.</p>
          <ul>
            <li>When you send us an email or initiate a phone, chat, demo, trial, quote, consultation, or partnership conversation.</li>
            <li>When you connect or integrate supported tools, including CRM platforms such as Salesforce, HubSpot, or Pipedrive and communication tools such as email, Slack, or Microsoft Teams.</li>
            <li>When messaging performance, engagement, and conversion data are used to produce analytics, A/B testing results, performance reports, or revenue attribution.</li>
            <li>When you submit information to an external Sales Intelligence Platform service linked on this website.</li>
          </ul>
        </>
      ),
    },
    {
      id: "use",
      title: "4. How We Use Information",
      content: (
        <>
          <p>We use information only as reasonably necessary to operate and improve the TechMaster60 services described on this website, including to:</p>
          <ul>
            <li>Respond to requests, provide support, and schedule demonstrations or consultations.</li>
            <li>Design, test, deliver, and optimize sales messaging and brand communications.</li>
            <li>Measure open rates, response rates, meeting-booking activity, conversion activity, and revenue attribution.</li>
            <li>Provide analytics dashboards, performance reporting, team training, and CRM or communication integrations.</li>
            <li>Protect the website and services, troubleshoot issues, and maintain reliable operations.</li>
            <li>Meet applicable legal, regulatory, contractual, and recordkeeping obligations.</li>
          </ul>
        </>
      ),
    },
    {
      id: "sharing",
      title: "5. Sharing and Service Providers",
      content: (
        <>
          <p>
            We do not describe a general sale of personal information in this policy. Information may be shared only as needed for legitimate service purposes, such as supporting sales inquiries, hosting or operating linked services, providing customer integrations, or complying with law.
          </p>
          <p>
            This website links to the Sales Intelligence Platform at SalesCentri for demos, trials, support, data enrichment, voice AI, PSA services, careers, resources, and related inquiries. When you use those links or integrations, the receiving service may collect and process information under its own policies. CRM, email, communication, and analytics providers that you connect may similarly process account or campaign information.
          </p>
        </>
      ),
    },
    {
      id: "retention",
      title: "6. Data Retention",
      content: (
        <p>
          We retain information for as long as it is reasonably needed for the purpose for which it was collected, including ongoing client service, support, reporting, security, dispute resolution, and applicable legal requirements. Retention periods can vary based on the information type and the requirements of the relevant service or integration. We may delete or de-identify information when it is no longer needed.
        </p>
      ),
    },
    {
      id: "security",
      title: "7. Security",
      content: (
        <p>
          TechMaster60 uses reasonable administrative, technical, and organizational measures intended to protect information against unauthorized access, loss, misuse, or alteration. No internet transmission or storage system can be guaranteed completely secure. You should use appropriate safeguards, including strong account credentials, when using connected third-party services.
        </p>
      ),
    },
    {
      id: "choices",
      title: "8. Your Choices and Rights",
      content: (
        <>
          <p>You may request access to, correction of, deletion of, or a review of information handled by TechMaster60, subject to applicable law and necessary exceptions.</p>
          <p>
            You may also choose not to provide optional information, discontinue use of a service, or disconnect an authorized integration. Disconnecting an integration may limit or stop related features. You may unsubscribe from communications when an unsubscribe option is provided by the applicable service.
          </p>
          <p>
            Your rights may depend on your location and the role of the person or organization that provided the information. We will verify requests where reasonably necessary and respond as required by applicable law.
          </p>
        </>
      ),
    },
    {
      id: "children",
      title: "9. Children's Privacy",
      content: (
        <p>
          TechMaster60 services are intended for business and professional use. We do not knowingly collect personal information directly from children through this website. If you believe a child's personal information has been submitted without appropriate authorization, contact us using the details below so we can review it.
        </p>
      ),
    },
    {
      id: "changes",
      title: "10. Changes to This Policy",
      content: (
        <p>
          We may update this Privacy Policy as our website, services, integrations, or legal obligations change. The effective date above indicates when this version applies. Material changes will be reflected by updating this page.
        </p>
      ),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="bg-gradient-hero py-16 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <Badge className="mb-6 bg-white/20 text-white border-white/30">
                <ShieldCheck className="mr-2 h-4 w-4" />
                Privacy
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-5">Privacy Policy</h1>
              <p className="text-lg text-white/90">
                How TechMaster60 handles information for our messaging strategy, analytics, integrations, and support services.
              </p>
              <p className="mt-4 text-sm text-white/75">Effective November 26, 2026</p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-[220px_minmax(0,760px)] gap-10 lg:justify-center">
              <aside className="hidden lg:block">
                <nav className="sticky top-24 rounded-lg border border-border p-5" aria-label="Privacy policy sections">
                  <p className="font-semibold mb-4">On this page</p>
                  <ul className="space-y-3 text-sm">
                    {sections.map((section) => (
                      <li key={section.id}>
                        <a href={`#${section.id}`} className="text-muted-foreground hover:text-primary transition-colors">
                          {section.title}
                        </a>
                      </li>
                    ))}
                    <li>
                      <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                        11. Contact Us
                      </a>
                    </li>
                  </ul>
                </nav>
              </aside>

              <article className="max-w-none">
                {sections.map((section) => (
                  <section key={section.id} id={section.id} className="scroll-mt-24 mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold mb-5">{section.title}</h2>
                    <div className="space-y-4 text-base leading-7 text-muted-foreground [&_p]:mb-0 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_strong]:text-foreground">
                      {section.content}
                    </div>
                  </section>
                ))}

                <section id="contact" className="scroll-mt-24 mb-4 rounded-lg border border-border bg-muted/50 p-6 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">11. Contact Us</h2>
                  <p className="text-muted-foreground leading-7 mb-5">
                    For privacy questions or requests, contact TechMaster60 using the email address listed on our website.
                  </p>
                  <a
                    href="mailto:hello@techmaster60.com"
                    className="inline-flex items-center font-semibold text-primary hover:underline"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    hello@techmaster60.com
                  </a>
                </section>
              </article>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
