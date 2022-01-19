import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { InputFile, WarperFileBox } from '../checkBox/style';

interface Props {
  name?: string;
  label: string;
  errors?: string;
  defaultValue?: boolean;
  placeholder?: string;
  value?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FileInput = ({ name, ...props }: Props) => {
  return (
    <WarperFileBox htmlFor={name}>
      <AiOutlinePlus size="40px" />
      <InputFile
        onChange={props.onChange}
        id={name}
        // name={name}
        multiple={false}
      />
    </WarperFileBox>
  );
};
