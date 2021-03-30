import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 0 140px;

  @media (max-width: 1480px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 630px) {
    padding: 0px;
  }
`;

export const Box = styled.div`
  max-width: 450px;
  width: 100%;
  border-radius: 4px;
  background-color: #fff;
  padding: 25px 35px;

  h2 {
    font-size: 16px;
    color: #5e5b5b;
    font-weight: 600;
    margin-bottom: 20px;
  }

  @media (max-width: 1480px) {
    margin-bottom: 30px;
  }
`;

export const Task = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  border-radius: 4px;
  margin-bottom: 12px;

  h3 {
    font-size: 16px;
    font-weight: 400;
  }

  svg {
    min-width: 20px;
  }

  &.bg-green {
    background-color: rgba(36, 231, 78, 0.3);
  }

  &.bg-purple {
    background-color: rgba(95, 48, 226, 0.3);
  }

  &.bg-red {
    background-color: rgba(233, 13, 13, 0.3);
  }
`;
