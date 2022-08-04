import { Page } from './page';
import { getPage } from "../playwright-utils";

export class LoggedOutHomePage extends Page {
    constructor() {
        super('/', " ");
    }

    get content() {
        return getPage().locator('.page-container > *');
    }
}
