import {
  AboutItem,
  Achievements,
  contactInfoType,
  FAQ,
  HelpfulLink,
  NavLink,
  Security,
  SocialLinkType,
  Stats,
} from "@/types/types";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { emailIcon, locationIcon, PhoneIcon } from "../../public";

export const helpfullinks: HelpfulLink[] = [
  { id: 1, name: "Company Profile", path: "/profile" },
  { id: 2, name: "About Us", path: "/about-us" },
  { id: 3, name: "Training", path: "/training" },
  { id: 5, name: "Certification", path: "/certificate" },
  { id: 6, name: "Terms and Condition", path: "/terms-and-condition" },
  { id: 7, name: "Support Policy", path: "/support-policy" },
  { id: 8, name: "Privacy Policy", path: "/privacy-policy" },
];

export const policylinks: HelpfulLink[] = [
  { id: 1, name: "Frequently asked questions", path: "/faqs" },
  { id: 2, name: "Terms and Condition", path: "/terms-and-condition" },
  { id: 3, name: "Support Policy", path: "/support-policy" },
  { id: 4, name: "Privacy Policy", path: "/privacy-policy" },
  { id: 5, name: "Service Level Agreement", path: "/sla" },
];

export const navLinks: NavLink[] = [
  { id: 1, path: "/", text: "Home" },
  { id: 3, path: "/service", text: "Services", subMenu: true },
  { id: 2, path: "/about-us", text: "About Us", subMenu: true },
  { id: 6, path: "/clients", text: "Clients" },
  { id: 4, path: "/blogs", text: "Blog" },
  { id: 5, path: "/contact-us", text: "Contact Us" },
];

export const aboutItems: AboutItem[] = [
  { id: 1, title: "About Allround", href: "/about-allround" },
  { id: 2, title: "Mission & Vision", href: "/mission-vision" },
  { id: 3, title: "Our Team", href: "/our-team" },
];

export const stats: Stats[] = [
  { id: 1, title: "6 Years", description: "Dedicated Service" },
  { id: 2, title: "500 +", description: "Professionals Employed" },
  { id: 3, title: "36 +", description: "District Presence in" },
  { id: 4, title: "15 +", description: "Specialized Services" },
];

export const achievements: Achievements[] = [
  { id: 1, title: "Projects", value: "200", postfix: "+" },
  { id: 2, title: "Clients", value: "100", postfix: "+" },
  { id: 3, title: "Awards", value: "7", postfix: "+" },
  { id: 4, title: "Years of Experience", value: "8", postfix: "+" },
];

export const securityDetails: Security[] = [
  {
    id: 1,
    title: "HIGH SECURITY",
    description:
      "ASLSL'S provides top-tier security with cutting-edge technology and expert personnel. Trust us for unmatched protection and peace of mind.",
  },
  {
    id: 2,
    title: "TRAINED GUARDS",
    description:
      "Our trained guards are highly skilled professionals, equipped to handle any security challenge. Trust ASLSL'S for top-tier protection by elite personnel.",
  },
  {
    id: 3,
    title: "GOVT APPROVED",
    description:
      "Our services are government-approved, ensuring the highest standards of security and compliance. Trust ASLSL'S for reliable and certified protection.",
  },
  {
    id: 4,
    title: "HIGH SECURITY",
    description:
      "ASLSL'S is an award-winning company, recognized for excellence in security services. Trust us for top-tier, celebrated protection.",
  },
  {
    id: 5,
    title: "LATEST EQUIPMENTS",
    description:
      "ASLSL'S utilizes the latest equipment to provide state-of-the-art security solutions. Trust us for cutting-edge protection.",
  },
  {
    id: 6,
    title: "24/7 SUPPORT",
    description:
      "ASLSL'S offers 24/7 support to ensure your safety at all times. Trust us for round-the-clock security services.",
  },
];

export const contactInfo: contactInfoType[] = [
  { id: 1, icon: PhoneIcon, title: "Phone", info: "+88 01711 791 183" },
  {
    id: 2,
    icon: locationIcon,
    title: "Location",
    info: "Ka-25, Abdul Aziz Sharok, Jagannathpur, Vatara, Dhaka-1229 , Bangladesh",
  },
  { id: 3, icon: emailIcon, title: "Email", info: "weprotect@allroundbd.com" },
];

export const socialLinks: SocialLinkType[] = [
  { id: 1, href: "https://www.facebook.com/allroundbd2018", icon: FaFacebookF },
  { id: 2, href: "https://www.instagram.com/allroundbd", icon: FaInstagram },
  {
    id: 3,
    href: "https://www.linkedin.com/company/allroundbd",
    icon: FaLinkedinIn,
  },
  { id: 4, href: "https://x.com/allroundbd", icon: FaTwitter },
];

export const faqs: FAQ[] = [
  {
    id: "faq-1",
    question: "What services does Allround Security Service LIMITED provide?",
    answer:
      "We provide a range of security services, including security personnel services, executive protection, risk assessment, consultation on security protocols, and emergency response services.",
  },
  {
    id: "faq-2",
    question: "How can I contact support?",
    answer:
      "You can contact our support team via email at support@allroundbd.com or by calling +880 123 456 7890. Our support team is available 24/7.",
  },
  {
    id: "faq-3",
    question: "What are your service hours?",
    answer:
      "Our services are available 24 hours a day, 7 days a week, ensuring that we are always ready to meet your security needs.",
  },
  {
    id: "faq-4",
    question: "How quickly can I expect a response to my inquiry?",
    answer:
      "We aim to respond to emergency inquiries within 15 minutes and non-emergency inquiries within 1 hour.",
  },
  {
    id: "faq-5",
    question: "Do you offer training for security protocols?",
    answer:
      "Yes, we provide client training on security measures as part of our service offerings.",
  },
  {
    id: "faq-6",
    question: "How do I request security services?",
    answer:
      "To request our services, you can contact us directly via phone or email, and our team will assist you with the necessary arrangements.",
  },
];

export const hierarchyManagement = {
  level1: {
    id: "1",
    title: "Managing Director",
  },
  level2: {
    id: "2",
    title: "Director",
  },
  level3: [
    {
      id: "3",
      title: "Manager HR & Admin",
      departments: [
        { id: "3.1", name: "HR" },
        { id: "3.2", name: "Supply Chain" },
        { id: "3.3", name: "Health & Safety" },
      ],
    },
    {
      id: "4",
      title: "GM Operations",
      departments: [
        { id: "4.1", name: "Recruitment" },
        { id: "4.2", name: "Training" },
        { id: "4.3", name: "Remote Monitoring" },
        { id: "4.4", name: "Patrol Supervisor" },
        { id: "4.5", name: "Risk Management" },
      ],
    },
    {
      id: "5",
      title: "Manager Marketing",
      departments: [
        { id: "5.1", name: "Marketing" },
        { id: "5.2", name: "Client Reconciliation" },
        { id: "5.3", name: "Advertisement" },
        { id: "5.4", name: "Tendering" },
      ],
    },
    {
      id: "6",
      title: "Manager Finance",
      departments: [
        { id: "6.1", name: "Accounts" },
        { id: "6.2", name: "Purchasing" },
        { id: "6.3", name: "Payroll" },
      ],
    },
  ],
};
