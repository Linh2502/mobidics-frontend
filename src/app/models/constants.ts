export const courseTypes: any[] = [
  {label: 'Seminar', value: 0},
  {label: 'Übung', value: 1},
  {label: 'Vorlesung', value: 2}
];

export const socialForms: any[] = [
  {label: 'Plenum interaktiv', value: 0},
  {label: 'Partner/Gruppenarbeit', value: 1},
  {label: 'Plenum untereinander', value: 2},
  {label: 'Einzelarbeit', value: 3},
  {label: 'Plenum frontal', value: 4}
];

export const phases: any[] = [
  {label: '(Lern-)Atmosphäre fördern', value: 0},
  {label: 'Ausrichten', value: 1},
  {label: 'Vorwissen aktivieren', value: 2},
  {label: 'Informieren', value: 3},
  {label: 'Verarbeiten', value: 4},
  {label: 'Auswerten', value: 5}
];

export const subPhases: any[][] = [
  [
    {label: 'Kennenlernen', value: 11},
    {label: 'Persönlicher Austausch (Erfahrung)', value: 12},
    {label: 'Gruppengefühl stärken', value: 13},
    {label: 'Auflockerung', value: 6},
    {label: 'Ausklang', value: 14}
  ],
  [
    {label: 'Auf Thema einstimmen / Sensibilisieren', value: 0},
  ],
  [
    {label: 'Vorwissen erfragen', value: 1},
    {label: 'Inhalte wiederholen', value: 2}],
  [
    {label: 'Wissensinput', value: 3},
    {label: 'Wissen generieren', value: 4}
  ],
  [
    {label: 'Kritische Auseinandersetzung mit Wissen', value: 5},
    {label: 'Wissen anwenden / umsetzen', value: 7},
    {label: 'Wissen festigen', value: 8},
    {label: 'Auflockerung', value: 19},
  ],
  [
    {label: 'Wissen abfragen', value: 9},
    {label: 'Lernprozess reflektieren', value: 10},
    {label: 'Feedback einholen', value: 18}
  ]
];

export const userTypes: any[] = [
  {label: '--', value: -1},
  {label: 'Fest angestellt', value: 0},
  {label: 'Befristet angestellt', value: 1},
  {label: 'Beamter', value: 2},
  {label: 'Freiberuflich', value: 3},
  {label: 'Anderes', value: 99}
];

export const userStatuses: any[] = [
  {label: '--', value: -1},
  {label: 'Prof.', value: 0},
  {label: 'Dr..', value: 1},
  {label: 'Dipl.', value: 2},
  {label: 'Anderes', value: 99}
];

export const genders = [
  {label: 'Männlich', value: 0},
  {label: 'Weiblich', value: 1}
];

export const languages = [
  {label: 'Deutsch', value: 'de'},
  {label: 'Englisch', value: 'en'},
  {label: 'Französisch', value: 'fr'},
  {label: 'Spanisch', value: 'sp'}
];
