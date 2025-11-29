import { toAuthor, toTasks } from "../routes";
import { Wrapper, List, Item, StyledNavLink } from "./styled";

const Navigation = () => {
  return (
    <Wrapper>
      <List>
        <Item>
          <StyledNavLink to={toTasks()}>Zadania</StyledNavLink>
        </Item>
        <Item>
          <StyledNavLink to={toAuthor()}>O autorze</StyledNavLink>
        </Item>
      </List>
    </Wrapper>
  );
};
export default Navigation;
