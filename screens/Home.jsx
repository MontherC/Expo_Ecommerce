import React from 'react'
import { Pressable, Text, View, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { SIZES } from '../constants'


import Ionicons from '@expo/vector-icons/Ionicons'

import styles from './home.module'
import { Fontisto } from '@expo/vector-icons'
import { MainPage } from '../components'

const Home = () => {
    return (
        <SafeAreaView>
            <View style={styles.appBarWrapper}>
                <View style={styles.appBar}>
                    <Ionicons name='location-outline' size={SIZES.large} />
                    <Text style={styles.location}>Manitoba, Canada</Text>
                    <View style={{ alignItems: "flex-end" }}>
                    <Pressable
                            style={({ pressed }) => styles.cart(pressed)}
                            onPress={()=>{}}>

                            <Fontisto
                                name='shopping-bag'
                                size={SIZES.large}

                            />
                        </Pressable>
                        <View style={styles.cartCount}>
                            <Text style={styles.cartNumber}>1</Text>
                        </View>

                    </View>
                </View>

            </View>
            <ScrollView>
                <MainPage />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home