const listaUslug = [
    {
      nazwaUslugi: "graficzna",
      stawka: 35,
    },
    {
      nazwaUslugi: "zarzadcza",
      stawka: 40,
    },
    {
      nazwaUslugi: "programistyczna",
      stawka: 50,
    },
  ];
  const uslugaGraficzna = document.querySelector("#graficzna");
  const uslugaZarzadcza = document.querySelector("#zarzadcza");
  const uslugaProgramistyczna = document.querySelector("#programistyczna");
  const sumaEl = document.querySelector("#suma");
  const obliczBtn = document.querySelector("#oblicz");
  
  obliczBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let suma = 0;
    suma =
      uslugaGraficzna.value * listaUslug[0].stawka +
      uslugaZarzadcza.value * listaUslug[1].stawka +
      uslugaProgramistyczna.value * listaUslug[2].stawka;
    sumaEl.textContent = `${suma} zł.`;
  });
  