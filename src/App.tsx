/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Users, 
  Layout, 
  FileText, 
  Search, 
  Rocket,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Target,
  ExternalLink,
  BarChart3
} from 'lucide-react';
import { PERSONAS, WIREFRAME_SECTIONS, CONTENT_PILLARS, SEO_PLAN } from './constants';

export default function App() {
  return (
    <div className="min-h-screen p-6 md:p-8 flex flex-col items-center">
      {/* Header */}
      <header className="w-full max-w-7xl mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-bento-text">SaaS Launch Framework v1.0</h1>
          <p className="text-bento-dim text-sm mt-1">Comprehensive execution plan for high-converting product entries.</p>
        </div>
        <div className="status-badge bg-bento-accent/10 border border-bento-accent text-bento-accent px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
          Strategy Phase: Active
        </div>
      </header>

      {/* Bento Grid */}
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-12 gap-4 md:grid-rows-[repeat(10,minmax(0,1fr))] min-h-[1000px] md:h-[800px]">
        {/* Personas: grid-area: 1 / 1 / 6 / 5 */}
        <div className="md:col-span-4 md:row-span-5 bento-card personas">
          <div className="card-label">User Personas</div>
          <div className="card-title">Target Segments</div>
          <div className="flex-1 overflow-auto custom-scrollbar pr-2">
            <div className="space-y-3 mt-2">
              {PERSONAS.map(p => (
                <div key={p.id} className="bg-white/5 border border-bento-border p-3 rounded-xl">
                  <span className="block text-sm font-semibold text-bento-text">{p.name}</span>
                  <span className="text-[11px] text-bento-accent font-medium uppercase tracking-wider">{p.role}</span>
                  <p className="text-[12px] text-bento-dim mt-1 line-clamp-2">{p.motivation}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Wireframing: grid-area: 1 / 5 / 5 / 9 */}
        <div className="md:col-span-4 md:row-span-4 bento-card wireframing">
          <div className="card-label">Wireframing</div>
          <div className="card-title">Core Architecture</div>
          <ul className="space-y-2 mt-2">
            {WIREFRAME_SECTIONS.slice(0, 4).map(s => (
              <li key={s.id} className="flex items-center gap-3 text-[13px] text-bento-dim">
                <div className="w-1.5 h-1.5 bg-bento-accent rounded-full shrink-0" />
                {s.title}
              </li>
            ))}
          </ul>
          <div className="mt-auto pt-4 flex items-center justify-between text-[11px] font-bold text-bento-dim/50 uppercase tracking-widest">
            <span>Visual Hierarchy First</span>
            <Layout className="w-4 h-4" />
          </div>
        </div>

        {/* SEO: grid-area: 1 / 9 / 7 / 13 */}
        <div className="md:col-span-4 md:row-span-6 bento-card seo">
          <div className="card-label">SEO Strategy</div>
          <div className="card-title">Growth & Visibility</div>
          <p className="card-content mt-1">Focus on <span className="text-bento-text font-semibold">Long-tail keywords</span> and commercial intent.</p>
          
          <div className="flex flex-wrap gap-2 mt-4">
            {SEO_PLAN.primaryKeywords.map(k => (
              <div key={k} className="bg-bento-bg border border-bento-border px-3 py-1 rounded-lg text-[11px] text-bento-dim">
                {k}
              </div>
            ))}
          </div>

          <div className="mt-6 space-y-2">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-bento-dim mb-2">Technical Vitals</h4>
            {SEO_PLAN.technicalChecklist.map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-[11px] text-bento-dim">
                <CheckCircle2 className="w-3 h-3 text-green-500 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-bento-bg/50 rounded-xl border border-bento-border border-dashed">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-bento-dim mb-2 flex items-center gap-2">
              <AlertCircle className="w-3 h-3 text-bento-accent" /> Growth Hack
            </h4>
            <p className="text-[12px] text-bento-dim leading-relaxed">
              Build high-authority backlinks on software discovery hubs and industry news nodes.
            </p>
          </div>
        </div>

        {/* Content Strategy: grid-area: 6 / 1 / 11 / 5 */}
        <div className="md:col-span-4 md:row-span-5 bento-card content-strategy">
          <div className="card-label">Content Strategy</div>
          <div className="card-title">The Narrative Funnel</div>
          <div className="space-y-4 mt-3">
            {CONTENT_PILLARS.map((cp, i) => (
              <div key={i} className="flex gap-3">
                <div className="text-[12px] font-bold text-bento-accent w-4 shrink-0">{i+1}.</div>
                <div className="text-[12px]">
                   <span className="font-semibold block text-bento-text">{cp.title}</span>
                   <span className="text-bento-dim text-[11px]">{cp.format} • {cp.channel}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Conversions: grid-area: 5 / 5 / 11 / 9 */}
        <div className="md:col-span-4 md:row-span-6 bento-card conversions">
          <div className="card-label">Conversion Ops</div>
          <div className="card-title">High Intent Hooks</div>
          <div className="space-y-3 mt-3 overflow-hidden">
            {['2-Click Sign-up Flow', 'Dynamic Pricing Calculator', 'Real-time Social Proof', 'Exit Intent Logic', 'Multi-variant A/B Testing'].slice(0, 3).map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-transparent hover:border-bento-border group cursor-default">
                <CheckCircle2 className="w-4 h-4 text-bento-accent" />
                <span className="text-[13px] text-bento-dim group-hover:text-bento-text transition-colors">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-bento-border">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-bento-dim mb-3 flex items-center gap-2">
              <BarChart3 className="w-3 h-3 text-bento-accent" /> Strategy Benchmarks
            </h4>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between items-center text-[11px] p-2 bg-bento-bg/30 rounded-lg">
                <span className="text-bento-dim">Lean MVP</span>
                <span className="text-bento-accent font-bold">Fast / $</span>
              </div>
              <div className="flex justify-between items-center text-[11px] p-2 bg-bento-bg/30 rounded-lg">
                <span className="text-bento-dim">Growth Scale</span>
                <span className="text-white font-bold">Med / $$$</span>
              </div>
            </div>
            <button className="w-full py-2 border border-bento-accent/30 text-bento-accent hover:bg-bento-accent hover:text-white rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all">
              Compare Now
            </button>
          </div>

          <button className="mt-auto w-full py-2 bg-bento-accent text-white rounded-xl text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-bento-accent/80 transition-colors">
            Optimize Flow <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        {/* Tech Stack: grid-area: 7 / 9 / 11 / 13 */}
        <div className="md:col-span-4 md:row-span-4 bento-card tech-stack">
          <div className="card-label">Tech Stack</div>
          <div className="card-title">Infrastructure</div>
          <div className="flex flex-wrap gap-2 mt-2">
            {['React / Next.js', 'Stripe Billing', 'PostHog', 'Vercel Edge', 'Tailwind v4'].map(tech => (
              <div key={tech} className="bg-bento-bg border border-bento-border px-3 py-1.5 rounded-lg text-[11px] font-medium text-bento-text/80">
                {tech}
              </div>
            ))}
          </div>
          <div className="mt-4 flex flex-col gap-3">
            <a 
              href="https://stackshare.io/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[11px] font-bold text-bento-accent hover:text-bento-text transition-colors uppercase tracking-widest group"
            >
              Learn More <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            
            <div className="flex items-center gap-2 text-bento-accent/60 italic text-[10px]">
               <Target className="w-3 h-3" /> Built for performance
            </div>
          </div>
        </div>
      </div>

      <footer className="w-full max-w-7xl mt-8 pt-6 border-t border-bento-border flex justify-between items-center text-[11px] text-bento-dim font-medium uppercase tracking-widest">
        <span>&copy; 2026 SaaS Strategy Hub</span>
        <div className="flex gap-6">
          <span className="cursor-pointer hover:text-bento-text transition-colors">Documentation</span>
          <span className="cursor-pointer hover:text-bento-text transition-colors">Export Plan</span>
        </div>
      </footer>
    </div>
  );
}
