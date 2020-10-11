import * as React from 'react';
import { View, Animated, Dimensions, StyleSheet } from 'react-native';
import Card, {cardHeight, cardTitleHeight, cardPadding} from './Card';
import data from './data'

export interface WalletProps {

}

const {height} = Dimensions.get('screen')


const Wallet: React.SFC<WalletProps> = (props: WalletProps) => {
  const y = React.useRef(new Animated.Value(0)).current;

  return (
    <>
      <View style={StyleSheet.absoluteFill}>
        {data.map((card, i) => {
          const endDistance = cardHeight - cardPadding;
          const inputRange = [-cardHeight, 0];
          const outputRange = [cardHeight * i, (cardHeight - cardTitleHeight) * -i]

          if (i > 0) {
            inputRange.push(cardPadding * i);
            outputRange.push(endDistance * -i);
          }
          const translateY = y.interpolate({
            inputRange,
            outputRange,
            extrapolateRight: "clamp"
          });
          return <Card style={{ transform: [{translateY}]}} key={card.name} {...card} />
        })}
      </View>
      <Animated.ScrollView
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
        onScroll={Animated.event([{
          nativeEvent: {
            contentOffset: {y}
          }
        }], {
          useNativeDriver: true
        })}
      />
    </>
  );
}

const styles = StyleSheet.create({
  content: {
    height: height * 2,
  }
})

export default Wallet;