import * as React from 'react';
import Switch from '@mui/material/Switch';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export const Switcher = () => {
  const { setTheme } = useContext(ThemeContext);

  const handleChange = (event) => {
    setTheme(event.target.checked ? 'white' : 'rgba(0, 0, 255, 0.477)')
  }

  return (
    <div>
      <Switch {...label} defaultChecked onChange={handleChange} />
    </div>
  );
}