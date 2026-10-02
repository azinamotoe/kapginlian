import { simtePronounsPost } from './posts/simte-pronouns';
import { genderInSimtePost } from './posts/gender-in-simte';
import { numeralsKaipengSimtePost } from './posts/numerals-kaipeng-simte';
import { historyChristianityPost } from './posts/history-christianity-simte';
import { indigenousKnowledgePost } from './posts/indigenous-knowledge';
import { simtePoetryPost } from './posts/simte-poetry';

export interface PostSection {
  heading: string;
  paragraphs?: string[];
  blockquote?: {
    text: string;
    source?: string;
  };
  table?: {
    caption?: string;
    headers: string[];
    rows: string[][];
  };
  tables?: {
    caption?: string;
    headers: string[];
    rows: string[][];
  }[];
  glossExamples?: {
    label: string;
    words: { src: string; gloss: string }[];
    trans: string;
  }[];
}

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
  language?: string; // Linguistic focus / subject language
  articleLanguage?: "English" | "Simte"; // Language the article is written in
  tags: string[];
  coverImage: string;
  featured?: boolean;
  postType: "academic_paper" | "essay" | "poem";
  
  // Academic paper specific metadata
  journal?: string;
  volume?: string;
  issn?: string;
  doi?: string;
  authors?: string;
  pdfUrl?: string;
  abstract?: string;
  keywords?: string[];
  citationApa?: string;
  bibtex?: string;
  sections?: PostSection[];
  references?: string[];
}

export const samplePosts: Post[] = [
  simtePronounsPost,
  genderInSimtePost,
  numeralsKaipengSimtePost,
  historyChristianityPost,
  indigenousKnowledgePost,
  simtePoetryPost
];

export function getPostUrl(post: { slug: string; postType?: string }): string {
  return post.postType === "academic_paper" ? `/research/${post.slug}` : `/feed/${post.slug}`;
}

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
