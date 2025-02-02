import React from "react";
import { getImg } from "../../hook/Helper";
import styles from './Home.module.sass';
import './Home.scss'
import { CardNum } from './CardNum'
import { CardObj } from './CardObj'
import { HolidayStake } from './HolidayStake'

export const Home = () => {

	return (
		<div className={styles.div} style={{ backgroundImage: `url(${getImg('home/bg.png')})` }}>
			<CardNum />
			<CardObj />
			<HolidayStake />
		</div>
	)
}