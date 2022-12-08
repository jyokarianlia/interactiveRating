import imgAgradecimiento from './assets/illustration-thank-you.svg'

const Agradecimieto = ( { calificacion } ) => {
  return (
    <div className='flex flex-col items-center '>
        <img src= { imgAgradecimiento } alt="Imagen de agradecimiento" className=' w-1/2 mt-2' />
        <p className='m-5 py-2 px-6 mediumGreyColor rounded-full orangeColor'>You selected { calificacion } out of 5</p>
        <h2 className='text-3xl whiteColor'>Thank you!</h2>
        <p className='text-center mt-5 lightGreyColor'>We appreciate you taking the time to give a rating. If you ever need more support, 
  don’t hesitate to get in touch!</p>
    </div>
  )
}

export default Agradecimieto