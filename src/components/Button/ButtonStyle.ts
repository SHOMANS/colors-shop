import styled from 'styled-components';
import { IStyleButton } from './IStyleButton';

const ButtonStyle = styled.button<IStyleButton>(
  ({
    width = 'none',
    height = 'none',
    padding = '16px 32px',
    borderRadius = '10px',
    border = 'none',
    fontWeight = 'bold',
    background,
    color = '#242424',
    fontSize = '16px / 220px',
    cursor = 'pointer',
    letterSpace = '0px',
    margin = 'none',
    ...props
  }) => ({
    width: `${width}`,
    height: `${height}`,
    padding: `${padding}`,
    borderRadius: `${borderRadius}`,
    border: `${border}`,
    fontWeight: `${fontWeight}`,
    background: `${background || props.theme.background?.lightGrey}`,
    color: `${color}`,
    fontSize: `${fontSize}`,
    cursor: `${cursor}`,
    letterSpacing: `${letterSpace}`,
    alignItems: 'baseline',
    margin: `${margin}`,
  }),
);

export const Button = styled(ButtonStyle)`
  &:hover {
    color: white;
    background: #bfa90d;
  }
`;
