import React from 'react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  name: string;
  text: string;
  role?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export interface NavigationLink {
  label: string;
  href: string;
  action?: () => void;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string; // HTML or Markdown string
  readTime: string;
  date: string;
  category: string;
  imageUrl?: string;
}

export interface AnxietyType {
  title: string;
  shortDesc: string;
  symptoms: string[];
  icon: React.ReactNode;
}