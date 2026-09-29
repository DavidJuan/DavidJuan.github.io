import { Component, Inject, LOCALE_ID, OnDestroy, OnInit } from "@angular/core";
import { FaIconLibrary } from "@fortawesome/angular-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { Subscription } from "rxjs";
import { DataService } from "../core/data.service";
import { pickLocale } from "../core/utils";
import { ISkills, ISkillsInternationalization } from "./skills-interfaces";

@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.scss"]
})
export class SkillsComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  content: ISkillsInternationalization;

  constructor(
    private dataService: DataService,
    library: FaIconLibrary,
    @Inject(LOCALE_ID) public locale: string
  ) {
    library.addIconPacks(fas);
  }

  ngOnInit(): void {
    // Fetches the Skills information from the Data Service (skills.json file).
    this.subscription = this.dataService.getSkills()
        .subscribe((skills: ISkills) => this.content = pickLocale(skills.internationalizations, this.locale));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
