require('dotenv').config();
const Airtable = require('airtable');
let base = new Airtable({ apiKey: process.env.KEY }).base('appT3d0zzRdiap8bV');

module.exports = () => {
  return new Promise((resolve, reject) => {
    let thePile = [];
      base('v2')
        .select({ view: 'All' })
        .eachPage(
          function page(records, fetchNextPage) {
            records.forEach((record) => {
              thePile.push({
                "id" : record._rawJson.id,
                ...record._rawJson.fields
              });
            });
            fetchNextPage();
          },
          function done(err) {
            if (err) {
              reject(err)
            } else {
              resolve(thePile);
            }
          }
        );
      });
    };
