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

  table {
    text-align: center;
    margin-top: 20px;

    .headerTable {
      background: #006cac;
      height: 46px;
      width: 250px;
      border-radius: 3px;
      border: 0;
      padding: 0 5px;
      color: #fff;
      border: 1px solid #e1e1e1;
    }
  }
`;

export const Main = styled.div`
  max-width: 600px;

  h2 {
    padding: 20px 0;
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
    background: #e1e1e1; 
    height: 40px;
    margin-top: 25px;
    border-radius: 5px;
    transition: background 0.2s;
    margin-right: 10px;

    &:hover {
      background: #e6e6e6; 
    }

    svg {
      font-size: 22px;
      color: #05102e;
      padding: 3px;
    }
  }
`;

export const EmployeeData = styled.div`
 

  table {
    text-align: center;

    .headerTableData {
      background: #e1e1e1;
      height: 46px;
      width: 250px;
      border-radius: 3px;
      border: 0;
      padding: 0 5px;
      color: #000;
      border: 1px solid #000;

      button {
        border: none;
        background: none;

        svg {
          margin:0 20px;

          transition: font-size 0.2s;

          &:hover{
            font-size: 18px; 
          }
        }
      }
    }
  }


  

  
`;

export const ListItem = styled.div`
  border: 1px solid #e1e1e1;
  border-radius: 3px;
`;