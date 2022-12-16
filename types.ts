export interface UserData {
  id: string,
  visitCount: number
}

export interface TodoData {
  id?: number,
  title?: string,
  description?: string,
  status?: string,
  created?: number,
  due_date?: number,
  completed_date?: number,
}
