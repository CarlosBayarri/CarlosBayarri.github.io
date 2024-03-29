import { Component, OnInit, NgModule } from "@angular/core";
import { InfoService } from "src/app/services/info.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  constructor(public infoService: InfoService, private router: Router) {}

  ngOnInit() {}
  deactivateMenu() {
    document.getElementById("mobile-menu")?.click();
  }
  searcProduct(term: string) {
    if (term.length < 1) {
      return;
    }
    this.router.navigate(["/search", term]);
  }
}
