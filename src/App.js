function App() {
  return (
    <div className="container">
      <header>
        <h1>Lista zadań</h1>
      </header>
      <main>
        <section className="section">
          <h2 className="section__title">Dodaj nowe zadanie</h2>
          <div className="section__content">
            <form className="form js-form">
              <input className="form__input js-taskInput" placeholder="Co jest do zrobienia?" />
              <button className="form__button">Dodaj nowe zadanie</button>
            </form>
          </div>
        </section>
        <section className="section">
          <div className="section__menuContainer">
            <h2 className="section__title">Lista zadań</h2>
            <div className="menu js-menu">
            </div>
          </div>
          <div className="section__content">
            <ul className="list js-taskList"></ul>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;