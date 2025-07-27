# Recipe Frontend

Une application web moderne développée avec Angular pour la gestion et le partage de recettes culinaires. Cette interface utilisateur interactive permet aux utilisateurs de découvrir, créer et partager leurs recettes préférées avec une expérience utilisateur optimale.

## 🍽️ Fonctionnalités

- **Interface utilisateur moderne**
  - Design responsive avec Tailwind CSS
  - Interface intuitive et épurée
  - Composants réutilisables

- **Gestion des recettes**
  - Affichage et recherche de recettes
  - Création et modification de recettes
  - Upload d'images
  - Système de filtrage par catégories

- **Interactions utilisateur**
  - Authentification sécurisée
  - Système de commentaires
  - Notation des recettes
  - Gestion des favoris
  - Profils utilisateurs

- **Expérience utilisateur**
  - Navigation fluide avec Angular Router
  - Formulaires réactifs
  - Gestion d'état centralisée
  - Notifications en temps réel

## 🛠️ Technologies utilisées

### Framework & Core
- **Angular 20.1.0** - Framework principal
- **TypeScript 5.8.2** - Langage de développement
- **RxJS 7.8.0** - Programmation réactive

### Styling & UI
- **Tailwind CSS** - Framework CSS utilitaire
- **CSS3** - Styles personnalisés
- **Angular Material** *(à venir)* - Composants UI

### Développement & Build
- **Angular CLI 20.1.3** - Outils de développement
- **Vite** - Bundler rapide
- **ESLint** - Linting du code
- **Prettier** - Formatage du code

### Tests
- **Jasmine 5.8.0** - Framework de tests
- **Karma 6.4.0** - Test runner
- **Protractor** *(à venir)* - Tests E2E

## 📋 Prérequis

- Node.js 18.x ou supérieur
- npm 9.x ou supérieur
- Angular CLI 20.x
- Un navigateur moderne (Chrome, Firefox, Safari, Edge)

## 🚀 Installation

### 1. Cloner le repository
```bash
git clone [git@github.com:PepMama/recipe_front.git]
cd recipe_front
```

### 2. Installer les dépendances
```bash
npm install
```

### 3. Configuration de l'environnement
Créer un fichier `src/environments/environment.local.ts` :
```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8000', // URL de votre API backend
  apiVersion: 'v1',
  jwtTokenKey: 'recipe_app_token',
  appName: 'RecipeApp'
};
```

### 4. Installer Tailwind CSS (si pas encore installé)
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

### 5. Démarrer le serveur de développement
```bash
ng serve
# ou
npm start
```

L'application sera accessible à l'adresse : `http://localhost:4200`

## 🎯 Scripts disponibles

### Développement
```bash
ng serve                    # Démarre le serveur de développement
ng serve --open            # Démarre et ouvre automatiquement le navigateur
ng serve --port 4201       # Démarre sur un port personnalisé
```

### Build & Production
```bash
ng build                    # Build de production
ng build --watch           # Build en mode watch
ng build --configuration development  # Build de développement
```

### Tests
```bash
ng test                     # Lance les tests unitaires
ng test --watch=false      # Lance les tests une seule fois
ng test --browsers=Chrome  # Lance les tests sur Chrome uniquement
```

### Code scaffolding
```bash
ng generate component component-name    # Génère un nouveau composant
ng generate service service-name        # Génère un nouveau service
ng generate module module-name          # Génère un nouveau module
ng generate guard guard-name            # Génère un nouveau guard
ng generate pipe pipe-name              # Génère un nouveau pipe
ng generate directive directive-name    # Génère une nouvelle directive
```

### Linting & Formatage
```bash
ng lint                     # Vérifie le code avec ESLint
npm run format             # Formate le code avec Prettier
```

## 📁 Structure du projet

```
src/
├── app/
│   ├── core/              # Services et fonctionnalités de base
│   │   ├── services/      # Services partagés
│   │   ├── guards/        # Guards de navigation
│   │   ├── interceptors/  # Intercepteurs HTTP
│   │   └── models/        # Interfaces et modèles
│   ├── shared/            # Composants et modules partagés
│   │   ├── components/    # Composants réutilisables
│   │   ├── pipes/         # Pipes personnalisés
│   │   └── directives/    # Directives personnalisées
│   ├── features/          # Modules de fonctionnalités
│   │   ├── auth/          # Module d'authentification
│   │   ├── recipes/       # Module de gestion des recettes
│   │   ├── user/          # Module utilisateur
│   │   └── dashboard/     # Module tableau de bord
│   ├── layout/            # Composants de mise en page
│   │   ├── header/        # En-tête de l'application
│   │   ├── footer/        # Pied de page
│   │   └── sidebar/       # Barre latérale
│   ├── app.config.ts      # Configuration de l'application
│   ├── app.routes.ts      # Configuration des routes
│   └── app.component.ts   # Composant racine
├── assets/                # Ressources statiques
│   ├── images/            # Images
│   ├── icons/             # Icônes
│   └── fonts/             # Polices personnalisées
├── environments/          # Configuration d'environnement
├── styles.css            # Styles globaux
└── main.ts               # Point d'entrée de l'application
```

## 🔐 Authentification & Sécurité

L'application utilise des tokens JWT pour l'authentification :

```typescript
// Exemple d'utilisation du service d'authentification
this.authService.login(credentials).subscribe({
  next: (response) => {
    localStorage.setItem('token', response.token);
    this.router.navigate(['/dashboard']);
  },
  error: (error) => {
    console.error('Erreur de connexion:', error);
  }
});
```

## 🌐 Gestion des API

### Configuration du service HTTP
```typescript
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${this.baseUrl}/recipes`);
  }
}
```

## 🧪 Tests

### Tests unitaires
```bash
ng test
```

### Tests de composants
```typescript
describe('RecipeComponent', () => {
  let component: RecipeComponent;
  let fixture: ComponentFixture<RecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecipeComponent]
    }).compileComponents();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
```

## 🚀 Déploiement

### Build de production
```bash
ng build --configuration production
```

### Déploiement sur Netlify/Vercel
1. Build du projet : `ng build`
2. Upload du dossier `dist/` vers votre plateforme
3. Configuration des redirections pour le routing Angular

## 📊 Performance & Optimisation

- **Lazy Loading** des modules
- **OnPush Change Detection** pour les composants
- **TrackBy functions** pour les listes
- **Service Workers** pour le cache
- **Bundle analysis** avec `webpack-bundle-analyzer`

## 🔧 Configuration

### Variables d'environnement
```typescript
// src/environments/environment.ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8000',
  apiVersion: 'v1',
  enableDebug: true
};
```

## 📈 Roadmap

- [x] Configuration initiale Angular
- [ ] Intégration Tailwind CSS
- [ ] Modules d'authentification
- [ ] Interface de gestion des recettes
- [ ] Système de recherche avancée
- [ ] Upload d'images avec preview
- [ ] Notifications push
- [ ] Tests E2E complets
- [ ] Optimisations performance

## 🤝 Contribution

1. Fork le projet
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Respectez les conventions de code (ESLint + Prettier)
4. Ajoutez des tests pour vos nouvelles fonctionnalités
5. Committez vos changements (`git commit -am 'Ajout nouvelle fonctionnalité'`)
6. Push vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
7. Ouvrez une Pull Request

## 📄 Licence

Ce projet est sous licence MIT.

## 👨‍💻 Auteur

[Pépin Maëlic] - [pmaelic@outlook.fr]

## 🔗 Liens utiles

- [Documentation Angular](https://angular.dev)
- [Guide Tailwind CSS](https://tailwindcss.com/docs)
- [Angular CLI Reference](https://angular.dev/tools/cli)
- [API Backend](../recipe_back/README.md)

---

**Note :** Cette application frontend est en cours de développement et fonctionne en tandem avec l'API Recipe Backend.
