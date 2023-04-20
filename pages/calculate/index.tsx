import ProjectData from "@/data/ProjectData";
import { Project } from "@/models/Project";
import React, { useEffect, useState } from "react";
import Row from "./Row";
import { ProjectPlan } from "@/models/ProjectPlan";
import { Calculate } from "@/classs/Calculate";

const CalculatePage = () => {
  const calculate = new Calculate();
  const [project, setProject] = useState<Project>(ProjectData);
  const [projectPlanList, setProjectPlanList] = useState<ProjectPlan[]>([]);

  const handleCalculate = (projectPlan: ProjectPlan) => {
    console.log(
      "handleCalculate....",
      // projectPlan,
      "quantity",
      projectPlan.quantity,
      "unitPrice",
      projectPlan.unitPrice
    );

    const newProjectPlan = calculate.calculateProjectPlan(
      projectPlan,
      projectPlanList
    );

    console.log("newProjectPlan", newProjectPlan);
    setProjectPlanList(newProjectPlan);
  };

  useEffect(() => {
    if (project) {
      setProjectPlanList(project.projectPlanList || []);
    }
  }, [project]);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <table>
        <tbody>
          {projectPlanList &&
            projectPlanList.map((projectPlan, index) => (
              <Row
                key={index}
                projectPlan={projectPlan}
                handleCalculate={handleCalculate}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default CalculatePage;
