import React from 'react';

export type ItemProps = {
    label?: string;
    onClick?: React.MouseEventHandler;
    hover?: boolean;
    hasLeftArrow?: boolean;
}
