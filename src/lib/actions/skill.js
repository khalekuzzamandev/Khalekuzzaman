"use server"
const baseUrl = process.env.BACKEND_URL


// post new skill
export const createSkill=async(newSkill)=>{

  const res=await fetch(`${baseUrl}/api/skill/post`,{
    method:'POST',
    headers:{'content-type':'application/json'},
    body:JSON.stringify(newSkill)
  })
  return res.json()
}