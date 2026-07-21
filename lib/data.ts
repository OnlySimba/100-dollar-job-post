import { Job } from "./types";
export const categories = ["Painting","Plumbing","Electrical","Handyman","Assembly","Yard Work"];
export const categoryIcons:Record<string,string> = {Painting:"🖌️",Plumbing:"🔧",Electrical:"⚡",Handyman:"🛠️",Assembly:"🪛","Yard Work":"🌿"};
export const seedJobs:Job[] = [
 {id:"1",title:"Patch and paint two nail holes",category:"Painting",description:"Two small nail holes in a white living-room wall. Paint is available. Please bring patching supplies.",zip:"78704",address:"South Congress, Austin",date:"2026-07-24",status:"Posted",customer:"Maya R.",image:"linear-gradient(135deg,#dbeafe,#93c5fd)",distance:2.1,createdAt:"2026-07-20"},
 {id:"2",title:"Replace leaking kitchen faucet",category:"Plumbing",description:"Swap an existing standard kitchen faucet. Replacement faucet is already purchased and under the sink.",zip:"78745",address:"South Austin",date:"2026-07-25",status:"Posted",customer:"Chris T.",image:"linear-gradient(135deg,#cffafe,#67e8f9)",distance:4.8,createdAt:"2026-07-19"},
 {id:"3",title:"Assemble six-drawer dresser",category:"Assembly",description:"New flat-pack dresser is still boxed. Clear workspace and instructions are ready.",zip:"78701",address:"Downtown Austin",date:"2026-07-26",status:"Claimed",customer:"Jordan L.",worker:"Alex Morgan",image:"linear-gradient(135deg,#ffedd5,#fdba74)",distance:1.4,createdAt:"2026-07-18"},
 {id:"4",title:"Install two ceiling light fixtures",category:"Electrical",description:"Replace two existing fixtures on standard 8-foot ceilings. Fixtures are on site.",zip:"78703",address:"Clarksville, Austin",date:"2026-07-27",status:"Posted",customer:"Sam P.",image:"linear-gradient(135deg,#fef9c3,#fde047)",distance:3.3,createdAt:"2026-07-18"}
];
