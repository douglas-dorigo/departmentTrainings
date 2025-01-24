import { Employee, Project } from "../model"

export const LOAD_EMPLOYEES = "LOAD_EMPLOYEES"
export const LOAD_PROJECTS = "LOAD_PROJECTS"

export const loadEmployees = ({ employees }: { employees: Employee[] }) => ({
  type: LOAD_EMPLOYEES,
  employees,
} as const)

export const loadProjects = ({ projects }: { projects: Project[] }) => ({
  type: LOAD_PROJECTS,
  projects,
} as const)

export const actions = {
  loadEmployees,
  loadProjects,
}
