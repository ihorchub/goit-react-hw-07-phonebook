import styled from 'styled-components';

export const ListElem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  :not(:last-child) {
    margin-bottom: 12px;
  }

  :nth-child(2n) {
    background-color: #eee;
  }
`;
