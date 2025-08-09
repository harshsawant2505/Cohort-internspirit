
import { Calendar } from "lucide-react";
const Navigation = () => {
  return (
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

  );
};

export default Navigation