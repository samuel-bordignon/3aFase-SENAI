import React from 'react';
import { useState } from 'react';

function Demo1() {
	const [ cornometro, setCornometro ] = useState(0);
	function alertaUsuario() {
		alert('Você clicou no botão');
	}

    const ordenaArray = () => {
        const array = [1, 2, 3]
        const elemento = array[2]
        let novoArray  = array.pop()
        console.log(novoArray)
        
        const array2 = [novoArray.push(elemento)]
        console.log(array2)
    }
    ordenaArray()
	return (
		<div className="container-demo1">
			<h2>Demo1</h2>
			<button onClick={alertaUsuario}>clica em mim</button>
			<button
				onClick={() => {
					alert('executei uma arrow function');
				}}
			>
				clica em mim
			</button>
			<div className="container-cornometro">
				Cornometro: {cornometro}
				<button
					onClick={() => {
						setCornometro(cornometro+1);
					}}
				>
					+
				</button>
			</div>
		</div>
	);
}

export default Demo1;
