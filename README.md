# 🔗 butter-universal-links-config

Configuration des **Universal Links** pour l'application iOS butter.paris. Ce repository héberge le fichier `apple-app-site-association` requis par Apple pour autoriser l'ouverture des liens profonds (`deep links`) depuis le domaine butter.paris vers l'application mobile.

## 🎯 Description

Ce projet minimaliste permet d'héberger le fichier de configuration des Universal Links sur le domaine butter.paris. Il peut être déployé sur **Vercel** (recommandé) ou tout autre serveur web pour rendre accessible le fichier `.well-known/apple-app-site-association` requis par Apple.

**Principe** : Quand un utilisateur clique sur un lien comme `https://butter.paris/restaurant/123` dans Safari, iOS vérifie ce fichier pour savoir si l'application butter doit l'ouvrir automatiquement.

## 🚨 Modification requise

**IMPORTANT** : Avant de déployer, tu dois remplacer `TEAM_ID` dans le fichier `apple-app-site-association` par ton vrai Team ID Apple.

### Comment trouver ton Team ID :
1. Va sur https://developer.apple.com/account
2. Clique sur **Membership**
3. Copie ton **Team ID** (format : `XXXXX12345`)

### Où modifier :
- Remplace `TEAM_ID` dans `.well-known/apple-app-site-association`
- Remplace `TEAM_ID` dans `public/.well-known/apple-app-site-association`

## 📋 Vérification du Bundle ID

Assure-toi que le Bundle ID est correct :
- **Bundle ID actuel** : `com.tasenviedequoi.butter`
- **Vérifier dans Xcode** : Runner → General → "Bundle Identifier"

## 🚀 Option 1 : Déploiement sur Vercel (recommandé)

### Étape 1 : Créer un compte Vercel
Si tu n'as pas encore de compte : https://vercel.com

### Étape 2 : Préparer le dossier
Le dossier `public/` est déjà configuré avec la bonne structure.

### Étape 3 : Déployer
```bash
# Installer Vercel CLI
npm i -g vercel

# Depuis ce dossier
vercel

# Suivre les instructions
# Une fois déployé, aller dans Settings → Domains
```

### Étape 4 : Configurer le domaine butter.paris
1. Dans Vercel, aller dans **Settings** → **Domains**
2. Ajouter `butter.paris`
3. Vercel te donnera les instructions DNS à configurer chez ton registrar

### Étape 5 : Vérifier
Une fois déployé, vérifie que ça fonctionne :
```
https://butter.paris/.well-known/apple-app-site-association
```

Si tu vois le JSON brut → ✅ **Apple pourra le lire !**

## 🔧 Option 2 : Héberger sur un serveur existant

Si tu as déjà un site sur butter.paris :

### Pour Nginx :
```bash
# Copier le dossier .well-known à la racine
scp -r .well-known/ user@server:/var/www/html/
```

### Pour un CMS (WordPress, etc.) :
1. Place le dossier `.well-known` à la racine du domaine
2. Assure-toi que le serveur web le sert correctement (sans extension `.json`)

## ✅ Tests après déploiement

### Test 1 : Vérifier l'URL
```
curl https://butter.paris/.well-known/apple-app-site-association
```
Tu devrais voir le JSON brut (sans balises HTML).

### Test 2 : Vérifier le Content-Type
```
curl -I https://butter.paris/.well-known/apple-app-site-association
```
Le header `Content-Type` doit être `application/json` ou `application/pkcs7-mime`.

### Test 3 : Tester dans l'app iOS
1. Dans l'app Settings → Developer Options (si activé)
2. Ou simplement tester avec un lien : `https://butter.paris/restaurant/123`

## 📝 Notes importantes

⚠️ **Le fichier NE DOIT PAS avoir d'extension `.json`**

⚠️ **Le fichier doit être accessible en HTTP/HTTPS** (pas en file://)

⚠️ **Apple praticle le cache** : parfois il faut attendre quelques heures avant qu'Apple indexe le fichier

## 🐛 Dépannage

### Problème : "The file could not be read"
- Vérifie que l'URL retourne du JSON brut (pas HTML)
- Vérifie que le Content-Type est correct
- Assure-toi qu'il n'y a pas de redirection (HTTP 301/302)

### Problème : "Invalid data"
- Vérifie que le JSON est valide (utilise un validateur JSON)
- Vérifie que le Team ID et Bundle ID sont corrects
- Vérifie l'écriture exacte du chemin : `/restaurant/*`

### Problème : L'app n'ouvre toujours pas les liens
- Attends quelques heures (Apple cache)
- Réinstalle l'app sur l'iPhone
- Active "Associated Domains" dans Xcode → Capabilities
- Teste avec un vrai lien : ouvrir `https://butter.paris/restaurant/123` dans Safari

## 📚 Ressources

- [Apple App Site Association](https://developer.apple.com/documentation/xcode/supporting-universal-links-in-your-app)
- [Validation Tool](https://search.developer.apple.com/appsearch-validation-tool/)

