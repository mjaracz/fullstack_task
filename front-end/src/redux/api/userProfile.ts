
export const apiUserProfile = (token: string, signal: AbortSignal) =>
  fetch('http://localhost:8080/profile', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': '*/*',
      'Connection': 'keep-alive',
      'Authorization': ' Bearer ' + token,
    },
    signal
  })
    .then(res => res.json())
    .then(data => {
      if (data.statusCode === 401) throw data.error;
      else return data;
    })