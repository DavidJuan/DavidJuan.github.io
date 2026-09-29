import { Component, OnInit, OnDestroy, Inject, LOCALE_ID } from "@angular/core";
import { DataService } from "../core/data.service";
import { IAbout, IAboutInternationalization } from "./about-interfaces";
import { FaIconLibrary } from "@fortawesome/angular-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { Subscription } from "rxjs";
import { environment } from "../../environments/environment";
import { IResumeFile, pickLocale, resumeFile } from "../core/utils";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss", "./about.component.responsivity.scss"]
})
export class AboutComponent implements OnInit, OnDestroy {

  name: string;

  subscription: Subscription;
  aboutData: IAbout;
  content: IAboutInternationalization;

  resume: IResumeFile;
  otherResume: IResumeFile;

  constructor(
    private dataService: DataService,
    private library: FaIconLibrary,
    @Inject(LOCALE_ID) public locale: string
  ) {
    library.addIconPacks(fas, fab);
  }

  ngOnInit(): void {
    this.name = environment.personal.name;
    this.resume = resumeFile(this.locale);
    this.otherResume = resumeFile(this.locale === "pt" ? "en" : "pt");

    // Fetches the About information from the Data Service (about.json file).
    this.subscription = this.dataService.getAbout()
        .subscribe((about: IAbout) => {
          this.aboutData = about;
          this.content = pickLocale(about.internationalizations, this.locale);
        });
  }

  ngOnDestroy() {
    // Only need to unsubscribe if its a multi event Observable
    this.subscription.unsubscribe();
  }
}
