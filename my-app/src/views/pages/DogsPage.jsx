import React from 'react'
import DisplayBreedsImages from '../components/DisplayBreedsImages'
import NewFilter from '../components/NewFilter';
import { useSelector } from 'react-redux';

const DogPage = ({ data, allImages }) => {
  const { filters } = useSelector(state => state.filters);

  return (
    <div>
      <div>
        <NewFilter ></NewFilter>
      </div>
      <div>
        <h3>Filtros activos: </h3>
        {
          filters.map((filter) => <p key={filter.breed}>{filter.breed} - {filter.subBreed}</p>)
        }
      </div>
      <DisplayBreedsImages images={allImages}></DisplayBreedsImages>
    </div>
  )
}

export default DogPage;
