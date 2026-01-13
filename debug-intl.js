const d1 = new Date(2024, 1, 5); // Feb 5 2024 (Tet is Feb 10 2024 - wait. Year of Dragon starts Feb 10)
// wait. 2024 Tet is Feb 10. So Feb 5 is still Cat (2023).
// Let's check Feb 12 2024 (Dragon, 2024).

const d2 = new Date(1986, 6, 5); // July 5 1986. 1986 Tiger.

const fmt = new Intl.DateTimeFormat('en-US', { calendar: 'chinese', day: 'numeric', month: 'numeric', year: 'numeric' });

const p1 = fmt.formatToParts(d1);
const p2 = fmt.formatToParts(d2);

console.log('2024-02-05 Year:', p1.find(p => p.type === 'year').value);
console.log('1986-07-05 Year:', p2.find(p => p.type === 'year').value);
