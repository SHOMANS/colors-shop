import { FC, ReactNode } from 'react';
import { IProps, Wrapper } from './style';

interface IContainerProps extends IProps {
  children: ReactNode;
}

const index: FC<IContainerProps> = ({ children, ...rest }) => {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

export default index;
