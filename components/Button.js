import styled from 'styled-components';

const Button = styled.button`
	border-radius: ${(props) =>
		props.rounded
			? '3px'
			: props.pill
			? '50px'
			: props.default
			? '0px'
			: '0px'};
	background-color: ${({ theme }) => theme.colors.yellow};
	width: 50px;
	border: none;
	color: ${({ theme }) => theme.colors.white};
	cursor: pointer;
	padding: 10px;
`;

export default Button;
