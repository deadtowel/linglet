import { useTheme } from '@mui/material';
import styled from '@emotion/styled';

const StyledFooter = styled.div`
  background: ${(props) => props.color};
`;

export default function Footer() {
  const theme = useTheme();

  return (
    <StyledFooter color={theme.palette.primary.main}>
      © 2022 Linglet Inc.
    </StyledFooter>
  );
}
