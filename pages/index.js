import React from 'react';

export default function Home() {
  const eventsData = [
    { date: '2023-12-01', event: 'Evento 1', hours: '10:00 - 12:00', location: 'Local 1', registrations: 50 },
    { date: '2023-12-05', event: 'Evento 2', hours: '14:00 - 16:00', location: 'Local 2', registrations: 30 },
  ];

  return (
    <>
      <p className="text-gray-700 text-3xl mb-6 font-bold">Dashboard</p>

      {/* Cartões */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
        {eventsData.map((event, index) => (
          <div key={index} className="bg-white p-4 shadow-md">
            <p className="text-lg font-bold mb-2">{event.event}</p>
            <p className="text-gray-500">{event.date}</p>
            <p className="text-gray-500">{event.hours}</p>
            <p className="text-gray-500">{event.location}</p>
            <p className="text-red-500 font-bold">Inscrições: {event.registrations}</p>
          </div>
        ))}
      </div>

      {/* Tabela */}
      <div className="bg-white shadow-md overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-2 px-4 text-sm font-medium text-gray-500">Data</th>
              <th className="py-2 px-4 text-sm font-medium text-gray-500">Evento</th>
              <th className="py-2 px-4 text-sm font-medium text-gray-500">Horas</th>
              <th className="py-2 px-4 text-sm font-medium text-gray-500">Local</th>
              <th className="py-2 px-4 text-sm font-medium text-gray-500">Inscrições</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {eventsData.map((event, index) => (
              <tr key={index}>
                <td className="py-2 px-4 text-sm text-center">{event.date}</td>
                <td className="py-2 px-4 text-sm text-center">{event.event}</td>
                <td className="py-2 px-4 text-sm text-center">{event.hours}</td>
                <td className="py-2 px-4 text-sm text-center">{event.location}</td>
                <td className="py-2 px-4 text-sm text-center">{event.registrations}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
