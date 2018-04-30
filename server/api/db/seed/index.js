import r from 'rethinkdbdash';
import faker from 'faker';
import { v4 as uuid } from 'uuid';
import generateOffer from './generateOffer';

const debug = require('debug')('api:seed');
const db = r({ db: 'nosuitjobs' });

const companies = [
  {
    id: uuid(),
    name: 'CARTO',
    email: 'recruiter@fake-carto.com',
    password: '123456',
    employees: '100 to 150',
    founded: 2008,
    social: {
      twitter: 'http://twitter.com/CARTO',
      facebook: 'http://facebook.com/CARTO',
      instagram: 'http://instagram.com/CARTO',
    },
    url: 'http://carto.com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/CARTO-logo.svg/2000px-CARTO-logo.svg.png',
  },
  {
    id: uuid(),
    name: 'Billin',
    email: 'recruiter@fake-billij.com',
    password: '123456',
    employees: '10 to 20',
    founded: 2015,
    social: {
      twitter: 'http://twitter.com/Billin',
      facebook: 'http://facebook.com/Billin',
      instagram: 'http://instagram.com/Billin',
    },
    url: 'http://billin.net',
    logo: 'https://www.billin.net/wp-content/themes/billin/img/logotipo-billin@2x.png',
  },
];

const offers = [];
companies.forEach(company => {
  Array.from(Array(3)).forEach(() => offers.push(generateOffer(company.id)));
});

debug('Generating seed...');

Promise.all([
  db
    .table('companies')
    .insert(companies)
    .run(),
  db
    .table('offers')
    .insert(offers)
    .run(),
])
.then(() => {
  debug('Finished seeding database! 🎉');
  process.exit();
})
.catch(err => {
  debug(
    'Encountered error while inserting data (see below), please run yarn run db:drop and yarn run db:migrate to restore tables to original condition, then run this script again.'
  );
  debug(err);
});
