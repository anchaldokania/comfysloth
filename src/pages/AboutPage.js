import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="nice desk" />
        <article>
          <div className="title">
            <h2>Our Story</h2>
            <div className="underline"></div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            delectus aut eos. Impedit aliquid assumenda officia dicta commodi
            inventore veritatis quidem magni est, ratione a modi, exercitationem
            at odit. Consectetur provident itaque perferendis ipsum harum
            tempore magni perspiciatis libero, et soluta alias fuga nihil odit
            ducimus ipsa eius repellat neque quia inventore illum similique ut
            modi. Id eaque incidunt ipsum, tempora corporis quia cupiditate cum
            animi quas perferendis optio voluptatum. Eaque inventore, ullam
            voluptatem minus qui id facere velit sint.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
