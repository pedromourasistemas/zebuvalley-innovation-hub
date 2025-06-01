
import React from 'react';
import { ArrowLeft, Users2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const SociedadeOrganizada = () => {
  const organizacoes = [
    { nome: "Sebrae", descricao: "Serviço Brasileiro de Apoio às Micro e Pequenas Empresas" },
    { nome: "Emater", descricao: "Empresa de Assistência Técnica e Extensão Rural" },
    { nome: "Senac", descricao: "Serviço Nacional de Aprendizagem Comercial" },
    { nome: "Sindicato Rural", descricao: "Representação dos produtores rurais" },
    { nome: "Utech", descricao: "Organização focada em tecnologia e inovação" },
    { nome: "Fiemg", descricao: "Federação das Indústrias do Estado de Minas Gerais" }
  ];

  return (
    <div 
      className="min-h-screen bg-gray-50 relative"
      style={{
        backgroundImage: `linear-gradient(rgba(249, 250, 251, 0.9), rgba(249, 250, 251, 0.9)), url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=2132&q=80')`,
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
          <h1 className="text-3xl font-bold text-gray-900">Sociedade Organizada</h1>
          <p className="text-gray-600 mt-2">Organizações e entidades que fortalecem o ecossistema</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="flex items-center mb-6">
            <Users2 className="h-8 w-8 text-orange-600 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-900">Organizações Parceiras</h2>
          </div>
          <p className="text-gray-600 mb-8">
            A sociedade organizada desempenha papel fundamental no ecossistema de inovação, oferecendo capacitação, 
            apoio técnico e representação dos diversos setores da economia local.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {organizacoes.map((org, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:border-orange-300 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{org.nome}</h3>
                <p className="text-gray-600">{org.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SociedadeOrganizada;
