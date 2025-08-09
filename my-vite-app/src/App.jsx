  import React from 'react'
  import {useState} from 'react'
  import { Calendar } from 'lucide-react'

  import EventCard from './components/EventCard'
  import AddEventModal from './components/AddEvent'
  import Card from './components/Card'

  function App() {
    const [showModal, setShowModal] = useState(false);

    const [count, setCount] = useState(0);

    const [selectedEvent, setSelectedEvent] = useState([]);

    const addEvent = (eventData) => {
      setEvents((prevEvents) => [...prevEvents, eventData]);
      setShowModal(false); // Close modal after adding event
    };


    const [Events, setEvents] = useState([
      {
      title: "Sample Event",
      description: "This is a sample event description.",
      date: "2023-10-01",
      time: "10:00 AM",
      venue: "Sample Venue",
      club: "Sample Club",
    
    },
      {
      title: "Sample Event",
      description: "This is a sample event description.",
      date: "2023-10-01",
      time: "10:00 AM",
      venue: "Sample Venue",
      club: "Sample Club",
    
    },
      {
      title: "Sample Event",
      description: "This is a sample event description.",
      date: "2023-10-01",
      time: "10:00 AM",
      venue: "Sample Venue",
      club: "Sample Club",
    
    },
      {
      title: "Sample Event",
      description: "This is a sample event description.",
      date: "2023-10-01",
      time: "10:00 AM",
      venue: "Sample Venue",
      club: "Sample Club",
    
    },
      {
      title: "Sample Event",
      description: "This is a sample event description.",
      date: "2023-10-01",
      time: "10:00 AM",
      venue: "Sample Venue",
      club: "Sample Club",
    
    },
      {
      title: "Sample Event",
      description: "This is a sample event description.",
      date: "2023-10-01",
      time: "10:00 AM",
      venue: "Sample Venue",
      club: "Sample Club",
    
    },
    ]);

    const selectEvent = (title)=> {
      if( !selectedEvent.includes(title)){
        console.log("Event selected:", title);
        // Increment count and add to selected events
        setCount(count + 1);
        setSelectedEvent([...selectedEvent, title]);
      }
    
      
    
    };

  

    return (
      <div className='min-h-screen bg-blue-100 text-gray-800'>


      <div className='w-full border-b-5 border-blue-500 h-28 px-9 flex items-center justify-between'>
        <div>
          <p className='text-3xl text-blue-700 font-bold flex items-center gap-2'>
          <Calendar className='text-blue-500' />
          Event Dashboard</p>
          <p className='text-md  text-gray-900'>Manage your events efficiently</p>
        </div>


        <div>
          <button onClick={() => setShowModal(true)} className='bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded shadow'>
            + Add Event
          </button>
        </div>

        
      </div>

      <div className='px-10 py-6 flex items-center gap-7 '>
        <Card title="Event selected" color="blue" count={selectedEvent.length} /> 
        <Card title="All events" color="blue" count={Events.length} /> 
        <Card title="Featured Events" color="blue" count={Events.length} /> 
      </div>
    

        <div className='flex items-center justify-start flex-wrap gap-4 py-16 px-10'>
        {
          Events.map((event, index) => (
            <EventCard
          key={index}
          title={event.title}
          description={event.description}
          date={event.date}
          time={event.time}
          venue={event.venue}
          club={event.club}
          selectEvent = {selectEvent}
        />
          ))
        }
        </div>

        <AddEventModal
          show={showModal}
          onClose={() => setShowModal(false)}
          setData={addEvent} // Send helper function
        />

      </div>
    )
  }

  export default App;
