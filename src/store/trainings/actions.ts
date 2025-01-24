import { Employee } from "../model"
import { Training } from "./types"

export const CREATE_TRAINING = "CREATE_TRAINING"
export const UPDATE_TRAINING = "UPDATE_TRAINING"
export const CLEAR_PARTICIPANTS = "CLEAR_PARTICIPANTS"
export const ENROLL_EMPLOYEE_TO_TRAINING = "ENROLL_EMPLOYEE_TO_TRAINING"
export const REMOVE_EMPLOYEE_FROM_TRAINING = "REMOVE_EMPLOYEE_FROM_TRAINING"

type TrainingEdit = Pick<Training, "name" | "trainingSkills" | "level">

export const createTraining = (
  { name, trainingSkills, level }: TrainingEdit
) => ({
  type: CREATE_TRAINING,
  name, trainingSkills, level
} as const)

export const updateTraining = (
  { id, name, trainingSkills, level }: Partial<TrainingEdit> & Pick<Training, "id">
) => ({
  type: UPDATE_TRAINING,
  id, name, trainingSkills, level
} as const)

type EmployeeTraining = {
  employeeID: Employee['id']
  trainingID: Training['id']
}

export const clearParticipants = ({ trainingID }: { trainingID: Training['id'] }) => ({
  type: CLEAR_PARTICIPANTS,
  trainingID,
} as const)

export const enrollEmployeeToTraining = (
  { employeeID, trainingID }: EmployeeTraining
) => ({
  type: ENROLL_EMPLOYEE_TO_TRAINING,
  employeeID,
  trainingID
} as const)

export const removeEmployeeFromTraining = (
  { employeeID, trainingID }: EmployeeTraining
) => ({
  type: REMOVE_EMPLOYEE_FROM_TRAINING,
  employeeID,
  trainingID
} as const)

export const actions = {
  createTraining,
  updateTraining,
  clearParticipants,
  enrollEmployeeToTraining,
  removeEmployeeFromTraining,
}
