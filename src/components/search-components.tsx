// components/SearchComponent.tsx
'use client'
import { Calendar, Search } from 'lucide-react';
import { useState } from 'react';


const SearchComponent: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  const handleSearch = () => {
    // Implement search logic here
    console.log('Searching for:', searchTerm, 'on date:', selectedDate);
  };

  return (
    <div className="relative bg-yellow-500 p-4 flex items-center justify-between px-84 z-50 -mt-8">
      <div className="flex items-center flex-1">
        <div className="relative flex-1 mr-2">
          <Search className="absolute left-3 top-2 text-gray-600" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search..."
            className="pl-10 pr-4 py-2 w-full rounded border border-gray-300"
          />
        </div>
        <div className="relative flex-1 mr-2">
          <Calendar className="absolute left-3 top-2 text-gray-600" />
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="pl-10 pr-4 py-2 w-full rounded border border-gray-300"
          />
        </div>
        <button
          onClick={handleSearch}
          className="bg-white text-yellow-500 px-4 py-2 rounded hover:bg-gray-200"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchComponent;
