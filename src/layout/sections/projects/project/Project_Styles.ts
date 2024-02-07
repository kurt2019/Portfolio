import styled from "styled-components";
import {theme} from "../../../../styles/Theme";
import {font} from "../../../../styles/Common";
import {Button} from "../../../../components/Button";


const ItemProject = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  padding-left: 26px;

  @media ${theme.media.mobile} {
    padding-left: 10px;
  }

  li {
    padding: 8px 16px;
    border-radius: 4px;
    background: ${theme.lineGrad.first};
  }
`

// Project
const Card = styled.div`
  max-width: 522px;
  width: 100%;
  height: 100%;
  background-color: #222525;
  border-radius: 6px;

  @media ${theme.media.mobile} {
    max-width: 363px;
    margin: 0 auto;
  }
`

const Photo = styled.img`
  max-width: 522px;
  width: 100%;
  min-height: 388px;
  height: 100%;
  object-fit: cover;
  border-radius: 6px 6px 0 0;

  @media ${theme.media.mobile} {
    max-width: 363px;
    min-height: 300px;
  }
`

const Title = styled.h3`
  ${font({color: "#D9F2F2", lineHeight: "1.14"})};
  padding: 29px 0 11px 26px;
`

const Description = styled.p`
  ${font({weight: 400, lineHeight: "24px", Fmax: 16, Fmin: 16})};
  padding: 19px 9px 32px 26px;
`

const ImageWrapper = styled.div`
  position: relative;

  ${Button} {
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -40%);
    transition: ${theme.animations.transition};
    min-width: 50%;
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background: rgba(146, 225, 222, 0.3);
    backdrop-filter: blur(3px);
    opacity: 0;
    transition: ${theme.animations.transition};
  }

  &:hover {
    &::before {
      opacity: 1;
    }

    ${Button} {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
  }

  @media ${theme.media.tablet} {
    &::before {
      opacity: 1;
    }

    ${Button} {
      opacity: 1;
    }
  }
`

export const SPmin = {
    ItemProject,
    Card,
    Photo,
    Title,
    Description,
    ImageWrapper,
}