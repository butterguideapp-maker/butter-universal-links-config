import { Metadata } from 'next';
import Link from 'next/link';

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
      url: `https://butterguide.com/restaurant/${id}`,
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
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto bg-white min-h-screen">

        {/* Header with back button */}
        <div className="p-4 border-b">
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Retour
          </Link>
        </div>

        {/* Main image */}
        <div className="relative h-64 md:h-96 bg-gray-200">
          <img
            src={restaurant.imageUrl}
            alt={restaurant.name}
            className="w-full h-full object-cover"
          />

          {/* Open/Closed badge */}
          <div className="absolute top-4 right-4">
            <span
              className={`px-4 py-2 rounded-full text-white font-semibold shadow-lg ${
                restaurant.isOpen
                  ? 'bg-green-500'
                  : 'bg-red-500'
              }`}
            >
              {restaurant.isOpen ? 'Ouvert' : 'Fermé'}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">

          {/* Restaurant name */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            {restaurant.name}
          </h1>

          {/* Cuisines */}
          {restaurant.cuisines.length > 0 && (
            <div className="flex gap-2 mb-4">
              {restaurant.cuisines.map((cuisine, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium"
                >
                  {cuisine}
                </span>
              ))}
            </div>
          )}

          {/* Address */}
          <p className="text-gray-600 mb-6 flex items-start">
            <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {restaurant.address}
          </p>

          {/* Description */}
          <p className="text-gray-700 text-lg mb-8 leading-relaxed">
            {restaurant.description}
          </p>

          {/* CTAs */}
          <div className="space-y-3">
            {/* Open in Butter button */}
            <a
              href={`butterapp://restaurant/${restaurant.id}`}
              className="block w-full bg-black text-white text-center py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-colors shadow-md"
            >
              Ouvrir dans Butter
            </a>

            {/* Download button */}
            <a
              href="https://apps.apple.com/fr/app/butter-guide-de-restaurants/id6749227938"
              className="block w-full bg-white border-2 border-black text-black text-center py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-colors"
            >
              Télécharger Butter
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center p-8 border-t mt-8">
          <p className="text-gray-500 text-sm">
            Découvre plus de restaurants sur <span className="font-semibold">Butter</span>
          </p>
        </div>
      </div>
    </main>
  );
}
