export const getData = async (url) => {
  try {
    const response = await axios.get(`${import.meta.env.BACKEND_URL}/${url}`);
    return response;
  } catch {}
};
