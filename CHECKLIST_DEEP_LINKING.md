# ✅ Checklist : Deep Linking Web (Next.js) pour Butter

## 📋 Vue d'ensemble

**Objectif :** Créer le site web butterguide.com pour supporter les Universal Links

**Temps total estimé :** ~1h30

**Stack :**
- Next.js 14 + TypeScript + Tailwind
- Vercel (hosting gratuit)
- Firebase (données restaurants)
- Domaine : butterguide.com

---

## 🚀 PARTIE 1 : SETUP PROJET (30 min)

### Étape 1.1 : Créer le projet Next.js
- [ ] Ouvrir le terminal dans un nouveau dossier
- [ ] Run `npx create-next-app@latest butterguide-landing`
- [ ] Choisir les options :
  - [ ] TypeScript : **Yes**
  - [ ] ESLint : **Yes**
  - [ ] Tailwind CSS : **Yes**
  - [ ] App Router : **Yes**
  - [ ] Turbopack : **Yes**
  - [ ] Import alias : **No**
- [ ] `cd butterguide-landing`

### Étape 1.2 : Créer le fichier apple-app-site-association
- [ ] Run `mkdir -p public/.well-known`
- [ ] Créer `public/.well-known/apple-app-site-association` (SANS extension .json)
- [ ] Récupérer ton Apple Team ID sur https://developer.apple.com/account
- [ ] Récupérer ton Bundle ID depuis Xcode (Runner > General)
- [ ] Remplir le fichier JSON avec tes valeurs
- [ ] Valider le JSON avec `cat public/.well-known/apple-app-site-association | jq .`

### Étape 1.3 : Configurer Next.js
- [ ] Créer/modifier `next.config.js` à la racine
- [ ] Ajouter la config `headers()` pour Content-Type application/json
- [ ] Sauvegarder

### Étape 1.4 : Créer la page d'accueil
- [ ] Modifier `app/page.tsx`
- [ ] Copier le code de la landing page (Hero + Features)
- [ ] Vérifier que ça compile sans erreur
- [ ] Sauvegarder

### Étape 1.5 : Créer la page restaurant dynamique
- [ ] Run `mkdir -p app/restaurant/[id]`
- [ ] Créer `app/restaurant/[id]/page.tsx`
- [ ] Copier le code avec les données de test (version sans Firebase)
- [ ] Vérifier les imports TypeScript
- [ ] Sauvegarder

### Étape 1.6 : Tester en local
- [ ] Run `npm run dev`
- [ ] Ouvrir http://localhost:3000
- [ ] Vérifier que la page d'accueil s'affiche ✓
- [ ] Tester http://localhost:3000/.well-known/apple-app-site-association
- [ ] Vérifier que le JSON s'affiche ✓
- [ ] Tester http://localhost:3000/restaurant/test123
- [ ] Vérifier que la page restaurant s'affiche ✓
- [ ] Ouvrir DevTools > Network > Vérifier Content-Type: application/json ✓

**✅ CHECKPOINT 1 : Le site fonctionne en local**

---

## 📦 PARTIE 2 : DÉPLOIEMENT VERCEL (30 min)

### Étape 2.1 : Créer le repo GitHub
- [ ] Run `git init` à la racine du projet
- [ ] Run `git add .`
- [ ] Run `git commit -m "Initial commit - Butter landing page"`
- [ ] Aller sur https://github.com
- [ ] Créer un nouveau repo `butterguide-landing`
- [ ] Copier l'URL du repo
- [ ] Run `git remote add origin https://github.com/TON_USERNAME/butterguide-landing.git`
- [ ] Run `git branch -M main`
- [ ] Run `git push -u origin main`
- [ ] Vérifier que le code est bien sur GitHub ✓

### Étape 2.2 : Créer un compte Vercel
- [ ] Aller sur https://vercel.com
- [ ] Cliquer "Sign Up"
- [ ] Se connecter avec GitHub (recommandé)
- [ ] Autoriser Vercel à accéder à tes repos

### Étape 2.3 : Importer le projet
- [ ] Dans le dashboard Vercel, "Add New" > "Project"
- [ ] Trouver le repo `butterguide-landing`
- [ ] Cliquer "Import"
- [ ] Vérifier que Framework Preset = Next.js ✓
- [ ] Cliquer "Deploy"
- [ ] Attendre ~2 minutes que le build se termine

### Étape 2.4 : Tester l'URL Vercel
- [ ] Copier l'URL Vercel (ex: butterguide-landing-abc123.vercel.app)
- [ ] Ouvrir https://[ton-url].vercel.app
- [ ] Vérifier que la landing page s'affiche ✓
- [ ] Tester https://[ton-url].vercel.app/.well-known/apple-app-site-association
- [ ] Vérifier que le JSON s'affiche ✓
- [ ] Tester https://[ton-url].vercel.app/restaurant/test123
- [ ] Vérifier que la page restaurant s'affiche ✓

**✅ CHECKPOINT 2 : Le site est déployé sur Vercel**

---

## 🌐 PARTIE 3 : DOMAINE BUTTERGUIDE.COM (20 min)

### Étape 3.1 : Ajouter le domaine dans Vercel
- [ ] Dans ton projet Vercel, aller dans Settings > Domains
- [ ] Cliquer "Add Domain"
- [ ] Entrer `butterguide.com`
- [ ] Cliquer "Add"
- [ ] Noter les instructions DNS affichées

### Étape 3.2 : Configurer le DNS
- [ ] Se connecter chez ton registrar de domaine (OVH, Gandi, etc.)
- [ ] Aller dans la gestion DNS de butterguide.com
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
- [ ] Vérifier sur https://dnschecker.org/ (entrer butterguide.com)
- [ ] Attendre que les checkmarks soient verts dans plusieurs régions

### Étape 3.4 : Vérifier dans Vercel
- [ ] Retourner dans Vercel > Settings > Domains
- [ ] Vérifier qu'il y a un ✅ vert à côté de butterguide.com
- [ ] Si erreur, attendre encore un peu ou vérifier les enregistrements DNS

### Étape 3.5 : Tester HTTPS
- [ ] Ouvrir https://butterguide.com
- [ ] Vérifier que la landing page s'affiche ✓
- [ ] Vérifier le cadenas HTTPS dans le navigateur ✓
- [ ] Tester https://butterguide.com/.well-known/apple-app-site-association
- [ ] Vérifier que le JSON s'affiche ✓
- [ ] Tester https://butterguide.com/restaurant/test123
- [ ] Vérifier que la page restaurant s'affiche ✓

**✅ CHECKPOINT 3 : butterguide.com est en ligne avec HTTPS**

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
- [ ] Tester https://butterguide.com/restaurant/[VRAI_ID]
- [ ] Vérifier que les vraies données s'affichent ✓

**✅ CHECKPOINT 4 : Firebase connecté, vraies données en production**

---

## 🧪 PARTIE 5 : TESTS & VALIDATION (20 min)

### Étape 5.1 : Tests basiques
- [ ] Tester https://butterguide.com
- [ ] Page d'accueil s'affiche correctement ✓
- [ ] CTA App Store est cliquable ✓
- [ ] Design responsive sur mobile ✓

### Étape 5.2 : Test apple-app-site-association
- [ ] Ouvrir https://butterguide.com/.well-known/apple-app-site-association
- [ ] Vérifier que le JSON s'affiche ✓
- [ ] Ouvrir DevTools (F12) > Network
- [ ] Recharger la page
- [ ] Cliquer sur apple-app-site-association
- [ ] Vérifier Content-Type: application/json ✓
- [ ] Vérifier Status: 200 ✓

### Étape 5.3 : Test page restaurant
- [ ] Tester avec un vrai ID : https://butterguide.com/restaurant/[ID]
- [ ] Vérifier que les données s'affichent ✓
- [ ] Vérifier que l'image charge ✓
- [ ] Vérifier le badge Ouvert/Fermé ✓
- [ ] Cliquer "Ouvrir dans Butter" (teste butterapp://)
- [ ] Cliquer "Télécharger Butter" (vérifie que ça va vers App Store)

### Étape 5.4 : Test page 404
- [ ] Tester avec un ID invalide : https://butterguide.com/restaurant/fake123
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
- [ ] Entrer https://butterguide.com/restaurant/[ID]
- [ ] Vérifier que tous les champs sont remplis :
  - [ ] og:title ✓
  - [ ] og:description ✓
  - [ ] og:image ✓
  - [ ] og:url ✓
  - [ ] twitter:card ✓
- [ ] Vérifier que l'image preview s'affiche correctement ✓

### Étape 5.7 : Test Smart App Banner (iOS Safari)
- [ ] Ouvrir https://butterguide.com/restaurant/[ID] dans Safari iOS
- [ ] Vérifier qu'un banner apparaît en haut "Ouvrir dans Butter" ✓
- [ ] (Si l'app n'est pas installée, banner "Télécharger")

**✅ CHECKPOINT 5 : Tous les tests passent**

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

**✅ CHECKPOINT 6 : Site monitored**

---

## 🎯 VALIDATION FINALE

### Checklist complète
- [ ] ✅ Projet Next.js créé et configuré
- [ ] ✅ Fichier apple-app-site-association créé et valide
- [ ] ✅ next.config.js configuré pour Content-Type
- [ ] ✅ Page d'accueil créée et responsive
- [ ] ✅ Page restaurant dynamique créée
- [ ] ✅ Code versionné sur GitHub
- [ ] ✅ Site déployé sur Vercel
- [ ] ✅ Domaine butterguide.com connecté
- [ ] ✅ HTTPS fonctionnel
- [ ] ✅ apple-app-site-association accessible en prod
- [ ] ✅ Firebase connecté (si choisi)
- [ ] ✅ Vraies données restaurant affichées
- [ ] ✅ Preview social fonctionne sur WhatsApp/iMessage
- [ ] ✅ Smart App Banner visible sur iOS Safari
- [ ] ✅ Page 404 gère les erreurs
- [ ] ✅ Logs Vercel clean

### Métriques de succès
- [ ] Temps de chargement page d'accueil < 1s
- [ ] Temps de chargement page restaurant < 1.5s
- [ ] apple-app-site-association répond en < 100ms
- [ ] Preview images chargent en < 2s
- [ ] 0 erreur dans les logs Vercel

## Si tout est ✅ ci-dessus

**🎉 PARTIE WEB TERMINÉE ! 🎉**

---

## 📝 NOTES POST-DÉPLOIEMENT

### Ce qui fonctionne maintenant
- ✅ Site butterguide.com en ligne
- ✅ Fichier Apple configuré pour Universal Links
- ✅ Belles pages restaurant avec preview social
- ✅ Fallback App Store si app pas installée

### Ce qui manque (partie mobile)
- ⏳ Configuration iOS (Associated Domains)
- ⏳ DeepLinkService Flutter
- ⏳ Modification du bouton partage dans l'app
- ⏳ Tests Universal Links end-to-end

### Prochaines étapes
1. **Passer à la partie mobile** (guide séparé)
2. **Tester le flow complet** avec app + web
3. **Améliorer le design** de la landing page
4. **Ajouter analytics** avancées
5. **Optimiser SEO** si nécessaire

---

## 🐛 TROUBLESHOOTING RAPIDE

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