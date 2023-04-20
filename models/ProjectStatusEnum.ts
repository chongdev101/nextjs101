export class ProjectStatusEnum {
  static TOTAL = "TOTAL";
  static DRAFT = "DRAFT";
  static INPROCESS = "INPROCESS";
  static APPROVE = "APPROVE";
  static REJECT = "REJECT";

  getName = (styleType: string) => {
    switch (styleType) {
      case ProjectStatusEnum.TOTAL:
        return "ทั้งหมด";
      case ProjectStatusEnum.DRAFT:
        return "แบบร่าง";
      case ProjectStatusEnum.INPROCESS:
        return "อยู่ระหว่างดำเนิการ";
      case ProjectStatusEnum.APPROVE:
        return "อนุมัติ";
      case ProjectStatusEnum.REJECT:
        return "ปฏิเสธ";
    }
  };

  getEngName = (styleType: string) => {
    switch (styleType) {
      case ProjectStatusEnum.TOTAL:
        return ProjectStatusEnum.TOTAL;
      case ProjectStatusEnum.DRAFT:
        return ProjectStatusEnum.DRAFT;
      case ProjectStatusEnum.INPROCESS:
        return ProjectStatusEnum.INPROCESS;
      case ProjectStatusEnum.APPROVE:
        return ProjectStatusEnum.APPROVE;
      case ProjectStatusEnum.REJECT:
        return ProjectStatusEnum.REJECT;
    }
  };
}
