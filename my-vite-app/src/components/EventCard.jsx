import { CalendarDays, Clock, MapPin, Users } from "lucide-react";

export default function EventCard({ title, description, date, time, venue, club, selectEvent }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md hover:shadow-xl transition-shadow duration-300">
      {/* Title */}
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>

      {/* Description */}
      <p className="text-gray-600 mb-4">{description}</p>

      {/* Details */}
      <div className="space-y-3 text-gray-700">
        <div className="flex items-center gap-2">
          <CalendarDays className="w-5 h-5 text-indigo-500" />
          <span>{date}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-indigo-500" />
          <span>{time}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-5 h-5 text-indigo-500" />
          <span>{venue}</span>
        </div>
        <div className="flex items-center gap-2">
          <Users className="w-5 h-5 text-indigo-500" />
          <span>{club}</span>
        </div>
      </div>
      <button onClick={()=>selectEvent(title)} className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 w-full transition-colors">
        Register
      </button>
    </div>
  );
}
