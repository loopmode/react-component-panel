import React from 'react';

import PanelDemo from './Panel/PanelDemo';

const element = document.createElement('div');


React.render(<div>
    <PanelDemo />
</div>, element);
document.body.appendChild(element);
