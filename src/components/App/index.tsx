import { useState } from 'react'
import { GAME_MODE } from '../../constants'
import useHighScore from '../../hooks/useHighScore'
import { toggleGameMode } from '../../redux/game-slice'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import Controller from '../Control/ControlButtons'
import Grid from '../Grid'
import styles from './app.module.css'

function App() {
	const { score, grid, mode } = useAppSelector(state => state.game)
	const dispatch = useAppDispatch()
	const highScore = useHighScore(score)
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	function showGameMode(mode: string) {
		return mode === GAME_MODE.WALLS ? 'w/ walls' : 'w/o walls'
	}

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	return (
		<>
			<header className={styles.app_header}>
				<div>
					<button onClick={toggleMenu} className={styles.menu_button}>
						<img
							className={styles.app_img_burger}
							src='../../../public/menu.svg'
							alt='Menu'
						/>
					</button>
				</div>
				<div className={styles.score_point}>
					<span className={styles.number_score}>{highScore}+</span>
				</div>
			</header>
			{isMenuOpen && (
				<div className={styles.burger_menu}>
					<div className={styles.changemode}>
						<button onClick={() => dispatch(toggleGameMode())}>
							Toggle Gamemode
						</button>
						<div>Current: {showGameMode(mode)}</div>
					</div>
				</div>
			)}
			<div className={styles.app_lol}>
				<div className={styles.app_ha}>
					<span className={styles.logo_title}>SNAKE</span>
				</div>
				<Grid grid={grid} />
				<div className={styles.app}>
					<div className={styles.score}>
						<span className={styles.balance}>balance</span>
						<div className={styles.coin_block}>
							<span className={styles.number_score}>{score}</span>
							<img
								className={styles.app_img_coin}
								src='../../../public/coin-icon.svg'
								alt='score'
							/>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.control}>
				<Controller />
			</div>
		</>
	)
}

export default App
