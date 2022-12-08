import { useState } from "react"
import Agradecimieto from "./Agradecimieto"
import Rating from "./Rating"

function App() {
  const [ calificaion , setCalificacion ] = useState(0)

  return (
    <div className="font-Text w-screen h-screen veryDarkBlueColor flex justify-center items-center">
      <div className="darkBlueColor w-[330px] h-[350px] rounded-lg p-4">
        { calificaion == 0 ? <Rating setCalificacion={ setCalificacion } /> : <Agradecimieto calificacion={ calificaion } /> }
      </div>
    </div>
  )
}

export default App
