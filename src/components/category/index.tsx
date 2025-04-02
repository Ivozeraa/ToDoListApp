import { Text, Pressable, PressableProps } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import { colors } from '@/styles/colors'
import { styles } from './style'

type Props =  PressableProps & {
    name: string
    isSelected: boolean
    icon: keyof typeof MaterialIcons.glyphMap
}

export function Category({ name, icon, isSelected, ...rest }: Props){
    const color = isSelected ? colors.produtct.purple : colors.produtct.purpleDark 

    return(
        <Pressable style={styles.container} {...rest}>
            <MaterialIcons name={icon} size={16} color={color} />
            <Text style={[styles.name, { color }]}>{name}</Text>
        </Pressable>
    )
}