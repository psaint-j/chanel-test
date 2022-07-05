import {ItemProps} from './item.type'

export type MenuItemType = {
    id: number,
    label: string,
    children?: [MenuItemType]
}

export type ListItemProps = {
    json: any;
}