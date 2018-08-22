import React from 'react';
import Prompt from 'react-native-prompt';

export default class NewInfoPrompt extends React.Component {
    render() {
        return <Prompt
            title="Say something"
            placeholder="Start typing"
            defaultValue="Hello"
            visible={ this.props.visible }
            onCancel={ this.props.onCancel }
            onSubmit={ this.props.onSubmit }
            />
    }
}