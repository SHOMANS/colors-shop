import styled from "styled-components";

interface IDividerProps {
  width?: string;
  thick?: string;
  color?: string;
  margin?: string;
}

const Divider = styled("hr")<IDividerProps>(
  ({
    width = "100%",
    thick = "0",
    margin = "0px",
    ...props
  }: IDividerProps) => ({
    margin: `${margin}`,
    width: `${width}`,
    height: `${thick}`,
    backgroundColor: `${(props) => props.theme.colors.primary}`,
    borderRadius: "4px",
  })
);

export default Divider;
