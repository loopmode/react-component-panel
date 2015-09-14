import css from './PanelDemo.scss';
import React, {Component} from 'react';
import Panel from './Panel';
export default class PanelDemo extends Component {
    render() {
        return (
            <div className={css.PanelDemo}>
                <Panel title='A Panel with a title'>
                    Wtf yay!
                </Panel>
                <Panel title='A Panel with styles' style={{borderColor: '#333', color: '#333', backgroundColor: '#444', fontWeight: 'bold'}} headerStyle={{color: '#DDD', fontWeight: 'normal'}}>
                    Wtf yay!
                </Panel>
                <Panel title='A Panel with a custom header renderer' renderCustomHeader={(props) => this.renderCustomHeader(props)}>
                    Wtf yay!
                </Panel>
            </div>
        );
    }
    renderCustomHeader(props) {
        return <header>
            <h4><i>{props.title}</i></h4>
        </header>;
    }
}
