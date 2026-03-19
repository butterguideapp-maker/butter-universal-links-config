import { Metadata } from 'next';
import Image from 'next/image';
import RedirectClient from './redirect-client';

type Props = {
  params: Promise<{ code: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { code } = await params;

  return {
    title: 'Butter - Rejoins le swipe',
    description: 'Ton pote t\'invite à choisir un resto ensemble sur Butter',

    openGraph: {
      title: 'Butter - Rejoins le swipe',
      description: 'Ton pote t\'invite à choisir un resto ensemble sur Butter',
      url: `https://butterguide.fr/swipe/${code}`,
      siteName: 'Butter',
      type: 'website',
    },

    twitter: {
      card: 'summary',
      title: 'Butter - Rejoins le swipe',
      description: 'Ton pote t\'invite à choisir un resto ensemble sur Butter',
    },

    other: {
      'apple-itunes-app': 'app-id=6749227938',
    },
  };
}

export default async function SwipePage({ params }: Props) {
  await params;

  return (
    <>
      <RedirectClient />
      <main className="min-h-screen bg-[#F1EFEB]">
        <div className="min-h-screen flex flex-col px-5 py-8 max-w-[430px] mx-auto">

          <div className="text-center pt-4 pb-6">
            <Image
              src="/logo.png"
              alt="Butter"
              width={100}
              height={35}
              className="mx-auto"
            />
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 flex-1 flex flex-col">
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
              Rejoins le swipe
            </h1>

            <p className="text-[#353535] text-center text-sm mb-6">
              Un ami t&apos;invite à choisir un restaurant ensemble. Ouvre l&apos;app pour participer !
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 p-3 bg-[#F1EFEB] rounded-xl">
                <div className="w-10 h-10 bg-[#D4F2DA] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-[#60BC81] text-lg">1</span>
                </div>
                <div>
                  <p className="font-medium text-[#111111] text-sm">Swipez les restaurants</p>
                  <p className="text-xs text-[#8D836F]">Like ou passe, chacun de votre côté</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-[#F1EFEB] rounded-xl">
                <div className="w-10 h-10 bg-[#D4F2DA] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-[#60BC81] text-lg">2</span>
                </div>
                <div>
                  <p className="font-medium text-[#111111] text-sm">Découvrez vos matchs</p>
                  <p className="text-xs text-[#8D836F]">Les restos que vous avez likés tous les deux</p>
                </div>
              </div>
            </div>

            <div className="flex-1" />

            <a
              href="https://apps.apple.com/fr/app/butter-guide-de-restaurants/id6749227938"
              className="block w-full bg-[#111111] text-white text-center py-3.5 rounded-xl font-semibold text-sm hover:bg-[#353535] transition-colors"
            >
              Ouvrir dans Butter
            </a>
          </div>

          <footer className="text-center pt-6 pb-2 text-[#8D836F] text-xs">
            <p>&copy; 2025 Butter</p>
          </footer>
        </div>
      </main>
    </>
  );
}
