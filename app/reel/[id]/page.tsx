import { Metadata } from 'next';
import Image from 'next/image';
import RedirectClient from './redirect-client';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;

  return {
    title: 'Butter - Regarde ce reel',
    description: 'Découvre les meilleures adresses en vidéo sur Butter',

    openGraph: {
      title: 'Butter - Regarde ce reel',
      description: 'Découvre les meilleures adresses en vidéo sur Butter',
      url: `https://butterguide.fr/reel/${id}`,
      siteName: 'Butter',
      type: 'video.other',
    },

    twitter: {
      card: 'summary',
      title: 'Butter - Regarde ce reel',
      description: 'Découvre les meilleures adresses en vidéo sur Butter',
    },

    other: {
      'apple-itunes-app': 'app-id=6749227938',
    },
  };
}

export default async function ReelPage({ params }: Props) {
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
              Regarde ce reel
            </h1>

            <p className="text-[#353535] text-center text-sm mb-6">
              Ouvre l&apos;app Butter pour voir cette vidéo et découvrir les meilleures adresses
            </p>

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
