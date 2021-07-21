export interface Todo {
  id?: number;
  created: Date;
  title: string;
  description: string;
  due: string;
  status: string;
  userName?: string;
}
