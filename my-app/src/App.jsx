import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getDogCeoData } from './domain/DogService';
import { setDogsData } from './reducers/dogs/dogsSlice';
import DogPage from './views/pages/DogsPage'

const App = () => {
  const { dogs, images } = useSelector(state => state.dogs);
  const dispatch = useDispatch();

  useEffect(() => {
    getDogCeoData().then((newData) => {
      dispatch(setDogsData({
        dogs: newData.dogs,
        images: newData.images ?? []
      }));
    });
  }, [dispatch]);

  return (
    <div>
      <p>{dogs.length} {images.length}</p>
      <DogPage data={dogs} allImages={images}/>
    </div>
  )
}

export default App
