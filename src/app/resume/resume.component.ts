import { Component, HostListener, AfterViewInit, OnDestroy } from "@angular/core";
import { debounce } from "../core/utils";

// Page sections in the same order they are rendered, used to highlight the header navigation.
const SECTIONS: string[] = ["about", "experience", "skills", "contact"];

@Component({
  selector: "app-resume",
  templateUrl: "./resume.component.html",
  styleUrls: ["./resume.component.css", "./resume.component.responsivity.css"]
})
export class ResumeComponent implements AfterViewInit, OnDestroy {

  isSticky: boolean = false;
  activeSection: string = SECTIONS[0];

  pageYOffset: number = 0;
  pageXOffset: number;

  private spyFrame: number;

  constructor() {
    this.checkResize();
  }

  ngAfterViewInit(): void {
    // Sections change height once their JSON data arrives, so re-check shortly after the first render.
    setTimeout(() => this.updateActiveSection(), 500);
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.spyFrame);
  }

  @HostListener("window:scroll")
  @debounce()
  checkScroll() {
    this.pageYOffset = window.pageYOffset;
    this.isSticky = pageYOffset >= 250;
  }

  // Scroll spy: throttled to one check per animation frame so the menu follows the scroll smoothly.
  @HostListener("window:scroll")
  @HostListener("window:resize")
  onScrollSpy() {
    if (this.spyFrame) {
      return;
    }
    this.spyFrame = requestAnimationFrame(() => {
      this.spyFrame = null;
      this.updateActiveSection();
    });
  }

  @HostListener("window:resize")
  @debounce(25)
  checkResize() {
    this.pageXOffset = window.innerWidth;
  }

  /*
   * The active section is the last one whose top has crossed a line at 35% of the viewport height.
   * At the very bottom of the page the last section wins, since it may be too short to reach that line.
   */
  private updateActiveSection() {
    const threshold = window.innerHeight * 0.35;
    let active = SECTIONS[0];

    for (const id of SECTIONS) {
      const section = document.getElementById(id);
      if (section && section.getBoundingClientRect().top <= threshold) {
        active = id;
      }
    }

    const scrolledToBottom = window.innerHeight + window.pageYOffset >= document.documentElement.scrollHeight - 2;
    if (scrolledToBottom) {
      active = SECTIONS[SECTIONS.length - 1];
    }

    if (active !== this.activeSection) {
      this.activeSection = active;
    }
  }
}
