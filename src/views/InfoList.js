import React from 'react';
import { Text, View, Image, TouchableHighlight, TouchableOpacity, AsyncStorage } from 'react-native';
import { Button } from 'react-native-elements';
import SortableListView from 'react-native-sortable-listview';
import Icon from 'react-native-ionicons';
import styles from './styles';

import NewInfoPrompt from '../components/NewInfoPrompt';

export default class InfoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            promptVisible: false,
            message: '',
            list: [ "hello", "how" ],
        };
    }
    render() {
        const { navigate } = this.props.navigation;
        const { promptVisible, message, list } = this.state;
        return <View style={{height:'100%'}}>
            <InformationsList
                navigation={navigate} 
                list={list}/>
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

function persistList(newValue) {

}

class InformationsList extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
                <SortableListView
                    style={{ flex: 1 }}
                    data={this.props.list}
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
                style={styles.listRow}
                {...this.props.sortHandlers}
            >
                <Text>{this.props.data}</Text>
            </TouchableHighlight>
        )
    }
}
