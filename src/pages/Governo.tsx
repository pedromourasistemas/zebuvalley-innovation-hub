
import React from 'react';
import { ArrowLeft, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Governo = () => {
  const orgaos = [
    { nome: "Sala Mineira do Empreendedor", descricao: "Facilita a abertura e formalização de empresas" },
    { nome: "Prefeitura de Uberaba", descricao: "Governo municipal de Uberaba" },
    { nome: "Governo do Estado", descricao: "Governo do Estado de Minas Gerais" },
    { nome: "Feti", descricao: "Fundação de Ensino Técnico Intensivo" },
    { nome: "Secretaria Municipal de Educação", descricao: "Responsável pela educação municipal" },
    { nome: "Secretaria de Desenvolvimento Municipal", descricao: "Fomento ao desenvolvimento econômico local" }
  ];

  return (
    <div 
      className="min-h-screen bg-gray-50 relative"
      style={{
        backgroundImage: `linear-gradient(rgba(249, 250, 251, 0.9), rgba(249, 250, 251, 0.9)), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Header */}
      <div className="bg-white border-b border-gray-100 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link to="/" className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar ao início
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Governo</h1>
          <p className="text-gray-600 mt-2">Órgãos governamentais que apoiam o ecossistema de inovação</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="flex items-center mb-6">
            <Building2 className="h-8 w-8 text-orange-600 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-900">Órgãos Governamentais</h2>
          </div>
          <p className="text-gray-600 mb-8">
            O setor público é um importante agente do ecossistema de inovação, criando políticas públicas, 
            oferecendo infraestrutura e facilitando o ambiente de negócios para o desenvolvimento da região.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {orgaos.map((orgao, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:border-orange-300 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{orgao.nome}</h3>
                <p className="text-gray-600">{orgao.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Governo;
