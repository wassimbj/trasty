import React from 'react';
import Icon from 'spectrum-icons';
import {
  Card, CardsContainer, CardWrapper, P, Purpose, Wrapper, HomeTitle,
} from '../style';

export default function HowWeHelp() {
  return (
    <Wrapper>
      <HomeTitle> How can we help ? </HomeTitle>
      <CardsContainer>
        <CardWrapper>
          <Card to="/post/needs" bg="#2650ff" shadowcolor="rgb(38,80,255,0.45)">
            <P><Icon glyph="plus" size={40} /></P>
            <P>I didn&apos;t </P>
            <P>find a Traveler</P>
            <Purpose>
              Post your Needs
              <Icon className="goIcon" glyph="view-forward" size={25} style={{ display: 'inline-block' }} />
            </Purpose>
          </Card>
        </CardWrapper>
        <CardWrapper>
          <Card to="/travelers" bg="#072448" shadowcolor="rgb(7,36,72,0.45)">
            <P><Icon glyph="send" size={40} /></P>
            <P>I have</P>
            <P>something to ship</P>
            <Purpose>
              Find a Traveler
              <Icon className="goIcon" glyph="view-forward" size={25} style={{ display: 'inline-block' }} />
            </Purpose>
          </Card>
        </CardWrapper>
        <CardWrapper>
          <Card to="/shippers" bg="#07bb9c" shadowcolor="rgb(7,187,156,0.45)">
            <P><Icon glyph="friend" size={40} /></P>
            <P>Im traveling </P>
            <P>with extra luggage</P>
            <Purpose>
              Find a Shipper
              <Icon className="goIcon" glyph="view-forward" size={25} style={{ display: 'inline-block' }} />
            </Purpose>
          </Card>
        </CardWrapper>
        <CardWrapper>
          <Card to="/post/travel" bg="#ff6150" shadowcolor="rgb(255,97,80,0.45)">
            <P><Icon glyph="rep" size={40} /></P>
            <P>I didn&apos;t </P>
            <P>find a Shipper</P>
            <Purpose>
              List your Travel
              <Icon className="goIcon" glyph="view-forward" size={25} style={{ display: 'inline-block' }} />
            </Purpose>
          </Card>
        </CardWrapper>
      </CardsContainer>
    </Wrapper>
  );
}
