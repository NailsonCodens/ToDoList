import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  containerTodo: {
    flex: 1,
    flexDirection: 'row',
    height: 64,
    borderRadius: 8,
    backgroundColor: '#262626',
    alignItems: 'center',
    marginTop: 20,
  },

  infoTodo: {
    width: '72%',
    color: '#F2F2F2',
    fontSize: 14,
  },

  sideBoxLeft: {
    width: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sideBoxRight: {
    width: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  checkbox:{
    borderColor: '#4EA8DE',
    borderRadius: 100,
    width: 17,
    height: 17
  }
})