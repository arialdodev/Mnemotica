import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const SearchResults = () => {
  // Datos de ejemplo para mostrar
  const mockResults = [
    {
      id: 1,
      title: 'Resultado de búsqueda 1',
      description: 'Descripción del primer resultado encontrado',
      status: 'Activo',
      date: '2024-01-15'
    },
    {
      id: 2,
      title: 'Resultado de búsqueda 2', 
      description: 'Descripción del segundo resultado encontrado',
      status: 'Pendiente',
      date: '2024-01-14'
    },
    {
      id: 3,
      title: 'Resultado de búsqueda 3',
      description: 'Descripción del tercer resultado encontrado',
      status: 'Completado',
      date: '2024-01-13'
    }
  ];

  return (
    <div className="flex-1 p-4 lg:p-8 cloud-bg min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl lg:text-2xl font-bold text-purple-900 mb-4 lg:mb-6">Resultados de búsqueda</h2>
        
        <div className="space-y-3 lg:space-y-4">
          {mockResults.map((result) => (
            <Card 
              key={result.id} 
              className="bg-white/80 backdrop-blur-sm border-purple-200 hover:shadow-lg transition-shadow"
            >
              <CardHeader className="pb-2 lg:pb-4">
                <CardTitle className="text-purple-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-base lg:text-lg">
                  <span className="truncate">{result.title}</span>
                  <span className={`text-xs px-2 py-1 rounded-full self-start sm:self-auto ${
                    result.status === 'Activo' ? 'bg-green-100 text-green-800' :
                    result.status === 'Pendiente' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {result.status}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-purple-700 mb-2 text-sm lg:text-base">{result.description}</p>
                <p className="text-xs lg:text-sm text-purple-600">Fecha: {result.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {mockResults.length === 0 && (
          <div className="text-center py-8 lg:py-12">
            <p className="text-purple-600 text-base lg:text-lg">No se encontraron resultados</p>
            <p className="text-purple-500 text-xs lg:text-sm mt-2">Intenta ajustar los filtros de búsqueda</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
