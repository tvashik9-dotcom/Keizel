/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Persona, WireframeSection, ContentPillar, SEOPlan } from './types';

export const PERSONAS: Persona[] = [
  {
    id: 'p1',
    name: 'Marketing Max',
    role: 'Head of Marketing at a Series A SaaS',
    painPoints: [
      'Struggling to track multi-channel attribution',
      'High cost per acquisition',
      'Low landing page conversion rate'
    ],
    goals: [
      'Automate reporting',
      'Optimize ad spend real-time',
      'Improve funnel visibility'
    ],
    motivation: 'Wants to prove ROI to the board and scale the marketing team.',
    image: 'https://picsum.photos/seed/marketer/400/400'
  },
  {
    id: 'p2',
    name: 'Solo Sarah',
    role: 'Solopreneur / Indie Hacker',
    painPoints: [
      'Limited time for manual setup',
      'Needs affordable yet powerful tools',
      'Disconnected data sources'
    ],
    goals: [
      'All-in-one data dashboard',
      'Fast integration with existing stack',
      'Clean UI that doesn\'t require a degree to use'
    ],
    motivation: 'Efficiency is key; she needs to build her business, not manage her tools.',
    image: 'https://picsum.photos/seed/founder/400/400'
  }
];

export const WIREFRAME_SECTIONS: WireframeSection[] = [
  {
    id: 'hero',
    title: 'Hero Section',
    purpose: 'Immediate value proposition and trust building.',
    elements: [
      'H1: Bold, benefit-driven headline',
      'Sub-headline: Core value prop',
      'CTA: Primary action (e.g., Get Started Free)',
      'Social Proof: Logo cloud of trusted users'
    ],
    conversionGoal: 'Account creation or product demo request.'
  },
  {
    id: 'problem',
    title: 'The "Gap" Section',
    purpose: 'Highlight the status quo and the friction it causes.',
    elements: [
      'Visual: Messy dashboard or manual process',
      'Copy: Agitate the pain point',
      'Transition: Introducing the solution'
    ],
    conversionGoal: 'Emotional resonance and interest.'
  },
  {
    id: 'features',
    title: 'Visual Features',
    purpose: 'Show, don\'t just tell, how the product works.',
    elements: [
      'Animated product mockups',
      'Benefit-led captions',
      'Interactive toggles'
    ],
    conversionGoal: 'Product understanding.'
  },
  {
    id: 'pricing',
    title: 'Transparent Pricing',
    purpose: 'Reduce friction and qualify leads.',
    elements: [
      'Tier comparison toggle',
      'Free-tier emphasis',
      'Add-on transparency'
    ],
    conversionGoal: 'Conversion to paid or high-intent trial.'
  }
];

export const CONTENT_PILLARS: ContentPillar[] = [
  {
    title: 'Authority/Expertise',
    description: 'Deep-dive whitepapers and case studies on ROI.',
    format: 'Long-form Blog / PDF',
    channel: 'LinkedIn / SEO'
  },
  {
    title: 'Educational/How-To',
    description: 'Short tutorials showing rapid wins with the tool.',
    format: 'Short Videos / Documentation',
    channel: 'YouTube / Twitter'
  },
  {
    title: 'Community/Social Proof',
    description: 'User-generated content and testimonial highlights.',
    format: 'Social Posts / Case Study Snippets',
    channel: 'Twitter / Instagram'
  }
];

export const SEO_PLAN: SEOPlan = {
  primaryKeywords: ['SaaS marketing automation', 'marketing ROI tracker', 'growth analytics tool'],
  secondaryKeywords: ['attribution modeling software', 'Indie Hacker tools', 'marketing funnel visibility'],
  technicalChecklist: [
    'Sub-100ms LCP (Largest Contentful Paint)',
    'Schema.org SoftwareApplication markup',
    'Mobile-first responsive design',
    'Semantic HTML5 structure'
  ],
  metaStrategy: 'Focus on high CTR headlines that promise specific outcomes (e.g., "Reduce CPA by 30%").'
};
