export const request = async (API_KEY, option = {}) => {
  try {
    const res = await fetch(`https://www.omdbapi.com/?${API_KEY}`, {
      ...option,
    });

    if (res.ok) {
      return await res.json();
    }
    throw new Error("API 처리 오류");
  } catch (error) {
    throw new Error(error.message);
  }
};
