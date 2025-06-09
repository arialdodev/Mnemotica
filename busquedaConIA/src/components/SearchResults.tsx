import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

const SearchResults = () => {
  const [selectedResultId, setSelectedResultId] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const mockResults = [
    {
      id: 1,
      title: 'Resultado de búsqueda 1',
      description: 'Descripción del primer resultado encontrado',
      status: 'Activo',
      date: '2024-01-15',
      details: 'Información detallada sobre el primer resultado...',
      category: 'Marketing Digital',
      priority: 'Alta',
      assignedTo: 'Juan Pérez',
      lastUpdated: '2024-01-15 14:30'
    },
    {
      id: 2,
      title: 'Resultado de búsqueda 2',
      description: 'Descripción del segundo resultado encontrado',
      status: 'Pendiente',
      date: '2024-01-14',
      details: 'Información detallada sobre el segundo resultado...',
      category: 'Desarrollo Web',
      priority: 'Media',
      assignedTo: 'María García',
      lastUpdated: '2024-01-14 09:15'
    },
    {
      id: 3,
      title: 'Resultado de búsqueda 3',
      description: 'Descripción del tercer resultado encontrado',
      status: 'Completado',
      date: '2024-01-13',
      details: 'Información detallada sobre el tercer resultado...',
      category: 'Análisis de Datos',
      priority: 'Baja',
      assignedTo: 'Carlos López',
      lastUpdated: '2024-01-13 16:45'
    }
  ];

  const handleClick = (resultId: number) => {
    setSelectedResultId(resultId);
    setIsModalOpen(true);
  };

  const selectedResult = selectedResultId !== null ? mockResults.find(r => r.id === selectedResultId) : null;

  return (
    <div className="flex-1 p-4 lg:p-8 cloud-bg min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl lg:text-2xl font-bold text-purple-900 mb-4 lg:mb-6">Resultados de búsqueda</h2>
        
        <div className="space-y-3 lg:space-y-4">
          {mockResults.map((result) => (
            <Card 
              key={result.id} 
              className="bg-white/80 backdrop-blur-sm border-purple-200 hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => handleClick(result.id)}
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

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="bg-white border-purple-200 max-w-2xl">
          {selectedResult && (
            <>
              <DialogHeader>
                <DialogTitle className="text-purple-900 text-xl">{selectedResult.title}</DialogTitle>
                <DialogDescription className="text-purple-700 text-base">
                  {selectedResult.description}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-purple-800 mb-3 text-lg">Detalles Completos:</h4>
                  <p className="text-purple-700 text-sm leading-relaxed">{selectedResult.details}</p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div>
                      <span className="font-medium text-purple-800">Categoría:</span>
                      <p className="text-purple-700 text-sm">{selectedResult.category}</p>
                    </div>
                    <div>
                      <span className="font-medium text-purple-800">Prioridad:</span>
                      <span className={`ml-2 text-xs px-2 py-1 rounded-full ${
                        selectedResult.priority === 'Alta' ? 'bg-red-100 text-red-800' :
                        selectedResult.priority === 'Media' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {selectedResult.priority}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <span className="font-medium text-purple-800">Asignado a:</span>
                      <p className="text-purple-700 text-sm">{selectedResult.assignedTo}</p>
                    </div>
                    <div>
                      <span className="font-medium text-purple-800">Última actualización:</span>
                      <p className="text-purple-700 text-sm">{selectedResult.lastUpdated}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center pt-4 border-t border-purple-200">
                  <span className="text-sm text-purple-600">Fecha de creación: {selectedResult.date}</span>
                  <span className={`text-sm px-3 py-1 rounded-full ${
                    selectedResult.status === 'Activo' ? 'bg-green-100 text-green-800' :
                    selectedResult.status === 'Pendiente' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {selectedResult.status}
                  </span>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SearchResults;
