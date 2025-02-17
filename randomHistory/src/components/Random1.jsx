import { useState } from 'react';
import { IoTicketOutline } from "react-icons/io5";

function Random1() {
	const [random, setRandom] = useState({ um: 1, dois: 2, tres: 3 });
	const [inputValues, setInputValues] = useState({ efeito: '', penalidade: '', energia: '' });
	function getRandomInt(max) {
		max = Math.floor(max);
		return Math.floor(Math.random() * max);
	}

	function setRandomNumbers() {
		setRandom({
			um: getRandomInt(20),
			dois: getRandomInt(20),
			tres: getRandomInt(20)
		});
		setInputValues({ efeito: '', penalidade: '', energia: '' })
	}

	function handleInputChange(event, type) {
		setInputValues({ ...inputValues, [type]: event.target.value });
	}
	function saveScroll() {
		const magiaCriada = {
			efeito: {
				emoji: efeitosMagia[random.um],
				descricao: inputValues.efeito
			},
			penalidade: {
				emoji: penalidadesMagia[random.dois],
				descricao: inputValues.penalidade
			},
			energia: {
				emoji: efeitosMagia[random.tres],
				descricao: inputValues.energia
			}
		}
		console.log(magiaCriada)
	}

	const efeitosMagia = [
		'🔥',
		'❄️',
		'⚡',
		'🌪️',
		'💨',
		'🌊',
		'🪄',
		'🧊',
		'🌿',
		'☠️',
		'💀',
		'🩸',
		'💥',
		'🌀',
		'🌟',
		'🌑',
		'🕳️',
		'🛡️',
		'🎯',
		'📜'
	];
	const penalidadesMagia = [
		'💀',
		'😵',
		'🥶',
		'😡',
		'🤕',
		'🥸',
		'🤢',
		'⏳',
		'💤',
		'🤯',
		'😨',
		'👻',
		'🥵',
		'🐔',
		'🔄',
		'💸',
		'🔇',
		'🌓',
		'🔒',
		'🚫'
	];
	const energiaMagia = [
		'☀️',
		'🌙',
		'⭐',
		'🔥',
		'🌊',
		'🌿',
		'⚡',
		'💎',
		'🌬️',
		'☠️',
		'🪶',
		'🔋',
		'🩸',
		'⏳',
		'📖',
		'⚙️',
		'🌀',
		'🔮',
		'🎵',
		'🖤'
	];

	return (
		<div className="container-magia">
			<h1>Seja bem vindo ao random Magic!!!! crie suas magias aleatóriamentes, que loucura</h1>
			<div className="container-emojis">
				<div className="container-emoji">
					<h3 className="title-emojis">Efeito</h3>
					<p className="magia-emoji">{efeitosMagia[random.um]}</p>
					<div className="container-input">
						<p>sua magia vai...</p>
						<input className="emoji-input" type="text" value={inputValues.efeito} onChange={(e) => handleInputChange(e, 'efeito')} />
					</div>
				</div>
				<div className="container-emoji">
					<h3 className="title-emojis">Penalidade</h3>
					<p className="magia-emoji">{penalidadesMagia[random.dois]}</p>
					<div className="container-input">
						<p>mas...</p>
					<input className="emoji-input" type="text" value={inputValues.penalidade} onChange={(e) => handleInputChange(e, 'penalidade')} />
					</div>
				</div>
				<div className="container-emoji">
					<h3 className="title-emojis">Energia</h3>
					<p className="magia-emoji">{energiaMagia[random.tres]}</p>
					<div className="container-input">
						<p>e sua maia vai se utilizar da...</p>
						<input className="emoji-input" type="text" value={inputValues.energia} onChange={(e) => handleInputChange(e, 'energia')} />
					</div>
				</div>
			</div>
			<div className="btn-container">
				<button className="btn-random" onClick={() => setRandomNumbers()}>
					Random
				</button>
				<button className="btn-save" onClick={() => saveScroll()}>
					Adicionar ao seu grimório
				</button>
				<IoTicketOutline />
			</div>
		</div>
	);
}

export default Random1;
