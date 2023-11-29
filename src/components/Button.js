import { StyleSheet, View, Pressable, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Button({ label, iconName }) {
    return (
        <View
        style={[styles.buttonContainer, { borderWidth: 4, borderColor: "#ffd33d", borderRadius: 18 }]}
        >
            <Pressable
            style={[styles.button, { backgroundColor: "#fff" }]}
            onPress={() => alert('You pressed a button.')}
            >
                <MaterialCommunityIcons name={iconName} size={24} color="black" />
                <Text style={[styles.buttonLabel, { color: "#25292e" }]}>{label}</Text>
            </Pressable>
        </View>
        );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 220,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonLabel: {
    color: '#333',
    fontSize: 18,
    paddingLeft: 4
  },
});
