import './Table.css';

const data = [
    { tipColectare: "sticla", adresa: "Primăverii <-> Nicolae Firu", companie: "RER Group"},
    { tipColectare: "sticla", adresa: "Bd. Aviației <-> Cucului", companie: "RER Group"},
    { tipColectare: "sticla", adresa: "Aleea Libelulei", companie: "RER Group"},
    { tipColectare: "sticla", adresa: "Daliei <-> Socrate", companie: "RER Group"},
    { tipColectare: "sticla", adresa: "Dunărea <-> Bârzava", companie: "RER Group"},
    { tipColectare: "sticla", adresa: "Prahova <-> Banatul", companie: "RER Group"},
    { tipColectare: "sticla", adresa: "Strada Soroca", companie: "RER Group"},
    { tipColectare: "sticla", adresa: "Cloșca <-> Piața Avram Iancu", companie: "RER Group"},
    { tipColectare: "sticla", adresa: "Timiș <-> Amforei", companie: "RER Group"},
    { tipColectare: "sticla", adresa: "Independenței", companie: "RER Group"},
    { tipColectare: "sticla", adresa: "1 Decembrie 1918 <-> Aleea F.C. Ripensia", companie: "RER Group"},
    { tipColectare: "sticla", adresa: "Piața Iosefin", companie: "RER Group"},
    { tipColectare: "ulei utilizat", adresa: "Mol Timișoara 4 – Liviu Rebreanuu", companie: "MOL"},
    { tipColectare: "sticla", adresa: "Siemens", companie: "RER Group"},
    { tipColectare: "sticla", adresa: "Nicolae Ilieșu #1", companie: "RER Group"},
    { tipColectare: "sticla", adresa: "Strada Lt. Ovidiu Balea", companie: "RER Group"},
    { tipColectare: "sticla", adresa: "Nicolae D. Cocea", companie: "RER Group"},
    { tipColectare: "sticla", adresa: "Oglinzilor", companie: "RER Group"},
    { tipColectare: "baterii", adresa: "Mol Timișoara 1 – Liviu Rebreanu", companie: "MOL"},
    { tipColectare: "sticla", adresa: "Atomului <-> Intrarea Saturn", companie: "RER Group"},
    { tipColectare: "sticla", adresa: "Eroilor de la Tisa <-> Deliblata", companie: "RER Group"},
    { tipColectare: "sticla", adresa: "Leandrului <-> Aleea Martir Gheorghe Iosub", companie: "RER Group"},
    { tipColectare: "sticla", adresa: "Tosca <-> Mureș", companie: "RER Group"},
    { tipColectare: "sticla", adresa: "Sinaia #1", companie: "RER Group"},
    { tipColectare: "sticla", adresa: "Martir Herman Sporer", companie: "RER Group"},
    { tipColectare: "sticla", adresa: "Sinaia #2", companie: "RER Group"},
    { tipColectare: "sticla", adresa: "Versului <-> Martir Ioan Stanciu <-> Aleea Sănătății", companie: "RER Group"},
    { tipColectare: "sticla", adresa: "Dimineții", companie: "RER Group"},
    { tipColectare: "sticla", adresa: "Hărniciei <-> Mureș", companie: "RER Group"},
    { tipColectare: "sticla", adresa: "Dr. Ioan Mureșan <-> Constantin Brăiloiu", companie: "RER Group"},
    { tipColectare: "sticla", adresa: "Budai Deleanu <-> Iuliu Maniu", companie: "RER Group"},
    { tipColectare: "sticla", adresa: "Ludwig von Ybl <-> Mureș", companie: "RER Group"},
    { tipColectare: "sticla", adresa: "Aleea Arcașilor <-> Martir Silviu Motohon", companie: "RER Group"},
    { tipColectare: "sticla", adresa: "Amforei <-> Teiului", companie: "RER Group"},
    { tipColectare: "sticla", adresa: "Bd. Regele Carol I <-> Iancu Văcărescu", companie: "RER Group"},
    { tipColectare: "sticla", adresa: "Aleea Inului", companie: "RER Group"},
    { tipColectare: "sticla", adresa: "Munteniei <-> Aleea Viilor", companie: "RER Group"},
    { tipColectare: "sticla", adresa: "Ioan Slavici", companie: "RER Group"},
    { tipColectare: "haine", adresa: "Ardealului <-> Mircea Hoinic", companie: "Containere "},
    { tipColectare: "haine", adresa: "Gavril Musicescu <-> Alexandru Rogojan", companie: "Containere "},
    { tipColectare: "sticla", adresa: "Calea Torontalului nr. 36", companie: "RER Group"},
    { tipColectare: "sticla", adresa: "Calea Bogdăneștilor <-> Mendeleev", companie: "RER Group"},
    { tipColectare: "sticla", adresa: "Daliei <-> Eroilor de la Tisa", companie: "RER Group"},
    { tipColectare: "sticla", adresa: "Aleea Muzicii #1", companie: "RER Group"},
    { tipColectare: "sticla", adresa: "Gavril Musicescu <-> Drubeta", companie: "RER Group"},
    { tipColectare: "sticla", adresa: "Delfinului <-> Barbu Iscovescu", companie: "RER Group"},
    { tipColectare: "sticla", adresa: "Teiului nr. 3", companie: "RER Group"},
    { tipColectare: "deșeuri voluminoase", adresa: "RETIM – Calea Torontalului 94", companie: "RER Group"},
    { tipColectare: "sticla", adresa: "Gelu <-> Constantin Olănescu", companie: "RER Group"},
    { tipColectare: "sticla", adresa: "Oravița <-> Stuparilor", companie: "RER Group"},
    { tipColectare: "sticla", adresa: "Munteniei <-> Martir Cernăianu", companie: "RER Group"},
    { tipColectare: "sticla", adresa: "Aleea cu plopi", companie: "RER Group"},
    { tipColectare: "sticla", adresa: "Căpitan Damșescu", companie: "RER Group"},
    { tipColectare: "sticla", adresa: "Martir Leontina Bînciu (în față la Parcul Copiilor)", companie: "RER Group"},
    { tipColectare: "sticla", adresa: "Gavril Musicescu <-> Alexandru Rogojan", companie: "RER Group"},
    { tipColectare: "sticla", adresa: "Florilor", companie: "RER Group"},
    { tipColectare: "sticla", adresa: "Ulmului <-> Timiș", companie: "RER Group"},
    { tipColectare: "sticla", adresa: "Chișinău <-> Făgăraș", companie: "RER Group"},
    { tipColectare: "sticla", adresa: "Piața Iancu Huniade", companie: "RER Group"},
    { tipColectare: "sticla", adresa: "Mircea cel Bătrân <-> Livezilor", companie: "RER Group"},
    { tipColectare: "sticla", adresa: "Calea Bogdăneștilor <-> Barierei", companie: "RER Group"},
    { tipColectare: "sticla", adresa: "Ion Neculce <-> Strada Nouă", companie: "RER Group"},
    { tipColectare: "sticla", adresa: "Ivan Petrovici Pavlov", companie: "RER Group"},
    { tipColectare: "sticla", adresa: "Crizantemelor", companie: "RER Group"},
    { tipColectare: "sticla", adresa: "Moise Doboșan <-> Bistrița", companie: "RER Group"},
    { tipColectare: "sticla", adresa: "Traviata", companie: "RER Group"},
    { tipColectare: "sticla", adresa: "Bd. Mihai Eminescu <-> Patriarh Miron Cristea", companie: "RER Group"},
    { tipColectare: "sticla", adresa: "Timocului <-> Ion Creangă", companie: "RER Group"},
    { tipColectare: "sticla", adresa: "Brândușei <-> Intrarea Zânelor", companie: "RER Group"},
    { tipColectare: "sticla", adresa: "Bd. Vasile Pârvan <-> Traian Lalescu", companie: "RER Group"},
    { tipColectare: "sticla", adresa: "Gavril Musicescu <-> Ulpia Traiana", companie: "RER Group"},
    { tipColectare: "sticla", adresa: "Stelelor <-> Labirint", companie: "RER Group"},
    { tipColectare: "sticla", adresa: "Calea Urseni <-> Nuferilor", companie: "RER Group"},
    { tipColectare: "sticla", adresa: "Cluj <-> Ion Vidu", companie: "RER Group"},
    { tipColectare: "sticla", adresa: "Martir Dan Carpin <-> Aleea Scurtă", companie: "RER Group"},
    { tipColectare: "sticla", adresa: "Virgil Onițiu <-> Coriolan Băran", companie: "RER Group"},
    { tipColectare: "sticla", adresa: "Glad <-> Alexandru Macedonski", companie: "RER Group"},
    { tipColectare: "sticla", adresa: "Piața Sf. Iosif cel Nou <-> Bucegi", companie: "RER Group"},
    { tipColectare: "sticla", adresa: "Efta Botoca <-> Câmpului", companie: "RER Group"},
    { tipColectare: "sticla", adresa: "Ștefan cel Mare <-> Ștefan Octavian Iosif", companie: "Containere"},
    { tipColectare: "sticla", adresa: "Aleea Studenților <-> Aurelianus", companie: "RER Group"},
    { tipColectare: "sticla", adresa: "Gheorghe Lazăr <-> Johann Sebastian Bach", companie: "RER Group"},
    { tipColectare: "sticla", adresa: "Gheorghe Ranetti <-> Iris", companie: "RER Group"},
    { tipColectare: "haine", adresa: "Martir Petre Domășneanu <-> Martir Petre Mutașcu", companie: "Containere"},
    { tipColectare: "sticla", adresa: "Calea Torontalului nr. 98", companie: "RER Group"},
    { tipColectare: "sticla", adresa: "Piața Axente Sever <-> Cozia", companie: "RER Group"},
    { tipColectare: "sticla", adresa: "Paris nr. 1", companie: "RER Group"},
    { tipColectare: "haine", adresa: "Calea Aradului <-> Ans", companie: "Containere"},
    { tipColectare: "sticla", adresa: "Aleea Martir Istvan Andrei #1", companie: "RER Group"},
    { tipColectare: "sticla", adresa: "Primăverii <-> Viorelelor", companie: "RER Group"},
    { tipColectare: "sticla", adresa: "Bucovinei <-> Cernăuți", companie: "RER Group"},
    { tipColectare: "sticla", adresa: "Iulia Maniu <-> Calea Șagului", companie: "RER Group"},
    { tipColectare: "haine", adresa: "Strada Nouă", companie: "Containere"},
    { tipColectare: "sticla", adresa: "Aleea Gorniștilor <-> Școala Gen. 27", companie: "RER Group"}
]
function Table() {
    return (
        <div className="App">
        <table>
          <tr>
            <th>Tip colectare</th>
            <th>Adresa</th>
            <th>Companie</th>
          </tr>
          {data.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.tipColectare}</td>
                <td>{val.adresa}</td>
                <td>{val.companie}</td>
              </tr>
            )
          })}
        </table>
      </div>
    );
  }

export default Table;