
import React from 'react';
import { ArrowLeft, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

const MecanismosInovacao = () => {
  const mecanismos = [
    { nome: "Unidade Embrapii Soluções Agroalimentares", descricao: "Desenvolvimento de soluções para o setor agroalimentar" },
    { nome: "Integra", descricao: "Programa de integração e desenvolvimento" },
    { nome: "Unitecne", descricao: "Núcleo de inovação e empreendedorismo da Uniube" },
    { nome: "CITE Fazu", descricao: "Centro de Inovação e Tecnologia Empresarial da Fazu" },
    { nome: "Impulso", descricao: "Programa de empreendedorismo da UFTM" },
    { nome: "NIT Uniube", descricao: "Núcleo de Inovação Tecnológica da Uniube" },
    { nome: "NIT UFTM", descricao: "Núcleo de Inovação Tecnológica da UFTM" },
    { nome: "NIT IFTM", descricao: "Núcleo de Inovação Tecnológica do IFTM" },
    { nome: "Triângulo Ventures", descricao: "Corporate Venture Builder" },
    { nome: "MoonHub", descricao: "Centro de Inovação" },
    { nome: "Agência UFTM de Inovação", descricao: "Agência de inovação da UFTM" },
    { nome: "Parque Tecnológico de Uberaba", descricao: "Ambiente de inovação e desenvolvimento tecnológico" }
  ];

  return (
    <div 
      className="min-h-screen bg-gray-50 relative"
      style={{
        backgroundImage: `linear-gradient(rgba(249, 250, 251, 0.9), rgba(249, 250, 251, 0.9)), url('https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2125&q=80')`,
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
          <h1 className="text-3xl font-bold text-gray-900">Mecanismos de Inovação</h1>
          <p className="text-gray-600 mt-2">Estruturas que apoiam o desenvolvimento da inovação</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="flex items-center mb-6">
            <Lightbulb className="h-8 w-8 text-orange-600 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-900">Estruturas de Apoio</h2>
          </div>
          <p className="text-gray-600 mb-8">
            Os mecanismos de inovação são as estruturas especializadas que oferecem suporte direto ao desenvolvimento 
            de projetos inovadores, desde a concepção até a comercialização.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {mecanismos.map((mecanismo, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:border-orange-300 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{mecanismo.nome}</h3>
                <p className="text-gray-600">{mecanismo.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MecanismosInovacao;
