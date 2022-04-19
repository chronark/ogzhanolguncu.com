import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const CodeContainer = styled(Box)`
  > * {
    &:first-child {
      ::before {
        content: none;
      }
    }
  }
`;
