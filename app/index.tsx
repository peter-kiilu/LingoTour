import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Modal, Pressable } from 'react-native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { translations } from './../data/translations';
import { useColorScheme } from 'react-native';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Spanish' },
  { code: 'fr', name: 'French' },
  { code: 'de', name: 'German' },
  { code: 'it', name: 'Italian' },
];

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [fromLanguage, setFromLanguage] = useState('en');
  const [toLanguage, setToLanguage] = useState('es');
  const [showFromLanguageModal, setShowFromLanguageModal] = useState(false);
  const [showToLanguageModal, setShowToLanguageModal] = useState(false);

  const theme = {
    backgroundColor: colorScheme === 'dark' ? '#121212' : '#F5F5F5',
    textColor: colorScheme === 'dark' ? '#FFFFFF' : '#333333',
    cardBackground: colorScheme === 'dark' ? '#1E1E1E' : '#FFFFFF',
    borderColor: colorScheme === 'dark' ? '#333333' : '#DDDDDD',
    primaryColor: colorScheme === 'dark' ? '#64B5F6' : '#4A90E2',
    secondaryText: colorScheme === 'dark' ? '#B0B0B0' : '#666666',
  };

  const handleTranslate = () => {
    if (!inputText.trim()) {
      setTranslatedText('');
      return;
    }

    const key = inputText.toLowerCase();
    const translation = translations[fromLanguage]?.[toLanguage]?.[key] || 'Translation not found';
    setTranslatedText(translation);
  };

  const handleSwapLanguages = () => {
    setFromLanguage(toLanguage);
    setToLanguage(fromLanguage);
    setInputText(translatedText);
    setTranslatedText(inputText);
  };

  const getLanguageName = (code: string) => {
    return languages.find(lang => lang.code === code)?.name || code.toUpperCase();
  };

  return (
    <ScrollView 
      contentContainerStyle={[
        styles.container, 
        { backgroundColor: theme.backgroundColor }
      ]}
    >
      <Text style={[styles.title, { color: theme.textColor }]}>Quick Translation</Text>
      
      <View style={styles.languageSelectorContainer}>
        <View style={styles.languageSelector}>
          <Text style={[styles.languageLabel, { color: theme.secondaryText }]}>From:</Text>
          <TouchableOpacity 
            style={[
              styles.languageButton, 
              { 
                backgroundColor: theme.cardBackground,
                borderColor: theme.borderColor,
              }
            ]}
            onPress={() => setShowFromLanguageModal(true)}
          >
            <Text style={[styles.languageText, { color: theme.textColor }]}>
              {getLanguageName(fromLanguage)}
            </Text>
            <Ionicons name="chevron-down" size={16} color={theme.primaryColor} />
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity 
          style={styles.swapButton} 
          onPress={handleSwapLanguages}
        >
          <Ionicons name="swap-horizontal" size={24} color={theme.primaryColor} />
        </TouchableOpacity>
        
        <View style={styles.languageSelector}>
          <Text style={[styles.languageLabel, { color: theme.secondaryText }]}>To:</Text>
          <TouchableOpacity 
            style={[
              styles.languageButton, 
              { 
                backgroundColor: theme.cardBackground,
                borderColor: theme.borderColor,
              }
            ]}
            onPress={() => setShowToLanguageModal(true)}
          >
            <Text style={[styles.languageText, { color: theme.textColor }]}>
              {getLanguageName(toLanguage)}
            </Text>
            <Ionicons name="chevron-down" size={16} color={theme.primaryColor} />
          </TouchableOpacity>
        </View>
      </View>
      
      <TextInput
        style={[
          styles.input, 
          { 
            backgroundColor: theme.cardBackground,
            borderColor: theme.borderColor,
            color: theme.textColor,
          }
        ]}
        placeholder="Type text to translate..."
        placeholderTextColor={theme.secondaryText}
        multiline
        value={inputText}
        onChangeText={setInputText}
      />
      
      <TouchableOpacity 
        style={[
          styles.translateButton, 
          { backgroundColor: theme.primaryColor }
        ]} 
        onPress={handleTranslate}
      >
        <Text style={styles.translateButtonText}>Translate</Text>
      </TouchableOpacity>
      
      {translatedText ? (
        <View style={[
          styles.resultContainer, 
          { 
            backgroundColor: theme.cardBackground,
            borderColor: theme.borderColor,
          }
        ]}>
          <Text style={[styles.resultText, { color: theme.textColor }]}>{translatedText}</Text>
        </View>
      ) : null}
      
      <View style={styles.quickPhrasesContainer}>
        <Text style={[styles.sectionTitle, { color: theme.textColor }]}>Quick Phrases</Text>
        <View style={styles.phraseGrid}>
          {['Hello', 'Thank you', 'Goodbye', 'Where is...?', 'How much?', 'Help'].map((phrase) => (
            <TouchableOpacity 
              key={phrase} 
              style={[
                styles.phraseButton, 
                { 
                  backgroundColor: theme.cardBackground,
                  borderColor: theme.borderColor,
                }
              ]}
              onPress={() => {
                setInputText(phrase);
                handleTranslate();
              }}
            >
              <Text style={[styles.phraseText, { color: theme.primaryColor }]}>{phrase}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* From Language Modal */}
      <Modal
        visible={showFromLanguageModal}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowFromLanguageModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={[
            styles.modalContent, 
            { backgroundColor: theme.cardBackground }
          ]}>
            <Text style={[styles.modalTitle, { color: theme.textColor }]}>Select Source Language</Text>
            {languages.map((language) => (
              <Pressable
                key={language.code}
                style={({ pressed }) => [
                  styles.languageItem,
                  { 
                    backgroundColor: pressed ? theme.primaryColor + '20' : 'transparent',
                  }
                ]}
                onPress={() => {
                  setFromLanguage(language.code);
                  setShowFromLanguageModal(false);
                }}
              >
                <Text style={[styles.languageItemText, { color: theme.textColor }]}>
                  {language.name}
                </Text>
                {fromLanguage === language.code && (
                  <Ionicons name="checkmark" size={20} color={theme.primaryColor} />
                )}
              </Pressable>
            ))}
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={() => setShowFromLanguageModal(false)}
            >
              <Text style={[styles.modalCloseButtonText, { color: theme.primaryColor }]}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* To Language Modal */}
      <Modal
        visible={showToLanguageModal}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowToLanguageModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={[
            styles.modalContent, 
            { backgroundColor: theme.cardBackground }
          ]}>
            <Text style={[styles.modalTitle, { color: theme.textColor }]}>Select Target Language</Text>
            {languages.map((language) => (
              <Pressable
                key={language.code}
                style={({ pressed }) => [
                  styles.languageItem,
                  { 
                    backgroundColor: pressed ? theme.primaryColor + '20' : 'transparent',
                  }
                ]}
                onPress={() => {
                  setToLanguage(language.code);
                  setShowToLanguageModal(false);
                }}
              >
                <Text style={[styles.languageItemText, { color: theme.textColor }]}>
                  {language.name}
                </Text>
                {toLanguage === language.code && (
                  <Ionicons name="checkmark" size={20} color={theme.primaryColor} />
                )}
              </Pressable>
            ))}
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={() => setShowToLanguageModal(false)}
            >
              <Text style={[styles.modalCloseButtonText, { color: theme.primaryColor }]}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
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
    marginBottom: 5,
  },
  languageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
  },
  languageText: {
    flex: 1,
    fontSize: 16,
  },
  swapButton: {
    padding: 10,
  },
  input: {
    minHeight: 100,
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    fontSize: 16,
    marginBottom: 15,
    textAlignVertical: 'top',
  },
  translateButton: {
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
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 20,
  },
  resultText: {
    fontSize: 16,
  },
  quickPhrasesContainer: {
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  phraseGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  phraseButton: {
    width: '48%',
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 10,
    alignItems: 'center',
  },
  phraseText: {
    fontSize: 14,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
  },
  modalContent: {
    borderRadius: 10,
    padding: 20,
    maxHeight: '80%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  languageItem: {
    padding: 15,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  languageItemText: {
    fontSize: 16,
  },
  modalCloseButton: {
    marginTop: 15,
    padding: 10,
    alignItems: 'center',
  },
  modalCloseButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});