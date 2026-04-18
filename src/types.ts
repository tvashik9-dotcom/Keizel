/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Persona {
  id: string;
  name: string;
  role: string;
  painPoints: string[];
  goals: string[];
  motivation: string;
  image: string;
}

export interface WireframeSection {
  id: string;
  title: string;
  purpose: string;
  elements: string[];
  conversionGoal: string;
}

export interface ContentPillar {
  title: string;
  description: string;
  format: string;
  channel: string;
}

export interface SEOPlan {
  primaryKeywords: string[];
  secondaryKeywords: string[];
  technicalChecklist: string[];
  metaStrategy: string;
}
