import React from "react";
import styled from "styled-components";
import Img from "../utils/images/Header.png";
import { category } from "../utils/data";
import ProductCategoryCard from "../components/card/ProductCategoryCard";

const Container = styled.div`
  padding: 20px 30px;
  padding-bottom: 200px;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  @media (max-width: 768px) {
    padding: 20px 12px;
  }
  background: ${({ theme }) => theme.bg};
`;
const Section = styled.div`
  max-width: 1400px;
  padding: 32px 16px;
  display: flex;
  flex-direction: column;
  gap: 28px;
`;
const Title = styled.div`
  font-size: 28px;
  font-weight: 500;
  display: flex;
  justify-content: ${({ center }) => (center ? "center" : "space-between")};
  align-items: center;
`;
const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
`;
const Home = () => {
  return (
    <Container>
      <Section>
        <img
          src={Img}
          alt="Header"
          className="h-[700px] w-[100%] max-w-[1200px] object-cover"
        />
      </Section>
      <Section>
        <Title>Shop by categories</Title>
        <CardWrapper>
          {category.map((category, index) => (
            <ProductCategoryCard key={index} category={category} />
          ))}
        </CardWrapper>
      </Section>
      <Section>
        <Title center>Our Bestseller</Title>
      </Section>
    </Container>
  );
};

export default Home;
