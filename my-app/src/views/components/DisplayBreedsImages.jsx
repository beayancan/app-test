import React from 'react'
import { useSelector } from 'react-redux';

const DisplayBreedsImages = () => {
  const { images } = useSelector(state => state.dogs);
  const { filters } = useSelector(state => state.filters);

  const filterImages = () => {
    const filtersToUse = filters.filter((x) => x.breed !== 'all');
    if (filtersToUse.length === 0){
      return images
    }
    const breedsNames = filtersToUse.map((x) => x.breed);
    const subBreedsNames = filtersToUse.map((x) => x.subBreed === 'all' ? x.breed : `${x.breed}-${x.subBreed}`);
    const breedsToUse = images.filter((breedImages) => breedsNames.includes(breedImages.name));
    return breedsToUse.map((breedImages) => ({
      ...breedImages,
      images: breedImages.images.filter(
        (imageName) => subBreedsNames.includes(imageName.split('/').slice(-2, -1).pop())
      ),
    }));
  }

  return (
    <div>
      {
        filterImages().map((breed) => (
          <div key={'div' + breed.name}>
            <p key={'p' + breed.name}>Raza: {breed.name}</p>
            <div key={breed.name}>
              {
                breed.images.map((image) => (
                  <img key={image} src={image} alt="new" />
                ))
              }
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default DisplayBreedsImages;
