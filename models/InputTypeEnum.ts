export class InputTypeEnum {
  static INPUT = "INPUT";
  static FORMULA = "FORMULA";
  static HIDE = "HIDE";
  static INPUT_PERCENT = "INPUT_PERCENT";
  static INPUT_NUMBER = "INPUT_NUMBER";

  getName = (styleType: string) => {
    switch (styleType) {
      case InputTypeEnum.INPUT:
        return "INPUT";
      case InputTypeEnum.FORMULA:
        return "FORMULA";
      case InputTypeEnum.HIDE:
        return "HIDE";
      case InputTypeEnum.INPUT_PERCENT:
        return "INPUT_PERCENT";
    }
  };

  // getList
  getList = () => {
    return [
      {
        value: InputTypeEnum.INPUT,
        name: this.getName(InputTypeEnum.INPUT),
      },
      {
        value: InputTypeEnum.FORMULA,
        name: this.getName(InputTypeEnum.FORMULA),
      },
      {
        value: InputTypeEnum.HIDE,
        name: this.getName(InputTypeEnum.HIDE),
      },
      {
        value: InputTypeEnum.INPUT_PERCENT,
        name: this.getName(InputTypeEnum.INPUT_PERCENT),
      },
    ];
  };
}
