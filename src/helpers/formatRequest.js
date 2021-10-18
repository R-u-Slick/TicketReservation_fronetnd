const HOST = "http://localhost:3000";

async function formatRequest(path, method, data) {
  const url = HOST + path;
  const token = localStorage.getItem("token");
  try {
    const response = await fetch(url, {
      method,
      headers: { Authorization: token, "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const responseJSON = await response.json();
    return responseJSON;
  } catch (err) {
    return { err };
  }
}

export default formatRequest;
