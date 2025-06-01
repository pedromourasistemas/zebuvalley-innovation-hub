
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Phone, Leaf, Cog, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Embrapii = () => {
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
          backgroundImage: `linear-gradient(rgba(255, 237, 213, 0.9), rgba(255, 255, 255, 0.9)), url('https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=6000&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Embrapii
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empresa Brasileira de Pesquisa e Inovação Industrial conectando ciência e mercado
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto text-gray-700 mb-12">
            <p className="mb-6">
              A EMBRAPII (Empresa Brasileira de Pesquisa e Inovação Industrial) é uma organização que conecta instituições de pesquisa com empresas para desenvolver projetos de inovação tecnológica. Seu modelo é ágil, flexível e de baixa burocracia, oferecendo recursos não reembolsáveis para impulsionar a inovação na indústria brasileira.
            </p>
            
            <p className="mb-6">
              Com uma rede de Unidades credenciadas em todo o país, a EMBRAPII atua em diversas áreas tecnológicas, promovendo a colaboração entre ciência e mercado para transformar ideias em soluções aplicadas.
            </p>
            
            <p className="mb-8 text-center font-semibold text-orange-600">
              Em Uberaba, o Instituto Federal do Triângulo Mineiro (IFTM) sedia a Unidade EMBRAPII Soluções Agroalimentares. A presença dessa unidade fortalece o ecossistema de inovação do ZebuValley, conectando pesquisadores, empreendedores e o setor produtivo para impulsionar o desenvolvimento sustentável da região.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-orange-100 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Cog className="h-10 w-10 text-orange-600" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-900">Modelo Ágil</h4>
              <p className="text-gray-600">
                Processo flexível e de baixa burocracia para desenvolvimento de projetos de inovação tecnológica.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-10 w-10 text-orange-600" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-900">Conexão Ciência-Mercado</h4>
              <p className="text-gray-600">
                Conecta instituições de pesquisa com empresas para transformar conhecimento em soluções aplicadas.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Leaf className="h-10 w-10 text-orange-600" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-900">Recursos Não Reembolsáveis</h4>
              <p className="text-gray-600">
                Oferece recursos financeiros não reembolsáveis para impulsionar projetos de inovação industrial.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-12 rounded-2xl border border-green-200 mb-12">
            <div className="text-center">
              <Leaf className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Unidade EMBRAPII Soluções Agroalimentares</h3>
              <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
                Sediada no IFTM, essa unidade atua no desenvolvimento de produtos e processos para a produção vegetal e tecnologias para o processamento agroindustrial, oferecendo suporte técnico e científico para empresas do setor agroalimentar.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                <div className="flex items-center text-gray-700">
                  <Phone className="h-5 w-5 mr-2 text-green-600" />
                  <span>Fernanda: (34) 3319-6064</span>
                </div>
              </div>
              
              <a 
                href="https://embrapii.org.br/unidades/soluces-agroalimentares-if-tm/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors"
              >
                <ExternalLink className="h-5 w-5 mr-2" />
                Conheça a Unidade Embrapii
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

export default Embrapii;
