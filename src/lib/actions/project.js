"use server"
const baseUrl = process.env.BACKEND_URL

// post project
export const createProject = async (newProject) => {
  const res = await fetch(`${baseUrl}/api/project/post`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(newProject)
  })
  return res.json()
}

// get projects
export const getProject = async () => {
  const res = await fetch(`${baseUrl}/api/project/get`)
  return res.json()
}