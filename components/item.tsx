import styled, {css} from 'styled-components';
import React, {FC} from 'react';
import {ItemProps} from './item.type'


const Arrow = styled.div`
    &:before {
        content: '→';
    }
    color: #b9babb;
    &:hover {
        color: #000;
    }
    ${(props: {isLeft?: boolean}) => props.isLeft && css`
        transform: rotate(-180deg);
    `
    }
`

const StyledItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: auto;
    padding: 1em;
    color: #333;
    ${(props: {hover?: boolean}) => props.hover && css`
        &:hover {
            background: #5ac8fa40;
            ${Arrow}{
                color: #000;
            }
        }
    `
    }
    font-size: 14px;
`

const Item: FC<ItemProps> = ({label, onClick, hasLeftArrow, hover}) => (
    <StyledItem onClick={onClick} hover={hover}>
        {hasLeftArrow && <Arrow isLeft />}
            {label}
         {onClick && !hasLeftArrow && <Arrow />}
    </StyledItem> 
)

export default Item;