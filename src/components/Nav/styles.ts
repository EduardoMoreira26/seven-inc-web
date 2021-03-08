import styled from 'styled-components';

export const Container = styled.div`
  background: #05102e;
  padding: 10px;
  width: 50px;
  display: flex;
  flex-direction: column;
`;

export const MenuNav = styled.div`
    height: 100vh;
    
    svg {
      color: #9ea1a6;
      cursor: pointer;
      transition: color 0.2s;

      &:hover{
        color: #fff;
      }
    }

    h2 {
      padding-top: 20px;

      

      &:nth-child(7){
        padding-top: 100px;
      }
    }
`;