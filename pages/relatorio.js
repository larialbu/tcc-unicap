import React from 'react';

// Função fictícia para gerar dados aleatórios para o gráfico
const gerarDadosGrafico = () => {
  return Array.from({ length: 7 }, () => Math.floor(Math.random() * 100));
};

export default function Relatorio() {
  // Dados fictícios para o gráfico
  const dadosGrafico = gerarDadosGrafico();

  // Função fictícia para gerar o relatório
  const gerarRelatorio = () => {
    // Lógica para gerar o relatório
    alert('Relatório gerado com sucesso!');
  };

  return (
    <>
      <p className="text-gray-700 text-3xl mb-6 font-bold">Relatório</p>

      {/* Cartões */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
        {/* Cartão 1 - Gráfico */}
        <div className="bg-white p-4 shadow-md">
          <p className="text-lg font-bold mb-2">Estatísticas Gerais</p>
          {/* Incluir aqui um componente de gráfico (por exemplo, Chart.js) */}
          <div className="bg-gray-200 h-32">
            {/* Aqui iria o gráfico real */}
            {/* Para fins de exemplo, estamos usando um fundo cinza */}
          </div>
        </div>

        {/* Cartão 2 - Estatísticas */}
        <div className="bg-white p-4 shadow-md">
          <p className="text-lg font-bold mb-2">Estatísticas Detalhadas</p>
          <p className="text-gray-500 text-center">Eventos Realizados: 25</p>
          <p className="text-gray-500 text-center">Inscrições Totais: 500</p>
          <p className="text-gray-500 text-center">Participantes Únicos: 300</p>
        </div>

        {/* Cartão 3 - Botão para Gerar Relatório */}
        <div className="bg-white p-4 shadow-md">
          <p className="text-lg font-bold mb-2">Gerar Relatório</p>
          <button
            className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            onClick={gerarRelatorio}
          >
            Gerar Relatório
          </button>
        </div>
      </div>

      {/* Tabela (exemplo de estrutura) */}
      <div className="bg-white shadow-md overflow-x-auto p-4">
        <p className="text-lg font-bold mb-2 text-center">Detalhes do Relatório</p>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-2 px-4 text-sm font-medium text-gray-500 text-center">Data</th>
              <th className="py-2 px-4 text-sm font-medium text-gray-500 text-center">Evento</th>
              <th className="py-2 px-4 text-sm font-medium text-gray-500 text-center">Horas</th>
              <th className="py-2 px-4 text-sm font-medium text-gray-500 text-center">Local</th>
              <th className="py-2 px-4 text-sm font-medium text-gray-500 text-center">Inscrições</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {dadosGrafico.map((valor, index) => (
              <tr key={index}>
                <td className="py-2 px-4 text-sm text-center">2023-12-0{index + 1}</td>
                <td className="py-2 px-4 text-sm text-center">Evento {index + 1}</td>
                <td className="py-2 px-4 text-sm text-center">10:00 - 12:00</td>
                <td className="py-2 px-4 text-sm text-center">Local {index + 1}</td>
                <td className="py-2 px-4 text-sm text-center">{valor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
