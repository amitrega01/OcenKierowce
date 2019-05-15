import React from 'reactn';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
export class BigAlert extends React.Component {
  //TODO: dodac propsy i przetestowac na jakisch zmockowanych danych json
  render() {
    return (
      <TouchableOpacity
        style={styles.wrapper}
        activeOpacity={0.9}
        onPress={() => {
          alert('Wyskakujace okno, wiecej informacji, kto dodal itp');
        }}>
        <View style={styles.content}>
          <Text style={styles.header}>Wypadek </Text>
          <Text style={styles.date}>{Date.now()}</Text>
          <Text style={styles.description}>Opis wypadku czyli cos tam cos</Text>
        </View>
        <View style={styles.imagePart}>
          <Image
            style={styles.image}
            source={{
              uri:
                'http://bielskiedrogi.pl/sites/default/files/szalony_poscig_zakonczony_na_torowisku_11_05_2019_a374.jpg',
            }}
          />
        </View>
      </TouchableOpacity>
    );
  }
}
export default BigAlert;

const styles = StyleSheet.create({
  wrapper: {
    width: '90%',
    height: 140,
    elevation: 4,
    borderRadius: 16,
    backgroundColor: '#fff',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  content: {
    flex: 4,
    flexDirection: 'column',
  },
  header: {
    backgroundColor: '#FE4F37',
    paddingHorizontal: 16,
    paddingVertical: 8,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  date: {
    color: 'rgba(0,0,0,0.5)',
    fontSize: 12,
    paddingVertical: 2,
    paddingHorizontal: 16,
  },
  description: {
    color: 'rgba(0,0,0,0.75)',
    fontSize: 14,
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
  imagePart: {
    flex: 3,
  },
  image: {
    flex: 1,
  },
});
