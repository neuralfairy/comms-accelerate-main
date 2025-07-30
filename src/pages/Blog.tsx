import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock, User, TrendingUp, MessageSquare, Target } from "lucide-react";

const Blog = () => {
  const featuredPost = {
    title: "The Complete Guide to B2B Sales Messaging That Converts",
    excerpt: "Learn the proven strategies and frameworks for crafting sales messages that resonate with your target audience and drive results.",
    category: "Strategy",
    readTime: "8 min read",
    date: "March 15, 2024",
    author: "John Smith",
    image: "bg-gradient-primary"
  };

  const blogPosts = [
    {
      title: "5 Data-Driven Ways to Optimize Your Sales Outreach",
      excerpt: "Discover actionable insights from analyzing thousands of successful sales conversations.",
      category: "Analytics",
      readTime: "6 min read",
      date: "March 12, 2024",
      author: "Maria Johnson",
      image: "bg-gradient-secondary"
    },
    {
      title: "How AI is Transforming Sales Messaging in 2024",
      excerpt: "Explore the latest AI tools and techniques that are revolutionizing how sales teams communicate.",
      category: "Technology",
      readTime: "7 min read",
      date: "March 10, 2024",
      author: "David Wilson",
      image: "bg-gradient-primary"
    },
    {
      title: "Case Study: 45% Conversion Increase with Message Optimization",
      excerpt: "See how one agency improved their client acquisition rate through strategic messaging changes.",
      category: "Case Study",
      readTime: "5 min read",
      date: "March 8, 2024",
      author: "Sarah Chen",
      image: "bg-gradient-secondary"
    },
    {
      title: "The Psychology Behind High-Converting Sales Messages",
      excerpt: "Understanding buyer psychology is key to crafting messages that truly connect and convert.",
      category: "Psychology",
      readTime: "9 min read",
      date: "March 5, 2024",
      author: "Michael Brown",
      image: "bg-gradient-primary"
    },
    {
      title: "Building a Scalable Sales Messaging Framework",
      excerpt: "Create systems and processes that ensure consistent, effective messaging across your entire team.",
      category: "Framework",
      readTime: "10 min read",
      date: "March 3, 2024",
      author: "Lisa Anderson",
      image: "bg-gradient-secondary"
    },
    {
      title: "Common Sales Messaging Mistakes and How to Avoid Them",
      excerpt: "Learn from the most frequent messaging errors that sabotage sales success.",
      category: "Best Practices",
      readTime: "6 min read",
      date: "March 1, 2024",
      author: "Robert Taylor",
      image: "bg-gradient-primary"
    }
  ];

  const categories = [
    { name: "All Posts", count: 24, icon: <MessageSquare className="h-4 w-4" /> },
    { name: "Strategy", count: 8, icon: <Target className="h-4 w-4" /> },
    { name: "Analytics", count: 6, icon: <TrendingUp className="h-4 w-4" /> },
    { name: "Case Studies", count: 5, icon: <User className="h-4 w-4" /> },
    { name: "Technology", count: 3, icon: <MessageSquare className="h-4 w-4" /> },
    { name: "Best Practices", count: 2, icon: <Target className="h-4 w-4" /> }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <Badge className="mb-6">TechMaster60 Blog</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Sales Messaging
              <span className="text-primary"> Insights & Strategies</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto">
              Stay ahead with expert insights, proven strategies, and actionable tips for creating high-converting sales messages.
            </p>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Badge className="mb-4">Featured Article</Badge>
              <Card className="overflow-hidden">
                <div className="grid md:grid-cols-2">
                  <div className={`${featuredPost.image} p-8 flex items-center justify-center`}>
                    <div className="text-white text-center">
                      <MessageSquare className="h-16 w-16 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold">Featured Article</h3>
                    </div>
                  </div>
                  <div className="p-8">
                    <Badge className="mb-4">{featuredPost.category}</Badge>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                      {featuredPost.title}
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <CalendarDays className="h-4 w-4" />
                        <span>{featuredPost.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    <Button>Read Full Article</Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Categories Sidebar */}
              <div className="lg:col-span-1">
                <Card>
                  <CardHeader>
                    <CardTitle>Categories</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {categories.map((category, index) => (
                      <button
                        key={index}
                        className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-muted transition-colors text-left"
                      >
                        <div className="flex items-center space-x-2">
                          {category.icon}
                          <span>{category.name}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {category.count}
                        </span>
                      </button>
                    ))}
                  </CardContent>
                </Card>

                {/* Newsletter Signup */}
                <Card className="mt-8">
                  <CardHeader>
                    <CardTitle>Stay Updated</CardTitle>
                    <CardDescription>
                      Get the latest insights delivered to your inbox
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      className="w-full"
                      onClick={() => window.open('https://salescentri.com/resources/whitepapers-ebooks', '_blank')}
                    >
                      Subscribe to Newsletter
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Blog Posts */}
              <div className="lg:col-span-3">
                <div className="grid md:grid-cols-2 gap-8">
                  {blogPosts.map((post, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <div className={`${post.image} h-48 rounded-t-lg flex items-center justify-center`}>
                        <MessageSquare className="h-12 w-12 text-white" />
                      </div>
                      <CardHeader>
                        <Badge className="w-fit">{post.category}</Badge>
                        <CardTitle className="text-xl">{post.title}</CardTitle>
                        <CardDescription>{post.excerpt}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center space-x-1">
                            <User className="h-4 w-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">{post.date}</span>
                          <Button variant="outline" size="sm">
                            Read More
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Load More */}
                <div className="text-center mt-12">
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => window.open('https://salescentri.com/resources/case-studies', '_blank')}
                  >
                    Load More Articles
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Additional Resources
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Explore our comprehensive library of sales messaging resources and tools.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Case Studies</CardTitle>
                  <CardDescription>
                    Real results from our client success stories
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    className="w-full"
                    onClick={() => window.open('https://salescentri.com/resources/case-studies', '_blank')}
                  >
                    View Case Studies
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Whitepapers & eBooks</CardTitle>
                  <CardDescription>
                    In-depth guides and industry reports
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    className="w-full"
                    onClick={() => window.open('https://salescentri.com/resources/whitepapers-ebooks', '_blank')}
                  >
                    Download Resources
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Tutorials & Webinars</CardTitle>
                  <CardDescription>
                    Learn from our experts with video content
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    className="w-full"
                    onClick={() => window.open('https://salescentri.com/resources/tutorials-webinars', '_blank')}
                  >
                    Watch Tutorials
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
              Ready to Apply These Insights?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Start implementing proven messaging strategies with our platform and see immediate results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90"
                onClick={() => window.open('https://salescentri.com/get-started/book-demo', '_blank')}
              >
                Book a Demo
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

export default Blog;