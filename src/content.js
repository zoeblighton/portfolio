// All editable site content lives here. Update copy, links and projects
// without touching layout code. Images are imported so the build verifies
// they exist; swap a file in /src and update the import to replace one.

import headshot from "./headshot.jpg";
import astra from "./astra-screenshot.png";
import dearDiary from "./dear-diary-screenshot.png";
import littlePlans from "./little-plans-screenshot.png";
import tripleMoon from "./triplemoon-screenshot.png";
import dictionary from "./dictionary-app-screenshot.png";
import weather from "./weather-app-screenshot.png";
import pokemon from "./pokemon-screenshot.png";
import astraFrequency from "./case-studies/astra-frequency.jpg";
import astraMobile from "./case-studies/astra-mobile.jpg";
import dearDiaryCollection from "./case-studies/dear-diary-collection.jpg";
import dearDiaryMobile from "./case-studies/dear-diary-mobile.jpg";
import littlePlansMobile from "./case-studies/little-plans-mobile.jpg";

export const site = {
  firstName: "Zoe",
  lastName: "Blighton",
  role: "Web Developer",
  currently: "Building the Little Plans app",
  location: "Suffolk, UK",
  timeZone: "Europe/London",
  availability: "Open to new projects",
  email: "zoeblighton.seo@gmail.com",
  resumeUrl: "/resume/ZoeBlightonResume.pdf",
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
    slug: "astra",
    title: "Astra",
    titleLines: ["Astra"],
    year: "2026",
    discipline: "Web App",
    summary:
      "An atmospheric music discovery app that nudges listeners beyond their usual orbit — wander by mood, genre and atmosphere, find your frequency and build a personal universe of saved sounds. A FastAPI backend on Render powers live Spotify search and secure Spotify login, bringing listeners’ liked songs, followed artists and playlists into the app — with tokens kept server-side and labelled sample data as a fallback.",
    role: "Design & full-stack development",
    tags: ["React", "Vite", "Python", "FastAPI", "Spotify Web API", "OAuth"],
    image: astra,
    imageAlt: "Astra Discover page: “Every sound opens a new universe.”",
    tone: "#D8D2DC",
    layout: "split",
    href: "https://astra-music-app.netlify.app/",
    links: [
      { label: "Live", href: "https://astra-music-app.netlify.app/" },
      { label: "Code", href: "https://github.com/zoeblighton/astra" },
    ],
  },
  {
    slug: "dear-diary-art-club",
    title: "Dear Diary Art Club",
    titleLines: ["Dear Diary", "Art Club"],
    year: "2026",
    discipline: "Client — Website",
    summary:
      "A brand site for an artist’s hand-painted greetings cards, made in the Suffolk countryside. Prerendered React pages for speed and SEO, an Instagram feed served by Netlify Functions and a newsletter sign-up, with shopping handed off to Etsy and Faire.",
    role: "Sole designer & developer",
    tags: ["React", "TypeScript", "Vite", "Netlify Functions", "Instagram API", "SEO"],
    image: dearDiary,
    imageAlt: "Dear Diary Art Club homepage: “Beautifully illustrated. A little bit witty.”",
    tone: "#E9D6D4",
    layout: "feature",
    href: "https://deardiaryartclub.com/",
    links: [{ label: "Live", href: "https://deardiaryartclub.com/" }],
  },
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
    href: "https://littleplansapp.com/",
    links: [{ label: "Live", href: "https://littleplansapp.com/" }],
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
    href: "https://triplemoon.co.uk/",
    links: [
      { label: "Live", href: "https://triplemoon.co.uk/" },
      { label: "Code", href: "https://github.com/zoeblighton/triple-moon" },
    ],
  },
];

// Smaller apps from learning React, listed compactly after the projects.
// `image` and `tone` drive the cursor preview on hover.
export const experiments = [
  {
    slug: "pokemon",
    title: "Pokémon",
    year: "2026",
    summary: "A Game Boy–style randomiser and search built on the PokéAPI.",
    tags: ["React", "PokéAPI"],
    image: pokemon,
    tone: "#D5D9C3",
    links: [
      { label: "Live", href: "https://pokemon-randomiser.netlify.app/" },
      { label: "Code", href: "https://github.com/zoeblighton/pokemon-random-search" },
    ],
  },
  {
    slug: "dictionary",
    title: "Dictionary",
    year: "2025",
    summary: "Definitions, phonetics, synonyms and images from two APIs in one calm interface.",
    tags: ["React", "REST APIs"],
    image: dictionary,
    tone: "#E2E0DA",
    links: [
      { label: "Live", href: "https://enchanting-gingersnap-0e85cd.netlify.app/" },
      { label: "Code", href: "https://github.com/zoeblighton/dictionary-project" },
    ],
  },
  {
    slug: "weather",
    title: "Weather",
    year: "2025",
    summary: "Current conditions and a five-day forecast for any city.",
    tags: ["React", "Axios"],
    image: weather,
    tone: "#DFDDEC",
    links: [
      { label: "Live", href: "https://steady-cendol-19e8c9.netlify.app/" },
      { label: "Code", href: "https://github.com/zoeblighton/weather-react-app" },
    ],
  },
];

// Case studies, keyed by project slug. Each one gets its own page at
// /work/<slug> and a "Case study" link on the project. The project's
// title, year, image and links are reused, so only the story lives here.
//   lede     – one or two sentences under the title
//   facts    – label/value pairs beside the lede
//   sections – numbered chapters; `body` is a list of paragraphs, and an
//              optional `image` ({ src, alt, shape: "wide" | "phone" })
//              sits beside or below the text
export const caseStudies = {
  astra: {
    lede: "A music discovery app designed to feel like exploring rather than scrolling, built around an API that said no to most of what I first planned.",
    facts: [
      { label: "Role", value: "Design & full-stack development" },
      { label: "Year", value: "2026" },
      { label: "Built with", value: "React, Vite, Python, FastAPI, Spotify Web API" },
      { label: "Hosting", value: "Netlify (frontend) and Render (backend)" },
    ],
    sections: [
      {
        title: "The brief",
        body: [
          "Streaming apps are very good at giving you more of what you already like. ASTRA was meant to do the opposite: lead listeners towards artists, genres and sounds they wouldn’t usually find.",
          "It needed to feel premium, independent and atmospheric — a place you wander through, not another grid of album covers.",
        ],
      },
      {
        title: "Designing a universe",
        body: [
          "I started with the identity: an “Atmospheric Cosmic” direction of deep charcoal, smoky violet and copper, with orbital shapes and glass used sparingly so it never tips into neon sci-fi.",
          "Before building any screens, I set the palette, type and spacing as design tokens and built the core components — buttons, search, music cards, navigation — as a living UI kit inside the app. Every page is assembled from those parts, so the four destinations (Discover, Explore, Frequency and My Universe) feel like one place.",
        ],
        image: { src: astraFrequency, alt: "ASTRA’s Frequency page: “What does your universe sound like?”", shape: "wide" },
      },
      {
        title: "Working within Spotify’s limits",
        body: [
          "Spotify’s 2026 rules for new apps rule out recommendations, related artists, audio features and preview clips — exactly the tools a discovery app would normally lean on.",
          "So the discovery logic is ASTRA’s own. Mood and atmosphere paths are built from curated genre and style searches, and Frequency maps a short reflection and an “orbiting moods” interaction to one of eight musical identities. Where a result can’t be verified, the interface says so rather than pretending: mood paths are labelled as curated searches, not detected moods.",
        ],
      },
      {
        title: "A backend that keeps secrets",
        body: [
          "A small FastAPI service on Render holds the Spotify credentials and each listener’s access tokens. The browser only ever receives an opaque, HttpOnly session cookie, so tokens never reach JavaScript.",
          "Netlify proxies every /api request to Render, so the browser sees a single site and the login cookie simply works. Once someone connects Spotify, My Universe brings in their liked songs, followed artists and playlists, fetched in parallel. If Spotify refuses one part, only that section says so and the rest still load.",
        ],
      },
      {
        title: "Never broken, always honest",
        body: [
          "The free backend sleeps when it’s quiet, and Spotify only lets a handful of allowlisted people log in to an app like this. Rather than show visitors an error, the frontend times out quickly and falls back to clearly labelled sample data, so anyone can explore the whole experience.",
          "Every item carries its source — Spotify or sample — so nothing claims to be live when it isn’t.",
        ],
        image: { src: astraMobile, alt: "ASTRA’s Discover page on a phone", shape: "phone" },
      },
      {
        title: "A player that moves with the music",
        body: [
          "Playback uses Spotify’s embed, which doesn’t expose its audio. To make the visualiser react anyway, it uses the browser’s screen-share audio capture and the Web Audio API — only when the listener chooses to share — to drive the geometry and spectrum.",
          "The player can be dragged anywhere, or moved with the arrow keys, and all motion respects reduced-motion settings.",
        ],
      },
      {
        title: "What’s next",
        body: [
          "Sessions currently live in memory, so a restart logs people out; moving them to a small database would fix that. Beyond that, applying for Spotify’s extended quota would open login to everyone rather than five testers.",
        ],
      },
    ],
  },

  "dear-diary-art-club": {
    lede: "A brand home for an artist’s hand-painted greetings cards: designed to feel like her work, and to send people straight to where they can buy it.",
    facts: [
      { label: "Client", value: "Dear Diary Art Club, Suffolk" },
      { label: "Role", value: "Sole designer & developer" },
      { label: "Year", value: "2026" },
      { label: "Built with", value: "React, TypeScript, Vite, Netlify Functions, Instagram API" },
    ],
    sections: [
      {
        title: "The brief",
        body: [
          "Olivia paints witty, hand-illustrated greetings cards in the Suffolk countryside and sells them on Etsy, with wholesale through Faire. She didn’t need another checkout. She needed a home for the brand: somewhere to tell the story behind the cards and hand shoppers and stockists to the right place.",
        ],
      },
      {
        title: "Making a website feel hand-made",
        body: [
          "The cards are painted, so the site shouldn’t look boxed in. Sections end in brush-stroke edges and painted waves, generated as SVG masks by a small script so they stay crisp at any size. Olivia’s own line drawings, lifted from her cards, become illustrated links, and a painted swipe underlines “witty” in the headline.",
          "Photography is shown uncropped wherever possible, and until real photos arrived, empty slots showed labelled placeholders rather than stock images that would misrepresent her work.",
        ],
        image: { src: dearDiaryCollection, alt: "A grid of Dear Diary Art Club greetings cards on the homepage", shape: "wide" },
      },
      {
        title: "Fast, and easy to find",
        body: [
          "Each page is prerendered to real HTML at build time, with its own title, description, canonical link and share tags, plus a sitemap and a genuine 404 status for missing pages. Search engines and link previews see the full page without running JavaScript.",
          "Phones get smaller images through srcset, and the fonts are self-hosted and preloaded so the first paint doesn’t wait on a third party.",
        ],
      },
      {
        title: "A site that stays fresh on its own",
        body: [
          "The “Follow along” section shows Olivia’s chosen Instagram posts, falling back to her latest ones through two Netlify Functions: one fetches and caches the feed for an hour, keeping the access token on the server, and another runs weekly to renew that token before it expires.",
          "A newsletter sign-up appears once per visitor, and seasonal, customer-photo and review sections let the site change with the year without a redesign.",
        ],
        image: { src: dearDiaryMobile, alt: "The Dear Diary Art Club homepage on a phone", shape: "phone" },
      },
      {
        title: "Working with a client",
        body: [
          "I wrote the setup and content guides for a non-developer, from connecting Instagram to adding new photos, and built scripts to turn Olivia’s product shots into consistent, watermarked grid images. The site launched on its own domain, deardiaryartclub.com, in November 2026.",
        ],
      },
    ],
  },

  "little-plans": {
    lede: "A planning app for early years practitioners, shaped by nine years of doing the job myself.",
    facts: [
      { label: "Role", value: "Founder, designer & developer" },
      { label: "Status", value: "Waitlist live · app in testing" },
      { label: "App", value: "React Native, Expo Router, Supabase" },
      { label: "Website", value: "React, Vite, Netlify Functions, Resend" },
    ],
    sections: [
      {
        title: "The problem",
        body: [
          "Before moving into development, I spent nine years at a Montessori nursery as a teacher and assistant manager. Every week meant planning activities across age groups, checking them against the EYFS, buying resources and keeping parents informed — usually in our own time.",
          "Little Plans turns that into minutes: choose a weekly topic and a room, and get a ready-made week of activities, a shopping list and a sheet for families.",
        ],
      },
      {
        title: "Testing the idea first",
        body: [
          "Before building the app, I launched a waitlist site at littleplansapp.com to see whether practitioners wanted it. Sign-ups go through a Netlify Function to Resend, which adds each person to an audience and sends a branded confirmation email, with the API key kept off the browser.",
          "The page shows real pricing — a practitioner plan and a whole-setting plan — so interest reflects what people would actually pay.",
        ],
        image: { src: littlePlansMobile, alt: "The Little Plans waitlist page on a phone: “Stop planning. Start teaching.”", shape: "phone" },
      },
      {
        title: "Planning a week in minutes",
        body: [
          "Each nursery room has its own age range and its own plans. A new week doesn’t start blank: the app builds one from the week’s theme, then saved and in-season ideas, choosing each next activity to cover learning areas the week hasn’t touched yet. Baby rooms get versions of activities suited to younger children.",
          "Around that sit the things practitioners actually need: a shopping list that links each item to Amazon, a list of what families should send in, parent newsletters, nursery opening weeks on a calendar, and ideas such as tuff trays, forest school and Montessori activities.",
        ],
      },
      {
        title: "Built for a whole team",
        body: [
          "A nursery’s plans are shared, so the app runs on Supabase. Nurseries, staff, rooms, plans and saved ideas each have their own table, all protected by row-level security so staff only ever see their own setting. New staff join with an invite code, and every change is saved to the server, so the whole team works from the same plans.",
        ],
      },
      {
        title: "Where it is now",
        body: [
          "The waitlist is live, and the app is being prepared for TestFlight builds so that nurseries can start testing it. Next is a beta with real settings, using their feedback to shape the content before launch.",
        ],
      },
    ],
  },
};
