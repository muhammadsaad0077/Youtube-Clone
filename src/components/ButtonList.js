import React from 'react'
import Button from './Button'

const ButtonList = () => {
  const list = ["All", "Coding", "JavaScript", "Ethical", "DSA", "Web Development", "Bakend Development", "Internship", "Entertainment", "Coding", "Hello World"]
  return (
    <div className="flex overflow-x-scroll no-scrollbar scrollbar-hide">
    <div className='flex'>
      {list.map((name)=> <Button key={name} name={name}/>)}
    </div>
    </div>
  )
}

export default ButtonList
