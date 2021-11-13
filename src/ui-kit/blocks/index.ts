import styled from 'styled-components';
import { BoxType, FlexType } from './types';

export const Box = styled.div<BoxType>`
    ${(props) => (!!props.bg ? `background-color: ${props.bg}` : '')};
    ${(props) => (!!props.width ? `width: ${props.width}` : '')};
`;

export const Flex = styled(Box)<FlexType>`
    display: flex;
    ${(props) => (!!props.justify ? `justify-content: ${props.justify}` : '')}
`;
