import React, {useState, useEffect} from 'react';
import {ScrollView, Text, View, FlatList} from 'react-native';
import axios from 'axios';
import PhotoDetail from './PhotoDetail';

const PhotoList = (props) => {
  const [photos, setPhotos] = useState(null)
    
  useEffect(() => {
    const fetchPhotos = async () =>{
      const { data } = await axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=6e8a597cb502b7b95dbd46a46e25db8d&photoset_id=${props.route.params.albumId}&user_id=137290658%40N08&format=json&nojsoncallback=1`,
      );
      setPhotos(data.photoset.photo);
    }
    fetchPhotos();
  },[]);

  const renderAlbums = (photo) => (
    <PhotoDetail
     key={photo.title}
     title={photo.title}
     imageUrl={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
   />
 )  


  if (!photos) {
    return (
      <View style={{flex: 1}}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={{flex: 1}}>
      <FlatList data={photos}
      renderItem={({item}) => renderAlbums(item)}/>
    </View>
  );
  
}

export default PhotoList;
