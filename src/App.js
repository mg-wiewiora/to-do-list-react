import Form from "./Form";
import List from "./List";
import Menu from "./Menu";

const tasks = [
  { id: 1, content: "przejsć na Reacta", done: false },
  { id: 2, content: "wypić kawę", done: true },
];

const hideDone = false;

function App() {
  return (
    <div className="container">
      <header>
        <h1>Lista zadań</h1>
      </header>
      <main>
        <section className="section">
          <h2 className="section__title section__title--form">
            Dodaj nowe zadanie
          </h2>
          <div className="section__content">
            <Form />
          </div>
        </section>
        <section className="section">
          <div className="section__menuContainer">
            <h2 className="section__title">Lista zadań</h2>
            <Menu tasks={tasks} hideDone={hideDone} />
          </div>
          <div className="section__content">
            <List tasks={tasks} hideDone={hideDone} />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
