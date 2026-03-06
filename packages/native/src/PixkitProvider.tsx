import React, { createContext, useContext } from 'react';
import { FONT_FAMILIES, type PixkitFont } from './fonts';

type PixkitContextValue = {
  font: PixkitFont;
  fontFamilies: (typeof FONT_FAMILIES)[PixkitFont];
};

const PixkitContext = createContext<PixkitContextValue>({
  font: 'press-start-2p',
  fontFamilies: FONT_FAMILIES['press-start-2p'],
});

type Props = {
  font?: PixkitFont;
  children: React.ReactNode;
};

export function PixkitProvider({ font = 'press-start-2p', children }: Props) {
  return (
    <PixkitContext.Provider value={{ font, fontFamilies: FONT_FAMILIES[font] }}>
      {children}
    </PixkitContext.Provider>
  );
}

export function usePixkitFont() {
  return useContext(PixkitContext).fontFamilies;
}
