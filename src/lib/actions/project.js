"use server"
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

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
export const getProjects = async () => {
  const res = await fetch(`${baseUrl}/api/project/get`)
  return res.json()
}