import { ProjectPlan } from "./ProjectPlan";

export interface Project {
  id: number;
  projectName: string;
  description?: string | null;
  projectPlanList?: ProjectPlan[] | null;
}
