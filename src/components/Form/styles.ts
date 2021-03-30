import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  max-width: 600px;
  margin: -80px auto 50px auto;
  border-radius: 4px;
  background-color: #fff;

  .content {
    display: flex;
    flex-direction: column;
    padding: 46px 60px;

    input[type='text'] {
      padding: 12px 14px;
      border-radius: 4px;
      border: 1px solid #ccc;
      margin-bottom: 30px;
    }

    > button {
      padding: 13px;
      background-color: #312056;
      border-radius: 4px;
      border: 0;
      color: #fff;
      font-size: 16px;
      font-weight: 500;
    }

    .list {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
    }
  }
`;

export const Option = styled.button`
  cursor: pointer;
  background-color: #eee;
  padding: 10px;
  border-radius: 4px;
  border: 0;

  span {
    text-align: center;
    color: #000;
    font-weight: 300;
  }

  &.done {
    background-color: rgba(36, 231, 78, 0.3);
  }
  &.todo {
    background-color: rgba(95, 48, 226, 0.3);
  }
  &.block {
    background-color: rgba(233, 13, 13, 0.3);
  }
`;
