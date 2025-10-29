# 📱 Configurer l'App Store ID

## ⚠️ Important

Tu dois remplacer `idYOUR_APP_ID` dans le fichier `public/restaurant/[id]/index.html` par ton vrai App Store ID.

## 🔍 Comment trouver ton App Store ID

### Option 1 : Via App Store Connect
1. Va sur https://appstoreconnect.apple.com
2. Sélectionne ton app "Butter"
3. L'App ID est dans l'URL : `https://appstoreconnect.apple.com/apps/1234567890`
   - Le nombre `1234567890` est ton App ID

### Option 2 : Via l'App Store
1. Cherche ton app "Butter" sur l'App Store
2. Clique sur "Partager"
3. Copie le lien
4. L'URL ressemble à : `https://apps.apple.com/app/butter/id1234567890`
   - Le nombre après `id` est ton App ID

### Option 3 : Via iTunes/Music (macOS)
1. Ouvre iTunes ou Music
2. Cherche "Butter"
3. Clic droit → Copier le lien
4. Extrais l'ID de l'URL

## ✏️ Mettre à jour le fichier

Remplace dans `public/restaurant/[id]/index.html` :

```javascript
const iosAppStoreUrl = 'https://apps.apple.com/app/butter/idYOUR_APP_ID';
```

Par :

```javascript
const iosAppStoreUrl = 'https://apps.apple.com/app/butter/id1234567890'; // Ton vrai ID
```

## 🚀 Déployer

```bash
git add public/restaurant/[id]/index.html
git commit -m "Add App Store ID"
git push
vercel --prod --yes
```

## ✅ Tester

Une fois déployé, teste depuis un iPhone :
1. Va sur : `https://butter-universal-links-config.vercel.app/restaurant/test123`
2. Si l'app est installée → elle s'ouvre automatiquement
3. Si l'app n'est pas installée → tu es redirigé vers l'App Store

