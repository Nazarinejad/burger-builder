import React from 'react';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';

const Layout = (props) => (
    <Auxiliary>
        <div style={{paddingTop:'30px'}}></div>
        <main>
            {props.children}
        </main>
    </Auxiliary>
);

export default Layout;