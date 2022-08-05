import React from 'react'
import { useQuery, gql } from "@apollo/client";

const GET_CHARACTERS = gql`
query {
  allPeople{
    people{
      name
      id
    }
  }
}
`
const PeopleList = () => {
    const {error, loading, data} = useQuery(GET_CHARACTERS);

    console.log('error', error);
    console.log('isLoading', loading);
    console.log('data', data);

    return (
        <div>Have fun..</div>
    )
}

export default PeopleList