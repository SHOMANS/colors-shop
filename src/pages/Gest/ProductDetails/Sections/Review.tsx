import StarRatingComponent from "react-star-rating-component";
import { Container, Rating, Typography } from "../../../../components";
import UpdatedContainer from "../../../../components/UpdatedContainer";
import { IReview } from "../../../../redux/Product/type";
import { CardsSection, Padding, Review, Title } from "./style";

interface IProps {
  reviews: IReview[];
}
const ReviewSection = ({ reviews }: IProps) => {
  return (
    <Review>
      <Title>
        <Typography variant="h2" bold margin="0 1rem 0 0" font-Family="Mulish">
          Reviews
        </Typography>
      </Title>
      <Container
        flex-Wrap="wrap"
        justify-Content="space-between"
        border="1px solid #D7D7D7"
        box-Sizing="border-box"
      >
        {reviews.map((x, index) => {
          return (
            <Container direction="column" margin="1rem" key={index.toString()}>
              <Padding>
                <Typography variant="h3" margin="1rem" bold font-size="1rem">
                  {x.name}
                </Typography>
              </Padding>
              <Container direction="row" justify-Content="space-between">
                <Padding>
                  <StarRatingComponent
                    editing={false}
                    value={x.rating}
                    name="rate"
                  />
                </Padding>
                <Typography color="grey">{x.createdAt.slice(0, 10)}</Typography>{" "}
              </Container>{" "}
              <CardsSection>
                <Padding>
                  <Typography>{x.comment}</Typography>
                </Padding>
              </CardsSection>
            </Container>
          );
        })}
      </Container>
    </Review>
  );
};

export default ReviewSection;
