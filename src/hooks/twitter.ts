import * as puppeteer from 'puppeteer'
import {Observable, from} from 'rxjs'
import {concatMap, tap} from 'rxjs/operators'

const TWITTER_URL = `https://twitter.com/`
const LAUNCH_MODE = {headless: process.env.NODE_ENV === 'prod'}
const VIEWPORT_SIZE = {height: 1280, width: 720}

export function register(): Observable<boolean> {
  const openWebPage = from(puppeteer.launch(LAUNCH_MODE)).pipe(
    concatMap(async browser => {
      const page = await browser.newPage()
      await page.setViewport(VIEWPORT_SIZE)
      await page.goto(TWITTER_URL)
      await page.content()
      console.log(Math.random())
      return true
    })
  )

  return openWebPage
}

function salt(strategy: string): Observable<boolean> {
  return from([true])
}
