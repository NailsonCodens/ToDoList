import { View, Text, Image, TouchableOpacity } from 'react-native';
import Checkbox from 'expo-checkbox';
import { styles } from './style';

type Props = {
  todo: string,
  onRemove: () => void;
}

export function Todo({todo, onRemove}: Props){
 return(
  <View style={styles.containerTodo}>
    <View style={styles.sideBoxLeft}>
      <Checkbox
        style={styles.checkbox}
      />
    </View>
    <Text style={styles.infoTodo}>{todo}</Text>
    <TouchableOpacity style={styles.sideBoxRight} onPress={onRemove}>
      <Image
        source={require('../../../assets/trash.png')}
      />      
    </TouchableOpacity>
  </View>
 ) 
}