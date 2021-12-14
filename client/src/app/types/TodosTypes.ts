export interface TodosI {
  body: string,
  submit?: (e:any)=>void,
  submit2?: (body:any)=> void
  isComplited: boolean
  id: number
  isDone?: boolean

} 
