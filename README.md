# To Do List  
Fully interactive version → React & Redux Toolkit, Styled Components

> This project is a React version of the previous To-Do List application (created in other [public repository](https://mg-wiewiora.github.io/to-do-list-improved/)). It includes fully interactive task management with Redux Toolkit and modern component-based styling.
> 
> This project was created as part of learning Front-end fundamentals.
>
> Language of the page: **Polish**

<img width="200" alt="To-Do List icon" src="https://github.com/user-attachments/assets/38e84269-ad80-4595-ae84-aafea5a0d238" />

---

## Demo

**Check the website:**  
https://mg-wiewiora.github.io/to-do-list-react/

---

## Features

This application implements complete task management using modern React patterns.

### **Core Functionality**
- Create new tasks  
- Toggle task completion  
- Delete tasks  
- Mark all tasks as done  
- Filter and hide completed tasks  

### **State Management**
- All task-related logic moved to **Redux Toolkit slice (`tasksSlice`)**  
- Components use `useSelector` and `useDispatch` to interact with the store

### **Enhancements**
- `useRef` sets focus on the input field after adding a new task  
- **Styled Components** replace CSS and manage theme and responsiveness  

---

## Technologies Used

### **React**
- Functional components  
- `useState` and `useRef` for input handling  
- `useSelector` and `useDispatch` from `react-redux`  

### **State Management**
- **Redux Toolkit**
  - `createSlice`, `configureStore`, actions & reducers  

### **Styling**
- **Styled Components**
  - Theming (colors and breakpoints)
  - Scoped component-level styling

### **JavaScript**
- ES6+
- Immutable state updates using Redux Toolkit (immer)

---

## Key Learning Points

1. Managing state globally with Redux Toolkit  
2. Organizing actions and reducers inside a slice  
3. Using `useSelector` and `useDispatch` in components  
4. Improving UX with `useRef` for input focusing  
5. Structuring UI into reusable components  
6. Styling with Styled Components

---

## Preview

![gif - how to interact with the page](https://github.com/user-attachments/assets/c64e7ee4-8c91-459d-a8b0-206d8c9a7b5c)

![gif - responsiveness of the page](https://github.com/user-attachments/assets/6813d9cc-802f-4eb4-8892-855cf7048cf1)

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
