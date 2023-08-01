import React, { useState } from "react";
import { Container } from "../../globalStyle.styled";
import {
  NumberFlex,
  Numbers,
  NumberSy,
  ScoreBox,
  ScoreText,
} from "./Number.styled";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

export default function Number() {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <>
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <NumberSy>
          <Container>
            <NumberFlex>
              <ScoreBox>
                <Numbers>
                  {counterOn && (
                    <CountUp start={0} end={7} duration={1} delay={0} />
                  )}
                </Numbers>
                <ScoreText>yillik tajriba</ScoreText>
              </ScoreBox>
              <ScoreBox>
                <Numbers>
                  {counterOn && (
                    <CountUp start={0} end={10} duration={1} delay={0} />
                  )}{" "}
                  k+
                </Numbers>
                <ScoreText>mamnun mijozlar</ScoreText>
              </ScoreBox>
              <ScoreBox>
                <Numbers>
                  {counterOn && (
                    <CountUp start={0} end={10} duration={1} delay={0} />
                  )}
                </Numbers>
                <ScoreText>yillik kafolat</ScoreText>
              </ScoreBox>
              <ScoreBox>
                <Numbers>
                  {counterOn && (
                    <CountUp start={0} end={3} duration={1} delay={0} />
                  )}
                </Numbers>
                <ScoreText>kunda yetkazish</ScoreText>
              </ScoreBox>
            </NumberFlex>
          </Container>
        </NumberSy>
      </ScrollTrigger>
    </>
  );
}
