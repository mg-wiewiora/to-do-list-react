# To Do List
Fully interactive version -> React Hooks & State Management

> This project is a React version of the previous To-Do List application (created in other [public repository](https://mg-wiewiora.github.io/to-do-list-improved/)). It is a fully functional To-Do List application. It was developed to apply core **React concepts**, focusing on advanced state management, component communication, and immutability.

> This project was created as part of learning Front-end fundamentals.
>
> Language of the page: **Polish**
>

<img width="200" alt=" To-Do List icon" src="https://github.com/user-attachments/assets/38e84269-ad80-4595-ae84-aafea5a0d238" />

---

## Demo

**Check the website:** [https://mg-wiewiora.github.io/to-do-list-react/](https://mg-wiewiora.github.io/to-do-list-react/)

---

## Functionality (Full CRUD & Filtering)

This version successfully implements **full CRUD logic (Create, Read, Update, Delete)** and additional advanced features.

**Key Features:**

* **Full Interactivity (CRUD):** Users can add, delete, and toggle the 'done' status of tasks.
* **Batch Update:** The ability to mark all tasks as completed at once (`markAllAsDone`).
* **Filtering:** Tasks can be filtered to hide or show completed items (`toggleHideDone`).
* **State Lifting:** Application state is centralized in the `App` component and passed down to children (Form, List, Menu) via props.
---

## Technologies & Focus

The project emphasizes essential React principles, hooks, and modern JavaScript practices.

* **Framework:** **React**
* **Language:** JavaScript (ES6+)
* **State Management:** **`useState` hook** for all application state, including filtering.
* **Immutability:** State updates use modern array methods (`map`, `filter`) and the spread operator (`...`) to ensure immutability.
* **Styling:** Standard **CSS** utilizing the previous BEM conventions.

---

## Key Learning Points

This project provided deep practical experience with:

1.  **Immutability in React:** Mastering state updates by **never directly mutating** the `tasks` array, instead relying on `filter` and `map` for clean updates.
2.  **State Lifting & Communication:** Centralizing the state in the parent component (`App`) and passing handler functions (`addTask`, `deleteTask`) to child components using **props**.
3.  **Advanced `useState`:** Using the functional update form (`setTasks((tasks) => ...)`), which is essential for managing complex arrays and objects based on the previous state.
4.  **Dynamic Rendering:** Efficiently rendering lists of elements and using **unique IDs** as keys for optimized performance.

---

![gif - how to interact with the page](https://github.com/user-attachments/assets/83138d10-dc6a-4389-a8da-c721f8c2bb47)


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
