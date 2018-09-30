import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import SortableListView from 'react-native-sortable-listview';
import Icon from 'react-native-ionicons';

import NewInfoPrompt from './components/NewInfoPrompt';

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
                style={{
                    borderWidth: 1,
                    borderColor: 'rgba(0,0,0,0.1)',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    width: 40,
                    height: 40,
                    backgroundColor: '#fff',
                    borderRadius: 40,
                    alignSelf: 'flex-end',
                    marginBottom: 15,
                    marginRight: 15,
                }}
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
