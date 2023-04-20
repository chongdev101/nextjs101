export class CalculateColumnEnum {
  static SUM_BY_ROW = "SUM_BY_ROW";
  static SUM_BY_CHILD = "SUM_BY_CHILD";
  static INPUT = "INPUT";
  static FORMULA = "FORMULA";
  static HIDE = "HIDE";

  getName = (styleType: string) => {
    switch (styleType) {
      case CalculateColumnEnum.SUM_BY_ROW:
        return "SUM_BY_ROW";
      case CalculateColumnEnum.SUM_BY_CHILD:
        return "SUM_BY_CHILD";
      case CalculateColumnEnum.INPUT:
        return "INPUT";
      case CalculateColumnEnum.FORMULA:
        return "FORMULA";
      case CalculateColumnEnum.HIDE:
        return "HIDE";
    }
  };
}
