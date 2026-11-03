export const assetUrls = {
  hero:
    "https://images.squarespace-cdn.com/content/v1/6643de46c007cc3ef704c364/67276301-a102-4a83-a1b6-9abca7c81f92/pexels-karlsolano-3648063.jpg",
  about:
    "https://images.squarespace-cdn.com/content/v1/6643de46c007cc3ef704c364/bbd83f98-803d-4193-8430-d001013d65b1/pexels-jaymantri-5439.jpg",
  press:
    "https://images.squarespace-cdn.com/content/v1/6643de46c007cc3ef704c364/35b3b617-e602-4f9d-b9b9-c6943584e4f6/pexels-omerderinyar-17846072.jpg",
  careers:
    "https://images.squarespace-cdn.com/content/v1/6643de46c007cc3ef704c364/0da861b0-4fab-4fc7-a035-85304b76b6b3/White_Doves_at_the_Blue_Mosque_%285778806606%29.jpg",
  graph:
    "https://images.squarespace-cdn.com/content/v1/6643de46c007cc3ef704c364/c7d07915-d02c-483a-baae-bb22fb8656c9/spanning+graph.png",
  podcastScreen:
    "https://images.squarespace-cdn.com/content/v1/6643de46c007cc3ef704c364/0e70ad51-6f43-41ef-915a-81db46e0bc94/Screen+Shot+2024-05-15+at+4.51.00+PM.png",
} as const;

export const researchPaperUrl =
  "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5655570";
export const researchPdfUrl =
  "https://static1.squarespace.com/static/6643de46c007cc3ef704c364/t/664721532ba078001d0277d3/1715937620740/Loewi-Life-Satisfaction-2024.pdf";

export type ProjectCategory =
  | "Civic life"
  | "Research & policy"
  | "Media"
  | "Partnerships";

export type Project = {
  slug: string;
  title: string;
  shortTitle: string;
  category: ProjectCategory;
  image: string;
  imageAlt: string;
  summary: string;
  intro: string;
  paragraphs: string[];
  cta?: { label: string; href: string; external?: boolean };
};

export const projects: Project[] = [
  {
    slug: "nominate-a-candidate",
    title: "Nominate a Candidate",
    shortTitle: "Nominate a Candidate",
    category: "Civic life",
    image:
      "https://images.squarespace-cdn.com/content/v1/6643de46c007cc3ef704c364/1718914528332-M4F5SFH64055D9AXPMCE/pexels-rovenimages-com-344613-949592.jpg",
    imageAlt: "A crowd gathered beneath an illuminated American flag",
    summary:
      "Help find the very best leaders our country has to offer. Nominate someone you believe deserves to help run the United States.",
    intro: "Do you know the next president?",
    paragraphs: [
      "Our country needs the very best leaders we have — and we think you know where to find them! On Nomination Day, the 5th of July, we ask you to nominate the people you think most deserve to help run the United States.",
      "For every nomination we receive, The Dovecote Institute and our partners will review the candidate, and the strongest nominees will receive support and resources on their journey to office.",
    ],
  },
  {
    slug: "about-nomination-day",
    title: "About Nomination Day",
    shortTitle: "About Nomination Day",
    category: "Civic life",
    image:
      "https://images.squarespace-cdn.com/content/v1/6643de46c007cc3ef704c364/1718914298292-493BJJ10S5W8WVO20KTB/andy-feliciotti-6kA9FjqUxhM-unsplash.jpg",
    imageAlt: "The United States Capitol building",
    summary:
      "A new American event on the Fifth of July, dedicated to finding the very best leaders our country has to offer.",
    intro: "The morning after independence, we get to work.",
    paragraphs: [
      "On the Fourth of July, we celebrated our independence. The next morning, we got down to the work of governing ourselves. Nomination Day, celebrated on the Fifth of July, is dedicated to finding the very best leaders our country has to offer.",
      "While there are many ways to make an impact, people in elected office hold incredibly vast and completely unique powers in the United States. Making laws — making wars — choosing the Supreme Court, and deciding how to spend the almost $10 trillion dollars that come from federal, state, and local governments every year.",
      "Nobody but the government can do these things. So, for these uniquely powerful roles, we must have uniquely good people. And we believe that the only way to find these leaders is with the help of the people who know them best — you.",
    ],
    cta: { label: "Nominate a candidate", href: "/work/nominate-a-candidate" },
  },
  {
    slug: "life-satisfaction-appropriations-request",
    title: "An American Life Satisfaction Survey",
    shortTitle: "American Life Satisfaction Survey",
    category: "Research & policy",
    image:
      "https://images.squarespace-cdn.com/content/v1/6643de46c007cc3ef704c364/1715801425885-EA51WBG1HK1UV1FWYNKX/Screen+Shot+2024-05-15+at+3.30.11+PM.png",
    imageAlt: "Document concerning an American life satisfaction survey",
    summary:
      "Advocacy for a national survey that could transform the country’s ability to make human-driven policy.",
    intro: "Policy should be measured by the lives it improves.",
    paragraphs: [
      "In 2024, the United State’s approaches to policy have failed so catastrophically that only 4% of polled Americans believe that the nation is “working very well.” And yet, the United States has never collected any data that will let us see what really does increase satisfaction.",
      "However, the Dovecote Institute’s advocacy on this issue began to find supporters. Congresswoman Eleanor Holmes Norton has officially requested that the Census include questions on life satisfaction in the bi-annual American Community Survey, which would provide millions of publicly available data points, and completely transform the country’s ability to make human-driven policy.",
      "And now, to ensure that this data would remain available to the public regardless of the administration, we are working on the first, annual, high-quality, high-sample, widely available, survey on the quality of American life. Please reach out if you are interested in partnering, or want to know more!",
    ],
    cta: { label: "Partner on this work", href: "/contact?interest=partnership" },
  },
  {
    slug: "the-most-important-podcast",
    title: "The Most Important Podcast",
    shortTitle: "The Most Important Podcast",
    category: "Media",
    image:
      "https://images.squarespace-cdn.com/content/v1/6643de46c007cc3ef704c364/1715801475357-MGXUKU86L4TTWVAVVIAQ/canva-design.jpeg",
    imageAlt: "The Most Important Podcast cover artwork",
    summary:
      "Conversations with professors, film-makers, artists and more about finding and solving the world’s most important problems.",
    intro: "Big problems. Thoughtful people. And rock and roll.",
    paragraphs: [
      "The Most Important Podcast is a show about finding and solving the most important problems in the world (and, rock and roll).",
      "We have conversations with professors, film-makers, artists and more about the issues they’re tackling, and the ways in which their research has inspired the work of the Dovecote Institute. Please reach out if you are interested in talking with us on the show!",
    ],
    cta: {
      label: "Listen on Buzzsprout",
      href: "https://themostimportantpodcast.buzzsprout.com/",
      external: true,
    },
  },
  {
    slug: "partnerships-and-opportunities",
    title: "Partnerships and Opportunities",
    shortTitle: "Partnerships & Opportunities",
    category: "Partnerships",
    image:
      "https://images.squarespace-cdn.com/content/v1/6643de46c007cc3ef704c364/1715801751858-6692ZG8PS7007XFG73M2/Screen+Shot+2024-05-15+at+3.35.17+PM.png",
    imageAlt: "Research diagram for partnerships and opportunities",
    summary:
      "Funders, collaborators, staff, and friends can help move the world toward policies that truly improve life satisfaction.",
    intro: "This work is big, and it needs you too.",
    paragraphs: [
      "After the success of its research, the Dovecote Institute is actively expanding its network. We want to ensure that the world moves towards policies that truly improve life satisfaction — and not be misled by a bad and outdated understanding.",
      "In order to do this work, we are seeking funders, collaborators, staff, and friends of all descriptions. If you are interested in potentially becoming any one of these things, or simply want to know more, please reach out.",
    ],
    cta: { label: "Start a conversation", href: "/contact?interest=partnership" },
  },
];

export const news = [
  {
    title: "The 5th of July is Nomination Day!",
    label: "Civic life",
    href: "/work/about-nomination-day",
    body:
      "On the 5th of July, the Dovecote Institute and partners celebrate a new American event — Nomination Day. On the 4th, we celebrate our independence. On the 5th, we begin the work that our freedom has won us — governing ourselves, with the best people our country has to offer.",
  },
  {
    title: "Congresswoman Norton pushes for an American life satisfaction survey",
    label: "Research & policy",
    href: "/work/life-satisfaction-appropriations-request",
    body:
      "After advocacy from the Dovecote Institute, Congresswoman Eleanor Holmes Norton (DC) officially filed an appropriations request asking the Census to collect data on life satisfaction in the United States — a historic step towards understanding the consequences and opportunities of national policy.",
  },
] as const;

export const searchItems = [
  { title: "Research", type: "Page", href: "/research", description: "Life satisfaction model, evidence base, and white paper" },
  { title: "About the Institute", type: "Page", href: "/about", description: "Our purpose, approach, and priorities" },
  { title: "Work", type: "Page", href: "/work", description: "Research, advocacy, media, and partnerships" },
  { title: "Press & Accolades", type: "Page", href: "/press-1", description: "Comments on the institute’s work" },
  { title: "Careers", type: "Page", href: "/careers", description: "Open roles and our resume bank" },
  { title: "Contact", type: "Page", href: "/contact", description: "Consulting, media, partnerships, and general questions" },
  ...projects.map((project) => ({
    title: project.title,
    type: project.category,
    href: `/work/${project.slug}`,
    description: project.summary,
  })),
  ...news.map((item) => ({
    title: item.title,
    type: "News",
    href: item.href,
    description: item.body,
  })),
];
