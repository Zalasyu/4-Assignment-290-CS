import React, { useState } from 'react'
import { MdAdd, MdRemove} from 'react-icons/md';
import clamp from './clamp.js'

// - <value>  +

function Incrementor(){
  const [value, setValue] = useState(0)
  const clampV = clamp(0, 10)

  const dec = () => { setValue(v => clampV(v - 1) )}
  const inc = () => { setValue(v => clampV(v + 1) )}
  return (
  <>
    <MdRemove onClick={dec} />
    {value}
    <MdAdd onClick={inc} />
  </>
  );

}

export default Incrementor;
