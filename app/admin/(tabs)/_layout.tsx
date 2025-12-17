import { IconSymbol } from '@/components/ui/icon-symbol'
import { useColorScheme } from '@/hooks/etc/use-color-scheme.web';
import { Tabs } from 'expo-router'
import React from 'react'

const TabLayout = () => {
    // const colorScheme = useColorScheme();

    return (
        <Tabs>
            <Tabs.Screen name='index' options={{ title: "Home", tabBarIcon: ({ color }) => <IconSymbol size={28} name='house.fill' color={color} /> }} />
        </Tabs>
    )
}

export default TabLayout