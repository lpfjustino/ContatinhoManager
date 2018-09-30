import { StyleSheet } from 'react-native';
import { colors } from '../styles';

const styles = StyleSheet.create({
    plusButton: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: 40,
        height: 40,
        backgroundColor: colors.darkblue,
        borderRadius: 40,
        alignSelf: 'flex-end',
        marginBottom: 15,
        marginRight: 15,
    },
    listRow: {
        padding: 25,
        backgroundColor: '#F8F8F8',
        borderBottomWidth: 1,
        borderColor: '#eee',
    },
});

export default styles;