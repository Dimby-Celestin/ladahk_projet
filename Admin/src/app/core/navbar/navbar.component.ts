import { Component, OnInit } from '@angular/core';
import { UtilsService } from '@app-providers/utils.service';
import { SessionService } from '@app-providers/session.service';
import { Router } from '@angular/router';

const misc: any = {
    navbar_menu_visible: 0,
    active_collapse: true,
    disabled_collapse_init: 0,
};

declare var $: any;
@Component({
    selector: 'app-navbar-cmp',
    templateUrl: 'navbar.component.html'
})

export class NavbarComponent implements OnInit {
    constructor(
        public session: SessionService,
        private utils: UtilsService,
        private _router: Router
        ) {}
    async ngOnInit() {
        await this.session.getSessionStatus().toPromise();
        console.log(this.session.type, this.session.user)
    }
    async logout() {
        const resp = await this.utils.confirm('Do you really want to logout?');
        console.log(resp);
        if (resp) {
            this.session.logout();
            this._router.navigate(['.auth', 'login']);
        }
    }
    sidebarToggle() {
        
    }
}
