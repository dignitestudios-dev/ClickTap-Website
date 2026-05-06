export interface NavLink {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

export interface ServiceCard {
  title: string;
  description: string;
  icon: string;
  type: "mobile" | "web" | "ai" | "integration";
}

export interface WorkflowStep {
  number: string;
  title: string;
  description: string;
  side: "left" | "right";
}

export interface StatItem {
  value: string;
  label: string;
}

export interface TechItem {
  name: string;
  logo: string;
}

export interface TestimonialCard {
  name: string;
  role: string;
  avatar: string;
  rating: number;
  title: string;
  body: string;
  date: string;
  platform: string;
}

export interface FAQItem {
  number: string;
  question: string;
  answer: string;
  isOpen?: boolean;
}

export interface WhyChooseCard {
  icon: string;
  title: string;
  description: string;
}
