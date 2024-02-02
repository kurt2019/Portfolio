import {theme} from "./Theme";

type FontPropsType = {
    family?: string
    weight?: number
    color?: string
    lineHeight?: string
    Fmin?: number
    Fmax?: number
}

export const font = ({family, weight, color, lineHeight, Fmin, Fmax}: FontPropsType) => `
    font-family: ${family || "Montserrat"};
    font-weight: ${weight || 600};
    color: ${color || theme.colors.mainFont};
    line-height:  ${lineHeight || 1.1};
    font-size: calc( (100vw - 360px)/(1440 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`