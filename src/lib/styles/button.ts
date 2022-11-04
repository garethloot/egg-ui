import type { ButtonSize, ButtonWide, ButtonColor, ButtonStyle } from '$lib/types/button';

const buttonStyle = {
	default: false,
	outline: 'btn-outline',
	square: 'btn-square',
	circle: 'btn-circle',
	link: 'btn-link',
	glass: 'glass'
};

const buttonSize = {
	xsmall: 'btn-xs',
	small: 'btn-sm',
	medium: 'btn-md',
	large: 'btn-lg'
};

const buttonWide = {
	default: undefined,
	wide: 'btn-wide',
	full: 'btn-block'
};

const buttonColor = {
	default: false,
	primary: 'btn-primary',
	secondary: 'btn-secondary',
	accent: 'btn-accent',
	info: 'btn-info',
	success: 'btn-success',
	warning: 'btn-warning',
	error: 'btn-error',
	ghost: 'btn-ghost'
};

function getClasses(size: ButtonSize, wide: ButtonWide, style: ButtonStyle, color: ButtonColor) {
	return [
		'btn',
		buttonSize[size],
		buttonWide[wide],
		buttonStyle[style],
		buttonColor[color],
		'gap-2'
	]
		.filter((item) => item)
		.join(' ');
}

export { getClasses, buttonSize };
