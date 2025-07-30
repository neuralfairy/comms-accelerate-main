import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Clock, MessageSquare, Calendar, Users } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone Support",
      description: "Speak directly with our team",
      contact: "(555) 123-4567",
      action: "Call Now",
      link: "tel:+15551234567"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Support",
      description: "Get detailed assistance via email",
      contact: "hello@techmaster60.com",
      action: "Send Email",
      link: "mailto:hello@techmaster60.com"
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Live Chat",
      description: "Instant support during business hours",
      contact: "Available 9 AM - 6 PM CT",
      action: "Start Chat",
      link: "https://salescentri.com/contact/support-request/live-chat"
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Schedule a Call",
      description: "Book a time that works for you",
      contact: "15-minute consultation",
      action: "Book Now",
      link: "https://salescentri.com/get-started/calendly"
    }
  ];

  const salesOptions = [
    {
      title: "Book a Demo",
      description: "See our platform in action with a personalized demonstration",
      link: "https://salescentri.com/get-started/book-demo",
      cta: "Schedule Demo"
    },
    {
      title: "Request Quote",
      description: "Get custom pricing for your specific business requirements",
      link: "https://salescentri.com/contact/sales-inquiry/request-quote",
      cta: "Get Quote"
    },
    {
      title: "Partner Inquiry",
      description: "Explore partnership opportunities with TechMaster60",
      link: "https://salescentri.com/contact/partnerships/partner-inquiry",
      cta: "Partner With Us"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <Badge className="mb-6">Get in Touch</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              We're Here to
              <span className="text-primary"> Help You Succeed</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto">
              Have questions about our messaging strategy services? Ready to get started? Our team is standing by to help.
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Multiple Ways to Reach Us
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Choose the contact method that works best for you. We're committed to responding quickly and thoroughly.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactMethods.map((method, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="text-primary mx-auto mb-4">
                      {method.icon}
                    </div>
                    <CardTitle className="text-lg">{method.title}</CardTitle>
                    <CardDescription>{method.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="font-medium">{method.contact}</p>
                    <Button 
                      className="w-full"
                      onClick={() => window.open(method.link, '_blank')}
                    >
                      {method.action}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Sales & Partnerships */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Sales & Partnership Inquiries
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Ready to explore how we can help your business? We offer several ways to get started.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {salesOptions.map((option, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-xl">{option.title}</CardTitle>
                    <CardDescription className="text-base">
                      {option.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      className="w-full"
                      onClick={() => window.open(option.link, '_blank')}
                    >
                      {option.cta}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Office Information */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Our Naperville Office
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">Address</h3>
                        <p className="text-muted-foreground">
                          123 Business Drive<br />
                          Naperville, IL 60563<br />
                          United States
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <Clock className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">Business Hours</h3>
                        <div className="text-muted-foreground space-y-1">
                          <p>Monday - Friday: 9:00 AM - 6:00 PM CT</p>
                          <p>Saturday: 10:00 AM - 2:00 PM CT</p>
                          <p>Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <Users className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">In-Person Meetings</h3>
                        <p className="text-muted-foreground">
                          We welcome in-person consultations by appointment. 
                          Contact us to schedule your visit.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <Button 
                      size="lg"
                      onClick={() => window.open('https://salescentri.com/get-started/calendly', '_blank')}
                    >
                      Schedule Office Visit
                    </Button>
                  </div>
                </div>
                
                <div className="bg-gray-200 rounded-lg aspect-square flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                    <p className="text-lg font-semibold">Interactive Map</p>
                    <p className="text-muted-foreground">
                      Located in the heart of Naperville's business district
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support Options */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Customer Support
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Existing customers can access dedicated support channels for technical assistance and account management.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="text-center">
                <CardHeader>
                  <CardTitle>Submit a Ticket</CardTitle>
                  <CardDescription>
                    Create a support ticket for detailed assistance
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    className="w-full"
                    onClick={() => window.open('https://salescentri.com/contact/support-request/submit-ticket', '_blank')}
                  >
                    Submit Ticket
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <CardTitle>Customer Portal</CardTitle>
                  <CardDescription>
                    Access your account and manage your services
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    className="w-full"
                    onClick={() => window.open('https://salescentri.com/login/customer-portal', '_blank')}
                  >
                    Login to Portal
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <CardTitle>Integration Support</CardTitle>
                  <CardDescription>
                    Get help with platform integrations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    className="w-full"
                    onClick={() => window.open('https://salescentri.com/contact/partnerships/integration-requests', '_blank')}
                  >
                    Request Integration
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Messaging?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Don't wait to start improving your sales results. Get in touch today and let's discuss your messaging strategy needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90"
                onClick={() => window.open('https://salescentri.com/get-started/book-demo', '_blank')}
              >
                Book Your Demo
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
                onClick={() => window.open('https://salescentri.com/pricing/free-trial', '_blank')}
              >
                Start Free Trial
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;