
import React from 'react';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";

const Empresas = () => {
  const empresas = [
    { nome: "AIRED - Inovação em Geotecnologia", url: "#", logo: "/images/logo_zebuvalley.png" },
    { nome: "Oficina5 Soluções Inteligentes e Consultoria", url: "#", logo: "/images/logo_zebuvalley.png" },
    { nome: "Horus 3D (antiga Astroscience 3D)", url: "#", logo: "/images/logo_zebuvalley.png" },
    { nome: "Granto Corretora de Seguros", url: "https://granto.com.br", logo: "/images/logo_zebuvalley.png" },
    { nome: "Grao Direto", url: "#", logo: "/images/logo_zebuvalley.png" },
    { nome: "Agro ESGP", url: "#" , logo: "/images/logo_zebuvalley.png"},
    { nome: "Escola de Limpeza Cursos e Treinamentos", url: "#", logo: "/images/logo_zebuvalley.png" },
    { nome: "TSul - Triangulo Sul Sistemas", url: "#", logo: "/images/logo_zebuvalley.png" },
    { nome: "Nerd Stickers", url: "#", logo: "/images/logo_zebuvalley.png" },
    { nome: "Animalcell Inovação e Pesquisa", url: "#", logo: "/images/logo_zebuvalley.png" },
    { nome: "EasyJur Tecnologia e Sistema", url: "#", logo: "/images/logo_zebuvalley.png" },
    { nome: "Shennong Brasil - China", url: "#", logo: "/images/logo_zebuvalley.png" },
    { nome: "Biota Innovation", url: "#", logo: "/images/logo_zebuvalley.png"},
    { nome: "OnePlay Digital", url: "#", logo: "/images/logo_zebuvalley.png" },
    { nome: "LDC Soluções", url: "#", logo: "/images/logo_zebuvalley.png" },
    { nome: "TagFY", url: "#", logo: "/images/logo_zebuvalley.png" },
    { nome: "Vimac", url: "#", logo: "/images/logo_zebuvalley.png" },
    { nome: "Criativa", url: "#", logo: "/images/logo_zebuvalley.png" },
    { nome: "Vitales", url: "#", logo: "/images/logo_zebuvalley.png" },
    { nome: "Sults", url: "#", logo: "/images/logo_zebuvalley.png" },
    { nome: "BevilaSuporte", url: "#", logo: "/images/logo_zebuvalley.png" },
    { nome: "Allas", url: "#", logo: "/images/logo_zebuvalley.png" },
    { nome: "Triângulo Ventures", url: "https://www.trianguloventures.com.br/", logo: "/images/logo_zebuvalley.png" },
    { nome: "Garcia & Schneider Advocacia", url: "#", logo: "/images/logo_zebuvalley.png" },
    { nome: "Di-Tano Advocacia", url: "#", logo: "/images/logo_zebuvalley.png" },
    { nome: "Empreendedorismo Guru", url: "#", logo: "/images/logo_zebuvalley.png" },
    { nome: "Cecontein", url: "#", logo: "/images/logo_zebuvalley.png" },
    { nome: "Uai Summit", url: "#", logo: "/images/logo_zebuvalley.png" },
    { nome: "Manejo Remoto", url: "#", logo: "/images/logo_zebuvalley.png" },
    { nome: "Metanet", url: "#", logo: "/images/logo_zebuvalley.png" },
    { nome: "BlueFocus", url: "#", logo: "/images/logo_zebuvalley.png" },
    { nome: "D.Moura", url: "#", logo: "/images/logo_zebuvalley.png" }
  ];

  // Divide empresas em grupos de 4 para o carrossel
  const empresasGroups = [];
  for (let i = 0; i < empresas.length; i += 4) {
    empresasGroups.push(empresas.slice(i, i + 4));
  }

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <div 
      className="min-h-screen bg-gray-50 relative"
      style={{
        backgroundImage: `linear-gradient(rgba(249, 250, 251, 0.9), rgba(249, 250, 251, 0.9)), url('/images/empresas.jpg')`,
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
          <h1 className="text-3xl font-bold text-gray-900">Empresas</h1>
          <p className="text-gray-600 mt-2">Conheça as empresas que fazem parte do ecossistema ZebuValley</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Carrossel de Logos */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Nossos Parceiros</h2>
          <Carousel 
            className="max-w-4xl mx-auto" 
            opts={{ align: "start", loop: true }}
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {empresasGroups.map((group, index) => (
                <CarouselItem key={index}>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {group.map((empresa, idx) => (
                      <div key={idx} className="bg-white rounded-full w-24 h-24 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow mx-auto">
                        {/* Imagem da logo */}
                        {empresa.logo && (
                          <img
                            src={empresa.logo}
                            alt={`Logo da ${empresa.nome}`}
                            className="h-10 object-contain mb-1"
                          />
                        )}
                        
                        
                      </div>
                    ))}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Lista de Empresas */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-900">Empresas Parceiras</h2>
            <p className="text-gray-600 mt-2">
              Essas empresas fazem parte ativa do nosso ecossistema de inovação, contribuindo para o desenvolvimento econômico e tecnológico de Uberaba.
            </p>
          </div>
          
          <div className="p-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {empresas.map((empresa, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded-lg hover:border-orange-300 transition-colors">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-gray-900 text-sm">{empresa.nome}</h3>
                    {empresa.url !== "#" && (
                      <a 
                        href={empresa.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-orange-600 hover:text-orange-700 ml-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center bg-white p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Sua empresa faz parte do ZebuValley?</h2>
          <p className="text-gray-600 mb-6">
            Se sua empresa está localizada em Uberaba e atua com inovação, tecnologia ou empreendedorismo, venha fazer parte da nossa comunidade.
          </p>
          <Button className="bg-orange-600 hover:bg-orange-700 text-white">
            Entre em contato
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Empresas;
