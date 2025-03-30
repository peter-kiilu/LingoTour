import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function VirtualToursScreen() {
  const tours = [
    { id: '1', title: 'Eiffel Tower', location: 'Paris, France', image: require('./../assets/eiffel.jpg') },
    { id: '2', title: 'Colosseum', location: 'Rome, Italy', image: require('./../assets/colosseum.jpg') },
    { id: '3', title: 'Great Wall', location: 'China', image: require('./../assets/great-wall.jpg') },
    { id: '4', title: 'Machu Picchu', location: 'Peru', image: require('./../assets/machu-picchu.jpg') },
    { id: '5', title: 'Diani Beach', location: 'Mombasa, Kenya', image: require('./../assets/dianibeach.jpg') },

  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Virtual Tours</Text>
      <Text style={styles.subtitle}>Explore world landmarks from home</Text>
      
      {tours.map((tour) => (
        <TouchableOpacity key={tour.id} style={styles.tourCard}>
          <Image source={tour.image} style={styles.tourImage} />
          <View style={styles.tourInfo}>
            <Text style={styles.tourTitle}>{tour.title}</Text>
            <Text style={styles.tourLocation}>{tour.location}</Text>
          </View>
          <Ionicons name="play-circle" size={32} color="#4A90E2" />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  tourCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  tourImage: {
    width: 70,
    height: 70,
    borderRadius: 8,
    marginRight: 15,
  },
  tourInfo: {
    flex: 1,
  },
  tourTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  tourLocation: {
    fontSize: 14,
    color: '#666',
  },
});