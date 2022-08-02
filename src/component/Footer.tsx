import {
  FooterContainer,
  FooterButton,
} from '../styles';

export interface FooterProps {
  value: string;
  onClick: () => void;
}

const Footer = (props: FooterProps) => {
  const { value, onClick } = props

  return (
    <FooterContainer>
      <FooterButton
        onClick={onClick}>
        {value}
      </FooterButton>
    </FooterContainer>  
  )
}

export default Footer