import React, {useState, useRef, useEffect} from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import styled from 'styled-components';
import MenuItem from './menuItem';
import Item from './item'
import {ListItemProps, MenuItemType} from './listItem.type'


const Container = styled.ul`
    background: #f6f7f8;
    margin: 0px;
    padding: 0px;
    width: 100%;
`;

const CSSTransitionContainer = styled(CSSTransition)`
  text-align: center;
  background: #f6f7f8;
`

const StyledListItem = styled.div`
    position: relative;
    width: 100%;
    cursor: pointer;
    color: #333;
    overflow: hidden;
`

const ListItem: React.FC<ListItemProps> = ({json}) => {
    const {menu} = json; 
    const [itemsToShow, setItemsToShow] = useState(menu);
    const [itemsStack, setItemsStack] = useState([menu]);
    const [move, changeMove] = useState('next');
    const [id, setId] = useState(null);

    const setMenuItems = (
        newItemsToShow,
        newItemsStack,
        updatedMove,
        updatedId
      ) => {
        setItemsToShow(newItemsToShow);
        setItemsStack(newItemsStack);
        changeMove(updatedMove);
        setId(updatedId);
      };
    
      const goNext = (targetItem) => {
        if (targetItem.children && targetItem.children.length > 0) {
          const newItems = itemsToShow.find(
            (item) => item.label === targetItem.label
          );
    
          if (
            newItems !== undefined &&
            'children' in newItems &&
            newItems.children.length > 0
          ) {
            setMenuItems(
              newItems.children,
              [...itemsStack, itemsToShow],
              'next',
              Math.random().toString(36).substr(2, 9)
            );
          }
        }
      };
    
      const goPrevious = () => {
        const newItemsStack = [...itemsStack];
        const newItemsToShow = newItemsStack.pop();
    
        if (newItemsToShow !== undefined) {
            setMenuItems(
            newItemsToShow,
            newItemsStack,
            'prev',
            Math.random().toString(36).substr(2, 9)
          );
        }
      };


    return (
            <StyledListItem>
              <TransitionGroup childFactory={child => React.cloneElement(child, { classNames: move === 'next' ? "slideIn" : "slideOut"})}>
                <CSSTransitionContainer key={id} timeout={300}>
                    <Container>
                    {itemsStack.length > 1 && <Item hasLeftArrow onClick={() => goPrevious()}/>}
                    {itemsToShow.map((item: MenuItemType) => 
                        <MenuItem
                            item={item}
                            key={item.id}
                            goNext={goNext}
                            hasChildren={
                                item.hasOwnProperty('children') && item.children.length > 0
                            }
                        />)}
                    </Container>
                </CSSTransitionContainer>
              </TransitionGroup>
            </StyledListItem>
    )
}

export default ListItem;