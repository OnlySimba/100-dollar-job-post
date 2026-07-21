export type Status = "Posted" | "Claimed" | "In Progress" | "Completed" | "Reviewed";
export type Job = { id:string; title:string; category:string; description:string; zip:string; address?:string; date:string; status:Status; customer:string; worker?:string; image:string; distance:number; createdAt:string };
