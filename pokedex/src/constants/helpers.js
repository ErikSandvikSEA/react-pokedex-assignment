export const capitalizeFirstLetter = (string) => {
	if (string.includes('-')) {
		const hyphenIdx = string.indexOf('-')
		return (
			string.charAt(0).toUpperCase() +
			string.slice(1, hyphenIdx + 1) +
			string.charAt(hyphenIdx + 1).toUpperCase() +
			string.slice(hyphenIdx + 2)
		)
	}
	return string.charAt(0).toUpperCase() + string.slice(1)
}
