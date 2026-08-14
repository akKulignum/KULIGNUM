export const basePath = (import.meta.env.BASE_URL || '/').replace(/\/+$/, '') || '/';

export const withBase = (path: string) => {
  const cleanedPath = path.startsWith('/') ? path : `/${path}`;
  return basePath === '/' ? cleanedPath : `${basePath}${cleanedPath}`;
};

export const site = {
  name: 'Zimmerei Kulignum Holzbau',
  shortName: 'Kulignum Holzbau',
  claim: 'Zimmerei Meisterbetrieb aus Altlußheim',
  url: 'https://akKulignum.github.io/KULIGNUM',
  address: 'Dornierstraße 6, 68804 Altlußheim',
  addressNote:
    'Bitte beachten! Die Adresse dient vorläufig nur der Kommunikation per Post. Das Betriebsgebäude ist noch im Bau.',
  phone: '06205 255 006 2',
  phoneCompact: '06205 255 0062',
  email: 'kontakt@kulignum.de',
  openingHours: 'Mo - Fr 9 - 16 Uhr, Termine nach Vereinbarung',
  copyright: 'Zimmerei Kulignum Holzbau © 2026 All Rights Reserved.',
  nav: [
    { label: 'Home', href: withBase('/') },
    { label: 'Holzbau', href: withBase('/service/holzbau-zimmerei/') },
    { label: 'Dach', href: withBase('/service/dachfenster-ueberdachungen-dachgauben-und-mehr/') },
    { label: 'Balkone', href: withBase('/service/holzbalkon-balkongelaender-balkonverkleidung-aus-holz-und-mehr/') },
    { label: 'Terrassen', href: withBase('/service/terrassenueberdachungen-terrassen-holzterrassen-und-mehr/') },
    { label: 'Carports', href: withBase('/service/carports/') },
    { label: 'Kontakt', href: withBase('/kontakt/') },
  ],
};
