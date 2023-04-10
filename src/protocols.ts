export type Tasks = {
  id: number;
  name: string;
  description: string;
  day: string;
  responsible: string;
  status: boolean;
};

export type TasksCreate = Omit<Tasks, "id" | "status">;
