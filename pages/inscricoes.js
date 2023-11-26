import React from 'react';

export default function Inscricoes() {
  const inscricoesData = [
    { nome: 'João Silva', email: 'joao@example.com', telefone: '123-456-7890' },
    { nome: 'Maria Oliveira', email: 'maria@example.com', telefone: '987-654-3210' },
    { nome: 'Carlos Souza', email: 'carlos@example.com', telefone: '555-123-4567' },
    { nome: 'João Silva', email: 'joao@example.com', telefone: '123-456-7890' },
    { nome: 'Maria Oliveira', email: 'maria@example.com', telefone: '987-654-3210' },
    { nome: 'Carlos Souza', email: 'carlos@example.com', telefone: '555-123-4567' },
  ];

  return (
    <>
      <p className="text-gray-700 text-3xl mb-6 font-bold">Inscrições</p>

      {/* Tabela */}
      <div className="bg-white shadow-md overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-2 px-4 text-sm font-medium text-gray-500">Nome</th>
              <th className="py-2 px-4 text-sm font-medium text-gray-500">Email</th>
              <th className="py-2 px-4 text-sm font-medium text-gray-500">Telefone</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {inscricoesData.map((inscricao, index) => (
              <tr key={index}>
                <td className="py-2 px-4 text-sm text-center">{inscricao.nome}</td>
                <td className="py-2 px-4 text-sm text-center">{inscricao.email}</td>
                <td className="py-2 px-4 text-sm text-center">{inscricao.telefone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
