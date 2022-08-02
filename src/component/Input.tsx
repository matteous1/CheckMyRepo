import {
  InputContainer,
} from '../styles';

export interface InputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

const Input = (props: InputProps) => {
  const { value, onChange, placeholder } = props

  return (
    <InputContainer>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder} 
      />
    </InputContainer>    
  )
}

export default Input