import { View, Text,StyleSheet,ImageBackground,Pressable } from 'react-native'
import React from 'react'
// import link for navigation
import { Link } from 'expo-router'
const app= () => {
  return (
    <View style={styles.container}>

      <ImageBackground style={styles.image} source={require('@/assets/images/PİTCHER.jpeg')} >

      
      <Text style={styles.text} >hello Alanya </Text>


      {/*navivigation to explore  by using pressable button and link  */}
<Link   href={'/explore'} style={{marginHorizontal:'auto'}}  asChild>
<Pressable  style={styles.button}>
  <Text  style={styles.buttonText}>explore</Text>
</Pressable>
</Link>



      </ImageBackground>
    </View>
  )
}

export default app


const styles=StyleSheet.create({
container:{
  backgroundColor:'skyblue',
  flex:1,
  flexDirection:'column'
},
text:{
color:'blue',
fontSize:40,
fontWeight:'bold',
textAlign:'center',
justifyContent:'center',
alignItems:'center',
backgroundColor:'rgba(0,0,0,0,5)',

  },
  button:{
    width: 200,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1e90ff',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,

  },
  buttonText:{
color:'white',
fontSize:20,
fontWeight:'bold',
textAlign:'center',
justifyContent:'center',
alignItems:'center',

  },
 
  // styling our image
image:{flex:1,
  width:'100%',
     height:'100%',
  position: 'absolute', 
  resizeMode:'cover',
  justifyContent:'center',


}







})