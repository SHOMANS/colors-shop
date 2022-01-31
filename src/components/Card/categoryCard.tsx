import { Image } from "..";
import { IGetAllCategory } from "../../redux/Product/type";
import Typography from "../Typography";
import {
  Content,
  Category,
  ContentAction,
  MainCard,
  CategoryoneImage,
  CategoryImage,
  Images,
} from "./cardStyles";

const CategoryCard = ({ image, name }: IGetAllCategory) => {
  return (
    <Category>
      <CategoryImage>
        <ContentAction padding="0rem">
          <CategoryoneImage>
            <Images src={image} />
          </CategoryoneImage>
        </ContentAction>
        <Content margin="10px auto">
          <h4>{name}</h4>
        </Content>
      </CategoryImage>
    </Category>
  );
};

export default CategoryCard;
