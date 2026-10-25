export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  name: string;
  date: string;
  /** Shown as a status chip next to the name. */
  status?: "in progress";
  tech: string[];
  /** One-sentence lead: what it is. */
  summary: string;
  /** Short separate ideas, one per line. */
  points: string[];
  /** Highlighted callout, e.g. a contest or award. */
  note?: string;
  /** Collaborators, shown small under the points. */
  credit?: string;
  links: ProjectLink[];
  featured: boolean;
}

// Order is by professional value, not date. Home features the featured ones.
export const projects: Project[] = [
  {
    name: "gantry",
    date: "Oct 2026 – now",
    status: "in progress",
    tech: ["Rust", "SQLite"],
    summary: "A desktop app for job seekers that finds matching postings and prepares an application for each one.",
    points: [
      "You review every application and submit it yourself with one click.",
      'Working today: discovery from Greenhouse, Lever and Ashby boards, the SimplifyJobs lists and Hacker News "Who is hiring?"',
      "Duplicates are removed and your filters applied.",
    ],
    links: [{ label: "repo", href: "https://github.com/cli-geek/gantry" }],
    featured: true,
  },
  {
    name: "Boo & Breakfast",
    date: "Oct 2026 – now",
    status: "in progress",
    tech: ["Godot", "GDScript", "multiplayer server"],
    summary: "A cooperative multiplayer game for 2–6 players: you and your friends run a cozy haunted inn for monster guests.",
    points: [
      "Each player holds part of the puzzle, so rooms, amenities and overnight problems get solved together.",
      "Runs in the browser or as a Linux build, on its own multiplayer server.",
    ],
    note: "Built for Handshake's AI Skills Studio Challenge",
    links: [{ label: "Play here", href: "https://boo-and-breakfast.netlify.app" }],
    featured: true,
  },
  {
    name: "noverview",
    date: "Apr 2026",
    tech: ["JavaScript", "Firefox extension"],
    summary: "A Firefox extension that hides Google's AI Overviews and other AI-generated boxes, leaving only links to websites.",
    points: [
      "Loads several pages of results into one.",
      "Backs off on its own if Google rate-limits it.",
      "Collects no data.",
    ],
    links: [{ label: "repo", href: "https://github.com/cli-geek/noverview" }],
    featured: true,
  },
  {
    name: "Infotainment Dashboard",
    date: "Jul 2026",
    tech: ["React", "JavaScript", "CSS"],
    summary: "A browser-based in-flight entertainment interface for an airline, built for UMBC's CMSC 437.",
    points: [
      "I led the team and set up the repository and issue tracking.",
      "I built the shopping, food ordering and passenger services screens.",
    ],
    credit: "With William Dubois, Zcianty Orogo and Akrem Yusuf",
    links: [{ label: "repo", href: "https://github.com/cli-geek/437-group3-semester-project" }],
    featured: false,
  },
  {
    name: "batt-buddy",
    date: "Oct 2026",
    tech: ["Swift", "shell"],
    summary: "A macOS menu-bar app that shows how much battery time is left.",
    points: [
      "macOS dropped the estimate from its battery menu in 10.12.2. This puts it back.",
      "One Swift file with no dependencies.",
      "A shell script installs it and sets it to start at login.",
    ],
    links: [{ label: "repo", href: "https://github.com/cli-geek/batt-buddy" }],
    featured: false,
  },
  {
    name: "laubach.dev",
    date: "Jun 2026",
    tech: ["Astro", "Cloudflare"],
    summary: "The site you're on: a static Astro build with plain CSS and light and dark themes.",
    points: ["Deploys to Cloudflare automatically on every push."],
    links: [{ label: "repo", href: "https://github.com/cli-geek/laubach-dev-site" }],
    featured: false,
  },
];
