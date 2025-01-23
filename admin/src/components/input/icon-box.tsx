import styled from 'styled-components';

export const IconBox = styled.div`
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
font-size: 1.5rem;
padding: .6rem;
border-radius: 4px;
transition: 0.3s;

&:hover {
  background-color: rgba(0,0,0,0.5);
}
`;
