
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PreIncubadoras = () => {
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
          backgroundImage: `linear-gradient(rgba(255, 237, 213, 0.9), rgba(255, 255, 255, 0.9)), url('https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=3346&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Pré-incubadoras e Incubadoras
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ambientes de apoio à inovação que ajudam ideias e negócios a ganharem forma, estrutura e força para crescer.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto text-gray-700 mb-12">
            <p className="mb-6">
              As pré-incubadoras e incubadoras são ambientes de apoio à inovação que ajudam ideias e negócios a ganharem forma, estrutura e força para crescer.
            </p>
            
            <p className="mb-6">
              A <strong>pré-incubadora</strong> é indicada para quem está nas etapas iniciais de desenvolvimento de uma ideia inovadora. Ela oferece suporte para validar o problema, a solução e o modelo de negócio, além de mentorias, conexões e capacitações para transformar ideias em projetos prontos para o mercado.
            </p>
            
            <p className="mb-6">
              Já a <strong>incubadora</strong> apoia empreendedores que já têm um negócio em estágio inicial, com algum nível de validação ou operação. Nela, as startups recebem apoio técnico, gerencial e estratégico para crescer de forma estruturada, além de acesso a redes de contato, infraestrutura e programas de aceleração.
            </p>
            
            <p className="mb-8">
              Esses ambientes são fundamentais para fortalecer o ecossistema de inovação, pois ajudam a transformar boas ideias em negócios de impacto.
            </p>
            
            <p className="mb-8 text-center font-semibold text-orange-600">
              No ZebuValley, contamos com ambientes que cumprem exatamente esse papel: apoiar desde as ideias em fase inicial até negócios que estão prontos para escalar. Conheça abaixo as pré-incubadoras e incubadoras que fazem parte da nossa comunidade:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-orange-50 p-8 rounded-lg border border-orange-100">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Unitecne</h3>
              <div className="space-y-3 text-gray-700">
                <p className="flex items-center">
                  <ExternalLink className="h-5 w-5 mr-3 text-orange-600" />
                  <a 
                    href="https://unitecne.uniube.br/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-orange-600 transition-colors"
                  >
                    unitecne.uniube.br
                  </a>
                </p>
                <p className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-orange-600" />
                  (34) 9841-6142 - Brenda
                </p>
                <p className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-orange-600" />
                  unitecne@uniube.br
                </p>
              </div>
            </div>
            
            <div className="bg-orange-50 p-8 rounded-lg border border-orange-100">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Impulso</h3>
              <div className="space-y-3 text-gray-700">
                <p className="flex items-center">
                  <ExternalLink className="h-5 w-5 mr-3 text-orange-600" />
                  <a 
                    href="https://www.uftm.edu.br/proppg/pesquisa/nuemp/impulso" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-orange-600 transition-colors"
                  >
                    UFTM - Impulso
                  </a>
                </p>
                <p className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-orange-600" />
                  (34) 3331-3036 - Estefânia
                </p>
                <p className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-orange-600" />
                  empreendedorismo.proppg@uftm.edu.br
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
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

export default PreIncubadoras;
