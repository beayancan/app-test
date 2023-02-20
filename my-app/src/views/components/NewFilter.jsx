import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addBreedFilter } from '../../reducers/selectedBreed/filtersSlice';
import { capitalizeFirstLetter } from '../../utils/parse';

const defaultSelectedBreed = {breed: 'all', subBreed: 'all'};

const NewFilter = () => {
  const { dogs } = useSelector(state => state.dogs);
  const [selectedBreed, setSelectedBreed] = useState(defaultSelectedBreed)
  const dispatch = useDispatch();

  const showSubBreed = (breedName, allDogs) => {
    if (breedName === 'all'){
      return false;
    }
    const currentBreed = allDogs.find((dog) => dog.breed === breedName);
    if (currentBreed && currentBreed.subBreed.length > 0){
      return true;
    }
    return false;
  }

  const getSubBreeds = (breedName) => {
    return dogs.find((dog) => dog.breed === breedName).subBreed;
  }

  const handleAddFilter = () => {
    dispatch(addBreedFilter({
      filter: selectedBreed
    }));
    setSelectedBreed(defaultSelectedBreed)
  }

  return (
    <label>
      <p>Pick a Race: {selectedBreed.breed}</p>
      <select
        name="selectedSelectedBreed"
        value={selectedBreed.breed}
        onChange={(e) => setSelectedBreed({ breed: e.target.value, subBreed: 'all' })}
      >
        <option key="all" value="all">Todas</option>
        {
          dogs.map((dog) => (
            <option key={dog.breed} value={dog.breed}>{ capitalizeFirstLetter(dog.breed) }</option>
          ))
        }
      </select>
      {
        showSubBreed(selectedBreed.breed, dogs) && <div>{
          <select
            name="selectedSubBreed"
            value={selectedBreed.subBreed}
            onChange={(e) => setSelectedBreed({ ...selectedBreed, subBreed: e.target.value })}
          >
            <option key="all" value="all">Todas</option>
            {
              getSubBreeds(selectedBreed.breed).map((subBreed) => (
                <option key={subBreed} value={subBreed}>{ capitalizeFirstLetter(subBreed) }</option>
              ))
            }
          </select>
        }</div>
      }
      <button
        onClick={() => handleAddFilter(selectedBreed)}
      >
        Agregar Filtro
      </button>
    </label>
  )
}

export default NewFilter;
