
import { Fragment } from "./base.fragment";

export class Header extends Fragment {

    constructor(locator: Locator) {
        super(locator);
    }

    public async clickLogOut() {
        await this.logOut.click();
    }

    public get logOut() {
        return this.$('#log-out');
    }

    public get logIn() {
        return this.$('#log-in');
    }

    public get contactUs() {
        return this.$('#contact-us');
    }

    public get pricing() {
        return this.$('#pricing');
    }

    public get aboutUs() {
        return this.$('#about-us');
    }

    public get logo() {
        return this.$('#header-logo a img');
    }
}
