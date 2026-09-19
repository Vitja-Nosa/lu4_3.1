export type Locale = "en" | "nl";

export type StepText = {
  title: string;
  description: string;
};

export type FeatureText = {
  title: string;
  description: string;
  pillTag?: string;
};

export type Translation = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    join: string;
  };
  hero: {
    eyebrow: string;
    titleLine1: string;
    titleHighlight: string;
    lede: string;
  };
  signup: {
    placeholder: string;
    button: string;
    alreadyJoined: string;
    willEmail: (email: string) => string;
    successTitle: string;
  };
  howItWorks: {
    eyebrow: string;
    title: string;
    subtitle: string;
    // matched by index to lib/content.ts → stepsMeta
    steps: StepText[];
  };
  whyPayo: {
    eyebrow: string;
    title: string;
    subtitle: string;
    oldWayTag: string;
    newWayTag: string;
    oldWayItems: string[];
    newWayItems: string[];
  };
  features: {
    eyebrow: string;
    title: string;
    // matched by index to lib/content.ts → featuresMeta
    items: FeatureText[];
  };
  video: {
    eyebrow: string;
    title: string;
    subtitle: string;
    playAria: string;
    caption: string;
  };
  join: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  survey: {
    eyebrow: string;
    title: string;
    subtitle: string;
    cta: string;
    thanks: string;
  };
  footer: {
    note: string;
  };
};

export const translations: Record<Locale, Translation> = {
  en: {
    meta: {
      title: "Payo — Split the bill. Skip the awkward.",
      description:
        "One person pays, everyone owes, nobody settles up. Payo makes the whole \"who had what\" moment vanish.",
    },
    nav: {
      join: "Join waitlist",
    },
    hero: {
      eyebrow: "In Development · launching soon",
      titleLine1: "Split the bill.",
      titleHighlight: "Skip<br />the headache.",
      lede: "Every time you go out with friends, someone fronts the bill. Then comes the group chat: who had what? Payo cuts that out. Scan the receipt, everyone taps what they had, and you're done.",
    },
    signup: {
      placeholder: "you@email.com",
      button: "Join the waitlist",
      alreadyJoined: "You’re already on the list. We’ve got you.",
      willEmail: (email) => `We'll email ${email} the moment Payo lands.`,
      successTitle: "You’re on the list!",
    },
    howItWorks: {
      eyebrow: "How it works",
      title: "Four taps from receipt to settled",
      subtitle: "No manual entry. No app switching. No mental math at lunch.",
      steps: [
        { title: "Snap the receipt", description: "AI reads every line, dishes, drinks, tax and tip in about a second." },
        { title: "Invite people to the digital receipt", description: "Friends join instantly using a QR code or a shared link." },
        { title: "Pick what you had", description: "Tap your items. Shared a bottle? Split it with a friend in one tap." },
        { title: "Pay your share", description: "One tap settles everything. Everyone's square before you leave the table." },
      ],
    },
    whyPayo: {
      eyebrow: "Why Payo",
      title: "The end of “just send me a Tikkie”",
      subtitle: "The old way is slow and inconvenient. Payo solves it on the spot.",
      oldWayTag: "The old way",
      newWayTag: "With Payo",
      oldWayItems: [
        "One person fronts the whole bill and hopes for the best.",
        "Screenshots, group chats, and mental math at the table.",
        'Chasing friends for weeks "did you ever send that?"',
        "Splitting evenly even though you only had one drink.",
      ],
      newWayItems: [
        "No one's stuck floating the bill and hoping to get paid back.",
        "One shared view everyone can see, no more screenshots flying around.",
        "No awkward follow-up texts. Everyone's already settled.",
        "You only ever pay for what actually crossed your table.",
      ],
    },
    features: {
      eyebrow: "Features",
      title: "Fast where it counts",
      items: [
        {
          title: "Receipt scanning",
          description: "Handles faded thermal paper, handwritten totals and long receipts just as easily as short ones.",
          pillTag: "AI Powered",
        },
        {
          title: "Instant digital receipt",
          description: "Everyone's view updates in real time, no refreshing, no wondering if someone's still adding items.",
        },
        {
          title: "Split any item",
          description: "Only had part of a dish? Pay your part, your friend pays the rest. No awkward math, just tap and divide.",
        },
        {
          title: "Built for everywhere",
          description: "Using Payo abroad? If receipts are in a different language, Payo translates them into your preferred language.",
        },
      ],
    },
    video: {
      eyebrow: "See it in 40 seconds",
      title: "Watch how Payo works",
      subtitle: "From messy receipt to fully settled bill, start to finish.",
      playAria: "Play explainer (coming soon)",
      caption: "Explainer animation · coming soon",
    },
    join: {
      eyebrow: "Be first in line",
      title: "Join the waitlist",
      subtitle: "Drop your email and we’ll ping you the day it goes live. No spam, just the launch.",
    },
    survey: {
      eyebrow: "Help shape Payo",
      title: "Got 2 minutes?",
      subtitle: "We're building this for you. Tell us how you split bills today and what would make this a no-brainer to use.",
      cta: "Take the 2-minute survey",
      thanks: "Thanks for taking the survey!",
    },
    footer: {
      note: "© 2026 Payo · Split the bill. Skip the headache.",
    },
  },
  nl: {
    meta: {
      title: "Payo — Split de rekening. Sla het gedoe over.",
      description:
        "Eén persoon betaalt, iedereen betaalt zijn deel terug, niemand moet afrekenen. Payo laat het hele \"wie had wat\"-moment verdwijnen.",
    },
    nav: {
      join: "Meld je aan",
    },
    hero: {
      eyebrow: "In ontwikkeling · binnenkort live",
      titleLine1: "Split de rekening.",
      titleHighlight: "Sla<br />het gedoe over.",
      lede: "Elke keer als je met vrienden uit eten gaat, betaalt iemand de hele rekening voor. Daarna volgt de groepsapp: wie had wat? Payo maakt daar een einde aan. Scan de bon, iedereen tikt aan wat ze hadden, en je bent klaar.",
    },
    signup: {
      placeholder: "jij@email.com",
      button: "Meld je aan",
      alreadyJoined: "Je staat al op de lijst. We hebben je gegevens.",
      willEmail: (email) => `We mailen ${email} zodra Payo live gaat.`,
      successTitle: "Je staat op de lijst!",
    },
    howItWorks: {
      eyebrow: "Zo werkt het",
      title: "Vier tikjes van bon tot afgerekend",
      subtitle: "Geen handmatig invoeren. Geen apps wisselen. Geen hoofdrekenen tijdens de lunch.",
      steps: [
        { title: "Scan de bon", description: "AI leest elke regel, gerechten, drankjes, btw en fooi in ongeveer een seconde." },
        { title: "Nodig mensen uit voor de digitale bon", description: "Vrienden sluiten direct aan via een QR-code of een gedeelde link." },
        { title: "Kies wat je had", description: "Tik je items aan. Een fles gedeeld? Verdeel hem met een vriend in één tik." },
        { title: "Betaal je deel", description: "Met één tik is alles afgerekend. Iedereen quitte voordat je de tafel verlaat." },
      ],
    },
    whyPayo: {
      eyebrow: "Waarom Payo",
      title: "Het einde van “stuur me anders even een Tikkie”",
      subtitle: "De oude manier is traag en onhandig. Payo lost het direct op.",
      oldWayTag: "De oude manier",
      newWayTag: "Met Payo",
      oldWayItems: [
        "Eén persoon legt de hele rekening voor en hoopt op het beste.",
        "Screenshots, groepsapps en hoofdrekenen aan tafel.",
        'Wekenlang vrienden achternazitten "heb je dat nog overgemaakt?"',
        "Jij betaalt evenveel als iedereen, terwijl jij maar één drankje had.",
      ],
      newWayItems: [
        "Niemand blijft achter met een voorgeschoten rekening en de hoop op terugbetaling.",
        "Eén gedeeld overzicht voor iedereen, geen rondzwervende screenshots meer.",
        "Geen ongemakkelijke herinneringsappjes. Iedereen heeft al afgerekend.",
        "Je betaalt alleen voor wat er echt op jouw bordje stond.",
      ],
    },
    features: {
      eyebrow: "Features",
      title: "Snel waar het telt",
      items: [
        {
          title: "Bonscanning",
          description: "Werkt net zo goed bij vervaagd thermisch papier, handgeschreven totalen en lange bonnen als bij korte.",
          pillTag: "AI-aangedreven",
        },
        {
          title: "Direct een digitale bon",
          description: "Het overzicht van iedereen wordt live bijgewerkt, geen vernieuwen, geen afvragen of iemand nog iets toevoegt.",
        },
        {
          title: "Verdeel elk item",
          description: "Had je maar een deel van een gerecht? Betaal jouw deel, je vriend betaalt de rest. Geen ongemakkelijk rekenwerk, gewoon tikken en verdelen.",
        },
        {
          title: "Overal te gebruiken",
          description: "Payo in het buitenland gebruiken? Staat de bon in een andere taal? Payo vertaalt hem naar jouw voorkeurstaal.",
        },
      ],
    },
    video: {
      eyebrow: "Bekijk het in 40 seconden",
      title: "Bekijk hoe Payo werkt",
      subtitle: "Van rommelige bon tot volledig afgerekend, van begin tot eind.",
      playAria: "Speel uitlegvideo (binnenkort beschikbaar)",
      caption: "Uitlegvideo · binnenkort beschikbaar",
    },
    join: {
      eyebrow: "Wees er als eerste bij",
      title: "Meld je aan voor de wachtlijst",
      subtitle: "Laat je e-mailadres achter en we laten het je weten zodra we live gaan. Geen spam, alleen de lancering.",
    },
    survey: {
      eyebrow: "Help Payo vormgeven",
      title: "Heb je 2 minuutjes?",
      subtitle: "We bouwen dit voor jou. Vertel ons hoe je nu rekeningen splitst en wat dit voor jou een no-brainer zou maken.",
      cta: "Doe de 2-minuten enquête",
      thanks: "Bedankt voor het invullen!",
    },
    footer: {
      note: "© 2026 Payo · Split de rekening. Sla het gedoe over.",
    },
  },
};
