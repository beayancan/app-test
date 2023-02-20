const fetchGetData = async (path) => {
  return fetch(`https://dog.ceo/api/${path}`)
    .then((response) => response.json())
    .then((data) => data.message);
}

const getAllBreeds = async () => {
  return fetchGetData('breeds/list/all').then((data) => (
    Object.entries(data).map(([breed, subBreed]) => ({
      breed,
      subBreed: subBreed ?? []
    }))
  ));
};

const getSingleBreedImages = async (breedName) => {
  return fetchGetData(`breed/${breedName}/images`);
};

const getAllBreedImages = async (allDogsBreeds) => {
  return Promise.all(allDogsBreeds.map(async (breedName) => (
    getSingleBreedImages(breedName).then((breedImages) => ({
      name: breedName,
      images: breedImages,
    }))
  )));
};

export const getDogCeoData = async () => {
  const dogs = await getAllBreeds();
  const images = await getAllBreedImages(dogs.map((dog) => dog.breed));
  return { dogs, images }
}

// const filterImages = (images, filter) => {
//   if (filter.subBreed === 'all') {
//     return images;
//   }
//   const dogType = `${filter.breed}-${filter.subBreed}`;
//   return images.filter((dogImage) => dogImage.split('/').includes(dogType));
// }

// const getFilteredBreedImages = async (filters) => {
//   let retorno = [];
//   await filters.forEach(async (filter) => {
//     getSingleBreedImages(filter.breed)
//     .then(data => filterImages(data, filter))
//     .then(data => retorno.push({
//       breedName: filter.breed,
//       images: data
//     }));
//   });
//   return retorno;
// };

// const getBreedsImages = (allDogsBreeds, filters) => {
//   if (filters.every((filter) => filter.breed === 'all')){
//     console.log('all')
//     return getAllBreedImages(allDogsBreeds);
//   }
//   return getFilteredBreedImages(filters.filter(x => x.breed !== 'all'));
// }

