import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4 py-16">

        {/* Header avec logo */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold mb-4 text-gray-900">
            Butter
          </h1>
          <p className="text-xl text-gray-600">
            Découvre les meilleurs restaurants de Paris
          </p>
        </div>

        {/* Hero Section */}
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 mb-12">
          <div className="text-center mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-amber-100 rounded-full flex items-center justify-center">
              <span className="text-6xl">🍽️</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">
              Partage tes découvertes culinaires
            </h2>
            <p className="text-gray-600 text-lg">
              Avec Butter, partage facilement tes restaurants préférés avec tes amis
            </p>
          </div>

          {/* CTA App Store */}
          <a
            href="https://apps.apple.com/fr/app/butter-guide-de-restaurants/id6749227938"
            className="block w-full bg-black text-white text-center py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-colors"
          >
            Télécharger sur l&apos;App Store
          </a>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="font-bold text-lg mb-2">Découvre</h3>
            <p className="text-gray-600">
              Les meilleures adresses sélectionnées pour toi
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="text-5xl mb-4">⭐</div>
            <h3 className="font-bold text-lg mb-2">Enregistre</h3>
            <p className="text-gray-600">
              Crée tes listes de favoris personnalisées
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="text-5xl mb-4">📤</div>
            <h3 className="font-bold text-lg mb-2">Partage</h3>
            <p className="text-gray-600">
              Recommande tes coups de cœur à tes proches
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center mt-16 text-gray-500 text-sm">
          <p>© 2025 Butter - Tous droits réservés</p>
        </footer>
      </div>
    </main>
  );
}
