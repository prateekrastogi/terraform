import * as puppeteer from 'puppeteer'
import {Observable, from} from 'rxjs'
import {concatMap, tap} from 'rxjs/operators'

const GITHUB_URL = `https://github.com/`

export function register(): Observable<boolean> {
  const openWebPage = from(puppeteer.launch()).pipe(
        concatMap(async browser => {
           const page = await browser.newPage()
           await page.goto(GITHUB_URL)
           return from(await page.content())
        }),
        tap(val => console.log(val)),
        concatMap(val => from([true])
        )
    )

    return openWebPage
}

function salt(strategy: string): Observable<boolean> {
    return from([true])
}