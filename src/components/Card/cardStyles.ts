import styled, { CSSProperties } from 'styled-components';
import {
  IstyleMainCard,
  IcontentProp,
  IheaderProps,
  IactionProps,
} from './interface';

export const MainCard = styled('div')<IstyleMainCard>(
  ({
    alignItems = 'baseline',
    alignContent = 'baseline',
    boxShadow = '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    width = '25%',
    margin = '20px auto',
    padding = 'none',
    ...props
  }: IstyleMainCard) => ({
    position: 'relative',
    alignItems: `${alignItems}`,
    alignContent: `${alignContent}`,
    boxShadow: `${boxShadow}`,
    transition: '0.3s',
    width: `${width}`,
    margin: `${margin}`,
    padding: `${padding}`,
    display: 'flex',
    flexDirection: `${(props.flexDirection as 'row') || ('column' as const)}`,
    borderRadius: `${props.borderRadius || '10px'}`,
    backgroundColor: `${props.backgroundColor || 'none'}`,
  }),
);

export const Content = styled('div')<IcontentProp>(
  ({
    padding = '0',
    width = 'none',
    height = 'none',
    maxHeight = '60%',
    margin = '5px auto',
  }: // ...props
  IcontentProp) => ({
    display: 'flex',
    padding: `${padding}`,
    width: `${width}`,
    height: `${height}`,
    maxHeight: `${maxHeight}`,
    margin: `${margin}`,
  }),
);

export const Header = styled('div')(
  ({
    height = '50px',
    width = '100%',
    padding = '10px',
  }: // ...props
  IheaderProps) => ({
    display: 'flex',
    height: `${height}`,
    width: `${width}`,
    padding: `${padding}`,
  }),
);

export const Action = styled('div')<IactionProps>(
  ({ padding = '10px', width = '100%' }: IactionProps) => ({
    display: 'flex',
    flexDirection: 'row' as const,
    padding: `${padding}`,
    width: `${width}`,
    boxSizing: 'border-box',
  }),
);

export const ContentAction = styled.div<CSSProperties>(
  ({
    padding = 'none',
    width = '100%',
    height = 'none',
    border = 'none',
    margin = '5px auto',
  }) => ({
    display: 'flex',
    flexDirection: 'row',
    padding: `${padding}`,
    width: `${width}`,
    height: `${height}`,
    border: ` ${border}`,
    margin: `${margin}`,
    cursor: 'pointer',
  }),
);

export const Discount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: #fc4059 0% 0% no-repeat padding-box;
  width: 87px;
  height: 87px;
  position: absolute;
  right: 10px;
  top: 15px;
`;
