import { Image, StyleSheet, Platform } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    
      <ThemedView style={styles.titleContainer}>
        <ThemedText style={styles.title} type='title'>Hola mundo!</ThemedText>
        
      </ThemedView>
    
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  title: {
    width: '100%',
    height: '100%',
    textAlign: "center",
    fontSize: 24,
    lineHeight: 32,
  },
});
