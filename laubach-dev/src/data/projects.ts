export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  name: string;
  date: string;
  /** Shown after the date, e.g. "Oct 2026 – present · In progress". */
  status?: "in progress" | "no longer receiving updates";
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

// Home features the featured ones.
export const projects: Project[] = [
  {
    name: "SPHERExplorer",
    date: "Nov 2026",
    note: "1st place, NASA Space Apps Challenge 2026 (local event)",
    tech: ["Python", "TypeScript", "WebGL2", "Cloud Run"],
    summary:
      "A public web tool for exploring NASA SPHEREx images of the sky over time: search any object, play its images in time order, and compare them with partner surveys. Built with Matthew Saunders for the NASA Space Apps Challenge 2026.",
    points: [
      "I set up hosting: CI deploys to Google Cloud Run and the spherexplorer.earth domain.",
      "I built the full-page app layout and wrote the guided tour, public docs and submission.",
    ],
    links: [
      { label: "Live site", href: "https://spherexplorer.earth" },
      { label: "Repo", href: "https://github.com/mattsaund/SPHERExplorer" },
      { label: "Demo video", href: "https://www.youtube.com/watch?v=EtcNxZPPJSA" },
    ],
    featured: true,
  },
  {
    name: "gantry",
    date: "Oct 2026 – present",
    status: "in progress",
    tech: ["Rust", "SQLite"],
    summary: "A desktop app for job seekers that finds matching postings and will prepare an application for each one, which you review and submit yourself.",
    points: [
      'Working today: discovery from Greenhouse, Lever and Ashby boards, the SimplifyJobs lists and Hacker News "Who is hiring?", with duplicates removed and your filters applied.',
      "Next: the review app, and staging applications.",
    ],
    links: [{ label: "Repo", href: "https://github.com/cli-geek/gantry" }],
    featured: true,
  },
  {
    name: "Infotainment Dashboard",
    date: "Jul 2026",
    tech: ["React", "JavaScript", "CSS"],
    summary: "A browser-based in-flight entertainment interface for an airline, built for UMBC's CMSC 437.",
    points: [
      "I led the team, assigned roles, and set up the repository and issue tracking.",
      "I built the shopping, food ordering and passenger services screens.",
    ],
    credit: "With William Dubois, Zcianty Orogo and Akrem Yusuf",
    links: [{ label: "Repo", href: "https://github.com/cli-geek/437-group3-semester-project" }],
    featured: true,
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
    links: [{ label: "Repo", href: "https://github.com/cli-geek/batt-buddy" }],
    featured: false,
  },
  {
    name: "noverview",
    date: "Apr 2026",
    status: "no longer receiving updates",
    tech: ["JavaScript", "Firefox extension"],
    summary: "A Firefox extension that hides Google's AI Overviews and other AI-generated boxes, leaving only links to websites.",
    points: [
      "Loads several pages of results into one.",
      "Backs off on its own if Google rate-limits it.",
      "Collects no data.",
    ],
    links: [{ label: "Repo", href: "https://github.com/cli-geek/noverview" }],
    featured: false,
  },
  {
    name: "laubach.dev",
    date: "Jun 2026",
    tech: ["Astro", "Cloudflare"],
    summary: "The site you're on: a static Astro build with plain CSS and light and dark themes.",
    points: ["Deploys to Cloudflare automatically on every push."],
    links: [{ label: "Repo", href: "https://github.com/cli-geek/laubach-dev-site" }],
    featured: false,
  },
];
