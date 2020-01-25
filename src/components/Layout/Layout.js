import React from 'react';

import Aux from '../../hoc/ReactAux';

import layoutCss from './Layout.css';

console.log(layoutCss);

const layout = (props) => (
    <Aux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className="Content">
            { props.children }
        </main>
    </Aux>
);

export default layout;