async function formatRequest(url, token) {
  try {
    const response = await fetch(url, {
      headers: { Authorization: token },
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
