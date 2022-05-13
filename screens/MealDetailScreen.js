import { useLayoutEffect } from 'react';

import { View, ScrollView, Text, Image, StyleSheet } from 'react-native';

import IconButton from '../components/IconButton';
import List from '../components/MealDetail/List';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import { MEALS } from '../data/dummy-data';

const MealDetailScreen = ({ route, navigation }) => {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const headerButtonPresshandler = () => {
      console.log('pressed')
  };

  useLayoutEffect(() => {
      navigation.setOptions({
        headerRight: () => {
          return <IconButton onPress={headerButtonPresshandler} icon='star' color='#fff'/>
        },
      });
  }, [navigation, headerButtonPresshandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32,
    },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: '#fff',
  },
  detailText: {
    color: '#fff',
  },
  listOuterContainer: {
    alignItems: 'center'
  },
  listContainer: {
    width: '80%',
  },
  
});
