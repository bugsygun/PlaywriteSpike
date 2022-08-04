import {test as base, Locator, Page} from '@playwright/test';
import { Fragment } from "./base.fragment";

export class OnetrustCookieBanner extends Fragment {

    constructor(locator: Locator) {
        super(locator);
    }

    public get accepAllCookiesButton() {
        return $('#onetrust-accept-btn-handler');
    }

    public get cookieSettingsButton() {
        return $('#onetrust-pc-btn-handler');
    }
}
