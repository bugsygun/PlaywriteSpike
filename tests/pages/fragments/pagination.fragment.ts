
import { Fragment } from './base.fragment';

export class Pagination extends Fragment {

    constructor() {
        super('#.ngx-pagination');
    }

    getPage(index: number) {
        return $('li.ng-star-inserted > a').get(index - 1);
    }

    get previousPage() {
        return $('li.pagination-previous > a');
    }

    get nextPage() {
        return $('li.pagination-next > a');
    }

    get currentPage() {
        return $('li.current');
    }

    // private get lastPage() {
    //     return $('li').then(button => button.splice(-2)[0]);
    // }

    // clickLastPage() {
    //     return this.lastPage.then(page => page.click());
    // }

}
