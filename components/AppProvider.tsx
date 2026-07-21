"use client";
import { createContext,useContext,useEffect,useState } from "react";
import { Job,Status } from "@/lib/types";
import { seedJobs } from "@/lib/data";
type Ctx={jobs:Job[];addJob:(j:Job)=>void;updateStatus:(id:string,s:Status)=>void;claim:(id:string)=>void;toast:string;notify:(s:string)=>void};
const Context=createContext<Ctx|null>(null);
export function AppProvider({children}:{children:React.ReactNode}){const [jobs,setJobs]=useState<Job[]>(seedJobs);const [toast,setToast]=useState("");useEffect(()=>{const saved=localStorage.getItem("100jobs");if(saved)try{setJobs(JSON.parse(saved))}catch{}},[]);useEffect(()=>{localStorage.setItem("100jobs",JSON.stringify(jobs))},[jobs]);const notify=(s:string)=>{setToast(s);setTimeout(()=>setToast(""),2800)};const addJob=(j:Job)=>{setJobs(x=>[j,...x]);notify("Job posted successfully")};const updateStatus=(id:string,s:Status)=>setJobs(x=>x.map(j=>j.id===id?{...j,status:s}:j));const claim=(id:string)=>{setJobs(x=>x.map(j=>j.id===id?{...j,status:"Claimed",worker:"Alex Morgan"}:j));notify("Job claimed — check your dashboard")};return <Context.Provider value={{jobs,addJob,updateStatus,claim,toast,notify}}>{children}{toast&&<div className="toast">✓ {toast}</div>}</Context.Provider>}
export const useApp=()=>{const c=useContext(Context);if(!c)throw Error("AppProvider missing");return c};
