export default function TodosOsEventos() {
  const eventos = [
    { nome: 'Evento 1', data: '2023-12-01', local: 'Local 1', participantes: 50 },
    { nome: 'Evento 2', data: '2023-12-05', local: 'Local 2', participantes: 30 },
    { nome: 'Evento 3', data: '2023-12-10', local: 'Local 3', participantes: 20 },
    { nome: 'Evento 4', data: '2023-12-15', local: 'Local 4', participantes: 45 },
    { nome: 'Evento 5', data: '2023-12-20', local: 'Local 5', participantes: 60 },
    { nome: 'Evento 6', data: '2023-12-25', local: 'Local 6', participantes: 40 },
    { nome: 'Evento 7', data: '2023-12-30', local: 'Local 7', participantes: 55 },
    { nome: 'Evento 8', data: '2024-01-05', local: 'Local 8', participantes: 25 },
    { nome: 'Evento 9', data: '2024-01-10', local: 'Local 9', participantes: 35 },
    { nome: 'Evento 10', data: '2024-01-15', local: 'Local 10', participantes: 30 },
  ];

  return (
    <>
      <p className="text-gray-700 text-3xl mb-6 font-bold">Todos os eventos</p>

      {/* Cartões */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-6">
        {eventos.map((evento, index) => (
          <div key={index} className="bg-white p-4 shadow-md">
            <p className="text-lg font-bold mb-2">{evento.nome}</p>
            <p className="text-gray-500">{evento.data}</p>
            <p className="text-gray-500">{evento.local}</p>
            <p className="text-red-500 font-bold">Participantes: {evento.participantes}</p>
          </div>
        ))}
      </div>
    </>
  );
}
