import Statisztika from "../js/Statisztika.js";

QUnit.module("metodusok megjelenitese", function (hooks) {
  let statisztika;
  hooks.before(() => {
    statisztika = new Statisztika();
  });
  QUnit.test("nemszerintSzama létezik-e", function (assert) {
    assert.ok(
      (Statisztika.nemszerintSzama, "létezik az nemszerintSzama metódus")
    );
  });
  QUnit.test("atlagEletkor létezik-e", function (assert) {
    assert.ok((Statisztika.atlagEletkor, "létezik az atlagEletkor metódus"));
  });
  QUnit.test("nemszerintAtlagEletkora létezik-e", function (assert) {
    assert.ok(
      (Statisztika.nemszerintAtlagEletkora,
      "létezik az nemszerintAtlagEletkora metódus")
    );
  });
});

QUnit.module("nemszerintSzama tesztelése", function (hooks) {
  let statisztika;
  hooks.before(() => {
    statisztika = new Statisztika();
  });

  QUnit.test("Üres lista", function (assert) {
    let nem = "";
    (statisztika.lista = [{}, {}, {}]),
      assert.equal(statisztika.nemszerintSzama(nem), "");
  });

  QUnit.test("Csak nő lista", function (assert) {
    let nem = "nő";
    statisztika.lista = [
      { nev: "Béla", kor: 56, nem: "nő" },
      { nev: "Jenő", kor: 16, nem: "nő" },
      { nev: "Rózsa", kor: 33, nem: "nő" },
    ];
    assert.equal(statisztika.nemszerintSzama(nem), "3");
  });

  QUnit.test("Csak férfi lista", function (assert) {
    let nem = "férfi";
    statisztika.lista = [
      { nev: "Béla", kor: 56, nem: "férfi" },
      { nev: "Jenő", kor: 16, nem: "férfi" },
    ];
    assert.equal(statisztika.nemszerintSzama(nem), "2");
  });

  QUnit.test("Csak egyéb lista", function (assert) {
    let nem = "egyéb";
    statisztika.lista = [
      { nev: "Béla", kor: 56, nem: "egyéb" },
      { nev: "Jenő", kor: 16, nem: "egyéb" },
    ];
    assert.equal(statisztika.nemszerintSzama(nem), "2");
  });

  QUnit.test("van benne üres elem", function (assert) {
    let nem = "egyéb";
    statisztika.lista = [
      { nev: "Béla", kor: 56, nem: "egyéb" },
      { nev: "Jenő", kor: 16, nem: "egyéb" },
      { nev: "", kor: 1, nem: "" },
      { nev: "Jenő", kor: 16, nem: "egyéb" },
      { nev: "", kor: 1, nem: "" },
    ];
    assert.equal(statisztika.nemszerintSzama(nem), "3");
  });

  QUnit.test("nincs nem kulcs", function (assert) {
    let nem = "egyéb";
    statisztika.lista = [
      { nev: "Béla", kor: 56 },
      { nev: "Jenő", kor: 16 },
    ];
    assert.equal(statisztika.nemszerintSzama(nem), " ");
  });

  QUnit.test("vegyes férfi nő", function (assert) {
    let nem = "nő";
    statisztika.lista = [
      { nev: "Béla", kor: 56, nem: "nő" },
      { nev: "Jenő", kor: 16, nem: "nő" },
      { nev: "Rózsa", kor: 33, nem: "nő" },
      { nev: "Béla", kor: 56, nem: "férfi" },
      { nev: "Jenő", kor: 16, nem: "férfi" },
    ];
    assert.equal(statisztika.nemszerintSzama(nem), "3");
  });
});

QUnit.module("atlagEletkor tesztelése", function (hooks) {
  let statisztika;
  hooks.before(() => {
    statisztika = new Statisztika();
  });

  QUnit.test("Üres lista", function (assert) {
    (statisztika.lista = [{}, {}, {}]),
      assert.equal(statisztika.atlagEletkor(), " ");
  });

  QUnit.test("Csak nő lista", function (assert) {
    statisztika.lista = [
      { nev: "Béla", kor: 56, nem: "nő" },
      { nev: "Jenő", kor: 16, nem: "nő" },
      { nev: "Rózsa", kor: 33, nem: "nő" },
    ];
    assert.equal(statisztika.atlagEletkor(), "35");
  });

  QUnit.test("Csak férfi lista", function (assert) {
    statisztika.lista = [
      { nev: "Béla", kor: 56, nem: "férfi" },
      { nev: "Jenő", kor: 16, nem: "férfi" },
    ];
    assert.equal(statisztika.atlagEletkor(), "36");
  });

  QUnit.test("Csak egyéb lista", function (assert) {
    statisztika.lista = [
      { nev: "Béla", kor: 56, nem: "egyéb" },
      { nev: "Jenő", kor: 16, nem: "egyéb" },
    ];
    assert.equal(statisztika.atlagEletkor(), "36");
  });

  QUnit.test("van benne üres elem", function (assert) {
    statisztika.lista = [
      { nev: "Béla", kor: 56, nem: "egyéb" },
      { nev: "Jenő", kor: 16, nem: "egyéb" },
      { nev: "", kor: 1, nem: "" },
      { nev: "Jenő", kor: 16, nem: "egyéb" },
      { nev: "", kor: 1, nem: "" },
    ];
    assert.equal(statisztika.atlagEletkor(), "18");
  });

  QUnit.test("nincs nem kulcs", function (assert) {
    statisztika.lista = [
      { nev: "Béla", kor: 56 },
      { nev: "Jenő", kor: 16 },
    ];
    assert.equal(statisztika.atlagEletkor(), "36");
  });

  QUnit.test("vegyes férfi nő", function (assert) {
    statisztika.lista = [
      { nev: "Béla", kor: 56, nem: "nő" },
      { nev: "Jenő", kor: 16, nem: "nő" },
      { nev: "Rózsa", kor: 33, nem: "nő" },
      { nev: "Béla", kor: 56, nem: "férfi" },
      { nev: "Jenő", kor: 16, nem: "férfi" },
    ];
    assert.equal(statisztika.atlagEletkor(), "35.4");
  });
});

QUnit.module("nemszerintAtlagEletkora tesztelése", function (hooks) {
    let statisztika;
    hooks.before(() => {
      statisztika = new Statisztika();
    });
  
    QUnit.test("Üres lista", function (assert) {
      let nem = "";
      (statisztika.lista = [{}, {}, {}]),
        assert.equal(statisztika.nemszerintAtlagEletkora(nem), "");
    });
  
    QUnit.test("Csak nő lista", function (assert) {
      let nem = "nő";
      statisztika.lista = [
        { nev: "Béla", kor: 56, nem: "nő" },
        { nev: "Jenő", kor: 16, nem: "nő" },
        { nev: "Rózsa", kor: 33, nem: "nő" },
      ];
      assert.equal(statisztika.nemszerintAtlagEletkora(nem), "35");
    });
  
    QUnit.test("Csak férfi lista", function (assert) {
      let nem = "férfi";
      statisztika.lista = [
        { nev: "Béla", kor: 56, nem: "férfi" },
        { nev: "Jenő", kor: 16, nem: "férfi" },
      ];
      assert.equal(statisztika.nemszerintAtlagEletkora(nem), "36");
    });
  
    QUnit.test("Csak egyéb lista", function (assert) {
      let nem = "egyéb";
      statisztika.lista = [
        { nev: "Béla", kor: 56, nem: "egyéb" },
        { nev: "Jenő", kor: 16, nem: "egyéb" },
      ];
      assert.equal(statisztika.nemszerintAtlagEletkora(nem), "36");
    });
  
    QUnit.test("van benne üres elem", function (assert) {
      let nem = "egyéb";
      statisztika.lista = [
        { nev: "Béla", kor: 56, nem: "egyéb" },
        { nev: "Jenő", kor: 16, nem: "egyéb" },
        { nev: "", kor: 1, nem: "" },
        { nev: "Jenő", kor: 16, nem: "egyéb" },
        { nev: "", kor: 1, nem: "" },
      ];
      assert.equal(statisztika.nemszerintAtlagEletkora(nem), "29.333333333333332");
    });
  
    QUnit.test("nincs nem kulcs", function (assert) {
      let nem = "egyéb";
      statisztika.lista = [
        { nev: "Béla", kor: 56 },
        { nev: "Jenő", kor: 16 },
      ];
      assert.equal(statisztika.nemszerintAtlagEletkora(nem), " ");
    });
  
    QUnit.test("vegyes férfi nő", function (assert) {
      let nem = "nő";
      statisztika.lista = [
        { nev: "Béla", kor: 56, nem: "nő" },
        { nev: "Jenő", kor: 16, nem: "nő" },
        { nev: "Rózsa", kor: 33, nem: "nő" },
        { nev: "Béla", kor: 56, nem: "férfi" },
        { nev: "Jenő", kor: 16, nem: "férfi" },
      ];
      assert.equal(statisztika.nemszerintAtlagEletkora(nem), "35");
    });
  });
