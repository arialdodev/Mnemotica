import { Home, Search, Settings } from "lucide-react";

const LeftSidebar = () => {
  const menuItems = [
    { icon: Home, label: "Inicio" },
    { icon: Search, label: "Búsqueda" },
    { icon: Settings, label: "Configuración" },
  ];

  return (
    <div className="w-20 bg-gradient-to-b from-purple-600 to-purple-800 shadow-lg flex flex-col items-center py-6 space-y-6">
      {menuItems.map((item, index) => (
        <button
          key={index}
          className="p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-200 group"
          title={item.label}
        >
          <item.icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-200" />
        </button>
      ))}
    </div>
  );
};

export default LeftSidebar;
