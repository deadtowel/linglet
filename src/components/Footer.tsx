import { usePalette } from '../hooks/usePalette';

export default function Footer() {
	const { secondary, white } = usePalette();

	const styles = {
		background: secondary,
		color: white,
	};

	return <div style={styles}>Powered by Unity</div>;
}
