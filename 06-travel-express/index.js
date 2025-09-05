// ============================================
// BACKEND - Express.js Server (server.js)
// ============================================

const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

// Middleware
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

// GET /places → get all places
app.get('/places', (req, res) => {
  console.log('GET /places - Fetching all places');
  console.log('Current places:', places);
  res.json({
    success: true,
    data: places,
    count: places.length
  });

  
});

// GET /places/:id → get details of a single place
app.get('/places/:id', (req, res) => {
  const id = parseInt(req.params.id);
  console.log(`GET /places/${id} - Fetching place by ID`);
  
  const place = places.find(p => p.id === id);
  
  if (!place) {
    return res.status(404).json({
      success: false,
      message: 'Place not found'
    });
  }
  
  res.json({
    success: true,
    data: place
  });
});

// POST /places → add a new place
app.post('/places', (req, res) => {
  console.log('POST /places - Adding new place:', req.body);
  
  const { name, country, description } = req.body;
  
  // Validation
  if (!name || !country) {
    return res.status(400).json({
      success: false,
      message: 'Name and country are required'
    });
  }
  
  // Generate new ID
  const newId = Math.max(...places.map(p => p.id), 0) + 1;
  
  const newPlace = {
    id: newId,
    name,
    country,
    description: description || '',
    visited: false
  };
  
  places.push(newPlace);
  
  res.status(201).json({
    success: true,
    data: newPlace,
    message: 'Place added successfully'
  });
});

// PUT /places/:id → mark as visited / update description
app.put('/places/:id', (req, res) => {
  const id = parseInt(req.params.id);
  console.log(`PUT /places/${id} - Updating place:`, req.body);
  
  const placeIndex = places.findIndex(p => p.id === id);
  
  if (placeIndex === -1) {
    return res.status(404).json({
      success: false,
      message: 'Place not found'
    });
  }
  
  // Update the place with provided fields
  const updatedPlace = {
    ...places[placeIndex],
    ...req.body
  };
  
  places[placeIndex] = updatedPlace;
  
  res.json({
    success: true,
    data: updatedPlace,
    message: 'Place updated successfully'
  });
});

// DELETE /places/:id → remove a place from list
app.delete('/places/:id', (req, res) => {
  const id = parseInt(req.params.id);
  console.log(`DELETE /places/${id} - Removing place`);
  
  const placeIndex = places.findIndex(p => p.id === id);
  
  if (placeIndex === -1) {
    return res.status(404).json({
      success: false,
      message: 'Place not found'
    });
  }
  
  const deletedPlace = places.splice(placeIndex, 1)[0];
  
  res.json({
    success: true,
    data: deletedPlace,
    message: 'Place deleted successfully'
  });
});

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