import LeftSidebar from '@/components/LeftSidebar';
import FilterPanel from '@/components/FilterPanel';
import SearchResults from '@/components/SearchResults';

const Index = () => {
  return (
    <div className="min-h-screen flex w-full bg-gradient-to-br from-purple-50 to-purple-100">
      {/* Barra lateral izquierda */}
      <LeftSidebar />
      
      {/* Contenido principal */}
      <div className="flex-1 flex ml-16">
        {/* Área central de resultados */}
        <SearchResults />
        
        {/* Panel de filtros derecho */}
        <FilterPanel />
      </div>
    </div>
  );
};

export default Index;