import React from 'react'

// Componente reutilizável para os blocos de emoji
function EmojiBlock({ title, emoji}) {
    return (
      <div className="">
        <h3 className="text-white text-lg">{title}</h3>
        <p className="text-1">{emoji}</p>
      </div>
    )
  }

export default EmojiBlock
