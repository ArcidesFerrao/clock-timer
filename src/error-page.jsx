import React from 'react'
import { useRouteError } from 'react-router-dom';


export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);
  return (
    <div className='error-container' >
        <h1>Oops!</h1>
        <h4>Nothing to see here...</h4>

        <p>{error.message}</p>
    </div>
  )
}
