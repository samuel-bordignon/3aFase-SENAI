import { useState } from 'react';

function Random1() {
	const [ random, setRandom ] = useState({ um: 1, dois: 2, tres: 3 });
	const [ inputValues, setInputValues ] = useState({ efeito: '', penalidade: '', energia: '' });
	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min) + min);
	}

	function setRandomNumbers() {
		setRandom({
			um: getRandomInt(0, 20),
			dois: getRandomInt(0, 20),
			tres: getRandomInt(0, 20)
		});
        setInputValues({ efeito: '', penalidade: '', energia: '' })
	}

	function handleInputChange(event, type) {
		setInputValues({ ...inputValues, [type]: event.target.value });
	}
	function saveScroll() {
        const magiaCriada = {
            efeito:{
                emoji: efeitosMagia[random.um],
                descricao: inputValues.efeito
            },
            penalidade:{
                emoji: penalidadesMagia[random.dois],
                descricao: inputValues.penalidade
            },
            energia:{
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
			<div className="container-emojis">
				<div className="container-emoji">
					<h3 className="title-emojis">Efeito</h3>
					<p className="magia-emoji">{efeitosMagia[random.um]}</p>
					<input className="emoji-input" type="text" value={inputValues.efeito} onChange={(e)=> handleInputChange(e, 'efeito' )}/>
				</div>
				<div className="container-emoji">
					<h3 className="title-emojis">Penalidade</h3>
					<p className="magia-emoji">{penalidadesMagia[random.dois]}</p>
					<input className="emoji-input" type="text" value={inputValues.penalidade} onChange={(e)=> handleInputChange(e, 'penalidade' )}/>
				</div>
				<div className="container-emoji">
					<h3 className="title-emojis">Energia</h3>
					<p className="magia-emoji">{energiaMagia[random.tres]}</p>
					<input className="emoji-input" type="text" value={inputValues.energia} onChange={(e)=> handleInputChange(e, 'energia' )}/>
				</div>
			</div>
			<div className="btn-container">
				<button className="btn-random" onClick={() => setRandomNumbers()}>
					Random
				</button>
				<button className="btn-save" onClick={()=>saveScroll()}>
					Adicionar ao seu grimório
				</button>
			</div>
		</div>
	);
}

export default Random1;
