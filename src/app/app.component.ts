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

  menu = [
    {texto: 'Inicio', link: '/parceiros', roles: ['PAPEL_PARCEIRO']},
    {texto: 'Parceiros', link: '/parceiros/listar', roles: ['PAPEL_ADMINISTRADOR']},
    {texto: 'Produtos', link: '/parceiros/produtos', roles: ['PAPEL_PARCEIRO']}
  ];

  constructor(private keycloakService: KeycloakService) {
  }

  async ngOnInit() {
    this.isAuthenticated = await this.keycloakService.isLoggedIn();

    if (this.isAuthenticated) {
      this.perfil = await this.keycloakService.loadUserProfile();
    }
  }

  getMenus() {
    return this.menu.filter(m => m.roles.some(r => this.keycloakService.isUserInRole(r)));
  }
}
