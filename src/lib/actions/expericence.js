"use server"
const baseUrl = process.env.BACKEND_URL


// post new ex
export const createExperience = async (newExperience) => {

  const res = await fetch(`${baseUrl}/api/experience/post`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(newExperience)
  })
  return res.json()
}