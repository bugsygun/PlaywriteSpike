import { ElementFinder, Locator, browser, element } from 'protractor';

import { expect, Locator } from "@playwright/test";

export abstract class Fragment extends ElementFinder {
    constructor(locator: Locator) {
        super(browser, element.all(locator));
    }
}

export abstract class SubFragment extends ElementFinder {
    constructor(elementFinder: ElementFinder) {
        super(browser, elementFinder.elementArrayFinder_);
    }
}
