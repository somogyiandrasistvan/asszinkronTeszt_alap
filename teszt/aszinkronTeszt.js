import Aszinkron from "../js/asszinkron.js";

QUnit.test("adatBe metódus tesztje", (assert) => {
  const done = assert.async();
  const asszinkron = new Aszinkron();
  const vegpont = "../adatok.json";
  const callbackFuggvenyem = function (data) {
    assert.deepEqual(data, {
      szemelyek: [
        { nev: "Béla", kor: 56, nem: "ffi" },
        { nev: "Jenő", kor: 16, nem: "ffi" },
        { nev: "Rózsa", kor: 33, nem: "nő" },
      ],
    });
    done();
  };
  asszinkron.adatBe(vegpont, callbackFuggvenyem);
});
