import styled from 'styled-components';
import {
  fontSizePalette,
  fontFamily,
} from './utils/styleConstants';

export const Wrapper = styled.div`
  font-family: ${fontFamily};
  font-size: ${fontSizePalette.large};
  height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const SectionOne = styled.div`
  padding: 25px;
`;

export const SectionTwo = styled.div`
  padding: 25px;
  text-align: right;
`;

export const Header = styled.div`
  font-size: ${fontSizePalette.medium};
  font-weight: 600;
  padding: 40px 0;
`;

export const Footer = styled.div`
  font-size: ${fontSizePalette.medium};
  font-weight: 600;
  padding: 40px 0;
`;
