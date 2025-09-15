namespace Subjects {
  export class Subject {
    teacher!: Teacher; // instance attribute

    // Explicitly typed setter for automated checks
    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
}
