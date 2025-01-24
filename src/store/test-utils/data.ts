import { Employee, Project } from "../model"

export const dataSet = {
  projects: (): Project[] => require('./projects.json'),
  employees: (): Employee[] => require('./employees.json'),
}
