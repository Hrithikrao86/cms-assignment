import {
  Section,
  Container,
  Heading,
  SubHeading,
  Grid,
  Card,
  Icon,
  Title,
  Description,
} from "./FeaturesStyles";

const features = [
  {
    icon: "⚡",
    title: "Fast Performance",
    description:
      "Optimized React frontend and Express backend deliver a smooth, fast user experience."
  },
  {
    icon: "🔒",
    title: "Secure Authentication",
    description:
      "JWT-based authentication protects the admin dashboard and content management."
  },
  {
    icon: "📝",
    title: "Dynamic Pages",
    description:
      "Create, edit, publish, and manage pages instantly without changing code."
  },
  {
    icon: "📱",
    title: "Responsive Design",
    description:
      "Looks great on desktops, tablets, and mobile devices."
  },
  {
    icon: "☁️",
    title: "Cloud Ready",
    description:
      "Deploy easily on platforms like Vercel, Render, or Railway."
  },
  {
    icon: "🚀",
    title: "Easy to Scale",
    description:
      "Well-structured codebase that is easy to extend with blogs, media, and users."
  },
];

function Features() {
  return (
    <Section>
      <Container>
        <Heading>Why Choose Our CMS?</Heading>

        <SubHeading>
          Everything you need to build and manage content efficiently.
        </SubHeading>

        <Grid>
          {features.map((feature, index) => (
            <Card key={index}>
              <Icon>{feature.icon}</Icon>

              <Title>{feature.title}</Title>

              <Description>{feature.description}</Description>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}

export default Features;