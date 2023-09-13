import React from 'react'

const Vision4List = ({el1, el2,el3,el4}) => {
  return (
    <>
    <ul className='list-disc'>
        <li>{el1}</li>
        <li>{el2}</li>
        <li>{el3}</li>
        <li>{el4}</li>
    </ul>
    </>
  )
}

export default Vision4List