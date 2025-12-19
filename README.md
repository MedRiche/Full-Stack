# Système de Gestion des Étudiants

Une application web full-stack pour gérer les inscriptions des étudiants avec gestion des cours et suivi des prérequis.



## Vue d'ensemble

Cette application fournit une interface simple pour gérer les inscriptions des étudiants. Elle permet aux utilisateurs d'ajouter des étudiants avec leurs préférences de cours, de visualiser tous les étudiants inscrits et de gérer la base de données des étudiants via une interface web intuitive.

##  Fonctionnalités

- **Ajouter des Étudiants** : Inscrire de nouveaux étudiants avec nom, email et choix de cours
- **Gestion des Cours** : Support pour plusieurs cours incluant Math, Math Avancé, Science et Histoire
- **Suivi des Prérequis** : Le cours de Math Avancé nécessite des informations sur l'expérience préalable
- **Validation d'Email** : Assure des adresses email uniques et valides
- **Fonctionnalité de Tri** : Trier les étudiants par nom ou email
- **Supprimer des Étudiants** : Retirer des étudiants du système
- **Design Responsive** : Interface moderne et épurée avec effets de survol et animations
- **Persistance des Données** : Données des étudiants stockées au format JSON

##  Stack Technologique

### Frontend
- **React** 19.2.3 - Framework UI
- **Axios** 1.13.2 - Client HTTP pour les requêtes API
- **React Scripts** 5.0.1 - Outils de build
- **CSS3** - Styles personnalisés

### Backend
- **Node.js** - Environnement d'exécution
- **Express** 5.2.1 - Framework web
- **CORS** 2.8.5 - Partage de ressources entre origines
- **ES Modules** - Modules JavaScript modernes



##  Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- **Node.js** (version 18 ou supérieure)
- **npm** (fourni avec Node.js)

Pour vérifier vos versions installées :

```bash
node --version
npm --version
```

##  Installation

### 1. Cloner le Dépôt

```bash
git clone <url-du-dépôt>
cd <répertoire-du-projet>
```

### 2. Installer les Dépendances Backend

```bash
cd backend
npm install
```

Cela installera les packages suivants :
- `express@^5.2.1`
- `cors@^2.8.5`

### 3. Installer les Dépendances Frontend

```bash
cd ../frontend
npm install
```

Cela installera les packages suivants :
- `react@^19.2.3`
- `react-dom@^19.2.3`
- `react-scripts@5.0.1`
- `axios@^1.13.2`


## 4 Lancement de l'Application

### Démarrer le Serveur Backend

Ouvrez un terminal et exécutez :

```bash
cd backend
npm start
```

L'API backend démarrera sur `http://localhost:3001`

Vous devriez voir :
```
Backend API running on http://localhost:3001
```

### Démarrer l'Application Frontend

Ouvrez un **nouveau terminal** et exécutez :

```bash
cd frontend
npm start
```

L'application React démarrera sur `http://localhost:3000`

Votre navigateur devrait s'ouvrir automatiquement sur `http://localhost:3000`. Sinon, naviguez-y manuellement.



## 5 Structure du Projet

```
project/
├── backend/
│   ├── data/
│   │   └── students.json          # Stockage des données étudiants
│   ├── src/
│   │   ├── controllers/
│   │   │   └── studentController.js   # Logique métier
│   │   ├── routes/
│   │   │   └── studentRoutes.js       # Routes API
│   │   └── server.js                  # Configuration du serveur Express
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── StudentForm/
│   │   │   │   ├── StudentForm.jsx    # Composant formulaire
│   │   │   │   └── StudentForm.css    # Styles du formulaire
│   │   │   └── StudentTable/
│   │   │       ├── StudentTable.jsx   # Composant tableau
│   │   │       └── StudentTable.css   # Styles du tableau
│   │   ├── services/
│   │   │   └── students.js            # Couche service API
│   │   ├── App.js                     # Application principale
│   │   ├── App.css
│   │   ├── index.js                   # Point d'entrée de l'application
│   │   ├── index.css
│   │   └── setupTests.js
│   ├── package.json
│   └── package-lock.json
│
└── README.md
```

##  Cours Disponibles

1. **Math** - Cours de mathématiques standard
2. **Math Avancé** - Mathématiques avancées (nécessite une expérience préalable)
3. **Science** - Cours de sciences générales
4. **Histoire** - Cours d'histoire

**Note :** Lors de la sélection de "Math Avancé", un champ supplémentaire apparaît pour capturer les informations sur l'expérience préalable.







## 6 Fonctionnalités de l'Interface

- **Design Moderne** : Interface propre et professionnelle avec couleurs d'accent bleues
- **Validation de Formulaire** : Validation en temps réel avec messages d'erreur
- **Tableaux Responsifs** : Effets de survol et couleurs de lignes alternées
- **Fonctionnalité de Tri** : Cliquer pour trier par nom ou email
- **Animations Fluides** : Transitions sur les boutons et éléments interactifs
- **Champs Conditionnels** : Le champ expérience n'apparaît que pour Math Avancé

##  Validation des Données

L'application inclut une validation complète :

- **Champs Requis** : Nom, email et sélection de cours
- **Format Email** : Valide la structure appropriée de l'email avec regex
- **Emails Uniques** : Empêche les inscriptions en double
- **Requis Conditionnel** : Champ expérience pour Math Avancé




##  Auteurs

- Mohamed Amine Riche 

##  Support

mohamed.rich.2020.2020@gmail.com

---

**Note** : Assurez-vous que les serveurs backend et frontend sont lancés simultanément pour que l'application fonctionne correctement.
