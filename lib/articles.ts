export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; items: string[] };

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  /** ISO date, YYYY-MM-DD */
  date: string;
  category: string;
  tags: string[];
  body: ArticleBlock[];
  references?: string[];
};

export const articles: Article[] = [
  {
    slug: "obuasi-shts-morality-legality-and-the-childs-best-interest",
    title:
      "Obuasi Senior High Technical School: Where Morality, Legality and the Child's Best Interest Meet",
    excerpt:
      "When allegations of abuse surfaced at Obuasi SHTS, the public split between instant protection and the presumption of innocence. Properly read, Ghanaian law does not force us to choose.",
    author: "C. A. A. Dapaah",
    date: "2026-10-20",
    category: "Commentary",
    tags: ["Child Protection", "Constitutional Law", "Education"],
    body: [
      {
        type: "p",
        text: "Very recently, we woke up to a media landscape awash with what has all the makings of a scandal: an allegation that an older man, put in charge of young girls, has been taking advantage of those very girls.",
      },
      { type: "p", text: "The crowd, as usual, is divided." },
      {
        type: "p",
        text: "On one side are the scandalized and offended. This group asks a fair question: should protection not be instant? Should the headmaster not be asked to step aside while investigations unfold? Not only from his professional responsibilities, but they ask whether his political ambition should also pause until the facts show whether he has been wrongly accused.",
      },
      {
        type: "p",
        text: "On the other side are those who do not believe in instant retribution. To them, a principle almost fundamental to human rights must be upheld at all times: a man cannot be condemned until proven guilty. This belief, they argue, justifies keeping the alleged offender at post, even at the risk of exposing more girls to the alleged practices. It also justifies allowing him to pursue his political ambition.",
      },
      {
        type: "p",
        text: "Herein lies the crux. The balancing of morality and legality. Where does upholding society's moral principles come in? Where does it end? And where does upholding the law come in?",
      },

      { type: "h2", text: "Making the Case for Morality" },
      {
        type: "p",
        text: "I will not attempt a philosophical definition of morality here. For our purposes, let me adopt Lon Fuller's conception: morality is not just what feels wrong to many people, but the shared inner values that make law itself possible and worthy of obedience. One of those values is the safety of children.",
      },
      {
        type: "p",
        text: "Does the alleged sexual exploitation prick our collective conscience? Does it make our hearts ache for the youth — boys and girls — in our educational institutions? I will not limit it to girls, because we are living in times when boys are as vulnerable.",
      },
      {
        type: "p",
        text: "Judging by the outcry, many — parents, guardians, friends — are pained. It is this prick of conscience that asks that the alleged perpetrator stand aside until cleared. Is this call justified? It depends on whether we value the safety of students more than the temporary inconvenience to a man's reputation.",
      },
      {
        type: "p",
        text: "As the story unfolds, we are told the school has been shut down pending investigation. So, who appears to be suffering most? The students. The vulnerable group. Is there not an assistant headmaster who can hold the fort? If at the end of the day the headmaster is found culpable, how do we compensate students for trauma, suspense and loss of academic time?",
      },
      {
        type: "p",
        text: "Again, if indeed what is alleged is true, the image emerging is that of a pattern from previous institutions. If such a person is let loose, still on the prowl, the larger society is at risk. This is why, for those concerned about child safety, stepping aside pending investigation feels like the greater good. Not as punishment. As precaution.",
      },

      { type: "h2", text: "Making the Case for Legality: Hart's Ghost" },
      {
        type: "p",
        text: "On the question of law, it is trite knowledge that a multiplicity of suspicions will not found guilt. Thus, the law prefers for 99 guilty men to walk free rather than punish one innocent man. Article 19(2)(c) of the 1992 Constitution guarantees innocence until proven guilty. It is the reason why I do not need to convince anyone why a political party may take the stance of letting the bid continue until investigations end. Legally, they are right. Politically and morally, they may be tone-deaf.",
      },
      {
        type: "p",
        text: "This falls into the classic Hart-Fuller debate. H.L.A. Hart, the positivist, would say law is law, even if immoral. The presumption of innocence stands. Lon Fuller would reply that a law that permits a person in loco parentis to remain in charge of potential victims while being investigated for abusing those same children has lost its inner morality.",
      },
      {
        type: "p",
        text: "Ghana does not have to choose between Hart and Fuller. We can uphold both law and morality at the same time. How? By distinguishing criminal guilt from administrative responsibility. What many confuse is that asking a headmaster to step aside is not a criminal conviction. Asking him not to contest in an election is also not a finding of guilt. It is an administrative, protective measure. It protects the child while it also protects the presumption of innocence.",
      },

      {
        type: "h2",
        text: "The Third Way: Administrative Justice, Not Mob Justice",
      },
      {
        type: "p",
        text: "These administrative structures already exist within our legal framework. They are not alien to Ghanaian law. Under the GES Code of Conduct, the Labour Act, 2003 (Act 651), and standard public service practice, interdiction pending investigation is not punishment. The officer retains his salary, retains his presumption of innocence, retains his right to be heard. What is removed is only the opportunity to interfere with witnesses or to put more children at risk.",
      },
      {
        type: "p",
        text: "Even our criminal law does this. We remand suspects or grant bail with conditions not to go near victims. No one calls that unconstitutional. The call for the headmaster to step aside is therefore commendable.",
      },
      {
        type: "p",
        text: "Shutting down an entire SHS, on the other hand, is collective punishment. It punishes the victims twice. First by the alleged abuse, second by loss of contact hours, WASSCE preparation and stability. The Children's Act, 1998 (Act 560), Section 6, is clear: the best interest of the child shall be paramount. Closing the school fails that test. The Assistant Head can hold the fort.",
      },
      {
        type: "p",
        text: "The political question is different. A court judges legal guilt. A party judges moral fitness for leadership. A party can lawfully say “we are waiting for the law” and still suffer morally for it. Ghanaians are paying attention to how institutions respond to such sensitive matters, and that response itself becomes a lesson to the society about accountability.",
      },
      {
        type: "p",
        text: "This is also a call to political parties. Young people are not only politically active today, they are also exposed. They volunteer in campaigns, they serve as polling agents, they are in TESCON, TEIN and other youth wings, often under the direct authority of an aspirant or executive. If schools need safeguarding policies, so do political parties. It is time for parties to include in their constitutions and by-laws clear provisions for stepping aside when an aspirant or officer is under investigation for sexual offences involving minors or vulnerable persons, not as a finding of guilt, but as a commitment to child protection and to the moral fitness that the public leadership demands. Such a provision protects the party as much as it protects the child. It is a clear indication that ambition does not come at the cost of safety.",
      },

      { type: "h2", text: "What This Means for Us as a Society" },
      {
        type: "p",
        text: "Hearing each side, we may need to tighten our laws, particularly those that protect the weak and vulnerable from persons in authority. It calls for a deep look into our schools: primary, JHS, SHS and tertiary.",
      },
      {
        type: "p",
        text: "The stories we hear are difficult to retell. Many of us can recount some. Right from before there was reading and writing, these abuses existed. We have heard of heads demanding sex from students, sometimes taking many partners leading to fights among girls. We have heard of first-class degrees said to be paid for by sexual favours. We have heard of intercourse demanded in lieu of school fees.",
      },
      {
        type: "p",
        text: "This is an existential problem. It shows up in many ways: how a man of 35 years or more can call a primary school girl beautiful and promise to marry her in future in public; how a university student confides in another lecturer that she finds a lecturer detestable but is forced to have sexual relations for fear of being victimised. This is a slice of our society. It may not be attractive, but it needs to be addressed.",
      },
      {
        type: "p",
        text: "It is little wonder we have emotionally burdened women. These are survivors of society's injustices. Research shows trauma from such experiences can affect mental health, relationships and self-esteem. When such experiences are left unaddressed, they become normalised, making it harder for bystanders — both female and male teachers — to speak up. The data confirms the outcry:",
      },
      {
        type: "p",
        text: "First, Child Rights International's nationwide study in May 2026 reviewed 899 child protection cases across 10 regions and found defilement accounted for 59.4% of all offences against children, the most common form. 534 of the 899 were defilement. 286 remain pending before courts, some for 2 to 10 years.",
      },
      {
        type: "p",
        text: "JoyNews Research has also identified at least 44 cases of sexual abuse by teachers and heads since January 2015. Heads are involved in four out of ten recent cases.",
      },
      {
        type: "p",
        text: "Meanwhile, the conviction gap is worrying: In 2015, DOVVSU recorded 15,749 gender-based violence cases, with 1,291 sent to court and 139 convicted. UNICEF Ghana estimates only about 15% of child sexual abuse cases end in conviction. UNICEF also reports that over 1 in 10 teenage girls aged 15–19 report having suffered sexual violence.",
      },
      {
        type: "quote",
        text: "These are not just numbers. They are future mothers and leaders carrying trauma.",
      },
      {
        type: "p",
        text: "And this brings us to why our laws struggle. Ghana criminalised marital rape in 2007 when the Domestic Violence Act, 2007 (Act 732) amended section 42(g) of the Criminal Offences Act, 1960 (Act 29) to remove presumed consent in marriage. Yet for a decade (2007–2017), no case was recorded by DOVVSU — not because it did not happen, but because of unwillingness to report. If law can be on the books and still be socially unenforceable in marriage, how much harder is it in a school where the power imbalance is even more stark?",
      },

      { type: "h2", text: "Conclusion: Beyond Obuasi" },
      {
        type: "p",
        text: "This is beyond Obuasi SHS. Obuasi is only the school that got caught on camera. When such misconduct comes out like Obuasi has, as a country, beyond the moral outcry, we need to provide as a matter of urgency:",
      },
      {
        type: "list",
        items: [
          "Mandatory interdiction protocol for all heads and teachers accused of sexual offences involving students — not as punishment, but as child protection.",
          "Independent Safeguarding Offices in all SHS, with confidential reporting lines directly to DOVVSU and GES, not through the headmaster's office.",
          "No school closure as an investigative tool unless there is physical danger. Academic work must continue.",
          "Expedited, trauma-informed investigations — 30 days, not 6 months of suspense.",
          "Parliament must finally confront power-based sexual offences — from the classroom to the matrimonial home.",
        ],
      },
      {
        type: "p",
        text: "The law says 99 guilty men may walk so that one innocent man is not punished. But the morality that gives law its legitimacy says not one more child should be risked so that one powerful man is not inconvenienced.",
      },
      {
        type: "quote",
        text: "That is the line. That is where we must draw it.",
      },
    ],
    references: [
      "Child Rights International (2026). 899 cases review.",
      "JoyNews Research (2026). 44 cases tracked since 2015.",
      "UNICEF Ghana (10 Dec 2025). Ending the Silence.",
      "DOVVSU Records 2015; Domestic Violence Act 2007 (Act 732).",
    ],
  },
];

export const sortedArticles = [...articles].sort((a, b) =>
  b.date.localeCompare(a.date),
);

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}

export function readingMinutes(article: Article) {
  const text = article.body
    .map((b) => (b.type === "list" ? b.items.join(" ") : b.text))
    .join(" ");
  return Math.max(1, Math.round(text.split(/\s+/).length / 220));
}

export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
