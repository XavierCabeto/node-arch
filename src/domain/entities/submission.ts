import { Entity } from "../../core/domain/Entity";

type SubmissionType = {
  challengeId: string;
  studentId: string;
  createAt?: Date;
}

export class Submission extends Entity<SubmissionType> {
  private constructor(props: SubmissionType, id?: string) {
    super(props, id);
  }

  static create(props: SubmissionType, id?: string) {
    const submission = new Submission({
      ...props,
      createAt: props.createAt ?? new Date(),
    }, id);

    return submission;
  }
}