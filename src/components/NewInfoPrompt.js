import React from 'react';
import Prompt from 'react-native-prompt';

export default class NewInfoPrompt extends React.Component {
    render() {
        const { visible, onCancel, onSubmit } = this.props;
        return <Prompt
            title="Say something"
            placeholder="Start typing"
            defaultValue="Hello"
            visible={ visible }
            onCancel={ onCancel }
            onSubmit={ onSubmit }
            />
    }
}