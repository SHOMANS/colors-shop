import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { Icon } from '..';
import { Button } from '../Button/ButtonStyle';

const Count = styled.div`
  width: 8rem;
  height: 1.8rem;
  display: flex;
  flex-direction: row;
`;

const Value = styled.div`
  width: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #eeeeee;
`;

const Counter: React.FC<objectType> = ({
  max,
  min = 1,
  onFinish,
  value = 1,
  handleIncrease,
  handleDecrease,
}) => {
  const [number, setNumber] = useState(value);
  const increase = () => {
    if (number > max && number > 1) {
      return;
    }
    setNumber(prev => {
      onFinish(prev + 1);
      return prev + 1;
    });
    handleIncrease();
  };

  const decrease = () => {
    if (number > max && number < 1) {
      return;
    }
    setNumber(prev => {
      onFinish(prev - 1);
      return prev - 1;
    });
    handleDecrease();
  };

  return (
    <>
      <Count>
        <Button
          width="2rem"
          borderRadius="none"
          border="1px solid #FCDD06"
          background="#FFFFFF"
          padding="none"
          onClick={decrease}
          disabled={number === min}
        >
          <Icon icon={<AiOutlineMinus />} />
        </Button>
        <Value>{number}</Value>
        <Button
          width="2rem"
          borderRadius="none"
          border="1px solid #FCDD06"
          background="#FFFFFF"
          padding="none"
          onClick={increase}
          disabled={number === max}
        >
          <Icon icon={<AiOutlinePlus />} />
        </Button>
      </Count>
    </>
  );
};

export default Counter;
