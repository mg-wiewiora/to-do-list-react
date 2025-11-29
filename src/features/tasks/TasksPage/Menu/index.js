import { useSelector, useDispatch } from "react-redux";
import { Wrapper} from "./styled";
import { Button } from "../Button/styled";
import {
  toggleHideDone,
  markAllAsDone,
  selectAreTasksEmpty,
  selectAreAllTasksDone,
  selectHideDone,
} from "../../tasksSlice";

const Menu = () => {
  const areTasksEmpty = useSelector(selectAreTasksEmpty);
  const areAllTasksDone = useSelector(selectAreAllTasksDone);
  const hideDone = useSelector(selectHideDone);

  const dispatch = useDispatch();

  return (
    <Wrapper>
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
