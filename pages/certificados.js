import React from 'react';

export default function Certificados() {
  const certificadosData = [
    { titulo: 'Certificado 1', descricao: 'Participação no Evento 1', data: '2023-12-01' },
    { titulo: 'Certificado 2', descricao: 'Participação no Evento 2', data: '2023-12-05' },
    { titulo: 'Certificado 3', descricao: 'Participação no Evento 3', data: '2023-12-10' },
  ];

  const emitirCertificado = (titulo) => {
    // Lógica para emitir o certificado
    alert(`Certificado emitido para: ${titulo}`);
  };

  return (
    <>
      <p className="text-gray-700 text-3xl mb-6 font-bold">Certificados</p>

      {/* Cartões */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
        {certificadosData.map((certificado, index) => (
          <div key={index} className="bg-white p-4 shadow-md">
            <p className="text-lg font-bold mb-2">{certificado.titulo}</p>
            <p className="text-gray-500">{certificado.descricao}</p>
            <p className="text-gray-500">{certificado.data}</p>
            <button
              className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              onClick={() => emitirCertificado(certificado.titulo)}
            >
              Emitir Certificado
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
