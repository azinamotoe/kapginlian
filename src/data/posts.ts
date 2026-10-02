export interface Post {
  slug: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  date: string;
  year: number;
  readingTime: string;
  category: string;
  languageFamily?: string;
  language?: string;
  tags: string[];
  coverImage: string;
  featured?: boolean;
  content?: string;
}

export const samplePosts: Post[] = [
  {
    slug: "tonogenesis-kuki-chin-pitch-contours",
    title: "Acoustic Correlates of Tonogenesis in Southern Kuki-Chin",
    subtitle: "From syllable-final laryngeal contrasts to tonal registers",
    excerpt: "Exploring how post-vocalic glottal constriction and voicing distinctions in proto-segments gave rise to falling and high-register tones across regional dialects.",
    date: "Sep 28, 2026",
    year: 2026,
    readingTime: "7 min read",
    category: "Phonology",
    languageFamily: "Tibeto-Burman",
    language: "Kuki-Chin",
    tags: ["Phonology", "Tonogenesis", "Acoustics", "Tibeto-Burman"],
    coverImage: "https://placehold.co/800x450/262626/ffffff?text=Acoustic+Spectrogram+%26+Pitch+Track",
    featured: true,
  },
  {
    slug: "interlinear-glossing-ergative-alignment",
    title: "Documenting Split Ergativity: A Leipzig Glossing Guide",
    subtitle: "Practical conventions for morphological case marking in field transcriptions",
    excerpt: "A field guide to consistently notating agentive enclitics, nominalizer prefixes, and verbal agreement markers in verb-final morphology.",
    date: "Sep 15, 2026",
    year: 2026,
    readingTime: "5 min read",
    category: "Morphosyntax",
    languageFamily: "Tibeto-Burman",
    language: "Paite / Mizo",
    tags: ["Morphosyntax", "Fieldwork", "Glossing", "Typology"],
    coverImage: "https://placehold.co/800x450/334155/ffffff?text=Interlinear+Morpheme+Glosses",
    featured: true,
  },
  {
    slug: "field-notes-oral-narratives-manipur-hills",
    title: "Field Notes: Archiving Oral Narratives in Churachandpur",
    subtitle: "Acoustic preservation techniques and metadata standards for endangered folklore",
    excerpt: "Notes on recording high-fidelity folklore narratives with portable shotgun mics, eliciting genealogical terminology, and managing consent protocols.",
    date: "Aug 20, 2026",
    year: 2026,
    readingTime: "9 min read",
    category: "Language Documentation",
    languageFamily: "Tibeto-Burman",
    language: "Zo / Hangluah Dialects",
    tags: ["Fieldwork", "Audio", "Documentation", "Oral Literature"],
    coverImage: "https://placehold.co/800x450/1e293b/ffffff?text=Fieldwork+Audio+%26+Oral+Archives",
    featured: true,
  },
  {
    slug: "stem-alternation-verb-classes-kuki-chin",
    title: "Verb Stem Alternation (Stem I vs. Stem II) Across Western Kuki-Chin",
    subtitle: "Morpho-phonological conditioning vs. syntactic licensing",
    excerpt: "Investigating the historical origin of verb stem alternations: why certain subordinate clauses, nominalizations, and negative aspects trigger ablaut or suffixal Stem II.",
    date: "Jul 11, 2026",
    year: 2026,
    readingTime: "11 min read",
    category: "Morphosyntax",
    languageFamily: "Tibeto-Burman",
    language: "Kuki-Chin",
    tags: ["Morphology", "Syntax", "Stem Alternation", "Grammar"],
    coverImage: "https://placehold.co/800x450/292524/ffffff?text=Verb+Stem+Morphology+Table",
    featured: false,
  },
  {
    slug: "ipa-fonts-diacritics-web-typography",
    title: "Web Typography for Linguists: Rendering Stacking Diacritics",
    subtitle: "Why standard system fonts fail on tones and how SIL fonts solve glyph collision",
    excerpt: "A deep dive into Unicode combining characters (U+0300 through U+036F) and configuring OpenType font features for academic readability.",
    date: "May 04, 2026",
    year: 2026,
    readingTime: "4 min read",
    category: "Digital Humanities",
    languageFamily: "General Linguistics",
    tags: ["Typography", "IPA", "SIL Fonts", "Unicode"],
    coverImage: "https://placehold.co/800x450/1e1e24/ffffff?text=IPA+Unicode+Diacritics",
    featured: false,
  },
  {
    slug: "syntax-trees-minimalist-cartography",
    title: "Left Peripheral Functional Projections in SOV Languages",
    subtitle: "Topic, Focus, and Evidentiality heads above TP",
    excerpt: "Analyzing particle placement in root vs. embedded interrogative clauses using Rizzi's cartographic framework adapted for head-final languages.",
    date: "Feb 19, 2026",
    year: 2026,
    readingTime: "8 min read",
    category: "Syntax",
    languageFamily: "Tibeto-Burman",
    tags: ["Syntax", "Cartography", "Minimalism"],
    coverImage: "https://placehold.co/800x450/172554/ffffff?text=Syntax+Tree+Cartography",
    featured: false,
  }
];

export const authorProfile = {
  name: "H. Kapginlian",
  shortName: "H. Kapginlian",
  title: "Linguist & Language Researcher",
  affiliation: "Specializing in Tibeto-Burman & Kuki-Chin Languages",
  bio: "Investigating morphosyntax, tonogenesis, verb stem alternation, and phonetic documentation in Northeast India and the Indo-Myanmar borderlands. Committed to open-access language archiving and linguistic typology.",
  avatar: "/images/author.jpg",
  location: "Northeast India",
  email: "contact@lianhangluah.com",
  orcid: "0000-0002-1234-5678",
  scholar: "https://scholar.google.com",
  github: "https://github.com",
  bluesky: "https://bsky.app",
};

