import { useState } from "react"
import { useGlobalContext } from "../context/GlobalContext"

function ScoreBar() {
    const { almasNormais, almasChefes } = useGlobalContext()
  return (
    <div className="bg-red-500 h-[60px]">
        <h1>Almas Normaiszinhas: {almasNormais}</h1>
        <h1>Almas Chefonas:{almasChefes} </h1>
    </div>
  )
}

export default ScoreBar
