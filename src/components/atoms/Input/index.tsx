import { styled } from 'styled-components';
import { FontSize } from '@/types/styleTheme';
import { fontSize } from '@/constants/theme';
type InputProps = {
  size: FontSize;
} & React.InputHTMLAttributes<HTMLInputElement>;
export const Input = (props: InputProps) => {
  const { size } = props;
  const scale = fontSize[size] / 16;
  return <StyledInput {...props} scale={scale} size={size} />;
};
const StyledInput = styled.input`
  transform: scale(${(props) => props.scale});
  transform-origin: left top;
  font-size: 16px;
`;
