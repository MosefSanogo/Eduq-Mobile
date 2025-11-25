import React from 'react'
import { ViewStyle } from 'react-native'
import { ThemedView } from './themed-view'

function Spacer({width = "100%", height=40}: {width?: number | string, height?: number|string}) {
  return (
    <ThemedView style={{ width, height } as ViewStyle} />
  )
}

export default Spacer
