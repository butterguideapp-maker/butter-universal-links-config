# 🌐 Configuration du domaine butter.paris sur Vercel

## ⚠️ Important

Ton projet est déjà déployé sur Vercel, mais il est accessible uniquement sur :
`https://butter-universal-links-config.vercel.app/`

**Problème** : Apple ne lira le fichier `apple-app-site-association` QUE si il est accessible sur ton domaine `butter.paris`.

## ✅ Solution : Configurer le domaine custom

### Étape 1 : Configurer dans Vercel

1. Va sur https://vercel.com/dashboard
2. Sélectionne ton projet `butter-universal-links-config`
3. Va dans **Settings** → **Domains**
4. Clique sur **Add Domain**
5. Entre : `butter.paris`
6. Vercel te donnera une configuration DNS à faire chez ton registrar

### Étape 2 : Configurer le DNS

Vercel va te demander d'ajouter un enregistrement DNS chez ton registrar (là où tu as acheté le domaine).

**Option A : Configuration CNAME (recommandé pour sous-domaine)**
```
Type: CNAME
Name: @ (ou le sous-domaine que tu veux)
Value: cname.vercel-dns.com
```

**Option B : Configuration A Record (pour domaine root)**
```
Type: A
Name: @
Value: 76.76.21.21
```

### Étape 3 : Vérifier

Une fois la configuration DNS propagée (peut prendre jusqu'à 24h, généralement quelques minutes) :

```bash
curl https://butter.paris/.well-known/apple-app-site-association
```

Tu devrais voir le même JSON que sur `butter-universal-links-config.vercel.app`

## 🔍 Vérification du DNS

Pour vérifier si le DNS est bien configuré :

```bash
# Vérifier le CNAME
dig butter.paris CNAME

# Ou vérifier l'IP
dig butter.paris A
```

## ⏱️ Propagation DNS

- Minimum : 5 minutes
- Généralement : 15-30 minutes  
- Maximum : 24 heures

## 📝 État actuel

✅ Fichier déployé sur Vercel  
⏳ Attente de la configuration du domaine butter.paris  

Une fois le domaine configuré, teste avec :
```
https://butter.paris/.well-known/apple-app-site-association
```

## 🚨 Rappel important

N'oublie pas de remplacer `TEAM_ID` dans les fichiers avant de pusher en production :

```bash
./update-team-id.sh TON_TEAM_ID
```

Ensuite :
```bash
git add .
git commit -m "Update: Add Team ID for butter.paris"
git push
```

