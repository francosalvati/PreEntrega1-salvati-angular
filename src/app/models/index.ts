export interface Alumns {
  id:string;
  name: string;
  lastname: string;
  status: boolean;
  registro: Date;
  courses_fk?: string[];
}

export interface PayloadAlumns{
  name: string;
  lastname: string;
  registro: Date;
}
export interface PayloadCourse{
  name: string;
  schedules: string;
}

export interface Course{
  id: string;
  name: string;
  schedules: string;
}
