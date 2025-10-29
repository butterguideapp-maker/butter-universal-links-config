# 🔍 Guide de debug des deep links

## 📱 Comment tester

### Sur iPhone (Safari)
1. Ouvre : `https://butter-universal-links-config.vercel.app/restaurant/test123`
2. Ouvre la console Safari : Settings → Safari → Advanced → Web Inspector
3. Regarde les logs dans la console

### Sur Android (Chrome)
1. Ouvre : `https://butter-universal-links-config.vercel.app/restaurant/test123`
2. Ouvre la console : Menu → More tools → Developer tools
3. Regarde les logs dans la console

## 🐛 Logs de debug

### ✅ Logs attendus si tout fonctionne

```
🚀 [Deep Link] Initialisation de la redirection
📍 [Deep Link] Restaurant ID: test123
📱 [Deep Link] Plateforme détectée: { isIOS: true, isAndroid: false, isDesktop: false }
🎯 [Deep Link] Tentative d'ouverture de l'app: https://butter-universal-links-config.vercel.app/restaurant/test123
✅ [Deep Link] App ouverte détectée via blur
```

### ❌ Logs si l'app ne s'ouvre pas

```
🚀 [Deep Link] Initialisation de la redirection
📍 [Deep Link] Restaurant ID: test123
📱 [Deep Link] Plateforme détectée: { isIOS: true, isAndroid: false, isDesktop: false }
🎯 [Deep Link] Tentative d'ouverture de l'app: https://butter-universal-links-config.vercel.app/restaurant/test123
⏱️ [Deep Link] Timeout après 2500 ms
🔄 [Deep Link] Redirection vers le store
🍎 [Deep Link] Redirection App Store: https://apps.apple.com/...
```

## 🔧 Problèmes courants

### 1. La page boucle sans arrêt

**Cause** : `window.location.href` rechargé à l'infini

**Solution** : Vérifie dans les logs :
- Tu vois plusieurs fois "Initialisation de la redirection" ? → Boucle
- Tu ne vois qu'une seule fois ? → Pas de boucle, normal

### 2. L'app ne s'ouvre jamais

**Vérifie** :
- ✅ Associated Domains configuré dans Xcode ?
- ✅ Entitlement `com.apple.developer.associated-domains` avec `applinks:butter-universal-links-config.vercel.app` ?
- ✅ App buildée et installée après la configuration ?

**Debug** :
```bash
# Sur iPhone, vérifie si Universal Links est reconnu
xcrun simctl openurl booted "https://butter-universal-links-config.vercel.app/restaurant/test123"
```

### 3. Desktop : Tu vois le message d'erreur

**C'est normal !** Le message est affiché pour que les utilisateurs sachent qu'ils doivent ouvrir le lien sur mobile.

## 📊 Checklist de configuration

### iOS
- [ ] Associated Domains ajouté dans Xcode
- [ ] Domaine configuré : `applinks:butter-universal-links-config.vercel.app`
- [ ] `apple-app-site-association` accessible sur le serveur
- [ ] App rebuildée et installée
- [ ] Testé sur un iPhone physique (pas toujours fiable sur simulateur)

### Android
- [ ] `assetlinks.json` configuré avec le bon SHA256
- [ ] `AndroidManifest.xml` avec intent-filter configuré
- [ ] `android:autoVerify="true"` présent

## 🧪 Test rapide

### Sur mobile
1. Ouvre le lien dans Safari (iOS) ou Chrome (Android)
2. Si app installée → doit ouvrir l'app
3. Si app non installée → redirige vers le store après 2.5s

### Sur desktop
1. Ouvre le lien dans n'importe quel navigateur
2. Doit afficher : "Lien mobile uniquement"

## 📝 Exemple de logs complets

### Cas 1 : App installée et ouverte
```
🚀 [Deep Link] Initialisation de la redirection
📍 [Deep Link] Restaurant ID: ABC123
📱 [Deep Link] Plateforme détectée: { isIOS: true, ... }
🎯 [Deep Link] Tentative d'ouverture de l'app
✅ [Deep Link] App ouverte détectée via blur
```

### Cas 2 : App non installée
```
🚀 [Deep Link] Initialisation de la redirection
📍 [Deep Link] Restaurant ID: ABC123
📱 [Deep Link] Plateforme détectée: { isIOS: true, ... }
🎯 [Deep Link] Tentative d'ouverture de l'app
⏱️ [Deep Link] Timeout après 2500 ms
🔄 [Deep Link] Redirection vers le store
🍎 [Deep Link] Redirection App Store
```

### Cas 3 : Desktop
```
🚀 [Deep Link] Initialisation de la redirection
📍 [Deep Link] Restaurant ID: ABC123
📱 [Deep Link] Plateforme détectée: { isDesktop: true, ... }
❌ [Deep Link] Desktop détecté - Arrêt
```

