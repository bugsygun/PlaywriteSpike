import { Fragment } from './base.fragment';

export class AnalyticsTags extends Fragment {

    constructor() {
        super('#head');
    }

    // get tags() {
    //     return this.$$('meta[name^="gwa_"]');
    // }

    get account() {
        return this.getGwaTagValues('gwa_account');
    }

    get authstatus() {
        return this.getGwaTagValues('gwa_authstatus');
    }

    get userId() {
        return this.getGwaTagValues('gwa_userid');
    }

    get analyticsAccountTag() {
        return this.getGwaTagValues("gwa_account");
    }

    get siteSection1Tag() {
        return this.getGwaTagValues("gwa_sitesection1");
    }

    get siteSection2Tag() {
        return this.getGwaTagValues("gwa_sitesection2");
    }

    get contentTypeTag() {
        return this.getGwaTagValues("gwa_contenttype");
    }

    get contentTitleTag() {
        return this.getGwaTagValues("gwa_contenttitle");
    }

    get contentHierarchyTag() {
        return this.getGwaTagValues("gwa_contenthierarchy");
    }

    get pageNameTag() {
        return this.getGwaTagValues("gwa_pagename");
    }

    get searchType() {
        return this.getGwaTagValues("gwa_searchtype");
    }

    get searchTerm() {
        return this.getGwaTagValues("gwa_searchterm");
    }

    get searchResults() {
        return this.getGwaTagValues("gwa_searchresults");
    }

    get selectedResultTotal() {
        return this.getGwaTagValues("gwa_localvar5");
    }

    get localVar7() {
        return this.getGwaTagValues("gwa_localvar7");
    }

    get downloadFileName() {
        return this.getGwaTagValues("gwa_downloadfilename");
    }

    get downloadPageName() {
        return this.getGwaTagValues("gwa_downloadpagename");
    }

    get rewardTypeFilter() {
        return this.getGwaTagValues("gwa_producttype");
    }

    private async getGwaTagValues(tagName){
        // const tagEl = this.tags
        // .filter(async tag => await tag.getAttribute('name') === tagName)
        // .first()
        // const isTagPresent = await tagEl.isPresent();
        // return isTagPresent ? tagEl.getAttribute('content') : null;
    }
}
