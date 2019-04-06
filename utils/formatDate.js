/**
 * @description Pass a date object and get it formatted as dd/mm/yyyy. If no argument passed, it uses current date.
 * @param {Date Object} d
 * @returns {string} Date formated as dd/mm/yyyy
 */
module.exports = function formatDate(d = new Date) {
  return [d.getDate(), d.getMonth() + 1, d.getFullYear()]
    .map(n => n < 10 ? `0${n}` : `${n}`).join('/');
}