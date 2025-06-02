
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NITs = () => {
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
          backgroundImage: `linear-gradient(rgba(255, 237, 213, 0.9), rgba(255, 255, 255, 0.9)), url('https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=5530&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            NITs
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Núcleos de Inovação Tecnológica que gerem a política de inovação das instituições de ensino
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto text-gray-700 mb-12">
            <p className="mb-6">
              Os Núcleos de Inovação Tecnológica (NITs) são estruturas vinculadas a universidades e institutos de pesquisa que têm a função de gerir a política de inovação dessas instituições. Na prática, os NITs são os responsáveis por proteger e transferir os conhecimentos gerados dentro do ambiente acadêmico para a sociedade.
            </p>
            
            <p className="mb-6">
              Eles cuidam de atividades como o registro de patentes, o licenciamento de tecnologias, a formalização de parcerias com empresas e o apoio à criação de startups nascidas dentro das instituições de ensino e pesquisa — as chamadas spin-offs acadêmicas.
            </p>
            
            <p className="mb-8">
              Além disso, os NITs também ajudam a aproximar pesquisadores e empreendedores, promovendo a inovação como ponte entre o conhecimento científico e o mercado.
            </p>
            
            <p className="mb-8 text-center font-semibold text-orange-600">
              Em Uberaba, os NITs fazem parte do nosso ecossistema e são fundamentais para transformar boas ideias em soluções aplicadas que geram impacto real.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">NIT Uniube</h3>
              <div className="space-y-3 text-gray-700">
                <p className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-orange-600" />
                  (34) 8719-9352 - Denise
                </p>
                <a 
                  href="https://uniube.br/academico/empreendedorismo/nucleo-de-inovacao-tecnologica" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center text-orange-600 hover:text-orange-700 transition-colors"
                >
                  <ExternalLink className="h-5 w-5 mr-3" />
                  Site oficial
                </a>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">NUPIT UFTM</h3>
              <div className="space-y-3 text-gray-700">
                <p className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-orange-600" />
                  (34) 3331-3024 - Demian
                </p>
                <a 
                  href="https://www.uftm.edu.br/proppg/pesquisa/nit" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center text-orange-600 hover:text-orange-700 transition-colors"
                >
                  <ExternalLink className="h-5 w-5 mr-3" />
                  Site oficial
                </a>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">NIT IFTM</h3>
              <div className="space-y-3 text-gray-700">
                <p className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-orange-600" />
                  (34) 8429-8785 - Wanessa
                </p>
                <p className="text-sm text-gray-500">(Site em manutenção)</p>
              </div>
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

export default NITs;
