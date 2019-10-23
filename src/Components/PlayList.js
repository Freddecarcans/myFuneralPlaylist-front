import React from 'react';
import {
    SafeAreaView,
    TouchableOpacity,
    FlatList,
    StyleSheet,
    Text,
    TextInput,
    AsyncStorage
} from 'react-native';
import Constants from 'expo-constants';

const DATA = [
    {
        id: '',
        rang: '1',
        title: 'Track 1',
    },
    {
        id: '',
        rang: '2',
        title: 'Track 2',
    },
    {
        id: '',
        rang: '3',
        title: 'Track 3',
    },
    {
        id: '',
        rang: '4',
        title: 'Track 4',
    },
    {
        id: '',
        rang: '5',
        title: 'Track 5',
    },
    {
        id: '',
        rang: '6',
        title: 'Track 6',
    },
    {
        id: '',
        rang: '7',
        title: 'Track 7',
    },
    {
        id: '',
        rang: '8',
        title: 'Track 8',
    },
    {
        id: '',
        rang: '9',
        title: 'Track 9',
    },
    {
        id: '',
        rang: '10',
        title: 'Track 10',
    },
    
];

function Tracks({ id, title, selected, onSelect }) {
    
    return (
        <TouchableOpacity
            onPress={() => onSelect(id)}
            style={[
                styles.item,
                { backgroundColor: selected ? '#0052CC' : '#0099ff' },
            ]}
        >
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
}


export default function PlayList() {
    
    const [selected, setSelected] = React.useState(new Map());

    const onSelect = React.useCallback(
        id => {
            const newSelected = new Map(selected);
            newSelected.set(id, !selected.get(id));

            setSelected(newSelected);
        },
        [selected],
    );
        console.log(AsyncStorage.getItem('token'));
    

    return (
        <SafeAreaView style={styles.container}>
            <TextInput>Titre de ma Playlist</TextInput>
            <FlatList
                data={DATA}
                renderItem={({ item }) => (
                    <Tracks
                        id={item.rang}
                        title={item.title}
                        selected={!!selected.get(item.rang)}
                        onSelect={onSelect}
                    />
                )}
                keyExtractor={item => item.rang}
                extraData={selected}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "grey",
        marginTop: Constants.statusBarHeight,
    },
    item: {
        backgroundColor: "#0099ff",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 20,
    },
});
