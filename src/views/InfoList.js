import React from 'react';
import { Text, View, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import SortableListView from 'react-native-sortable-listview';
import Icon from 'react-native-ionicons';
import styles from './styles';

import NewInfoPrompt from '../components/NewInfoPrompt';

let data = {
    hello: { text: 'world' },
    how: { text: 'are you' },
}

let order = Object.keys(data) //Array of keys

export default class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            promptVisible: false,
            message: '',
        };
    }
    render() {
        const { navigate } = this.props.navigation;
        const { promptVisible, message } = this.state;
        return <View style={{height:'100%'}}>
            <InfoList navigation={navigate} />
            <NewInfoPrompt
                visible={promptVisible}
                onCancel={() => this.setState({
                    promptVisible: false,
                })}
                onSubmit={(value) => this.setState({
                    promptVisible: false,
                    message: "ata",
                })}
                message={message}
                />
            <TouchableOpacity
                style={styles.plusButton}
                onPress={() => this.setState({ promptVisible: true })}
                >
                <Icon name={"ios-add"} size={30} color="#01a699" />
            </TouchableOpacity>
        </View>
    }
}

class InfoList extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
                <SortableListView
                    style={{ flex: 1 }}
                    data={data}
                    order={order}
                    onRowMoved={e => {
                        order.splice(e.to, 0, order.splice(e.from, 1)[0])
                        this.forceUpdate()
                    }}
                    renderRow={row => <RowComponent data={row} />}
                    />
        );
    }
}

class RowComponent extends React.Component {
    render() {
        return (
            <TouchableHighlight
                underlayColor={'#eee'}
                style={{
                    padding: 25,
                    backgroundColor: '#F8F8F8',
                    borderBottomWidth: 1,
                    borderColor: '#eee',
                }}
                {...this.props.sortHandlers}
            >
                <Text>{this.props.data.text}</Text>
            </TouchableHighlight>
        )
    }
}
