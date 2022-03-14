import React from 'react';
import '../scssfile/list.scss'
import Item from './Item';

const List = (props) => {
  return (
    <div>
       {
             props.data.map((element1)=>{
                  return(
                      <Item element = {element1} />
                  );
                
             })
         }
    </div>
  );
}

export default List;
