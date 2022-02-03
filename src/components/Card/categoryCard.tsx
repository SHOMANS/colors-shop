import { Image } from "..";
import { IGetAllCategory } from "../../redux/Product/type";
import Typography from "../Typography";
import {
  Content,
  CategoryoneImage,
  CategoryImage,
  Images,
  CateLink,
} from "./cardStyles";

const CategoryCard = ({ image, name }: IGetAllCategory) => {
  return (
    <CategoryImage>
      <CategoryoneImage>
        <Images src={image} />
      </CategoryoneImage>
      <Content margin="10px auto">
        <Typography>
          <CateLink to={`/category/${name}`}>{name}</CateLink>
        </Typography>
      </Content>
    </CategoryImage>
  );
};

export default CategoryCard;
