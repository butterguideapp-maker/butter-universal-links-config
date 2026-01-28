import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F1EFEB]">
      <div className="container mx-auto px-4 py-12 max-w-md">

        {/* Logo */}
        <div className="text-center mb-8">
          <Image
            src="/logo.png"
            alt="Butter"
            width={120}
            height={40}
            className="mx-auto"
          />
        </div>

        {/* Hero Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">

          {/* App Icon */}
          <div className="flex justify-center mb-6">
            <Image
              src="/app-icon.png"
              alt="Butter App"
              width={120}
              height={120}
              className="rounded-[26px] shadow-md"
            />
          </div>

          <h1 className="text-2xl font-bold text-[#111111] text-center mb-2" style={{ fontFamily: 'Georgia, serif' }}>
            Ton guide resto parisien
          </h1>

          <p className="text-[#353535] text-center mb-8">
            Découvre, enregistre et partage tes meilleures adresses
          </p>

          {/* CTA App Store */}
          <a
            href="https://apps.apple.com/fr/app/butter-guide-de-restaurants/id6749227938"
            className="block w-full bg-[#111111] text-white text-center py-4 rounded-xl font-semibold hover:bg-[#353535] transition-colors"
          >
            Télécharger sur l&apos;App Store
          </a>
        </div>

        {/* Features */}
        <div className="space-y-3">
          <div className="bg-white rounded-xl p-4 flex items-center gap-4 shadow-sm">
            <div className="w-12 h-12 bg-[#D4F2DA] rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-[#60BC81] text-xl">&#10003;</span>
            </div>
            <div>
              <h3 className="font-semibold text-[#111111]">Sélection triée sur le volet</h3>
              <p className="text-sm text-[#8D836F]">Les meilleures adresses de Paris</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 flex items-center gap-4 shadow-sm">
            <div className="w-12 h-12 bg-[#F1EFEB] rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-[#8D836F] text-xl">&#9733;</span>
            </div>
            <div>
              <h3 className="font-semibold text-[#111111]">Crée tes listes</h3>
              <p className="text-sm text-[#8D836F]">Enregistre tes favoris et à tester</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 flex items-center gap-4 shadow-sm">
            <div className="w-12 h-12 bg-[#F1EFEB] rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-[#8D836F] text-xl">&#8599;</span>
            </div>
            <div>
              <h3 className="font-semibold text-[#111111]">Partage facilement</h3>
              <p className="text-sm text-[#8D836F]">Envoie tes recos à tes amis</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center mt-12 text-[#8D836F] text-sm">
          <p>&copy; 2025 Butter</p>
        </footer>
      </div>
    </main>
  );
}
