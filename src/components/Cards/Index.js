import React from 'react';
import {View, Text} from 'react-native';

import style from './style';

const Card = ({titulo, children}) => {
    return (
        <View>
            <View>
              <Text style={style.card}>{titulo}</Text>
            </View>
            <View style={style.card_content}>
                {children}  
            </View>
        </View>
    )
}

export default Card;