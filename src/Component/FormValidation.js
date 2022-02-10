import React from 'react'

const FormValidation = () => {
  return (
    <div className='container'>
        <form style={{padding:"10px 0"}}>
        <input type="text" placeholder='Enter Id' /><br /><br />
        <input type="text" placeholder='Enter Password' /><br /><br />
        <button>Submit</button>
        </form>
    </div>
  )
}

export default FormValidation