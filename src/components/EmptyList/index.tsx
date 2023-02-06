import { View, Text, Image } from "react-native";
import { styles} from './style';

export function EmptyList(){
  return(
    <View style={styles.emptyContainer}>
      <Image
        style={styles.climpboard}
        source={require('../../../assets/clipboard.png')}
      />
      <Text style={styles.textOne}>Você ainda não tem tarefas cadastradas</Text>
      <Text style={styles.textSecond}>Crie tarefas e organize seus itens a fazer</Text>
    </View>
  )
}