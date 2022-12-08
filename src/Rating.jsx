import imagen from './assets/icon-star.svg'
import Calificacion from './Calificacion'
import Info from './Info'

const Rating = ( { setCalificacion } ) => {
  return (
    <>
        <img src= { imagen } alt="Imagen Star" className='mediumGreyColor p-2 rounded-full w-7' />
        <Info />
        <Calificacion setCalificacion={ setCalificacion } />
    </>
  )
}

export default Rating