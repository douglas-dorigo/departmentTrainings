export type Project = {
  id: string;
  name: string;
  budget: number;
  team: {
    id: number;
    name: string
  }[];
  manager: number;
}
