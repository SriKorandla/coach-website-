export type CatalogProgram = {
  slug: string;
  title: string;
  category: string;
  duration: string;
  daysPerWeek: string;
  equipment: string;
  level: string;
  price: string;
  featured?: boolean;
  badge?: string;
  summary: string;
  overview: string;
  includes: string[];
  bestFor: string;
};

export const catalog: CatalogProgram[] = [
  {
    slug: "follow-along",
    title: "Follow-Along: Current Block",
    category: "Follow-along",
    duration: "Live · updates weekly",
    daysPerWeek: "4 days",
    equipment: "Barbell, rack, bench",
    level: "Intermediate",
    price: "$29 / month",
    featured: true,
    badge: "Live now",
    summary:
      "Run the same program I am running. Same sessions, same progression, same weekly intent.",
    overview:
      "This is not a custom plan and it is not a leftover PDF. Each week you get the block I am actually training — main lifts, accessories, and how I am loading them. When the block changes, yours does too. Mock listing for now; swap in the real current cycle when you are ready.",
    includes: [
      "The current training week as I run it",
      "Progression notes and intended RPE / load ranges",
      "Simple substitutions if you are missing a variation",
      "A new week when I move to the next one",
    ],
    bestFor:
      "Self-directed lifters who want to train in parallel with the coach instead of guessing what to do next.",
  },
  {
    slug: "off-season-strength",
    title: "Off-Season Strength",
    category: "Strength",
    duration: "12 weeks",
    daysPerWeek: "4 days",
    equipment: "Full barbell gym",
    level: "Intermediate",
    price: "$79",
    summary:
      "Build squat, hinge, and press strength in the months you can actually accumulate fatigue.",
    overview:
      "A 12-week off-season block with two lower-emphasis days and two upper-emphasis days. Volume starts conservative, then climbs. Mock program — replace with your real off-season template.",
    includes: [
      "12 weeks of written sessions",
      "Squat, hinge, press, and row progressions",
      "Deload week in week 7",
      "Optional sprint / jump finishers",
    ],
    bestFor: "Field and court athletes in a true off-season with 4 training days.",
  },
  {
    slug: "in-season-keep",
    title: "In-Season Keep Strong",
    category: "In-season",
    duration: "8 weeks",
    daysPerWeek: "2 days",
    equipment: "Barbell + rack",
    level: "All levels",
    price: "$49",
    summary:
      "Short sessions that hold strength through practice, games, and travel.",
    overview:
      "Two lifting days per week, 45 minutes or less. One lower, one upper. Intensity stays, junk volume goes. Mock program for in-season athletes.",
    includes: [
      "8 weeks of 2-day templates",
      "Game-week and travel substitutions",
      "Posterior-chain emphasis to stay durable",
      "Clear “skip this if you played yesterday” notes",
    ],
    bestFor: "Athletes who need to stay strong without competing with practice.",
  },
  {
    slug: "speed-power",
    title: "Acceleration & Power",
    category: "Speed",
    duration: "8 weeks",
    daysPerWeek: "3 days",
    equipment: "Track or field + weights",
    level: "Intermediate",
    price: "$69",
    summary:
      "Acceleration, jumps, and explosive strength for athletes who need to get off the line.",
    overview:
      "Three days: acceleration, power / jumps, and a strength day that supports both. Mock speed block — swap in your real sprint and jump progressions.",
    includes: [
      "Acceleration sessions with distance and rest prescribed",
      "Jump and throw pairings",
      "Trap bar and Olympic-lift variations (with substitutions)",
      "Weekly density that respects sprint quality",
    ],
    bestFor: "Team-sport athletes with access to a field or hallway and a barbell.",
  },
  {
    slug: "garage-minimal",
    title: "Garage Gym Strength",
    category: "Minimal equipment",
    duration: "10 weeks",
    daysPerWeek: "3 days",
    equipment: "Barbell, rack, pull-up bar",
    level: "Beginner to intermediate",
    price: "$59",
    summary:
      "Serious strength work without machines, cables, or a commercial gym.",
    overview:
      "Three full-body-leaning days built around squat, hinge, press, and pull. If you have a rack and plates, you can run it. Mock garage-gym program.",
    includes: [
      "10 weeks, 3 days per week",
      "No machines required",
      "Conditioning finishers that fit a driveway or garage",
      "Load progressions written in ranges",
    ],
    bestFor: "Adults and athletes training at home with a basic barbell setup.",
  },
  {
    slug: "athlete-base",
    title: "Athletic Base",
    category: "Development",
    duration: "12 weeks",
    daysPerWeek: "3 days",
    equipment: "Barbell gym",
    level: "Beginner",
    price: "$59",
    summary:
      "Positions, work capacity, and a first real strength base for younger athletes.",
    overview:
      "Learn to squat, hinge, press, and brace before chasing numbers. Mock high-school / early-training-age program.",
    includes: [
      "Technique-first main lifts",
      "Simple jump and sprint prep",
      "Accessory work for knees, hips, and trunk",
      "How to add load without rushing",
    ],
    bestFor: "High school athletes or adults returning after a long layoff.",
  },
  {
    slug: "hypertrophy-engine",
    title: "Hypertrophy Engine",
    category: "Size",
    duration: "8 weeks",
    daysPerWeek: "4 days",
    equipment: "Full gym",
    level: "Intermediate",
    price: "$69",
    summary:
      "Add muscle in the places that help you produce force — not a bodybuilding split for its own sake.",
    overview:
      "Upper / lower split with honest sets and rest. Built to grow tissue that transfers to strength. Mock hypertrophy block.",
    includes: [
      "4-day upper/lower split",
      "Rep ranges and rest prescribed",
      "Optional isolation work if you have cables",
      "Reload week in week 5",
    ],
    bestFor: "Lifters who need more muscle before the next strength cycle.",
  },
  {
    slug: "posterior-chain",
    title: "Posterior Chain Rebuild",
    category: "Durability",
    duration: "6 weeks",
    daysPerWeek: "3 days",
    equipment: "Barbell, bands, bench",
    level: "All levels",
    price: "$45",
    summary:
      "Hamstrings, glutes, and back — the work most programs pretend they already did.",
    overview:
      "A focused 6-week block for people whose low back or hamstrings keep talking. Mock durability program, not medical treatment.",
    includes: [
      "Hinge progressions from RDL to heavier pulls",
      "Hamstring and glute accessories",
      "Trunk anti-extension work",
      "Clear pain-vs-effort guidelines",
    ],
    bestFor: "Athletes coming off a cranky back or a season of neglected posterior chain.",
  },
];

export function getCatalogProgram(slug: string) {
  return catalog.find((program) => program.slug === slug);
}

export const catalogFeatured = catalog.find((program) => program.featured);
export const catalogRest = catalog.filter((program) => !program.featured);
