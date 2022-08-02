import {
  ErrorMessage,
  ErrorMessageBold,
  ErrorMessageContainer,
} from '../styles';

export interface ErrorProps {
  status: number;
}

const Error = (props: ErrorProps) => {
  const { status } = props
  switch (status) {
    case 1:
      return (
        <ErrorMessageContainer>
          <ErrorMessage>
            Check your <ErrorMessageBold>username</ErrorMessageBold>
          </ErrorMessage>
          <ErrorMessage>
            or your <ErrorMessageBold>repository </ErrorMessageBold>name
          </ErrorMessage>
        </ErrorMessageContainer>
      )
    case 2:
      return (
        <ErrorMessageContainer>
          <ErrorMessage>
            Check your <ErrorMessageBold> internet connection</ErrorMessageBold>
          </ErrorMessage>
        </ErrorMessageContainer>
      ) 
    case 3:
      return (
        <ErrorMessageContainer>
          <ErrorMessage>
            Something went wrong! Tray again!
          </ErrorMessage>
        </ErrorMessageContainer>
      )
    default: 
      return null      
    }   
}

export default Error