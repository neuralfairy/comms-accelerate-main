import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, TrendingUp, Users, Zap, Star, ArrowRight } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "35% Conversion Increase",
      description: "Average improvement in sales conversion rates within 60 days"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "500+ Happy Clients",
      description: "Trusted by sales teams and agencies worldwide"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Real-Time Optimization",
      description: "AI-powered message testing and optimization"
    }
  ];

  const testimonials = [
    {
      quote: "TechMaster60 transformed our entire sales approach. Our conversion rates increased by 45% in just two months.",
      author: "Sarah Johnson",
      title: "VP of Sales",
      company: "TechStart Inc."
    },
    {
      quote: "The messaging optimization platform is incredibly intuitive. We saw immediate improvements in our client acquisition.",
      author: "Michael Chen",
      title: "Agency Owner",
      company: "Growth Partners"
    },
    {
      quote: "Best investment we've made in sales technology. The ROI was evident within the first month.",
      author: "Lisa Rodriguez",
      title: "Sales Director",
      company: "ScaleUp Solutions"
    }
  ];

  const services = [
    {
      title: "Message Optimization",
      description: "AI-powered analysis and optimization of your sales messaging for maximum impact.",
      features: ["A/B testing", "Performance analytics", "Real-time optimization"]
    },
    {
      title: "Brand Communication",
      description: "Develop consistent, compelling messaging across all customer touchpoints.",
      features: ["Unified voice", "Cross-channel consistency", "Brand alignment"]
    },
    {
      title: "Conversion Strategy",
      description: "Data-driven strategies to improve funnel conversion at every stage.",
      features: ["Lead qualification", "Close rate improvement", "ROI optimization"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-hero py-20 text-white relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-white/20 text-white border-white/30">
                #1 Messaging Strategy Platform
              </Badge>
              <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
                Transform Your Sales Messages Into
                <span className="text-orange-100"> Revenue Drivers</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
                Stop losing deals to poor messaging. Our AI-powered platform helps sales teams and agencies craft high-converting messages that consistently drive results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button 
                  size="lg" 
                  className="bg-white text-secondary hover:bg-white/90 text-lg px-8 py-3"
                  onClick={() => window.open('https://salescentri.com/get-started/free-trial', '_blank')}
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/10 text-lg px-8 py-3"
                  onClick={() => window.open('https://salescentri.com/get-started/book-demo', '_blank')}
                >
                  Book Demo
                </Button>
              </div>
              
              {/* Social Proof */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current text-orange-100" />
                  ))}
                  <span className="ml-2">4.9/5 Customer Rating</span>
                </div>
                <div className="text-sm">
                  Join 500+ companies already transforming their sales
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Bar */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="text-primary mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-6">Our Expertise</Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Messaging Strategy Services That
                <span className="text-primary"> Drive Results</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We help sales teams and agencies create, test, and optimize messaging strategies that consistently convert prospects into customers.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button 
                size="lg" 
                onClick={() => window.open('https://salescentri.com/solutions/use-case-navigator/demo', '_blank')}
              >
                See Interactive Demo
              </Button>
            </div>
          </div>
        </section>

        {/* ROI Calculator Section */}
        <section className="py-20 bg-gradient-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Calculate Your Potential ROI
              </h2>
              <p className="text-xl mb-8">
                See how much additional revenue you could generate with optimized messaging
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="bg-white/10 rounded-lg p-6">
                  <div className="text-3xl font-bold mb-2">35%</div>
                  <p className="text-white/90">Average conversion increase</p>
                </div>
                <div className="bg-white/10 rounded-lg p-6">
                  <div className="text-3xl font-bold mb-2">$50K</div>
                  <p className="text-white/90">Avg. monthly revenue boost</p>
                </div>
                <div className="bg-white/10 rounded-lg p-6">
                  <div className="text-3xl font-bold mb-2">6x</div>
                  <p className="text-white/90">ROI within first year</p>
                </div>
              </div>
              
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90"
                onClick={() => window.open('https://salescentri.com/solutions/use-case-navigator/recommendations', '_blank')}
              >
                Get Your Custom ROI Analysis
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-6">Client Success Stories</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                What Our Clients Say
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current text-primary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic">
                      "{testimonial.quote}"
                    </p>
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.title}, {testimonial.company}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Seamless Integrations
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Connect with your existing sales stack for maximum efficiency
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-semibold">Salesforce</h3>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-semibold">HubSpot</h3>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-semibold">Outreach</h3>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-semibold">SalesLoft</h3>
              </div>
            </div>

            <div className="text-center mt-8">
              <Button 
                variant="outline"
                onClick={() => window.open('https://salescentri.com/solutions/psa-suite/integrations', '_blank')}
              >
                View All Integrations
              </Button>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-secondary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Sales Messaging?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join hundreds of sales teams already using our platform to create high-converting messaging strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-3"
                onClick={() => window.open('https://salescentri.com/pricing/free-trial', '_blank')}
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 text-lg px-8 py-3"
                onClick={() => window.open('https://salescentri.com/contact/sales-inquiry', '_blank')}
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
