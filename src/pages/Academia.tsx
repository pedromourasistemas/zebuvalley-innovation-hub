
import React from 'react';
import { ArrowLeft, ExternalLink, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Academia = () => {
  const instituicoes = [
    {
      nome: "IFTM - Instituto Federal do Triângulo Mineiro",
      descricao: "Instituto federal focado em educação técnica e tecnológica",
      url: "https://iftm.edu.br/"
    },
    {
      nome: "UFTM - Universidade Federal do Triângulo Mineiro",
      descricao: "Universidade federal com forte atuação em pesquisa e inovação",
      url: "https://www.uftm.edu.br/"
    },
    {
      nome: "UniFacthus",
      descricao: "Instituição de ensino superior",
      url: "#"
    },
    {
      nome: "Fazu - Faculdades Associadas de Uberaba",
      descricao: "Faculdades com foco em agronegócio e áreas correlatas",
      url: "https://www.fazu.br/"
    },
    {
      nome: "Uniube - Universidade de Uberaba",
      descricao: "Universidade privada com tradição em ensino e pesquisa",
      url: "https://uniube.br/"
    },
    {
      nome: "U. do Agro - Universidade do Agro",
      descricao: "Universidade especializada em agronegócio",
      url: "#"
    }
  ];

  return (
    <div 
      className="min-h-screen bg-gray-50 relative"
      style={{
        backgroundImage: `linear-gradient(rgba(249, 250, 251, 0.9), rgba(249, 250, 251, 0.9)), url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
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
          <h1 className="text-3xl font-bold text-gray-900">Academia</h1>
          <p className="text-gray-600 mt-2">Instituições de ensino que formam a base acadêmica do ZebuValley</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="flex items-center mb-6">
            <GraduationCap className="h-8 w-8 text-orange-600 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-900">Instituições de Ensino</h2>
          </div>
          <p className="text-gray-600 mb-8">
            As instituições acadêmicas são fundamentais para o ecossistema de inovação, sendo responsáveis pela formação de talentos, 
            desenvolvimento de pesquisas e geração de conhecimento que alimenta o mercado de inovação e tecnologia.
          </p>
          
          <div className="grid gap-6">
            {instituicoes.map((instituicao, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:border-orange-300 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{instituicao.nome}</h3>
                    <p className="text-gray-600">{instituicao.descricao}</p>
                  </div>
                  {instituicao.url !== "#" && (
                    <a 
                      href={instituicao.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-orange-600 hover:text-orange-700 ml-4"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academia;
