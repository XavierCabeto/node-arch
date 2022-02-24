import { Entity } from "../../core/domain/Entity";

type CorrectionType = {
  grade: number;
  submissionId: string;
  createdAt: Date;
}

export class Correction extends Entity<CorrectionType> {
  private constructor(props: CorrectionType, id?: string) {
    super(props, id);
  }

  static create(props: CorrectionType, id?: string) {
    // if (props.grade < 0 || props.grade > 10) {
    //   throw new Error("")
    // }

    const correction = new Correction(props, id);

    return correction;
  }
}