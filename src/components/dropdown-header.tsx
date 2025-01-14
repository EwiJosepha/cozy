// components/DropdownMenu.js
import Link from 'next/link';
interface DropdownMenuProps {
  isOpen: boolean;
  toggleDropdown: () => void;
}

const DropdownMenu: React.FC<DropdownMenuProps>= ({ isOpen, toggleDropdown }) => {
  return (
    isOpen && (
      <div className="md:hidden bg-yellow-500 p-4 absolute w-full left-0 top-full shadow-lg">
        <Link href="/attractions" className="block text-white hover:text-gray-200 mb-2">Attractions</Link>
        <Link href="/apartments" className="block text-white hover:text-gray-200 mb-2">Apartments</Link>
        <button 
          onClick={toggleDropdown} 
          className="bg-white text-yellow-500 px-4 py-2 rounded hover:bg-gray-200 mb-2">
          Sign Up
        </button>
      </div>
    )
  );
};

export default DropdownMenu;
