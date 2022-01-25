import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue);
`;
export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 10rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    font-size: 1rem;
    color: #fff;
    background: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    // Dita a velocidade de uma ação. (Ex: O Filter está demorando N'::afters para se completar )
    transition: filter 0.2s;

    &:hover {
      //Faz com que tudo que esteja dentro do elemento escureça de acordo com o paramentro
      filter: brightness(0.9);
    }
  }
`;
