import { Rating } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { FavoriteRounded } from "@mui/icons-material";
import Button from "../components/Button";

const Container = styled.div`
  width: 100%;
  height: 99%;
  overflow-y: scroll;
`;
const Wrapper = styled.div`
  flex: 1;
  max-width: 1400px;
  display: flex;
  width: 100%;
  padding: 12px;
  gap: 32px;
  @media (max-width: 750px) {
    flex-direction: column;
    justify-content: center;
  }
`;
const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
  height: 600px;
  border-radius: 12px;
  @media (max-width: 750px) {
    height: 400px;
  }
`;

const Details = styled.div`
  display: flex;
  gap: 18px;
  flex-direction: column;
  padding: 4px 10px;
  flex: 1;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;
const Desc = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary};
`;
const Name = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary};
`;
const Price = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 22px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
`;
const Span = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary + 60};
  text-decoration: line-through;
  text-decoration-color: ${({ theme }) => theme.text_secondary + 50};
`;
const Percent = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: green;
`;

const Sizes = styled.div`
  font-size: 18px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media (max-width: 750px) {
    flex-direction: row;
  }
`;
const Items = styled.div`
  display: flex;
  gap: 12px;
`;
const Item = styled.div`
  border: 1px solid ${({ theme }) => theme.primary};
  font-size: 14px;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ selected, theme }) =>
    selected &&
    `
  background: ${theme.primary};
  color: white;
  `}
`;
const ButtonWrapper = styled.div`
  display: flex;
  gap: 16px;
  padding: 32px 0px;
`;
const ProductDetails = () => {
  return (
    <Container>
      <Wrapper>
        <ImageWrapper>
          <Image src="https://jaxsonmaximus.com/cdn/shop/files/ARI9100.ARW_compressed.jpg?v=1725391508" />
        </ImageWrapper>
        <Details>
          <div>
            <Title>Title</Title>
            <Name>Name</Name>
          </div>
          <Rating value={3.5} />
          <Price>
            $120 <Span>$200</Span>
            <Percent>40% off</Percent>
          </Price>
          <Desc>Product Desc</Desc>
          <Sizes>
            <Item selected>S</Item>
            <Item>L</Item>
            <Item>Xl</Item>
          </Sizes>
          <ButtonWrapper>
            <Button text="Add to Cart" full outlined />
            <Button text="Buy Now" full />
            <Button
              leftIcon={
                <FavoriteRounded sx={{ fontSize: "22px", color: "red" }} />
              }
              full
              outlined
            />
          </ButtonWrapper>
        </Details>
      </Wrapper>
    </Container>
  );
};

export default ProductDetails;