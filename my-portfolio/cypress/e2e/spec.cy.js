describe("Kişisel Portföy Testleri (data.js'e göre)", () => {
  beforeEach(() => {
    cy.visit("https://fs-web-frontend-challenge-8nnr.vercel.app/");
  });

  it("Sayfa başlığı olarak 'almila' görünüyor", () => {
    cy.contains("almila", { matchCase: false }).should("exist");
  });

  it("Hero başlıkları ve açıklamaları doğru şekilde gösteriliyor", () => {
    cy.contains("I am a Frontend").should("exist");
    cy.contains("Developer...").should("exist");
    cy.contains("craft solid and scalable frontend").should("exist");
    cy.contains("user experiences").should("exist");
  });

  it("Hero görseli doğru şekilde yükleniyor", () => {
    cy.get('img[alt="Hero görseli"]')
      .should("have.attr", "src")
      .and("include", "/fotoğraflar/hero-right.png");
  });

  it("Hero butonları doğru linklere yönlendiriyor", () => {
    cy.get("a").filter(":contains('Github')")
      .should("have.attr", "href", "https://github.com/tugce-kanbur?tab=repositories");

    cy.get("a").filter(":contains('Linkedin')")
      .should("have.attr", "href", "https://www.linkedin.com/in/tu%C4%9F%C3%A7e-kanbur-61234121b/");
  });

  it("Hero buton ikonları doğru gösteriliyor", () => {
    cy.get("a:contains('Github') img")
      .should("have.attr", "src")
      .and("include", "github");

    cy.get("a:contains('Linkedin') img")
      .should("have.attr", "src")
      .and("include", "LinkedIn");
  });

  it("Dark mode aktifken ikonlar değişiyor", () => {
    cy.get("input[type='checkbox']").click({ force: true });

    cy.get("a:contains('Github') img")
      .should("have.attr", "src")
      .and("include", "github-dark");

    cy.get("a:contains('Linkedin') img")
      .should("have.attr", "src")
      .and("include", "LinkedIn-dark");
  });

  it("Dil değişimi sonrası Türkçe içerik görünür", () => {
    cy.contains("TÜRKÇE’YE GEÇ").click();
    cy.contains("Ben bir Frontend").should("exist");
    cy.contains("Geliştiricisiyim...").should("exist");
    cy.contains("ölçeklenebilir arayüz ürünleri").should("exist");
  });

  it("Skills başlığı ve ikonlar görüntüleniyor", () => {
    cy.contains(/skills/i).should("exist");

    cy.get('img[alt="javascript-icon"]').should("exist");
    cy.get('img[alt="react-icon"]').should("exist");
    cy.get('img[alt="redux-icon"]').should("exist");
    cy.get('img[alt="node-icon"]').should("exist");
    cy.get('img[alt="vscode-icon"]').should("exist");
    cy.get('img[alt="figma-icon"]').should("exist");
  });

  it("About Me içeriği ve görseli görünüyor", () => {
    cy.contains(/about me/i).should("exist");
    cy.get("img[alt='Çalışma ortamı']").should("exist");
  });

  it("Profil bilgileri doğru görünüyor", () => {
    cy.contains("Date of Birth").should("exist");
    cy.contains("24.03.1996").should("exist");
    cy.contains("Ankara").should("exist");
    cy.contains("Hacettepe").should("exist");
  });

  it("Projects başlığı ve proje kartları gösteriliyor", () => {
    cy.contains(/projects/i).should("exist");
    cy.contains("Workintech").should("exist");
    cy.contains("Journey").should("exist");

    cy.get("a")
      .contains(/Live Site|View Site/i)
      .should("have.attr", "href")
      .and("include", "fs-web-frontend-challenge-8nnr");
  });

  it("Footer iletişim bilgileri ve mail adresi görünüyor", () => {
    cy.contains(/send me a message/i).should("exist");
    cy.contains(/got a question/i).should("exist");
    cy.contains("almilasucode@gmail.com").should("exist");
    cy.get("a[href^='mailto:almilasucode@gmail.com']").should("exist");
  });
});
