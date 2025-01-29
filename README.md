# Shop-Your-Recipes

## **How to Run the Project**
### **1. Clone the Repository**
```sh
git clone https://github.com/your-repo/shop-your-recipes.git
cd shop-your-recipes
```

### **2. Install Dependencies**
```sh
npm install
```

### **3. Run the Application**
```sh
ng serve
```
Visit `http://localhost:4200/` in your browser.

## Disclaimer

This project is built using **Angular v18**, with plans to update it to **v19** soon. It leverages the latest Angular features, including **signals**, the **new control flow**, and other cutting-edge functionalities. While the **UI is currently a work in progress**, the main focus has been on achieving **architectural efficiency**.

## Overview

**Shop-Your-Recipes** is a personal recipe management app designed for users to **add, edit, and remove** their favorite recipes effortlessly. When they decide to cook a recipe, they can easily save the necessary ingredients into a **dedicated shopping list**. The app also includes a **"Keep My Screen On" functionality**, ensuring a seamless shopping experience without the screen turning off.

This project is structured according to the principles outlined in **"Angular Enterprise Architecture v2" by Tomas Trajan**, which provides a visionary approach to building **modern, maintainable, and performant Angular applications**.

## Key Features

- **Personal Recipe Management:** Users can add, edit, and remove their favorite recipes.
- **Shopping List Integration:** Save ingredients from selected recipes directly into a dedicated shopping list.
- **Keep Screen On Feature:** A user-friendly shopping mode to keep the screen active.
- **Modern Angular Implementation:** Utilizes the latest Angular features for optimal performance and maintainability.

## Project Structure

The application follows a **project-based workspace** approach, as recommended in modern Angular architecture. Below is an overview of the key folders and files:

```
SHOP-YOUR-RECIPES
│── .angular/           
│── .vscode/            
│── node_modules/       
│── src/                # Source code directory
│   ├── app/            # Main Angular application module
│   │   ├── core/       # Core module (services, interceptors, etc.)
│   │   ├── feature/    # Feature-specific modules and components
│   │   ├── layout/     # Layout-related components
│   │   ├── ui/         # UI components (buttons, forms, etc.)
│   │   ├── app-routing.module.ts  # Application routing module
│   │   ├── app.component.html     # Root component HTML template
│   │   ├── app.component.ts       # Root component TypeScript file
│   │   ├── app.config.ts          # Root configuration module
│   │   ├── plan.MD                
│   ├── assets/          # Static assets (images, icons, etc.)
│   ├── .eslintrc.json   
│   ├── favicon.ico      
│   ├── index.html       # Main HTML entry point
│   ├── main.ts          # Main TypeScript entry point
│   ├── styles.css       
```

### **Core Architecture**
The **`core/` folder** serves as the foundation of the application, containing global logic and providers.

#### `core.ts`
The `core.ts` file is responsible for:
- Centralized **application-wide providers**.
- Managing **interceptors, guards, and global services**.
- Providing **animations, routing, and HTTP client setup**.
- Implementing **environment initializers**.

Example:
```typescript
export function provideCore({ routes }: CoreOptions): EnvironmentProviders {
  return makeEnvironmentProviders([
    provideAnimations(),
    provideHttpClient(),
    provideRouter(
      routes,
      withRouterConfig({ onSameUrlNavigation: 'reload' }),
      withComponentInputBinding(),
      withEnabledBlockingInitialNavigation(),
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled',
      }),
    ),
  ]);
}
```

### **Application Configuration**
#### `app.config.ts`
This file configures the application by calling `provideCore()`:
```typescript
export const appConfig: ApplicationConfig = {
  providers: [provideCore({ routes: appRoutes })],
};
```

#### `main.ts`
Handles **bootstrapping** the application with `bootstrapApplication()`:
```typescript
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
```

### **Feature Modules**
Each feature in the application is structured within the `feature/` folder and follows **lazy-loading best practices**.

#### **Example Structure**
```
feature/
│── auth/                   # Authentication module
│── recipes/                # Recipes module
│   ├── recipe-detail/       # Displays details of a selected recipe
│   ├── recipe-edit/         # Handles recipe editing
│   ├── recipe-list/         # Lists available recipes
│   ├── recipe.service.ts    # Recipe logic
│── shopping-list/          # Shopping list module
│   ├── shopping-list.service.ts  # Shopping list logic
│   ├── keep-awake/         # Utility for keeping UI active
```

### **Layout & UI**
#### `/layout` Folder
Contains **application-wide templates**, such as:
- `main-layout.component.ts`: Defines the structure, including navigation and `<router-outlet>`.
- Example:
```html
<header>
  <nav class="navbar">
    <!-- Navigation -->
  </nav>
</header>
<main>
  <router-outlet></router-outlet>
</main>
```

#### `/ui` Folder
Houses **reusable UI components** such as:
- `loading-spinner.component.ts`
- `dropdown.directive.ts`
- `warning-banner.component.ts`

## **Future Plans**
- **UI Enhancements**: Improving the visual experience.
- **Angular v19 Upgrade**: Keeping the app up-to-date with the latest Angular features.
- **New Features**: Additional functionalities such as user authentication and recipe categorization.

## **Conclusion**
This project showcases **modern Angular enterprise architecture** while focusing on **maintainability, readability, and performance**. Contributions and feedback are welcome as the project evolves!

