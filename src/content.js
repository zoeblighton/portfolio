// All editable site content lives here. Update copy, links and projects
// without touching layout code. Images are imported so the build verifies
// they exist; swap a file in /src and update the import to replace one.

import headshot from "./headshot.jpg";
import littlePlans from "./little-plans-screenshot.png";
import tripleMoon from "./triplemoon-screenshot.png";
import dictionary from "./dictionary-app-screenshot.png";
import weather from "./weather-app-screenshot.png";
import pokemon from "./pokemon-screenshot.png";

export const site = {
  firstName: "Zoe",
  lastName: "Blighton",
  role: "Web Developer",
  currently: "Building the Little Plans app",
  location: "Suffolk, UK",
  timeZone: "Europe/London",
  availability: "Open to new projects",
  email: "zoeblighton.seo@gmail.com",
  resumeUrl: "/resume/zoe-blighton-resume-PDF.pdf",
  resumeFileName: "Zoe-Blighton-Resume.pdf",
};

export const hero = {
  // One entry per line. `align` places it: "left", "right" or "indent".
  // The caption sits in the empty space beside the line marked `caption`.
  lines: [
    { text: "Zoe", align: "right", caption: true },
    { text: "Blighton.", align: "left" },
  ],
  caption:
    "Web developer designing and building websites in React — currently building Little Plans, a planning app for early years practitioners.",
};

export const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/zoe-blighton-a26087347/",
  },
  { label: "GitHub", href: "https://github.com/zoeblighton" },
  {
    label: "SheCodes",
    href: "https://www.shecodes.io/graduates/159152-zoe-blighton",
  },
];

export const about = {
  // Intentional line breaks for large screens and for phones.
  // "{portrait}" becomes a small inline portrait, *word* is set in italic
  // serif, and _word_ gets the hand-drawn underline.
  lines: ["I design {portrait} digital", "experiences *that*", "people _remember_."],
  mobileLines: ["I design", "{portrait} digital", "experiences", "*that* people", "_remember_."],
  portrait: headshot,
  portraitAlt: "Portrait of Zoe Blighton",
  bio: [
    "I take projects from the first idea through branding, UX and design to development and deployment — responsive, SEO-conscious React sites, cross-platform mobile apps with React Native and Expo, and the serverless functions and APIs that hold them together.",
    "My background is in management within an early-years setting. It sharpened my communication, organisation and problem-solving — and it’s the world behind Little Plans, the planning app I’m building for early years practitioners.",
  ],
  capabilities: [
    "Brand & UX design",
    "React & Vite",
    "React Native & Expo",
    "Serverless & APIs",
    "Responsive & SEO",
  ],
  offDuty: "Climbing, yoga, and long walks with my dog, Alfie.",
};

export const contact = {
  // The second line is set in italic serif.
  headline: ["Let’s", "talk."],
};

// Projects render in order. `layout` picks the editorial composition:
//   "feature" – full-bleed image, title and details beneath
//   "split"   – stacked title on one side, offset image on the other
//   "type"    – typography-led; the image follows the cursor on hover
//   "pair"    – consecutive "pair" projects sit side by side, staggered
// `titleLines` sets intentional line breaks for the title.
// `tone` is the background colour behind the screenshot.
// `href` is where clicking the project goes (live site, else code).
export const projects = [
  {
    slug: "little-plans",
    title: "Little Plans",
    titleLines: ["Little", "Plans"],
    year: "2026",
    discipline: "Product — Web & Mobile",
    status: "In progress",
    summary:
      "A planning app for early years practitioners — weekly topic packs, age-adapted EYFS activities and automatic shopping lists. I designed the brand, built the waitlist landing page, and am now building the React Native app.",
    role: "Founder, designer & developer",
    tags: ["React", "Vite", "Netlify Functions", "Resend", "React Native", "Expo"],
    image: littlePlans,
    imageAlt: "Little Plans landing page: “Stop planning. Start teaching.”",
    tone: "#DCDFD0",
    layout: "feature",
    href: "https://github.com/zoeblighton/little-plans-site",
    links: [
      { label: "Code", href: "https://github.com/zoeblighton/little-plans-site" },
    ],
  },
  {
    slug: "triple-moon",
    title: "Triple Moon",
    titleLines: ["Triple", "Moon"],
    year: "2025",
    discipline: "Client — Website",
    summary:
      "A site for a spiritual-wellness practice. Full creative direction — identity, layout and UX — delivered end to end as a responsive, SEO-structured React build.",
    role: "Sole designer & front-end developer",
    tags: ["React", "UI/UX", "Responsive", "SEO"],
    image: tripleMoon,
    imageAlt: "Triple Moon website homepage: “Come home to yourself”",
    tone: "#E5DECB",
    layout: "split",
    href: "https://triplemoon.netlify.app/",
    links: [
      { label: "Live", href: "https://triplemoon.netlify.app/" },
      { label: "Code", href: "https://github.com/zoeblighton/triple-moon" },
    ],
  },
  {
    slug: "dictionary",
    title: "Dictionary",
    titleLines: ["Dictionary"],
    year: "2025",
    discipline: "Web App",
    // Shown like a dictionary entry beneath the title.
    phonetic: "/ˈdɪk.ʃə.nər.i/ noun",
    summary:
      "Type a word, get definitions, phonetics, synonyms and a gallery of related images — two APIs orchestrated into one calm interface.",
    role: "Design & development",
    tags: ["React", "Async JS", "REST APIs"],
    image: dictionary,
    imageAlt: "Dictionary app showing results for the word “success”",
    tone: "#E2E0DA",
    layout: "type",
    href: "https://enchanting-gingersnap-0e85cd.netlify.app/",
    links: [
      { label: "Live", href: "https://enchanting-gingersnap-0e85cd.netlify.app/" },
      { label: "Code", href: "https://github.com/zoeblighton/dictionary-project" },
    ],
  },
  {
    slug: "weather",
    title: "Weather",
    titleLines: ["Weather"],
    year: "2025",
    discipline: "Web App",
    summary:
      "Search any city for current conditions and a five-day forecast, with graceful handling of bad searches.",
    role: "Design & development",
    tags: ["React", "Axios", "API"],
    image: weather,
    imageAlt: "Weather app showing London at 11°C with a five-day forecast",
    tone: "#DFDDEC",
    layout: "pair",
    href: "https://steady-cendol-19e8c9.netlify.app/",
    links: [
      { label: "Live", href: "https://steady-cendol-19e8c9.netlify.app/" },
      { label: "Code", href: "https://github.com/zoeblighton/weather-react-app" },
    ],
  },
  {
    slug: "pokemon",
    title: "Pokémon",
    titleLines: ["Pokémon"],
    year: "2026",
    discipline: "Web App",
    summary:
      "Generate, search and build a six-Pokémon party in a Game Boy–style interface powered by the PokéAPI.",
    role: "Design & development",
    tags: ["React", "CSS", "API"],
    image: pokemon,
    imageAlt: "Pokémon randomiser showing Dragonair and a six-Pokémon party",
    tone: "#D5D9C3",
    layout: "pair",
    href: "https://pokemon-randomiser.netlify.app/",
    links: [
      { label: "Live", href: "https://pokemon-randomiser.netlify.app/" },
      { label: "Code", href: "https://github.com/zoeblighton/pokemon-random-search" },
    ],
  },
];
