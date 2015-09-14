import css from './Panel.scss';
import cx from 'classnames';
import React, {PropTypes} from 'react';

export default class Panel extends React.Component {
    static propTypes = {
        title: PropTypes.string,
        headerStyles: PropTypes.object,
        contentStyles: PropTypes.object,
        renderCustomHeader: PropTypes.func
    }
    static defaultProps = {
        title: null,
        style: {}
    }
    render() {
        const renderHeader = (this.props.renderCustomHeader || this.renderHeader).bind(this);
        const header = renderHeader(this.props);
        const content = this.renderContent();
        const className = cx(
            this.props.className,
            'Panel',
            css.Panel,
            {'no-header': header === null},
            {'no-content': content === null}
        );
        return (
            <div className={className}>
                {header}
                {content}
            </div>
        );
    }
    renderHeader() {
        const {title, headerStyle} = this.props;
        if (!title) { return null; }

        const {backgroundColor, border, borderColor, ...styles} = this.props.style;
        const style = {...styles, border, borderColor, backgroundColor, ...headerStyle};
        return (
            <header style={style}>
                {title}
            </header>
        );
    }
    renderContent() {
        const {children, bodyStyle} = this.props;
        if (!children) { return null; }
        const {backgroundColor, border, borderColor, ...styles} = this.props.style;
        const style = {...styles, border, borderColor, ...bodyStyle};
        return (
            <div style={style}>
                {children}
            </div>
        );
    }
}
