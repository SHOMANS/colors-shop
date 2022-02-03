import { useState } from "react";
import { useSelector } from "react-redux";
import StarRatingComponent from "react-star-rating-component";
import { Button, Container, Typography } from "../../../../components";

import { IUser } from "../../../../redux/Auth/type";
import { IReview } from "../../../../redux/Product/type";
import { AppState } from "../../../../redux/store";
import { useToken } from "../../../../utils/helper/useToken";
import AddReview from "./AddReview";
import { CardsSection, Padding, Review, Title } from "./style";

interface IProps {
  reviews: IReview[];
  productById: string;
}
const ReviewSection = ({ reviews, productById }: IProps) => {
  const [uploadImagedModalDisplay, setUploadImagedModalDisplay] =
    useState<boolean>(false);
  const user: IUser = useToken();

  const handleOpenReviewDialog = () => {
    setUploadImagedModalDisplay(true);
  };
  const { auth } = useSelector((state: AppState) => state);
  console.log(auth);
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
        {user.isAdmin && (
          <Button
            brand
            padding=".8em"
            width="15em"
            margin="1rem"
            onClick={handleOpenReviewDialog}
          >
            Add Review
          </Button>
        )}

        {uploadImagedModalDisplay && (
          <AddReview
            productId={productById}
            // rate={Math.round(props.rating)}
            modalDisplay={uploadImagedModalDisplay}
            setModalDisplay={setUploadImagedModalDisplay}
          />
        )}
      </Container>
    </Review>
  );
};

export default ReviewSection;
