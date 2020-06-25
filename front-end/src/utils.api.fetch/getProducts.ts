export const getProducts = (token: string, signal: AbortSignal) =>
  fetch('http://localhost:8080/products', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: ` Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.statusCode === 401) throw data.error
      return data
    })
