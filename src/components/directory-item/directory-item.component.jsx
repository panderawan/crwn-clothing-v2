import { useNavigate } from 'react-router-dom';
import {
	DirectoryItemContainer,
	BackgroundImage,
	Body
} from './directory-item.styles';

const DirectoryItem = ({ category }) => {
	const { imageUrl, title, route } = category;
	const navigate = useNavigate();

	const onNavigateHandler = () => navigate(route);

	return (
		<DirectoryItemContainer>
			<BackgroundImage imageUrl={imageUrl} onClick={onNavigateHandler} />
			<Body onClick={onNavigateHandler}>
				<h2>{title}</h2>
				<p>Shop Now</p>
			</Body>
		</DirectoryItemContainer>
	);
};

export default DirectoryItem;
