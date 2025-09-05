const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;


app.use(cors());
app.use(express.json());


// In-memory data storage (replaces database)
let places = [
  {
    id: 1,
    name: "Santorini",
    country: "Greece",
    description: "Beautiful white and blue architecture with stunning sunsets over the Aegean Sea",
    visited: true
  },
  {
    id: 2,
    name: "Kyoto",
    country: "Japan",
    description: "Ancient temples, traditional gardens, and historic geisha districts",
    visited: false
  },
  {
    id: 3,
    name: "Machu Picchu",
    country: "Peru",
    description: "Ancient Incan citadel set high in the Andes Mountains",
    visited: false
  },
  {
    id: 4,
    name: "Northern Lights",
    country: "Iceland",
    description: "Spectacular aurora borealis dancing across the Arctic sky",
    visited: true
  },
  {
    id: 5,
    name: "Great Barrier Reef",
    country: "Australia",
    description: "World's largest coral reef system with incredible marine biodiversity",
    visited: false
  }
];

// Start server
app.listen(PORT, () => {
  console.log(`🌍 Travel Bucket List Server running on http://localhost:${PORT}`);
  console.log(`📍 Available endpoints:`);
  console.log(`    GET    /places     - Get all places`);
  console.log(`    GET    /places/:id - Get single place`);
  console.log(`    POST   /places     - Add new place`);
  console.log(`    PUT    /places/:id - Update place`);
  console.log(`    DELETE /places/:id - Delete place`);
});