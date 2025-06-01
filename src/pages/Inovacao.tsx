
import React from 'react';
import { ArrowLeft, Lightbulb, TrendingUp, Users, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Inovacao = () => {
  return (
    <div 
      className="min-h-screen bg-gray-50 relative"
      style={{
        backgroundImage: `linear-gradient(rgba(249, 250, 251, 0.9), rgba(249, 250, 251, 0.9)), url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80')`,
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
          <h1 className="text-3xl font-bold text-gray-900">Inovação</h1>
          <p className="text-gray-600 mt-2">O poder transformador da inovação em Uberaba</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Hero Section */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="flex items-center mb-6">
            <Lightbulb className="h-8 w-8 text-orange-600 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-900">O que é Inovação?</h2>
          </div>
          <p className="text-gray-600 mb-6 text-lg leading-relaxed">
            Inovação é a implementação de uma ideia nova ou significativamente melhorada que gera valor. 
            Vai além da simples criatividade: é sobre transformar conhecimento em soluções práticas que 
            resolvem problemas reais e criam impacto positivo na sociedade e na economia.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            No ZebuValley, acreditamos que a inovação acontece quando pessoas talentosas se conectam, 
            compartilham conhecimento e trabalham juntas para criar o futuro.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <TrendingUp className="h-8 w-8 text-orange-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Crescimento Econômico</h3>
            <p className="text-gray-600">
              A inovação gera novos negócios, empregos qualificados e aumenta a competitividade da região.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <Users className="h-8 w-8 text-orange-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Impacto Social</h3>
            <p className="text-gray-600">
              Soluções inovadoras melhoram a qualidade de vida e resolvem desafios da comunidade local.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <Target className="h-8 w-8 text-orange-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Sustentabilidade</h3>
            <p className="text-gray-600">
              A inovação promove o desenvolvimento sustentável e responsável para as futuras gerações.
            </p>
          </div>
        </div>

        {/* Innovation Types */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Tipos de Inovação</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-orange-600 pl-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Inovação Tecnológica</h3>
              <p className="text-gray-600">
                Desenvolvimento de novas tecnologias, produtos ou processos que transformam mercados e indústrias.
              </p>
            </div>
            
            <div className="border-l-4 border-orange-600 pl-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Inovação Social</h3>
              <p className="text-gray-600">
                Soluções criativas para problemas sociais, melhorando a vida das pessoas e comunidades.
              </p>
            </div>
            
            <div className="border-l-4 border-orange-600 pl-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Inovação em Modelo de Negócio</h3>
              <p className="text-gray-600">
                Novas formas de criar, entregar e capturar valor no mercado.
              </p>
            </div>
            
            <div className="border-l-4 border-orange-600 pl-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Inovação em Processo</h3>
              <p className="text-gray-600">
                Melhorias significativas na forma como as coisas são feitas, aumentando eficiência e qualidade.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-orange-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Faça Parte da Revolução da Inovação</h2>
          <p className="text-orange-100 mb-6 text-lg">
            Conecte-se com o ecossistema ZebuValley e transforme suas ideias em realidade.
          </p>
          <Button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3">
            Participe da Trilha da Inovação
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Inovacao;
