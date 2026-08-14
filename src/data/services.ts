export type Service = {
  slug: string;
  title: string;
  navLabel: string;
  description: string;
  heroImage: string;
  cardImage: string;
  body: string[];
};

export const services: Service[] = [
  {
    slug: 'holzbau-zimmerei',
    title: 'Holzbau Zimmerei',
    navLabel: 'Holzbau',
    description:
      'Im Holzbau bzw. der Zimmerei stellen und reparieren wir Holzaußenwände, Holzinnenwände, Anbauten, Holzfassaden und mehr.',
    heroImage: '/images/holzbau.svg',
    cardImage: '/images/holzbau.svg',
    body: [
      'Geht es um Holzbau bzw. Zimmerei, ist egal, ob neues Projekt, Ausbau oder Reparatur bestehender Substanz, wir planen mit Ihnen die optimale Lösung. Dabei bieten wir von Konzept bis Montage alles aus einer Hand.',
      'Im Holzbau vereinen wir die Expertise des traditionellen Zimmererhandwerks mit modernsten Methoden. Wir stellen Holzaußenwände und Holzinnenwände her, übernehmen Innenausbauten mit Holzständerwänden und Trockenbauwänden. Anbauten wie Gebäudeerweiterungen werden komplett vor Ort als Holzrahmenbau oder in Kombination mit den oben genannten Herstellungspunkten erstellt.',
      'Ihrer Fassade geben wir eine optische Generalüberholung mit Holz, planen und stellen Ferienhäuser, Gartenhäuser, Mülltonnenplätze, Vordächer und Eingangsbereiche. Zimmerermeister Sebastian Kunze berät Sie gerne, um eine für Sie passende Lösung zu finden.',
    ],
  },
  {
    slug: 'dachfenster-ueberdachungen-dachgauben-und-mehr',
    title: 'Dachfenster, Überdachungen, Dachgauben und mehr',
    navLabel: 'Dach',
    description:
      'Brauchen Sie Überdachungen oder Dachfenster? Dann brauchen Sie jemanden, der sich für Sie aufs Dach traut.',
    heroImage: '/images/dach.svg',
    cardImage: '/images/dach.svg',
    body: [
      'Brauchen Sie Überdachungen oder Dachfenster? Dann brauchen Sie jemanden der sich für Sie aufs Dach traut. Mit einem langlebigen und modern gedämmtem Dach sind Sie für die Zukunft gewappnet. Wir montieren und reparieren Dachfenster, Überdachungen, Dachgauben und mehr. So setzen wir Ihrem Bau die Krone auf.',
      'Wir stellen Dachstühle und Gauben auf, planen und binden sie ab. Für trockene und wohltemperierte vier Wände, decken und dämmen wir – nach EnEV / LBO.',
      'Das richtige Dachfenster zu finden ist nicht nur optisch relevant, sondern wichtig um effizient heizen zu können. Sollten Sie noch keine genaue Vorstellung haben welche Lösung die für Sie passende ist, beraten wir Sie gerne. Ihre Dachfenster beschaffen wir und bauen sie für Sie ein. Sparren auswechseln sowie statische Stabilisierung, Dachfensterfutter beim Innenausbau und Innenverkleidung packen wir auch an.',
      'Wenn Sie einen Ort für entspannte Augenblicke fernab vom Alltag suchen, empfehlen wir eine Loggia oder Dachterrasse.',
    ],
  },
  {
    slug: 'holzbalkon-balkongelaender-balkonverkleidung-aus-holz-und-mehr',
    title: 'Holzbalkone, Balkongeländer, Balkonverkleidungen aus Holz und mehr',
    navLabel: 'Balkone',
    description:
      'Wir bauen und reparieren Holzbalkon, Balkongeländer, Balkonverkleidung aus Holz und mehr.',
    heroImage: '/images/balkon.svg',
    cardImage: '/images/balkon.svg',
    body: [
      'Wir bauen und reparieren Holzbalkon, Balkongeländer, Balkonverkleidung aus Holz und mehr.',
      'Beim Kurzurlaub auf dem Holzbalkon kann man durchatmen und die Aussicht genießen. Er sollte auch ein schönes Ambiente bieten, damit die kurze Pause oder der Abend an der frischen Luft die gewünschte Entspannung bringen. Dazu ist ein Holzbalkon mit seiner gemütlichen Ausstrahlung und starkem Charakter perfekt geeignet.',
      'Geht es um Balkone, Balkongeländer oder Balkonverkleidungen aus Holz, planen wir den Neubau für Sie, binden ab und montieren.',
      'Tut es der alte Balkon zwar noch, braucht aber eine Generalüberholung? Dafür bieten wir auch Restaurationen an.',
    ],
  },
  {
    slug: 'terrassenueberdachungen-terrassen-holzterrassen-und-mehr',
    title: 'Terrassenüberdachungen, Terrassen, Holzterrassen und mehr',
    navLabel: 'Terrassen',
    description:
      'Wir bauen und reparieren Terrassenüberdachungen, Terrassen, Holzterrassen und mehr.',
    heroImage: '/images/terrasse.svg',
    cardImage: '/images/terrasse.svg',
    body: [
      'Wir bauen und reparieren Terrassenüberdachungen, Terrassen, Holzterrassen und mehr.',
      'Terrassen verbinden Haus und Garten harmonisch miteinander. Die passende Terrassenüberdachung hält diese trocken. Sie bringen uns so der Natur näher und ermöglichen durch den befestigten Untergrund die Möblierung des Gartens. Ob ebenerdig, erhöht oder ihr Haus umlaufend, wir helfen Ihnen die passende Terrasse zu planen und setzen sie um. Dabei achten wir auf ein mit der Architektur ihres Hauses und ihrem Grundstück harmonisierendes Ergebnis. Damit Sie gemütliche Stunden draußen verbringen können.',
      'Sollte Ihnen wichtig sein dabei immer trocken zu bleiben, bieten wir auch gerne eine überdachte Lösung an.',
      'Wir planen den Neubau für Sie, schneiden zu und montieren. Inklusive Beratung zu passenden Belägen, den geeignetsten Materialien und der Unterkonstruktion.',
    ],
  },
  {
    slug: 'carports',
    title: 'Carports, Pergolen aus Holz und mehr',
    navLabel: 'Carports',
    description: 'Wir bauen und reparieren Carports, Pergolen aus Holz und mehr.',
    heroImage: '/images/carport.svg',
    cardImage: '/images/carport.svg',
    body: [
      'Wir bauen und reparieren Carports, Pergolen aus Holz und mehr.',
      'Carport oder Garage? Ein Carport spart Ihnen Zeit. Die Genehmigung eines Carports bekommt man meist viel einfacher und schneller als die einer Garage. Dazu bietet ein Carport den besten Schutz für Ihr Fahrzeug. Sonne und Nässe werden ferngehalten und das ohne den Muff einer Garage. Auch optisch ergänzt ein Carport aus Holz Ihr Fahrzeug sowie Haus vorteilhaft. Das Gleiche gilt für eine Pergola. Die Lösung für Überdachungen zum darunter Sitzen oder um Gegenstände trocken darunter abzustellen.',
      'Wir planen den Neubau Ihres Carports oder Ihrer Pergola, binden ab und montieren. Je nach Vorliebe, frei stehend oder mit Haus-/Gebäudeanschluss. Natürlich inklusive Eindeckung.',
      'Tut es der alte Carport oder die alte Pergola noch, braucht aber eine Generalüberholung? Auch dafür bieten wir Restaurationen an.',
    ],
  },
];

export const getServiceBySlug = (slug: string) => services.find((service) => service.slug === slug);
