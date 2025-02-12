import React from 'react';

function BoasVindas({ nome, mensagem }) {
	return (
		<div>
			<div className="bg-red-500">
				<p>Bem vindo {nome}</p>
				<p>{mensagem}</p>
			</div>
            <button onClick={()=>{console.log({mensagem, nome})}}>
                Log
            </button>
		</div>
	);
}

export default BoasVindas;
