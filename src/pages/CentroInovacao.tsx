
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Building2, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CentroInovacao = () => {
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
              className="flex items-center text-gray-600 hover:text-orange-600 transition-colors"
            >
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
          backgroundImage: `linear-gradient(rgba(255, 237, 213, 0.9), rgba(255, 255, 255, 0.9)), url('/images/inovation2.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Centro de Inovação
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Espaço voltado para impulsionar o desenvolvimento de novos negócios, projetos e ideias
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto text-gray-700 mb-12">
            <p className="mb-6">
              O Centro de Inovação é um espaço voltado para impulsionar o desenvolvimento de novos negócios, projetos e ideias com base tecnológica ou criativa. Seu objetivo é conectar diferentes atores do ecossistema — como empreendedores, instituições de ensino, setor público e empresas — em um ambiente colaborativo que favorece a troca de conhecimentos, mentorias, eventos e acesso a recursos estratégicos.
            </p>
            
            <p className="mb-8 text-center font-semibold text-orange-600">
              Em Uberaba existe o MoonHub, que é um importante centro de inovação da região.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-12 rounded-2xl border border-orange-200 mb-12">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-orange-600 rounded-full p-4">
                  <Rocket className="h-12 w-12 text-white" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">MoonHub</h3>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Centro de inovação que conecta empreendedores, startups e empresas em um ambiente colaborativo e estratégico, promovendo o desenvolvimento de soluções inovadoras para o mercado.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <Building2 className="h-10 w-10 text-orange-600 mb-4" />
              <h4 className="text-xl font-semibold mb-3 text-gray-900">Ambiente Colaborativo</h4>
              <p className="text-gray-600">
                Espaço que favorece a troca de conhecimentos, networking e colaboração entre diferentes atores do ecossistema de inovação.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <Rocket className="h-10 w-10 text-orange-600 mb-4" />
              <h4 className="text-xl font-semibold mb-3 text-gray-900">Impulso ao Desenvolvimento</h4>
              <p className="text-gray-600">
                Oferece recursos estratégicos, mentorias e eventos para acelerar o desenvolvimento de negócios e projetos inovadores.
              </p>
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

export default CentroInovacao;
