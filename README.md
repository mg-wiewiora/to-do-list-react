# To Do List  
Fully interactive version → React, Redux Toolkit, React Router & Styled Components

> This project is a React version of a previous To-Do List application, rebuilt using modern tools such as Redux Toolkit, React Router and Styled Components.  
> It includes full task management, dynamic search, async example task loading, and URL navigation.  
>
> Project created as part of Frontend development learning.  
> **Page language: Polish**

<img width="200" alt="To-Do List icon" src="https://github.com/user-attachments/assets/38e84269-ad80-4595-ae84-aafea5a0d238" />

---

## Demo

**Check the website:**  
https://mg-wiewiora.github.io/to-do-list-react/

---

## Features

### **Core Functionality**
- Add new tasks  
- Mark tasks as done / undone  
- Delete tasks  
- Mark all tasks as completed  
- Hide or show completed tasks  
- Search tasks by phrase  
- Display task details on a separate page (`/zadania/:id`)  

### **Async & Persistence**
- Load example tasks from an API (Redux Toolkit)  
- Loading and error states handled in UI  
- Automatic syncing with LocalStorage  

### **Navigation**
- React Router with:  
  - `HashRouter`  
  - `NavLink` with active state  
  - additional page: **About Author**  

### **Styling**
- Styled Components for all styling  
- Theme-based colors and breakpoints  
- Reusable UI components (Section, Header, Container)  

---

## Technologies Used

### **React**
- Functional components  
- Hooks: `useEffect`, `useRef`  
- Component-based structure  

### **React Router**
- `HashRouter`, `Route`, `Switch`, `Redirect`, `NavLink`  

### **Redux Toolkit**
- `createSlice` for task logic  
- Async example task loading  
- Selectors for task filtering and searching  

### **Styled Components**
- Global theme  
- CSS-in-JS component styling  

### **JavaScript (ES6+)**
- Modern syntax  
- Array operations, pure reducer logic (handled by Immer inside Redux Toolkit)

---

## Key Learning Points

1. Managing application-wide state using Redux Toolkit  
2. Organizing reducers, actions, and selectors within a slice  
3. Working with React Router and dynamic routes  
4. Building reusable UI components  
5. Styling using Styled Components and theming  
6. Adding async flows with loading/error handling  
7. Synchronizing Redux state with LocalStorage  

---

## Preview

![gif - how to interact with the page](https://github.com/user-attachments/assets/01d64a94-46bc-4ab1-94c3-c863482886c2)

![gif - responsiveness of the page](https://github.com/user-attachments/assets/04290699-6fa1-4e7c-acd6-b4f7b2b7e0d2)

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

---

## Author

**Małgorzata Wiewióra** - [my GitHub profile](https://github.com/mg-wiewiora)
