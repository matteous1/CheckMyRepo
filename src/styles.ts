import styled from 'styled-components';
import {
  fontSizePalette,
  fontFamily,
  colorPalette,
} from './utils/styleConstants';

export const Wrapper = styled.div`
  font-family: ${fontFamily};
  font-size: ${fontSizePalette.large};
  padding: 25px;
`;

export const Header = styled.div`
  font-size: ${fontSizePalette.medium};
  font-weight: 600;
`;

export const Link = styled.span`
  color: ${colorPalette.grey};
  cursor: pointer;
`;