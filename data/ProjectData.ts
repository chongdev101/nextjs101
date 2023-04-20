import { CalculateColumnEnum } from "@/models/CalculateColumnEnum";
import { InputTypeEnum } from "@/models/InputTypeEnum";
import { Project } from "@/models/Project";
import { ProjectPlan } from "@/models/ProjectPlan";

const projectPlanList: ProjectPlan[] = [];

projectPlanList.push({
  id: 1,
  description: "Project 1 Plan 1",
  quantityType: InputTypeEnum.INPUT_NUMBER,
  quantity: 1,

  unitPriceType: InputTypeEnum.INPUT_NUMBER,
  unitPrice: 100,

  calculate: CalculateColumnEnum.SUM_BY_ROW,
  sum: 100,

  projectPlanList: null,
});
projectPlanList.push({
  id: 2,
  description: "Project 1 Plan 2",
  quantityType: InputTypeEnum.INPUT_NUMBER,
  quantity: 1,

  unitPriceType: InputTypeEnum.INPUT_NUMBER,
  unitPrice: 100,

  calculate: CalculateColumnEnum.SUM_BY_ROW,
  sum: 100,

  projectPlanList: null,
});
projectPlanList.push({
  id: 3,
  description: "Sum",

  quantityType: InputTypeEnum.HIDE,
  quantity: 1,

  unitPriceType: InputTypeEnum.HIDE,
  unitPrice: 100,

  calculate: CalculateColumnEnum.FORMULA,
  sum: 100,

  projectPlanList: null,
});

const ProjectData: Project = {
  id: 1,
  projectName: "Project 1",
  description: "Project 1 description",
  projectPlanList: projectPlanList,
};

export default ProjectData;
