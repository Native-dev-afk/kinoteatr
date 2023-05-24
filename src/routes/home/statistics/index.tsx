import { Box, Container, Title } from '@mantine/core';
import { useState } from 'react';
import Filter from './filter';
import TableStatistics from './table';

const Statistics = ({ text }: { text?: string }) => {
  const [found, setFound] = useState<boolean>(false);
  return (
    <Container id="statistics" pt={120} px={12} size={'xl'}>
      <Title
        sx={{
          fontWeight: 500,
        }}
        mb={72}
        order={2}
      >
        {text ?? 'Bo\'sh o\'rinlarni ko\'rish'}
      </Title>
      <Filter found={found} setFound={setFound} />
      <TableStatistics found={found} setFound={setFound} />
    </Container>
  );
};

export default Statistics;
