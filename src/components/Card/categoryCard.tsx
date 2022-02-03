import { Link } from "react-router-dom";
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
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={`/category/${name}`}
        >
          <Typography> {name}</Typography>
        </Link>
      </Content>
    </CategoryImage>
  );
};

export default CategoryCard;
