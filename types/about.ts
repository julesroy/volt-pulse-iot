export type Department = "Leadership" | "Engineering" | "Research";

export interface CompanyValue {
  id: string;
  title: string;
  description: string;
  iconName: string;
  metricLabel?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: Department;
  bio: string;
  avatarUrl?: string;
  initials: string;
  expertise: string[];
  linkedinUrl?: string;
  githubUrl?: string;
}

export interface CompanyMilestone {
  id: string;
  year: string;
  period: string;
  title: string;
  description: string;
  badge: string;
  impactMetric?: string;
}
