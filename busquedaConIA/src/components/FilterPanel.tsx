import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const FilterPanel = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [selectedStates, setSelectedStates] = useState<string[]>([]);

  const states = [
    "Activo",
    "Inactivo",
    "Pendiente",
    "Completado",
    "Cancelado",
    "En Proceso",
    "Suspendido",
  ];

  const handleStateToggle = (state: string) => {
    setSelectedStates((prev) =>
      prev.includes(state) ? prev.filter((s) => s !== state) : [...prev, state]
    );
  };

  const handleClear = () => {
    setSearchTerm("");
    setStartDate(undefined);
    setEndDate(undefined);
    setSelectedStates([]);
  };

  const handleSearch = () => {
    console.log({
      searchTerm,
      startDate,
      endDate,
      selectedStates,
    });
  };

  return (
    <div className="w-80 bg-white border-l border-purple-200 p-6 h-full overflow-y-auto">
      <div className="space-y-6">
        {/* Campo de búsqueda */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-purple-900">
            Búsqueda
          </label>
          <textarea
            placeholder="Buscar..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            rows={3}
            className="border border-purple-200 focus:border-purple-500 focus:ring-purple-500 w-full rounded-md px-3 py-2 text-sm resize-none resize-y"
          />
        </div>

        {/* Selector de fecha inicio */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-purple-900">
            Fecha de inicio
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal border-purple-200 hover:bg-purple-50",
                  !startDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {startDate
                  ? format(startDate, "PPP", { locale: es })
                  : "Seleccionar fecha"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={startDate}
                onSelect={setStartDate}
                initialFocus
                className="pointer-events-auto"
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Selector de fecha final */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-purple-900">
            Fecha final
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal border-purple-200 hover:bg-purple-50",
                  !endDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {endDate
                  ? format(endDate, "PPP", { locale: es })
                  : "Seleccionar fecha"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={endDate}
                onSelect={setEndDate}
                initialFocus
                className="pointer-events-auto"
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Estados como badges */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-purple-900">Estados</label>
          <div className="flex flex-wrap gap-2">
            {states.map((state) => (
              <Badge
                key={state}
                variant={selectedStates.includes(state) ? "default" : "outline"}
                className={cn(
                  "cursor-pointer transition-colors",
                  selectedStates.includes(state)
                    ? "bg-purple-600 hover:bg-purple-700 text-white"
                    : "border-purple-300 text-purple-700 hover:bg-purple-100"
                )}
                onClick={() => handleStateToggle(state)}
              >
                {state}
              </Badge>
            ))}
          </div>
        </div>

        {/* Botones */}
        <div className="flex gap-3 pt-4">
          <Button
            variant="outline"
            onClick={handleClear}
            className="flex-1 border-purple-300 text-purple-700 hover:bg-purple-100"
          >
            Limpiar
          </Button>
          <Button
            onClick={handleSearch}
            className="flex-1 bg-purple-600 hover:bg-purple-700 text-white"
          >
            Buscar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
