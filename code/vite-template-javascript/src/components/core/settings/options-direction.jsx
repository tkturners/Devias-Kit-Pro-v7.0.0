'use client';

import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import Stack from '@mui/material/Stack';
import { TextAlignLeft as TextAlignLeftIcon } from '@phosphor-icons/react/dist/ssr/TextAlignLeft';
import { TextAlignRight as TextAlignRightIcon } from '@phosphor-icons/react/dist/ssr/TextAlignRight';

import { Option } from './option';

export function OptionsDirection({ onChange, value }) {
  return (
    <Stack spacing={1}>
      <InputLabel>Orientation</InputLabel>
      <Stack direction="row" spacing={2} sx={{ alignItems: 'center', flexWrap: 'wrap' }}>
        {[
          { label: 'Left-to-right', value: 'ltr', icon: <TextAlignLeftIcon /> },
          { label: 'Right-to-left', value: 'rtl', icon: <TextAlignRightIcon /> },
        ].map((option) => (
          <Option
            icon={option.icon}
            key={option.label}
            label={option.label}
            onClick={() => {
              onChange?.(option.value);
            }}
            selected={option.value === value}
          />
        ))}
      </Stack>
    </Stack>
  );
}
