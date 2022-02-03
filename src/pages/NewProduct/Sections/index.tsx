import React from "react";
import { Button, Container } from "../../../components";
import ProductImages from "./ProductImages";
import ProductDetails from "./ProductDetails";
import { useTheme } from "styled-components";

const Sections = ({ formik }: any) => {
  const theme = useTheme();
  return (
    <Container direction="column" align-Items="flex-end" width="71%">
      <Container
        align-Items="flex-start"
        flex-wrap="wrap"
        background={theme.background.paper}
        border-radius="16px"
        padding="2em"
        margin-bottom="1em"
      >
        <ProductImages formik={formik} />
        <ProductDetails formik={formik} />
      </Container>
      <Button fontSize="1em" padding="1em" borderRadius="6px">
        Create New Product
      </Button>
    </Container>
  );
};

export default Sections;
