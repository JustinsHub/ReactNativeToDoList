import { Text, View } from "react-native";

const Flexbox = () => {
    return (
        <View style={{flexDirection: 'row', alignItems: 'stretch', minHeight: 300}}>
            <View style={{
                backgroundColor: 'red',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text>1</Text>
            </View>
            <View style={{
                backgroundColor: 'dodgerblue',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text>2</Text>
            </View>
            <View style={{
                backgroundColor: 'green',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text>3</Text>
            </View>
        </View>
    )
}

export default Flexbox