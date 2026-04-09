# Demo Atelier IA — Supabase + FTP Deploy

Site statique minimaliste qui récupère un message depuis Supabase et l'affiche.

---

## 1. Créer le projet Supabase

1. Créer un projet sur [supabase.com](https://supabase.com)
2. Aller dans **SQL Editor** et coller le contenu de `supabase/init.sql`
3. Exécuter — cela crée la table `messages` et insère "Hello World"
4. Récupérer vos clés dans **Project Settings → API** :
   - **Project URL** → `SUPABASE_URL`
   - **anon / public key** → `SUPABASE_ANON_KEY`

---

## 2. Tester en local

> Ne jamais committer `app.js` avec les vraies clés !

Remplacer temporairement les placeholders dans `app.js` :

```js
const SUPABASE_URL = "https://xxxx.supabase.co";
const SUPABASE_ANON_KEY = "eyJ...";
```

Lancer un serveur local (le fichier doit être servi via HTTP, pas via `file://`) :

```bash
npx serve .
```

Ou utiliser l'extension **Live Server** de VS Code (clic droit → *Open with Live Server*).

Ouvrir [http://localhost:3000](http://localhost:3000) — vous devez voir **Hello World**.

Remettre les placeholders avant de committer :

```js
const SUPABASE_URL = "%%SUPABASE_URL%%";
const SUPABASE_ANON_KEY = "%%SUPABASE_ANON_KEY%%";
```

---

## 3. Configurer les secrets GitHub Actions

Dans votre repo GitHub : **Settings → Secrets and variables → Actions → New repository secret**

| Secret           | Description                                    |
|------------------|------------------------------------------------|
| `SUPABASE_URL`   | URL de votre projet Supabase                   |
| `SUPABASE_ANON_KEY` | Clé publique anon de Supabase              |
| `FTP_SERVER`     | Adresse du serveur FTP (ex: `ftp.monsite.fr`)  |
| `FTP_USERNAME`   | Identifiant FTP                                |
| `FTP_PASSWORD`   | Mot de passe FTP                               |
| `FTP_PORT`       | Port FTP (optionnel, défaut : `21`)            |
| `DEPLOY_PATH`    | Chemin distant (ex: `/public_html/demo-atelier/`) |

---

## 4. Déployer

Pusher sur `main` — GitHub Actions injecte les secrets et déploie automatiquement les fichiers `index.html`, `style.css` et `app.js` (avec les clés injectées) sur votre serveur FTP.
