import {
  HeroSection,
  Content,
  Badge,
  Title,
  Subtitle,
  Buttons,
  PrimaryButton,
  SecondaryButton,
} from "./HeroStyles";

function Hero() {
  return (
    <HeroSection>
      <Content>
        <Badge>🚀 Modern Content Management System</Badge>

        <Title>
          Build, Manage & Publish Your Website Easily
        </Title>

        <Subtitle>
          A secure CMS built with React, Express, MongoDB,
          and JWT Authentication. Create dynamic pages,
          publish content, and manage everything from one
          powerful dashboard.
        </Subtitle>

        <Buttons>
          <PrimaryButton>Get Started</PrimaryButton>
          <SecondaryButton>Learn More</SecondaryButton>
        </Buttons>
      </Content>
    </HeroSection>
  );
}

export default Hero;