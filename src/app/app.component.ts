import { Component, OnInit, Inject, LOCALE_ID } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title: string = $localize`:meta@@pageTitle:David Juan | Senior Software Engineer & .NET / C# Backend Architect`;
  description: string = $localize`:meta@@pageDescription:Senior Software Engineer and Backend Architect with 10 years of .NET / C# experience: microservices, DDD, Clean Architecture, CQRS, AWS and Oracle Cloud (OCI). Download my resume in English or Portuguese.`;
  keywords: string = $localize`:meta@@pageKeywords:Senior Software Engineer, Backend Architect, Software Architect, .NET Developer, C# Developer, ASP.NET Core, Microservices, DDD, Clean Architecture, CQRS, REST API, AWS, Oracle Cloud Infrastructure, OCI, OCI Cloud, Docker, RabbitMQ, Git, Scrum, SQL Server, PostgreSQL, MongoDB, OAuth2, JWT, Angular, David Juan, David Juan resume`;

  constructor(
    private titleService: Title,
    private metaTagService: Meta,
    @Inject(LOCALE_ID) private locale: string,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.document.documentElement.lang = this.locale === "pt" ? "pt-BR" : "en";

    this.metaTagService.updateTag({ name: "keywords", content: this.keywords });
    this.metaTagService.updateTag({ name: "description", content: this.description });
    this.metaTagService.updateTag({ property: "og:title", content: this.title });
    this.metaTagService.updateTag({ property: "og:description", content: this.description });
    this.metaTagService.updateTag({ name: "date", content: "2026-09-29", scheme: "YYYY-MM-DD" });
  }
}
