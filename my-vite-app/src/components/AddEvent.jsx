import React, { useEffect, useState } from "react";

const AddEventModal = ({ show, onClose, setData }) => {
  const [newEvent, setNewEvent] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    venue: "",
    club: "",
    category: ""
  });


  if (!show) return null;

  const handleSave = () => {
    setData(newEvent); // Call parent's function
    onClose(); // Close modal
   
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-4">Add New Event</h2>

        {/* Title */}
        <div className="mb-3">
          <label className="block text-sm font-medium">Event Title</label>
          <input
            type="text"
            value={newEvent.title}
            onChange={(e) =>
              setNewEvent({ ...newEvent, title: e.target.value })
            }
            className="w-full border border-gray-300 rounded p-2"
            placeholder="Enter event title"
          />
        </div>

        {/* Description */}
        <div className="mb-3">
          <label className="block text-sm font-medium">Description</label>
          <textarea
            value={newEvent.description}
            onChange={(e) =>
              setNewEvent({ ...newEvent, description: e.target.value })
            }
            className="w-full border border-gray-300 rounded p-2"
            placeholder="Describe the event"
          />
        </div>

        {/* Date & Time */}
        <div className="grid grid-cols-2 gap-3 mb-3">
          <div>
            <label className="block text-sm font-medium">Date</label>
            <input
              type="date"
              value={newEvent.date}
              onChange={(e) =>
                setNewEvent({ ...newEvent, date: e.target.value })
              }
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Time</label>
            <input
              type="time"
              value={newEvent.time}
              onChange={(e) =>
                setNewEvent({ ...newEvent, time: e.target.value })
              }
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>
        </div>

        {/* Venue */}
        <div className="mb-3">
          <label className="block text-sm font-medium">Venue</label>
          <input
            type="text"
            value={newEvent.venue}
            onChange={(e) =>
              setNewEvent({ ...newEvent, venue: e.target.value })
            }
            className="w-full border border-gray-300 rounded p-2"
            placeholder="Event location"
          />
        </div>

        {/* Club */}
        <div className="mb-3">
          <label className="block text-sm font-medium">Organizing Club</label>
          <input
            type="text"
            value={newEvent.club}
            onChange={(e) =>
              setNewEvent({ ...newEvent, club: e.target.value })
            }
            className="w-full border border-gray-300 rounded p-2"
            placeholder="Club or organization name"
          />
        </div>

        {/* Category */}
        <div className="mb-4">
          <label className="block text-sm font-medium">Category</label>
          <select
            value={newEvent.category}
            onChange={(e) =>
              setNewEvent({ ...newEvent, category: e.target.value })
            }
            className="w-full border border-gray-300 rounded p-2"
          >
            <option value="">Select Category</option>
            <option value="tech">Tech</option>
            <option value="cultural">Cultural</option>
            <option value="sports">Sports</option>
          </select>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 border border-gray-300 rounded hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          >
            Add Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEventModal;
