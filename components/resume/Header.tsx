import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Package,
  Send,
  Globe,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface SocialLink {
  platform: string;
  url: string;
}

interface PersonalInfo {
  name: string;
  title: string;
  locations?: string[];
  email?: string;
  phone?: string;
}

interface HeaderConfig {
  personal: PersonalInfo;
  social?: SocialLink[];
}

export default function Header({ config }: { config: HeaderConfig }) {
  return (
    <div className="flex justify-between items-start mb-6">
      <div className="flex-1">
        <h1 className="text-4xl font-bold mb-2">{config.personal.name}</h1>
        <p className="text-xl text-muted-foreground mb-2">
          {config.personal.title}
        </p>
        {config.personal.locations && config.personal.locations.length > 0 && (
          <div className="flex space-x-4 mb-2">
            {config.personal.locations.map(
              (location: string, index: number) => (
                <span key={index} className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {location}
                </span>
              )
            )}
          </div>
        )}
        <div className="flex flex-wrap space-x-4 mb-2">
          {config.personal.email && (
            <a
              href={`mailto:${config.personal.email}`}
              className="flex items-center mb-2 sm:mb-0"
            >
              <Mail className="w-4 h-4 mr-1" />
              {config.personal.email}
            </a>
          )}

          {config.personal.phone && (
            <a
              href={`https://wa.me/${config.personal.phone.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex"
            >
              <Phone className="w-4 h-4 mr-1" />
              {config.personal.phone}
            </a>
          )}
        </div>

        {config.social && config.social.length > 0 && (
          <div className="flex space-x-2">
            {config.social.map((link: SocialLink, index: number) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border rounded-md hover:bg-accent transition-colors"
              >
                {link.platform === "LinkedIn" && (
                  <Linkedin className="h-4 w-4" />
                )}
                {link.platform === "GitHub" && <Github className="h-4 w-4" />}
                {link.platform === "NPM" && <Package className="h-4 w-4" />}
                {link.platform === "Telegram" && <Send className="h-4 w-4" />}
                {link.platform === "Website" && <Globe className="h-4 w-4" />}
                <span className="sr-only">{link.platform}</span>
              </a>
            ))}
          </div>
        )}
      </div>
      <Avatar className="w-32 h-32 overflow-hidden">
        <AvatarImage
          src="images/avatar/avatar.png"
          alt={config.personal.name}
          className="object-cover hover:scale-110 transition-transform duration-300"
        />
        <AvatarFallback>{config.personal.name.charAt(0)}</AvatarFallback>
      </Avatar>
    </div>
  );
}
