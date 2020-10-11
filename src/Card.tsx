import * as React from 'react';
import { Animated, StyleSheet, Text } from 'react-native';
import { invertHex } from './utils';

export interface CardProps {
  name: string;
  color: string;
  price: string;
  style: any;
}

export const cardHeight = 250;
export const cardTitleHeight = 50;
export const cardPadding = 10;
 
const Card: React.SFC<CardProps> = ({color, name, price, style}: CardProps) => {
  const invertedColor = `#${invertHex(color.replace('#', ''))}`
  return (
    <Animated.View style={[styles.card, {backgroundColor:color}, style]}>
      <Text style={[styles.name, {color:invertedColor}]}>{name}</Text>
      <Text style={[styles.price, {color:invertedColor}]}>${price}</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 10,
        height: cardHeight,
        marginHorizontal: 16,
        paddingVertical: cardPadding,
        paddingHorizontal: 20

    },
    name: {
      fontWeight: 'bold',
      fontSize: cardTitleHeight - (cardPadding * 2),
      width: '100%'
    },
    price: {
      marginTop: 20,
      fontSize: 30
    }
})
 
export default Card;