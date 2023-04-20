export interface ProjectPlan {
  id: number;
  description: string;

  quantityType: string;
  quantity: number;

  unitPriceType: string;
  unitPrice: number;

  sum: number;
  calculate: string;

  projectPlanList?: ProjectPlan[] | null;
}
