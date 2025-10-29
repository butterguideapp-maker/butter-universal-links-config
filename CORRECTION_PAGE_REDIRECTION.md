# 🔧 Correction de la page de redirection - Résumé

## ❌ Problème identifié

**Boucle infinie** causée par les lignes 217 et 250 dans l'ancien code :

```javascript
// Ligne 217
const deepLinkUrl = window.location.href; // L'URL de la page elle-même !

// Ligne 250
window.location.href = deepLinkUrl; // Redirige vers la même page → boucle !
```

## ✅ Solution appliquée

Le fichier `public/restaurant/[id]/index.html` a été corrigé pour utiliser un **vrai lien cliquable** avec l'Universal Link.

### Code correct :

```javascript
// Récupérer l'ID du restaurant
const pathSegments = window.location.pathname.split('/').filter(Boolean);
const restaurantId = pathSegments[pathSegments.length - 1];

// Construire l'Universal Link complet
const universalLink = `https://butter-universal-links-config.vercel.app/restaurant/${restaurantId}`;

// Mettre le lien dans le bouton
document.getElementById('openLink').href = universalLink;
```

### Bouton HTML :

```html
<a href="#" id="openLink" class="btn btn-primary">
    Ouvrir dans l'app
</a>
```

## 🎯 Comportement attendu

1. L'utilisateur clique sur "Ouvrir dans l'app"
2. iOS/Android intercepte le lien
3. Si app installée → l'app s'ouvre avec le restaurant
4. Si app non installée → reste sur la page avec lien App Store

## 🚀 Déployer la correction

```bash
cd /Users/admin/Documents/redirection
git add public/restaurant/\[id\]/index.html
git commit -m "Fix infinite loop in redirect page"
git push
vercel --prod --yes
```

## 📋 Checklist

- [x] Identifier le problème de boucle
- [x] Corriger le code
- [ ] Déployer sur Vercel
- [ ] Tester sur iPhone réel

