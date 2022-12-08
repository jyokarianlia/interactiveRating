import React, { useState } from 'react'

const Calificacion = () => {
    const [califSelecionado , setCalifSelecionado] = useState( 0)
    const claseOpcion = ' rounded-full  px-[20px] py-3  hover:cursor-pointer hover:bg-[#fb7413] hover:text-white transition ease-in-out duration-300 '
    const claseOpcionSeleccionado = 'bgLightGreyColor text-white '
  return (
    <div>
        <div className='flex justify-between my-7'>
            <label htmlFor="opc1" className={ califSelecionado == 1 ? claseOpcionSeleccionado + claseOpcion : 'mediumGreyColor' + claseOpcion  + 'lightGreyColor' }><input type='radio'  id='opc1' value='opc1' onClick={ () => setCalifSelecionado(1) } name='calif' className='hidden'  />1</label>
            <label htmlFor="opc2" className={ califSelecionado == 2 ? claseOpcionSeleccionado + claseOpcion : 'mediumGreyColor' + claseOpcion  + 'lightGreyColor' }><input type='radio'  id='opc2' value='opc2' onClick={ () => setCalifSelecionado(2) } name='calif' className='hidden'  />2</label>
            <label htmlFor="opc3" className={ califSelecionado == 3 ? claseOpcionSeleccionado + claseOpcion : 'mediumGreyColor' + claseOpcion  + 'lightGreyColor' }><input type='radio'  id='opc3' value='opc3' onClick={ () => setCalifSelecionado(3) } name='calif' className='hidden'  />3</label>
            <label htmlFor="opc4" className={ califSelecionado == 4 ? claseOpcionSeleccionado + claseOpcion : 'mediumGreyColor' + claseOpcion  + 'lightGreyColor' }><input type='radio'  id='opc4' value='opc4' onClick={ () => setCalifSelecionado(4) } name='calif' className='hidden'  />4</label>
            <label htmlFor="opc5" className={ califSelecionado == 5 ? claseOpcionSeleccionado + claseOpcion : 'mediumGreyColor' + claseOpcion  + 'lightGreyColor' }><input type='radio'  id='opc5' value='opc5' onClick={ () => setCalifSelecionado(5) } name='calif' className='hidden' />5</label>
        </div>
        <button className='whiteColor bg-orangeColor w-full rounded-2xl p-2 font-bold hover:bg-white hover:text-[#fb7413] transition ease-in-out duration-300'>S U B M I T</button>
    </div>
  )
}

export default Calificacion