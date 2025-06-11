export interface LeccionConCoincidencia {
  leccion: {
    id: string;
    titulo: string;
    descripcion: string;
    embedding: number[];
  };
  porcentajeCoincidencia: number;
}

export interface ConsultaDto {
  Consulta: string;
}

// Método GET
export const buscarLeccionesConCoincidencia = async (
  datos: ConsultaDto
): Promise<LeccionConCoincidencia[]> => {
  const url = `https://lecciones-aprendidas-func.azurewebsites.net/api/BuscarLecciones`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(datos),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "Error al buscar las lecciones");
  }

  return response.json();
};

