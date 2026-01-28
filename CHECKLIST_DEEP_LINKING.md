# ✅ Checklist : Deep Linking Web (Next.js) pour Butter

## 📋 Vue d'ensemble

**Objectif :** Créer le site web butterguide.fr pour supporter les Universal Links

**Temps total estimé :** ~1h30

**Stack :**
- Next.js 15 + TypeScript + Tailwind
- Vercel (hosting gratuit)
- Firebase (données restaurants)
- Domaine : butterguide.fr

---

## 🚀 PARTIE 1 : SETUP PROJET (30 min)

### Étape 1.1 : Créer le projet Next.js
- [x] Ouvrir le terminal dans un nouveau dossier
- [x] Run `npx create-next-app@latest butterguide-landing`
- [x] Choisir les options :
  - [x] TypeScript : **Yes**
  - [x] ESLint : **Yes**
  - [x] Tailwind CSS : **Yes**
  - [x] App Router : **Yes**
  - [x] Turbopack : **Yes**
  - [x] Import alias : **No**
- [x] `cd butterguide-landing`

### Étape 1.2 : Créer le fichier apple-app-site-association
- [x] Run `mkdir -p public/.well-known`
- [x] Créer `public/.well-known/apple-app-site-association` (SANS extension .json)
- [x] Récupérer ton Apple Team ID sur https://developer.apple.com/account
- [x] Récupérer ton Bundle ID depuis Xcode (Runner > General)
- [x] Remplir le fichier JSON avec tes valeurs
  - Team ID : `5QD7Q63KZT`
  - Bundle ID : `com.daniel.butter`
  - AppID : `5QD7Q63KZT.com.daniel.butter`
- [x] Valider le JSON avec `cat public/.well-known/apple-app-site-association | jq .`

### Étape 1.3 : Configurer Next.js
- [x] Créer/modifier `next.config.js` à la racine
- [x] Ajouter la config `headers()` pour Content-Type application/json
- [x] Ajouter la config `images.remotePatterns` pour Unsplash
- [x] Sauvegarder

### Étape 1.4 : Créer la page d'accueil
- [x] Modifier `app/page.tsx`
- [x] Copier le code de la landing page (Hero + Features)
- [x] Ajouter le branding Butter (couleurs, logo, app icon)
- [x] Vérifier que ça compile sans erreur
- [x] Sauvegarder

### Étape 1.5 : Créer la page restaurant dynamique
- [x] Run `mkdir -p app/restaurant/[id]`
- [x] Créer `app/restaurant/[id]/page.tsx`
- [x] Copier le code avec les données de test (version sans Firebase)
- [x] Ajouter les meta tags OpenGraph pour preview social
- [x] Vérifier les imports TypeScript
- [x] Sauvegarder

### Étape 1.6 : Tester en local
- [x] Run `npm run dev`
- [x] Ouvrir http://localhost:3000
- [x] Vérifier que la page d'accueil s'affiche ✓
- [x] Tester http://localhost:3000/.well-known/apple-app-site-association
- [x] Vérifier que le JSON s'affiche ✓
- [x] Tester http://localhost:3000/restaurant/test123
- [x] Vérifier que la page restaurant s'affiche ✓
- [x] Ouvrir DevTools > Network > Vérifier Content-Type: application/json ✓

**✅ CHECKPOINT 1 : Le site fonctionne en local**

---

## 📦 PARTIE 2 : DÉPLOIEMENT VERCEL (30 min)

### Étape 2.1 : Créer le repo GitHub
- [x] Run `git init` à la racine du projet
- [x] Run `git add .`
- [x] Run `git commit -m "Initial commit - Butter landing page"`
- [x] Aller sur https://github.com
- [x] Créer un nouveau repo `butter-universal-links-config`
- [x] Copier l'URL du repo
- [x] Run `git remote add origin https://github.com/butterguideapp-maker/butter-universal-links-config.git`
- [x] Run `git branch -M main`
- [x] Run `git push -u origin main`
- [x] Vérifier que le code est bien sur GitHub ✓

### Étape 2.2 : Créer un compte Vercel
- [x] Aller sur https://vercel.com
- [x] Cliquer "Sign Up"
- [x] Se connecter avec GitHub (recommandé)
- [x] Autoriser Vercel à accéder à tes repos

### Étape 2.3 : Importer le projet
- [x] Dans le dashboard Vercel, "Add New" > "Project"
- [x] Trouver le repo `butter-universal-links-config`
- [x] Cliquer "Import"
- [ ] **IMPORTANT** : Vérifier que Framework Preset = **Next.js** ✓
- [x] Cliquer "Deploy"
- [x] Attendre ~2 minutes que le build se termine

### Étape 2.4 : Tester l'URL Vercel
- [x] Copier l'URL Vercel (ex: butter-universal-links-config-xxx.vercel.app)
- [ ] Ouvrir https://[ton-url].vercel.app
- [ ] Vérifier que la landing page s'affiche ✓
- [x] Tester https://[ton-url].vercel.app/.well-known/apple-app-site-association
- [x] Vérifier que le JSON s'affiche ✓
- [ ] Tester https://[ton-url].vercel.app/restaurant/test123
- [ ] Vérifier que la page restaurant s'affiche ✓

**⏳ CHECKPOINT 2 : En attente - vérifier Framework Preset = Next.js dans Vercel**

---

## 🌐 PARTIE 3 : DOMAINE BUTTERGUIDE.FR (20 min)

### Étape 3.1 : Ajouter le domaine dans Vercel
- [ ] Dans ton projet Vercel, aller dans Settings > Domains
- [ ] Cliquer "Add Domain"
- [ ] Entrer `butterguide.fr`
- [ ] Cliquer "Add"
- [ ] Noter les instructions DNS affichées

### Étape 3.2 : Configurer le DNS
- [ ] Se connecter chez ton registrar de domaine (OVH, Gandi, etc.)
- [ ] Aller dans la gestion DNS de butterguide.fr
- [ ] Ajouter un enregistrement A :
  - [ ] Type : **A**
  - [ ] Name : **@** (ou vide)
  - [ ] Value : **76.76.21.21**
  - [ ] TTL : **Auto** ou 3600
- [ ] Ajouter un enregistrement CNAME :
  - [ ] Type : **CNAME**
  - [ ] Name : **www**
  - [ ] Value : **cname.vercel-dns.com**
  - [ ] TTL : **Auto** ou 3600
- [ ] Sauvegarder les modifications DNS

### Étape 3.3 : Attendre la propagation DNS
- [ ] Attendre 5-30 minutes (parfois jusqu'à 24h)
- [ ] Vérifier sur https://dnschecker.org/ (entrer butterguide.fr)
- [ ] Attendre que les checkmarks soient verts dans plusieurs régions

### Étape 3.4 : Vérifier dans Vercel
- [ ] Retourner dans Vercel > Settings > Domains
- [ ] Vérifier qu'il y a un ✅ vert à côté de butterguide.fr
- [ ] Si erreur, attendre encore un peu ou vérifier les enregistrements DNS

### Étape 3.5 : Tester HTTPS
- [ ] Ouvrir https://butterguide.fr
- [ ] Vérifier que la landing page s'affiche ✓
- [ ] Vérifier le cadenas HTTPS dans le navigateur ✓
- [ ] Tester https://butterguide.fr/.well-known/apple-app-site-association
- [ ] Vérifier que le JSON s'affiche ✓
- [ ] Tester https://butterguide.fr/restaurant/test123
- [ ] Vérifier que la page restaurant s'affiche ✓

**⏳ CHECKPOINT 3 : En attente - butterguide.fr à configurer**

---

## 🔥 PARTIE 4 : FIREBASE (Optionnel - 30 min)

### Étape 4.1 : Installer Firebase Admin
- [ ] Run `npm install firebase-admin`
- [ ] Attendre l'installation

### Étape 4.2 : Créer le service Firebase
- [ ] Créer le dossier `lib/` à la racine
- [ ] Créer `lib/firebase.ts`
- [ ] Copier le code d'initialisation Firebase Admin
- [ ] Sauvegarder

### Étape 4.3 : Récupérer les credentials Firebase
- [ ] Aller sur https://console.firebase.google.com
- [ ] Sélectionner ton projet Butter
- [ ] Project Settings (⚙️) > Service Accounts
- [ ] Cliquer "Generate New Private Key"
- [ ] Télécharger le fichier JSON
- [ ] Ouvrir le fichier JSON téléchargé

### Étape 4.4 : Créer .env.local
- [ ] Créer `.env.local` à la racine du projet
- [ ] Ajouter `FIREBASE_PROJECT_ID=` (copier depuis le JSON)
- [ ] Ajouter `FIREBASE_CLIENT_EMAIL=` (copier depuis le JSON)
- [ ] Ajouter `FIREBASE_PRIVATE_KEY=` (copier depuis le JSON, avec les quotes)
- [ ] Sauvegarder
- [ ] **IMPORTANT :** Vérifier que .env.local est dans .gitignore ✓

### Étape 4.5 : Modifier la page restaurant
- [ ] Remplacer le contenu de `app/restaurant/[id]/page.tsx`
- [ ] Copier le code avec Firebase (version complète)
- [ ] Vérifier les imports
- [ ] Sauvegarder

### Étape 4.6 : Tester en local avec Firebase
- [ ] Run `npm run dev`
- [ ] Tester avec un vrai ID de restaurant depuis ta DB
- [ ] http://localhost:3000/restaurant/[VRAI_ID]
- [ ] Vérifier que les vraies données s'affichent ✓
- [ ] Vérifier que le badge Ouvert/Fermé est correct ✓

### Étape 4.7 : Ajouter les env vars dans Vercel
- [ ] Aller dans Vercel > Project Settings > Environment Variables
- [ ] Ajouter `FIREBASE_PROJECT_ID` (copier depuis .env.local)
- [ ] Ajouter `FIREBASE_CLIENT_EMAIL` (copier depuis .env.local)
- [ ] Ajouter `FIREBASE_PRIVATE_KEY` (copier depuis .env.local)
- [ ] Sauvegarder

### Étape 4.8 : Redéployer
- [ ] Run `git add .`
- [ ] Run `git commit -m "Add Firebase integration"`
- [ ] Run `git push`
- [ ] Attendre que Vercel redéploie automatiquement (~2 min)
- [ ] Tester https://butterguide.fr/restaurant/[VRAI_ID]
- [ ] Vérifier que les vraies données s'affichent ✓

**⏳ CHECKPOINT 4 : En attente - Firebase optionnel**

---

## 🧪 PARTIE 5 : TESTS & VALIDATION (20 min)

### Étape 5.1 : Tests basiques
- [ ] Tester https://butterguide.fr
- [ ] Page d'accueil s'affiche correctement ✓
- [ ] CTA App Store est cliquable ✓
- [ ] Design responsive sur mobile ✓

### Étape 5.2 : Test apple-app-site-association
- [ ] Ouvrir https://butterguide.fr/.well-known/apple-app-site-association
- [ ] Vérifier que le JSON s'affiche ✓
- [ ] Ouvrir DevTools (F12) > Network
- [ ] Recharger la page
- [ ] Cliquer sur apple-app-site-association
- [ ] Vérifier Content-Type: application/json ✓
- [ ] Vérifier Status: 200 ✓

### Étape 5.3 : Test page restaurant
- [ ] Tester avec un vrai ID : https://butterguide.fr/restaurant/[ID]
- [ ] Vérifier que les données s'affichent ✓
- [ ] Vérifier que l'image charge ✓
- [ ] Vérifier le badge Ouvert/Fermé ✓
- [ ] Cliquer "Ouvrir dans Butter" (teste butterapp://)
- [ ] Cliquer "Télécharger Butter" (vérifie que ça va vers App Store)

### Étape 5.4 : Test page 404
- [ ] Tester avec un ID invalide : https://butterguide.fr/restaurant/fake123
- [ ] Vérifier que la page 404 s'affiche ✓
- [ ] Vérifier que le bouton "Retour" fonctionne ✓

### Étape 5.5 : Test preview social
- [ ] Envoie-toi un lien restaurant via iMessage
- [ ] Vérifier que la preview s'affiche avec :
  - [ ] Image du restaurant ✓
  - [ ] Nom du restaurant ✓
  - [ ] Description ✓
- [ ] Envoie-toi un lien via WhatsApp
- [ ] Vérifier que la preview s'affiche ✓
- [ ] (Optionnel) Tester sur Instagram DM

### Étape 5.6 : Valider les meta tags
- [ ] Aller sur https://www.opengraph.xyz/
- [ ] Entrer https://butterguide.fr/restaurant/[ID]
- [ ] Vérifier que tous les champs sont remplis :
  - [ ] og:title ✓
  - [ ] og:description ✓
  - [ ] og:image ✓
  - [ ] og:url ✓
  - [ ] twitter:card ✓
- [ ] Vérifier que l'image preview s'affiche correctement ✓

### Étape 5.7 : Test Smart App Banner (iOS Safari)
- [ ] Ouvrir https://butterguide.fr/restaurant/[ID] dans Safari iOS
- [ ] Vérifier qu'un banner apparaît en haut "Ouvrir dans Butter" ✓
- [ ] (Si l'app n'est pas installée, banner "Télécharger")

**⏳ CHECKPOINT 5 : En attente - nécessite domaine fonctionnel**

---

## 📊 PARTIE 6 : MONITORING (10 min)

### Étape 6.1 : Vérifier les logs Vercel
- [ ] Aller dans Vercel > Project > Deployments
- [ ] Cliquer sur le dernier deployment
- [ ] Vérifier qu'il n'y a pas d'erreurs dans les logs ✓
- [ ] Si erreurs, les corriger

### Étape 6.2 : Vérifier les performances
- [ ] Aller dans Vercel > Analytics (si activé)
- [ ] Vérifier les temps de chargement
- [ ] Vérifier qu'il n'y a pas de 404 inattendus

### Étape 6.3 : (Optionnel) Ajouter Google Analytics
- [ ] Créer une propriété Google Analytics
- [ ] Récupérer le Measurement ID (G-XXXXXXXXXX)
- [ ] Ajouter le script dans `app/layout.tsx`
- [ ] Redéployer
- [ ] Vérifier que GA reçoit les événements

**⏳ CHECKPOINT 6 : En attente**

---

## 🎯 VALIDATION FINALE

### Checklist complète
- [x] ✅ Projet Next.js créé et configuré
- [x] ✅ Fichier apple-app-site-association créé et valide
- [x] ✅ next.config.js configuré pour Content-Type
- [x] ✅ Page d'accueil créée avec branding Butter
- [x] ✅ Page restaurant dynamique créée
- [x] ✅ Code versionné sur GitHub
- [x] ✅ Site déployé sur Vercel
- [ ] ⏳ Domaine butterguide.fr connecté
- [ ] ⏳ HTTPS fonctionnel
- [x] ✅ apple-app-site-association accessible en prod
- [ ] ⏳ Firebase connecté (optionnel)
- [ ] ⏳ Vraies données restaurant affichées
- [ ] ⏳ Preview social fonctionne sur WhatsApp/iMessage
- [ ] ⏳ Smart App Banner visible sur iOS Safari
- [ ] ⏳ Page 404 gère les erreurs
- [ ] ⏳ Logs Vercel clean

### Métriques de succès
- [ ] Temps de chargement page d'accueil < 1s
- [ ] Temps de chargement page restaurant < 1.5s
- [x] apple-app-site-association répond en < 100ms
- [ ] Preview images chargent en < 2s
- [ ] 0 erreur dans les logs Vercel

## Problème actuel à résoudre

**Les pages Next.js retournent 404 sur Vercel**

Le fichier statique `.well-known/apple-app-site-association` fonctionne, mais les pages dynamiques (`/` et `/restaurant/[id]`) retournent 404.

**Solution probable :**
1. Aller dans Vercel > Settings > General
2. Vérifier que **Framework Preset** = **Next.js**
3. Si ce n'est pas le cas, le changer
4. Redéployer en décochant "Use existing Build Cache"

---

## 📝 NOTES POST-DÉPLOIEMENT

### Ce qui fonctionne maintenant
- ✅ Code Next.js complet et testé localement
- ✅ Fichier Apple configuré pour Universal Links
- ✅ Belles pages avec branding Butter
- ✅ Fichier apple-app-site-association accessible en prod

### Ce qui manque (partie mobile)
- ⏳ Configuration iOS (Associated Domains)
- ⏳ DeepLinkService Flutter
- ⏳ Modification du bouton partage dans l'app
- ⏳ Tests Universal Links end-to-end

### Prochaines étapes
1. **Résoudre le 404 sur Vercel** (Framework Preset)
2. **Configurer le domaine butterguide.fr**
3. **Passer à la partie mobile** (guide séparé)
4. **Tester le flow complet** avec app + web

---

## 🐛 TROUBLESHOOTING RAPIDE

### Si les pages retournent 404 mais apple-app-site-association marche
→ Le Framework Preset dans Vercel n'est pas configuré sur Next.js
→ Aller dans Settings > General > Framework Preset > choisir "Next.js"
→ Redéployer sans cache

### Si apple-app-site-association retourne 404
→ Vérifie que le fichier est dans `public/.well-known/` (pas de typo)
→ Redémarre le serveur local
→ Redéploie sur Vercel

### Si Content-Type n'est pas application/json
→ Vérifie next.config.js
→ Redémarre le serveur
→ Redéploie

### Si Firebase ne se connecte pas
→ Vérifie .env.local
→ Vérifie les variables dans Vercel
→ Check les logs Vercel pour l'erreur exacte

### Si preview social ne marche pas
→ Valide sur https://www.opengraph.xyz/
→ Vérifie que l'image est accessible en HTTPS
→ Force le refresh du cache (ré-envoie le lien après 5 min)

---

**Temps total : ~1h30**

**Let's ship this! 🚀**
