import React, {useState} from 'react';
import {SafeAreaView, Text, Image, FlatList, StyleSheet, View} from 'react-native';

const App = () => {

  const moviesList = [
    {
      id: 1,
      name: 'Transformers: La Venganza de los Caídos',
      director: 'Michael Bay',
      url: 'https://es.web.img2.acsta.net/medias/nmedia/18/68/50/66/19123430.jpg',
    },
    {
      id: 2,
      name: 'Cars',
      director: 'Disney',
      url: 'https://m.media-amazon.com/images/M/MV5BMTg5NzY0MzA2MV5BMl5BanBnXkFtZTYwNDc3NTc2._V1_FMjpg_UX1000_.jpg',
    },
    {
      id: 3,
      name: 'Avengers',
      director: 'Marvel',
      url: 'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
    },
    {
      id: 4,
      name: 'El Laberinto del Fauno',
      director: 'Guillermo del Toro',
      url: 'https://play-lh.googleusercontent.com/d75HbeuY0kxUVpE9m69CqD5SdBiUa12OJoYjgKA7FeHwMD6dz5w7EfuQbfw1D8GYkWDi7iAA-wgZzaPqkVk',
    },
    {
      id: 5,
      name: 'John Wick',
      director: 'Lionsgate',
      url: 'https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_.jpg',
    },
    {
      id: 6,
      name: 'Mad Max: Fury Road',
      director: 'George Miller',
      url: 'https://m.media-amazon.com/images/I/81zjIs3buHL._UF1000,1000_QL80_.jpg',
    },
    {
      id: 7,
      name: 'Titanes del Pacifico',
      director: 'Guillermo del Toro',
      url: 'https://static.wikia.nocookie.net/doblaje/images/2/2f/TitanesdelPacifico.jpg/revision/latest?cb=20170801034441&path-prefix=es',
    },
    {
      id: 8,
      name: 'Perros de Reserva',
      director: 'Quentin Tarantino',
      url: 'https://static.wikia.nocookie.net/lostmedia/images/5/52/2020-reservoir-dogs-dvd-101.jpg/revision/latest?cb=20220114022739&path-prefix=es',
    },
    {
      id: 9,
      name: 'El Planeta del Tesoro',
      director: 'Disney',
      url: 'https://www.aceprensa.com/wp-content/uploads/2002/11/9016-0.jpg',
    },
    {
      id: 10,
      name: 'Drive',
      director: 'Nicolas Winding',
      url: 'https://i.etsystatic.com/30590052/r/il/91b7d8/3212954713/il_570xN.3212954713_gdwg.jpg',
    },
  ];

  const [movies, setMovies] = useState(moviesList);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>¡Bienvenido a la App de Películas! 🍿</Text>
      <FlatList
        style={styles.flatListContainer}
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.movieContainer}>
            <Image
              style={styles.image}
              source={{
                uri: item.url,
              }}
            />
            <View style={styles.textContainer}>
              <Text style={styles.textName}>{item.name}</Text>
              <Text style={styles.textDirector}>{item.director}</Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 15,
    textAlign: 'center',
    color: '#fff',
  },
  movieContainer: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    width: 120,
    height: 180,
    marginLeft: 10,
  },
  textContainer: {
    flex: 1,
    paddingLeft: 10,
  },
  textName:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  textDirector:{
    fontSize: 16,
    color: '#fff',
  },
  flatListContainer:{
    flex: 1,
    marginTop: 15,
  }
});

export default App;
