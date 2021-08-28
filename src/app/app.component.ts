import {Component, OnInit} from '@angular/core';
import {KeycloakService} from "keycloak-angular";
import {KeycloakProfile} from "keycloak-js";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isAuthenticated: boolean = false;
  perfil!: KeycloakProfile;

  constructor(private keycloakService: KeycloakService) {
  }

  async ngOnInit() {
    this.isAuthenticated = await this.keycloakService.isLoggedIn();

    if (this.isAuthenticated) {
      this.perfil = await this.keycloakService.loadUserProfile();
    }
  }
}
