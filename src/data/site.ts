// Single source of truth for the marbellaachievers.github.io site.
// Change values here; every component reads from this module.
// Do NOT hardcode URLs, phone numbers, fees, or meeting details anywhere else.

export const club = {
  name: "Marbella Achievers Toastmasters Club",
  shortName: "Marbella Achievers",
  officialName: "Achievers Club",
  clubNumber: "5183",
  chartered: "2003-02-07",
  city: "Marbella",
  country: "Spain",
  tagline: "Where Leaders Are Made",
} as const;

export const meeting = {
  day: "Wednesday",
  startTime: "20:00",
  startTimeLabel: "8:00 PM",
  arriveBy: "19:45",
  arriveByLabel: "7:45 PM",
  durationMinutes: 90,
  durationLabel: "About 90 minutes (plus or minus 15)",
  venueName: "Les Roches Marbella",
  venueSubtitle: "Global Hospitality Education",
  room: "Room 0.7 (usually)",
  addressLine: "Urb. El Chaparral, Ctra. de Istán, km 1, 29602 Marbella, Spain",
  geo: { latitude: 36.504582, longitude: -4.944065 },
  holidayBreak:
    "We pause for roughly two weeks around Christmas and return after Reyes Magos (6 January).",
  postMeeting:
    "Most Wednesdays a few of us head to a nearby café for a drink or a bite \u2014 a friendly, low-pressure chance to keep chatting.",
  mapEmbedSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10214.129818972051!2d-4.94406522296443!3d36.50458208430579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7329d688145a79%3A0x6185ceb940c7c702!2sLes%20Roches%20Marbella%2C%20Spain%2C%20Global%20Hospitality%20Education!5e1!3m2!1sen!2ses!4v1776963443252!5m2!1sen!2ses",
  directionsUrl:
    "https://www.google.com/maps/place/Les+Roches+Marbella,+Spain,+Global+Hospitality+Education/@36.5045821,-4.944065,15z",
} as const;

export const costs = {
  headline: "About $10 a month \u2014 roughly one coffee a week.",
  intlDuesAmount: "$60 USD",
  intlDuesPeriod: "every 6 months",
  intlDuesNote: "Toastmasters International membership dues",
  localFeeAmount: "\u20AC20",
  localFeePeriod: "every 6 months",
  localFeeNote: "Covers our bank account, printed materials, and club supplies",
  joiningFeeAmount: "$20 USD",
  joiningFeePeriod: "one-time",
  joiningFeeNote: "New-member fee \u2014 only if you have never joined Toastmasters before",
  firstSixMonthsNote:
    "Your first six months as a brand-new member work out to about $100 total for 26 weekly meetings.",
  nonprofitNote:
    "Toastmasters is a registered non-profit. Every fee goes back into the program, learning materials, and running the club \u2014 nobody profits.",
} as const;

export const links = {
  whatsappDirect: {
    label: "Message us on WhatsApp",
    href: "https://wa.me/34617463826?text=Hi%2C%20I%27d%20like%20to%20visit%20a%20meeting",
    phoneDisplay: "+34 617 463 826",
  },
  whatsappGroup: {
    label: "Join our WhatsApp group",
    href: "https://chat.whatsapp.com/JJdolGFERtNDHBYwfQuEu4",
  },
  toastmastersDirectory: {
    label: "Visit Club on Toastmasters.org",
    href: "https://www.toastmasters.org/Find-a-Club/5183-achievers-club",
  },
  instagram: {
    label: "Instagram",
    href: "https://www.instagram.com/marbellaachievers/",
  },
  facebook: {
    label: "Facebook",
    href: "https://www.facebook.com/toastmastersmarbella/",
  },
  linkedin: {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/marbella-toastmasters-achievers-club/",
  },
  github: {
    label: "GitHub repository",
    href: "https://github.com/marbellaachievers/marbellaachievers.github.io",
  },
} as const;

export const benefits = [
  {
    title: "Speak with confidence",
    body: "From your first Table Topic to your tenth keynote, every meeting gives you a safe, supportive stage to practice on \u2014 in English.",
    icon: "mic",
  },
  {
    title: "Grow as a leader",
    body: "Take on rotating meeting roles \u2014 Toastmaster, Evaluator, Timer \u2014 and discover how public speaking skills translate straight into leadership.",
    icon: "leader",
  },
  {
    title: "Pathways learning",
    body: "Follow the official Toastmasters Pathways curriculum: self-paced online projects that turn real meetings into real progress.",
    icon: "path",
  },
  {
    title: "International community",
    body: "We meet in English, welcome every accent, and share the stage with expats and locals from all over the world \u2014 so does our post-meeting caf\u00E9 chat.",
    icon: "globe",
  },
  {
    title: "Zero pressure first visit",
    body: "Come as a guest, sit back, and watch. You are never asked to speak on your first visit \u2014 learn the ropes, then jump in when you are ready.",
    icon: "hand",
  },
  {
    title: "Real progress, real cheap",
    body: "Weekly practice for about $10 a month. Compare that to a single coaching session and the value becomes obvious.",
    icon: "coin",
  },
] as const;

export const meetingFormat = [
  {
    title: "Prepared speeches",
    body: "Two or three members deliver short speeches they have rehearsed as part of their Pathways projects.",
  },
  {
    title: "Table Topics",
    body: "A fun round of short impromptu speeches \u2014 one- to two-minute answers to a surprise question. This is where confidence is really built.",
  },
  {
    title: "Evaluations",
    body: "Every speaker gets constructive, encouraging feedback from a trained evaluator. You leave the meeting knowing exactly what to work on next.",
  },
  {
    title: "Meeting roles",
    body: "Timer, Ah-Counter, Grammarian, Toastmaster of the evening \u2014 rotating roles that sharpen listening, leadership, and attention to detail.",
  },
] as const;

export const faqs = [
  {
    q: "Will I have to speak on my first visit?",
    a: "No. You are welcome to come, watch, and enjoy the meeting as a guest. We will only invite you to speak when you tell us you are ready.",
  },
  {
    q: "How long is a meeting?",
    a: "About 90 minutes (plus or minus 15). We start promptly at 8:00 PM, so please try to arrive by 7:45 PM.",
  },
  {
    q: "What language are meetings in?",
    a: "All meetings are held in English. Every level of English is welcome \u2014 you will hear accents from across Europe, the Americas, and beyond.",
  },
  {
    q: "How much does it cost?",
    a: "About $10 a month. Toastmasters International dues are $60 USD every 6 months. Our local club fee is \u20AC20 every 6 months. New members also pay a one-time $20 USD joining fee if you have never been in Toastmasters before. Toastmasters is a non-profit \u2014 these fees cover materials and the cost of running the organization.",
  },
  {
    q: "Do I have to commit for a long time?",
    a: "Not at all. Guest visits are free and there is no commitment. Membership is paid every six months, so you can always step away at the next renewal.",
  },
  {
    q: "Do you meet every week, year round?",
    a: "Almost. We pause for about two weeks around Christmas and pick back up after Reyes Magos (6 January). Sometimees we vote to take a break in August.  Otherwise, every Wednesday.",
  },
  {
    q: "What is Pathways?",
    a: "Pathways is the official Toastmasters learning program \u2014 a library of self-paced online projects that you work through at real meetings. You choose the path that fits your goals, from persuasive speaking to team leadership.",
  },
  {
    q: "Is there an age limit?",
    a: "Members must be 18 or older. Other than that, we welcome everyone \u2014 professionals, retirees, students, career changers.",
  },
] as const;

export const nav = [
  { href: "#why-join", label: "Why join" },
  { href: "#what-happens", label: "What happens" },
  { href: "#pricing", label: "Pricing" },
  { href: "#meetings", label: "Meetings" },
  { href: "#how-to-join", label: "How to join" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
] as const;

export const seo = {
  title: "Marbella Achievers Toastmasters \u2014 Public Speaking & Leadership Club",
  description:
    "Marbella's English-speaking Toastmasters club. Every Wednesday, 8 PM at Les Roches Marbella. First visit is free \u2014 come grow your confidence, public speaking, and leadership skills.",
  keywords: [
    "Toastmasters Marbella",
    "public speaking Marbella",
    "English speaking club Costa del Sol",
    "leadership training Marbella",
    "Achievers Club Toastmasters",
    "public speaking classes Marbella",
  ],
  ogImage: "/og-image.jpg",
  twitterCard: "summary_large_image",
  locale: "en_US",
} as const;
