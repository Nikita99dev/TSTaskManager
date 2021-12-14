export interface TodosI {
  body: string,
  submit?: (e:any)=>void,
  // submit2?: (body:string)=> void
  isComplited: boolean
  id: number
  isDone?: boolean
} 
