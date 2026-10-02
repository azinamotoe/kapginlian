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
    slug: "pronouns-in-simte-pro-drop-emphatic",
    title: "Pronouns and Pro-Drop in Simte: Reflexive ki- and Emphatic -maʔ",
    subtitle: "Investigating pronominal omission, deictic centers (hi / hu), and verbal agreement",
    excerpt: "Simte demonstrates rich pro-drop characteristics where reflexivity is marked directly on the verb via the prefix 'ki-', while emphatic forms employ the suffix '-maʔ'. An analysis based on field elicitation in Churachandpur.",
    date: "Sep 28, 2026",
    year: 2026,
    readingTime: "7 min read",
    category: "Linguistics",
    languageFamily: "Tibeto-Burman",
    language: "Simte",
    tags: ["Morphosyntax", "Simte", "Pronouns", "Pro-Drop"],
    coverImage: "https://placehold.co/800x450/262626/ffffff?text=Simte+Pronominal+Morphology",
    featured: true,
  },
  {
    slug: "gender-marking-in-simte-human-animal",
    title: "Gender Categorization in Simte: Human, Animate, and Honorific Markers",
    subtitle: "Distinguishing [+human] pa/nu from [-human, +animal] tal/nu and honorific pu/pi",
    excerpt: "Exploring the semantic boundaries of natural gender marking in Simte. Kinship morphemes 'pu' and 'pi' extend beyond grandfathers/grandmothers to function as honorifics for community authority.",
    date: "Aug 15, 2026",
    year: 2026,
    readingTime: "6 min read",
    category: "Linguistics",
    languageFamily: "Tibeto-Burman",
    language: "Simte",
    tags: ["Morphology", "Gender", "Simte", "Kinship"],
    coverImage: "https://placehold.co/800x450/334155/ffffff?text=Simte+Gender+Markers",
    featured: true,
  },
  {
    slug: "numerals-kaipeng-simte-comparative",
    title: "A Comparative Study of Numerals in Kaipeng (Old Kuki) and Simte",
    subtitle: "Cardinals, ordinals, distributives, and multiplicative patterns across Kuki-Chin",
    excerpt: "Comparing numeral systems between Kaipeng (spoken in Tripura) and Simte (spoken in Manipur). Tracing morphological divergence in compound numerals and arithmetic bases.",
    date: "Jun 20, 2026",
    year: 2026,
    readingTime: "8 min read",
    category: "Linguistics",
    languageFamily: "Tibeto-Burman",
    language: "Kaipeng / Simte",
    tags: ["Comparative", "Kaipeng", "Simte", "Numerals"],
    coverImage: "https://placehold.co/800x450/1e293b/ffffff?text=Kaipeng+%26+Simte+Numerals",
    featured: true,
  },
  {
    slug: "advent-of-christianity-simte-oral-history",
    title: "The Advent of Christianity Among the Simtes (1917–1958)",
    subtitle: "From animist village traditions to the North East India General Mission",
    excerpt: "Documenting early missionary incursions in Southern Manipur, the role of Watkin R. Roberts, the Thadou-Kuki Pioneer Mission, and the social transformation of Simte communities.",
    date: "Apr 11, 2026",
    year: 2026,
    readingTime: "10 min read",
    category: "Society & Culture",
    languageFamily: "Tibeto-Burman",
    language: "Simte",
    tags: ["Oral History", "Simte", "Mission History", "Heritage"],
    coverImage: "https://placehold.co/800x450/292524/ffffff?text=Simte+Mission+History+(1917-1958)",
    featured: false,
  },
  {
    slug: "indigenous-knowledge-systems-language-documentation",
    title: "Language as a Repository of Lived Experience: Preserving Indigenous Knowledge",
    subtitle: "Why grammatical documentation must encompass folklore, oral poetry, and cultural memory",
    excerpt: "Reflecting on the role of the linguist as documenter of intangible heritage. Language is not merely syntax and phonemes—it is identity, theology, and generational wisdom.",
    date: "Mar 04, 2026",
    year: 2026,
    readingTime: "5 min read",
    category: "Indigenous Knowledge",
    languageFamily: "General Linguistics",
    tags: ["Indigenous Knowledge", "Documentation", "Heritage", "Philosophy"],
    coverImage: "https://placehold.co/800x450/1e1e24/ffffff?text=Indigenous+Knowledge+Systems",
    featured: false,
  },
  {
    slug: "language-vitality-churachandpur-pherzawl",
    title: "Language Endangerment and Vitality in Southern Manipur",
    subtitle: "Intergenerational transmission challenges and educational media absence",
    excerpt: "With roughly 6,728 speakers according to the Census, Simte faces vitality hurdles as transmission becomes restricted to family and church settings despite Class X recognition.",
    date: "Jan 19, 2026",
    year: 2026,
    readingTime: "6 min read",
    category: "Society & Culture",
    languageFamily: "Tibeto-Burman",
    language: "Simte",
    tags: ["Language Vitality", "Endangerment", "Manipur", "Policy"],
    coverImage: "https://placehold.co/800x450/172554/ffffff?text=Simte+Vitality+%26+Documentation",
    featured: false,
  }
];

export const authorProfile = {
  name: "H. Kapginlian",
  shortName: "H. Kapginlian",
  title: "Ph.D. Scholar in Linguistics",
  affiliation: "North-Eastern Hill University (NEHU), Shillong",
  shortBio: "I am H. Kapginlian, a linguist working at the intersection of morphology and syntax, Indigenous Knowledge Systems, language documentation, traditional folklore and folktales, and intangible cultural heritage.",
  fullBio: [
    "I am H. Kapginlian, a linguist working at the intersection of morphology and syntax, Indigenous Knowledge Systems, language documentation, traditional folklore and folktales, and intangible cultural heritage.",
    "This website is a space where I bring together my linguistic research, writings on society and culture, theological reflections, book reviews, and poetry. It is also an attempt to document, preserve, and share knowledge, stories, languages, and cultural expressions that are often passed down through generations but remain less visible in the wider world.",
    "For me, language is more than a system of words and grammar—it is a repository of memory, identity, knowledge, and lived experience. Through my research and writings, I hope to explore these connections and contribute, in my own small way, to the understanding and preservation of Indigenous languages and cultures.",
    "Welcome to my world of language, culture, thought, faith, and words."
  ],
  avatar: "/images/author-avatar.jpg",
  fullPhoto: "/images/author-centered.jpg",
  location: "NEHU, Shillong • Manipur, Northeast India",
  email: "contact@lianhangluah.com",
  orcid: "0009-0008-9045-3527",
  scholar: "https://scholar.google.com",
  github: "https://github.com/kapginlian",
  bluesky: "https://bsky.app",
};
