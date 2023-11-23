import { Box, Title } from './Container.styled';

export const Container = props => (
  <Box>
    <Title>{props.title}</Title>
    {props.children}
  </Box>
);