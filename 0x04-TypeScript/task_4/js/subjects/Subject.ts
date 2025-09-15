namespace Subjects {
  // Interface Teacher should already exist in the namespace
  export class Subject {
    teacher!: Teacher; // instance attribute

    // Correct setter method
    setTeacher(teacher:Teacher): void {
      this.teacher = teacher;
    }
  }
}
