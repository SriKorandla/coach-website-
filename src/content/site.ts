export const site = {
  name: "Korandla Performance",
  shortName: "KP",
  tagline: "Strength & Conditioning",
  email: "coachkorandla@gmail.com",
  instagram: "https://instagram.com",
  location: "Remote",
  description:
    "Strength and conditioning for athletes and driven adults who want to get stronger, move better, and stay in the game.",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/results", label: "Results" },
  { href: "/schedule", label: "Schedule" },
  { href: "/contact", label: "Contact" },
];

export const consult = {
  title: "Free 30-minute 1:1 consult",
  duration: "30 minutes",
  timezoneLabel: "Pacific Time",
  timezone: "America/Los_Angeles",
  slotMinutes: 30,
  weekdayWindows: [
    { start: 6 * 60, end: 8 * 60 },
    { start: 17 * 60, end: 21 * 60 },
  ],
  weekendWindow: { start: 6 * 60, end: 21 * 60 },
  lede: "A working call — not a pitch deck. We talk about your sport, your training history, and whether coaching here is the right next step.",
  covers: [
    "What you are training for and where things are stuck",
    "Schedule, equipment, and injuries I need to know about",
    "Whether a written program, remote 1:1, or the follow-along block is the right fit",
    "What the first training block would look like if we start",
  ],
};

export const hero = {
  eyebrow: "Strength & Conditioning",
  title: "Train with intent. Perform for years.",
  lede: "Programming built around your sport, your schedule, and the qualities that actually transfer — strength, speed, durability, and confidence under fatigue.",
  primaryCta: { href: "/contact", label: "Apply for coaching" },
  secondaryCta: { href: "/programs", label: "See programs" },
};

export const stats = [
  { value: "1:1", label: "Remote coaching" },
  { value: "S&C", label: "Performance first" },
  { value: "Follow", label: "The program I am on" },
];

export const audiences = [
  {
    title: "Competitive athletes",
    body: "High school, college, and post-grad athletes who need a plan that fits their sport calendar — not a bodybuilding split in disguise.",
  },
  {
    title: "Field & court sports",
    body: "Build the engine: acceleration, change of direction, repeat-sprint ability, and the strength to stay available through a season.",
  },
  {
    title: "Adults who want to perform",
    body: "You are not trying to look busy in the gym. You want measurable strength, better movement, and a body that holds up at work and in life.",
  },
];

export const method = [
  {
    step: "01",
    title: "Assess",
    body: "Training history, sport demands, injuries, schedule, and what “better” actually means for you. No generic intake quiz pretending to be a plan.",
  },
  {
    step: "02",
    title: "Program",
    body: "A clear weekly structure: main lifts, speed or power work if it belongs, accessories that earn their place, and recovery that is scheduled — not hoped for.",
  },
  {
    step: "03",
    title: "Adjust",
    body: "We review how sessions actually went. Loads, volume, and emphasis move with your readiness, not a PDF you were sent in January.",
  },
];

export const programs = [
  {
    slug: "buy-a-program",
    title: "Buy a Program",
    format: "One-time purchase",
    summary:
      "A complete training block you can run on your own. Clear sessions, progression, and intent — built to be followed, not decoded.",
    includes: [
      "A full written program (not a random week of workouts)",
      "Main lifts, accessories, and how to progress them",
      "Equipment notes and substitutions",
      "Keep it and rerun the block when you want",
    ],
    cta: "Get a program",
    href: "/programs",
  },
  {
    slug: "remote-coaching",
    title: "Remote 1:1 Coaching",
    format: "Ongoing · anywhere",
    summary:
      "Individualized programming with a coach in the details. We write the week around you — sport, schedule, equipment, and how training is actually going.",
    includes: [
      "Custom weekly program delivered remotely",
      "Video form review and session feedback",
      "Check-ins and load adjustments",
      "In-season, travel, and equipment constraints handled",
    ],
    cta: "Apply for coaching",
    href: "/contact",
  },
  {
    slug: "follow-along",
    title: "Follow-Along Training",
    format: "Same program I am running",
    summary:
      "You run the block I am running. Same sessions, same progression, same weekly intent — not a custom plan, the actual program I am on right now.",
    includes: [
      "The current training block as I train it",
      "Weekly sessions posted as the block moves",
      "Notes on intent, loading, and simple substitutions",
      "You train in parallel, not on a separate template",
    ],
    cta: "Join this block",
    href: "/programs/follow-along",
  },
];

export const philosophy = {
  quote:
    "Most people do not fail because they need a more complicated program. They fail because nobody owned the basics long enough, then progressed them on purpose.",
  points: [
    {
      title: "Quality over chaos",
      body: "Bar path, positions, and intent before load. You can always add weight. You cannot always undo sloppy patterns.",
    },
    {
      title: "Sport before the feed",
      body: "Training should make you better at the thing you care about. If it only looks hard on camera, it is not the job.",
    },
    {
      title: "Stay available",
      body: "The best program is the one you can keep doing. Durability, sleep, and in-season reality are part of the plan.",
    },
  ],
};

export const about = {
  headline: "A coach, not a content account.",
  intro:
    "Korandla Performance is a strength and conditioning practice built to help athletes and serious adults get stronger, faster, and harder to break. The work is simple to explain and demanding to do well.",
  story: [
    "I started coaching because I wanted training to mean something — not random workouts, not copied templates, and not programs that ignore the sport, the calendar, or the person in front of them.",
    "The standard here is straightforward: know why a session exists, execute it well, and change it when the evidence says to. You will always know what we are chasing this block and how we will tell if it is working.",
  ],
  principles: [
    "Progressive overload with a reason, not a guess",
    "Speed and power when the athlete actually needs them",
    "Honest communication about fatigue, life, and schedule",
    "Long-term athletic development over short-term soreness",
  ],
};

export const results = {
  headline: "What the work is for.",
  lede: "Results here means more than a PR screenshot. It is a stronger athlete who can still play, practice, and live. Swap these with your real athletes when you are ready.",
  cases: [
    {
      name: "High school field athlete",
      timeframe: "12-week off-season",
      outcome: "Trap bar deadlift +65 lb, faster 10-yard start, no missed practices.",
      note: "Built a squat and hinge base, then layered acceleration work twice a week. Kept volume honest during a spring sport overlap.",
    },
    {
      name: "College weight-room athlete",
      timeframe: "In-season block",
      outcome: "Held strength, cleaned up landing mechanics, reduced low-back flare-ups.",
      note: "Dropped junk volume, kept one heavy lower session, and programmed posterior-chain work that fit practice load.",
    },
    {
      name: "Adult professional",
      timeframe: "6 months",
      outcome: "First unassisted pull-up, 1.5x bodyweight squat, consistent 4-day training week.",
      note: "Started with positions and work capacity, then progressed main lifts. The win was showing up — the numbers followed.",
    },
  ],
  testimonials: [
    {
      quote:
        "I finally had a plan that matched my season instead of fighting it. I knew exactly what to do the week of a game.",
      person: "Athlete, team sport",
    },
    {
      quote:
        "No fluff. The sessions were hard in the right places, and I stopped guessing what to do when I traveled.",
      person: "Remote client",
    },
    {
      quote:
        "Technique got coached, not just programmed. I felt stronger and my knees stopped barking in the same old way.",
      person: "Adult client",
    },
  ],
};

export const faqs = [
  {
    q: "Do I need a full gym?",
    a: "A barbell, rack, and a place to sprint or jump covers most programs. If your setup is limited, we write around what you have instead of pretending you have a D1 weight room.",
  },
  {
    q: "Can I train in-season?",
    a: "Yes. In-season work is usually shorter, heavier on the qualities that fade, and honest about practice and travel. The goal is to stay strong and available.",
  },
  {
    q: "Is this personal training or S&C?",
    a: "It is strength and conditioning. We can improve how you look, but the north star is performance: force, speed, capacity, and staying healthy enough to use them.",
  },
  {
    q: "How do I start?",
    a: "Apply through the contact form. If it looks like a fit, we hop on a short call, lock the goal, and you get a first training week.",
  },
];
