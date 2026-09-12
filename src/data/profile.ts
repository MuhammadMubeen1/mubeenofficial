export type Project = {
  name: string
  tagline: string
  desc: string
  icon: string
  platforms: string[]
  stack: string[]
  links: { label: string; url: string }[]
}

export const profile = {
  brand: 'Mubeen Official',
  name: 'Muhammad Mubeen',
  title: 'Senior Flutter Developer',
  stackLine: 'Flutter · Native Android · Native iOS',
  tagline:
    'Senior Flutter Developer with 4+ years shipping scalable apps on Flutter, native Android (Kotlin), and native iOS (Swift) — including production releases with 100K+ downloads and 4.5+ ratings.',
  email: 'mubecodes@gmail.com',
  phone: '+92 3070818104',
  location: 'Lahore, Pakistan',
  domain: 'mubeenofficial.com',
  url: 'https://mubeenofficial.com',
  sites: 'https://sites.google.com/view/mubecodes/home',
  linkedin: 'https://www.linkedin.com/in/muhammad-mubeen-b31858215',
  github: 'https://github.com/mubeenkhan246',
}

export const highlights = [
  { value: '20+', label: 'Apps on Play & App Store' },
  { value: '100K+', label: 'Users served' },
  { value: '3', label: 'Platforms — Flutter, Android, iOS' },
]

export const experience = [
  {
    role: 'Senior Flutter Developer',
    org: 'BGC, Lahore',
    period: 'Dec 2024 — Aug 2026',
    points: [
      'Led the mobile team delivering Flutter plus native Android and iOS production apps.',
      'Integrated Firebase, REST APIs, auth, FCM, Stripe, Google Maps, geolocation, and reverse geocoding.',
      'Built AI chatbots, real-time audio/video calling, live streaming, and custom animations with LiveKit.',
    ],
  },
  {
    role: 'Flutter Developer',
    org: 'SurjX, Lahore',
    period: 'Aug 2022 — Nov 2024',
    points: [
      'Developed eCommerce, property, and business apps for Android and iOS using Flutter and native platform work.',
      'Integrated Firebase, Supabase, SQLite, Hive, and REST APIs through Play Store & App Store release.',
      'Mentored juniors, improved architecture and testing, and reduced crashes by 25%.',
    ],
  },
  {
    role: 'Intern → Associate Flutter Developer',
    org: 'ExtensiveEdu, Islamabad',
    period: 'Oct 2021 — Aug 2022',
    points: [
      'Built SFYKEA features with Google Maps, live location tracking, and Android/iOS platform integrations.',
      'Worked with Firebase, REST APIs, and state management for scalable booking flows.',
      'Collaborated on testing, bug fixes, and Play Store / App Store releases.',
    ],
  },
]

export const technologies = [
  {
    group: 'Cross-platform',
    items: ['Flutter', 'Dart', 'Platform Channels'],
  },
  {
    group: 'Native Android',
    items: [
      'Kotlin',
      'Android SDK',
      'Jetpack',
      'Material Design',
      'Gradle',
      'Play Console',
      'Background services',
    ],
  },
  {
    group: 'Native iOS',
    items: [
      'Swift',
      'SwiftUI',
      'UIKit',
      'Xcode',
      'CocoaPods / SPM',
      'App Store Connect',
      'Universal Links',
      'Apple Pay',
    ],
  },
  {
    group: 'Architecture & state',
    items: [
      'Clean Architecture',
      'MVVM',
      'SOLID',
      'BLoC',
      'GetX',
      'Provider',
      'Dependency Injection',
    ],
  },
  {
    group: 'Backend & data',
    items: [
      'Firebase',
      'Supabase',
      'Node.js / Express',
      'MongoDB',
      'Hive',
      'SQLite',
      'REST APIs',
      'WebSockets',
      'WebRTC',
    ],
  },
  {
    group: 'Features & ship',
    items: [
      'Stripe / Google Pay / Apple Pay',
      'Google Maps & live tracking',
      'FCM & APNs push',
      'OpenAI / Gemini',
      'LiveKit / Jitsi',
      'In-app purchases',
      'CI/CD',
      'Biometrics',
    ],
  },
]

export const projects: Project[] = [
  {
    name: 'BWC App',
    tagline: 'Real estate & property management',
    desc: 'Blue World City property app for owners and buyers — OTP/biometric login, plots, installments, invoices, PDF, virtual tours, complaints, and support.',
    icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/74/4a/c4/744ac49d-ecd2-9138-67ba-e95a9d4c7dea/AppIcon-1x_U007emarketing-0-11-0-85-220-0.png/512x512bb.jpg',
    platforms: ['Flutter', 'Native Android', 'Native iOS'],
    stack: ['Firebase', 'Provider', 'GetX', 'Dio', 'Clean Architecture'],
    links: [
      {
        label: 'App Store',
        url: 'https://apps.apple.com/us/app/blue-world-city/id1581333932',
      },
      {
        label: 'Play Store',
        url: 'https://play.google.com/store/apps/details?id=com.bwc.mobile.members',
      },
    ],
  },
  {
    name: 'BWC Digital Wallet',
    tagline: 'Dealer finance & ledger',
    desc: 'Digital wallet for dealer ledger management, verification, transactions, receipts, and financial reporting with secure cloud sync.',
    icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/8b/11/a1/8b11a12a-1401-bcb5-172a-429d82426424/AppIcon-1x_U007emarketing-0-11-0-85-220-0.png/512x512bb.jpg',
    platforms: ['Flutter', 'Native Android', 'Native iOS'],
    stack: ['Firebase', 'Provider', 'GetX', 'Dio', 'Clean Architecture'],
    links: [
      {
        label: 'App Store',
        url: 'https://apps.apple.com/us/app/bwc-digital-wallet/id6785460060',
      },
    ],
  },
  {
    name: 'SFYKEA',
    tagline: 'On-demand car wash & booking',
    desc: 'Map-based car wash booking for Pakistan — location selection, rider assignment, scheduling, live tracking, ratings, and notifications.',
    icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/f8/79/3c/f8793c58-79d3-3a06-557a-3887de8e1fa1/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg',
    platforms: ['Flutter', 'Native Android', 'Native iOS'],
    stack: ['Google Maps', 'Geolocator', 'Firebase', 'REST APIs'],
    links: [
      {
        label: 'App Store',
        url: 'https://apps.apple.com/us/app/sfykea/id1614229829',
      },
      {
        label: 'Play Store',
        url: 'https://play.google.com/store/apps/details?id=com.carantechnologies.sfykea',
      },
      { label: 'Website', url: 'https://sfykea.com/' },
    ],
  },
  {
    name: 'Khilafat Cola',
    tagline: 'Field sales & distribution',
    desc: 'Field sales app with role-based dashboards, attendance, shop visits, GPS tagging, route tracking, orders, cart, and offline-first sync.',
    icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/48/dc/46/48dc461b-679b-8c88-9752-783739d0903d/AppIcon-1x_U007emarketing-0-11-0-85-220-0.png/512x512bb.jpg',
    platforms: ['Flutter', 'Native Android', 'Native iOS'],
    stack: ['Google Maps', 'Hive', 'FCM', 'Offline sync'],
    links: [
      {
        label: 'App Store',
        url: 'https://apps.apple.com/us/app/khilafat-cola/id6744438300',
      },
      {
        label: 'Play Store',
        url: 'https://play.google.com/store/apps/details?id=com.khilafat.cola',
      },
    ],
  },
  {
    name: 'TFND APP',
    tagline: 'The Female Network Dubai',
    desc: 'Community platform for events, discounts, jobs, and businesses — multi-role access, QR scanning, chat, Stripe/Apple Pay subscriptions.',
    icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/93/2a/3b/932a3bef-c5cc-c5fc-0924-cfcaa82e3509/AppIcon-1x_U007emarketing-0-11-0-85-220-0.png/512x512bb.jpg',
    platforms: ['Flutter', 'Native Android', 'Native iOS'],
    stack: ['Firebase', 'Stripe', 'Apple Pay', 'Maps', 'QR'],
    links: [
      {
        label: 'App Store',
        url: 'https://apps.apple.com/ae/app/tfnd-app/id6480346971',
      },
      {
        label: 'Play Store',
        url: 'https://play.google.com/store/apps/details?id=com.Tfndappproduction',
      },
    ],
  },
  {
    name: 'Beat Jerky',
    tagline: 'Music community hub',
    desc: 'Music discovery with artist profiles, uploads, chat, feeds, instrument marketplace, and location-based events.',
    icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/fa/19/a3/fa19a33a-c15b-af79-77fe-42ceaf1d57e6/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/512x512bb.jpg',
    platforms: ['Flutter', 'Native Android', 'Native iOS'],
    stack: ['Flutter', 'Chat', 'Media', 'Maps'],
    links: [
      {
        label: 'App Store',
        url: 'https://apps.apple.com/us/app/beat-jerky/id6475585485',
      },
    ],
  },
  {
    name: 'WorkinAUS',
    tagline: 'Australian job search',
    desc: 'Job search across Australia — profile/CV, search by role and location, quick apply, alerts, and application tracking.',
    icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/ff/02/c9/ff02c9c9-b396-f71f-deee-b194154e81ce/AppIcon-1x_U007emarketing-0-6-0-85-220-0.png/512x512bb.jpg',
    platforms: ['Flutter', 'Native Android', 'Native iOS'],
    stack: ['Flutter', 'REST APIs', 'Auth', 'Search'],
    links: [
      {
        label: 'App Store',
        url: 'https://apps.apple.com/us/app/workinaus/id1605930673',
      },
      {
        label: 'Play Store',
        url: 'https://play.google.com/store/apps/details?id=workInAUS.sociabletech.com.au',
      },
    ],
  },
  {
    name: 'Suno News HD',
    tagline: 'News & current affairs',
    desc: 'Latest news from Pakistan and around the world — timely updates and current affairs in a dedicated news reader experience.',
    icon: 'https://play-lh.googleusercontent.com/SXjAXYy0k9l9bJBboJyS5CUzR5a-XbdZSrhgrHGHt-nOQMEKXTrHgW47djtTpi86u3RZIYTxEjl7P5Iu91sKiQ=s512-rw',
    platforms: ['Flutter', 'Native Android'],
    stack: ['Flutter', 'News', 'Android'],
    links: [
      {
        label: 'Play Store',
        url: 'https://play.google.com/store/apps/details?id=com.bwc.sunotv',
      },
    ],
  },
  {
    name: 'MoodWise',
    tagline: 'Simple mood tracker',
    desc: 'Minimalist mood tracker for emotional well-being — mood, energy, sleep, anxiety, tags, notes, graphs, dark theme, and on-device privacy with Google Drive backup.',
    icon: 'https://play-lh.googleusercontent.com/GHdM61irztUR2X0C6OeGWG_KPnrtsqjgDZmU9mLLwMygi4n6jBMNmWu9jvUvp9xkp7Og6fnGIiFt1xzwW-0Y5hs=s512-rw',
    platforms: ['Flutter', 'Native Android'],
    stack: ['Flutter', 'Charts', 'Local storage', 'Backup'],
    links: [
      {
        label: 'Play Store',
        url: 'https://play.google.com/store/apps/details?id=com.lakesidecoding.moodwise',
      },
    ],
  },
  {
    name: 'PDF Reader',
    tagline: 'Local offline document viewer',
    desc: 'Local Flutter PDF reader — open files from device storage, browse recent docs, bookmarks, night mode, zoom/search, and fully offline reading with no account required.',
    icon: '/apps/pdf-reader.svg',
    platforms: ['Flutter', 'Native Android', 'Native iOS'],
    stack: ['Flutter', 'Local storage', 'PDF rendering', 'Offline'],
    links: [],
  },
  {
    name: 'Noor Al Quran',
    tagline: 'Quran learning companion',
    desc: 'Flutter Quran reading and learning experience with audio, offline support, clean architecture, and light/dark themes.',
    icon: '',
    platforms: ['Flutter', 'Native Android', 'Native iOS'],
    stack: ['Flutter', 'Audio', 'Offline'],
    links: [],
  },
  {
    name: 'FluxStore',
    tagline: 'E-commerce mobile store',
    desc: 'Production e-commerce Flutter experience — catalogs, cart, checkout, and storefront flows for live retail clients.',
    icon: '',
    platforms: ['Flutter', 'Native Android', 'Native iOS'],
    stack: ['Flutter', 'E-commerce', 'Payments', 'REST'],
    links: [],
  },
]
