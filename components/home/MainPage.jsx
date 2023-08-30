import { View, Text } from 'react-native'
import React from 'react'

import styles from './mainpage.module'

const MainPage = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.subHeader}>
                Find exactly what you're looking for
            </Text>
        </View>
    )
}

export default MainPage