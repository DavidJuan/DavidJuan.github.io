# Currículo otimizado para ATS (Gupy) e LinkedIn — David Juan

> Mesmo conteúdo usado no site e nos PDFs (`src/assets/data/*.json`).
> Para mudar o texto, edite os JSONs e rode `npm run resume:pdf`: isso gera os PDFs novamente e o site fica igual a eles.

---

## 1. TÍTULO E RESUMO PROFISSIONAL

### Título / headline do LinkedIn (até 220 caracteres)

**PT:**
Engenheiro de Software Sênior | Arquiteto Backend .NET / C# | Microsserviços • DDD • Clean Architecture • CQRS | AWS & Oracle Cloud (OCI) | APIs REST • OAuth2 / JWT / RBAC

**EN:**
Senior Software Engineer | .NET / C# Backend Architect | Microservices • DDD • Clean Architecture • CQRS | AWS & Oracle Cloud (OCI) | REST APIs • OAuth2 / JWT / RBAC

### Cargo pretendido (Gupy: campo curto)

- Engenheiro de Software Sênior .NET
- Alternativas para buscas: *Arquiteto de Software .NET*, *Desenvolvedor Backend C# Sênior*, *Tech Lead .NET*

### Resumo executivo (Sobre do LinkedIn / Resumo da Gupy)

**PT:**

Engenheiro de Software Sênior e Arquiteto Backend com cerca de 10 anos de experiência em .NET / C#, construindo sistemas críticos para os setores bancário (Itaú BBA), saúde suplementar (TOTVS), ERP fiscal e cloud computing (Skyone).

Hoje sou arquiteto e desenvolvedor principal da EasySky, plataforma enterprise de orquestração de infraestrutura em nuvem integrada à Oracle Cloud Infrastructure (OCI), com API REST de 220+ endpoints em Clean Architecture e DDD.

Meu foco é desenhar sistemas que o time consegue manter e evoluir: arquitetura bem definida, contratos de API claros (OpenAPI), segurança desde o início (OWASP, NIST) e padrões de engenharia que encurtam o onboarding e elevam a qualidade das entregas.

Destaques:
- Arquitetura da plataforma EasySky: 220+ endpoints REST, 200+ componentes, Clean Architecture + DDD em 5 camadas, integração nativa com OCI
- Guias de arquitetura e padrões de desenvolvimento adotados por todo o time de engenharia
- Modelo de segurança: RBAC granular com validação server-side, JWT + refresh token (OWASP / NIST)
- Itaú BBA: microsserviços de recuperação de crédito com CQRS (SQL Server + MongoDB) e serverless na AWS
- TOTVS: sistemas regulados pela ANS com TDD e APIs documentadas em OpenAPI

Competências: .NET / .NET Core · C# · ASP.NET Core Web API · Entity Framework · Node.js · Java · Microsserviços · Clean Architecture · DDD · CQRS · Event-Driven · SOLID · Design Patterns · TDD · APIs REST · OpenAPI / Swagger · AWS (Lambda, S3, API Gateway) · Oracle Cloud Infrastructure (OCI) · SQL Server · PostgreSQL · MongoDB · OAuth2 · JWT · RBAC · OWASP · CI/CD · Jenkins · SonarQube · Angular · TypeScript

Certificações: Oracle Cloud Infrastructure 2024 Certified Foundations Associate · Formação Arquiteto de Software

**EN:**

Senior Software Engineer and Backend Architect with about 10 years of experience in .NET / C#, building mission-critical systems for banking (Itaú BBA), healthcare (TOTVS), tax ERP and cloud computing (Skyone).

I am currently the architect and lead developer of EasySky, an enterprise cloud infrastructure orchestration platform natively integrated with Oracle Cloud Infrastructure (OCI), powered by a 220+ endpoint REST API built on Clean Architecture and DDD.

I focus on designing systems teams can maintain and evolve: well-defined architecture, clear API contracts (OpenAPI), security by design (OWASP, NIST) and engineering standards that shorten onboarding and raise delivery quality.

Skills: .NET / .NET Core · C# · ASP.NET Core Web API · Entity Framework · Node.js · Java · Microservices · Clean Architecture · DDD · CQRS · Event-Driven · SOLID · Design Patterns · TDD · REST APIs · OpenAPI / Swagger · AWS (Lambda, S3, API Gateway) · Oracle Cloud Infrastructure (OCI) · SQL Server · PostgreSQL · MongoDB · OAuth2 · JWT · RBAC · OWASP · CI/CD · Jenkins · SonarQube · Angular · TypeScript

---

## 2. EXPERIÊNCIA PROFISSIONAL REESCRITA

Estrutura: **[Verbo de ação no infinitivo] + [contexto / ferramenta] + [resultado ou impacto no negócio]**.

### Skyone — Engenheiro de Software · Arquiteto e Dev Principal da EasySky
*jan 2025 – atual · São Paulo, SP*

Arquiteto e desenvolvedor principal da EasySky, plataforma enterprise de orquestração de infraestrutura em nuvem. Responsável pelas decisões de arquitetura, pelo modelo de segurança e pelos padrões técnicos do time de engenharia.

- Arquitetar a plataforma com Clean Architecture + DDD em 5 camadas, sustentando 200+ componentes (services, handlers e integrações) com baixo acoplamento e evolução contínua.
- Desenvolver a API REST de orquestração com 220+ endpoints em .NET / C#, integrada nativamente à Oracle Cloud Infrastructure (OCI SDK), centralizando a gestão de infraestrutura de clientes enterprise.
- Automatizar via código o provisionamento de infraestrutura (VMs, redes, volumes e security groups), eliminando etapas manuais e erros operacionais.
- Implementar Disaster Recovery automatizado e extensível com Strategy Pattern, permitindo novas estratégias de DR sem alterar o núcleo da plataforma.
- Desenhar a autorização RBAC granular com validação server-side e cache de alta performance, garantindo controle de acesso por recurso sem penalizar a latência.
- Implementar autenticação JWT + refresh token em cookies HttpOnly seguindo OWASP e NIST, mitigando riscos de XSS e sequestro de sessão.
- Definir os guias de arquitetura e padrões de desenvolvimento adotados por todo o time de engenharia, reduzindo a curva de onboarding de novos desenvolvedores.
- Padronizar os contratos de API com documentação OpenAPI avançada e filtros customizados, acelerando a integração com o frontend e consumidores da API.

**Stack:** .NET, C#, OCI SDK, Oracle Cloud (OCI), Clean Architecture, DDD, APIs REST, OpenAPI, RBAC, JWT, OWASP

### Itaú BBA — Engenheiro de Software Full Stack
*ago 2021 – jan 2025 · São Paulo, SP*

Sistemas de recuperação de crédito: processos críticos para o banco, com grandes volumes de dados e integração entre diversas áreas.

- Desenvolver microsserviços em .NET Core / C# e APIs REST corporativas integrando múltiplos sistemas internos da esteira de recuperação de crédito.
- Implementar CQRS com SQL Server na escrita e MongoDB na leitura, isolando cargas transacionais para escalar consultas de alto volume.
- Construir funções serverless em AWS Lambda integradas ao Amazon S3, desacoplando o processamento de arquivos com custo sob demanda.
- Participar das decisões de arquitetura e das melhorias de performance da plataforma em ambiente bancário regulado.
- Desenvolver interfaces em Angular para as áreas de negócio, atuando de ponta a ponta (full stack).

**Stack:** .NET Core, C#, Microsserviços, CQRS, AWS Lambda, Amazon S3, SQL Server, MongoDB, Angular, TypeScript

### TOTVS — Desenvolvedor de Software
*nov 2019 – ago 2021 · São Paulo, SP*

Sistemas para operadoras de planos de saúde, atendendo aos requisitos regulatórios da ANS.

- Desenvolver funcionalidades backend em .NET Core, Java e AdvPL com TDD, garantindo conformidade regulatória com a ANS e reduzindo regressões em módulos críticos.
- Modelar dados em SQL Server e PostgreSQL e construir pipelines de ETL para Big Data com GoodData, habilitando indicadores analíticos para as operadoras.
- Desenvolver e documentar APIs REST com OpenAPI, simplificando a integração com parceiros e sistemas legados.
- Construir interfaces em Angular e TypeScript, entregando funcionalidades de ponta a ponta.

**Stack:** .NET Core, C#, Java, AdvPL, SQL Server, PostgreSQL, ETL, GoodData, OpenAPI, TDD, Angular

### Grupo Módulos — Desenvolvedor de Software .NET
*dez 2016 – nov 2019 · Santo André, SP*

ERP para pequenas e médias empresas integrado à emissão de notas fiscais eletrônicas (NF-e e NFS-e).

- Desenvolver módulos backend de ERP em C# / .NET Framework aplicando SOLID e DDD, garantindo código coeso e extensível para as rotinas fiscais e contábeis.
- Integrar o ERP aos WebServices SOAP/REST da Receita Federal para emissão de NF-e e NFS-e, automatizando obrigações fiscais dos clientes diretamente pelo sistema.
- Construir a camada de dados com Entity Framework e stored procedures em SQL Server, otimizando consultas das rotinas de maior volume do ERP.

**Stack:** C#, .NET Framework, Entity Framework, SQL Server, SOLID, DDD

---

## 3. Recomendações do recrutador

1. **Números reais.** Os bullets usam só métricas que já estavam no seu currículo (220+ endpoints, 200+ componentes, 5 camadas, 10 anos). Se você souber os números abaixo, eles aumentam muito a nota em ATS e na triagem humana:
   - Onboarding: "de **X** para **Y** semanas" (no PDF original havia esse espaço em branco).
   - Itaú BBA: volume processado (registros/dia, contratos) ou ganho de latência com CQRS.
   - EasySky: número de clientes/tenants, tempo de provisionamento antes × depois, RTO/RPO do Disaster Recovery.
   - TOTVS: cobertura de testes alcançada com TDD.
2. **Palavras-chave para incluir *somente se forem verdade*:** Docker, Kubernetes, Azure / Azure DevOps, Git, GitHub Actions, RabbitMQ / Kafka, Redis (qual cache você usa no RBAC?), xUnit / NUnit, Scrum / Kanban, .NET 8, Terraform. Muitas vagas .NET filtram por esses termos.
3. **Na Gupy:** cole o resumo no campo "Sobre", cadastre cada experiência com os bullets acima e preencha as competências **uma por uma**. O ranking da Gupy compara o texto da vaga com essas palavras.
4. **No LinkedIn:** use o headline acima, fixe as 3 competências principais (.NET, C#, Arquitetura de Software) e deixe "Open to Work" visível só para recrutadores.
5. **Dados pessoais:** tirei a idade e a data de nascimento do site. Não são exigidas e podem gerar viés na triagem.
