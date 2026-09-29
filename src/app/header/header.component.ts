import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  Inject,
  LOCALE_ID,
  AfterViewInit,
} from "@angular/core";
import {
  faBars,
  faShareAlt,
  faDownload,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { NgNavigatorShareService } from "ng-navigator-share";
import { IResumeFile, resumeFile } from "../core/utils";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: [
    "./header.component.scss",
    "./header.component.responsivity.scss",
  ],
})
export class HeaderComponent implements OnInit, AfterViewInit {
  private _activeSection: any;
  private _pageXOffset: any;
  private ngNavigatorShareService: NgNavigatorShareService;

  hasMenuToggled: boolean;
  faBars: IconDefinition;
  faShareAlt: IconDefinition;
  faDownload: IconDefinition;
  resume: IResumeFile;

  @ViewChild("shareBtn") shareBtn: ElementRef;

  constructor(
    @Inject(LOCALE_ID) public locale: string,
    ngNavigatorShareService: NgNavigatorShareService
  ) {
    this.ngNavigatorShareService = ngNavigatorShareService;
  }

  // use getter setter to define the properties
  get activeSection(): any {
    return this._activeSection;
  }

  get pageXOffset(): any {
    return this._pageXOffset;
  }

  @Input()
  set pageXOffset(value: any) {
    this._pageXOffset = value;
    this.onDetectScreenSize();
  }

  @Input()
  set activeSection(value: any) {
    this._activeSection = value;
  }

  ngAfterViewInit() {
    // Share button available only for browsers that do support it.
    if (this.ngNavigatorShareService.canShare()) {
      this.shareBtn.nativeElement.style.display = "block";
    }
  }

  ngOnInit(): void {
    this.faBars = faBars;
    this.faShareAlt = faShareAlt;
    this.faDownload = faDownload;
    // The resume follows the language of the current build (/en/ or /pt/).
    this.resume = resumeFile(this.locale);
  }

  /*
   * For media types such as tablets and mobile devices, the nav-bar navigation should be
   * collapsed by default.
   */
  private onDetectScreenSize() {
    this.hasMenuToggled = this.pageXOffset > 1024;
  }

  onToggleBar() {
    this.hasMenuToggled = !this.hasMenuToggled;
  }

  resetMenu() {
    this.hasMenuToggled = this.pageXOffset > 1024;
  }

  async share() {
    try {
      await this.ngNavigatorShareService.share({
        title: $localize`:share@@shareTitle:David Juan - Senior Software Engineer | .NET / C# Backend Architect`,
        text: $localize`:share@@shareText:Senior Software Engineer and .NET / C# Backend Architect with 10 years of experience in microservices, DDD, Clean Architecture, AWS and Oracle Cloud. Check out my resume!`,
        url: "https://davidjuan.github.io",
      });
    } catch (error) {
      console.log("You app is not shared, reason: ", error);
    }
  }
}
