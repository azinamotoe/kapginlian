export interface SocialLink {
  id: string;
  title: string;
  handle: string;
  description: string;
  category: "academic" | "social" | "direct";
  badge: string;
  href: string;
  icon: string; // SVG icon identifier or path
  colorTheme: string; // Tailwind background/accent classes
  isActive: boolean; // true if public URL is configured, false if available upon request
}

export const linkhubConfig = {
  headline: "Connect & Social Directory",
  subheadline: "Verified academic identifiers, scholarly networks, and public communication channels for H. Kapginlian.",
  whatsappNumber: "+91", // Can be configured with his phone number
  email: "contact@lianhangluah.com",
  orcid: "0009-0008-9045-3527",
};

export const socialLinks: SocialLink[] = [
  // --- ACADEMIC & IDENTIFIERS ---
  {
    id: "orcid",
    title: "ORCID Registry",
    handle: "0009-0008-9045-3527",
    description: "Verified Open Researcher and Contributor ID for cross-institutional authorship verification.",
    category: "academic",
    badge: "Verified ID",
    href: "https://orcid.org/0009-0008-9045-3527",
    icon: "orcid",
    colorTheme: "border-[#A6CE39]/30 bg-[#A6CE39]/5 hover:bg-[#A6CE39]/15 text-[#A6CE39]",
    isActive: true,
  },
  {
    id: "scholar",
    title: "Google Scholar",
    handle: "H. Kapginlian",
    description: "Citations, peer-reviewed articles, co-authored publications, and index metrics.",
    category: "academic",
    badge: "Citations",
    href: "https://scholar.google.com",
    icon: "scholar",
    colorTheme: "border-blue-500/30 bg-blue-500/5 hover:bg-blue-500/15 text-blue-500",
    isActive: true,
  },
  {
    id: "researchgate",
    title: "ResearchGate",
    handle: "H. Kapginlian",
    description: "Working papers, conference presentation slides, and scholarly Q&A with peer linguists.",
    category: "academic",
    badge: "Preprints",
    href: "https://www.researchgate.net",
    icon: "researchgate",
    colorTheme: "border-emerald-500/30 bg-emerald-500/5 hover:bg-emerald-500/15 text-emerald-500",
    isActive: true,
  },

  // --- SOCIAL & COMMUNITY NETWORKS ---
  {
    id: "facebook",
    title: "Facebook",
    handle: "H. Kapginlian",
    description: "Community updates, cultural reflections, folk documentation news, and regional public posts.",
    category: "social",
    badge: "Community",
    href: "https://www.facebook.com",
    icon: "facebook",
    colorTheme: "border-sky-600/30 bg-sky-600/5 hover:bg-sky-600/15 text-sky-600 dark:text-sky-400",
    isActive: true,
  },
  {
    id: "twitter",
    title: "X / Twitter",
    handle: "@kapginlian",
    description: "Linguistics dispatches, Tibeto-Burman morphology notes, and conference commentary.",
    category: "social",
    badge: "Microblog",
    href: "https://x.com",
    icon: "twitter",
    colorTheme: "border-stone-500/30 bg-stone-500/5 hover:bg-stone-500/15 text-stone-700 dark:text-stone-300",
    isActive: true,
  },
  {
    id: "whatsapp",
    title: "WhatsApp",
    handle: "Direct / Community",
    description: "Direct messaging for fieldwork informants, regional researchers, and community coordination.",
    category: "social",
    badge: "Direct Chat",
    href: "https://wa.me/?text=Hello%20Kapginlian",
    icon: "whatsapp",
    colorTheme: "border-emerald-600/30 bg-emerald-600/5 hover:bg-emerald-600/15 text-emerald-600 dark:text-emerald-400",
    isActive: true,
  },

  // --- DIRECT CHANNELS ---
  {
    id: "email",
    title: "Direct Email",
    handle: "contact@lianhangluah.com",
    description: "For manuscript queries, speaking invitations, academic collaboration, or interview requests.",
    category: "direct",
    badge: "Primary Contact",
    href: "mailto:contact@lianhangluah.com",
    icon: "email",
    colorTheme: "border-rose-500/30 bg-rose-500/5 hover:bg-rose-500/15 text-rose-500",
    isActive: true,
  },
  {
    id: "research_hub",
    title: "Academic Research Hub",
    handle: "lianhangluah.com/research",
    description: "Direct access to 4 peer-reviewed linguistics papers with Leipzig glosses and downloadable PDFs.",
    category: "direct",
    badge: "Internal Archive",
    href: "/research",
    icon: "paper",
    colorTheme: "border-[var(--accent)]/30 bg-[var(--accent)]/5 hover:bg-[var(--accent)]/15 text-[var(--accent)]",
    isActive: true,
  }
];
