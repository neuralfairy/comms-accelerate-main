import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, MessageSquare, Target, TrendingUp, Users, Zap } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Message Optimization",
      description: "AI-powered analysis and optimization of your sales messaging for maximum conversion rates.",
      benefits: ["Increase conversion rates by 35%", "A/B test messaging variants", "Real-time performance tracking"]
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Brand Communication",
      description: "Develop consistent, compelling brand messaging across all customer touchpoints.",
      benefits: ["Unified brand voice", "Cross-channel consistency", "Message alignment tools"]
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Conversion Strategy",
      description: "Data-driven strategies to improve your sales funnel conversion at every stage.",
      benefits: ["Higher qualified leads", "Improved close rates", "ROI optimization"]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Sales Team Training",
      description: "Comprehensive training programs to align your sales team with optimized messaging.",
      benefits: ["Team alignment", "Consistent messaging", "Performance improvement"]
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Real-Time Analytics",
      description: "Advanced analytics dashboard to track messaging performance and engagement metrics.",
      benefits: ["Live performance data", "Engagement insights", "ROI measurement"]
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "CRM Integration",
      description: "Seamless integration with popular CRM platforms for streamlined workflow.",
      benefits: ["Salesforce integration", "HubSpot compatibility", "Custom API connections"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-hero py-20 text-white">
          <div className="container mx-auto px-4 text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">
              Messaging Strategy Platform
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transform Your Sales Messaging
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              Discover powerful features that help sales teams and agencies create high-converting messaging strategies that drive results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-secondary hover:bg-white/90"
                onClick={() => window.open('https://salescentri.com/solutions/use-case-navigator/demo', '_blank')}
              >
                Interactive Demo
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
                onClick={() => window.open('https://salescentri.com/get-started/free-trial', '_blank')}
              >
                Start Free Trial
              </Button>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Powerful Features for
                <span className="text-primary"> Message Optimization</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our comprehensive platform provides everything you need to create, test, and optimize sales messaging that converts.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="text-primary mb-4">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
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
                Connect with your existing tools and workflows for maximum efficiency.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white rounded-lg p-6 shadow-md mb-4">
                  <h3 className="font-semibold text-lg mb-2">CRM Platforms</h3>
                  <p className="text-muted-foreground text-sm">
                    Salesforce, HubSpot, Pipedrive, and more
                  </p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-lg p-6 shadow-md mb-4">
                  <h3 className="font-semibold text-lg mb-2">Communication Tools</h3>
                  <p className="text-muted-foreground text-sm">
                    Slack, Microsoft Teams, Email platforms
                  </p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-lg p-6 shadow-md mb-4">
                  <h3 className="font-semibold text-lg mb-2">Analytics Platforms</h3>
                  <p className="text-muted-foreground text-sm">
                    Google Analytics, Mixpanel, Custom APIs
                  </p>
                </div>
              </div>
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
              Join thousands of sales teams already using our platform to create high-converting messaging strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90"
                onClick={() => window.open('https://salescentri.com/get-started/book-demo', '_blank')}
              >
                Book Demo
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

export default Features;