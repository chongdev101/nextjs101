import { Calculate } from "@/classs/Calculate";
import { CalculateColumnEnum } from "@/models/CalculateColumnEnum";
import { InputTypeEnum } from "@/models/InputTypeEnum";
import { Project } from "@/models/Project";
import { ProjectPlan } from "@/models/ProjectPlan";
import React, { useEffect } from "react";

type Props = {
  projectPlan: ProjectPlan;
  handleCalculate: (projectPlan: ProjectPlan) => void;
  // setProjectPlan: (projectPlan: ProjectPlan) => void;
};

const Row = ({ projectPlan, handleCalculate }: Props) => {
  const [sum, setSum] = React.useState<number>(projectPlan.sum);
  const sumRef = React.useRef<HTMLInputElement>(null);

  const handleBlurQuantity = (e: React.FocusEvent<HTMLInputElement>) => {
    const val: string = e.target.value;

    // calculate
    // setProjectPlan({ ...projectPlan, quantity: val });
    projectPlan.quantity = val ? parseFloat(val) : 0;
    handleCalculate(projectPlan);
  };

  const handleBlurPrice = (e: React.FocusEvent<HTMLInputElement>) => {
    const val = e.target.value;

    console.log("handleBlurQuantity", val);

    // projectPlan.unitPrice
    projectPlan.unitPrice = val ? parseFloat(val) : 0;
    handleCalculate(projectPlan);
  };

  const handlerInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.select();
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // input number only
    if (!/[0-9]/.test(e.key)) {
      e.preventDefault();
    }

    // prevent enter key
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  useEffect(() => {
    console.log("projectPlan.sum ...", projectPlan.sum);

    if (sumRef.current) {
      sumRef.current.value = projectPlan.sum.toString();
    }

    setSum(projectPlan.sum);
  }, [projectPlan.sum]);

  return (
    <>
      <tr>
        <td>
          {projectPlan.quantityType != InputTypeEnum.HIDE && (
            <input
              type="text"
              onBlur={handleBlurQuantity}
              defaultValue={projectPlan.quantity}
              onFocus={handlerInputFocus}
              onKeyPress={handleKeyPress}
            />
          )}
        </td>
        <td>
          {projectPlan.unitPriceType != InputTypeEnum.HIDE && (
            <input
              type="text"
              onBlur={handleBlurPrice}
              defaultValue={projectPlan.unitPrice}
              onFocus={handlerInputFocus}
              onKeyPress={handleKeyPress}
            />
          )}
        </td>
        <td>
          {(projectPlan.calculate == CalculateColumnEnum.FORMULA ||
            projectPlan.calculate == CalculateColumnEnum.SUM_BY_ROW) && (
            <input type="text" defaultValue={sum} disabled ref={sumRef} />
          )}

          {projectPlan.calculate == CalculateColumnEnum.INPUT && (
            <input type="text" defaultValue={sum} ref={sumRef} />
          )}

          <div>
            {projectPlan.sum} <span>{sum}</span>
          </div>
        </td>
      </tr>

      {projectPlan.projectPlanList &&
        projectPlan.projectPlanList.map((projectPlan, index) => (
          <Row key={index} projectPlan={projectPlan} />
        ))}
    </>
  );
};

export default Row;
