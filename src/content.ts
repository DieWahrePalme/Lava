// ALL website copy lives here (German). Edit text freely.
// Text provided by the band. Still open: imprint/privacy, concert dates, recordings.

export const site = {
  name: 'LAVA',
  lang: 'de',
  title: 'LAVA – Musik für die Seele',
  description:
    'LAVA: Entspannungsmusik mit Akustikgitarre, Handpan und ruhigen Beats. Für Yoga, Meditation, Wellness und Achtsamkeit.',
  tagline: 'Musik für die Seele',
  mantra: ['Innehalten', 'Atmen', 'Eintauchen', 'Loslassen'],
  skip: 'Zum Inhalt springen',
};

export const about = {
  title: 'Eintauchen. Loslassen. Ankommen.',
  paragraphs: [
    'LAVA steht für Entspannungsmusik, Achtsamkeit und den bewussten Ausbruch aus der Hektik des Alltags.',
    'Mit einer besonderen Verbindung aus Akustikgitarre, Handpan und ruhigen Beats erschafft LAVA eine Klangwelt, die dazu einlädt, innezuhalten, durchzuatmen und den Moment bewusst wahrzunehmen.',
    'Die Musik begleitet auf einer Reise nach innen – weg vom täglichen Stress und der Reizüberflutung unserer hektischen Welt. Sanfte Gitarrenklänge, die warmen Töne der Handpan und meditative Beats verbinden sich zu einer Atmosphäre voller Ruhe, positiver Energie und Harmonie.',
  ],
};

export const occasions = {
  title: 'Raum zum Ankommen.',
  text: 'Ob vor oder nach einer Yogastunde, bei Meditation, Entspannung, Wellness oder einfach zum Abschalten nach einem langen Tag: LAVA schafft Raum, um zur Ruhe zu kommen und neue Kraft zu schöpfen.',
  items: [
    { symbol: '☸', name: 'Achtsamkeit', text: 'Den Moment bewusst wahrnehmen.' },
    { symbol: '☯', name: 'Balance', text: 'Zwischen Anspannung und Ruhe.' },
    { symbol: '❁', name: 'Loslassen', text: 'Alltag, Stress und Reizüberflutung hinter sich lassen.' },
    { symbol: 'ॐ', name: 'Körper, Geist & Seele', text: 'Die Verbindung, die im Yoga im Mittelpunkt steht.' },
  ],
  closing: 'LAVA möchte nicht nur Musik machen, sondern einen Moment schaffen, in dem die Zeit für einen Augenblick stillsteht.',
  imageAlt: 'Buddha-Figur aus Lava, in einer Hand eine Handpan, in der anderen eine Gitarre',
};

export const instruments = {
  title: 'Der Klang von LAVA.',
  items: [
    { name: 'Akustikgitarre', text: 'Sanfte Gitarrenklänge, die tragen und beruhigen.' },
    { name: 'Handpan', text: 'Die warmen, schwebenden Töne der Handpan.' },
    { name: 'Percussion', text: 'Ein ruhiger, lebendiger Puls im Hintergrund.' },
    { name: 'Ruhige Beats', text: 'Meditative Beats, die eine Atmosphäre voller Ruhe schaffen.' },
  ],
};

export const bio = {
  title: 'Biografie.',
  intro: 'LAVA ist ein Musikprojekt von Gianni von Weitershausen und Jimmy Götz, das aus der gemeinsamen Leidenschaft für Musik, Natur und Achtsamkeit entstanden ist.',
  imageAlt: 'Gianni und Jimmy von LAVA mit Handpan und Akustikgitarre auf der Bühne bei Sonnenuntergang',
  people: [
    {
      name: 'Gianni von Weitershausen',
      role: 'Akustikgitarre',
      text: 'Gianni wurde in München geboren und lebte zuletzt 14 Jahre in Berlin. Nach seinem Schauspielstudium in München widmete er sich neben seiner künstlerischen Tätigkeit schon früh der Musik. Bereits seit seinem 12. Lebensjahr spielt er Gitarre.',
    },
    {
      name: 'Jimmy Götz',
      role: 'Handpan, Percussion & Schlagzeug',
      text: 'Auch Jimmy wurde in München geboren. Bereits mit sechs Jahren erlernte er sein erstes Instrument. Seit drei Jahrzehnten ist er als Schlagzeuger und Percussionist aktiv. Seit vielen Jahren veranstaltet er zudem Handpan-Workshops und beschäftigt sich intensiv mit den besonderen Klängen dieses außergewöhnlichen Instruments.',
    },
  ],
  storyTitle: 'Wie LAVA entstand.',
  story: [
    'Vor rund einem Jahr lernten sich Gianni und Jimmy beim gemeinsamen Musizieren kennen. Schnell entstand eine besondere musikalische Verbindung und die Idee, daraus etwas Eigenes entstehen zu lassen. So wurde das Musikprojekt LAVA gegründet.',
    'Ihr gemeinsamer Übungsraum befindet sich auf einem Bauernhof, umgeben von Natur und Ruhe. Genau diese Umgebung prägt die Musik von LAVA und inspiriert die beiden beim Schreiben und Entwickeln ihrer Songs.',
  ],
  closing: 'Zwei Musiker, eine gemeinsame Leidenschaft und Musik, die Raum für Ruhe schafft.',
};

export const music = {
  title: 'Hören.',
  text: 'Schau und hör direkt rein. Mehr Videos findest du auf YouTube und Instagram.',
  videos: [
    { id: '-mEV-HgwXoY', title: 'LAVA Mars' },
    { id: 'ttpfXYeOk64', title: 'LAVA Jupiter' },
    { id: 'MOmMaX5el10', title: 'LAVA' },
  ],
  playLabel: 'Video abspielen:',
  tracks: [] as { title: string; length: string }[],
  links: [
    { label: 'YouTube', href: 'https://www.youtube.com/@Lava-spirituellmusic' },
    { label: 'Instagram', href: 'https://www.instagram.com/lava_spiritual_music/' },
  ],
};

export const live = {
  title: 'Live.',
  text: 'Konzerttermine folgen. Aktuelle Infos gibt es auf Instagram und Facebook.',
  dates: [] as { date: string; place: string; venue: string; note: string }[],
};

export const yoga = {
  title: 'Für Yoga-Studios.',
  greeting: 'Liebes Yoga-Team,',
  paragraphs: [
    'wir sind LAVA – ein Musikprojekt mit Handpan, Akustikgitarre, Percussion und ruhigen Beats.',
    'Unsere 30- bis 45-minütige musikalische Begleitung schafft eine entspannte Atmosphäre für Yoga, Meditation und Abschlussentspannung.',
    'Gerne würden wir Euch LAVA persönlich vorstellen und eine Yogastunde musikalisch begleiten. Bei Interesse freuen wir uns über Eure Rückmeldung.',
  ],
  sign: 'Namaste, Gianni & Jimmy von LAVA',
};

// Real channels of the band. TODO: replace the Facebook link with the exact page URL.
export const follow = {
  title: 'Folge dem Fluss.',
  text: 'Neue Klänge, Meditationen und Momente: Finde LAVA dort, wo die Musik lebt.',
  channels: [
    { name: 'Instagram', handle: '@lava_spiritual_music', href: 'https://www.instagram.com/lava_spiritual_music/' },
    { name: 'YouTube', handle: '@Lava-spirituellmusic', href: 'https://www.youtube.com/@Lava-spirituellmusic' },
    { name: 'Facebook', handle: 'LAVA MeditationMusic', href: 'https://www.facebook.com/search/pages?q=LAVA%20MeditationMusic' },
  ],
  tags: ['lavamusic', 'spiritualmusic', 'meditationmusic', 'handpan', 'guitar'],
};

export const contact = {
  title: 'Komm näher.',
  text: 'Für Yogastunden, Meditationen, Wellness und Veranstaltungen: Schreib oder ruf uns an.',
  phone: '0173 / 35 02 608',
  cta: 'Jetzt anrufen',
};

export const footer = {
  text: '© LAVA · Gianni von Weitershausen & Jimmy Götz',
  links: [
    { label: 'Impressum', href: '#' },
    { label: 'Datenschutz', href: '#' },
  ],
};
