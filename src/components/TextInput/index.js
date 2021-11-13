import React from 'react'
import cn from 'classnames'
import styles from './TextInput.module.sass'

const TextInput = ({ className, isLeft, label, ...props } = { isLeft: false }) => {
	return (
		<div className={isLeft ? cn(styles.field, className) : cn(styles.field, className, styles.leftSide)}>
			{label && <div className={styles.label}>{label}</div>}
			<div className={styles.wrap}>
				<input className={styles.input} {...props} />
			</div>
		</div>
	)
}

export default TextInput
