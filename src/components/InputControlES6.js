/**
 * Created by eCRF on 2018/5/9.
 */
import React, { Component } from 'react';
import propTypes from 'prop-types';

class InputControlES6 extends React.Component {
    constructor(props) {
        super(props);
        // 设置 initial state
        this.state = {
            text: props.initialValue || 'placeholder'
        };

        // ES6 类中函数必须手动绑定
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            text: event.target.value
        });
    }

    render() {
        return (
            <div>
                Type something:
                <input onChange={this.handleChange}
                       value={this.state.text} />
            </div>
        );
    }
}
//属性的配置
InputControlES6.propTypes = {
    initialValue:propTypes.string,

};
InputControlES6.defaultProps = {
    initialValue: ''
};
export default InputControlES6;