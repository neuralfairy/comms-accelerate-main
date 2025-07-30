import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <span className="font-bold text-xl">TechMaster60</span>
            </div>
            <p className="text-sm text-secondary-foreground/80">
              Crafting high-converting messaging strategies for sales teams and agencies.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Naperville, IL</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>hello@techmaster60.com</span>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Solutions</h3>
            <div className="space-y-2 text-sm">
              <Link to="/features" className="block hover:text-primary transition-colors">
                Messaging Strategy
              </Link>
              <a 
                href="https://salescentri.com/solutions/psa-suite" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block hover:text-primary transition-colors"
              >
                PSA Suite
              </a>
              <a 
                href="https://salescentri.com/platforms/lead-management/voice-ai-agent" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block hover:text-primary transition-colors"
              >
                Voice AI Agent
              </a>
              <a 
                href="https://salescentri.com/services/data-enrichment" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block hover:text-primary transition-colors"
              >
                Data Enrichment
              </a>
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Resources</h3>
            <div className="space-y-2 text-sm">
              <Link to="/blog" className="block hover:text-primary transition-colors">
                Blog
              </Link>
              <a 
                href="https://salescentri.com/resources/case-studies" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block hover:text-primary transition-colors"
              >
                Case Studies
              </a>
              <a 
                href="https://salescentri.com/resources/whitepapers-ebooks" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block hover:text-primary transition-colors"
              >
                Whitepapers
              </a>
              <Link to="/faq" className="block hover:text-primary transition-colors">
                FAQ
              </Link>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Company</h3>
            <div className="space-y-2 text-sm">
              <Link to="/about" className="block hover:text-primary transition-colors">
                About Us
              </Link>
              <a 
                href="https://salescentri.com/company/careers" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block hover:text-primary transition-colors"
              >
                Careers
              </a>
              <Link to="/contact" className="block hover:text-primary transition-colors">
                Contact
              </Link>
              <a 
                href="https://salescentri.com/trust/security-privacy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block hover:text-primary transition-colors"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-secondary-foreground/60">
            © 2024 TechMaster60 Solutions. All rights reserved.
          </div>
          <div className="text-sm text-secondary-foreground/60 mt-4 md:mt-0">
            <a 
              href="https://salescentri.com?utm_source=TechMaster60.com&utm_medium=footer&utm_campaign=partner_network" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Powered by Sales Intelligence Platform
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;