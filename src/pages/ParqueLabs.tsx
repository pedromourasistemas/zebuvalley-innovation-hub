
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ParqueLabs = () => {
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
          backgroundImage: `linear-gradient(rgba(255, 237, 213, 0.9), rgba(255, 255, 255, 0.9)), url('/images/parquelab1.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Parque Labs
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Espaços colaborativos de inovação conectados ao Parque Tecnológico de Uberaba
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto text-gray-700 mb-12">
            <p className="mb-6">
              Os ParqueLabs são espaços colaborativos de inovação conectados ao Parque Tecnológico de Uberaba, criados para ampliar e descentralizar os ambientes de inovação no município. Eles integram o programa Uberaba Inovadora, uma iniciativa da Secretaria de Desenvolvimento Econômico, Turismo e Inovação da Prefeitura de Uberaba.
            </p>
            
            <p className="mb-6">
              Esses laboratórios são abertos ao público e funcionam como pontos de encontro entre estudantes, pesquisadores, empreendedores e a comunidade, incentivando o acesso ao conhecimento, à experimentação e ao desenvolvimento de projetos com foco em inovação.
            </p>
            
            <p className="mb-8 text-center font-semibold text-orange-600">
              Alguns dos ParqueLabs possuem horários específicos de funcionamento ou formas de agendamento. Para utilizar os espaços, entre em contato com a unidade desejada e verifique as orientações de uso.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-orange-50 p-8 rounded-lg border border-orange-100">
              <div className="flex items-center mb-4">
                <Lightbulb className="h-8 w-8 text-orange-600 mr-3" />
                <h3 className="text-2xl font-semibold text-gray-900">Parque Lab Uniube</h3>
              </div>
              <p className="text-gray-600">
                Laboratório de inovação da Universidade de Uberaba, focado em projetos colaborativos e experimentação.
              </p>
            </div>
            
            <div className="bg-orange-50 p-8 rounded-lg border border-orange-100">
              <div className="flex items-center mb-4">
                <Lightbulb className="h-8 w-8 text-orange-600 mr-3" />
                <h3 className="text-2xl font-semibold text-gray-900">Parque Lab Fazu</h3>
              </div>
              <p className="text-gray-600">
                Espaço colaborativo das Faculdades Associadas de Uberaba para desenvolvimento de ideias inovadoras.
              </p>
            </div>
            
            <div className="bg-orange-50 p-8 rounded-lg border border-orange-100">
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 text-orange-600 mr-3" />
                <h3 className="text-2xl font-semibold text-gray-900">Parque Lab UFTM</h3>
              </div>
              <p className="text-gray-600">
                Laboratório da Universidade Federal do Triângulo Mineiro voltado para pesquisa aplicada e inovação.
              </p>
            </div>
            
            <div className="bg-orange-50 p-8 rounded-lg border border-orange-100">
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 text-orange-600 mr-3" />
                <h3 className="text-2xl font-semibold text-gray-900">Parque Lab IFTM</h3>
              </div>
              <p className="text-gray-600">
                Espaço do Instituto Federal do Triângulo Mineiro para experimentação e desenvolvimento tecnológico.
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

export default ParqueLabs;
