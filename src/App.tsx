import { useState } from "react";
import {
  AnimatedText,
  Container,
  LoopingText,
  RadioSpeaker,
} from "./components";
import { ChannelProvider } from "./context/channel";
import type { Channel } from "./types";

const CHANNELS: Channel[] = [];

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <ChannelProvider channels={CHANNELS}>
      <Container>
        <RadioSpeaker />

        <LoopingText text="Meow meow nigga" />

        <AnimatedText
          interval={20}
          text="First text..."
          onComplete={() => setCounter(counter + 1)}
        />

        {counter >= 1 && (
          <AnimatedText
            interval={100}
            text="Second text..."
            onComplete={() => setCounter(counter + 1)}
          />
        )}

        {counter >= 2 && (
          <AnimatedText
            interval={50}
            text="Third text..."
            onComplete={() => setCounter(counter + 1)}
          />
        )}
      </Container>
    </ChannelProvider>
  );
};

export default App;
