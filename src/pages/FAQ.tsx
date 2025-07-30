import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageSquare, HelpCircle, Phone, Mail } from "lucide-react";

const FAQ = () => {
  const faqCategories = [
    {
      title: "Getting Started",
      icon: <MessageSquare className="h-5 w-5" />,
      faqs: [
        {
          question: "What is messaging strategy and why do I need it?",
          answer: "Messaging strategy is the strategic approach to crafting, testing, and optimizing your sales communications to maximize conversion rates. It involves understanding your audience, developing compelling value propositions, and systematically improving your messaging based on data and feedback. Businesses need messaging strategy because generic, untested messages often fail to resonate with prospects, leading to low conversion rates and missed opportunities."
        },
        {
          question: "How quickly can I see results from message optimization?",
          answer: "Most clients see initial improvements within 2-4 weeks of implementing our messaging strategies. However, significant results typically emerge within 30-60 days as we gather data, test variations, and refine approaches. The timeline depends on factors like your current messaging baseline, target audience, and implementation consistency."
        },
        {
          question: "Do you work with both B2B and B2C companies?",
          answer: "While we specialize in B2B messaging strategy, our frameworks and methodologies can be adapted for B2C companies, especially those with longer sales cycles or higher-value offerings. Our expertise is particularly strong in SaaS, professional services, and technology sectors."
        }
      ]
    },
    {
      title: "Platform & Features",
      icon: <HelpCircle className="h-5 w-5" />,
      faqs: [
        {
          question: "What platforms and tools do you integrate with?",
          answer: "We integrate with all major CRM platforms (Salesforce, HubSpot, Pipedrive), email marketing tools (Outreach, SalesLoft, Mailchimp), and communication platforms (Slack, Microsoft Teams). We also offer custom API integrations for Enterprise clients with specific requirements."
        },
        {
          question: "Can I A/B test different messaging approaches?",
          answer: "Yes, A/B testing is a core feature of our Professional and Enterprise plans. You can test different subject lines, email templates, call scripts, and value propositions. Our platform provides statistical significance calculations and automated winner selection to ensure reliable results."
        },
        {
          question: "How do you measure messaging effectiveness?",
          answer: "We track multiple metrics including open rates, response rates, meeting booking rates, conversion rates at each funnel stage, and ultimately revenue attribution. Our analytics dashboard provides real-time performance data and identifies which messages drive the best results."
        },
        {
          question: "Is there a mobile app or is it web-based only?",
          answer: "Currently, our platform is web-based and optimized for desktop and mobile browsers. We're developing native mobile apps that will be available in Q3 2024 for iOS and Android devices."
        }
      ]
    },
    {
      title: "Pricing & Plans",
      icon: <MessageSquare className="h-5 w-5" />,
      faqs: [
        {
          question: "What's included in the free trial?",
          answer: "The 14-day free trial includes full access to our Starter plan features: message optimization tools, basic analytics, email support, and integrations with up to 3 platforms. No credit card is required to start your trial."
        },
        {
          question: "Can I change plans after signing up?",
          answer: "Yes, you can upgrade or downgrade your plan at any time. Upgrades take effect immediately with prorated billing, while downgrades take effect at your next billing cycle. We'll help ensure a smooth transition and preserve your data."
        },
        {
          question: "Do you offer discounts for annual payments?",
          answer: "Yes, we offer a 20% discount for annual subscriptions on all plans. We also provide volume discounts for large teams and multi-year commitments for Enterprise clients."
        },
        {
          question: "What happens if I exceed my plan limits?",
          answer: "We'll notify you before you reach your limits and offer options to upgrade. For temporary overages, we provide flexible add-on options. We never suspend service unexpectedly – we'll work with you to find the right solution."
        }
      ]
    },
    {
      title: "Implementation & Support",
      icon: <Phone className="h-5 w-5" />,
      faqs: [
        {
          question: "How much time does implementation require?",
          answer: "Basic setup takes 1-2 hours with our guided onboarding process. Full implementation with team training and custom configurations typically requires 1-2 weeks. Our Customer Success team provides hands-on support throughout the process."
        },
        {
          question: "Do you provide training for my team?",
          answer: "Yes, all plans include onboarding training. Professional plans include group training sessions, and Enterprise plans include on-site training options. We also provide ongoing educational webinars and a comprehensive knowledge base."
        },
        {
          question: "What kind of support do you offer?",
          answer: "Starter plans include email support with 24-hour response times. Professional plans add priority support and live chat. Enterprise clients get dedicated account managers, phone support, and custom SLAs. All plans include access to our knowledge base and community forum."
        },
        {
          question: "Can you help migrate from our current tools?",
          answer: "Yes, our team provides data migration assistance for all plans. We can import contact lists, message templates, and historical performance data from most major platforms. Enterprise clients receive dedicated migration support with minimal downtime."
        }
      ]
    },
    {
      title: "Security & Compliance",
      icon: <Mail className="h-5 w-5" />,
      faqs: [
        {
          question: "How do you protect our data and ensure privacy?",
          answer: "We're SOC 2 Type II certified and GDPR compliant. All data is encrypted in transit and at rest using industry-standard protocols. We maintain strict access controls and regular security audits. Your data is never shared with third parties without explicit consent."
        },
        {
          question: "Where is our data stored?",
          answer: "Data is stored in secure, enterprise-grade data centers in the United States with 99.9% uptime guarantees. We maintain backup data centers and disaster recovery procedures to ensure business continuity."
        },
        {
          question: "Can we get a Business Associate Agreement (BAA)?",
          answer: "Yes, we can provide BAAs for healthcare clients and other regulated industries. Our Enterprise plans include HIPAA compliance options and additional security controls as needed."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <Badge className="mb-6">Frequently Asked Questions</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get Your
              <span className="text-primary"> Questions Answered</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto">
              Find answers to common questions about our messaging strategy platform, implementation, and support.
            </p>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {faqCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-12">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="text-primary">
                      {category.icon}
                    </div>
                    <h2 className="text-2xl font-bold">{category.title}</h2>
                  </div>
                  
                  <Accordion type="single" collapsible className="space-y-4">
                    {category.faqs.map((faq, faqIndex) => (
                      <AccordionItem 
                        key={faqIndex} 
                        value={`${categoryIndex}-${faqIndex}`}
                        className="border border-border rounded-lg px-6"
                      >
                        <AccordionTrigger className="text-left text-lg font-medium">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Still Have Questions?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our team is here to help. Get in touch for personalized assistance.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="text-center">
                    <Phone className="h-8 w-8 text-primary mx-auto mb-2" />
                    <CardTitle>Schedule a Call</CardTitle>
                    <CardDescription>
                      Talk directly with our experts
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      className="w-full"
                      onClick={() => window.open('https://salescentri.com/get-started/calendly', '_blank')}
                    >
                      Book Consultation
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="text-center">
                    <MessageSquare className="h-8 w-8 text-primary mx-auto mb-2" />
                    <CardTitle>Live Chat</CardTitle>
                    <CardDescription>
                      Get instant answers online
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      className="w-full"
                      onClick={() => window.open('https://salescentri.com/contact/support-request/live-chat', '_blank')}
                    >
                      Start Chat
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="text-center">
                    <Mail className="h-8 w-8 text-primary mx-auto mb-2" />
                    <CardTitle>Email Support</CardTitle>
                    <CardDescription>
                      Send us your detailed questions
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      className="w-full"
                      onClick={() => window.open('https://salescentri.com/contact/support-request', '_blank')}
                    >
                      Email Us
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Resource Links */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Additional Resources
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Documentation</CardTitle>
                    <CardDescription>
                      Comprehensive guides and API documentation
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button 
                      variant="outline" 
                      className="w-full justify-start"
                      onClick={() => window.open('https://salescentri.com/docs/user-guide', '_blank')}
                    >
                      User Guide
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full justify-start"
                      onClick={() => window.open('https://salescentri.com/docs/api-reference', '_blank')}
                    >
                      API Reference
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Learning Resources</CardTitle>
                    <CardDescription>
                      Tutorials, webinars, and best practices
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button 
                      variant="outline" 
                      className="w-full justify-start"
                      onClick={() => window.open('https://salescentri.com/resources/tutorials-webinars', '_blank')}
                    >
                      Video Tutorials
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full justify-start"
                      onClick={() => window.open('https://salescentri.com/resources/whitepapers-ebooks', '_blank')}
                    >
                      Best Practices Guide
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Don't let questions hold you back. Start your free trial today and experience the power of optimized messaging.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90"
                onClick={() => window.open('https://salescentri.com/pricing/free-trial', '_blank')}
              >
                Start Free Trial
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
                onClick={() => window.open('https://salescentri.com/get-started/book-demo', '_blank')}
              >
                Book a Demo
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;