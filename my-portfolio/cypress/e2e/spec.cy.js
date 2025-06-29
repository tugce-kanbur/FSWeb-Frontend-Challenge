// cypress/e2e/portfolio.cy.js
describe("Alternatif 3 - Kişisel Portföy Testleri (Vercel)", () => {
  beforeEach(() => {
    cy.visit("https://fs-web-frontend-challenge-8nnr-oqlfpirj7.vercel.app/");
  });

  it("Sayfa düzgün açılıyor ve başlık görünüyor", () => {
    cy.contains("almila", { matchCase: false }).should("exist");
  });

  it("Hero alanında başlık ve butonlar var", () => {
    cy.get("h1").should("contain.text", "Frontend");
    cy.get("a").should("have.length.at.least", 2);
  });

  it("Dil değiştirme butonu çalışıyor", () => {
    cy.contains("TÜRKÇE’YE GEÇ").click();
    cy.contains("SWITCH TO EN").should("exist");
  });

  it("Dark mode toggle çalışıyor", () => {
    cy.get("input[type='checkbox']").click({ force: true });
    cy.get("html").should("have.class", "dark");
  });

  it("Skills bölümü ve ikonlar görünüyor", () => {
    cy.contains("SKILLS").should("exist");
    cy.get("img[src*='figma']").should("exist");
    cy.get("img[src*='react']").should("exist");
    cy.get("img[src*='javascript']").should("exist");
    cy.get("img[src*='redux']").should("exist");
    cy.get("img[src*='node']").should("exist");
  });

  it("About bölümü içerikleri görünüyor", () => {
    cy.contains("About Me").should("exist");
    cy.get("img[alt='Çalışma ortamı']").should("exist");
    cy.get("ul li").should("have.length.at.least", 3);
  });

  it("Projects bileşeni doğru şekilde listeleniyor", () => {
    cy.contains("PROJECTS").should("exist");
    cy.get("h3").should("have.length.greaterThan", 0);
    cy.get("a").contains(/View Site|Live Site/i).should("have.attr", "href");
  });

  it("Footer bileşeni ve iletişim linkleri mevcut", () => {
    cy.contains("Contact").should("exist");
    cy.get("a[href^='mailto:']").should("exist");
  });

  it("Sosyal medya ikonları light modda görünüyor", () => {
    cy.get("footer").within(() => {
      cy.get("img[src*='github']").should("exist");
      cy.get("img[src*='linkedin']").should("exist");
      cy.get("img[src*='instagram']").should("exist");
      cy.get("img[src*='codepen']").should("exist");
      cy.get("img[src*='at-sign']").should("exist");
      cy.get("img[src*='twitter']").should("exist");
    });
  });

  it("Sosyal medya ikonları dark modda değişiyor", () => {
    cy.get("input[type='checkbox']").click({ force: true });
    cy.get("footer").within(() => {
      cy.get("img[src*='github-dark']").should("exist");
      cy.get("img[src*='linkedin-dark']").should("exist");
      cy.get("img[src*='instagram-dark']").should("exist");
      cy.get("img[src*='codepen-dark']").should("exist");
      cy.get("img[src*='at-sign-dark']").should("exist");
      cy.get("img[src*='Vector']").should("exist");
    });
  });
});
