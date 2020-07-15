import React, { useState } from 'react'
import profileIcon2 from '../../assets/img/profile_icon.jpg'
import apps from '../../json/AppsAction.json'   

const AppsAction = () => {
    const initialDnDState = {
        draggedFrom: null,
        draggedTo: null,
        isDragging: false,
        originalOrder: [],
        updatedOrder: []
        }
    
    const [dragAndDrop, setDragAndDrop] = useState( initialDnDState );
    
    const [list, setList] = useState(apps);
    
    const onDragStart = (event) => {
            const initialPosition = Number(event.currentTarget.dataset.position);
        
        setDragAndDrop({
            ...dragAndDrop, 
        
            draggedFrom: initialPosition, 
            isDragging: true, 
            originalOrder: list 
        });

        event.dataTransfer.setData("text/html", '');
        }
        
    const onDragOver = (event) => {
        event.preventDefault();
    
        let newList = dragAndDrop.originalOrder;
    
        const draggedFrom = dragAndDrop.draggedFrom; 
    
        const draggedTo = Number(event.currentTarget.dataset.position); 
    
        const itemDragged = newList[draggedFrom];
    
        const remainingItems = newList.filter((apps, index) => index !== draggedFrom);
    
        // update the list 
        newList = [
        ...remainingItems.slice(0, draggedTo),
        itemDragged,
        ...remainingItems.slice(draggedTo)
        ];
    
        if (draggedTo !== dragAndDrop.draggedTo){
            setDragAndDrop({
            ...dragAndDrop,

            updatedOrder: newList, 
            draggedTo: draggedTo
            })
        }
    }
        
    const onDrop = (event) => {
        setList(dragAndDrop.updatedOrder);
    

        setDragAndDrop({
            ...dragAndDrop,
            draggedFrom: null,
            draggedTo: null,
            isDragging: false
        });
    }

    return (
        <div className='aplications_interfase'>
            <div className='box_aplication'>
                <ul className='list'>
                    <li className='items'
                        draggable='true' 
                        onDragStart={onDragStart}
                        onDragOver={onDragOver}
                        onDrop={onDrop}
                        data-position='1'
                    >
                        <a className='link'>
                            <div className='img_box'>
                                <img src={profileIcon2} className='img' style={ { backgroundSize: '64px', borderRadius: '50%' } } />
                            </div>
                            <span className='app_name'>Account</span>
                        </a>
                    </li>
                    {list.map((el, index) =>
                        <li 
                            key={index} 
                            className='items' 
                            draggable='true' 
                            onDragStart={onDragStart}
                            onDragOver={onDragOver}
                            onDrop={onDrop}
                            data-position={index}
                        >
                            <a className='link'>
                                <div className='img_box'>
                                    <span className='img' style={ { backgroundPosition: el.position, marginTop: el.margin } }></span>
                                </div>
                                <span className='app_name'>{el.app_name}</span>
                            </a>  
                        </li>    
                    )}
                </ul>     
                <div className='options_box'>
                    <a href='https://about.google/intl/en/products/?tab=rh' className='options_app'>More from Google</a>
                </div>                 
            </div>
        </div>
    )
}


  

export default AppsAction