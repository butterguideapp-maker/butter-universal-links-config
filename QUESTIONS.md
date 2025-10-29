# 📋 Questions pour configurer la redirection

## 🍎 App iOS

1. **L'application est-elle déjà publiée sur l'App Store ?**
   - ☐ Oui
   - ☐ Non

2. **Si oui, quel est son App Store ID ?**
   - URL de l'App Store : `https://apps.apple.com/app/butter/id??????`
   - L'ID est le nombre après `/id`

3. **Si non, prévois-tu de la publier bientôt ?**
   - Si oui, on peut préparer l'URL maintenant
   - Si non, on peut utiliser une page de téléchargement temporaire

## 🤖 App Android

4. **L'application est-elle déjà publiée sur le Play Store ?**
   - ☐ Oui
   - ☐ Non

5. **Quel est le package name exact de l'app Android ?**
   - Actuellement j'ai : `com.tasenviedequoi.butter`
   - C'est bien ça ?

## 🔗 Comportement souhaité

6. **Quand quelqu'un clique sur le lien, que veux-tu qu'il se passe ?**
   
   **Option A : Redirection automatique**
   - Si app installée → ouvre l'app
   - Si app non installée → redirige vers App Store/Play Store
   
   **Option B : Page intermédiaire**
   - Affiche une page avec message "Ouvre dans l'app"
   - Bouton pour ouvrir / télécharger
   
   **Option C : Redirection simple**
   - Redirige juste vers l'URL du deep link
   - Universal Links gère automatiquement (ouvre l'app ou reste sur web)

7. **Que veut-tu afficher si l'app n'est pas installée ?**
   - Directement vers App Store ?
   - Une page de landing temporaire ?
   - Juste une erreur 404 ?

## 🎯 Réponse rapide

Donne-moi juste :
- App Store ID (si publié) : `____________`
- Package Android : `____________` (confirme si c'est `com.tasenviedequoi.butter`)
- App déjà publiée ? ☐ iOS ☐ Android

Et je te crée une redirection propre ! 🚀


