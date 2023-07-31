import SolutionCard from "../SolutionCard";
import { Above, Below, CardBlock, Container, 
  Description, InfoBlock, SingupBtn, 
  Subtitle, Title } from "./style";

export default function Informational() {
 
  return(
    <Container>
      <CardBlock>
        <Above>
          <SolutionCard />
          <SolutionCard />
        </Above>

        <Below>
          <SolutionCard />
          <SolutionCard />
        </Below>

      </CardBlock>

      <InfoBlock>
        <Title>Lorem ipsum</Title>
        <Subtitle>Lorem ipsum</Subtitle>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut 
          aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
        </Description>
        <SingupBtn >Sign up now</SingupBtn>
      </InfoBlock>
    </Container>
  )
}