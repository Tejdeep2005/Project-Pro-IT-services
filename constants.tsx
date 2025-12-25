
import { PricingPackage, ITProjectOffer } from './types';

export const WHATSAPP_NUMBER = "917674097659";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

export const PACKAGES: PricingPackage[] = [
  {
    id: 'starter',
    name: 'Essential Starter',
    price: 1500,
    features: [
      'Professional ATS Resume',
      'Personal Portfolio Website',
      'Mobile Responsive Design',
      'Contact Form Integration'
    ]
  },
  {
    id: 'professional',
    name: 'Professional Pro',
    price: 3000,
    popular: true,
    features: [
      'Professional ATS Resume',
      'Personal Portfolio Website',
      '2 End-to-End Projects for Resume',
      'Source Code & Documentation',
      'Modern UI/UX Design'
    ]
  },
  {
    id: 'elite',
    name: 'Career Elite',
    price: 5000,
    features: [
      'Professional ATS Resume',
      'Personal Portfolio Website',
      '3 High-Impact Projects for Resume',
      'Full LinkedIn Optimization',
      'Job Search Strategy session',
      'Priority Support'
    ]
  }
];

export const IT_PROJECT_OFFER: ITProjectOffer = {
  price: 5000,
  deliverables: [
    'Final Year IT Project (Source Code)',
    'Research Paper (IEEE/Scopus Indexing standards)',
    '2 Professional PPT Presentations',
    '1 Free Technical Revision',
    'Project Report & Setup Guide'
  ],
  formLink: "https://docs.google.com/forms/d/e/1FAIpQLSdfVdlzNyTgcnOJqqRYBTrxjUg-7nzNAMX2Zm0n3M2Fvb5-Aw/viewform?usp=dialog"
};
