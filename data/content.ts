// Replace all values in this file with the target school's real information when personalizing for a specific prospect.

export interface NavSubItem {
  title: string;
  href: string;
  badge?: string;
}

export interface NavCategory {
  id: string;
  title: string;
  image: string;
  subItems: string[];
}

export interface SiteContent {
  school: {
    name: string;
    wordmark: string;
    tagline: string;
    location: string;
    campusSize: string;
    founded: string;
    phone: string;
    email: string;
    domain: string;
    address: {
      street: string;
      city: string;
      state: string;
      zip: string;
    };
  };
  navigation: {
    menuCategories: NavCategory[];
    topBarLinks: {
      familyPortal: string;
      community: string;
      give: string;
    };
    footerDivisions: { title: string; href: string }[];
    footerCommunity: { title: string; href: string }[];
    legalLinks: { title: string; href: string }[];
  };
  hero: {
    eyebrow: string;
    titleLine1: { prefix: string; accent: string };
    titleLine2: { prefix: string; accent: string };
    description: string;
    annotationLabel: string;
    primaryCta: { text: string; href: string };
    secondaryCta: { text: string; href: string };
    bgImage: string;
    studentPortrait: string;
  };
  newsAndEvents: {
    label: string;
    alert: string;
    newsHeading: string;
    eventsHeading: string;
    newsItems: {
      title: string;
      date: string;
      image: string;
      href: string;
    }[];
    events: {
      title: string;
      month: string;
      day: string;
      time: string;
      href: string;
    }[];
  };
  reflectSequence: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    titleLine3: string;
    bgImage: string;
    cards: {
      card1: { title: string; image: string };
      card2: { title: string; image: string };
      card3: { title: string; image: string };
      card4: { title: string; image: string };
    };
  };
  editorialPhoto: {
    image: string;
    caption: string;
    subCaption: string;
  };
  parallaxCollage: {
    titleLine1: string;
    titleLine2: string;
    titleLine3: string;
    cards: {
      id: string;
      tag: string;
      title: string;
      subtitle: string;
      image: string;
      rotation: string;
    }[];
  };
  excitedStatement: {
    eyebrow: string;
    headlinePrefix: string;
    accentWord: string;
    headlineSuffix: string;
    paragraph: string;
  };
  horizontalCarousel: {
    badge: string;
    title: string;
    subtitle: string;
    cards: {
      id: string;
      tag: string;
      title: string;
      description: string;
      image: string;
      accentColor: string;
      rotation: string;
    }[];
  };
  divisions: {
    eyebrow: string;
    headlinePrefix: string;
    accentWord: string;
    headlineSuffix: string;
    items: {
      id: string;
      grade: string;
      title: string;
      description: string;
      image: string;
      highlight: string;
    }[];
  };
  faculty: {
    eyebrow: string;
    headline: string;
    subhead: string;
    cards: {
      id: string;
      name: string;
      title: string;
      subject: string;
      quote: string;
      image: string;
    }[];
  };
  letterMask: {
    eyebrow: string;
    line1: string;
    line2Prefix: string;
    line2Suffix: string;
    line3Accent: string;
    paragraph: string;
    studentImage: string;
  };
  bento: {
    eyebrow: string;
    headline: string;
    items: {
      id: string;
      category: string;
      title: string;
      detail: string;
      image?: string;
      stat?: string;
      statLabel?: string;
      bgClass: string;
      annotation?: string;
    }[];
  };
  marqueeCta: {
    marqueeText: string;
    badge: string;
    headline: string;
    paragraph: string;
    primaryBtn: { text: string; href: string };
    secondaryBtn: { text: string; href: string };
  };
  footer: {
    description: string;
    closingHeadline: string;
    closingLocation: string;
    copyright: string;
  };
}

export const siteContent: SiteContent = {
  school: {
    name: "American School",
    wordmark: "American",
    tagline: "Where Purpose Meets Bold Discovery",
    location: "Nashville, Tennessee",
    campusSize: "65-Acre Campus",
    founded: "Est. 1968",
    phone: "(615) 555-0190",
    email: "admissions@americanschool.org",
    domain: "https://www.americanschool.org",
    address: {
      street: "450 Academy Way",
      city: "Nashville",
      state: "TN",
      zip: "37205",
    },
  },
  navigation: {
    menuCategories: [
      {
        id: "who-we-are",
        title: "WHO WE ARE",
        image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1200&auto=format&fit=crop",
        subItems: [
          "Our Mission & Values",
          "School Leadership",
          "History & Heritage",
          "Diversity & Belonging",
          "Careers at American School",
          "Campus Directory",
          "Contact Admissions",
          "Publications & Media",
        ],
      },
      {
        id: "learning-discovery",
        title: "LEARNING & DISCOVERY",
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
        subItems: [
          "Academic Philosophy",
          "Portrait of a Learner",
          "Lower School (Pre-K – 4)",
          "Middle School (5 – 8)",
          "Upper School (9 – 12)",
          "STEAM & Innovation Labs",
          "College Counseling",
          "Libraries & Digital Media",
        ],
      },
      {
        id: "student-life",
        title: "STUDENT LIFE",
        image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1200&auto=format&fit=crop",
        subItems: [
          "Visual & Performing Arts",
          "Competitive Athletics",
          "Health & Wellness",
          "Clubs & Student Initiatives",
          "Outdoor & Experiential Ed",
          "After-School Programs",
          "Student Leadership Council",
          "Traditions & Events",
        ],
      },
      {
        id: "admissions",
        title: "ADMISSIONS",
        image: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1200&auto=format&fit=crop",
        subItems: [
          "Apply to American School",
          "Inquire & Request Viewbook",
          "Admissions Process & Dates",
          "Tuition & Affordability",
          "Campus Tours & Open House",
          "Transportation & Bus Routes",
        ],
      },
      {
        id: "community-giving",
        title: "COMMUNITY & GIVING",
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop",
        subItems: [
          "Annual Impact Fund",
          "Ways to Give & Endowment",
          "Alumni Association",
          "Parents Association",
          "Planned Giving",
          "Advancement Office",
        ],
      },
    ],
    topBarLinks: {
      familyPortal: "FAMILY PORTAL",
      community: "COMMUNITY",
      give: "GIVE",
    },
    footerDivisions: [
      { title: "Lower School", href: "#academics" },
      { title: "Middle School", href: "#academics" },
      { title: "Upper School", href: "#academics" },
      { title: "STEAM Center", href: "#academics" },
      { title: "College Counseling", href: "#academics" },
    ],
    footerCommunity: [
      { title: "Admissions", href: "#admissions" },
      { title: "Tuition & Aid", href: "#admissions" },
      { title: "Athletics", href: "#academics" },
      { title: "The Arts", href: "#academics" },
      { title: "Give to American School", href: "#admissions" },
    ],
    legalLinks: [
      { title: "Privacy Policy", href: "#privacy" },
      { title: "Non-Discrimination Policy", href: "#nondiscrimination" },
      { title: "Accessibility", href: "#accessibility" },
      { title: "Site Map", href: "#sitemap" },
    ],
  },
  hero: {
    eyebrow: "A PREMIER INDEPENDENT SCHOOL (PRE-K – 12)",
    titleLine1: {
      prefix: "AS YOU",
      accent: "ARE",
    },
    titleLine2: {
      prefix: "AND",
      accent: "WILL BE.",
    },
    description:
      "American School accepts and celebrates you for who you are and who you will become. Here, you will know who you are before you’re told who you should be. You will find what you love, where you excel, and which way you will go.",
    annotationLabel: "Future Leader & Innovator",
    primaryCta: {
      text: "EXPLORE ADMISSIONS",
      href: "#admissions",
    },
    secondaryCta: {
      text: "DISCOVER CAMPUS",
      href: "#who-we-are",
    },
    bgImage:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
    studentPortrait:
      "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop",
  },
  newsAndEvents: {
    label: "NEWS & EVENTS",
    alert: "Applications for 2026–2027 Now Open",
    newsHeading: "LATEST NEWS",
    eventsHeading: "UPCOMING EVENTS",
    newsItems: [
      {
        title: "Students Explore Hands-On STEAM Challenges in Maker Lab",
        date: "OCT 14, 2026",
        image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=600&auto=format&fit=crop",
        href: "#news-1",
      },
      {
        title: "American School Celebrates Middle School Closing Ceremonies",
        date: "OCT 18, 2026",
        image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=600&auto=format&fit=crop",
        href: "#news-2",
      },
    ],
    events: [
      {
        title: "New Faculty & Family Orientation",
        month: "AUG",
        day: "28",
        time: "ALL DAY",
        href: "#event-1",
      },
      {
        title: "Campus Open House & Community Showcase",
        month: "SEP",
        day: "15",
        time: "9:00 AM – 1:00 PM",
        href: "#event-2",
      },
      {
        title: "Fall Academic & Arts Exhibition",
        month: "OCT",
        day: "22",
        time: "6:00 PM – 8:30 PM",
        href: "#event-3",
      },
    ],
  },
  reflectSequence: {
    eyebrow: "THIS IS A SCHOOL THAT REFLECTS ALL OF YOU.",
    titleLine1: "YOUR WORLD.",
    titleLine2: "YOUR NEIGHBORHOOD.",
    titleLine3: "YOUR FAMILY.",
    bgImage:
      "https://images.unsplash.com/photo-1469488865564-c2de10f69f96?q=80&w=2069&auto=format&fit=crop",
    cards: {
      card1: {
        title: "City Skyline",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
      },
      card2: {
        title: "Historic Landmark",
        image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800&auto=format&fit=crop",
      },
      card3: {
        title: "Community Neighborhood",
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800&auto=format&fit=crop",
      },
      card4: {
        title: "Campus Tree-Lined Avenue",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop",
      },
    },
  },
  editorialPhoto: {
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
    caption: "A Campus Community Built on Belonging",
    subCaption: "Where every student is known, valued, and inspired to lead.",
  },
  parallaxCollage: {
    titleLine1: "YOUR WORLD.",
    titleLine2: "YOUR NEIGHBORHOOD.",
    titleLine3: "YOUR FAMILY.",
    cards: [
      {
        id: "card-1",
        tag: "COMMUNITY",
        title: "Tennessee Foothills Campus",
        subtitle: "A scenic space to explore & grow",
        image:
          "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop",
        rotation: "-rotate-3",
      },
      {
        id: "card-2",
        tag: "INNOVATION",
        title: "Maker & Science Labs",
        subtitle: "Hands-on discovery every day",
        image:
          "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop",
        rotation: "rotate-2",
      },
      {
        id: "card-3",
        tag: "CREATIVITY",
        title: "Arts & Expression Studio",
        subtitle: "Finding voice through performance",
        image:
          "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=800&auto=format&fit=crop",
        rotation: "-rotate-2",
      },
      {
        id: "card-4",
        tag: "ATHLETICS",
        title: "Varsity Field & Court",
        subtitle: "Character built through sportsmanship",
        image:
          "https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=800&auto=format&fit=crop",
        rotation: "rotate-3",
      },
    ],
  },
  excitedStatement: {
    eyebrow: "DISCOVERY AT AMERICAN SCHOOL",
    headlinePrefix: "BE",
    accentWord: "EXCITED",
    headlineSuffix: "BY SCHOOL.",
    paragraph:
      "Every morning at American School begins with curiosity, rigorous inquiry, and the unwavering confidence to explore without limits. Here, students are ignited by questions that matter.",
  },
  horizontalCarousel: {
    badge: "DISCOVERY IN ACTION",
    title: "THE STUDENT EXPERIENCE",
    subtitle: "A journey of joy, rigor, and boundless exploration.",
    cards: [
      {
        id: "card-1",
        tag: "INQUIRY",
        title: "LOVE WHAT YOU LEARN",
        description:
          "Deep dive into advanced STEAM, interdisciplinary seminars, and hands-on laboratory research that sparks lifelong passion.",
        image:
          "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
        accentColor: "#d31f3a",
        rotation: "-rotate-2",
      },
      {
        id: "card-2",
        tag: "EXPRESSION",
        title: "CREATE A MASTERPIECE",
        description:
          "From darkroom photography to mainstage theatre and musical composition, find your voice across vibrant artistic disciplines.",
        image:
          "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=1200&auto=format&fit=crop",
        accentColor: "#985299",
        rotation: "rotate-2",
      },
      {
        id: "card-3",
        tag: "GRIT & TEAMWORK",
        title: "COMPETE WITH HONOR",
        description:
          "Varsity and middle-school athletic teams competing with tenacity, sportsmanship, and pride across competitive leagues.",
        image:
          "https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=1200&auto=format&fit=crop",
        accentColor: "#1c6043",
        rotation: "-rotate-1",
      },
      {
        id: "card-4",
        tag: "CHARACTER",
        title: "LEAD WITH EMPATHY",
        description:
          "Service-learning initiatives and civic engagement partnerships that empower students to make meaningful contributions to the world.",
        image:
          "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop",
        accentColor: "#13375c",
        rotation: "rotate-3",
      },
    ],
  },
  divisions: {
    eyebrow: "OUR THREE ACADEMIC DIVISIONS",
    headlinePrefix: "WHAT",
    accentWord: "LEARNING",
    headlineSuffix: "LOOKS LIKE HERE.",
    items: [
      {
        id: "lower-school",
        grade: "PRE-K – GRADE 4",
        title: "Lower School",
        description:
          "Igniting a foundation of joy, language immersion, foundational mathematics, and boundless outdoor exploration.",
        image:
          "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1000&auto=format&fit=crop",
        highlight: "Play-based inquiry & experiential discovery",
      },
      {
        id: "middle-school",
        grade: "GRADES 5 – 8",
        title: "Middle School",
        description:
          "Nurturing identity, intellectual courage, design thinking, and collaborative leadership in a supportive community.",
        image:
          "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1000&auto=format&fit=crop",
        highlight: "Interdisciplinary seminars & student agency",
      },
      {
        id: "upper-school",
        grade: "GRADES 9 – 12",
        title: "Upper School",
        description:
          "Mastery in advanced academics, specialized research fellowships, global seminars, and college counseling tailored to each student.",
        image:
          "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop",
        highlight: "Capstone research & 100% college placement",
      },
    ],
  },
  faculty: {
    eyebrow: "WORLD-CLASS MENTORSHIP",
    headline: "LEARN FROM PASSIONATE EDUCATORS.",
    subhead:
      "Our faculty are scholars, artists, scientists, and mentors dedicated to cultivating the unique potential of every student.",
    cards: [
      {
        id: "fac-1",
        name: "Dr. Marcus Vance",
        title: "Chair of STEAM Education",
        subject: "Physics & Engineering",
        quote: "We don’t just teach formulas; we empower students to build, experiment, and question deeply.",
        image:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
      },
      {
        id: "fac-2",
        name: "Professor Eleanor Hayes",
        title: "Director of Performing Arts",
        subject: "Orchestral Arts & Theatre",
        quote: "Artistic expression gives young minds the courage to be vulnerable and original.",
        image:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
      },
      {
        id: "fac-3",
        name: "Dr. Julian Sterling",
        title: "Lead Humanities Seminar",
        subject: "World Literature & Ethics",
        quote: "Great literature teaches empathy — the essential skill for navigating tomorrow's world.",
        image:
          "https://images.unsplash.com/photo-1580894732488-8280f55cfcb1?q=80&w=800&auto=format&fit=crop",
      },
    ],
  },
  letterMask: {
    eyebrow: "PORTRAIT OF A GRADUATE",
    line1: "BE CONFIDENT IN",
    line2Prefix: "WH",
    line2Suffix: "YOU WILL",
    line3Accent: "BECOME.",
    paragraph:
      "Rooted in self-knowledge, our graduates step boldly into top collegiate environments with resilience, empathy, and intellectual purpose.",
    studentImage:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
  },
  bento: {
    eyebrow: "EXCELLENCE IN EVERY ARENA",
    headline: "DISTINCTION BY DESIGN.",
    items: [
      {
        id: "bento-1",
        category: "SCHOLARSHIP",
        title: "Writers & Scholars",
        detail: "Recognized nationally for scholastic writing, science Olympiads, and academic distinction.",
        image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=800&auto=format&fit=crop",
        bgClass: "bg-white",
        annotation: "Published Authors",
      },
      {
        id: "bento-2",
        category: "COLLEGE SUCCESS",
        title: "100%",
        detail: "Matriculation to 4-year premier universities and collegiate programs worldwide.",
        stat: "100%",
        statLabel: "College Placement",
        bgClass: "bg-[#d31f3a] text-white",
      },
      {
        id: "bento-3",
        category: "CREATIVITY",
        title: "Creators & Designers",
        detail: "State-of-the-art visual art studios, digital media suites, blackbox theatres, and sound labs.",
        image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800&auto=format&fit=crop",
        bgClass: "bg-white",
      },
      {
        id: "bento-4",
        category: "COMMUNITY",
        title: "15,000+",
        detail: "Annual student-led service hours dedicated to regional community initiatives and civic causes.",
        stat: "15k+",
        statLabel: "Community Hours",
        bgClass: "bg-[#13375c] text-white",
      },
      {
        id: "bento-5",
        category: "CAMPUS ENVIRONMENT",
        title: "65-Acre Campus & Nature Lab",
        detail: "Living outdoor laboratories including conservation wetlands, arboretums, and athletic fields.",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop",
        bgClass: "bg-white",
        annotation: "Living Campus",
      },
    ],
  },
  marqueeCta: {
    marqueeText: "JOYFUL. RIGOROUS. MEANINGFUL. UNSTOPPABLE. · AMERICAN SCHOOL · ",
    badge: "ADMISSIONS 2026–2027",
    headline: "YOUR JOURNEY BEGINS HERE.",
    paragraph:
      "Discover a community that celebrates who you are and prepares you for who you will become. Applications are now open for Pre-K through Grade 12.",
    primaryBtn: {
      text: "INQUIRE TODAY",
      href: "#admissions",
    },
    secondaryBtn: {
      text: "SCHEDULE A TOUR",
      href: "#tour",
    },
  },
  footer: {
    description:
      "A premier independent Pre-K through Grade 12 day school rooted in purposeful scholarship, creativity, and character leadership.",
    closingHeadline: "WHERE PURPOSE MEETS DISCOVERY.",
    closingLocation: "NASHVILLE, TENNESSEE",
    copyright: "© 2026 American School. All rights reserved.",
  },
};
