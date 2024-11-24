import { StaticImageData } from "next/image";
import { FC, SVGProps } from "react";

export interface SectionTitleProps {
  topTitle?: string;
  description?: string;
  title?: string;
  align?: string;
}

export interface NavLink {
  id: number;
  path: string;
  text: string;
  subMenu?: boolean;
}

export interface CustomLinkProps {
  path: string;
  children: React.ReactNode;
}

export interface Service {
  id: number;
  title: string;
  shortDescription?: string;
  slug: string;
  status: string;
  priority: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  attachment: {
    id: number;
    name: string;
    fileType: string;
    path: string;
    mimetype: string;
    size: number;
    createdAt: string;
    updatedAt: string;
  };
  seoMeta?: string | null;
}

export interface Client {
  id: number;
  name: string;
  address: string;
  isShowTestimonial: boolean;
  ceoName: string;
  message: string;
  createdAt: string;
  updatedAt: string;
  attachment: Attachment;
}

interface Attachment {
  id: number;
  name: string;
  fileType: string;
  path: string;
  mimetype: string;
  size: number;
  createdAt: string;
  updatedAt: string;
}

export interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  tac: boolean;
}

export interface WorkingProcess {
  id: number;
  title: string;
  description: string;
}

export interface Stats {
  id: number;
  title: string;
  description: string;
}

export interface Achievements {
  id: number;
  title: string;
  value: string;
  postfix: string;
}

export interface TestimonialProps {
  image: StaticImageData | string;
  feedback: string;
  name: string;
  title: string;
}

export interface Testimonial {
  id: number;
  name: string;
  address: string;
  isShowTestimonial: number;
  ceoName: string;
  message: string;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  attachment: {
    id: number;
    name: string;
    fileType: string;
    path: string;
    mimetype: string;
    size: number; // File size in bytes
    createdAt: string; // ISO date string
    updatedAt: string; // ISO date string
  };
}

export interface Serve {
  id: number;
  name: string;
}

export interface Security {
  id: number;
  title: string;
  description: string;
}

export interface Client {
  id: number;
  imageUrl: StaticImageData | string;
}

export type predefinedServicesType = {
  id: number;
  value: string;
  label: string;
  disabled: boolean;
};

export type contactInfoType = {
  id: number;
  icon: StaticImageData;
  title: string;
  info: string;
};

export type SocialLinkType = {
  id: number;
  href: string;
  icon: FC<SVGProps<SVGSVGElement>>;
};

export interface HelpfulLink {
  id: number;
  name: string;
  path: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface Author {
  id: string;
  firstName: string;
  lastName: string;
  avatar?: StaticImageData | string;
}

export interface Blog {
  id: string;
  title: string;
  author: string;
  slug: string;
  shortDescription: string;
  content: string;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  attachment: {
    id: number;
    name: string;
    fileType: string;
    path: string;
    mimetype: string;
    size: number; // File size in bytes
    createdAt: string; // ISO date string
    updatedAt: string; // ISO date string
  };
  seoMeta: {
    title?: string;
    description?: string;
    keywords?: string;
  } | null;
}

interface Section {
  title: string;
  content: string;
  link?: string;
  subSections?: SubSection[];
}

interface SubSection {
  title: string;
  content: string;
}

export interface SingleService {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  status: string;
  priority: number;
  content: string; // HTML content as a string
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string

  attachment: {
    id: number;
    name: string;
    fileType: string;
    path?: string;
    mimetype: string;
    size: number;
    createdAt: string;
    updatedAt: string;
  } | null;
  seoMeta: Record<string, unknown> | null;
}
export interface SingleBlog {
  id: string;
  title: string;
  author: string;
  slug: string;
  shortDescription: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  attachment: {
    id: number;
    name: string;
    fileType: string;
    path?: string;
    mimetype: string;
    size: number;
    createdAt: string;
    updatedAt: string;
  } | null;
  seoMeta: Record<string, unknown> | null;
}

export interface GallaryImageData {
  id: number;
  title: string;
  name: string;
  path: string;
  createdAt: string;
  updatedAt: string;
}

export interface CertificateType {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  attachment: {
    id: number;
    name: string;
    fileType: string;
    path: string;
    mimetype: string;
    size: number;
    createdAt: string;
    updatedAt: string;
  };
}
export interface AboutItem {
  id: number;
  title: string;
  href: string;
}
