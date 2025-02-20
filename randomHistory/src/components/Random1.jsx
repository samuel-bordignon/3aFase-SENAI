import { useState, useContext } from 'react'
import { useGlobalContext } from '../context/GlobalContext'
import EmojiBlock from './EmojiBlock'


// Listas de Emojis
const efeitosMagia = ['🔥', '❄️', '⚡', '🌪️', '💨', '🌊', '🪄', '🧊', '🌿', '☠️', '💀', '🩸', '💥', '🌀', '🌟', '🌑', '🕳️', '🛡️', '🎯', '📜']
const penalidadesMagia = ['💀', '😵', '🥶', '😡', '🤕', '🥸', '🤢', '⏳', '💤', '🤯', '😨', '👻', '🥵', '🐔', '🔄', '💸', '🔇', '🌓', '🔒', '🚫']
const energiaMagia = ['☀️', '🌙', '⭐', '🔥', '🌊', '🌿', '⚡', '💎', '🌬️', '☠️', '🪶', '🔋', '🩸', '⏳', '📖', '⚙️', '🌀', '🔮', '🎵', '🖤']



export default function Random1() {
	const { usuario, setUsuario, tema, setTema } = useGlobalContext()
	console.log(usuario, tema)
  const [magia, setMagia] = useState({
    efeito: { num: 1, descricao: '' },
    penalidade: { num: 2, descricao: '' },
    energia: { num: 3, descricao: '' }
  })

  // Gerar número aleatório
  const getRandomInt = (max) => Math.floor(Math.random() * max)

  // Gerar novos valores aleatórios
  const setRandomNumbers = () => {
    setMagia({
      efeito: { num: getRandomInt(efeitosMagia.length), descricao: '' },
      penalidade: { num: getRandomInt(penalidadesMagia.length), descricao: '' },
      energia: { num: getRandomInt(energiaMagia.length), descricao: '' }
    })
  }

  // Atualizar descrição da magia
  const handleInputChange = (event, type) => {
    setMagia((prev) => ({
      ...prev,
      [type]: { ...prev[type], descricao: event.target.value }
    }))
  }

  // Salvar Magia
  const saveScroll = () => {
    console.log("Magia Criada:", magia)
  }

  return (
    <div className="bg-emerald-400 flex h-[200px]">
      {/* Contêiner dos Emojis */}
      <div className="flex justify-evenly w-3/4">
        <EmojiBlock title="Efeito" emoji={efeitosMagia[magia.efeito.num]}  />
        <EmojiBlock title="Penalidade" emoji={penalidadesMagia[magia.penalidade.num]} />
        <EmojiBlock title="Energia" emoji={energiaMagia[magia.energia.num]} />
      </div>

      {/* Botões */}
      <div className="flex flex-col justify-center items-center w-1/4">
        <button className="bg-blue-700 text-white rounded-lg hover:bg-blue-800" onClick={setRandomNumbers}>
          Random
        </button>
        <button className="bg-red-600 text-white rounded-lg hover:bg-red-700" onClick={saveScroll}>
          Adicionar ao Grimório
        </button>
      </div>
    </div>
  )
}