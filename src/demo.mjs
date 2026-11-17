// Independently assembled small seed bank. Live reference snapshots are fetched
// into D1 at runtime, not distributed as part of the MIT code license.
const a = (answer, tier, aliases = []) => ({ answer, tier, aliases });

// Builds many spellings of one date + time (answers are compared ignoring case,
// spaces and punctuation, so only genuinely different wordings are listed).
const dateTimeAliases = ({ months, monthNum, day, dayWords, year, times, extra = [] }) => {
  const shortYear = year.slice(-2);
  const days = [String(day), ...dayWords];
  const dates = [
    ...months.flatMap(m => days.flatMap(d => [`${m} ${d}`, `${m} ${d} ${year}`, `${d} ${m}`, `${d} ${m} ${year}`])),
    `${monthNum}/${day}`, `${monthNum}/${day}/${year}`, `${monthNum}/${day}/${shortYear}`,
  ];
  const combos = dates.flatMap(d => times.flatMap(t => [`${d} ${t}`, `${d} at ${t}`, `${t} ${d}`, `${t} on ${d}`]));
  return [...new Set([...extra, ...combos])];
};
export const DEMO = {
  dayNumber: 1, source: 'Krillion sample bank',
  prompts: [
    { id: 'p1', text: 'Name a tuff player from UML Gilas (First name)', answers: [
      a('Wesley', 'plankton', ['Wes', 'Wesley']),
      a('Royce', 'schooler', ['Royce']),
      a('Vincent', 'schooler', ['Vincent', 'Vinny']),
      a('CJ', 'plankton', ['Carlyle James', 'Carlyle', 'CJ']),
      a('Ian', 'rare', ['Ian']),
      a('Damien', 'rare', ['Dame', 'Damien']),
      a('Kayda', 'rare', ['Kayda']),
      a('Johann', 'rare', ['Johann']),
      a('Tyler', 'tooclever', ['Ty', 'Tyler']),
      a('RJ', 'tooclever', ['Rojann', 'RJ', 'Jermaine']),
      a('Javien', 'deepcut', ['Javien']),
      a('Kavi', 'deepcut', ['Kavi']),
      a('Jaytana', 'deepcut', ['Jaytana', 'JT']),
      a('Sowndaryan', 'krillion', ['Sowndy', 'Sowndaryan', 'sowndyjay']),
    ] },
    { id: 'p2', text: 'Name a club in UMass Lowell with the tuffest eboard', answers: [a('UMass Lowell The Filipino Club', 'schooler', ['filipino club', 'TFC']),
      a('UMass Lowell SASA', 'rare', ['SASA']),
      a('UMass Lowell SASE', 'deepcut', ['SASE']),
      a('UMass Lowell CASA', 'schooler', ['CASA']),
      a('UMass Lowell VSA', 'rare', ['VSA']),
      a('UMass Lowell MSC', 'deepcut', ['MSC']),
      a('UMass Lowell SACA', 'rare', ['SACA'])
    ] },
    { id: 'p3', text: 'Name an eboard member of the Filipino Club (First name)', answers: [
      a('Wesley', 'schooler', ['wes']),
      a('Adam', 'deepcut', ['Adam']),
      a('Channelly', 'rare', ['Chan', 'Channelly']),
      a('CJ', 'plankton', ['Carlyle James', 'Carlyle', 'CJ']),
      a('Elijah', 'deepcut', ['Eli', 'Elijah']),
      a('Han', 'deepcut', ['Han']),
      a('Heather', 'krillion', ['Heather', 'Heather Beale']),
      a('Jazzy', 'rare', ['Jazmyne', 'Jazzy']),
      a('Jill', 'rare', ['Jillian', 'Jill']),
      a('Johann', 'tooclever', ['Johann']),
      a('Rai', 'deepcut', ['Raizel','Rai']),
      a('Raphael', 'krillion', ['Raphael', 'Raphy']),
      a('Val', 'rare', ['Valerie', 'Val'])
    ] },
    { id: 'p4', text: "Name an event happening tommorow", answers: [
      a("TFC's Happy Teefsgiving GBM (November 18th, 2026 at 6:30 PM in COBURN 255)", 'krillion', ['Teefsgiving', 'TG', 'TGiving'])

  ] },
]
};
