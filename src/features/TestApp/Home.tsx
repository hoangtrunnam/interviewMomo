import { useNavigation } from '@react-navigation/native'
import Checkbox from 'expo-checkbox'
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useRecoilState } from 'recoil'
import { TouchRippleSingle } from 'src/components/Button/TouchRippleSingle'
import ExpoImage from 'src/components/Image'
import { routes } from 'src/navigation/routes'
import { authState } from 'src/recoil/auth/atoms'

const Home = () => {
  const navigation = useNavigation()
  const [dataLogin] = useRecoilState(authState)
  console.log('🚀 ~ Home ~ dataLogin:', dataLogin.user.email)
  const [isChecked, setChecked] = useState(false)
  const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj['

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
        <Text style={styles.paragraph}>Normal checkbox</Text>
      </View>
      <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#4630EB' : undefined}
        />
        <Text style={styles.paragraph}>Custom colored checkbox</Text>
      </View>
      <View style={styles.section}>
        <Checkbox style={styles.checkbox} disabled value={isChecked} onValueChange={setChecked} />
        <Text style={styles.paragraph}>Disabled checkbox</Text>
      </View>
      <View>
        <TouchRippleSingle
          onPress={() => {
            navigation.navigate(routes.Contacts)
          }}>
          <Text>press to open Contacts</Text>
        </TouchRippleSingle>
      </View>
      <ExpoImage
        style={styles.image}
        source="https://i.sstatic.net/t3qWG.png"
        placeholder={{ blurhash }} // blurhash must return from api
        contentFit="fill"
        transition={1000}
        enableLiveTextInteraction
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 32,
    marginTop: 100
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  paragraph: {
    fontSize: 15
  },
  checkbox: {
    margin: 8
  },
  image: {
    width: '100%',
    height: 200,
    backgroundColor: '#0553',
    borderRadius: 12
  }
})
