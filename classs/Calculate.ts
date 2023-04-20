import { ProjectPlan } from "@/models/ProjectPlan";

export class Calculate {
  // sumByRow
  sumByRow = (projectPlanList: ProjectPlan[]) => {
    let sum = 0;
    projectPlanList.forEach((projectPlan) => {
      if (projectPlan.projectPlanList) {
        sum += this.sumByRow(projectPlan.projectPlanList);
      } else {
        sum += projectPlan.sum;
      }
    });
    return sum;
  };

  // sumByChild
  sumByChild = (projectPlanList: ProjectPlan[]) => {
    let sum = 0;
    projectPlanList.forEach((projectPlan) => {
      if (projectPlan.projectPlanList) {
        sum += this.sumByChild(projectPlan.projectPlanList);
      } else {
        sum += projectPlan.sum;
      }
    });
    return sum;
  };

  // calculate
  calculate = (projectPlanList: ProjectPlan[]) => {
    projectPlanList.forEach((projectPlan) => {
      if (projectPlan.projectPlanList) {
        this.calculate(projectPlan.projectPlanList);
      } else {
        if (projectPlan.calculate === "SUM_BY_ROW") {
          projectPlan.sum = this.sumByRow(projectPlanList);
        } else if (projectPlan.calculate === "SUM_BY_CHILD") {
          projectPlan.sum = this.sumByChild(projectPlanList);
        }
      }
    });
  };

  meppingProjectPlan = (
    projectPlanItem: ProjectPlan,
    projectPlan: ProjectPlan
  ) => {
    if (projectPlanItem.id === projectPlan.id) {
      if (projectPlanItem.calculate === "SUM_BY_ROW") {
        console.log("SUM_BY_ROW", projectPlan.quantity * projectPlan.unitPrice);

        projectPlan.sum = projectPlan.quantity * projectPlan.unitPrice;
      }

      projectPlanItem = {
        ...projectPlanItem,
        ...projectPlan,
      };
    }

    if (projectPlanItem.projectPlanList) {
      projectPlanItem.projectPlanList.forEach((projectPlanItem) => {
        this.meppingProjectPlan(projectPlanItem, projectPlan);
      });
    }

    return projectPlanItem;
  };

  calculateProjectPlan = (
    projectPlan: ProjectPlan,
    projectPlanList: ProjectPlan[]
  ) => {

    const newProjectPlanList = projectPlanList.map((projectPlanItem) => {
        return this.meppingProjectPlan(projectPlanItem, projectPlan);
    });

    return newProjectPlanList;
  };
}
