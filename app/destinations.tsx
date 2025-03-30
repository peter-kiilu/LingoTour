import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const destinations = [
  { id: '1', name: 'Paris', country: 'France', image: require('./../assets/paris.jpg') },
  { id: '2', name: 'Tokyo', country: 'Japan', image: require('./../assets/tokyo.jpg') },
  { id: '3', name: 'New York', country: 'USA', image: require('./../assets/ny.jpg') },
  { id: '4', name: 'Rome', country: 'Italy', image: require('./../assets/rome.jpg') },
  { id: '5', name: 'Barcelona', country: 'Spain', image: require('./../assets/barcelona.jpg') },
  { id: '6', name: 'Sydney', country: 'Australia', image: require('./../assets/sydney.jpg') },
  { id: '6', name: 'Mombasa', country: 'Kenya', image: require('./../assets/mombasa.jpg') },

];

export default function DestinationsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Popular Destinations</Text>
      
      <FlatList
        data={destinations}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.destinationCard}>
            <Image source={item.image} style={styles.destinationImage} />
            <View style={styles.destinationInfo}>
              <Text style={styles.destinationName}>{item.name}</Text>
              <Text style={styles.destinationCountry}>{item.country}</Text>
            </View>
            <Ionicons name="bookmark-outline" size={24} color="#4A90E2" style={styles.bookmarkIcon} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  destinationCard: {
    width: '48%',
    backgroundColor: '#FFF',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    position: 'relative',
  },
  destinationImage: {
    width: '100%',
    height: 120,
  },
  destinationInfo: {
    padding: 10,
  },
  destinationName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 2,
  },
  destinationCountry: {
    fontSize: 14,
    color: '#666',
  },
  bookmarkIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 12,
    padding: 4,
  },
});