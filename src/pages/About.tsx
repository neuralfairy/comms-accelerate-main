import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Award, TrendingUp } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Results-Driven",
      description: "We focus on measurable outcomes that directly impact your bottom line and business growth."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Client-Centric",
      description: "Your success is our success. We build long-term partnerships based on trust and results."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Innovation",
      description: "We leverage cutting-edge technology and data science to stay ahead of industry trends."
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Continuous Improvement",
      description: "We constantly refine our methodologies based on performance data and client feedback."
    }
  ];

  const stats = [
    { number: "500+", label: "Clients Served" },
    { number: "35%", label: "Average Conversion Increase" },
    { number: "10+", label: "Years of Experience" },
    { number: "95%", label: "Client Retention Rate" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6">About TechMaster60</Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Transforming Sales Through
                <span className="text-primary"> Strategic Messaging</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
                We help sales teams and agencies craft high-converting messaging strategies that drive measurable results and sustainable growth.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    To empower sales teams and agencies with data-driven messaging strategies that consistently deliver exceptional results. We believe that effective communication is the cornerstone of successful business relationships.
                  </p>
                  <p className="text-lg text-muted-foreground mb-6">
                    Since our founding, we've helped hundreds of organizations optimize their sales messaging, resulting in higher conversion rates, improved customer engagement, and increased revenue growth.
                  </p>
                  <Button 
                    size="lg"
                    onClick={() => window.open('https://salescentri.com/company/about-us', '_blank')}
                  >
                    Learn More About Our Story
                  </Button>
                </div>
                <div className="bg-gradient-hero rounded-lg p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Founded in Naperville</h3>
                  <p className="mb-4">
                    Based in the heart of Illinois, we've been serving clients across the nation with innovative messaging solutions that drive real business impact.
                  </p>
                  <p>
                    Our team combines decades of sales experience with cutting-edge technology to deliver results that exceed expectations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Core Values</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                These principles guide everything we do and shape how we serve our clients.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="text-primary mx-auto mb-4">
                      {value.icon}
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Leadership Team</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Meet the experienced professionals leading TechMaster60's mission to transform sales messaging.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">JS</span>
                  </div>
                  <CardTitle>John Smith</CardTitle>
                  <CardDescription>CEO & Founder</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    15+ years in sales strategy and message optimization. Former VP of Sales at Fortune 500 companies.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">MJ</span>
                  </div>
                  <CardTitle>Maria Johnson</CardTitle>
                  <CardDescription>VP of Strategy</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Expert in behavioral psychology and conversion optimization with 12+ years of experience.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">DW</span>
                  </div>
                  <CardTitle>David Wilson</CardTitle>
                  <CardDescription>CTO</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Technology leader with expertise in AI and data analytics, focused on messaging optimization platforms.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button 
                variant="outline"
                onClick={() => window.open('https://salescentri.com/company/about-us/leadership-team', '_blank')}
              >
                View Full Leadership Team
              </Button>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Certifications & Recognition</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our commitment to excellence is recognized by industry leaders and certification bodies.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-2xl font-bold text-primary mb-2">ISO 27001</div>
                <p className="text-sm text-muted-foreground">Security Management</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-2xl font-bold text-primary mb-2">SOC 2</div>
                <p className="text-sm text-muted-foreground">Type II Compliance</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-2xl font-bold text-primary mb-2">GDPR</div>
                <p className="text-sm text-muted-foreground">Data Protection</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-2xl font-bold text-primary mb-2">Best Places</div>
                <p className="text-sm text-muted-foreground">to Work 2024</p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button 
                variant="outline"
                onClick={() => window.open('https://salescentri.com/trust/compliance-certifications', '_blank')}
              >
                View All Certifications
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your sales messaging and drive better results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90"
                onClick={() => window.open('https://salescentri.com/get-started/book-demo', '_blank')}
              >
                Schedule a Consultation
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
                onClick={() => window.open('https://salescentri.com/contact', '_blank')}
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;