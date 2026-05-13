const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// Veri dosyasını okuma fonksiyonu
const getFishesData = () => {
  const dataPath = path.join(__dirname, '../data/fishes.json');
  const rawData = fs.readFileSync(dataPath);
  return JSON.parse(rawData);
};

// Tüm balıkları getiren endpoint
app.get('/api/fish', (req, res) => {
  try {
    const fishes = getFishesData();
    res.json(fishes);
  } catch (error) {
    console.error('Veri okunurken hata oluştu:', error);
    res.status(500).json({ message: 'Sunucu hatası' });
  }
});

// ID veya slug'a göre tek bir balığı getiren endpoint
app.get('/api/fish/:id', (req, res) => {
  try {
    const fishes = getFishesData();
    const fish = fishes.find((f) => f.id === req.params.id);
    
    if (!fish) {
      return res.status(404).json({ message: 'Balık bulunamadı' });
    }
    
    res.json(fish);
  } catch (error) {
    console.error('Veri okunurken hata oluştu:', error);
    res.status(500).json({ message: 'Sunucu hatası' });
  }
});

app.listen(PORT, () => {
  console.log(`Sunucu http://localhost:${PORT} adresinde çalışıyor`);
});
