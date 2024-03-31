// @ts-check
import { test, expect } from '@playwright/test'
import { CAT_IMAGE_URL_START } from '../src/consts/endpoints'

const LOCALHOST_URL = 'http://localhost:5173/'

test('app shows random fact and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  expect(textContent?.length).toBeGreaterThan(0)
  expect(imageSrc?.startsWith(CAT_IMAGE_URL_START)).toBeTruthy()
})
