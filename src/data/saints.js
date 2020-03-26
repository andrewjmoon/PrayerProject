let data = [
  {
    id: 1,
    name: 'St. Andrew',
    feastday: 'November 30',
    notable: 'Patron Saint of Fishermen, Greece, Russia, and Scotland',
    info: 'http://www.newadvent.org/cathen/01471a.htm'
  },
  {
    id: 2,
    name: 'Mother Angelica',
    feastday: 'N/A',
    notable: 'Founder of the Eternal World Television Network',
    info: 'https://www.ewtn.com/motherangelica/life.asp'
  },
  {
    id: 3,
    name: 'St. Augustine',
    feastday: 'August 28',
    notable:
      'Patron Saint against sore eyes, against vermin, brewers, printers, and theologians',
    info: 'https://catholicsaints.info/saint-augustine-of-hippo/'
  },
  {
    id: 4,
    name: 'St. Anthony of Padua',
    feastday: 'June 13',
    notable: 'Patron Saint of Lost Things',
    info: 'https://www.stanthony.org/who-st-anthony/'
  },
  {
    id: 5,
    name: 'St. Christopher',
    feastday: 'July 25',
    notable: 'Patron Saint of Travellers',
    info:
      'https://aleteia.org/2018/07/25/what-we-know-about-st-christopher-is-everything-we-need-to-know-heres-his-story/'
  },
  {
    id: 6,
    name: 'Archbishop Fulton Sheen',
    feastday: 'N/A',
    notable: 'Renowned Preacher and Life is Worth Living Program',
    info: 'https://celebratesheen.com/biography/'
  },
  {
    id: 7,
    name: 'St. George Patron of England',
    feastday: 'April 23',
    notable: 'Patron Saint of England & Catalonia',
    info: 'http://www.newadvent.org/cathen/06453a.htm'
  },
  {
    id: 8,
    name: 'St. Gerald Majella',
    feastday: 'October 16',
    notable: 'Patron Saint of Expectant Mothers',
    info: 'https://www.catholic.org/saints/saint.php?saint_id=150'
  },
  {
    id: 9,
    name: 'St. Ignatius of Loyola',
    feastday: 'July 31',
    notable: 'Patron Saint of Retreats, Educators, and Education',
    info: 'https://www.franciscanmedia.org/saint-ignatius-of-loyola/'
  },
  {
    id: 10,
    name: 'St. Luke',
    feastday: 'October 18',
    notable:
      'Physicians, Surgeons, Artists/Painters, Brewers, Butchers, Notaries',
    info: 'https://www.catholic.org/saints/saint.php?saint_id=76'
  },
  {
    id: 11,
    name: 'St. Jude',
    feastday: 'October 28',
    notable: 'Desperate causes, desperate situations, lost causes',
    info: 'https://www.catholic.org/saints/saint.php?saint_id=127'
  },
  {
    id: 12,
    name: 'St. Maximilian Kolbe',
    feastday: 'August 14',
    notable:
      'Patron Saint of drug addicts, prisoners, families, and the pro-life movement',
    info: 'https://saintmaximiliankolbe.com/biography/'
  },
  {
    id: 13,
    name: 'St. Michael the Archangel',
    feastday: 'September 29',
    notable:
      'Patron Saint of grocers, soldiers, doctors, mariners, police, and sickness',
    info: 'https://www.catholic.org/saints/saint.php?saint_id=308'
  },
  {
    id: 14,
    name: 'St. Monica',
    feastday: 'August 27',
    notable: 'Patron Saint of Alcoholics, Conversion, Married Women, Mothers',
    info: 'https://www.franciscanmedia.org/saint-monica/'
  },
  {
    id: 15,
    name: 'St. Patrick',
    feastday: 'March 17',
    notable: 'Patron Saint of Ireland',
    info: 'http://www.newadvent.org/cathen/11554a.htm'
  },
  {
    id: 16,
    name: 'St. Pio of Pietrelcina',
    feastday: 'September 23',
    notable: 'Patron Saint of Adolescents, Pietrelcina, Stress relief',
    info: 'https://www.padrepio.org/about/padre-pios-story/'
  },
  {
    id: 17,
    name: 'St. Peregrine',
    feastday: 'May 1',
    notable: 'Patron Saint of Cancer Victims',
    info: 'https://www.catholic.org/saints/saint.php?saint_id=237'
  },
  {
    id: 18,
    name: 'St. Rita',
    feastday: 'May 22',
    notable:
      'Patron Saint of Impossible Causes, Reconciliation, Peacemaking, and Healing',
    info: 'https://www.saintritashrine.org/life-of-saint-rita'
  },
  {
    id: 19,
    name: 'St. Robert Bellarmine',
    feastday: 'September 17',
    notable: 'Patron Saint of Catechists, Catechumens',
    info: 'http://www.newadvent.org/cathen/02411d.htm'
  },
  {
    id: 20,
    name: 'St. Rocco',
    feastday: 'August 16',
    notable: 'Patron Saint of CONTAGION, EPIDEMICS',
    info: 'https://stroccosociety.com/strocco.html'
  },
  {
    id: 21,
    name: 'St. Rosalie',
    feastday: 'September 4',
    notable: 'Patron Saint of Palermo',
    info: 'https://catholicsaints.info/saint-rosalia/'
  },
  {
    id: 22,
    name: 'St. Stephen',
    feastday: 'December 26',
    notable: 'Patron Saint of Deacons',
    info: 'https://www.catholicnewsagency.com/saint/st-stephen-666'
  },
  {
    id: 23,
    name: 'St. Therese of Lisieux',
    feastday: 'October 1',
    notable: 'Patron Saint of Missions',
    info: 'https://www.catholic.org/saints/saint.php?saint_id=105'
  },
  {
    id: 24,
    name: 'St. Thomas Aquinas',
    feastday: 'January 28',
    notable:
      'Patron Saint of Students, Universities, Apologists, and Theologians',
    info: 'https://catholicsaints.info/saint-thomas-aquinas/'
  }
];

export const fetchData = () =>
  new Promise((res, rej) => {
    setTimeout(() => {
      res(data);
    }, 500);
  });
