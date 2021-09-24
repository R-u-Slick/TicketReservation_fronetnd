const HOST = "http://localhost:3000";

async function formatRequest(path, method, token, data) {
  const url = HOST + path;
  try {
    const response = await fetch(url, {
      method,
      headers: { 'Authorization': token, 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
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
