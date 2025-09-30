import React, { useState } from 'react';
import { ChevronDown, Calendar, FileText, Users, Building, ChevronRight, ExternalLink, Phone, Mail, MapPin, Rocket, InstagramIcon, LinkedinIcon, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Link } from 'react-router-dom';

const Index = () => { 
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const headlines = [
    "Reunimos empresas, universidades, startups, instituições e pessoas que acreditam no poder transformador da inovação",
    "Conectamos quem tem ideias transformadoras a quem faz a inovação acontecer",
    "ZebuValley é a comunidade que conecta pessoas, instituições e iniciativas que impulsionam a inovação em Uberaba"
  ];

  const [currentHeadline, setCurrentHeadline] = useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadline((prev) => (prev + 1) % headlines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const isIOS = React.useMemo(() => {
    if (typeof navigator === 'undefined') return false;
    const userAgent = navigator.userAgent || '';
    const isIpadIphoneIpod = /iPad|iPhone|iPod/.test(userAgent);
    const isTouchMac = navigator.platform === 'MacIntel' && (navigator as any).maxTouchPoints > 1;
    return isIpadIphoneIpod || isTouchMac;
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 bg-white border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" aria-label="Ir para a home" className="cursor-pointer">
              <img
                src="/images/logo_zebuvalley.png"
                style={{ width: '100px', height: 'auto' }}
                alt="ZebuValley"
              />
            </Link>
          </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#quem-somos" className="text-gray-700 hover:text-orange-600 transition-colors">
                Quem somos
              </a>
              
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('oportunidades')}
                  className="flex items-center text-gray-700 hover:text-orange-600 transition-colors"
                >
                  Oportunidades
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === 'oportunidades' && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                    <a href="#eventos" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Eventos</a>
                    <a href="#editais" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Editais Abertos</a>
                    <a href="#vagas" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Vagas</a>
                    <a href="#programas" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Programas de Inovação</a>
                    <a href="#trilha" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Trilha da Inovação</a>
                  </div>
                )}
              </div>

              <div className="relative">
                <button
                  onClick={() => toggleDropdown('ambientes')}
                  className="flex items-center text-gray-700 hover:text-orange-600 transition-colors"
                >
                  Ambientes de Inovação
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === 'ambientes' && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                    <Link to="/pre-incubadoras" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Pré-incubadoras e Incubadoras</Link>
                    <Link to="/nits" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">NITs</Link>
                    <Link to="/parque-labs" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Parque Labs</Link>
                    <Link to="/centro-inovacao" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Centro de Inovação</Link>
                    <Link to="/parque-tecnologico" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Parque Tecnológico</Link>
                    <Link to="/venture-builder" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Corporate Venture Builder</Link>
                    <Link to="/embrapii" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Embrapii</Link>
                  </div>
                )}
              </div>

              <div className="relative">
                <button
                  onClick={() => toggleDropdown('zebuvalley')}
                  className="flex items-center text-gray-700 hover:text-orange-600 transition-colors"
                >
                  ZebuValley
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === 'zebuvalley' && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                    <Link to="/academia" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Academia</Link>
                    <Link to="/sociedade-organizada" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Sociedade Organizada</Link>
                    <Link to="/governo" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Governo</Link>
                    <Link to="/mecanismos-inovacao" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Mecanismos de Inovação</Link>
                  </div>
                )}
              </div>

              <Link to="/inovacao" className="text-gray-700 hover:text-orange-600 transition-colors">
                Inovação
              </Link>
            </div>

            {/* Mobile menu */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" aria-label="Abrir menu">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-72">
                  <nav className="mt-8 space-y-1">
                    <a href="#quem-somos" className="block px-2 py-3 text-gray-800 hover:bg-gray-50 rounded">
                      Quem somos
                    </a>
                    <div className="px-2 pt-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      Oportunidades
                    </div>
                    <a href="#eventos" className="block px-2 py-3 text-gray-800 hover:bg-gray-50 rounded">Eventos</a>
                    <a href="#editais" className="block px-2 py-3 text-gray-800 hover:bg-gray-50 rounded">Editais Abertos</a>
                    <a href="#vagas" className="block px-2 py-3 text-gray-800 hover:bg-gray-50 rounded">Vagas</a>
                    <a href="#programas" className="block px-2 py-3 text-gray-800 hover:bg-gray-50 rounded">Programas de Inovação</a>
                    <a href="#trilha" className="block px-2 py-3 text-gray-800 hover:bg-gray-50 rounded">Trilha da Inovação</a>

                    <div className="px-2 pt-6 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      Ambientes de Inovação
                    </div>
                    <Link to="/pre-incubadoras" className="block px-2 py-3 text-gray-800 hover:bg-gray-50 rounded">Pré-incubadoras e Incubadoras</Link>
                    <Link to="/nits" className="block px-2 py-3 text-gray-800 hover:bg-gray-50 rounded">NITs</Link>
                    <Link to="/parque-labs" className="block px-2 py-3 text-gray-800 hover:bg-gray-50 rounded">Parque Labs</Link>
                    <Link to="/centro-inovacao" className="block px-2 py-3 text-gray-800 hover:bg-gray-50 rounded">Centro de Inovação</Link>
                    <Link to="/parque-tecnologico" className="block px-2 py-3 text-gray-800 hover:bg-gray-50 rounded">Parque Tecnológico</Link>
                    <Link to="/venture-builder" className="block px-2 py-3 text-gray-800 hover:bg-gray-50 rounded">Corporate Venture Builder</Link>
                    <Link to="/embrapii" className="block px-2 py-3 text-gray-800 hover:bg-gray-50 rounded">Embrapii</Link>

                    <div className="px-2 pt-6 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      ZebuValley
                    </div>
                    <Link to="/academia" className="block px-2 py-3 text-gray-800 hover:bg-gray-50 rounded">Academia</Link>
                    <Link to="/sociedade-organizada" className="block px-2 py-3 text-gray-800 hover:bg-gray-50 rounded">Sociedade Organizada</Link>
                    <Link to="/governo" className="block px-2 py-3 text-gray-800 hover:bg-gray-50 rounded">Governo</Link>
                    <Link to="/mecanismos-inovacao" className="block px-2 py-3 text-gray-800 hover:bg-gray-50 rounded">Mecanismos de Inovação</Link>

                    <div className="px-2 pt-6">
                      <Link to="/inovacao" className="block px-2 py-3 text-gray-800 hover:bg-gray-50 rounded">Inovação</Link>
                    </div>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        className="py-20 bg-gradient-to-br from-orange-50 to-white relative"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 237, 213, 0.8), rgba(255, 255, 255, 0.8)), url('/images/zebuvalley_2025.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: isIOS ? 'scroll' : 'fixed'
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 min-h-[120px] flex items-center justify-center">
            {headlines[currentHeadline]}
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Ecossistema de Inovação de Uberaba
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3">
              <a 
                  href="https://www.instagram.com/zebuvalley/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-white-400 hover:text-white transition-colors">
                  Conheça nossa comunidade
                </a>
            </Button>
            <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50 px-8 py-3">
              <a href="https://chat.whatsapp.com/Gx7UloERfHr9Hq0SAlbJY2" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600">
                Participe da Trilha
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Quem Somos */}
      <section 
        id="quem-somos" 
        className="py-20 bg-white relative"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('/images/startup.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: isIOS ? 'scroll' : 'fixed'
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Quem Somos</h2>
          <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed">
            <p className="mb-6">
              Para entender quem somos, é preciso dar um passo atrás e entender o que é um <strong>Ecossistema Local de Inovação</strong>.
            </p>
            <p className="mb-6">
              Esse termo se refere a territórios onde pessoas, instituições, empresas e iniciativas se conectam com o objetivo comum de tornar o local mais atrativo e competitivo por meio da inovação. Isso acontece através de eventos, programas, investimentos, produção de conhecimento, apoio a startups, entre outras ações.
            </p>
            <p className="mb-6">
              Foi com essa visão que nasceu o <strong>ZebuValley</strong>, uma comunidade formada por pessoas e instituições de Uberaba que acreditam no poder da colaboração para impulsionar a inovação local. Nosso papel é apoiar a orquestração das ações do Ecossistema de Inovação de Uberaba, conectando quem já está inovando com quem quer começar.
            </p>
            <p className="mb-6">
              <strong>Participam ativamente da comunidade:</strong> empresas, entidades públicas e privadas, instituições de ensino, empreendedores e profissionais que acreditam que a inovação pode transformar Uberaba, gerando impacto econômico, social e cultural.
            </p>
          </div>
        </div>
      </section>

      {/* Oportunidades */}
      <section 
        className="py-20 bg-gray-50 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(249, 250, 251, 0.9), rgba(249, 250, 251, 0.9)), url('/images/innovation3.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: isIOS ? 'scroll' : 'fixed'
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Oportunidades</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Eventos */}
            <div id="eventos" className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 md:col-span-2 lg:col-span-3">
              <Calendar className="h-8 w-8 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Eventos</h3>
              <p className="text-gray-600 mb-4">
                Acompanhe nossa agenda de eventos e atividades do ecossistema.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <p className="text-sm text-gray-600 mb-3">
                  Confira abaixo nossa agenda completa de eventos:
                </p>
                <div className="w-full h-96 border border-gray-200 rounded-lg overflow-hidden">
                    <iframe
                      src="https://calendar.google.com/calendar/embed?src=falecomzebuvalley%40gmail.com&ctz=America%2FSao_Paulo"
                      style={{ border: 0, width: '100%', height: '100%' }}
                      frameBorder="0"
                      scrolling="no"
                      title="Agenda ZebuValley"
                    />
                </div>
              </div>
            </div>

            {/* Editais */}
            <div id="editais" className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <FileText className="h-8 w-8 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Editais Abertos</h3>
              <p className="text-gray-600 mb-4">
                Aqui você encontra editais de fomento à inovação que estão com inscrições abertas, sejam eles regionais, estaduais ou nacionais. Cada edital vem com seu respectivo link para facilitar o acesso.
              </p>
              <div className="space-y-3">
                <p className="text-sm text-gray-600">
                  Quer acompanhar essas oportunidades com mais facilidade?
                </p>
                <a 
                  href="https://chat.whatsapp.com/JANLpYsnU47LjXZDu2LEEW" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-green-600 hover:text-green-700 text-sm"
                >
                  Entre no nosso WhatsApp
                  <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Vagas */}
            <div id="vagas" className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <Users className="h-8 w-8 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Vagas</h3>
              <p className="text-gray-600">
                Aqui você encontra vagas em atores que estão conectados ao nosso ecossistema. 
              </p>
            </div>

            {/* Trilha */}
            <div id="trilha" className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <Rocket className="h-8 w-8 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Trilha da Inovação</h3>
              <p className="text-gray-600 mb-4">
                Apoio e acompanhamento de projetos de inovação em todas as etapas.
              </p>
              <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3">
                <a href="https://chat.whatsapp.com/Gx7UloERfHr9Hq0SAlbJY2" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600">
                Saiba mais
                </a>
              </Button>
            </div>

            {/* Programas */}
            <div id="programas" className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 md:col-span-3">
              <Building className="h-8 w-8 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Programas de Inovação</h3>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Tem uma ideia inovadora, um projeto de pesquisa, uma startup ou quer tirar algo do papel com o apoio de quem entende do assunto?
                </p>
                <p className="text-gray-600">
                  Aqui você encontra os programas de pré-incubação, incubação, aceleração e outros modelos de apoio promovidos pelo ZebuValley e seus parceiros.
                </p>
                <p className="text-gray-600">
                  Se você ainda não tem uma ideia pronta, mas curte desafios, quer aprender mais sobre o mercado ou testar suas habilidades, também divulgamos bootcamps, hackathons, desafios de inovação e outras experiências práticas.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Ambientes de Inovação - Incubadoras */}
      <section 
        id="pre-incubadoras" 
        className="py-20 bg-white relative"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('/images/comunidade3.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Incubadoras e Pré-Incubação</h2>
          <div className="prose prose-lg mx-auto text-gray-700 mb-12">
            <p className="mb-6">
              As incubadoras são ambientes de apoio à inovação que ajudam ideias e negócios a ganharem forma, estrutura e força para crescer.
            </p>
            <p className="mb-6">
              A <strong>pré-incubação</strong> é indicada para quem está nas etapas iniciais de desenvolvimento de uma ideia inovadora. Ela oferece suporte para validar o problema, a solução e o modelo de negócio, além de mentorias, conexões e capacitações.
            </p>
            <p className="mb-8">
              Já a <strong>incubadora</strong> apoia empreendedores que já têm um negócio em estágio inicial, com algum nível de validação ou operação. Nela, as startups recebem apoio técnico, gerencial e estratégico para crescer de forma estruturada.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Unitecne</h3>
              <div className="space-y-2 text-gray-700">
                <p className="flex items-center">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  <a href="https://unitecne.uniube.br/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600">
                    unitecne.uniube.br
                  </a>
                </p>
                <p className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  (34) 9841-6142 - Brenda
                </p>
                <p className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  unitecne@uniube.br
                </p>
              </div>
            </div>
            
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Impulso</h3>
              <div className="space-y-2 text-gray-700">
                <p className="flex items-center">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  <a href="https://www.uftm.edu.br/proppg/pesquisa/nuemp/impulso" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600">
                    UFTM - Impulso
                  </a>
                </p>
                <p className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  (34) 3331-3036 - Estefânia
                </p>
                <p className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  empreendedorismo.proppg@uftm.edu.br
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NITs */}
      <section 
        id="nits" 
        className="py-20 bg-gray-50 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(249, 250, 251, 0.9), rgba(249, 250, 251, 0.9)), url('https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: isIOS ? 'scroll' : 'fixed'
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">NITs</h2>
          <div className="prose prose-lg mx-auto text-gray-700 mb-12">
            <p className="mb-6">
              Os Núcleos de Inovação Tecnológica (NITs) são estruturas vinculadas a universidades e institutos de pesquisa que têm a função de gerir a política de inovação dessas instituições.
            </p>
            <p className="mb-8">
              Eles cuidam do registro de patentes, licenciamento de tecnologias, formalização de parcerias com empresas e apoio à criação de startups nascidas dentro das instituições — as spin-offs acadêmicas.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3">NIT Uniube</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  (34) 8719-9352 - Denise
                </p>
                <a href="https://uniube.br/academico/empreendedorismo/nucleo-de-inovacao-tecnologica" target="_blank" rel="noopener noreferrer" className="flex items-center text-orange-600 hover:text-orange-700">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Site oficial
                </a>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3">NUPIT UFTM</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  (34) 3331-3024 - Demian
                </p>
                <a href="https://www.uftm.edu.br/proppg/pesquisa/nit" target="_blank" rel="noopener noreferrer" className="flex items-center text-orange-600 hover:text-orange-700">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Site oficial
                </a>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3">NIT IFTM</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  (34) 8429-8785 - Wanessa
                </p>
                <p className="text-xs text-gray-500">(Site em manutenção)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trilha da Inovação */}
      <section 
        className="py-20 bg-orange-600 text-white relative"
        style={{
          backgroundImage: `linear-gradient(rgba(234, 88, 12, 0.8), rgba(234, 88, 12, 0.8)), url('/images/inovation1.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: isIOS ? 'scroll' : 'fixed'
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-8">Trilha da Inovação ZebuValley</h2>
          <div className="prose prose-lg mx-auto text-left text-orange-100 mb-12">
            <p className="mb-6">
                A Trilha da Inovação é a estrutura que organiza e conecta os atores do Ecossistema de Inovação de Uberaba. Ela funciona como um verdadeiro caminho de apoio para empreendedores e inovadores que desejam transformar ideias em negócios de impacto no nosso território.
            </p>
            <p>
                Nessa jornada, cada etapa da trilha conta com instituições, programas e iniciativas que seguram na mão do empreendedor, oferecendo suporte desde os primeiros passos até o momento em que uma startup conquista tração e escala.
            </p>
            <br/>
            <p>
                O que antecede o ponto de partida da trilha reúne os atores promotores de inovação: universidades, ambientes de inovação, empresas, sociedade civil organizada, entidades de classe e diversos outros agentes.
            </p>
            <br/>
            <p>
                São eles que alimentam a cultura empreendedora em Uberaba por meio de palestras, meetups, cursos, workshops e eventos, despertando talentos e inspirando novas ideias.
            </p>
            <div className="grid md:grid-cols-3 gap-8 my-12">
              <div className="text-center">
                <div className="bg-orange-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Idea Mentoria</h3>
              </div>
              
              <div className="text-center">
                <div className="bg-orange-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">MVP Mentoria</h3>
              </div>
              
              <div className="text-center">
                <div className="bg-orange-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Rocket Mentoria</h3>
              </div>
            </div>
          </div>
          
          <div className="bg-white text-gray-900 p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">As Startups que fazem parte da trilha são reconhecidas como startups do ZebuValley.</h3>
            <h3 className="text-lg font-semibold mb-2">Programas que apoiam a Trilha</h3>
            <p className="text-gray-600 text-left mb-6">
              Para tornar a jornada empreendedora mais consistente e estruturada, o ZebuValley conta com programas interinstitucionais estratégicos, que se conectam diretamente à Trilha da Inovação:
            </p>
            <p className="text-gray-600 text-justify mb-6">
              <b>Desperta!</b> - Programa voltado para quem deseja despertar seu espírito empreendedor. Nele, os participantes aprendem a explorar seu perfil, identificar oportunidades e estruturar ideias iniciais que podem se transformar em startups de sucesso.
            </p>
            <p className="text-gray-600 text-justify mb-6">
              <b>ZebuValley Startups</b> - Programa direcionado a empreendedores que já possuem uma ideia de negócio e querem validá-la no mercado. Ele reúne diferentes instituições e mentores do ecossistema ZebuValley para apoiar o desenvolvimento, a validação e os primeiros passos de cada projeto.
            </p>
            <p className="text-gray-600 text-justify mb-6">
            Assim, a <b>Trilha da Inovação do ZebuValley</b> não é apenas um modelo: é um caminho vivo, construído coletivamente, que garante que ninguém precise empreender sozinho.
            </p>
            <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3">
              <a href="https://chat.whatsapp.com/Gx7UloERfHr9Hq0SAlbJY2" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600">
              Participar do Desperta! 
              </a>
            </Button>
            <br/><br/>
            <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3">
              <a href="https://chat.whatsapp.com/Gx7UloERfHr9Hq0SAlbJY2" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600">
              ZebuValley Startups 
              </a>
            </Button>
            <br/><br/>
            <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3">
              <a href="https://chat.whatsapp.com/Gx7UloERfHr9Hq0SAlbJY2" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600">
              Fazer parte da trilha 
              </a>
            </Button>
            <br/><br/>
            <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3">
              <a href="https://chat.whatsapp.com/KCXEU70AV4YALHhl3a5vXf" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600">
              Grupo do ZebuValley 
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ZebuValley</h3>
              <p className="text-gray-400 mb-4">
                Ecossistema de Inovação de Uberaba conectando pessoas, instituições e iniciativas para impulsionar a inovação local.
              </p>
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin className="h-4 w-4" />
                <span>Uberaba, Minas Gerais</span>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
              <div className="space-y-2">
                <a href="#quem-somos" className="block text-gray-400 hover:text-white transition-colors">Quem somos</a>
                <a href="#trilha" className="block text-gray-400 hover:text-white transition-colors">Trilha da Inovação</a>
                <a href="#eventos" className="block text-gray-400 hover:text-white transition-colors">Eventos</a>
                <a href="#editais" className="block text-gray-400 hover:text-white transition-colors">Editais</a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <div className="space-y-2">
                <a 
                  href="mailto:falecomzebuvalley@gmail.com" 
                  className="flex items-center text-gray-400 hover:text-white transition-colors">
                  <Mail className="h-4 w-4 mr-2" />
                  falecomzebuvalley@gmail.com
                </a>
                <a 
                  href="https://chat.whatsapp.com/KCXEU70AV4YALHhl3a5vXf?mode=ems_wa_t" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-white transition-colors">
                  <Phone className="h-4 w-4 mr-2" />
                  Grupo WhatsApp
                </a>

                <a 
                  href="https://www.instagram.com/zebuvalley/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-white transition-colors">
                  <InstagramIcon className="h-4 w-4 mr-2" />
                  Instagram
                </a>
                <a 
                  href="https://www.linkedin.com/company/zebuvalley/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-white transition-colors">
                  <LinkedinIcon className="h-4 w-4 mr-2" />
                  Linkedin
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; Feito no ZebuValley, por Pedro Moura. Todos os direitos reservados 2025 © .
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
