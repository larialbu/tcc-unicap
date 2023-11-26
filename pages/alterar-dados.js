import React from 'react';
import Link from 'next/link';

export default function Configuracoes() {
  const opcoesConfiguracao = [
    { id: 1, nome: 'Conta Pessoal' },
    { id: 2, nome: 'Perfil de Acesso' },
    { id: 3, nome: 'Preferências de Notificação' },
    { id: 4, nome: 'Tema da Interface' },
    { id: 5, nome: 'Configurações de Privacidade' },
    { id: 6, nome: 'Idioma' },
    { id: 7, nome: 'Configurações de Segurança' },
    { id: 8, nome: 'Notificações por Email' },
    { id: 9, nome: 'Preferências de Contato' },
    { id: 10, nome: 'Configurações de Localização' },
  ];

  return (
    <>
      <p className="text-gray-700 text-3xl mb-6 font-bold">Configurações</p>

      {/* Lista de Opções de Configuração */}
      <div className="bg-white shadow-md p-4">
        {opcoesConfiguracao.map((opcao, index) => (
          <div key={opcao.id} className={`mb-4 ${index < opcoesConfiguracao.length - 1 ? 'pb-4 border-b border-gray-200' : ''}`}>
            <Link href={`/configuracoes/${opcao.id}`}>
              <p className="text-base mb-2 block">{opcao.nome}</p>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
