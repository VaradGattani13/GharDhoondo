import React from 'react'
import {AiOutlineGoogle} from 'react-icons/ai';

const QAuth = () => {
  return (
    <button
    type="button"
    // onClick={onGoogleClick}
    className="flex items-center justify-center w-full bg-red-700 text-white px-7 py-3 uppercase text-sm font-medium hover:bg-red-800 active:bg-red-900 shadow-md hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out rounded"
  >
    <AiOutlineGoogle className="text-2xl  bg-white rounded-full mr-2" />
    Continue with GMail
  </button>
  )
}

export default QAuth