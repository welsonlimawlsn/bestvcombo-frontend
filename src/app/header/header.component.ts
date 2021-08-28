import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {KeycloakService} from "keycloak-angular";
import {KeycloakProfile} from "keycloak-js";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  perfil!: KeycloakProfile;

  @Output()
  onMenu: EventEmitter<void> = new EventEmitter();

  constructor(private keycloakService: KeycloakService) {
  }

  toggleMenu() {
    this.onMenu.emit();
  }

  async ngOnInit() {
    this.perfil = await this.keycloakService.loadUserProfile();
  }

  async logout() {
    await this.keycloakService.logout(window.location.origin + '/parceiros/cadastro');
  }
}
