import { Reducer } from "redux";
import produce from "immer";

import { actions } from './actions';

type DatatActionsMap = typeof actions
export type DataActions = ReturnType<DatatActionsMap[keyof DatatActionsMap]>

import { Employee } from "../model/employee"
import { Project } from "../model/project"

export type DataState = {
  employees: Employee[]
  projects: Project[]
}

const initialState: DataState = {
  employees: [],
  projects: [],
}

export const dataReducer: Reducer<DataState, DataActions> =
  (state = initialState, action) => {
    switch(action.type){
      case "LOAD_EMPLOYEES":
        return {
          ...state,
          employees: action.employees,
        }

      case "LOAD_PROJECTS":
        return {
          ...state,
          projects: action.projects,
        }

      default:
        const final: never = action
        return state
    }
  }
