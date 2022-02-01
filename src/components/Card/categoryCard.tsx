import { Image } from "..";
import { IGetAllCategory } from "../../redux/Product/type";
import Typography from "../Typography";
import { Content, CategoryoneImage, CategoryImage, Images } from "./cardStyles";

const CategoryCard = ({ image, name }: IGetAllCategory) => {
  return (
    <CategoryImage>
      <CategoryoneImage>
        <Images src={image} />
      </CategoryoneImage>
      <Content margin="10px auto">
        <h4>{name}</h4>
      </Content>
    </CategoryImage>
  );
};

export default CategoryCard;
