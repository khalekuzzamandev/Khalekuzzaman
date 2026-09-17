"use server"
const baseUrl=process.env.BACKEND_URL

// create experience
export const createExperience=async(newExperience)=>{
  const expwricen=await fetch(`${baseUrl}/api/experience/post`,{
    method:'POST',
    headers:{'content-type':'application/json'},
    body:JSON.stringify()
  })
  return res.json()
}