import Form from "./Form";
import List from "./List";
import Menu from "./Menu";
import Section from "./Section";

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
        <Section title="Dodaj nowe zadanie" content={<Form />} />
        <Section
          title="Lista zadań"
          menu={<Menu tasks={tasks} hideDone={hideDone} />}
          content={<List tasks={tasks} hideDone={hideDone} />}
        />
      </main>
    </div>
  );
}

export default App;
