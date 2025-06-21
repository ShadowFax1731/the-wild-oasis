import styled from "styled-components";
import { forwardRef } from "react";

const StyledTextarea = styled.textarea`
  padding: 0.8rem 1.2rem;
  border: 1px solid var(--color-grey-300);
  border-radius: 5px;
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  width: 100%;
  height: 8rem;
`;

const Textarea = forwardRef(function Textarea(props, ref) {
  return <StyledTextarea ref={ref} {...props} />;
});

export default Textarea;
