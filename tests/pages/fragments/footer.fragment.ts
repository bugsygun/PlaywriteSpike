
import { Fragment } from "./base.fragment";

export class Footer extends Fragment {

    constructor(locator: Locator) {
        super(locator);
    }

    get links() {
        return this.$$('.footer .relx-text div a');
    }

    get paragraphs() {
        return this.$$('.footer .relx-text p');
    }

    get logo() {
        return this.$('.footer .relx-logo img');
    }

    async expectToBeCorrect() {
        expect(await this.links.getText()).toEqual(['Contact us', 'Cookie Policy', 'Privacy Policy', 'Cookie Settings']);
        expect(await this.links.get(0).getAttribute('href')).toBe('mailto:participants@xperthr.co.uk');
        expect(await this.links.get(1).getAttribute('href')).toContain('/cookie-policy');
        expect(await this.links.get(2).getAttribute('href')).toBe('https://risk.lexisnexis.com/group/privacy-policy');

        const year = new Date().getFullYear();
        expect(await this.paragraphs.getText()).toEqual([
            'XpertHR is part of the LexisNexis® Risk Solutions Group portfolio of brands.',
            'The materials and information included in the XpertHR service are provided for reference purposes only. They are not intended either as a substitute for professional advice or judgment or to provide legal or other advice with respect to particular circumstances. Use of the service is subject to our Data Services terms and conditions.',
            'Copyright © ' + year + ' LexisNexis Risk Solutions Group'
        ]);

        expect(await this.paragraphs.get(0).element(by.tagName("a")).getAttribute("href"))
            .toBe("https://risk.lexisnexis.com/group");
        expect(await this.paragraphs.get(1).element(by.tagName("a")).getAttribute("href"))
            .toContain("/pages/data-services-terms-and-conditions/");
        expect(await this.paragraphs.get(2).element(by.tagName("a")).getAttribute("href"))
            .toBe("https://risk.lexisnexis.com/group/copyright/");

        expect(await this.logo.isDisplayed()).toBe(true);
    }
}
