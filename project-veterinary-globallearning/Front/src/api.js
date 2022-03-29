const apiConfig = token => ({
  headers: { authorization: `Bearer ${token}`, mode: 'cors', credentials: 'include' }
});

export default apiConfig;