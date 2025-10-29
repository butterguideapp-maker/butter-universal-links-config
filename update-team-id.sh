#!/bin/bash

# Script pour remplacer TEAM_ID dans les fichiers apple-app-site-association

if [ -z "$1" ]; then
    echo "❌ Usage: ./update-team-id.sh YOUR_TEAM_ID"
    echo ""
    echo "Exemple: ./update-team-id.sh ABC123DEFG"
    exit 1
fi

TEAM_ID=$1

echo "🔄 Mise à jour du Team ID: $TEAM_ID"

# Remplacer dans .well-known/apple-app-site-association
if [ -f ".well-known/apple-app-site-association" ]; then
    sed -i.bak "s/TEAM_ID/$TEAM_ID/g" ".well-known/apple-app-site-association"
    echo "✅ Mis à jour: .well-known/apple-app-site-association"
    rm ".well-known/apple-app-site-association.bak"
else
    echo "⚠️  Fichier introuvable: .well-known/apple-app-site-association"
fi

# Remplacer dans public/.well-known/apple-app-site-association
if [ -f "public/.well-known/apple-app-site-association" ]; then
    sed -i.bak "s/TEAM_ID/$TEAM_ID/g" "public/.well-known/apple-app-site-association"
    echo "✅ Mis à jour: public/.well-known/apple-app-site-association"
    rm "public/.well-known/apple-app-site-association.bak"
else
    echo "⚠️  Fichier introuvable: public/.well-known/apple-app-site-association"
fi

echo ""
echo "✅ Terminé ! Tu peux maintenant déployer."
echo ""
echo "📝 Pour vérifier:"
echo "cat .well-known/apple-app-site-association"

