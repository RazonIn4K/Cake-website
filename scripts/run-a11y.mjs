
import { chromium } from 'playwright';
import AxeBuilder from '@axe-core/playwright';
import { writeFileSync } from 'fs';

async function runA11yAudit(url, locale) {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto(url, { waitUntil: 'networkidle' });

  const results = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa'])
    .analyze();

  await browser.close();
  return { locale, url, violations: results.violations };
}

(async () => {
  const base = 'http://localhost:4321';
  const audits = [];

  try {
    audits.push(await runA11yAudit(base + '/', 'es'));
    audits.push(await runA11yAudit(base + '/en/', 'en'));
  } catch (error) {
    console.error('Accessibility audit failed:', error.message);
    process.exit(1);
  }

  writeFileSync('a11y-report.json', JSON.stringify(audits, null, 2));
})();
