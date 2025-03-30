import { View, Text, StyleSheet, Switch, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SettingsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Settings</Text>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Appearance</Text>
        <View style={styles.settingItem}>
          <Ionicons name="moon-outline" size={24} color="#4A90E2" />
          <Text style={styles.settingText}>Dark Mode</Text>
          <Switch 
            trackColor={{ false: '#DDD', true: '#4A90E2' }}
            thumbColor="#FFF"
            style={styles.switch}
          />
        </View>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Language</Text>
        <View style={styles.settingItem}>
          <Ionicons name="language-outline" size={24} color="#4A90E2" />
          <Text style={styles.settingText}>App Language</Text>
          <Text style={styles.settingValue}>English</Text>
          <Ionicons name="chevron-forward" size={20} color="#999" />
        </View>
        <View style={styles.settingItem}>
          <Ionicons name="globe-outline" size={24} color="#4A90E2" />
          <Text style={styles.settingText}>Default Translation</Text>
          <Text style={styles.settingValue}>Spanish</Text>
          <Ionicons name="chevron-forward" size={20} color="#999" />
        </View>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About</Text>
        <View style={styles.settingItem}>
          <Ionicons name="information-circle-outline" size={24} color="#4A90E2" />
          <Text style={styles.settingText}>Version</Text>
          <Text style={styles.settingValue}>1.0.0</Text>
        </View>
        <View style={styles.settingItem}>
          <Ionicons name="star-outline" size={24} color="#4A90E2" />
          <Text style={styles.settingText}>Rate App</Text>
          <Ionicons name="chevron-forward" size={20} color="#999" />
        </View>
      </View>
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
    marginBottom: 30,
    color: '#333',
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#666',
    marginBottom: 15,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  settingText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    marginLeft: 15,
  },
  settingValue: {
    fontSize: 16,
    color: '#999',
    marginRight: 10,
  },
  switch: {
    transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
  },
});