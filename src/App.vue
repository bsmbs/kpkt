<template>
  <div id="app">
    <p class="title">Oblicz sobie punkty</p>
    <div class="window">
      <p class="section">Świadectwo</p>
      <p class="underSection">Oceny</p>
      <p class="tip">Wybrane przedmioty wybiera szkoła, do której chcesz się udać. Informacje o tym należy znaleźć na stronie szkoły, najczęściej w regulaminie rekrutacji.</p>
      <div class="point" v-for="(sub, i) in subjects" :key="i">
        <div class="pointName">Ocena z {{sub.displayName}}</div>
        <div class="pointS">
          <div class="buton" v-for="i in 6" :key="i" @click="sub.ocena = i" :class="sub.ocena == i ? 'selected': ''">{{i}}</div>
        </div>
      </div>
      <p class="underSection">Dodatkowe</p>
      <div class="point">
        <div class="pointName">Świadectwo z wyróżnieniem czyli <b>czerwony pasek</b></div>
        <div class="pointS">
          <div class="buton" @click="pasek = true" :class="pasek ? 'selected': ''">Tak</div>
          <div class="buton" @click="pasek = false" :class="pasek ? '': 'selected'">Nie</div>
        </div>
      </div>
      <div class="point">
        <div class="pointName">Aktywność społeczna czyli <b>wolontariat</b></div>
        <div class="pointS">
          <div class="buton" @click="wolontariat = true" :class="wolontariat ? 'selected': ''">Tak</div>
          <div class="buton" @click="wolontariat = false" :class="wolontariat ? '' : 'selected'">Nie</div>
        </div>
      </div>
      <p class="underSection">Osiągnięcia</p>
      <p class="tip">Laureaci z konkursów kuratoryjnych są przyjmowani do szkoły w pierwszej kolejności<br>Liczą się osiągnięcia z ostatniej klasy tzn. 8 podstawówki lub 3 gimnazjum<br>Jeżeli klikniesz zaznaczone ponownie, zostanie odznaczone<br>Jeżeli nie posiadasz żadnych osiągnięć, możesz pominąć tę sekcję</p>
      <div v-for="(konkurs, i) in konkursyes" :key="i+16">
        <p class="underUnderSection">{{i+1}}) {{konkurs.name}}</p>
        <div class="point" v-for="(section, i) in konkurs.sections" :key="i+8">
          <div class="pointName">{{section.name}}</div>
          <div class="pointS" v-if="section.count">
            <div class="buton" v-for="(x, i) in section.count" :key="i+1" @click="selectB(i+1, section)" :class="i+1 == section.s ? 'selected' : ''">
              {{ x.n }}
            </div>
          </div>
          <div v-else>
            <div class="buton" :class="section.s ? 'selected' : ''" @click="selectA(section)">Tak</div>
          </div>
        </div>
      </div>
      <p class="section">Egzamin</p>
      <div class="buton" @click="egzamin = 8" :class="egzamin == 8 ? 'selected': ''">ósmoklasisty</div>
      <div class="buton" @click="egzamin = 3" :class="egzamin == 3 ? 'selected': ''">gimnazjalny</div>
      <div v-if="egzamin != 0">
      <div class="point">
          <div class="pointName"><b>Język polski</b></div>
          <div class="pointS"><input type="number" min="0" max="100" v-model="polski" /></div>
      </div>
      <div class="point">
          <div class="pointName"><b>Matematyka</b></div>
          <div class="pointS"><input type="number" min="0" max="100" v-model="matematyka" /></div>
      </div>
      <div class="point">
          <div class="pointName"><b>Język obcy <span v-if="egzamin == 3">(poziom podstawowy)</span></b></div>
          <div class="pointS"><input type="number" min="0" max="100" v-model="obcy" /></div>
      </div>
      <div v-if="egzamin == 3">
        <div class="point">
          <div class="pointName"><b>Historia i WOS</b></div>
          <div class="pointS"><input type="number" min="0" max="100" v-model="historia" /></div>
        </div>
        <div class="point">
          <div class="pointName"><b>Przyrodniczy</b></div>
          <div class="pointS"><input type="number" min="0" max="100" v-model="pszyrka" /></div>
        </div>
      </div>
      <div class="error" v-if="blad">{{ moze }}</div>
      <div @click="oblicz()" class="buton bigbuton">{{ wynik }}</div>
      </div>
      </div>
      <footer>Na podstawie danych z <a href="https://www.gov.pl/web/edukacja">Ministerstwa Edukacji Narodowej</a> &bull; Źródło strony na <a href="https://github.com/pizza61/kpkt">GitHub</a></footer>
    </div>
</template>

<script>

export default {
  name: 'app',
  methods: {
    selectA: (section) => {
      if(section.s == true) {
        section.s = false;
      } else {
        section.s = true;
      }
    },
    selectB: (count, section) => {
      if(section.s == count) {
        section.s = 0;
      } else {
        section.s = count;
      }
    },
    oblicz: function() {
      this.blad = false;
      let total = 0;

      // OCENY
      this.subjects.forEach((s) => {
        switch(s.ocena) {
          case 6:
            total += 18;
            break;
          case 5:
            total += 17;
            break;
          case 4:
            total += 14;
            break;
          case 3:
            total += 8;
            break;
          case 2:
            total += 2;
            break;
          case 1:
            this.blad = true;
            this.moze = "z jedyneczką daleko nie zajdziesz";
            break;
          default:
            this.blad = true;
            this.moze = "Nie podałeś oceny!"
            break;
        }
      })
      // DODATKOWE
      if(this.wolontariat) total += 3;
      if(this.pasek) total += 7;

      // KONKURSY
      let konkursyMax = 0;
      this.konkursyes.forEach((konkurs) => {
        let konkursMax = 0;
        konkurs.sections.forEach(section => {
          if(section.count) {
            if(section.s > 0) {
              if(section.count[section.s-1].points > konkursMax) {
                konkursMax = section.count[section.s-1].points;
              }
            }
          } else {
            if(section.s) {
              if(section.points > konkursMax) {
                konkursMax = section.points;
              }
            }
          }
        })
        if(konkursyMax+konkursMax>18) {
          konkursyMax = 18;
        } else {
          konkursyMax += konkursMax;
        }
      })
      total += konkursyMax;
      // EGZAMINY
      if(this.egzamin == 8) {
        if(this.polski <= 100 && this.polski > 0) {
          total += (Number(this.polski))*0.35
        } else {
          this.blad = true;
          this.moze = "Podano nieprawidłowy wynik egzaminu"
        }
        if(this.matematyka <= 100 && this.matematyka > 0) {
          total += (Number(this.matematyka))*0.35
        } else {
          this.blad = true;
          this.moze = "Podano nieprawidłowy wynik egzaminu"
        }
        if(this.obcy <= 100 && this.obcy > 0) {
          total += (Number(this.obcy))*0.3
        } else {
          this.blad = true;
          this.moze = "Podano nieprawidłowy wynik egzaminu"
        }
        if(!this.blad) this.wynik = "Twój wynik to "+total+" pkt";
      } else if (this.egzamin == 3) {
        if(this.polski <= 100 && this.polski > 0) {
          total += (Number(this.polski))*0.2
        } else {
          this.blad = true;
          this.moze = "Podano nieprawidłowy wynik egzaminu"
        }
        if(this.matematyka <= 100 && this.matematyka > 0) {
          total += (Number(this.matematyka))*0.2
        } else {
          this.blad = true;
          this.moze = "Podano nieprawidłowy wynik egzaminu"
        }
        if(this.obcy <= 100 && this.obcy > 0) {
          total += (Number(this.obcy))*0.2
        } else {
          this.blad = true;
          this.moze = "Podano nieprawidłowy wynik egzaminu"
        }
        if(this.historia <= 100 && this.historia > 0) {
          total += (Number(this.historia))*0.2
        } else {
          this.blad = true;
          this.moze = "Podano nieprawidłowy wynik egzaminu"
        }
        if(this.pszyrka <= 100 && this.pszyrka > 0) {
          total += (Number(this.pszyrka))*0.2
        } else {
          this.blad = true;
          this.moze = "Podano nieprawidłowy wynik egzaminu"
        }
        if (!this.blad) this.wynik = "Twój wynik to "+total+" pkt";
      } else {
        this.blad = true;
        this.moze = "Nie wybrano egzaminu"
      }
    }
  },
  data: function() { return {
    subjects: [
      {
        displayName: "języka polskiego",
        ocena: null,
      },
      {
        displayName: "matematyki",
        ocena: null,
      },
      {
        displayName: "pierwszego wybranego przedmiotu",
        ocena: null,
      },
      {
        displayName: "drugiego wybranego przedmiotu",
        ocena: null,
      }
    ],
    konkursyes: [
      {
        name: "konkursy kuratoryjne o zasięgu ponadwojewódzkim",
        sections: [
          {
            name: "tytuł finalisty konkursu przedmiotowego",
            points: 10,
            s: false,
          },
          {
            name: "tytuł laureata konkursu tematycznego lub międzyprzedmiotowego",
            points: 7,
            s: false,
          },
          {
            name: "tytuł finalisty konkursu tematycznego lub międzyprzedmiotowego",
            points: 5,
            s: false,
          }
        ],
        total: 0,
      },
      {
        name: "konkursy kuratoryjne wojewódzkie",
        sections: [{
          name: "tytuł finalisty konkursu przedmiotowego",
          count: [
            {n: "1 raz", points: 7},
            {n: "2 lub więcej razy", points: 10}
          ],
          s: 0,
        },{
          name: "tytuł laureata konkursu tematycznego lub międzyprzedmiotowego",
          count: [
            {n: "1 raz", points: 5},
            {n: "2 lub więcej razy", points: 7}
          ],
          s: 0
        },{
          name: "tytuł finalisty konkursu tematycznego lub międzyprzedmiotowego",
          count: [
            {n: "1 raz", points: 3},
            {n: "2 lub więcej razy", points: 5}
          ],
          s: 0
        }],
        total: 0,
      },
      {
        name: "inne konkursy ogólnopolskie lub międzynarodowe (dotyczy szkół artystycznych)",
        sections: [{
          name: "tytuł finalisty konkursu z przedmiotu objętych planem nauczania",
          points: 10,
          s: false,
        },{
          name: "tytuł laureata turnieju z przedmiotu nieobjętego planem nauczania",
          points: 4,
          s: false,
        },{
          name: "tytuł finalisty turnieju z przedmiotu nieobjętego planem nauczania",
          points: 3,
          s: false,
        }],
        total: 0,
      },
      {
        name: "inne konkursy wojewódzkie lub międzywojewódzkie (dotyczy szkół artystycznych)",
        sections: [{
          name: "tytuł finalisty konkursu z przedmiotu objętego planem nauczania",
          count: [
            {n: "1 raz", points: 7},
            {n: "2 lub więcej razy", points: 10}
          ],
          s: 0,
        },{
          name: "tytuł laureata turnieju z przedmiotu nieobjętego planem nauczania",
          count: [
            {n: "1 raz", points: 3},
            {n: "2 lub więcej razy", points: 7}
          ],
          s: 0
        },{
          name: "tytuł finalisty turnieju z przedmiotu nieobjętego planem nauczania",
          count: [
            {n: "1 raz", points: 2},
            {n: "2 lub więcej razy", points: 5}
          ],
          s: 0
        }],
        total: 0,
      }
    ],
    pasek: false,
    wolontariat: false,
    egzamin: 0,
    // punkty za egzamin
    polski: 0,
    matematyka: 0,
    obcy: 0,
    // tylko gimnazjaliści
    historia: 0,
    pszyrka: 0,
    //
    moze: "Błąd",
    wynik: "Oblicz wynik",
    blad: false,
  }}
}
</script>

<style lang="scss">
#app {
  font-family: 'Source Sans Pro', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.title {
  font-size: 120%;
  display: block;
  margin: 20px;
  font-weight: 700;
}

.window {
  margin: auto;
}

@media screen and (min-width: 1196px) {
  .window {
    width: 60%;
  }
}
.tip {
  background: rgb(0, 115, 177);
  color: white;
  padding: 10px;
  font-weight: 600;
  border-radius: 3px;
}

.error {
  color: white;
  padding: 10px;
  font-weight: 600;
  border-radius: 3px;
  background: rgb(213, 51, 61);
}
.section {
  font-weight: 700;
  font-size: 120%;
}

.underSection {
  font-weight: 600;
  font-size: 110%;
}

.underUnderSection {
  font-weight: 600;
  font-size: 105%;
}
.point {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

@media screen and (max-width: 768px) {
  .point {
    flex-direction: column;
  }
}

.buton {
  display: inline-block;
  user-select: none;
  border-radius: 3px;
  padding: 8px 20px;
  font-weight: 600;
  font-size: 110%;
  transition: background 200ms, color 200ms;

  &:hover {
    background: rgba(0, 115, 177, 0.8);
    color: white;
  }
}

.bigbuton {
  background: rgb(0, 115, 177);
  color: white;
  font-size: 120%; 
  padding: 16px 40px; 
  display: block; 
  cursor: pointer; 
  text-align: center; 
  margin: 10px 0;
}
.selected {
  background: rgb(0, 115, 177);
  color: white;

  &:hover {
    background: rgba(0, 115, 177, 0.9);
  }
}

input {
  width: 30px;
  margin: 2px;
  padding: 8px 20px;
  color: #2c3e50;
  font-weight: 600;
  font-size: 100%;
  border-radius: 3px;
  border-color: #0073b1;
  background: white;
  outline: none;
  text-align: center;
}

input[type="number"]::-webkit-outer-spin-button, input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
 
input[type="number"] {
    -moz-appearance: textfield;
}

footer {
  margin: 10px;
}
</style>
