import React from 'react'

const Title = ({text1, text2}) => {
  return (
    <div className='inline-flex items-center gap-2 mb-3'>
        <p className='text-gray-500'>
            {text1}
            &nbsp;
            <span className='font-medium text-gray-700'>{text2}</span>
        </p>
    </div>
  )
}

export default Title
