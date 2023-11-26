import React, { useState } from 'react';

export default function CriarEvento() {
  const [eventos, setEventos] = useState([]);
  const [novoEvento, setNovoEvento] = useState({
    nome: '',
    data: '',
    horaInicio: '',
    horaTermino: '',
    local: '',
    parceria: '',
    participantes: '',
    cargaHoraria: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNovoEvento((prevEvento) => ({ ...prevEvento, [name]: value }));
  };

  const adicionarEvento = () => {
    setEventos([...eventos, novoEvento]);
    setNovoEvento({
      nome: '',
      data: '',
      horaInicio: '',
      horaTermino: '',
      local: '',
      parceria: '',
      participantes: '',
      cargaHoraria: '',
    });
  };

  const excluirEvento = (index) => {
    const novosEventos = [...eventos];
    novosEventos.splice(index, 1);
    setEventos(novosEventos);
  };

  return (
    <>
      <p className="text-gray-700 text-3xl mb-6 font-bold">Criar evento</p>

      {/* Formulário para criar um novo evento */}
      <div className="mb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <div>
          <input
            type="text"
            placeholder="Nome do evento"
            className="border rounded p-2 w-full"
            name="nome"
            value={novoEvento.nome}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Data do evento"
            className="border rounded p-2 w-full"
            name="data"
            value={novoEvento.data}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Hora de início"
            className="border rounded p-2 w-full"
            name="horaInicio"
            value={novoEvento.horaInicio}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Hora de término"
            className="border rounded p-2 w-full"
            name="horaTermino"
            value={novoEvento.horaTermino}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Local do evento"
            className="border rounded p-2 w-full"
            name="local"
            value={novoEvento.local}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Parceria"
            className="border rounded p-2 w-full"
            name="parceria"
            value={novoEvento.parceria}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Participantes"
            className="border rounded p-2 w-full"
            name="participantes"
            value={novoEvento.participantes}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Carga horária"
            className="border rounded p-2 w-full"
            name="cargaHoraria"
            value={novoEvento.cargaHoraria}
            onChange={handleInputChange}
          />
        </div>
        <div>
            <button className="bg-red-500 text-white p-2 rounded w-full" onClick={adicionarEvento}>
              Adicionar Evento
            </button>
        </div>
      </div>

      {/* Lista de eventos criados */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-6">
        {eventos.map((evento, index) => (
          <div key={index} className="bg-white p-4 shadow-md">
            <p className="text-lg font-bold mb-2">{evento.nome}</p>
            <p className="text-gray-500">{evento.data}</p>
            <p className="text-gray-500">{`Horário: ${evento.horaInicio} - ${evento.horaTermino}`}</p>
            <p className="text-gray-500">{`Local: ${evento.local}`}</p>
            <p className="text-gray-500">{`Parceria: ${evento.parceria}`}</p>
            <p className="text-gray-500">{`Participantes: ${evento.participantes}`}</p>
            <p className="text-gray-500">{`Carga Horária: ${evento.cargaHoraria}`}</p>
            <button
              className="bg-red-500 text-white p-2 rounded mt-2"
              onClick={() => excluirEvento(index)}
            >
              Excluir Evento
            </button>
          </div>
        ))}
      </div>
    </>
  );
        }