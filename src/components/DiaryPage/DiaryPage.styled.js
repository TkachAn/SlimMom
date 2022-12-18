import styled from "styled-components";
import leaves from '../../images/hero/desktop/leaves.png';
import leavesTablet from '../../images/hero/tablet/leaves.png';

export const Wrapper = styled.div`
  margin: 0px auto;
  padding: 100px 15px 0;
  @media (max-width: 425px) {
    max-width: 280px;
  }
  @media (min-width: 426px) and (max-width: 1023px) {
    padding-top: 100px;
    padding-left: 32px
  }
  @media (min-width: 1024px) {
    padding-top: 250px;
    padding-left: 16px
  }
  &::before {
    @media (min-width: 426px) and (max-width: 1023px) {
      object-fit: fill;
      width: 302px;
      height: 253px;
      bottom: 0;
      right 10%;
      position: absolute;
      content: '';
      z-index: -1;
      background-image: url(${leavesTablet});
      background-repeat: no-repeat;
      background-position: left;
      background-size: auto;
    }

    @media (min-width: 1024px) {
      width: 358px;
      height: 687px;
      top: 170px;
      left: 69%;
      position: absolute;
      content: '';
      z-index: -1;
      background-image: url(${leaves});
      background-repeat: no-repeat;
      background-position: center;
      background-size: auto;
    }
` 

export const Button = styled.button`
  padding: 12px 13px 11px;
  border-radius: 50%;
  border: ${p => p.theme.borders.none};
  background: ${p => p.theme.colors.orange};
  cursor: pointer;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  margin-top: 60px;
`