import { CompanyValue, TeamMember, CompanyMilestone } from "@/types/about";

export const COMPANY_MISSION = {
  mission:
    "To empower industrial and commercial facilities with real-time, sub-second telemetry and autonomous energy orchestration, eliminating waste and accelerating global industrial decarbonization.",
  vision:
    "A self-balancing, software-defined industrial grid where every kilowatt is accounted for, predicted, and optimized in real time.",
};

export const COMPANY_VALUES: CompanyValue[] = [
  {
    id: "telemetry",
    title: "Sub-Second Precision",
    description:
      "We believe that you cannot optimize what you cannot measure at the sub-second interval. Our high-frequency sampling eliminates blind spots in industrial power feeds.",
    iconName: "Activity",
    metricLabel: "< 10ms sampling rate",
  },
  {
    id: "decarbonization",
    title: "Measurable Decarbonization",
    description:
      "Greenwashing is obsolete. We turn raw kilowatt-hour telemetry into verifiable Scope 1 and Scope 2 carbon accounting, compliant with ISO 50001.",
    iconName: "Leaf",
    metricLabel: "ISO 50001 verified",
  },
  {
    id: "resilience",
    title: "Zero-Downtime Resilience",
    description:
      "Heavy industry cannot pause. Our hardware and edge agents operate with local autonomy, surviving wide-area network drops without data loss.",
    iconName: "ShieldCheck",
    metricLabel: "99.999% field reliability",
  },
  {
    id: "engineering",
    title: "Industrial-Grade Rigor",
    description:
      "Built for harsh environments. From DIN-rail enclosures to high-voltage isolation, our hardware withstands extreme temperatures and electrical surges.",
    iconName: "Cpu",
    metricLabel: "IEC 61010-1 Cat III/IV",
  },
];

export const COMPANY_MILESTONES: CompanyMilestone[] = [
  {
    id: "m-2021",
    year: "2021",
    period: "Q1 - Foundation",
    title: "Inception & Telemetry Lab",
    description:
      "VoltPulse was founded by high-voltage engineers and distributed systems architects to solve the lack of high-frequency data in commercial facilities.",
    badge: "Founding",
    impactMetric: "First prototype bench tested",
  },
  {
    id: "m-2022",
    year: "2022",
    period: "Q3 - Hardware R&D",
    title: "Smart Meter & LoRaWAN Gateway Patents",
    description:
      "Patented our multi-channel DIN-rail edge sensing architecture and achieved CE & UL certification for Class 0.2S billing accuracy.",
    badge: "Hardware Milestone",
    impactMetric: "0.2S revenue-grade accuracy",
  },
  {
    id: "m-2023",
    year: "2023",
    period: "Q2 - First Deployments",
    title: "500 MW Industrial Pilot Deployment",
    description:
      "Deployed across 45 heavy manufacturing and cold-storage facilities, demonstrating an average 18% peak demand charge reduction.",
    badge: "Commercial Rollout",
    impactMetric: "45 facilities connected",
  },
  {
    id: "m-2024",
    year: "2024",
    period: "Q4 - Platform Scale",
    title: "Autonomous Microgrid AI Engine",
    description:
      "Introduced autonomous battery staging and automated tariff arbitrage algorithms, processing billions of telemetry samples daily.",
    badge: "AI Platform",
    impactMetric: "1B+ daily data points",
  },
  {
    id: "m-2025",
    year: "2025",
    period: "Q3 - Global Expansion",
    title: "Enterprise Fleet Telemetry & ISO 50001 Suite",
    description:
      "Expanded enterprise coverage across European and North American industrial hubs with automated regulatory compliance reporting.",
    badge: "Enterprise Scale",
    impactMetric: "300+ enterprise clients",
  },
  {
    id: "m-2026",
    year: "2026",
    period: "Present",
    title: "1.2+ GW Under Active Management",
    description:
      "Scaling the software-defined microgrid ecosystem with real-time nodal distribution intelligence and grid response integration.",
    badge: "Current Scale",
    impactMetric: "1.2 GW managed capacity",
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "person-1",
    name: "Person 1",
    role: "Chief Executive Officer & Co-Founder",
    department: "Leadership",
    bio: "Person 1 description.",
    initials: "P1",
    expertise: ["Grid Automation", "Energy Policy", "Power Systems"],
    linkedinUrl: "https://linkedin.com",
  },
  {
    id: "person-2",
    name: "Person 2",
    role: "Chief Technology Officer & Co-Founder",
    department: "Leadership",
    bio: "Person 2 description.",
    initials: "P2",
    expertise: ["Distributed Systems", "Edge IoT", "Real-Time Telemetry"],
    linkedinUrl: "https://linkedin.com",
    githubUrl: "https://github.com",
  },
  {
    id: "person-3",
    name: "Person 3",
    role: "VP of Hardware Engineering",
    department: "Engineering",
    bio: "Person 3 description.",
    initials: "P3",
    expertise: ["Embedded C/Rust", "DIN-Rail Hardware", "IEC 61010-1"],
    linkedinUrl: "https://linkedin.com",
  },
  {
    id: "person-4",
    name: "Person 4",
    role: "Head of Predictive AI & Optimization",
    department: "Research",
    bio: "Person 4 description.",
    initials: "P4",
    expertise: ["Time-Series AI", "Load Forecasting", "Tariff Optimization"],
    linkedinUrl: "https://linkedin.com",
    githubUrl: "https://github.com",
  },
  {
    id: "person-5",
    name: "Person 5",
    role: "Director of Systems Architecture",
    department: "Engineering",
    bio: "Person 5 description.",
    initials: "P5",
    expertise: ["Kafka / Rust", "Cloud Architecture", "Time-Series DB"],
    linkedinUrl: "https://linkedin.com",
  },
  {
    id: "person-6",
    name: "Person 6",
    role: "Lead Power Electronics Engineer",
    department: "Engineering",
    bio: "Person 6 description.",
    initials: "P6",
    expertise: ["Power Electronics", "Rogowski Coils", "High Voltage"],
    linkedinUrl: "https://linkedin.com",
  },
];
