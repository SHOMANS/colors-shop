import { FaUserAlt } from 'react-icons/fa';
import { GrCart } from 'react-icons/gr';
import { BsFillBookmarkFill } from 'react-icons/bs';
import { IContainerProps } from '../Container/interface';
import { ContainerWrapper } from '../Container/style';
import Icon from '../Icon';

export const Navbar: React.FC<IContainerProps> = () => {
  return (
    <ContainerWrapper
      height="85px"
      backgroundColor="#242424"
      flexDirection="row"
      children={
        <Icon icon={[<FaUserAlt />, <GrCart />, <BsFillBookmarkFill />]} />
      }
    />
  );
};
