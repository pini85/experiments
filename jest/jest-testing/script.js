const googleDataBase = [
  "www.cats.com",
  "www.ilovecats.com",
  "www.google.com",
  "www.catslover.com",
  "www.catpictures.com",
  "www.bbc.co.uk",
  "www.cats.com"
];

const googleSearch = (query, db) => {
  const matches = db.filter(websites => {
    return websites.includes(query);
  });
  return matches.length > 3 ? matches.slice(0, 3) : matches;
};

module.exports = googleSearch;
