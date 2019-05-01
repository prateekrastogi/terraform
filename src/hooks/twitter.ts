import * as puppeteer from 'puppeteer'
import {Observable, from} from 'rxjs'
import {concatMap, tap} from 'rxjs/operators'

const TWITTER_URL = `https://twitter.com/`

export function register(): Observable<boolean> {
  const openWebPage = from(puppeteer.launch()).pipe(
    concatMap(async browser => {
      const page = await browser.newPage()
      await page.goto(TWITTER_URL)
      console.log(await page.content())

      return true
    })
  )

  return openWebPage
}

function salt(strategy: string): Observable<boolean> {
  return from([true])
}
