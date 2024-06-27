'use client';

import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import Stack from '@mui/material/Stack';
import { Moon as MoonIcon } from '@phosphor-icons/react/dist/ssr/Moon';
import { Sun as SunIcon } from '@phosphor-icons/react/dist/ssr/Sun';

import { Option } from './option';

export function OptionsColorScheme({ onChange, value }) {
  return (
    <Stack spacing={1}>
      <InputLabel>Color scheme</InputLabel>
      <Stack direction="row" spacing={2} sx={{ alignItems: 'center', flexWrap: 'wrap' }}>
        {[
          { label: 'Light', value: 'light', icon: <SunIcon /> },
          { label: 'Dark', value: 'dark', icon: <MoonIcon /> },
        ].map((option) => (
          <Option
            icon={option.icon}
            key={option.value}
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
