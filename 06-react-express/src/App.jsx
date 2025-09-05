// ============================================
// FRONTEND - React Application (App.js)
// ============================================

import React, { useState, useEffect } from 'react';
import { MapPin, Plus, Check, X, Edit2, Trash2, Globe, Loader } from 'lucide-react';

const API_BASE_URL = 'http://localhost:3001';

const TravelBucketList = () => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingPlace, setEditingPlace] = useState(null);
  const [newPlace, setNewPlace] = useState({
    name: '',
    country: '',
    description: ''
  });

  // API Helper function
  const apiRequest = async (endpoint, options = {}) => {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers
        },
        ...options
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Request failed');
      }
      
      return data;
    } catch (error) {
      console.error('API Request Error:', error);
      throw error;
    }
  };

  // GET /places - Fetch all places
  const fetchPlaces = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await apiRequest('/places');
      setPlaces(response.data);
    } catch (error) {
      setError('Failed to fetch places. Make sure the server is running on port 3001.');
    } finally {
      setLoading(false);
    }
  };

  // GET /places/:id - Fetch single place (demo function)
  const fetchPlaceById = async (id) => {
    try {
      const response = await apiRequest(`/places/${id}`);
      console.log('Single place data:', response.data);
      alert(`Fetched: ${response.data.name}, ${response.data.country}`);
      return response.data;
    } catch (error) {
      setError(`Failed to fetch place with ID ${id}`);
    }
  };

  // POST /places - Add new place
  const addPlace = async (placeData) => {
    setLoading(true);
    try {
      const response = await apiRequest('/places', {
        method: 'POST',
        body: JSON.stringify(placeData)
      });
      
      setPlaces([...places, response.data]);
      setNewPlace({ name: '', country: '', description: '' });
      setShowAddForm(false);
    } catch (error) {
      setError('Failed to add place');
    } finally {
      setLoading(false);
    }
  };

  // PUT /places/:id - Update place
  const updatePlace = async (id, updates) => {
    setLoading(true);
    try {
      const response = await apiRequest(`/places/${id}`, {
        method: 'PUT',
        body: JSON.stringify(updates)
      });
      
      setPlaces(places.map(place => 
        place.id === id ? response.data : place
      ));
    } catch (error) {
      setError('Failed to update place');
    } finally {
      setLoading(false);
    }
  };

  // DELETE /places/:id - Delete place
  const deletePlace = async (id) => {
    if (!window.confirm('Are you sure you want to delete this place?')) {
      return;
    }
    
    setLoading(true);
    try {
      await apiRequest(`/places/${id}`, {
        method: 'DELETE'
      });
      
      setPlaces(places.filter(place => place.id !== id));
    } catch (error) {
      setError('Failed to delete place');
    } finally {
      setLoading(false);
    }
  };

  // Load places on component mount
  useEffect(() => {
    fetchPlaces();
  }, []);

  const handleAddPlace = async (e) => {
    e.preventDefault();
    if (newPlace.name && newPlace.country) {
      await addPlace(newPlace);
    }
  };

  const handleEditPlace = (place) => {
    setEditingPlace({ ...place });
  };

  const handleUpdatePlace = async (e) => {
    e.preventDefault();
    if (editingPlace.name && editingPlace.country) {
      await updatePlace(editingPlace.id, {
        name: editingPlace.name,
        country: editingPlace.country,
        description: editingPlace.description
      });
      setEditingPlace(null);
    }
  };

  const toggleVisited = async (id, currentVisited) => {
    await updatePlace(id, { visited: !currentVisited });
  };

  const visitedCount = places.filter(place => place.visited).length;
  const totalCount = places.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Globe className="w-8 h-8 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-800">Travel Bucket List</h1>
          </div>
          <p className="text-gray-600 text-lg">A Full-Stack Demo with React & Node.js</p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
            <div className="bg-white rounded-lg px-4 py-2 shadow-md">
              <span className="text-2xl font-bold text-green-600">{visitedCount}</span>
              <span className="text-gray-600 ml-2">Visited</span>
            </div>
            <div className="bg-white rounded-lg px-4 py-2 shadow-md">
              <span className="text-2xl font-bold text-blue-600">{totalCount - visitedCount}</span>
              <span className="text-gray-600 ml-2">To Visit</span>
            </div>
            <div className="bg-white rounded-lg px-4 py-2 shadow-md">
              <span className="text-2xl font-bold text-purple-600">{totalCount}</span>
              <span className="text-gray-600 ml-2">Total</span>
            </div>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 max-w-2xl mx-auto">
            <p className="text-red-700 text-center">{error}</p>
            <button 
              onClick={() => setError('')}
              className="mt-2 block mx-auto text-red-600 hover:text-red-800"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* Loading Spinner */}
        {loading && (
          <div className="flex justify-center mb-6">
            <Loader className="w-8 h-8 text-blue-600 animate-spin" />
          </div>
        )}

        {/* Add Place Button */}
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 transition-colors"
          >
            <Plus className="w-5 h-5" />
            Add New Place (POST)
          </button>
        </div>

        {/* Add Place Form */}
        {showAddForm && (
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Add New Destination</h2>
            <form onSubmit={handleAddPlace} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Place Name</label>
                <input
                  type="text"
                  value={newPlace.name}
                  onChange={(e) => setNewPlace({ ...newPlace, name: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., Bali"
                  required
                  disabled={loading}
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Country</label>
                <input
                  type="text"
                  value={newPlace.country}
                  onChange={(e) => setNewPlace({ ...newPlace, country: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., Indonesia"
                  required
                  disabled={loading}
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Description</label>
                <textarea
                  value={newPlace.description}
                  onChange={(e) => setNewPlace({ ...newPlace, description: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Describe this amazing place..."
                  rows="3"
                  disabled={loading}
                />
              </div>
              <div className="flex gap-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white py-3 rounded-lg transition-colors"
                >
                  Add Place
                </button>
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  disabled={loading}
                  className="flex-1 bg-gray-500 hover:bg-gray-600 disabled:bg-gray-400 text-white py-3 rounded-lg transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Edit Place Modal */}
        {editingPlace && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-2xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Edit Destination</h2>
              <form onSubmit={handleUpdatePlace} className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Place Name</label>
                  <input
                    type="text"
                    value={editingPlace.name}
                    onChange={(e) => setEditingPlace({ ...editingPlace, name: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                    disabled={loading}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Country</label>
                  <input
                    type="text"
                    value={editingPlace.country}
                    onChange={(e) => setEditingPlace({ ...editingPlace, country: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                    disabled={loading}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Description</label>
                  <textarea
                    value={editingPlace.description}
                    onChange={(e) => setEditingPlace({ ...editingPlace, description: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows="3"
                    disabled={loading}
                  />
                </div>
                <div className="flex gap-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white py-3 rounded-lg transition-colors"
                  >
                    Update Place (PUT)
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditingPlace(null)}
                    disabled={loading}
                    className="flex-1 bg-gray-500 hover:bg-gray-600 disabled:bg-gray-400 text-white py-3 rounded-lg transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Places Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {places.map((place) => (
            <div
              key={place.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 ${
                place.visited ? 'ring-2 ring-green-400' : ''
              }`}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{place.name}</h3>
                    <p className="text-gray-600 flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {place.country}
                    </p>
                  </div>
                  <div className={`p-2 rounded-full ${place.visited ? 'bg-green-100' : 'bg-gray-100'}`}>
                    {place.visited ? (
                      <Check className="w-6 h-6 text-green-600" />
                    ) : (
                      <X className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4 h-20 line-clamp-3">{place.description}</p>
                
                <div className="flex gap-2">
                  <button
                    onClick={() => toggleVisited(place.id, place.visited)}
                    disabled={loading}
                    className={`flex-1 py-2 px-4 rounded-lg text-white transition-colors ${
                      place.visited
                        ? 'bg-orange-500 hover:bg-orange-600'
                        : 'bg-green-500 hover:bg-green-600'
                    } disabled:bg-gray-400`}
                  >
                    {place.visited ? 'Mark Unvisited' : 'Mark Visited'} (PUT)
                  </button>
                  <button
                    onClick={() => handleEditPlace(place)}
                    disabled={loading}
                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors disabled:text-gray-400"
                    title="Edit place"
                  >
                    <Edit2 className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => deletePlace(place.id)}
                    disabled={loading}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors disabled:text-gray-400"
                    title="Delete place"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {places.length === 0 && !loading && (
          <div className="text-center py-12">
            <Globe className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No places yet</h3>
            <p className="text-gray-500">Add your first dream destination to get started!</p>
          </div>
        )}

        {/* Fetch Demo Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => fetchPlaceById(1)}
            disabled={loading || places.length === 0}
            className="bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 transition-colors"
          >
            <Globe className="w-5 h-5" />
            Test GET Single Place (ID: 1)
          </button>
        </div>

        {/* API Documentation */}
        <div className="mt-12 bg-gray-800 text-white rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">🚀 API Requests Used:</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-sm">
            <div className="space-y-4">
              <div className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-green-600 px-3 py-1 rounded text-xs font-bold">GET</span>
                  <code>/places</code>
                </div>
                <p className="text-gray-300">Fetch all places from server</p>
                <pre className="text-xs text-green-300 mt-2 overflow-x-auto bg-gray-900 p-2 rounded">
{`fetch('http://localhost:3001/places')
  .then(res => res.json())
  .then(data => console.log(data))`}
                </pre>
              </div>
              
              <div className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-green-600 px-3 py-1 rounded text-xs font-bold">GET</span>
                  <code>/places/:id</code>
                </div>
                <p className="text-gray-300">Get single place by ID</p>
                <pre className="text-xs text-green-300 mt-2 overflow-x-auto bg-gray-900 p-2 rounded">
{`fetch('http://localhost:3001/places/1')
  .then(res => res.json())
  .then(data => console.log(data))`}
                </pre>
              </div>

              <div className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-red-600 px-3 py-1 rounded text-xs font-bold">DELETE</span>
                  <code>/places/:id</code>
                </div>
                <p className="text-gray-300">Delete place from list</p>
                <pre className="text-xs text-red-300 mt-2 overflow-x-auto bg-gray-900 p-2 rounded">
{`fetch('http://localhost:3001/places/1', {
  method: 'DELETE'
})`}
                </pre>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-blue-600 px-3 py-1 rounded text-xs font-bold">POST</span>
                  <code>/places</code>
                </div>
                <p className="text-gray-300">Add new place</p>
                <pre className="text-xs text-blue-300 mt-2 overflow-x-auto bg-gray-900 p-2 rounded">
{`fetch('http://localhost:3001/places', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'Paris', country: 'France' })
})`}
                </pre>
              </div>
              
              <div className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-orange-600 px-3 py-1 rounded text-xs font-bold">PUT</span>
                  <code>/places/:id</code>
                </div>
                <p className="text-gray-300">Update place (e.g., mark visited)</p>
                <pre className="text-xs text-orange-300 mt-2 overflow-x-auto bg-gray-900 p-2 rounded">
{`fetch('http://localhost:3001/places/1', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ visited: true })
})`}
                </pre>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-blue-900 rounded-lg">
            <h3 className="font-bold text-blue-200 mb-2">🛠️ Setup Instructions:</h3>
            <ol className="text-blue-100 space-y-1 text-sm list-decimal list-inside">
              <li>Save the Express.js code as <code>server.js</code></li>
              <li>In your terminal, run <code>npm init -y && npm install express cors</code></li>
              <li>Start the server: <code>node server.js</code></li>
              <li>The server will be running on <code>http://localhost:3001</code></li>
              <li>Set up and run the React application in a separate terminal.</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelBucketList;