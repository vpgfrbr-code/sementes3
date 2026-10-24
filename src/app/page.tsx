import Link from 'next/link';

export default function Home() {
  const strains = [
    {
      name: 'Maracurujá',
      lineage: 'Seleção Exótica Tropical',
      description: 'Perfil terpênico marcante com notas frutadas intensas e estrutura vigorosa.',
      badge: 'Destaque'
    },
    {
      name: 'Forbidden Orange',
      lineage: 'Complexo Cítrico & Doce',
      description: 'Aromas cítricos profundos combinados com um phenotype de colecionador.',
      badge: 'Exclusivo'
    },
    {
      name: 'Cosmic Cherry',
      lineage: 'Doce & Encorpado',
      description: 'Notas de cereja silvestre com excelente estabilidade genética.',
      badge: 'Premium'
    },
    {
      name: 'Tropical Spritzer',
      lineage: 'Frutado & Refrescante',
      description: 'Equilíbrio perfeito de terpenos exóticos tropicais.',
      badge: 'Colecionável'
    },
    {
      name: 'Kaxeta Beat',
      lineage: '(Superboof x Tropicanna Cherry) x Superboof',
      description: 'Nossa linhagem de assinatura inspirada na cultura e força das ruas.',
      badge: 'Assinatura'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5]">
      {/* HEADER / NAVEGAÇÃO */}
      <header className="sticky top-0 z-50 bg-[#FBF9F5]/90 backdrop-blur-md border-b border-[#C5A880]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#C5A880] bg-white flex items-center justify-center">
              <img 
                src="/logo-coruja.jpg" 
                alt="Coruja Genetics & Seeds Logo" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <span className="font-bold text-lg tracking-wide text-[#1B3022]">
              Sementes de Coleção
            </span>
          </div>
          <nav className="hidden md:flex space-x-8 text-sm font-medium text-[#2C4A35]">
            <Link href="#catalogo" className="hover:text-[#C5A880] transition-colors">Catálogo</Link>
            <Link href="#sobre" className="hover:text-[#C5A880] transition-colors">A Genética</Link>
            <Link href="#contato" className="hover:text-[#C5A880] transition-colors">Contato</Link>
          </nav>
          <div>
            <Link 
              href="#catalogo" 
              className="bg-[#2C4A35] text-[#FBF9F5] px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#1B3022] transition-all shadow-sm"
            >
              Ver Coleção
            </Link>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative py-20 lg:py-32 overflow-hidden border-b border-[#C5A880]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <span className="inline-block bg-[#EAF2EC] text-[#2C4A35] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-widest border border-[#2C4A35]/20">
                Coruja Genetics & Seeds
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1B3022] tracking-tight leading-tight">
                Genética, Ciência <br />
                <span className="text-[#2C4A35]">e Preservação Botânica.</span>
              </h1>
              <p className="text-lg text-[#2C4A35]/80 max-w-2xl mx-auto lg:mx-0">
                Desenvolvimento boutique de cepas de alta performance para colecionadores exigentes. Explore linhagens únicas com pureza e estabilidade garantidas.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
                <Link 
                  href="#catalogo" 
                  className="bg-[#2C4A35] text-white font-medium px-8 py-3.5 rounded-full shadow-md hover:bg-[#1B3022] transition text-center"
                >
                  Explorar Cepas
                </Link>
                <Link 
                  href="#sobre" 
                  className="border border-[#2C4A35]/30 text-[#2C4A35] font-medium px-8 py-3.5 rounded-full hover:bg-[#EAF2EC] transition text-center"
                >
                  Nossa História
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full p-4 bg-gradient-to-b from-[#C5A880]/20 to-[#2C4A35]/10 border border-[#C5A880]/40 shadow-2xl flex items-center justify-center">
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-inner border-2 border-[#C5A880]">
                  <img 
                    src="/logo-coruja.jpg" 
                    alt="Selo Coruja Genetics" 
                    className="absolute inset-0 w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VITRINE / CATÁLOGO DE ESTIRPES */}
      <section id="catalogo" className="py-20 bg-[#EAF2EC]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1B3022]">Cepas em Destaque</h2>
            <p className="text-[#2C4A35]/80 text-base sm:text-lg">
              Conheça as principais criações da nossa curadoria genética, desenvolvidas com rigor técnico e paixão pelo colecionismo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {strains.map((strain, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-6 border border-[#C5A880]/30 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-semibold uppercase tracking-wider bg-[#EAF2EC] text-[#2C4A35] px-3 py-1 rounded-full border border-[#2C4A35]/10">
                      {strain.badge}
                    </span>
                    <span className="text-xs text-[#C5A880] font-bold">Vault Edition</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#1B3022] mb-1">{strain.name}</h3>
                  <p className="text-xs text-[#C5A880] font-semibold mb-3">{strain.lineage}</p>
                  <p className="text-sm text-[#2C4A35]/80 mb-6">{strain.description}</p>
                </div>
                <button className="w-full bg-[#FBF9F5] border border-[#2C4A35]/30 text-[#2C4A35] font-medium py-2.5 rounded-xl hover:bg-[#2C4A35] hover:text-white transition-colors text-sm">
                  Ver Ficha Técnica
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1B3022] text-[#FBF9F5] py-12 border-t border-[#C5A880]/30 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#C5A880] bg-white flex items-center justify-center">
              <img src="/logo-coruja.jpg" alt="Logo" className="w-full h-full object-cover rounded-full" />
            </div>
            <span className="font-semibold text-sm tracking-wider">Sementes de Coleção | Coruja Genetics & Seeds</span>
          </div>
          <p className="text-xs text-[#C5A880]/80 text-center md:text-right">
            © {new Date().getFullYear()} Todos os direitos reservados. Sementes comercializadas estritamente para fins de colecionismo e preservação genética.
          </p>
        </div>
      </footer>
    </div>
  );
}