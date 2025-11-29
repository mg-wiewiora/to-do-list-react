import { useSelector, useDispatch } from "react-redux";
import { Wrapper, Button } from "./styled";
import {
  toggleHideDone,
  markAllAsDone,
  selectAreTasksEmpty,
  selectAreAllTasksDone,
  selectHideDone,
  fetchExampleTasks,
} from "../../tasksSlice";

const Menu = () => {
  const areTasksEmpty = useSelector(selectAreTasksEmpty);
  const areAllTasksDone = useSelector(selectAreAllTasksDone);
  const hideDone = useSelector(selectHideDone);

  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Button onClick={() => dispatch(fetchExampleTasks())}>
        Pobierz przykładowe zadania
      </Button>
      {!areTasksEmpty && (
        <>
          <Button onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Pokaż" : "Ukryj"} ukończone
          </Button>

          <Button
            onClick={() => dispatch(markAllAsDone())}
            disabled={areAllTasksDone}
          >
            Ukończ wszystkie
          </Button>
        </>
      )}
    </Wrapper>
  );
};

export default Menu;
