import { Entity } from "../../core/domain/Entity";

type StudentType = {
  name: string;
  email: string;
}

export class Student extends Entity<StudentType> {
  private constructor(props: StudentType, id?: string) {
    super(props, id);
  }

  static create(props: StudentType, id?: string) {
    const student = new Student(props, id);

    return student;
  }
}