import React from 'react';
import Header from './header';
import Sidebar from '../../containers/sideBar'

function layout(props) {
  return (
      <div>
          <Header/>
          <div style={{display:"flex"}}>
            <div style={{flexBasis:"10%", flexGrow:1, height:"50rem"}}>
                <Sidebar/>
            </div>
            <div style={{flexBasis:"80%", flexGrow:1}}>
                {props.children}
            </div>
          </div>
      </div>
  );
}

export default layout;
