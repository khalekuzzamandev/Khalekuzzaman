
"use server";

const baseUrl = process.env.BACKEND_URL;

// post create certificate
export const createCertificate = async (newCertificate) => {
  const res = await fetch(`${baseUrl}/api/certificate/post`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newCertificate),
  });

  return res.json();
};