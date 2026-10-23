export type BranchName = 'Jagoron TV' | 'VOX ANIMATION' | 'V-VORTEX';

export interface Project {
  id: string;
  title: string;
  client: string;
  category: BranchName | string;
  branch: BranchName;
  year: string;
  description: string;
  metrics: string;
  tags: string[];
  image: string;
  palette: string[];
  deliverables: string[];
  overview: string;
  challenge: string;
  solution: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  branch: BranchName;
  tagline: string;
  iconName: string;
  metric: string;
  metricLabel: string;
  summary: string;
  deliverables: string[];
  tools: string[];
}

export interface BranchInfo {
  id: string;
  name: BranchName;
  divisionTitle: string;
  tagline: string;
  description: string;
  focusAreas: string[];
  metrics: string;
  metricsLabel: string;
}
