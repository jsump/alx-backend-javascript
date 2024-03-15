class Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;

    constructor(firstName: string, lastName: string, fullTimeEmployee: boolean, location: string, customAttributes: Record<string, any>) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullTimeEmployee = fullTimeEmployee;
        this.location = location;
        Object.keys(customAttributes).forEach(key => {
            this[key] = customAttributes[key];
        });
    }
}

interface Directors extends Teacher {
    numberOfReports: number;
  }
  
  interface PrintTeacherFunction {
    (firstName: string, lastName: string): string;
  }
  
  const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
    const firstInitial = firstName.charAt(0).toUpperCase() + ".";
    return `${firstInitial} ${lastName}`;
  };

  interface StudentClassConstructor {
    new (firstName: string, lastName: string): StudentClass;
  }
  
  interface IStudentClass {
    workOnHomework: () => string;
    displayName: () => string;
  }
  
  class StudentClass implements IStudentClass {
    firstName: string;
    lastName: string;
  
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    workOnHomework(): string {
      return "Currently working";
    }
  
    displayName(): string {
      return this.firstName;
    }
  }

