import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { translations } from './../data/translations';

export default function HomeScreen() {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [fromLanguage, setFromLanguage] = useState('en');
  const [toLanguage, setToLanguage] = useState('es');

  const handleTranslate = () => {
    if (!inputText.trim()) {
      setTranslatedText('');
      return;
    }

    const key = inputText.toLowerCase();
    const translation = translations[fromLanguage]?.[toLanguage]?.[key] || 'Translation not found';
    setTranslatedText(translation);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Quick Translation</Text>
      
      <View style={styles.languageSelectorContainer}>
        <View style={styles.languageSelector}>
          <Text style={styles.languageLabel}>From:</Text>
          <TouchableOpacity style={styles.languageButton}>
            <Text style={styles.languageText}>{fromLanguage.toUpperCase()}</Text>
            <Ionicons name="chevron-down" size={16} color="#4A90E2" />
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity style={styles.swapButton}>
          <Ionicons name="swap-horizontal" size={24} color="#4A90E2" />
        </TouchableOpacity>
        
        <View style={styles.languageSelector}>
          <Text style={styles.languageLabel}>To:</Text>
          <TouchableOpacity style={styles.languageButton}>
            <Text style={styles.languageText}>{toLanguage.toUpperCase()}</Text>
            <Ionicons name="chevron-down" size={16} color="#4A90E2" />
          </TouchableOpacity>
        </View>
      </View>
      
      <TextInput
        style={styles.input}
        placeholder="Type text to translate..."
        multiline
        value={inputText}
        onChangeText={setInputText}
      />
      
      <TouchableOpacity style={styles.translateButton} onPress={handleTranslate}>
        <Text style={styles.translateButtonText}>Translate</Text>
      </TouchableOpacity>
      
      {translatedText ? (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>{translatedText}</Text>
        </View>
      ) : null}
      
      <View style={styles.quickPhrasesContainer}>
        <Text style={styles.sectionTitle}>Quick Phrases</Text>
        <View style={styles.phraseGrid}>
          {['Hello', 'Thank you', 'Goodbye', 'Where is...?', 'How much?', 'Help'].map((phrase) => (
            <TouchableOpacity 
              key={phrase} 
              style={styles.phraseButton}
              onPress={() => {
                setInputText(phrase);
                handleTranslate();
              }}
            >
              <Text style={styles.phraseText}>{phrase}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  languageSelectorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  languageSelector: {
    flex: 1,
  },
  languageLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  languageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#DDD',
  },
  languageText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  swapButton: {
    padding: 10,
  },
  input: {
    backgroundColor: '#FFF',
    minHeight: 100,
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#DDD',
    fontSize: 16,
    marginBottom: 15,
    textAlignVertical: 'top',
  },
  translateButton: {
    backgroundColor: '#4A90E2',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  translateButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resultContainer: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#DDD',
    marginBottom: 20,
  },
  resultText: {
    fontSize: 16,
    color: '#333',
  },
  quickPhrasesContainer: {
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  phraseGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  phraseButton: {
    width: '48%',
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#DDD',
    marginBottom: 10,
    alignItems: 'center',
  },
  phraseText: {
    fontSize: 14,
    color: '#4A90E2',
  },
});