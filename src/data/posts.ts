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
  postType: "academic_paper" | "article";
  
  // Academic paper specific metadata
  journal?: string;
  volume?: string;
  issn?: string;
  doi?: string;
  authors?: string;
  pdfUrl?: string;
  abstract?: string;
  keywords?: string[];
  sections?: {
    heading: string;
    paragraphs?: string[];
    table?: {
      caption?: string;
      headers: string[];
      rows: string[][];
    };
    glossExamples?: {
      label: string;
      words: { src: string; gloss: string }[];
      trans: string;
    }[];
  }[];
  references?: string[];
}

export const samplePosts: Post[] = [
  {
    slug: "pronouns-in-simte-pro-drop-emphatic",
    title: "Pronouns in Simte",
    subtitle: "A morphological and syntactic investigation of pronominal forms, clusivity, and pro-drop",
    excerpt: "Simte is a pro-drop Kuki-Chin language where reflexivity is marked directly on the verb via the prefix 'ki-', while emphatic forms employ the suffix '-maʔ'. Based on field elicitation in Churachandpur.",
    date: "June 2023",
    year: 2023,
    readingTime: "14 min read",
    category: "Linguistics",
    languageFamily: "Tibeto-Burman",
    language: "Simte",
    tags: ["Morphosyntax", "Simte", "Pronouns", "Pro-Drop", "Clusivity"],
    coverImage: "https://placehold.co/800x450/1e293b/ffffff?text=Pronouns+in+Simte+(Language+in+India)",
    featured: true,
    postType: "academic_paper",
    journal: "Language in India (www.languageinindia.com)",
    volume: "Vol. 23:6 (June 2023), pp. 172–181",
    issn: "1930-2940",
    authors: "H. Kapginlian, Ph.D. Scholar & Dr. Saralin A. Lyngdoh, Associate Professor (NEHU, Shillong)",
    pdfUrl: "/papers/simte-pronouns.pdf",
    abstract: "Simte is one of the Kuki-Chin languages spoken mostly in Churachandpur and Pherzawl districts of Manipur. This paper attempts to investigate the forms of pronouns and its types in Simte. Data has been collected through elicitation from four Simte elders aged around 50–55. Pronouns in Simte are free forms that function alone to fill the position of a noun phrase in a clause. Since it is a pro-drop language, pronoun dropping is evident extensively in the reflexive and reciprocal pronoun, realized by the reflexive prefix 'ki-' added to the main verb. The emphatic pronoun is realized by the suffix '-maʔ' added to the subject pronoun. For demonstratives, Simte employs 'hi' for proximal distance near the deictic centre and 'hu' for distal referents.",
    keywords: ["Pronouns", "Simte", "Deictic centre", "Emphatic", "Pro-drop", "Kuki-Chin"],
    sections: [
      {
        heading: "1. Geographic & Sociolinguistic Context",
        paragraphs: [
          "Simte is a Kuki-Chin language spoken predominantly in the Southern part of Manipur, specifically in Thanlon sub-division, Singngat sub-division, and Churachandpur Town. Etymologically, 'Sim' signifies 'South' and 'Te' denotes 'People'—translating literally to 'The People of the South'.",
          "According to the 2011 Census Report, the Simte speaking community numbers approximately 6,728 individuals. Linguistically, Simte is a tonal, R-less language, contrasting with neighboring Mizo and Hmar varieties.",
          "Data for this investigation was gathered through systematic fieldwork elicitation from four native Simte elder consultants aged between 50 and 55 in Churachandpur and Pherzawl districts."
        ]
      },
      {
        heading: "2. Personal Pronouns & Clusivity Distinction",
        paragraphs: [
          "Personal pronouns in Simte encode person (first, second, third) and number (singular, plural). A hallmark typological feature of the Kuki-Chin branch is 'clusivity'—the categorical morphological distinction between first-person inclusive and exclusive plural.",
          "Singular pronouns are 'kei' (1SG), 'naŋ' (2SG), and 'amaʔ' (3SG). Plurals are constructed with the plural particle 'uʔ', with contracted colloquial forms frequently employed in daily speech:"
        ],
        table: {
          caption: "Table 1: Simte Personal Pronoun Paradigm & Contracted Forms",
          headers: ["Person", "Singular", "Full Plural Form", "Contracted Form", "Meaning"],
          rows: [
            ["1st Person (Excl)", "kei", "kei uʔ", "kou", "we (excluding listener)"],
            ["1st Person (Incl)", "—", "ei uʔ", "ei", "we (including listener)"],
            ["2nd Person", "naŋ", "naŋ uʔ", "nɔu", "you (plural)"],
            ["3rd Person", "amaʔ", "amaʔ uʔ", "amau", "they"]
          ]
        }
      },
      {
        heading: "3. Case Alignment in Pronouns",
        paragraphs: [
          "Unlike English, where personal pronouns exhibit distinct nominative and accusative suppletion (e.g. 'I' vs. 'me', 'he' vs. 'him'), Simte exhibits identical overt forms for nominative and accusative unmarked pronouns. The distinction is licensed contextually or through postpositional case clitics."
        ],
        table: {
          caption: "Table 2: Case Alignment in Simte Personal Pronouns",
          headers: ["Person", "Number", "Nominative Form", "Accusative Form"],
          rows: [
            ["1st Person", "Singular", "kei", "kei"],
            ["2nd Person", "Singular", "naŋ", "naŋ"],
            ["3rd Person", "Singular", "amaʔ", "amaʔ"],
            ["1st Person (Excl)", "Plural", "kei-uʔ / kou", "kei-uʔ / kou"],
            ["1st Person (Incl)", "Plural", "ei-uʔ / ei", "ei-uʔ / ei"],
            ["2nd Person", "Plural", "naŋ-uʔ / nɔu", "naŋ-uʔ / nɔu"],
            ["3rd Person", "Plural", "amaʔ-uʔ / amau", "amaʔ-uʔ / amau"]
          ]
        }
      },
      {
        heading: "4. Reflexive & Reciprocal Pro-Drop Morphology",
        paragraphs: [
          "Simte exhibits extensive pro-drop characteristics. When a clause is reflexive or reciprocal, the overt pronominal object is obligatorily dropped, and the reflexive verbal prefix 'ki-' attaches directly to the verbal predicate:"
        ],
        glossExamples: [
          {
            label: "Example (1) — Reflexive Marker",
            words: [
              { src: "kei", gloss: "1SG" },
              { src: "ka", gloss: "1SG.AGR" },
              { src: "ki-thum", gloss: "REFL-pray" }
            ],
            trans: "'I pray for myself.'"
          },
          {
            label: "Example (2) — Reciprocal Verb Prefix",
            words: [
              { src: "kou", gloss: "1PL.EXCL" },
              { src: "ka", gloss: "1PL.AGR" },
              { src: "ki-it", gloss: "RECIP-love" },
              { src: "-uʔ", gloss: "PL" }
            ],
            trans: "'We love each other.'"
          }
        ]
      },
      {
        heading: "5. Emphatic Pronouns & Deictic Demonstratives",
        paragraphs: [
          "Emphatic pronouns are derived by suffixing the emphatic morpheme '-maʔ' directly to the pronominal stem: 'kei-maʔ' ('I myself'), 'naŋ-maʔ' ('you yourself'), and 'amaʔ-maʔ' ('he/she themselves').",
          "Demonstrative pronouns are anchored strictly to deictic distance: proximal 'hi' (near speaker) derives 'hiai' ('this'), while distal 'hu' (away from speaker) derives 'huai' ('that')."
        ]
      }
    ],
    references: [
      "Grierson, George A. (1904). Linguistic Survey of India: Volume III, Tibeto-Burman Family. Calcutta: Office of the Superintendent of Government Printing.",
      "Huddleston, Rodney & Pullum, Geoffrey K. (2005). A Student’s Introduction to English Grammar. Cambridge: Cambridge University Press.",
      "LaPolla, Randy J. (2005). 'The Role of Migration and Language Contact in the Development of the Sino-Tibetan Language Family.' In Language Contact and Language Change.",
      "Lewis, M. Paul, Simons, Gary F. & Fennig, Charles D. (2013). Ethnologue: Languages of the World (Seventeenth ed.). Dallas: SIL International.",
      "Radford, Andrew. (2004). English Syntax: An Introduction. Cambridge: Cambridge University Press."
    ]
  },
  {
    slug: "gender-marking-in-simte-human-animal",
    title: "Gender in Simte",
    subtitle: "Descriptive analysis of animate gender markers, honorific polysemy, and grammatical classification",
    excerpt: "Simte lacks arbitrary grammatical gender; gender marking is determined semantically. While human beings take '-pa' (masc) and '-nu' (fem), animals select '-tal' (masc) and '-pi' (fem), alongside honorific extensions.",
    date: "Vol. 10(II), 2024",
    year: 2024,
    readingTime: "11 min read",
    category: "Linguistics",
    languageFamily: "Tibeto-Burman",
    language: "Simte",
    tags: ["Morphology", "Gender", "Simte", "Kinship", "Honorifics"],
    coverImage: "https://placehold.co/800x450/334155/ffffff?text=Gender+in+Simte+(Vāk+Manthan)",
    featured: true,
    postType: "academic_paper",
    journal: "Vāk Manthan (SEL India)",
    volume: "Vol. 10, Issue II, pp. 28–36",
    issn: "2426-2149",
    authors: "H. Kapginlian & Dr. Saralin A. Lyngdoh (North Eastern Hill University, Shillong)",
    pdfUrl: "/papers/gender-in-simte.pdf",
    abstract: "Simte is one of the Kuki-Chin languages spoken mostly in Churachandpur and Pherzawl districts of Manipur. This paper describes the gender markers in Simte. The gender markers for [+human] are '-pa' for masculine and '-nu' for feminine gender. Whereas the gender markers for [-human, +animal] are '-tal' for masculine and '-pi' for feminine. Neuter gender is expressed lexically, such as 'naupaŋ' for child. The morphemes 'pu' and 'pi' exhibit multiple functional roles: maternal/paternal grandfathers and grandmothers, honorific terms of social respect, and designations for male and female authorities in society.",
    keywords: ["Simte", "Kuki-Chin", "Northeast India", "Gender markers", "Neuter gender", "Kinship"],
    sections: [
      {
        heading: "1. Theoretical Framework & Gender in Kuki-Chin",
        paragraphs: [
          "Unlike Indo-European languages where gender is often an arbitrary inflectional class assigned to inanimate nouns (e.g. French 'la table' or German 'das Buch'), Simte exhibits natural, semantic gender marking. Inanimate objects are grammatically neuter with zero gender affixation.",
          "The lexical roots for gender trace to basic kinship terms: 'pa' ('father') and 'nu' ('mother'). These stems have grammaticalized into bound suffixal gender morphemes."
        ]
      },
      {
        heading: "2. Gender Markers for Human Beings [+human]",
        paragraphs: [
          "For human animates, '-pa' marks masculine gender, and '-nu' marks feminine gender. They attach productively to nominal stems, agentive occupational nouns, and social roles:"
        ],
        glossExamples: [
          {
            label: "Example (1a) — Masculine Occupational Agent",
            words: [
              { src: "puan-sɔp-pa", gloss: "cloth-wash-M" },
              { src: "huŋ", gloss: "COP" },
              { src: "tuŋ-ta", gloss: "arrive-PFV" }
            ],
            trans: "'The washerman has arrived.'"
          },
          {
            label: "Example (1b) — Feminine Occupational Agent",
            words: [
              { src: "puan-sɔp-nu", gloss: "cloth-wash-F" },
              { src: "huŋ", gloss: "COP" },
              { src: "tuŋ-ta", gloss: "arrive-PFV" }
            ],
            trans: "'The washerwoman has arrived.'"
          },
          {
            label: "Example (2) — Social & Kinship Role",
            words: [
              { src: "inveŋ-pa", gloss: "neighbour-M" },
              { src: "toʔ", gloss: "and" },
              { src: "bazar", gloss: "market" },
              { src: "ka-hoʔ-uʔ", gloss: "1SG-go-PL" }
            ],
            trans: "'My male neighbour and I go to the market.'"
          }
        ]
      },
      {
        heading: "3. Gender Markers for Animals [-human, +animal]",
        paragraphs: [
          "A crucial morphological split occurs between human and non-human animates. When marking biological sex in animals, masculine is marked by the suffix '-tal' (male/stud), while feminine is marked by '-pi' (female/dam):"
        ],
        table: {
          caption: "Table 1: Animate Gender Suffixation in Simte",
          headers: ["Animate Category", "Masculine Marker", "Feminine Marker", "Example"],
          rows: [
            ["Human [+human]", "-pa", "-nu", "inveŋ-pa (male neighbour) / inveŋ-nu (female neighbour)"],
            ["Canine / Mammal", "-tal", "-pi", "ui-tal (stud/male dog) / ui-pi (bitch/female dog)"],
            ["Avian / Fowl", "-tal", "-pi", "aʔ-tal (rooster) / aʔ-pi (hen)"],
            ["Bovine / Cattle", "-tal", "-pi", "biel-tal (bull) / biel-pi (cow)"]
          ]
        },
        glossExamples: [
          {
            label: "Example (3a) — Canine Masculine",
            words: [
              { src: "ui-tal-in", gloss: "dog-M-ERG" },
              { src: "mi", gloss: "person" },
              { src: "khat", gloss: "one" },
              { src: "a-pet", gloss: "3SG-bite" }
            ],
            trans: "'The male dog bit a person.'"
          },
          {
            label: "Example (3b) — Canine Feminine",
            words: [
              { src: "ui-pi-in", gloss: "dog-F-ERG" },
              { src: "nou", gloss: "puppy/baby" },
              { src: "a-nei-ta", gloss: "3SG-have-PFV" }
            ],
            trans: "'The female dog has delivered puppies.'"
          }
        ]
      },
      {
        heading: "4. The Polysemous Morphemes 'pu' and 'pi'",
        paragraphs: [
          "The morphemes 'pu' and 'pi' perform a threefold function in Simte society and grammar:",
          "1. Kinship Reference: 'pu' denotes grandfather (both paternal and maternal), while 'pi' denotes grandmother.",
          "2. Honorific Distinction: Prefixed or suffixed to personal names, they serve as honorific titles of deep deference for elders.",
          "3. Institutional Authority: Used to categorize social and church authority, as in 'hausapu' (village chief) or 'pastorpu' (pastor)."
        ]
      }
    ],
    references: [
      "Champeon, Connie. (2019). Simte Writers’ Handbook. Churachandpur: Simte Literature Society.",
      "Haokip, Pauthang. (2009). 'The Language of the Kuki-Chin.' Indian Journal of Linguistics.",
      "Lewis, M. Paul et al. (2013). Ethnologue: Languages of the World (17th ed.). Dallas: SIL.",
      "Singh, Ch. Yashawanta & Suantak, V. (2011). A Sociolinguistic Profile of Simte. Imphal."
    ]
  },
  {
    slug: "numerals-kaipeng-simte-comparative",
    title: "Numerals in Kaipeng and Simte",
    subtitle: "A comparative linguistic investigation across Old Kuki and Northern Kuki-Chin branches",
    excerpt: "Presenting a pioneering comparative analysis of numeral systems in Kaipeng (Tripura) and Simte (Manipur). Analyzing decimal bases, suffixal patterns (-ka), and distributive reduplication.",
    date: "Vol. 12(2), 2025",
    year: 2025,
    readingTime: "12 min read",
    category: "Linguistics",
    languageFamily: "Tibeto-Burman",
    language: "Kaipeng / Simte",
    tags: ["Comparative", "Kaipeng", "Simte", "Numerals", "Typology"],
    coverImage: "https://placehold.co/800x450/1e293b/ffffff?text=Numerals+in+Kaipeng+%26+Simte+(JOELL)",
    featured: true,
    postType: "academic_paper",
    journal: "Veda’s Journal of English Language and Literature (JOELL)",
    volume: "Vol. 12, No. 2 (April-June 2025), pp. 11–20",
    issn: "2349-9788",
    doi: "10.54513/JOELL.2024.12202",
    authors: "Lorina D. Tariang (Assam University, Silchar) & H. Kapginlian (NEHU, Shillong)",
    pdfUrl: "/papers/numerals-kaipeng-simte.pdf",
    abstract: "Kaipeng and Simte belong to the Kuki-Chin sub-group of the Tibeto-Burman language family. Kaipeng belongs to the Old Kuki sub-group while Simte belongs to the Northern Kuki-Chin group (Grierson 1903). Kaipeng is spoken in Tripura by approximately 15,000 speakers, while Simte constitutes a population of 6,728 according to the 2011 Census. This paper presents a comparative analysis of the numeral systems in both languages in the realm of cardinals, ordinals, fractionals, multiplicatives, distributives, and approximate numerals.",
    keywords: ["Approximate", "Distributive", "Fractional", "Kaipeng", "Simte", "Kuki-Chin"],
    sections: [
      {
        heading: "1. Comparative Decimal Counting Systems",
        paragraphs: [
          "Both Kaipeng and Simte operate on a base-10 decimal counting system. However, they exhibit distinct morphological constraints on basic cardinal stems.",
          "In Kaipeng, the suffix '-ka' is obligatory on bare cardinal numerals from one to ten. In Simte, by contrast, cardinal roots are bare, monosyllabic lexical items, with the sole exception of the disyllabic 'sagiʔ' ('seven'):"
        ],
        table: {
          caption: "Table 1: Basic Cardinal Numerals Comparison (1 to 10)",
          headers: ["Number", "Kaipeng (Old Kuki)", "Simte (Northern Kuki-Chin)", "Cognate Root Status"],
          rows: [
            ["1", "kʰat-ka", "khat", "Cognate (*kʰat)"],
            ["2", "ni-ka", "niʔ", "Cognate (*ni)"],
            ["3", "tʰum-ka", "tʰum", "Cognate (*tʰum)"],
            ["4", "li-ka", "li", "Cognate (*b-li)"],
            ["5", "rəŋa-ka", "ŋa", "Cognate with pre-initial r- in Kaipeng"],
            ["6", "guk-ka", "guk", "Cognate (*ruk / *guk)"],
            ["7", "səri-ka", "sagiʔ", "Divergent coda / medial development"],
            ["8", "riet-ka", "giat", "r- vs. g- onset alternation"],
            ["9", "kuo-ka", "kua", "Cognate (*kua)"],
            ["10", "som-ka", "sawm", "Vowel alternation (o vs. aw)"]
          ]
        }
      },
      {
        heading: "2. Distributive & Multiplicative Numerals",
        paragraphs: [
          "Multiplicative numerals ('once', 'twice', 'thrice') in Simte are derived through the prefixation of 'vei-': 'vei-khat' ('once'), 'vei-ni' ('twice'), 'vei-thum' ('three times').",
          "Distributive numerals ('one by one', 'two each') are derived via morphological reduplication of the cardinal stem in both languages, illustrating strong genetic continuity despite geographic divergence between Tripura and southern Manipur."
        ]
      }
    ],
    references: [
      "Grierson, George A. (1903). Linguistic Survey of India: Volume III, Part III. Calcutta: Superintendent of Government Printing.",
      "Census Report of India. (2011). Office of the Registrar General & Census Commissioner, India.",
      "Champeon, Connie. (2019). Simte Writers’ Handbook. Churachandpur: Simte Literature Society.",
      "Singh, Ch. Yashawanta. (2009). The Manipuri Grammar. Rajesh Publications."
    ]
  },
  {
    slug: "advent-of-christianity-simte-oral-history",
    title: "Brief History of the Advent of Christianity Among the Simtes (1917–1958)",
    subtitle: "Oral history, early mission resistance, and social transformation in the hills of southern Manipur",
    excerpt: "Documenting the historical arrival of the gospel among the Simtes in 1917 through the Thadou-Kuki Pioneer Mission and NEIGM. Recounting chief resistance in Thanlon, Sumtuh, and Leizangphai.",
    date: "1917–1958 Documentation",
    year: 2022,
    readingTime: "15 min read",
    category: "Society & Culture",
    languageFamily: "Tibeto-Burman",
    language: "Simte",
    tags: ["Oral History", "Simte", "Christianity", "Thanlon", "Heritage"],
    coverImage: "https://placehold.co/800x450/292524/ffffff?text=Advent+of+Christianity+Among+the+Simtes",
    featured: false,
    postType: "academic_paper",
    journal: "Historical & Sociolinguistic Documentation Series",
    volume: "Archival Monograph (pp. 1–9)",
    authors: "H. Kapginlian (North-Eastern Hill University, Shillong)",
    pdfUrl: "/papers/history-christianity-simte.pdf",
    abstract: "The gospel was first brought to Southern Manipur by missionary Watkin R. Roberts in May 1910. By 1917, evangelistic teams reached the Simte villages under the Thadou-Kuki Pioneer Mission (TKPM), later reorganized as the North East India General Mission (NEIGM). Initial propagation faced severe resistance from traditional animist village chiefs who viewed the new doctrine as a threat to ancestral hierarchy. This paper documents the oral testimonies of pioneer converts across Thanlon, Sumtuh, Leizangphai, Dumsau, and Khuangnung up to the formation of the NTBCA in 1958.",
    keywords: ["Simte", "Manipur", "Watkin Roberts", "NEIGM", "TKPM", "Oral History", "Animism"],
    sections: [
      {
        heading: "1. The Pioneer Missionaries & First Inroads (1910–1917)",
        paragraphs: [
          "The Christian gospel spread to the southern district of Manipur following the arrival of Welsh missionary Watkin R. Roberts at Senvon on May 10, 1910, following an invitation from Kamkholun Singson.",
          "The mission rapidly expanded, leading to the establishment of the Thadou-Kuki Pioneer Mission (TKPM) in 1914, subsequently renamed the North East India General Mission (NEIGM) in 1919. In 1917, the message reached the first Simte villages in southern Manipur."
        ]
      },
      {
        heading: "2. Traditional Resistance & The Thanlon Village Narrative",
        paragraphs: [
          "The propagation of Christianity was fiercely contested in the early decades. Simte society was organized around powerful hereditary village chiefs who maintained strict adherence to traditional animist sacrifices and communal rice-beer feasts.",
          "In Thanlon, evangelists including Pastor Vanchhunga and Thangkai were initially mocked and ordered to be expelled by Chief Lumthang. Pioneer converts like Mr. Nengzagou (who accepted the faith on June 9, 1935) were forced to worship in secluded thatched huts known as 'Phoh Buh'.",
          "By the 1940s, Pastor P.K. Englian was dispatched by the NEIGM to nurture the nascent Christian community, becoming recognized as a spiritual father to the Thanlon Simtes."
        ]
      },
      {
        heading: "3. Village Chronicles: Sumtuh, Leizangphai, and Khuangnung",
        paragraphs: [
          "In Sumtuh, initial evangelization by Evangelist Thangvang was consolidated in 1936 by Tongpu Tungnung. Early church services were conducted in the Lushai language until local vernacular literacy developed.",
          "In Leizangphai, where the gospel was preached in 1947 by Ramlian Hmar, a church was constructed in 1950 under the leadership of Ngulzathang.",
          "In Khuangnung, first believer T. Chinzakhup constructed a thatched church in 1953 based on an indigenous principle of self-governance, self-propagation, and self-support, prior to formal affiliation with the NTBCA in 1958."
        ]
      }
    ],
    references: [
      "Ching, T. (2012). The Simte: A Socio-Cultural Study. Churachandpur.",
      "Hangluah, H. K. (2019). Origin and Migration of the Simte Tribe. Churachandpur.",
      "Ngaihte, S. Lianzathang. (1998). The Ngaihtes: History and Culture.",
      "Simte, L. Liankhanlal. (2004). The Origin and Growth of Christianity Among the Simtes in Manipur. M.Th. Thesis."
    ]
  },
  {
    slug: "indigenous-knowledge-systems-language-documentation",
    title: "Language as a Repository of Lived Experience: Preserving Indigenous Knowledge",
    subtitle: "Why grammatical documentation must encompass folklore, oral poetry, and cultural memory",
    excerpt: "Language is far more than an abstract system of words and syntax—it is a repository of memory, identity, and lived experience. Through linguistic documentation, we preserve irreplaceable cultural heritage.",
    date: "Oct 2, 2026",
    year: 2026,
    readingTime: "5 min read",
    category: "Indigenous Knowledge",
    languageFamily: "Tibeto-Burman",
    language: "Kuki-Chin / General",
    tags: ["Indigenous Knowledge", "Heritage", "Oral Literature", "Philosophy"],
    coverImage: "https://placehold.co/800x450/1e1e24/ffffff?text=Indigenous+Knowledge+Systems",
    featured: false,
    postType: "article",
    sections: [
      {
        heading: "Language as Memory and Lived Experience",
        paragraphs: [
          "For me, language is more than a system of words and grammar—it is a repository of memory, identity, knowledge, and lived experience. Through my research and writings, I hope to explore these connections and contribute, in my own small way, to the understanding and preservation of Indigenous languages and cultures.",
          "When an elder recounts an oral folktale or a genealogical chant in Simte or Kaipeng, they are not simply uttering syllables. They are encoding botanical classifications, historical migration routes, spiritual relationship with the land, and ethical codes passed down through unwritten generations.",
          "This website is conceived as a digital sanctuary where linguistic science and cultural memory meet—bringing together peer-reviewed morphosyntactic documentation with oral folklore, theological reflection, and literary appreciation."
        ]
      }
    ]
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
