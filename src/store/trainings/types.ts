import { Employee } from "../model"

export type Level = "BEGINNER" | "ADVANCED" | "EXPERT"
export type Training = {
  id: number
  name: string
  trainingSkills: string[]
  level: Level
  employees: Employee['id'][]
}
