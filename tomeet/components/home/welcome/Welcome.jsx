import { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native';
import { useRouter } from 'expo-router';

import styles from './welcome.style';
import { icons, SIZES } from '../../../constants'

const contactTypes = ["Online", "Offline", "Requests"];


const Welcome = () => {
  const router = useRouter();
  const [activecontactType, setActivecontactType] = useState('Online')
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello!</Text>
        <Text style={styles.welcomeMessage}>Connect with friends!</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onChange={() => { }}
            placeholder="Who are you looking for?"
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={() => { }}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={contactTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activecontactType, item)}
              onPress={() => {
                setActivecontactType(item);
                router.push('/search/${item}')
              }}
            >
              <Text style={styles.tabText(activecontactType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          contentContainerStyle={{columnGap:SIZES.small}}
          horizontal
        />
      </View>

    </View>
  )
}

export default Welcome