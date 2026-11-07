// app/components/Sidebar.tsx
import { Plus, MessageSquare, User, Settings, LogOut, HelpCircle } from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="w-72 bg-[#171717] text-white flex flex-col p-4">
      <button className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-700 w-full text-left mb-6">
        <span className="font-semibold">New chat</span>
        <Plus size={20} />
      </button>

      <div className="flex-grow">
        <h2 className="text-xs text-gray-400 font-bold mb-2">CHATS</h2>
        <ul>
          <li className="mb-2">
            <a href="#" className="block p-2 rounded-lg bg-gray-700 font-semibold">
              Landing Page Creation
            </a>
          </li>
          {/* Tambahkan item chat lain di sini jika perlu */}
        </ul>
      </div>
      
      <div className="border-t border-gray-600 pt-4">
        <ul>
          <li className="mb-2">
            <a href="#" className="flex items-center p-2 rounded-lg hover:bg-gray-700">
              <User size={20} className="mr-3" /> Profile
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="flex items-center p-2 rounded-lg hover:bg-gray-700">
              <HelpCircle size={20} className="mr-3" /> Updates & FAQ
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="flex items-center p-2 rounded-lg hover:bg-gray-700">
              <Settings size={20} className="mr-3" /> Settings
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-2 rounded-lg hover:bg-gray-700">
              <LogOut size={20} className="mr-3" /> Log Out
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;