export const API_BASE = import.meta.env.VITE_APP_API_BASE_URL;

export async function apiPost(path, body) {
  const headers = {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  // If the body is FormData, do not set Content-Type (browser will handle it)
  if (!(body instanceof FormData)) {
    headers["Content-Type"] = "application/json";
  }

  const res = await fetch(`${API_BASE}${path}`, {
    method: "POST",
    headers,
    body: body instanceof FormData ? body : JSON.stringify(body), // Handle FormData or JSON
  });

  return res.json();
}

export async function apiGet(path) {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  return res.json();
}