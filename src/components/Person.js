import axios from "axios";
import { useState } from "react";

function Person () {
    const [ name, setName ] = useState( "Ahmed" );
    const [ age, setAge ] = useState( 22 );
    const [ gender, setGender ] = useState( "male" );

    function handleSubmit ( event ) {
        event.preventDefault();
        setName( event.target.newName.value );
        setGender( event.target.gender.value );
        setAge( event.target.age.value );
        axios.post( `${process.env.REACT_APP_SERVER}/person?name=${name}&age=${age}&gender=${gender}` )
            .then( response => {
                setAge( response.data );
            } )
            .catch( error => {
                console.log( error );
            } );
    }
    return (
        <>
	<div style={{ marginLeft:'40vh'}}>
	<h2>Simple Express Test</h2>
        <div>
            <form onSubmit={handleSubmit}>
                <label > Name : </label>
		<input style={{ marginRight:'10px' }} type="text" name="newName" data-testid="name-input" />

                <label style={{ padding:'10px' , borderLeft:'solid black 1px'}}> Age : </label>
		<input style={{ marginRight:'10px' }}  type="number" name="age" data-testid="age-input" />

                <label style={{ padding:'10px' , borderLeft:'solid black 1px'}}> Gender : </label>
                <select name="gender" data-testid="gender-input" >
                        <option value="select">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                </select>
                <br />
                <input style={{ margin: '5vh', marginLeft:'10vh' , padding:'10px 30px' , backgroundColor:'Blue', border:'solid white 1px'  , color : 'white'}} type="submit" value="Submit" data-testid="submit"/>
            </form>

        <div>
             <h2>Your New Info </h2>
            <p data-testid="name">My name is {name}</p>
            <p data-testid="age">My age is {age}</p>
            <p data-testid="gender">My gender is {gender}</p>
        </div>

        </div>
	</div>

        </>
    );
}


export default Person;