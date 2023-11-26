import React from 'react';

export default function Cadastrados() {
  const cadastradosData = [
    { nome: 'João Silva', email: 'joao@example.com', telefone: '123-456-7890' },
    { nome: 'Maria Oliveira', email: 'maria@example.com', telefone: '987-654-3210' },
    { nome: 'Carlos Souza', email: 'carlos@example.com', telefone: '555-123-4567' },
    { nome: 'Ana Pereira', email: 'ana@example.com', telefone: '111-222-3333' },
    { nome: 'Rodrigo Santos', email: 'rodrigo@example.com', telefone: '999-888-7777' },
    { nome: 'Patrícia Lima', email: 'patricia@example.com', telefone: '444-555-6666' },
    { nome: 'João Silva', email: 'joao@example.com', telefone: '123-456-7890' },
    { nome: 'Maria Oliveira', email: 'maria@example.com', telefone: '987-654-3210' },
    { nome: 'Carlos Souza', email: 'carlos@example.com', telefone: '555-123-4567' },
    { nome: 'Ana Pereira', email: 'ana@example.com', telefone: '111-222-3333' },
    { nome: 'Rodrigo Santos', email: 'rodrigo@example.com', telefone: '999-888-7777' },
    { nome: 'Patrícia Lima', email: 'patricia@example.com', telefone: '444-555-6666' },
  ];

  return (
    <>
      <p className="text-gray-700 text-3xl mb-6 font-bold">Cadastrados</p>

      {/* Tabela */}
      <div className="bg-white shadow-md overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-2 px-4 text-sm font-medium text-gray-500 text-center">Nome</th>
              <th className="py-2 px-4 text-sm font-medium text-gray-500 text-center">Email</th>
              <th className="py-2 px-4 text-sm font-medium text-gray-500 text-center">Telefone</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {cadastradosData.map((pessoa, index) => (
              <tr key={index}>
                <td className="py-2 px-4 text-sm text-center">{pessoa.nome}</td>
                <td className="py-2 px-4 text-sm text-center">{pessoa.email}</td>
                <td className="py-2 px-4 text-sm text-center">{pessoa.telefone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
