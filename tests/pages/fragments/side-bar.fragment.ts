import { expect, Locator } from "@playwright/test";
import { Fragment } from './base.fragment';

export class SideBar extends Fragment {

    constructor(locator: Locator) {
        super(locator);
    }

    get menu() {
        return $('nav');
    }

    // get elements() {
    //     return this.menu.$$('a span');
    // }

    // get activeElements() {
    //     return this.menu.$$('a.active span');
    // }

    // get home() {
    //     return this.elements.filter(b => b.getText().then(t => t === 'Home')).first();
    // }

    // get tools() {
    //     return this.elements.filter(b => b.getText().then(t => t === 'Tools')).first();
    // }

    // get articlesAndReports() {
    //     return this.elements.filter(b => b.getText().then(t => t === 'Articles and reports')).first();
    // }

    // get myDataPortal() {
    //     return this.elements.filter(b => b.getText().then(t => t === 'My files')).first();
    // }
}
