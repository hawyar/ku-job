import React from "react";
import styled from "styled-components";
import TextLoop from "react-text-loop";

const Landing = () => {
  const jobFields = [
    "Engineering",
    "Finanace",
    "Business",
    "Education",
    "Petrolium",
  ];

  const listItem = jobFields.map((e) => <span>{e}</span>);
  return (
    <div>
      <Wrapper>
        <div>
          <TextWrapper>
            <JumboHeader>
              Start your career in <TextLoop>{listItem}</TextLoop> <br />
              with one resume.
            </JumboHeader>
          </TextWrapper>
          <ParaWrapper>
            Start your career with our auto-generated resume. Apply to thousands
            of jobs across different fields. Start your career with our
            auto-generated resume.
          </ParaWrapper>
        </div>
        <ImageWrapper />
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  padding: 0;
  margin: 50px auto;
  display: flex;
  justify-content: space-between;
`;

const TextWrapper = styled.div`
  width: 570px;
`;

const JumboHeader = styled.h1`
  font-size: 4.7rem;
  font-weight: 900;
  letter-spacing: -0.3rem;
  margin: 20px 0px;
  line-height: 5rem;
  color: #ea9a96;

  span {
    color: #e5e5e5;
  }
`;

const ParaWrapper = styled.p`
  margin: 40px 0;
  width: 65%;
  font-size: 18px;
  line-height: 24px;
`;

const ImageWrapper = styled.div`
  box-shadow: 10px 10px 66px 0px rgba(0, 0, 0, 0.2);
  width: 625px;
  height: 540px;
  border-radius: 5px;
  background-image: url("https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover; /* Resize the background image to cover the entire container */
`;
export default Landing;
