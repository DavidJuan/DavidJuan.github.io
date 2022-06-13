import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  Renderer2,
  Inject,
  LOCALE_ID,
  AfterViewInit,
} from "@angular/core";
import { LocationStrategy } from "@angular/common";
import {
  faBars,
  faShareAlt,
  faCloudDownloadAlt,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { NgNavigatorShareService } from "ng-navigator-share";

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
  faCloudDownloadAlt: IconDefinition;
  cvPath: string;
  titleCv: string;

  @ViewChild("nav") nav: ElementRef;
  @ViewChild("shareBtn") shareBtn: ElementRef;

  constructor(
    @Inject(LOCALE_ID) public locale: string,
    private renderer: Renderer2,
    ngNavigatorShareService: NgNavigatorShareService,
    private url: LocationStrategy
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
    this.updateNavigation();
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
    this.faCloudDownloadAlt = faCloudDownloadAlt;
    if (this.url.path().includes("pt")) {
      this.cvPath = "assets/David-Juan-pt.pdf";
      this.titleCv = "Baixar Curriculo em PDF";
    }
    if (this.url.path().includes("en")) {
      this.cvPath = "assets/David-Juan-en.pdf";
      this.titleCv = "Download Resume as PDF";
    }
  }

  private updateNavigation() {
    if (this._activeSection && this.renderer) {
      // Remove any selected anchor
      const activePreviousElem =
        this.nav.nativeElement.querySelector("a.active");

      if (activePreviousElem) {
        this.renderer.removeClass(activePreviousElem, "active");
      }

      const targetElem = this.nav.nativeElement.querySelector(
        `a[href^="#${this._activeSection}"]`
      );
      if (targetElem) {
        this.renderer.addClass(targetElem, "active");
      }
    }
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
        title: "Live Resume - David Juan",
        text: "Hello, I'm a Full-stack .Net/Angular Web Developer with 8+ years of experience designing web projects. Find out more in my live-resume!",
        url: "https://davidjuan.github.io",
      });
    } catch (error) {
      console.log("You app is not shared, reason: ", error);
    }
  }
}
