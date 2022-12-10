import { useHistory } from 'react-router-dom';
import React from 'react';
import { useSelector } from 'react-redux';



function Details (){

    const history = useHistory();

    const current = useSelector(store => store.currentMovie);


    const backToHome = () => {
        // dispatch({type: 'DELETE_FRUIT', payload: props.basketItem.id})
        console.log('clicked backToHome!');
        history.push('/');   
    }








    return (
        <div className='details'>
        <p>Details</p>
        <p>{JSON.stringify(current)}</p>
        <button onClick={backToHome}>Back to Movies</button>
        </div>
    )
}

export default Details;