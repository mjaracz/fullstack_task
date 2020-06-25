export const getRememberPass = (username: string, signal: AbortSignal) =>
  fetch(`http://localhost:8080/users/remember-password?username=${username}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    signal,
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.statusCode === 401) throw data.message
      else return data
    })
