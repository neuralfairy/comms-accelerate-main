import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$99",
      period: "per month",
      description: "Perfect for small sales teams getting started with message optimization",
      features: [
        "Up to 5 team members",
        "Basic message optimization",
        "Email support",
        "Monthly performance reports",
        "Standard integrations",
        "Basic analytics dashboard"
      ],
      cta: "Start Free Trial",
      ctaLink: "https://salescentri.com/pricing/free-trial"
    },
    {
      name: "Professional",
      price: "$299",
      period: "per month",
      description: "Advanced features for growing agencies and sales teams",
      features: [
        "Up to 25 team members",
        "Advanced message optimization",
        "A/B testing capabilities",
        "Priority support",
        "Weekly performance reports",
        "Advanced integrations",
        "Custom analytics dashboard",
        "Team training sessions"
      ],
      popular: true,
      cta: "Book Demo",
      ctaLink: "https://salescentri.com/get-started/book-demo"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "Tailored solutions for large organizations with custom requirements",
      features: [
        "Unlimited team members",
        "Custom message optimization",
        "Advanced A/B testing",
        "Dedicated account manager",
        "Real-time reporting",
        "Custom integrations",
        "White-label options",
        "On-site training",
        "API access",
        "Custom SLA"
      ],
      cta: "Contact Sales",
      ctaLink: "https://salescentri.com/contact/sales-inquiry"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <Badge className="mb-6">Transparent Pricing</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Choose Your
              <span className="text-primary"> Success Plan</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto">
              Scale your messaging strategy with plans designed for every stage of your business growth.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {plans.map((plan, index) => (
                <Card key={index} className={`relative ${plan.popular ? 'border-primary shadow-lg scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground px-4 py-1">
                        <Star className="h-3 w-3 mr-1" />
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-8">
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground ml-2">{plan.period}</span>
                    </div>
                    <CardDescription className="mt-4">
                      {plan.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-3">
                          <Check className="h-5 w-5 text-primary" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                      variant={plan.popular ? 'default' : 'outline'}
                      onClick={() => window.open(plan.ctaLink, '_blank')}
                    >
                      {plan.cta}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ROI Calculator Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Calculate Your ROI
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                See how much revenue you could generate with optimized messaging strategies.
              </p>
              
              <Card className="p-8">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">35%</div>
                    <p className="text-muted-foreground">Average conversion increase</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">$50K</div>
                    <p className="text-muted-foreground">Average monthly revenue increase</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">6x</div>
                    <p className="text-muted-foreground">Average ROI within first year</p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Button 
                    size="lg"
                    onClick={() => window.open('https://salescentri.com/solutions/use-case-navigator/recommendations', '_blank')}
                  >
                    Get Custom ROI Analysis
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">What's included in the free trial?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      The free trial includes full access to our Starter plan features for 14 days, 
                      including message optimization tools, basic analytics, and email support.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Can I upgrade or downgrade my plan?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Yes, you can change your plan at any time. Upgrades take effect immediately, 
                      while downgrades take effect at the next billing cycle.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Do you offer custom integrations?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Enterprise customers can request custom integrations and API access. 
                      Contact our sales team to discuss your specific requirements.
                    </p>
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
              Join hundreds of sales teams already improving their conversion rates with our platform.
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

export default Pricing;