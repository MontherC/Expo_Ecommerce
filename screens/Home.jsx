import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { SIZES } from '../constants'


import Ionicons from '@expo/vector-icons/Ionicons'

import styles from './home.module'

const Home = () => {
    return (
        <SafeAreaView>
            <View style={styles.appBarWrapper}>
                <View style={styles.appBar}>
                    <Ionicons name='location-outline' size={SIZES.large} />
                    <Text style={styles.location}>Manitoba, Canada</Text>
                    <View style={{ alignItems: "flex-end" }}>
                        <View style={styles.cartCount}>
                            <Text>1</Text>
                        </View>
                    </View>
                </View>

            </View>
        </SafeAreaView>
    )
}

export default Home