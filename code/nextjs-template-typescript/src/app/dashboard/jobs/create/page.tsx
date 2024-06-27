import * as React from 'react';
import type { Metadata } from 'next';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { config } from '@/config';
import { JobCreateForm } from '@/components/dashboard/jobs/job-create-form';

export const metadata = { title: `Create | Jobs | Dashboard | ${config.site.name}` } satisfies Metadata;

export default function Page(): React.JSX.Element {
  return (
    <Box sx={{ display: 'flex', flex: '1 1 0', minHeight: 0 }}>
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          backgroundImage: 'url(/assets/people-talking.png)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          flex: '0 0 auto',
          display: { xs: 'none', md: 'block' },
          width: { md: '400px', xl: '500px' },
        }}
      />
      <Box sx={{ flex: '1 1 auto', overflowY: 'auto', p: { xs: 4, sm: 6, md: 8 } }}>
        <Stack maxWidth="md" spacing={4}>
          <Typography variant="h4">Create job ad</Typography>
          <JobCreateForm />
        </Stack>
      </Box>
    </Box>
  );
}
