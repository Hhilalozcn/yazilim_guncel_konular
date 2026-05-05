import { fishData } from '../data/fishData';

export const getFishList = async () => {
  // Şimdilik local veriyi simüle ediyoruz
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fishData);
    }, 300); // Küçük bir gecikme ekleyerek gerçek API gibi davranmasını sağlıyoruz
  });
};

export const getFishById = async (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const fish = fishData.find((f) => f.id === id);
      if (fish) {
        resolve(fish);
      } else {
        reject(new Error("Balık bulunamadı"));
      }
    }, 300);
  });
};
