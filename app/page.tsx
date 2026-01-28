import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F1EFEB]">
      <div className="min-h-screen flex flex-col px-5 py-8 max-w-[430px] mx-auto">

        {/* Logo */}
        <div className="text-center pt-4 pb-6">
          <Image
            src="/logo.png"
            alt="Butter"
            width={100}
            height={35}
            className="mx-auto"
          />
        </div>

        {/* Hero Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex-1 flex flex-col">

          {/* App Icon */}
          <div className="flex justify-center mb-5">
            <Image
              src="/app-icon.png"
              alt="Butter App"
              width={100}
              height={100}
              className="rounded-[22px] shadow-md"
            />
          </div>

          <h1 className="text-xl font-bold text-[#111111] text-center mb-1.5" style={{ fontFamily: 'Georgia, serif' }}>
            Ton guide resto parisien
          </h1>

          <p className="text-[#353535] text-center text-sm mb-6">
            Découvre, enregistre et partage tes meilleures adresses
          </p>

          {/* Features */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3 p-3 bg-[#F1EFEB] rounded-xl">
              <div className="w-10 h-10 bg-[#D4F2DA] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-[#60BC81] text-base">&#10003;</span>
              </div>
              <div>
                <p className="font-medium text-[#111111] text-sm">Sélection triée sur le volet</p>
                <p className="text-xs text-[#8D836F]">Les meilleures adresses de Paris</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-[#F1EFEB] rounded-xl">
              <div className="w-10 h-10 bg-[#F1EFEB] border border-[#C9C1B1] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-[#8D836F] text-base">&#9733;</span>
              </div>
              <div>
                <p className="font-medium text-[#111111] text-sm">Crée tes listes</p>
                <p className="text-xs text-[#8D836F]">Enregistre tes favoris</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-[#F1EFEB] rounded-xl">
              <div className="w-10 h-10 bg-[#F1EFEB] border border-[#C9C1B1] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-[#8D836F] text-base">&#8599;</span>
              </div>
              <div>
                <p className="font-medium text-[#111111] text-sm">Partage facilement</p>
                <p className="text-xs text-[#8D836F]">Envoie tes recos à tes amis</p>
              </div>
            </div>
          </div>

          {/* Spacer */}
          <div className="flex-1" />

          {/* CTA App Store */}
          <a
            href="https://apps.apple.com/fr/app/butter-guide-de-restaurants/id6749227938"
            className="block w-full bg-[#111111] text-white text-center py-3.5 rounded-xl font-semibold text-sm hover:bg-[#353535] transition-colors"
          >
            Télécharger sur l&apos;App Store
          </a>
        </div>

        {/* Footer */}
        <footer className="text-center pt-6 pb-2 text-[#8D836F] text-xs">
          <p>&copy; 2025 Butter</p>
        </footer>
      </div>
    </main>
  );
}
