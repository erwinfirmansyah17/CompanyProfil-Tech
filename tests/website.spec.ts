import { test, expect } from '@playwright/test'

test('catalog filter, search, empty state, product inquiry and FAQ', async ({ page }) => {
  const errors: string[] = []
  page.on('pageerror', (e) => errors.push(e.message))
  await page.goto('/')
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Teknologi pilihan.')
  await page.getByRole('button', { name: 'Smartphone', exact: true }).click()
  await expect(page.locator('.product-card')).toHaveCount(2)
  await page.getByRole('button', { name: 'Lihat Samsung Galaxy Series' }).click()
  await expect(page.getByRole('dialog', { name: 'Samsung Galaxy Series' })).toBeVisible()
  await page.getByRole('button', { name: 'Tanya produk ini' }).click()
  await expect(page.getByLabel('Pesanmu')).toHaveValue(/Samsung Galaxy Series/)
  await expect(page.locator('.demo-notice')).toContainText('Pesan ini belum dikirim')
  await page.keyboard.press('Escape')
  await page.getByRole('button', { name: 'Semua', exact: true }).click()
  await page.getByRole('searchbox', { name: 'Cari produk' }).fill('ipad')
  await expect(page.locator('.product-card')).toHaveCount(1)
  await page.getByRole('searchbox', { name: 'Cari produk' }).fill('zzzzzz')
  await expect(page.locator('.empty-state')).toBeVisible()
  await page.getByRole('button', { name: 'Reset pencarian' }).click()
  await expect(page.locator('.product-card')).toHaveCount(5)
  const question = page.getByRole('button', { name: 'Apakah produk memiliki garansi?' })
  await question.click()
  await expect(question).toHaveAttribute('aria-expanded', 'true')
  expect(errors).toEqual([])
})

test('responsive navigation and no horizontal overflow', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/')
  await page.getByRole('button', { name: 'Buka menu' }).click()
  await page
    .getByRole('navigation', { name: 'Navigasi ponsel' })
    .getByRole('link', { name: 'Produk', exact: true })
    .click()
  await expect(page.getByRole('navigation', { name: 'Navigasi ponsel' })).toHaveCount(0)
  for (const width of [320, 390, 768, 1024]) {
    await page.setViewportSize({ width, height: 844 })
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(
      width,
    )
  }
  await page.setViewportSize({ width: 390, height: 844 })
  await page.evaluate(() => {
    ;(document.activeElement as HTMLElement)?.blur()
    window.scrollTo(0, 0)
  })
  await page.screenshot({ path: 'test-results/mobile.png', fullPage: true })
})

test('light design, prerender and desktop visual', async ({ page, request }) => {
  const response = await request.get('/')
  const html = await response.text()
  expect(html).toContain('Nexora')
  expect(html).toContain('Samsung Galaxy Series')
  expect(html).not.toContain('Bentuk Digital')
  await page.setViewportSize({ width: 1440, height: 1000 })
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/')
  await page.evaluate(() => document.fonts.ready)
  await expect(page.locator('.site-header')).toHaveCSS('display', 'flex')
  await page.screenshot({ path: 'test-results/desktop.png', fullPage: true })
  await page.screenshot({ path: 'test-results/hero.png' })
})
