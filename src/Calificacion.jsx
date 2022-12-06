import React from 'react'

const Calificacion = () => {
  return (
    <div>
        <div className='flex justify-between my-7'>
            <div className=' rounded-full mediumGreyColor px-[20px] py-3 lightGreyColor hover:cursor-pointer hover:bg-[#fb7413] hover:text-white transition ease-in-out duration-300'>1</div>
            <div className=' rounded-full mediumGreyColor px-[19px] py-3 lightGreyColor hover:cursor-pointer hover:bg-[#fb7413] hover:text-white transition ease-in-out duration-300'>2</div>
            <div className=' rounded-full mediumGreyColor px-[19px] py-3 lightGreyColor hover:cursor-pointer hover:bg-[#fb7413] hover:text-white transition ease-in-out duration-300'>3</div>
            <div className=' rounded-full mediumGreyColor px-[19px] py-3 lightGreyColor hover:cursor-pointer hover:bg-[#fb7413] hover:text-white transition ease-in-out duration-300'>4</div>
            <div className=' rounded-full mediumGreyColor px-[19px] py-3 lightGreyColor hover:cursor-pointer hover:bg-[#fb7413] hover:text-white transition ease-in-out duration-300'>5</div>
        </div>
        <button className='whiteColor bg-orangeColor w-full rounded-2xl p-2 font-bold hover:bg-white hover:text-[#fb7413] transition ease-in-out duration-300'>S U B M I T</button>
    </div>
  )
}

export default Calificacion