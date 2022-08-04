
import { existsSync, readFileSync, unlinkSync, unwatchFile, watchFile } from 'fs';
import { resolve } from 'path';

import { SideBar } from './fragments/side-bar.fragment';
import { AnalyticsTags } from './fragments/analytics-tags.fragment';
import { Footer } from './fragments/footer.fragment';
import { Header } from './fragments/header.fragment';
import { OnetrustCookieBanner } from './fragments/onetrust-cookie-banner.fragment';

import { getPage, ExpectedConditions, waitCondition } from "../playwright-utils";
import { expect, Locator } from "@playwright/test";


export abstract class Page {
    readonly path: string;
    readonly expectedHeading: string;
    readonly expectedDataVersion: string;

    constructor(path: string, heading: string) {
        this.path = path;
        this.expectedHeading = heading;
    }

    navigateTo(params?: string[]) {
        let paramsString = '';
        if (!!params && params.length > 0) {
            paramsString = `/${params.join('/')}`;
        }

        return getPage().goto(`.${this.path}${paramsString}`);
    }

    // get oneTrustCookieBanner() {
    //     return new OnetrustCookieBanner('onetrust-banner-sdk');
    // }

    get pageHeading() {
        return getPage().locator('.page-header').innerText();
    }

    get header() {
        return new Header('.header');
    }

    get pageHeader() {
        return $('rwa-tool-page-header');
    }

    // get pageTitle() {
    //     return this.pageHeader.locator('.tool-page-header > .tool-page-title ');
    // }

    // get dataVersion() {
    //     return this.pageHeader.locator('.tool-page-header > .tool-page-data-version ');
    // }

    get footer() {
        return new Footer('#footer > rwa-footer');
    }
    
    get focusedElement() {
        return $(':focus');
    }

    // scrollToElement(element: Locator) {
    //    await element.getLocation().then(loc => browser.driver.executeScript('window.scrollTo(0,arguments[0]);', loc.y));
    // }

    getElementLocation(element): { x: number, y: number } {
        return element.getLocation().then((location) => {
            return { x: location.x, y: location.y };
        });
    }

//    get sideBar() {
//         return new SideBar('xhr-site-navigation');
//     }

    public async logOut() {
        await this.header.clickLogOut();
    }

    get analyticsTags() {
        return new AnalyticsTags();
    }

    get spinner() {
        return $('rwa-spinner');
    }

    // public setFeatureFlag(name: string, value: boolean) {
    //     browser.executeScript(`window.config.featureFlags.${name} = ${value};`);
    // }

    // public async downloadFile(fileName: string, clickableElement: { click: () => void }): Promise<string> {
    //     const downloadsDir: string = resolve(`${__dirname}/../../../downloads`);
    //     const filePath: string = resolve(`${downloadsDir}/${fileName}`);

    //     expect(fileName).toBeTruthy();

    //     if (existsSync(filePath)) {
    //         unlinkSync(filePath);
    //     }

    //     await browser.driver.sendChromiumCommand('Page.setDownloadBehavior', {
    //         'behavior': 'allow',
    //         'downloadPath': downloadsDir
    //     });

    //     clickableElement.click();

    //     return new Promise((res) => {
    //         watchFile(filePath, (file) => {
    //             if (existsSync(filePath) && file.size > 0) {
    //                 const fileContent = readFileSync(filePath, { encoding: 'utf8' });
    //                 unwatchFile(filePath);
    //                 unlinkSync(filePath);
    //                 res(fileContent);
    //             }
    //         });
    //     });
    // }

    public expectToBeOnPage() {
        return waitCondition(ExpectedConditions.urlContains(getPage(), this.path), 60000, `'Expect to be on ${this.path} but was not`);
    }
}
