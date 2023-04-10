export type Tasks = {
  id: number;
  name: string;
  description: string;
  day: string;
  responsible: string;
  status: boolean;
};

export type TasksCreate = Omit<Tasks, "id" | "status">;

export type TasksComplete = Omit<
  Tasks,
  "id" | "name" | "description" | "day" | "responsible"
>;

export type TasksResponsible = Omit<
  Tasks,
  "id" | "name" | "description" | "day" | "status"
>;
