
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Building, Globe, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ParqueTecnologico = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="text-2xl font-bold text-orange-600">
              <img src="/images/logo_zebuvalley.png" style={{ width: '100px', height: 'auto' }}/>
            </Link>
            <Link 
              to="/"
              className="flex items-center text-gray-600 hover:text-orange-600 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar ao início
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="py-40 bg-gradient-to-br from-orange-50 to-white relative"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 237, 213, 0.9), rgba(255, 255, 255, 0.9)), url('/images/parque.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Parque Tecnológico
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ambiente planejado para estimular a inovação, pesquisa aplicada e desenvolvimento de novas tecnologias
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto text-gray-700 mb-12">
            <p className="mb-6">
              Parque Tecnológico é um ambiente planejado para estimular a inovação, a pesquisa aplicada e o desenvolvimento de novas tecnologias. Ele conecta universidades, centros de pesquisa, empresas, startups e o setor público, formando um ecossistema colaborativo voltado à criação de soluções com impacto econômico e social.
            </p>
            
            <p className="mb-6">
              Uberaba conta com seu próprio Parque Tecnológico, uma iniciativa estratégica que fortalece o ecossistema de inovação local e regional. Gerido por uma rede de parceiros públicos e privados, o Parque Tecnológico de Uberaba tem como missão articular governo, empresas e universidades para promover o desenvolvimento sustentável da cidade e do Triângulo Mineiro.
            </p>
            
            <p className="mb-8">
              Com infraestrutura moderna e foco em inovação, o Parque abriga empresas, startups e instituições que desejam desenvolver projetos tecnológicos, gerar conhecimento aplicado e impulsionar o crescimento econômico da região.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-orange-100 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Building className="h-10 w-10 text-orange-600" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-900">Infraestrutura Moderna</h4>
              <p className="text-gray-600">
                Espaços equipados para abrigar empresas, startups e instituições de pesquisa e desenvolvimento.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-10 w-10 text-orange-600" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-900">Ecossistema Colaborativo</h4>
              <p className="text-gray-600">
                Conecta universidades, empresas, governo e sociedade em um ambiente de inovação integrado.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Globe className="h-10 w-10 text-orange-600" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-900">Impacto Regional</h4>
              <p className="text-gray-600">
                Fortalece o desenvolvimento sustentável de Uberaba e do Triângulo Mineiro.
              </p>
            </div>
          </div>
          
          <div className="bg-orange-50 p-8 rounded-lg border border-orange-100 mb-12">
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Parque Tecnológico de Uberaba</h3>
              <p className="text-gray-600 mb-6">
                Saiba mais sobre o Parque Tecnológico de Uberaba e suas iniciativas para o desenvolvimento da inovação regional.
              </p>
              <a 
                href="https://portal.uberaba.mg.gov.br/parquetecnologico/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-orange-600 hover:text-orange-700 transition-colors"
              >
                <ExternalLink className="h-5 w-5 mr-2" />
                Acesse o site oficial
              </a>
            </div>
          </div>
          
          <div className="text-center">
            <Link to="/">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3">
                Voltar ao ZebuValley
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ParqueTecnologico;
