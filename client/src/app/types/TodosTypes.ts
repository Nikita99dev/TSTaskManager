export interface TodosI {
  body: string,
  submit?: (body:any)=>void,
  // submit2?: (body:string)=> void
  isComplited: boolean
} 
