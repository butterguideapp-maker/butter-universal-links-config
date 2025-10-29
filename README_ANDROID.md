# 🔧 Configuration Android - App Links

## 📝 Fichier créé

Le fichier `.well-known/assetlinks.json` a été créé mais nécessite votre fingerprint SHA256.

## 🔑 Obtenir votre SHA256 fingerprint

### Pour le keystore de debug :
```bash
keytool -list -v -keystore ~/.android/debug.keystore -alias androiddebugkey -storepass android -keypass android
```

### Pour le keystore de production :
```bash
keytool -list -v -keystore /path/to/your/keystore.jks -alias your_alias
```

Dans la sortie, cherchez la ligne :
```
SHA256: AB:CD:EF:12:34:56:78:90...
```

## ✏️ Mettre à jour le fichier

Remplacez `SHA256_FINGERPRINT_HERE` dans `public/.well-known/assetlinks.json` par votre fingerprint.

Exemple :
```json
{
  "sha256_cert_fingerprints": [
    "AB:CD:EF:12:34:56:78:90:AB:CD:EF:12:34:56:78:90:AB:CD:EF:12:34:56:78:90:AB:CD:EF:12:34:56:78:90"
  ]
}
```

## 📱 Configuration dans AndroidManifest.xml

Assurez-vous que dans `android/app/src/main/AndroidManifest.xml`, vous avez :

```xml
<activity
    android:name=".MainActivity"
    android:exported="true"
    ...>
    
    <!-- Existing intent filters -->
    
    <!-- App Links / Deep Links -->
    <intent-filter android:autoVerify="true">
        <action android:name="android.intent.action.VIEW" />
        <category android:name="android.intent.category.DEFAULT" />
        <category android:name="android.intent.category.BROWSABLE" />
        <data 
            android:scheme="https"
            android:host="butter-universal-links-config.vercel.app"
            android:pathPrefix="/restaurant" />
    </intent-filter>
</activity>
```

## ✅ Vérification

Une fois déployé :
```bash
curl https://butter-universal-links-config.vercel.app/.well-known/assetlinks.json
```

Vous devriez voir le JSON avec votre fingerprint.

## 🧪 Tester

```bash
adb shell am start -a android.intent.action.VIEW -d "https://butter-universal-links-config.vercel.app/restaurant/TEST123"
```

L'app devrait s'ouvrir automatiquement !

