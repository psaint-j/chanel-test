import * as React from 'react';
import Item from './item';


type props = {
    goNext: React.MouseEventHandler;
    item: any;
    hasChildren: boolean;
}

const MenuItem: React.FC<props> = ({item, goNext, hasChildren}) => {

    return (
        <Item 
            onClick={hasChildren ? () => goNext(item) :  null}
            label={item.label}
            hover
        />
    )
}

export default MenuItem;