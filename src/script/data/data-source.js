import clubs from "./clubs.js";

class DataSource {
  static searchClub(keyword) {
    return new Promise((resolve, reject) => {
      const filterClubs = clubs.filter(club => club.name.toUpperCase().includes(keyword.toUpperCase()));

      if (filterClubs.length) {
        resolve(filterClubs);
      } else {
        reject(`${keyword} is not found`);
      }
    });
  }
}

export default DataSource;