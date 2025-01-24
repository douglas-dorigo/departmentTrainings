import { AppState } from "../store";
import { Training } from "./types";

/**
 * Retrieves general information about all trainings.
 * Each training includes its ID, name, level, and participant count.
 */
export const getGeneralTrainingsInfo = (state: AppState) => {
  return Object.values(state.trainings.trainings)
    .map(({ id, name, level, employees }) => ({
      id,
      name,
      level,
      participants: employees.length,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
};

/**
 * Retrieves a sorted list of participants for a specific training.
 * Participants are sorted by their last name.
 * Returns an empty array if the training does not exist.
 */
export const getTrainingParticipantsInfo = (state: AppState, trainingID: Training['id']) => {
  const training = state.trainings.trainings[trainingID];
  if (!training) return [];

  const participants = training.employees
    .map((employeeID) => {
      const employee = state.data.employees.find((emp) => emp.id === employeeID);
      return employee
        ? {
            id: employee.id,
            name: `${employee.firstName} ${employee.lastName}`,
            position: employee.position,
          }
        : null;
    })
    .filter((participant): participant is NonNullable<typeof participant> => participant !== null);

  return participants.sort((a, b) => {
    const [, lastNameA] = a.name.split(' ');
    const [, lastNameB] = b.name.split(' ');
    return lastNameA.localeCompare(lastNameB);
  });
};

/**
 * Retrieves a summary of skills required for a training and the number of employees who possess or lack those skills.
 * Returns an empty object if the training does not exist.
 */
export const getTrainingSkillsInfo = (state: AppState, trainingID: Training['id']) => {
  const training = state.trainings.trainings[trainingID];
  if (!training) return {};

  const { trainingSkills, employees } = training;

  return trainingSkills.reduce<Record<string, { have: number; 'not-have': number }>>((skillCounts, skill) => {
    const counts = employees.reduce(
      (acc, employeeID) => {
        const employee = state.data.employees.find((emp) => emp.id === employeeID);
        if (employee?.skills.includes(skill)) {
          acc.have++;
        } else {
          acc['not-have']++;
        }
        return acc;
      },
      { have: 0, 'not-have': 0 }
    );

    skillCounts[skill] = counts;
    return skillCounts;
  }, {});
};

