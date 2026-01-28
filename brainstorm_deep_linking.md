# 🧠 Brainstorm : Deep Linking pour Butter

## 🎯 Objectif Final
Permettre aux utilisateurs de partager des restaurants via des liens qui :
- Ouvrent l'app directement si installée
- Redirigent vers l'App Store avec une belle page si pas installée
- Fonctionnent sur tous les canaux (WhatsApp, iMessage, Instagram, etc.)

---

## 🏗️ Architecture Technique Choisie

### Solution retenue : Universal Links + Custom URL Scheme
**Pourquoi ?**
- ✅ 100% gratuit (pas de service tiers)
- ✅ Contrôle total de l'expérience
- ✅ Pas de vendor lock-in
- ✅ Performance maximale (pas de redirect via service tiers)
- ✅ On possède le domaine butterguide.com

**Rejetées :**
- ❌ Branch.io : Trop cher après 10K clics/mois
- ❌ Firebase Dynamic Links : Deprecated, arrêt en septembre 2025
- ❌ Custom Scheme uniquement : Pas de fallback propre vers App Store

---

## 🔗 Comment ça marche ?

### 1. Universal Links (iOS 9+)
**Principe :**
```
User clique sur : https://butterguide.com/restaurant/abc123
              ↓
iOS check : "Est-ce que l'app Butter gère butterguide.com ?"
              ↓
    ┌─────────┴─────────┐
    │                   │
  OUI                  NON
    │                   │
    ↓                   ↓
Ouvre l'app       Ouvre Safari
directement       (page web)
```

**Fichiers nécessaires :**
1. `apple-app-site-association` sur butterguide.com
   - Fichier JSON sans extension
   - Doit être à `https://butterguide.com/.well-known/apple-app-site-association`
   - Contient le Bundle ID de l'app et les paths gérés

2. Associated Domains dans Xcode
   - Configure l'app pour dire "je gère butterguide.com"
   - Apple vérifie automatiquement le fichier ci-dessus

### 2. Custom URL Scheme (fallback)
**Principe :**
```
User clique sur : butterapp://restaurant/abc123
              ↓
iOS check : "Quelle app gère butterapp:// ?"
              ↓
    ┌─────────┴─────────┐
    │                   │
  Butter           Aucune app
installée         installée
    │                   │
    ↓                   ↓
Ouvre l'app       Message d'erreur
                  (pas idéal)
```

**Usage :**
- Fallback si Universal Links échouent
- Liens dans des contextes où Universal Links ne marchent pas
- Développement/debug

---

## 🌐 Architecture Web (Vercel)

### Stack technique
```
butterguide.com (Vercel)
│
├── Next.js 14 (App Router)
│   ├── page.tsx (landing page)
│   └── restaurant/[id]/page.tsx (page dynamique)
│
├── .well-known/
│   └── apple-app-site-association (Universal Links)
│
└── public/
    └── assets (images, etc.)
```

### Parcours utilisateur

#### Scénario 1 : App installée
```
1. User clique sur https://butterguide.com/restaurant/abc123
2. iOS lit apple-app-site-association
3. iOS ouvre Butter directement
4. Deep link handler dans Flutter reçoit "restaurant/abc123"
5. Navigation vers RestaurantDetailPage(id: abc123)
```

#### Scénario 2 : App non installée
```
1. User clique sur https://butterguide.com/restaurant/abc123
2. iOS lit apple-app-site-association
3. App pas installée → Safari ouvre la page
4. Page Next.js détecte le restaurant ID
5. Affiche :
   - Photo du restaurant
   - Nom du restaurant
   - Description
   - Bouton "Télécharger Butter" → App Store
6. User installe l'app
7. Au premier lancement, deep link s'ouvre automatiquement
```

---

## 📱 Architecture Flutter

### Composants nécessaires

#### 1. Deep Link Handler Service
```dart
lib/services/deep_link_service.dart

Responsabilités :
- Écouter les Universal Links (via MethodChannel)
- Écouter les Custom URL Schemes
- Parser les URLs (extraire restaurant_id)
- Déclencher la navigation
```

#### 2. Navigation Logic
```dart
Lien reçu : https://butterguide.com/restaurant/abc123
           ↓
Parser URL : { type: "restaurant", id: "abc123" }
           ↓
Navigator.push(RestaurantDetailPage(id: "abc123"))
```

#### 3. Share Function
```dart
Fonction actuelle :
Share.share("Télécharge Butter : https://apps.apple.com...")

Nouvelle fonction :
Share.share("Regarde ce resto : https://butterguide.com/restaurant/abc123")
```

---

## 🔐 Sécurité & Edge Cases

### Apple App Site Association
**Validation :**
- iOS vérifie le fichier au premier lancement de l'app
- Vérifie aussi à chaque mise à jour
- Cache pendant ~24h

**Requirements :**
- ✅ HTTPS obligatoire (Vercel ✓)
- ✅ Certificat SSL valide (Vercel ✓)
- ✅ Content-Type: application/json
- ✅ Pas de redirect (direct 200 OK)

### Edge Cases à gérer

1. **App ouverte, user clique sur un lien**
   - Deep link doit fonctionner même si app déjà ouverte
   - Navigation doit empiler correctement (push, pas replace)

2. **App fermée/tuée, user clique sur un lien**
   - iOS lance l'app avec le deep link en paramètre
   - Doit être géré au démarrage de l'app

3. **Restaurant inexistant**
   - Page web : Afficher "Restaurant non trouvé" + CTA App Store
   - App : Afficher erreur gracieuse + retour accueil

4. **Anciens liens partagés**
   - Si tu changes la structure d'URL plus tard
   - Gérer la rétrocompatibilité

---

## 📊 Analytics & Tracking

### Métriques à tracker

**Côté Web (Vercel) :**
- Nombre de clics sur les liens
- Ratio app installée / non installée
- Taux de conversion vers App Store
- Restaurants les plus partagés

**Côté App (Flutter) :**
- Deep links ouverts avec succès
- Source des deep links (si possible)
- Conversions post-installation

**Implémentation :**
```dart
// Ton AmplitudeTrackingService existant
AmplitudeTrackingService().trackDeepLinkOpened(
  restaurantId: id,
  source: 'universal_link', // ou 'custom_scheme'
);
```

---

## 🚀 Plan de Déploiement

### Phase 1 : Setup Web (30 min)
1. Créer projet Next.js
2. Ajouter apple-app-site-association
3. Créer page dynamique restaurant/[id]
4. Deploy sur Vercel
5. Connecter butterguide.com
6. Tester le fichier apple-app-site-association

### Phase 2 : Setup iOS (20 min)
1. Ajouter Associated Domains dans Xcode
2. Configurer Info.plist
3. Tester Universal Links

### Phase 3 : Setup Flutter (30 min)
1. Créer DeepLinkService
2. Intégrer dans main.dart
3. Gérer navigation vers restaurants
4. Tester deep linking

### Phase 4 : Modifier Partage (10 min)
1. Modifier fonction de partage
2. Générer URLs butterguide.com
3. Tester le flow complet

### Phase 5 : Tests & Validation (20 min)
1. Test app installée
2. Test app non installée
3. Test depuis différentes apps (WhatsApp, etc.)
4. Test edge cases

---

## 🎨 Design de la Landing Page

### Must-have
- Hero avec image du restaurant
- Nom du restaurant en gros
- Adresse
- Badge "Ouvert/Fermé"
- CTA "Télécharger Butter" → App Store
- Meta tags pour preview WhatsApp/iMessage

### Nice-to-have
- Screenshot de l'app
- Carousel de photos du restaurant
- Reviews/notes
- Map intégrée
- Liste d'autres restaurants similaires

---

## 🔄 Maintenance Future

### Si tu veux ajouter d'autres types de liens

**Collections :**
```
https://butterguide.com/collection/abc123
→ app ouvre la collection
```

**Profils utilisateurs :**
```
https://butterguide.com/user/daniel
→ app ouvre le profil
```

**Tags/Catégories :**
```
https://butterguide.com/tag/italien
→ app ouvre la liste des italiens
```

**Implementation :**
Juste ajouter les paths dans :
1. `apple-app-site-association`
2. Deep link handler Flutter
3. Pages Next.js correspondantes

---

## 💰 Coûts

### Setup initial
- Domaine butterguide.com : **Déjà payé ✓**
- Vercel hosting : **Gratuit ✓**
- Certificat SSL : **Gratuit (Vercel) ✓**
- Développement : **Ton temps**

### Coûts récurrents
- **0€ / mois** 🎉
- Vercel gratuit jusqu'à 100GB bandwidth/mois
- Largement suffisant pour deep linking

---

## 🎯 Success Metrics

**Critères de succès :**
- ✅ Universal Links fonctionnent à 100%
- ✅ Fallback App Store propre et rapide
- ✅ Temps de redirection < 1 seconde
- ✅ Preview cards beaux sur WhatsApp/iMessage
- ✅ Analytics qui trackent les partages

**KPIs à suivre (post-launch) :**
- Nombre de liens partagés / jour
- Taux d'ouverture des liens
- Taux d'installation depuis les liens
- Restaurants les plus partagés
- Canaux de partage (WhatsApp vs iMessage vs Instagram)

---

## 🐛 Troubleshooting Prévu

### Universal Links ne marchent pas
**Causes possibles :**
1. Fichier apple-app-site-association mal formaté
2. Associated Domains mal configurés dans Xcode
3. Cache iOS (attendre 24h ou réinstaller app)
4. Certificat SSL invalide (peu probable avec Vercel)

**Debug :**
```bash
# Tester le fichier depuis navigateur
curl https://butterguide.com/.well-known/apple-app-site-association

# Valider le JSON
cat apple-app-site-association | jq .
```

### Deep link ouvre Safari au lieu de l'app
**Causes possibles :**
1. User a "ouvert dans Safari" une fois (iOS retient la préf)
2. Lien vient d'une app non supportée
3. Format d'URL incorrect

**Fix :**
- Long press sur le lien → "Ouvrir dans Butter"
- iOS se rappellera du choix

### Restaurant non trouvé côté app
**Causes possibles :**
1. ID invalide dans l'URL
2. Restaurant supprimé de la DB
3. Problème de parsing de l'URL

**Fix :**
- Validation de l'ID avant navigation
- Page d'erreur gracieuse
- Logging pour debug

---

## 📝 Notes Importantes

### Apple App Site Association
- **Pas d'extension** de fichier (.json interdit)
- **JSON valide** obligatoire
- **HTTPS** obligatoire
- **Disponible** à la racine ou dans .well-known/

### Universal Links vs App Links
- **Universal Links** = iOS
- **App Links** = Android
- Butter est iOS only pour l'instant → Universal Links suffisent

### Performance
- Fichier apple-app-site-association doit répondre en < 100ms
- Page web fallback doit charger en < 1s
- Vercel CDN gère ça automatiquement

---

## 🎬 Next Steps

Après que tout soit en place :

1. **Ajouter partage dans d'autres endroits**
   - Liste de favoris
   - Recommandations
   - Profil utilisateur

2. **Améliorer la landing page**
   - A/B testing CTA
   - Ajouter reviews
   - Optimiser SEO

3. **Créer des liens marketing**
   - QR codes pour les restaurants physiques
   - Liens Instagram Stories
   - Campagnes email

4. **Analytics avancées**
   - Attribution des installations
   - Cohort analysis
   - Retention post deep link

---

**C'est parti ! 🚀**