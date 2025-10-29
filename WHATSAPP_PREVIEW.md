# 📱 Comment forcer WhatsApp à mettre à jour l'aperçu de lien

## ⚠️ Le problème

WhatsApp met en cache les aperçus de liens. Si tu vois toujours "redirection..." au lieu de ton titre + logo, c'est que WhatsApp a caché l'ancienne version.

## ✅ Solutions

### Méthode 1 : Ajouter un paramètre à l'URL (Recommandé)

Quand tu partages le lien, ajoute `?v=1` (ou n'importe quel nombre unique) à la fin :

```
https://butter-universal-links-config.vercel.app/restaurant/ABC123?v=1
```

Chaque fois que tu veux forcer le refresh, change le numéro :
- `?v=1`
- `?v=2`
- `?v=3`
- etc.

### Méthode 2 : Forcer le rafraîchissement du cache

1. Partage le lien dans une conversation WhatsApp
2. Long press sur le message
3. Sélectionne "Retirer du message" (pour supprimer l'ancien aperçu)
4. Partage à nouveau le lien

### Méthode 3 : Attendre

WhatsApp met à jour automatiquement le cache après quelques heures (généralement 24h).

## 🧪 Tester l'aperçu

Pour vérifier que tes meta tags sont corrects :

1. Va sur : https://developers.facebook.com/tools/debug/
2. Entre l'URL : `https://butter-universal-links-config.vercel.app/restaurant/test123`
3. Clique sur "Fetch new scrape information"
4. Tu devrais voir :
   - **Title**: Butter - Le guide des meilleurs restaurants de Paris
   - **Image**: Le logo de l'app
   - **Description**: Découvre les meilleurs restaurants de Paris sur Butter 🧈

## 📋 Meta tags configurés

```html
<title>Butter - Le guide des meilleurs restaurants de Paris</title>
<meta property="og:title" content="Butter - Le guide des meilleurs restaurants de Paris" />
<meta property="og:description" content="Découvre les meilleurs restaurants de Paris sur Butter 🧈" />
<meta property="og:image" content="https://butter-universal-links-config.vercel.app/app-icon.png" />
```

## ✅ Une fois que ça marche

Une fois que l'aperçu affiche le bon titre et logo, tu n'as plus besoin d'ajouter de paramètres !

