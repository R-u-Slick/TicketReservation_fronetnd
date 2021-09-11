const TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMjNmMTdlNWMzY2IxNDVjMDQ1ZTk0ZSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYzMTM2NzgzOSwiZXhwIjoxNjMyMjQ2MjM5fQ.Tyh_YBuE_crdvrdzQVT8HG9mcBH7VcGXHiAGc8Lx_20";
const HOST = "http://localhost:3000";

async function formatRequest(path) {
  const url = HOST + path;
  try {
    const response = await fetch(url, {
      headers: { Authorization: TOKEN },
    });
    const responseJSON = await response.json();
    if (responseJSON.err) {
      return { response: null, error: responseJSON.err };
    }
    return { response: responseJSON, error: null };
  } catch (err) {
    return { response: null, error: err };
  }
}

export default formatRequest;
