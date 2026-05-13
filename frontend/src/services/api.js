export const getFishList = async () => {
  try {
    const response = await fetch('/api/fish');
    if (!response.ok) throw new Error('Veri çekilemedi');
    return await response.json();
  } catch (error) {
    console.error("API Hatası:", error);
    throw error;
  }
};

export const getFishById = async (id) => {
  try {
    const response = await fetch(`/api/fish/${id}`);
    if (!response.ok) throw new Error('Balık bulunamadı');
    return await response.json();
  } catch (error) {
    console.error("API Hatası:", error);
    throw error;
  }
};
