import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  containerLogo: {

    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
  },

  form: {
    width: '100%',
    flexDirection: 'row',
  },
  input: {
    flex:1,
    backgroundColor: '#262626',
    height: 54,
    borderRadius:6,
    paddingLeft: 16,
    borderColor: '#000',
    borderWidth: 1,
    fontSize: 16,
    color: '#fff'
  },
  inputFocus: {
    flex:1,
    backgroundColor: '#262626',
    height: 54,
    borderRadius:6,
    paddingLeft: 16,
    borderColor: '#5E60CE',
    borderWidth: 1,
    fontSize: 16,
    color: '#fff'
  },

  button: {
    backgroundColor: '#1E6F9F',
    width: 52,
    height: 52,
    borderRadius: 6,
    marginLeft: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },

  logoAdd:{
    resizeMode: 'contain',
    width: 15,
    height: 15
  },

  progress: {
    width: '100%',
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 32,
    paddingBottom:20,
    borderBottomWidth: 1,
    borderColor: '#333333',
  },
  
  created: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  completed: {
    flexDirection: 'row',
  },
  
  textCreated: {
    fontSize: 14,
    color: '#4EA8DE',
    fontWeight: 'bold',
    marginRight: 9,
  },


  textCompleted: {
    fontSize: 14,
    color: '#8284FA',
    fontWeight: 'bold',
    marginRight: 9, 
  },

  count: {
    height: 19,
    backgroundColor: '#333333',
    paddingHorizontal: 10,
    fontSize: 12, 
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',   
  },

  textCount: {
    color: '#fff',
    fontWeight: 'bold',
  }
})