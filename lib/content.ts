/**
 * Single source of truth for all site copy.
 * All text is taken verbatim from the client's content document.
 */

export const firm = {
  name: "FGL LEGAL",
  full: "FGL LEGAL (Adullam Chambers)",
  chambers: "Adullam Chambers",
  tagline: "Legal Practitioners & Consultants",
  founded: "2021",
  location: "Kaneshie · Accra, Ghana",
  email: "info@fgllegalgh.com",
  phones: ["+233 303 961 616", "+233 597 435 592", "+233 544 330 617"],
  address: {
    line1: "DF 31 Teiko Ansah Street",
    line2: "Fire Armour, Kaneshie",
    line3: "GA-261-0697",
    city: "Accra, Ghana",
  },
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Practice Areas", href: "/practice-areas" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
] as const;

export const hero = {
  headline: "Legal Solutions Built Around Your Business",
  subline: "Modern Legal Counsel. Practical Solutions. Trusted Partnership.",
} as const;

export const whyChoose = {
  kicker: "Why Choose FGL LEGAL?",
  title: "A New Generation Law Firm",
  intro:
    "We are redefining legal practice by combining deep legal expertise with technology, flexibility, and a client-first approach.",
  features: [
    {
      title: "Client-Focused Approach",
      body: "Every client is unique. We listen, understand your objectives, and develop tailored legal strategies that achieve practical results.",
    },
    {
      title: "Commercial Perspective",
      body: "We don't simply interpret the law, we understand business. Our legal advice supports growth while minimizing legal and commercial risk.",
    },
    {
      title: "Technology Driven",
      body: "Virtual consultations, digital document management, and responsive communication ensure convenience without compromising quality.",
    },
  ],
} as const;

export const about = {
  kicker: "About Us",
  title: "About FGL LEGAL (Adullam Chambers)",
  paragraphs: [
    "Founded in 2021, FGL LEGAL (Adullam Chambers) was established with a clear vision: to provide outstanding legal services in an atmosphere of grace while making legal support more accessible, practical, and commercially relevant.",
    "We understand that legal decisions influence every stage of personal and business life. From negotiating commercial agreements and protecting intellectual property to resolving disputes and managing estates, our lawyers work closely with clients to provide strategic legal advice that enables informed decision-making.",
    "Our practice combines the depth of traditional legal excellence with the efficiency of modern technology, allowing us to deliver flexible, responsive, and value-driven legal services.",
    "We believe that legal representation should not only solve today's problems but also create lasting protection for tomorrow.",
  ],
  vision:
    "To become one of Ghana's most respected and innovative law firms, delivering accessible, technology-driven legal solutions that empower individuals and businesses across Africa.",
  mission:
    "To provide exceptional legal representation and advisory services through professionalism, integrity, innovation, and client-focused solutions that create measurable value for every client.",
} as const;

export const coreValues = [
  { title: "Integrity", body: "We uphold the highest ethical standards in every engagement." },
  { title: "Excellence", body: "We pursue outstanding legal outcomes through expertise and diligence." },
  { title: "Client First", body: "Every strategy begins with understanding our clients' objectives." },
  { title: "Innovation", body: "We embrace technology and modern legal practices to improve service delivery." },
  { title: "Professionalism", body: "We deliver responsive, dependable, and practical legal advice." },
  { title: "Collaboration", body: "We work closely with clients as trusted advisors and long-term partners." },
] as const;

export const differentiators = [
  { title: "Bespoke Legal Solutions", body: "Every legal matter is different. We provide customized advice tailored to each client's objectives." },
  { title: "Commercial Understanding", body: "Our lawyers appreciate both the legal and commercial realities of doing business." },
  { title: "Cost Certainty", body: "Transparent pricing and predictable legal costs help clients make informed financial decisions." },
  { title: "Flexible Consultations", body: "Meet with us in person or virtually at your convenience." },
  { title: "Technology Enabled", body: "We leverage modern digital tools to improve communication, efficiency, and client experience." },
  { title: "Practical Advice", body: "Our recommendations are commercially viable, actionable, and results-oriented rather than purely theoretical." },
] as const;

export type PracticeArea = {
  slug: string;
  title: string;
  short: string;
  body: string;
  services: string[];
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: "corporate-commercial",
    title: "Corporate & Commercial Law",
    short: "Establishing, growing, and protecting businesses.",
    body: "Helping businesses establish, grow, restructure, negotiate, and manage commercial risk through comprehensive legal advisory services.",
    services: [
      "Company formation",
      "Shareholder agreements",
      "Commercial contracts",
      "Corporate governance",
      "Business acquisitions",
      "Regulatory advisory",
    ],
  },
  {
    slug: "litigation-adr",
    title: "Litigation & Alternative Dispute Resolution",
    short: "Strategic representation when disputes arise.",
    body: "When disputes arise, our litigation team provides strategic representation before courts, tribunals, and arbitration panels while pursuing practical dispute resolution where appropriate.",
    services: [
      "Commercial litigation",
      "Civil litigation",
      "Arbitration",
      "Mediation",
      "Debt recovery",
      "Enforcement of judgments",
    ],
  },
  {
    slug: "property-real-estate",
    title: "Property & Real Estate Law",
    short: "Acquisition, development, leasing, and conveyancing.",
    body: "We advise individuals, developers, investors, and businesses on all aspects of property acquisition, development, leasing, and conveyancing.",
    services: [
      "Property acquisition",
      "Conveyancing",
      "Due diligence",
      "Lease preparation",
      "Property development",
      "Land litigation",
    ],
  },
  {
    slug: "banking-finance",
    title: "Banking & Finance Law",
    short: "Legal support for complex financial transactions.",
    body: "Our team provides legal support for banks, financial institutions, fintech companies, and businesses navigating complex financial transactions and regulatory requirements.",
    services: [
      "Banking documentation",
      "Lending transactions",
      "Debt restructuring",
      "Debt recovery",
      "Financial regulatory compliance",
    ],
  },
  {
    slug: "insurance",
    title: "Insurance Law",
    short: "Claims, policy interpretation, liability, and subrogation.",
    body: "We advise insurers, brokers, businesses, and policyholders on insurance claims, policy interpretation, liability, and subrogation matters.",
    services: [
      "Insurance claims",
      "Policy interpretation",
      "Liability matters",
      "Subrogation",
    ],
  },
  {
    slug: "intellectual-property",
    title: "Intellectual Property",
    short: "Protecting innovation and brands.",
    body: "Protecting innovation through strategic intellectual property advisory services.",
    services: [
      "Trademark registration",
      "Copyright",
      "Patents",
      "Licensing agreements",
      "IP litigation",
      "Brand protection",
    ],
  },
  {
    slug: "family-law",
    title: "Family Law",
    short: "Compassionate support in sensitive family matters.",
    body: "Providing compassionate legal support in sensitive family matters.",
    services: [
      "Marriage registration",
      "Divorce",
      "Child custody",
      "Adoption",
      "Matrimonial property",
    ],
  },
  {
    slug: "wills-probate-estates-trusts",
    title: "Wills, Probate, Estate & Trusts",
    short: "Preserving wealth for future generations.",
    body: "Helping families preserve wealth and protect future generations through effective estate planning.",
    services: [
      "Wills",
      "Probate",
      "Estate administration",
      "Trust creation",
      "Succession planning",
    ],
  },
];

export type TeamMember = {
  name: string;
  role: string;
  initials: string;
  bio: string;
  focus: string[];
  /** Path under /public. Falls back to the monogram plate when omitted. */
  photo?: string;
};

export const team: TeamMember[] = [
  {
    name: "Adwoa Dapaah-Ntow, Esq.",
    role: "Managing Partner",
    initials: "AD",
    photo: "/team-adwoa-dapaah-ntow.jpg",
    bio: "Adwoa Dapaah-Ntow is admitted to the Supreme Court of Ghana and has extensive experience in Commercial Law, Litigation, Intellectual Property, Insurance Law, Property Law, ADR, and Family Law. She also lectures at the University of Professional Studies, Accra (UPSA), where she teaches Immovable Property Law and Intellectual Property Law.",
    focus: ["Commercial Law", "Litigation", "Intellectual Property", "Property Law", "ADR"],
  },
  {
    name: "Neneh Ayiku Akotiah, Esq.",
    role: "Partner",
    initials: "NA",
    photo: "/team-neneh-ayiku-akotiah.jpg",
    bio: "Neneh Ayiku Akotiah brings decades of executive banking experience together with expertise in Commercial Law, Banking & Finance, Regulatory Compliance, Trusteeship, Tax, Debt Restructuring, and Family Law. His experience spans leadership roles at Barclays Bank, SG Ghana, CAL Bank, ADB, Construction Bank, and consultancy work with CBG.",
    focus: ["Banking & Finance", "Regulatory Compliance", "Trusteeship", "Tax", "Debt Restructuring"],
  },
];

export const industries = [
  "Small & Medium Enterprises",
  "Financial Institutions",
  "Fintech Companies",
  "Manufacturing",
  "Real Estate",
  "Insurance",
  "Technology",
  "Startups",
  "NGOs",
  "Family Businesses",
] as const;

export const faqs = [
  {
    q: "How do I schedule a consultation?",
    a: "Simply contact us by phone, email, or complete the consultation request form.",
  },
  {
    q: "Do you offer virtual consultations?",
    a: "Yes. We provide both in-person and virtual legal consultations.",
  },
  {
    q: "Do you assist startups?",
    a: "Yes. We support startups from incorporation through growth, financing, governance, and commercial contracting.",
  },
] as const;

export const matterTypes = [
  "Corporate & Commercial",
  "Litigation & ADR",
  "Property & Real Estate",
  "Banking & Finance",
  "Insurance",
  "Intellectual Property",
  "Family Law",
  "Wills, Probate & Estates",
  "Other / Not sure",
] as const;
