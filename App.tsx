import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TextInput} from 'react-native';
import { useState } from 'react';

export default function App() {
  const [lastName, setLastName] = useState('');
  const [firstNameOthers, setFirstNameOthers] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={{marginInline:10,fontWeight:"bold",marginTop:90,color:"#1e57ba",
        fontSize:20}}>Hello {firstNameOthers} {lastName}</Text>
      <Text style={{marginInline:10,fontWeight:"bold",color:"#7d3d3d",
        fontSize:20,textAlign:"center"}}>Your email is {email}   
        and phone number is {phone}</Text>
      <Text style={{fontSize:20,fontWeight:"bold"}}>NAME:</Text>
      <TextInput 
        style={{backgroundColor:"white",width:"90%",borderRadius:30,paddingLeft:30}}
        placeholder='Enter your last name' 
        inputMode='text'
        value={lastName}
        onChangeText={setLastName}
      />
      <Text style={{fontSize:20,fontWeight:"bold"}}>OTHERS:</Text>
      <TextInput 
        style={{backgroundColor:"white",width:"90%",borderRadius:30,paddingLeft:30}}
        placeholder='Enter your first name and others' 
        inputMode='text'
        value={firstNameOthers}
        onChangeText={setFirstNameOthers}
      />
      <Text style={{fontSize:20,fontWeight:"bold"}}>EMAIL:</Text>
      <TextInput 
        style={{backgroundColor:"white",width:"90%",borderRadius:30,paddingLeft:30}}
        placeholder='Enter your e-mail addresss' 
        inputMode='email'
        value={email}
        onChangeText={setEmail}
      />
      <Text style={{fontSize:20,fontWeight:"bold"}}>TEL.:</Text>
      <TextInput 
        style={{backgroundColor:"white",width:"90%",borderRadius:30,paddingLeft:30}}
        placeholder='Enter your phone number' 
        inputMode='tel'
        value={phone}
        onChangeText={setPhone}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a2e430',
    alignItems: 'center',
    justifyContent: 'flex-start',

  },
});
