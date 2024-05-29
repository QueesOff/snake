import { useState } from 'react'

const Controller = () => {
	const [isActive, setIsActive] = useState(false)

	const simulateKeyPress = (key: string) => {
		if (!isActive) return
		const event = new KeyboardEvent('keydown', { code: key })
		window.dispatchEvent(event)
	}

	const handleStartGame = () => {
		setIsActive(true)
	}

	return (
		<div className='controls'>
			<button onClick={() => simulateKeyPress('KeyW')} disabled={!isActive}>
				<img className='icon-button' src='/arrow-top.svg' alt='Top' />
			</button>
			<div>
				<button onClick={() => simulateKeyPress('KeyA')} disabled={!isActive}>
					<img className='icon-button' src='/arrow-left.svg' alt='Left' />
				</button>
				<button onClick={handleStartGame}>
					<img className='icon-button' src='/arrow-center.svg' alt='Start' />
				</button>
				<button onClick={() => simulateKeyPress('KeyD')} disabled={!isActive}>
					<img className='icon-button' src='/arrow-right.svg' alt='Right' />
				</button>
			</div>
			<button onClick={() => simulateKeyPress('KeyS')} disabled={!isActive}>
				<img className='icon-button' src='/arrow-bottom.svg' alt='Bottom' />
			</button>
		</div>
	)
}

export default Controller
