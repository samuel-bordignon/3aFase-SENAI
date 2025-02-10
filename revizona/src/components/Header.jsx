import BoasVindas from "./BoasVindas"
import { useState } from "react"

function Header() {
  const [nome, setNome] = useState("fulano")
  const [mensagem, setMensagem] = useState("fala fiote, bão?")
  return (
    <div className="container-header">
      <p>Logo</p>
      <p>Link</p>
      <p>Link</p>
      <p>Link</p>
      <p>Link</p>
      {nome.length > 0  && <BoasVindas nome={nome} mensagem={mensagem} />}
    </div>
  )
}

export default Header
