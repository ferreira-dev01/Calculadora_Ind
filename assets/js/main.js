// Adiciona ação aos botões de calcular
document.getElementById("btn_calcula_imv").addEventListener("click", imv);
document.getElementById("btn_calcula_icvpe").addEventListener("click", icvpe);
document.getElementById("btn_calcula_icvpa").addEventListener("click", icvpa);

document.getElementById("btn_limpa_imv").addEventListener("click", limpa_imv);
document.getElementById("btn_limpa_icvpe").addEventListener("click", limpa_icvpe);
document.getElementById("btn_limpa_icvpa").addEventListener("click", limpa_icvpa);


// checa se o valor do input é um número
function checa_valor_input(input) {
  if (!(input.length > 0)) {
    input = 0;
  }

  return input;
}

function limpa_imv(){

 document.getElementById("imv_homicidio").value='';
 document.getElementById("imv_roubo").value='';
 document.getElementById("imv_lesao").value='';
 document.getElementById("imv_tortura").value='';
 document.getElementById("imv_sequestro").value='';
 document.getElementById("imv_pop").value='';

}
function limpa_icvpe(){

  document.getElementById("icvpe_homicidio").value='';
  document.getElementById("icvpe_tortura").value='';
  document.getElementById("icvpe_sequestro").value='';
  document.getElementById("icvpe_pop").value='';

 }

function limpa_icvpa(){

  document.getElementById("icvpa_roubo").value='';
  document.getElementById("icvpa_extorcao").value='';
  document.getElementById("icvpa_extorcao_sequestro").value='';
  document.getElementById("icvpa_pop").value='';


}



function imv() {
  let H = document.getElementById("imv_homicidio").value;
  let R = document.getElementById("imv_roubo").value;
  let L = document.getElementById("imv_lesao").value;
  let T = document.getElementById("imv_tortura").value;
  let SC = document.getElementById("imv_sequestro").value;
  let P = document.getElementById("imv_pop").value;

  H = checa_valor_input(H);
  R = checa_valor_input(R);
  L = checa_valor_input(L);
  T = checa_valor_input(T);
  SC = checa_valor_input(SC);
  P = checa_valor_input(P);

  const imv = calcula_imv(H, R, L, T, SC, P);

  document.getElementById("imv_resultado").innerHTML = imv;
}

function icvpe() {
  let H = document.getElementById("icvpe_homicidio").value;
  let T = document.getElementById("icvpe_tortura").value;
  let SC = document.getElementById("icvpe_sequestro").value;
  let P = document.getElementById("icvpe_pop").value;

  H = checa_valor_input(H);
  T = checa_valor_input(T);
  SC = checa_valor_input(SC);
  P = checa_valor_input(P);

  const icvpe = calcula_icvpe(H, T, SC, P);

  document.getElementById("icvpe_resultado").innerHTML = icvpe;
}

function icvpa() {

  let R = document.getElementById("icvpa_roubo").value;
  let E = document.getElementById("icvpa_extorcao").value;
  let ES = document.getElementById("icvpa_extorcao_sequestro").value;
  let P = document.getElementById("icvpa_pop").value;

  R = checa_valor_input(R);
  E = checa_valor_input(E);
  ES = checa_valor_input(ES);
  P = checa_valor_input(P);

  const icvpa = calcula_icvpa(R, E, ES, P);

  document.getElementById("icvpa_resultado").innerHTML = icvpa;
}

const pop_rpms_ueops = [
  ["01 RPM", 2416339],
  ["02 RPM", 1995829],
  ["03 RPM", 1040691],
  ["04 RPM", 1641991],
  ["05 RPM", 858614],
  ["06 RPM", 910469],
  ["07 RPM", 1234070],
  ["08 RPM", 740983],
  ["09 RPM", 1156515],
  ["10 RPM", 557248],
  ["11 RPM", 1496931],
  ["12 RPM", 1798638],
  ["13 RPM", 882648],
  ["14 RPM", 695105],
  ["15 RPM", 842719],
  ["16 RPM", 391752],
  ["17 RPM", 1065676],
  ["18 RPM", 1145748],
  ["19 RPM", 450725],
  ["01 BPM", 87081],
  ["02 BPM", 331710],
  ["03 BPM", 163784],
  ["04 BPM", 232657],
  ["05 BPM", 228171],
  ["06 BPM", 360507],
  ["07 BPM", 280591],
  ["08 BPM", 417819],
  ["09 BPM", 256434],
  ["1 CIA PM IND", 146503],
  ["10 BPM", 393697],
  ["10 CIA PM IND", 155914],
  ["11 BPM", 374457],
  ["11 CIA PM IND", 127246],
  ["12 BPM", 282793],
  ["13 BPM", 276526],
  ["13 CIA PM IND", 197432],
  ["14 BPM", 355042],
  ["15 BPM", 340304],
  ["15 CIA PM IND", 89917],
  ["16 BPM", 436875],
  ["16 CIA PM IND", 169089],
  ["17 BPM", 357862],
  ["17 CIA PM IND", 179783],
  ["18 BPM", 405139],
  ["18 CIA PM IND", 75330],
  ["19 BPM", 352021],
  ["19 CIA PM IND", 146972],
  ["2 CIA PM IND", 201248],
  ["20 BPM", 445768],
  ["21 BPM", 275655],
  ["21 CIA PM IND", 148223],
  ["22 BPM", 404539],
  ["23 BPM", 310561],
  ["23 CIA PM IND", 201134],
  ["24 BPM", 323561],
  ["24 CIA PM IND", 109810],
  ["25 BPM", 323479],
  ["26 BPM", 232250],
  ["27 BPM", 391914],
  ["28 BPM", 202274],
  ["29 BPM", 309544],
  ["3 CIA PM IND", 80826],
  ["30 BPM", 169893],
  ["31 BPM", 384373],
  ["32 BPM", 397092],
  ["33 BPM", 144326],
  ["34 BPM", 396566],
  ["35 BPM", 229483],
  ["36 BPM", 164536],
  ["37 BPM", 252440],
  ["38 BPM", 241841],
  ["39 BPM", 244836],
  ["40 BPM", 344828],
  ["41 BPM", 282832],
  ["42 BPM", 186015],
  ["43 BPM", 280571],
  ["44 BPM", 236419],
  ["45 BPM", 189478],
  ["46 BPM", 216944],
  ["47 BPM", 253639],
  ["48 BPM", 275363],
  ["49 BPM", 303749],
  ["50 BPM", 260828],
  ["51 BPM", 273833],
  ["52 BPM", 201132],
  ["53 BPM", 175709],
  ["54 BPM", 225852],
  ["55 BPM", 144172],
  ["56 BPM", 214962],
  ["57 BPM", 224651],
  ["58 BPM", 209960],
  ["59 BPM", 180295],
  ["6 CIA PM IND", 91573],
  ["60 BPM", 171962],
  ["61 BPM", 184587],
  ["62 BPM", 298923],
  ["63 BPM", 207881],
  ["64 BPM", 272840],
  ["65 BPM", 215229],
  ["66 BPM", 284910],
  ["67 BPM", 138133],
  ["68 BPM", 233159],
  ["69 BPM", 154558],
  ["7 CIA PM IND", 204854],
  ["70 BPM", 144469],
  ["8 CIA PM IND", 114450],
  ["9 CIA PM IND", 116103],
];

function devolve_pop(rpm_ueop) {
  let pop = 0;

  // busca a população no array pop_rpms_ueops
  for (let i = 0; i < pop_rpms_ueops.length; i++) {
    if (pop_rpms_ueops[i][0] == rpm_ueop) {
      pop = pop_rpms_ueops[i][1];
      break;
    }
  }


  return pop;
}

function calcula_imv(H, R, L, T, SC, P) {

  let pop = devolve_pop(P);
  H = parseInt(H);
  R = parseInt(R);
  L = parseInt(L);
  T = parseInt(T);
  SC = parseInt(SC);


  if (pop == 0) {
    pop = 100000;
  }

  const imv = ((H + R + L + T + SC) * 100000) / pop;

  return imv.toFixed(2);
}

function calcula_icvpe(H, T, SC, P) {

  let pop = devolve_pop(P);
  H = parseInt(H);
  T = parseInt(T);
  SC = parseInt(SC);


  if (pop == 0) {
    pop = 100000;
  }

  const icvpe = (((H + T + SC) * 100000) / pop).toFixed(2);

  return icvpe;
}

function calcula_icvpa(R, E, ES, P) {

  let pop = devolve_pop(P);
  R = parseInt(R);
  E = parseInt(E);
  ES = parseInt(ES);


  if (pop == 0) {
    pop = 100000;
  }


  const icvpa = (((R + E + ES) * 100000) / pop).toFixed(2);

  return icvpa;
}
