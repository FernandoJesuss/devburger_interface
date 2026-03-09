import styled from 'styled-components';
import { ContainerButton } from '../../components/Button/styles';

export const LoginButton = styled(ContainerButton)`
  height: auto;
  padding: 16px;
  background: linear-gradient(135deg, #C8000A 0%, #A0000A 100%);
  border: none;
  border-radius: 10px;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 18px;
  letter-spacing: 6px;
  color: #fff;
  position: relative;
  overflow: hidden;
  transition: all .22s ease;
  box-shadow: 0 4px 0 #5A0005, 0 8px 30px rgba(200,0,10,.45);

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    background: linear-gradient(135deg, #D8000C 0%, #AA0008 100%);
    border: none;
    box-shadow: 0 6px 0 #5A0005, 0 14px 40px rgba(200,0,10,.6);
  }

  &:active:not(:disabled) {
    transform: translateY(1px);
    background-color: #C8000A;
    box-shadow: 0 2px 0 #5A0005, 0 4px 16px rgba(200,0,10,.3);
  }

  &:disabled {
    opacity: .3;
    cursor: not-allowed;
    transform: none;
  }

  /* Shimmer no hover */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 50%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,.18), transparent);
    transition: left .6s ease;
  }

  &:hover:not(:disabled)::after {
    left: 160%;
  }
`;