"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { Separator } from "@/components/ui/separator";

const socialLinks = [
  { href: "https://github.com/Sayanwebdev", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com/in/sayan-mondal-746255314", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:myself@sayan.qzz.io", icon: Mail, label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <BlurFade delay={0.1}>
          <div className="flex flex-col items-center gap-6">
            {/* Logo */}
            <Link href="#home" className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Sayan
              </span>
            </Link>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.label}</span>
                </Link>
              ))}
            </div>

            <Separator className="w-full max-w-xs" />

            {/* Copyright */}
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              Made with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> by Sayan Mondal
            </p>
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </BlurFade>
      </div>
    </footer>
  );
}
