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
  whyPayyo: {
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
    prompt: string;
    thanks: string;
  };
  footer: {
    note: string;
  };
};

export const translations: Record<Locale, Translation> = {
  en: {
    meta: {
      title: "Payyo — Split the bill. Skip the awkward.",
      description:
        "One person pays, everyone owes, nobody settles up. Payyo makes the whole \"who had what\" moment vanish.",
    },
    nav: {
      join: "Join waitlist",
    },
    hero: {
      eyebrow: "In Development · launching soon",
      titleLine1: "Split the bill.",
      titleHighlight: "Skip<br />the headache.",
      lede: "Every time you go out with friends, someone fronts the bill. Then comes the group chat: who had what? Payyo cuts that out. Scan the receipt, everyone taps what they had, and you're done.",
    },
    signup: {
      placeholder: "you@email.com",
      button: "Stay up to date",
      alreadyJoined: "You’re already on the list. We’ve got you.",
      willEmail: (email) => `We'll email ${email} the moment Payo lands.`,
      successTitle: "You’re on the list!",
    },
    howItWorks: {
      eyebrow: "How it works",
      title: "Four taps from receipt to settled",
      subtitle: "No manual entry. No app switching. No mental math at brunch.",
      steps: [
        { title: "Snap the receipt", description: "AI reads every line, dishes, drinks, tax and tip in about a second." },
        { title: "Join the table", description: "Friends join instantly using a QR code or a shared link." },
        { title: "Pick what you had", description: "Tap your items. Shared a bottle? Split it across the table in one tap." },
        { title: "Pay your share", description: "One tap settles everything. Everyone's square before you leave the table." },
      ],
    },
    whyPayyo: {
      eyebrow: "Why Payyo",
      title: "The end of “just send me a Tikkie”",
      subtitle: "The old way is slow and inconvenient. Payo solves it on the spot.",
      oldWayTag: "The old way",
      newWayTag: "With Payyo",
      oldWayItems: [
        "One person fronts the whole bill and hopes for the best.",
        "Screenshots, group chats, and mental math at the table.",
        'Chasing friends for weeks "did you ever send that?"',
        "Splitting evenly even though you only had one drink.",
      ],
      newWayItems: [
        "Everyone pays their exact share, instantly.",
        "AI itemises the receipt. no typing, no guessing.",
        "Settled at the table, before you've grabbed your coat.",
        "Pay for exactly what you ordered. Fair, every time.",
      ],
    },
    features: {
      eyebrow: "Built different",
      title: "Fast where it counts, fun where it doesn’t",
      items: [
        {
          title: "Receipt scanning",
          description: 'Scan once and every item is captured. No manual entry, no "who had the fries?"',
          pillTag: "AI Powered",
        },
        {
          title: "Instant table joining",
          description: "Scan the QR code or share the link with your friends. Everyone joins in seconds.",
        },
        {
          title: "Shared a dish?",
          description: "Split any item between whoever had it. No awkward math, just tap and divide.",
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
      subtitle: "Watch how Payo works and see how easy splitting bills becomes",
      playAria: "Play explainer (coming soon)",
      caption: "Explainer animation · coming soon",
    },
    join: {
      eyebrow: "Be first in line",
      title: "Stay up to date with Payo",
      subtitle: "Drop your email and we’ll ping you the day it goes live. No spam, just the launch.",
    },
    survey: {
      prompt: "Got 2 minutes? Help shape Payyo — take the survey",
      thanks: "Survey link coming soon — thanks for the interest!",
    },
    footer: {
      note: "© 2026 Payo · Split the bill. Skip the headache.",
    },
  },
  nl: {
    meta: {
      title: "Payyo — Split de rekening. Sla het gedoe over.",
      description:
        "Eén persoon betaalt, iedereen betaalt zijn deel terug, niemand moet afrekenen. Payyo laat het hele \"wie had wat\"-moment verdwijnen.",
    },
    nav: {
      join: "Meld je aan",
    },
    hero: {
      eyebrow: "In ontwikkeling · binnenkort live",
      titleLine1: "Split de rekening.",
      titleHighlight: "Sla<br />het gedoe over.",
      lede: "Elke keer als je met vrienden uit eten gaat, betaalt iemand de hele rekening voor. Daarna volgt de groepsapp: wie had wat? Payyo maakt daar een einde aan. Scan de bon, iedereen tikt aan wat ze hadden, en je bent klaar.",
    },
    signup: {
      placeholder: "jij@email.com",
      button: "Blijf op de hoogte",
      alreadyJoined: "Je staat al op de lijst. We hebben je gegevens.",
      willEmail: (email) => `We mailen ${email} zodra Payo live gaat.`,
      successTitle: "Je staat op de lijst!",
    },
    howItWorks: {
      eyebrow: "Zo werkt het",
      title: "Vier tikjes van bon tot afgerekend",
      subtitle: "Geen handmatig invoeren. Geen apps wisselen. Geen hoofdrekenen tijdens de brunch.",
      steps: [
        { title: "Scan de bon", description: "AI leest elke regel, gerechten, drankjes, btw en fooi in ongeveer een seconde." },
        { title: "Sluit je aan bij de tafel", description: "Vrienden sluiten direct aan via een QR-code of een gedeelde link." },
        { title: "Kies wat je had", description: "Tik je items aan. Een fles gedeeld? Verdeel hem in één tik over de tafel." },
        { title: "Betaal je deel", description: "Met één tik is alles afgerekend. Iedereen quitte voordat je de tafel verlaat." },
      ],
    },
    whyPayyo: {
      eyebrow: "Waarom Payyo",
      title: "Het einde van “stuur me anders even een Tikkie”",
      subtitle: "De oude manier is traag en onhandig. Payo lost het direct op.",
      oldWayTag: "De oude manier",
      newWayTag: "Met Payyo",
      oldWayItems: [
        "Eén persoon legt de hele rekening voor en hoopt op het beste.",
        "Screenshots, groepsapps en hoofdrekenen aan tafel.",
        'Wekenlang vrienden achternazitten "heb je dat nog overgemaakt?"',
        "Gelijk verdelen, ook als jij maar één drankje had.",
      ],
      newWayItems: [
        "Iedereen betaalt direct precies zijn eigen deel.",
        "AI specificeert de bon. Geen typen, geen gokken.",
        "Afgerekend aan tafel, voordat je je jas hebt gepakt.",
        "Betaal precies wat je besteld hebt. Eerlijk, elke keer.",
      ],
    },
    features: {
      eyebrow: "Anders gebouwd",
      title: "Snel waar het telt, leuk waar het kan",
      items: [
        {
          title: "Bonscanning",
          description: 'Eén keer scannen en elk item is vastgelegd. Geen handmatig invoeren, geen "wie had de friet?"',
          pillTag: "AI-aangedreven",
        },
        {
          title: "Direct aansluiten bij de tafel",
          description: "Scan de QR-code of deel de link met je vrienden. Iedereen doet binnen seconden mee.",
        },
        {
          title: "Iets gedeeld?",
          description: "Verdeel elk item tussen iedereen die het had. Geen ongemakkelijk rekenwerk, gewoon tikken en delen.",
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
      subtitle: "Bekijk hoe Payo werkt en zie hoe makkelijk rekeningen splitten wordt",
      playAria: "Speel uitlegvideo (binnenkort beschikbaar)",
      caption: "Uitlegvideo · binnenkort beschikbaar",
    },
    join: {
      eyebrow: "Wees er als eerste bij",
      title: "Blijf op de hoogte van Payo",
      subtitle: "Laat je e-mailadres achter en we laten het je weten zodra we live gaan. Geen spam, alleen de lancering.",
    },
    survey: {
      prompt: "2 minuutjes? Help Payo vormgeven — doe de enquête",
      thanks: "Enquêtelink volgt binnenkort — bedankt voor je interesse!",
    },
    footer: {
      note: "© 2026 Payo · Split de rekening. Sla het gedoe over.",
    },
  },
};
