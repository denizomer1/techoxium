import assert from 'assert';
import { tagToSlug } from '../src/lib/tag-utils.js';

function run() {
  const cases = [
    { in: 'Çalışma', out: 'calisma' },
    { in: '  multiple   spaces  ', out: 'multiple-spaces' },
    { in: "quotes' and \"double\"", out: 'quotes-and-double' },
    { in: 'Café-au-lait', out: 'cafe-au-lait' },
    { in: 'already-kebab-case', out: 'already-kebab-case' },
    { in: 'Symbols!@#%$^&*()', out: 'symbols' },
    { in: 'İstanbul', out: 'istanbul' },
    { in: '中文测试', out: '' } // non-latin should be removed by the slugger
  ];

  cases.forEach(({in: input, out}) => {
    const got = tagToSlug(input);
    try {
      assert.strictEqual(got, out, `tagToSlug('${input}') -> expected '${out}', got '${got}'`);
    } catch (err) {
      console.error(err.message);
      process.exitCode = 1;
    }
  });

  if (process.exitCode !== 1) console.log('tagToSlug tests passed');
}

run();
