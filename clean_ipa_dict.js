const fs = require('fs');

const filePath = 'mp3_dict.json';

const raw = fs.readFileSync(filePath, 'utf-8');
const dict = JSON.parse(raw);

function cleanIPA(ipa) {
  return ipa.replace(/[ˈˌ]/g, '').replace(/^\/|\/$/g, '');
}

for (const key in dict) {
  if (dict[key].ipa) {
    dict[key].ipa = cleanIPA(dict[key].ipa);
  }
}

fs.writeFileSync(filePath, JSON.stringify(dict, null, 2));
console.log('✅ mp3_dict.json has been cleaned and overwritten.');
