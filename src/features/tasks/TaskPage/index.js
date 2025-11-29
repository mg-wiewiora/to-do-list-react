import Section from "../../../common/Section";
import Header from "../../../common/Header";
import { Container } from "../../../common/Container/styled";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function TaskPage() {
    const params = useParams();
  return (
    <Container>
      <Header title="Szczegóły zadania" />

      <Section title={""} content={task.content} />

    </Container>
  );
}

export default TaskPage;
