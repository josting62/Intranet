const Table = () => {
  const data = [
    {
      fechaHora: "2024-08-28T18:28:35.000Z",
      numeroRadicado: 115,
      convenio: "Nueva EPS",
      numeroDocumento: "1149456844",
      nombrePaciente: "CARLOS ALONSO GALVIS BRICEÑO",
      fechaAuditoria: "1900-01-01T00:00:00.000Z",
      nombreAuditora: "N/A",
    },
    // Añadir más filas de datos aquí
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Módulo Radicación</h2>
      <div className="bg-gray-50 py-3 px-4 rounded-md mb-6">
        <h3 className="text-lg mb-3">Buscar registro Radicación:</h3>
        <input
          type="text"
          placeholder="Consultar registro..."
          className="border border-gray-300 rounded p-2 w-full mb-3"
        />
      </div>
      <table className="min-w-full table-auto">
        <thead className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
          <tr>
            <th className="py-3 px-4 text-left">Fecha - Hora del Radicado</th>
            <th className="py-3 px-4 text-left">N.º Radicado</th>
            <th className="py-3 px-4 text-left">Convenio</th>
            <th className="py-3 px-4 text-left">N.º Documento</th>
            <th className="py-3 px-4 text-left">Nombre Paciente</th>
            <th className="py-3 px-4 text-left">Fecha Auditoría</th>
            <th className="py-3 px-4 text-left">Nombre Auditora</th>
            <th className="py-3 px-4 text-center">Soporte</th>
            <th className="py-3 px-4 text-center">Gestión Auxiliar</th>
            <th className="py-3 px-4 text-center">Mostrar</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {data.map((item, index) => (
            <tr
              key={index}
              className="border-b border-gray-200 bg-gray-100"
            >
              <td className="py-3 px-4 text-left">{item.fechaHora}</td>
              <td className="py-3 px-4 text-left">{item.numeroRadicado}</td>
              <td className="py-3 px-4 text-left">{item.convenio}</td>
              <td className="py-3 px-4 text-left">{item.numeroDocumento}</td>
              <td className="py-3 px-4 text-left">{item.nombrePaciente}</td>
              <td className="py-3 px-4 text-left">{item.fechaAuditoria}</td>
              <td className="py-3 px-4 text-left">{item.nombreAuditora}</td>
              <td className="py-3 px-4 text-center">
                <button className="border border-gray-300 rounded p-2">
                  📄
                </button>
              </td>
              <td className="py-3 px-4 text-center">
                <button className="border border-gray-300 rounded p-2">
                  🖥️
                </button>
              </td>
              <td className="py-3 px-4 text-center">
                <button className="border border-gray-300 rounded p-2">
                  👁️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 flex justify-end">
        <button className="bg-green-600 text-white font-bold py-2 px-6 rounded hover:bg-green-700">
          Radicar
        </button>
      </div>
    </div>
  );
};

export default Table;
