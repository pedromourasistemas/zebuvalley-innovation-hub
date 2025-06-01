
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, TrendingUp, Zap, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';

const VentureBuilder = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="text-2xl font-bold text-orange-600">
              ZebuValley
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
        className="py-20 bg-gradient-to-br from-orange-50 to-white relative"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 237, 213, 0.9), rgba(255, 255, 255, 0.9)), url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=7952&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Corporate Venture Builder
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Modelo de inovação que desenvolve novos negócios a partir de desafios estratégicos
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto text-gray-700 mb-12">
            <p className="mb-6">
              Uma Corporate Venture Builder é um modelo de inovação em que empresas desenvolvem novos negócios — como startups ou spin-offs — a partir de desafios estratégicos ou oportunidades de mercado. Diferente de aceleradoras ou incubadoras, que apoiam negócios externos, a Venture Builder atua criando soluções de dentro para fora, conectando empresas, empreendedores e o ecossistema de inovação.
            </p>
            
            <p className="mb-8 text-center font-semibold text-orange-600">
              Em Uberaba, o ZebuValley conta com a Triângulo Ventures, uma Corporate Venture Builder que atua desde 2018 conectando startups, empresas e investidores. Com foco em inovação estratégica, a Triângulo Ventures desenvolve startups, oferece soluções corporativas e estrutura capital para inovação, sendo uma peça-chave no fortalecimento do ecossistema regional.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-orange-100 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Zap className="h-10 w-10 text-orange-600" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-900">Inovação Estratégica</h4>
              <p className="text-gray-600">
                Desenvolvimento de novos negócios baseados em desafios estratégicos e oportunidades de mercado.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Target className="h-10 w-10 text-orange-600" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-900">Soluções Corporativas</h4>
              <p className="text-gray-600">
                Oferece soluções personalizadas para empresas que buscam inovar e desenvolver novos produtos.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="h-10 w-10 text-orange-600" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-900">Estruturação de Capital</h4>
              <p className="text-gray-600">
                Conecta startups, empresas e investidores para estruturar capital e acelerar o crescimento.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-12 rounded-2xl border border-orange-200 mb-12">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Triângulo Ventures</h3>
              <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
                Atuando desde 2018, a Triângulo Ventures é uma peça-chave no fortalecimento do ecossistema de inovação regional, conectando startups, empresas e investidores.
              </p>
              <a 
                href="https://www.trianguloventures.com.br/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg transition-colors"
              >
                <ExternalLink className="h-5 w-5 mr-2" />
                Conheça a Triângulo Ventures
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

export default VentureBuilder;
