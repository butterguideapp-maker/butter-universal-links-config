import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
  params: Promise<{ id: string }>;
};

// Test data function - replace with Firebase later
async function getRestaurantData(id: string) {
  return {
    id,
    name: 'Le Comptoir du Relais',
    address: '9 Carrefour de l\'Odéon, 75006 Paris',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
    description: 'Bistrot parisien authentique avec une cuisine de saison et des produits frais.',
    cuisines: ['Français', 'Bistrot'],
    isOpen: true,
  };
}

// Metadata for social previews (WhatsApp, iMessage, etc.)
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const restaurant = await getRestaurantData(id);

  return {
    title: `${restaurant.name} - Butter`,
    description: restaurant.description,

    // OpenGraph for Facebook, WhatsApp, iMessage
    openGraph: {
      title: restaurant.name,
      description: restaurant.description,
      images: [
        {
          url: restaurant.imageUrl,
          width: 1200,
          height: 630,
          alt: restaurant.name,
        }
      ],
      url: `https://butterguide.fr/restaurant/${id}`,
      siteName: 'Butter',
      type: 'website',
    },

    // Twitter Card
    twitter: {
      card: 'summary_large_image',
      title: restaurant.name,
      description: restaurant.description,
      images: [restaurant.imageUrl],
    },

    // Smart App Banner iOS
    other: {
      'apple-itunes-app': 'app-id=6749227938',
    },
  };
}

export default async function RestaurantPage({ params }: Props) {
  const { id } = await params;
  const restaurant = await getRestaurantData(id);

  return (
    <main className="min-h-screen bg-[#F1EFEB]">
      <div className="max-w-[430px] mx-auto bg-white min-h-screen flex flex-col">

        {/* Header with logo */}
        <div className="px-4 py-3 flex items-center justify-between border-b border-[#E5E5E5] sticky top-0 bg-white z-10">
          <Link
            href="/"
            className="flex items-center text-[#111111] hover:text-[#60BC81] transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
          <Image
            src="/logo.png"
            alt="Butter"
            width={70}
            height={24}
          />
          <div className="w-5" /> {/* Spacer for centering */}
        </div>

        {/* Main image */}
        <div className="relative aspect-[4/3] bg-[#C9C1B1]">
          <img
            src={restaurant.imageUrl}
            alt={restaurant.name}
            className="w-full h-full object-cover"
          />

          {/* Open/Closed badge */}
          <div className="absolute top-3 right-3">
            <span
              className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                restaurant.isOpen
                  ? 'bg-[#D4F2DA] text-[#60BC81]'
                  : 'bg-[#F2D7D4] text-[#D3695E]'
              }`}
            >
              {restaurant.isOpen ? 'Ouvert' : 'Fermé'}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex-1 flex flex-col">

          {/* Restaurant name */}
          <h1 className="text-xl font-bold text-[#111111] mb-2" style={{ fontFamily: 'Georgia, serif' }}>
            {restaurant.name}
          </h1>

          {/* Cuisines */}
          {restaurant.cuisines.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-3">
              {restaurant.cuisines.map((cuisine, i) => (
                <span
                  key={i}
                  className="px-2.5 py-0.5 bg-[#F1EFEB] text-[#8D836F] rounded-full text-xs font-medium"
                >
                  {cuisine}
                </span>
              ))}
            </div>
          )}

          {/* Address */}
          <p className="text-[#8D836F] mb-4 flex items-start text-sm">
            <svg className="w-4 h-4 mr-1.5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {restaurant.address}
          </p>

          {/* Description */}
          <p className="text-[#353535] text-sm leading-relaxed mb-6">
            {restaurant.description}
          </p>

          {/* Spacer */}
          <div className="flex-1" />

          {/* CTAs */}
          <div className="space-y-2.5 pt-4">
            {/* Open in Butter button */}
            <a
              href={`butterapp://restaurant/${restaurant.id}`}
              className="block w-full bg-[#111111] text-white text-center py-3.5 rounded-xl font-semibold text-sm hover:bg-[#353535] transition-colors"
            >
              Ouvrir dans Butter
            </a>

            {/* Download button */}
            <a
              href="https://apps.apple.com/fr/app/butter-guide-de-restaurants/id6749227938"
              className="block w-full bg-[#F1EFEB] text-[#111111] text-center py-3.5 rounded-xl font-semibold text-sm hover:bg-[#C9C1B1] transition-colors"
            >
              Télécharger Butter
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center py-4 border-t border-[#E5E5E5]">
          <p className="text-[#8D836F] text-xs">
            Découvre plus de restos sur <span className="font-semibold text-[#111111]">Butter</span>
          </p>
        </div>
      </div>
    </main>
  );
}
