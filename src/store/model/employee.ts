export type ContractType = "permanent" | "contract"

export type Employee = {
  id: number;
  firstName: string;
  lastName: string;
  position:  string;
  salary: number;
  skills: string[];
  contract: ContractType;
}
