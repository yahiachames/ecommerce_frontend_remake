import styled from "styled-components";
export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid var(--lightBlue);
  border-color: ${props =>
    props.cart ? "var(--mainyellow)" : "var(--lightBlue)"};
  color: ${props => (props.cart ? "var(--mainyellow)" : "var(--lightBlue)")};
  border-radius: 0.5rem;
  padding: 0.2rem 0.5 rem;
  cursor: 0.2rem 0.5rem 0.2rem 0;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s eas-in-out;
  &:hover {
    background: ${props =>
      props.cart ? "var(--mainyellow)" : "var(--lightBlue)"};
    color: var(--mainBlue);
  }
  &:focus {
    outline: none;
  }
`;
