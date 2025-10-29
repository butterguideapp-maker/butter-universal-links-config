export default function handler(req, res) {
  const { id } = req.query;
  
  const html = `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/png" href="/app-icon.png" />
    <title>Butter - Le guide des meilleurs restaurants de Paris</title>
    
    <meta property="og:title" content="Butter - Le guide des meilleurs restaurants de Paris" />
    <meta property="og:description" content="Découvre les meilleurs restaurants de Paris sur Butter 🧈" />
    <meta property="og:image" content="https://butter-universal-links-config.vercel.app/app-icon.png" />
    
    <style>
        body { font-family: system-ui; background: linear-gradient(180deg, #FFFFFF 0%, #F5F5F0 100%); min-height: 100vh; display: flex; justify-content: center; align-items: center; padding: 20px; text-align: center; }
        .container { max-width: 400px; }
        .logo { width: 120px; height: 120px; margin: 0 auto 32px; background: #111; border-radius: 28px; display: flex; align-items: center; justify-content: center; box-shadow: 0 8px 24px rgba(0,0,0,0.12); overflow: hidden; }
        .logo img { width: 80px; height: 80px; }
        h1 { font-size: 28px; font-weight: 700; color: #111; margin-bottom: 12px; }
        .subtitle { font-size: 16px; color: #666; margin-bottom: 40px; }
        .btn { display: inline-block; padding: 18px 32px; background: #111; color: white; text-decoration: none; border-radius: 12px; font-weight: 600; font-size: 16px; }
        .btn:hover { background: #353535; }
        .btn-store { background: white; color: #111; border: 1.5px solid #ddd; margin-top: 16px; }
        .info { margin-top: 40px; padding: 20px; background: rgba(255,255,255,0.5); border-radius: 12px; border: 1px solid #ddd; }
        .info-text { font-size: 14px; color: #666; }
    </style>
</head>
<body>
    <div class="container">
        <div class="logo">
            <img src="/app-icon.png" alt="Butter" />
        </div>
        <h1>Ouvre ce restaurant dans Butter</h1>
        <p class="subtitle">Clique sur le bouton ci-dessous</p>
        
        <div>
            <a href="https://butter-universal-links-config.vercel.app/restaurant/${id}" class="btn">Ouvrir dans l'app</a>
            <br>
            <a href="https://apps.apple.com/fr/app/butter-guide-de-restaurants/id6749227938" class="btn btn-store">Télécharger Butter</a>
        </div>
        
        <div class="info">
            <p class="info-text">Si l'app est installée, elle s'ouvrira automatiquement.</p>
        </div>
    </div>
</body>
</html>`;
  
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(html);
}

