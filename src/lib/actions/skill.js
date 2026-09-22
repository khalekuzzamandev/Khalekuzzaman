"use server"
const baseUrl = NEXT_PUBLIC_BASE_URL


// post new skill
export const createSkill=async(newSkill)=>{

  const res=await fetch(`${baseUrl}/api/skill/post`,{
    method:'POST',
    headers:{'content-type':'application/json'},
    body:JSON.stringify(newSkill)
  })
  return res.json()
}

// get frontend skill
export const getFrontendSkill=async()=>{
  const res =await fetch(`${baseUrl}/api/frontendskill/get`)
  return res.json()
}