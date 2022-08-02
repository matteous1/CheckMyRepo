import styled from 'styled-components';
import {
  fontSizePalette,
  fontFamily,
  colorPalette,
} from './utils/styleConstants';

export const Wrapper = styled.div`
  font-family: ${fontFamily};
  font-size: ${fontSizePalette.large};
  height: 100vh;
`;

export const Container = styled.div<{ status?: 'failOne' | 'failTwo' | 'success' | null }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  background-color: ${({ status }) => status === 'success' ?
    colorPalette.green :
    (status === 'failOne' || status === 'failTwo') ?
    colorPalette.red :
    colorPalette.white
  };
`;

export const SectionOne = styled.div`
  padding: 35px;
`;

export const SectionTwo = styled.div`
  padding: 35px;
  text-align: right;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  font-size: ${fontSizePalette.medium};
  font-weight: 600;
  padding: 40px 0;
`;

export const ErrorMessage = styled.div`
  font-size: ${fontSizePalette.medium};
  font-weight: 400;
`;

export const ErrorMessageBold = styled.span`
  font-size: ${fontSizePalette.medium};
  font-weight: 600;
`;

export const ErrorMessageContainer = styled.div`
  padding-top: 20px;
`;

export const Footer = styled.div`
  font-size: ${fontSizePalette.medium};
  font-weight: 600;
  padding: 40px 0;
`;

export const FooterButton = styled.span`
  font-size: ${fontSizePalette.medium};
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
`;

export const Back = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const InputContainer = styled.div`
  input {
    width: 100%;
    border: none;
    border-bottom: 2px solid ${colorPalette.black};
    font-size: ${fontSizePalette.medium};
    font-weight: 300;
    padding: 5px;
  }
  input:focus {
    outline: none;
  }
`;

export const Title = styled.div`
  text-transform: uppercase;
  font-weight: 700;
  padding-left: 50px;
`;

export const ConfirmationContainer = styled.div`
  padding: 80px 0;
  font-weight: 600;
  text-align: center;
`;