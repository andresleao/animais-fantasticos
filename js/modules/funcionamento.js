export default function initFuncionamento() {
  document.getElementById("lojaAberta").style.display = 'none';
  document.getElementById("lojaFechada").style.display = 'none';

  const funcionamento = document.querySelector('[data-semana]');
  // Array["1","2","3","4","5"] - seg a sex
  const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
  // Array[8,18]
  const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();

  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;

  if (horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1] && semanaAberto) {
    funcionamento.classList.add('aberto');
    document.getElementById("lojaAberta").style.display = 'inline-block';
  } else {
    document.getElementById("lojaFechada").style.display = 'inline-block';
  }
}