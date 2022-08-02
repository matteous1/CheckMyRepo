import {
  HeaderStyled,
  Back,
  Title,
} from '../styles';

import { useNavigate } from "react-router-dom";

import BackIcon from '../images/back.png';

export interface HeaderProps {
  text: string;
  hasBackButton?: boolean;
}

const Header = (props: HeaderProps) => {
  const { text , hasBackButton } = props
  const navigate = useNavigate()

  return (
    <HeaderStyled>
      {
        hasBackButton &&
        <Back
          src={BackIcon}
          alt="back"
          onClick={() => navigate('/')}
        />
      }
      <Title>{text}</Title>
  </HeaderStyled> 
  )
}

export default Header