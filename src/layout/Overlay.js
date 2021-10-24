import { Container, TopLeft, BottomLeft, BottomRight, Hamburger } from './styles';

export default function Overlay() {
  return (
    <Container>
      <TopLeft>
        <h1>
          LANDING
          <br />
          PAGE —
        </h1>
        <p>In React & Threejs —</p>
      </TopLeft>
      <BottomLeft>powered by <a href="https://github.com/pmndrs/react-three-fiber">React-Three-Fiber</a></BottomLeft>
      <BottomRight>
        Inspiration and ideas
        <br />
        Fundamentals
        <br />
        Finding models
        <br />
        Preparing them for the web
        <br />
        Displaying and changing models
        <br />
        Animation fundamentals
        <br />
        Effects and making things look good
        <br />
        Performance and time to load
        <br />
      </BottomRight>
      <Hamburger>
        <div />
        <div />
        <div />
      </Hamburger>
    </Container >
  );
}
