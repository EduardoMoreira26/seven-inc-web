import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Menu = styled.div`
  
`;

export const WorkSpace = styled.div`
  padding: 20px;
  h1 {
    color: #000;
  }
`;

export const Main = styled.div`
  max-width: 600px;

  h2 {
    padding: 40px 0;
  }

  form {
    display: flex;
    align-items: center;
  }
  
  legend {
    padding: 40px 0;
  }

  button {
    border: none;
    background: #006cac; 
    height: 40px;
    margin-top: 18px;
    border-radius: 5px;
    transition: background 0.2s;

    &:hover {
      background: #05102e; 

    }

    svg {
      font-size: 28px;
      color: #fff;
    }
  }
`;

export const EmployeeData = styled.div`
  display: flex;

  h4 {
    background: #e1e1e1;
    margin-right: 10px;
    border: 1px solid #000;
    padding: 10px;
    
  }

  span {
    background: #e1e1e1;
    margin-right: 10px;
    border: 1px solid #000;
    padding: 10px;

  }
`;