// Calcula se o negócio está aberto agora, no fuso horário do negócio.
// Corre no browser do visitante (o site é estático, por isso não pode ser calculado no build).

export type Dia = { dia: number; nome: string; periodos: [string, string][] };

const paraMinutos = (h: string) => {
  const [hh, mm] = h.split(":").map(Number);
  return hh * 60 + mm;
};

export function agoraNoFuso(fuso: string, data = new Date()) {
  const partes = new Intl.DateTimeFormat("en-GB", {
    timeZone: fuso,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(data);
  const valor = (t: string) => partes.find((p) => p.type === t)?.value ?? "";
  const dias = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return {
    dia: dias.indexOf(valor("weekday")),
    minutos: Number(valor("hour")) * 60 + Number(valor("minute")),
  };
}

export function estadoAtual(horario: Dia[], fuso: string, data = new Date()) {
  const { dia, minutos } = agoraNoFuso(fuso, data);
  const hoje = horario.find((d) => d.dia === dia);

  if (hoje) {
    for (const [abre, fecha] of hoje.periodos) {
      if (minutos >= paraMinutos(abre) && minutos < paraMinutos(fecha)) {
        return { aberto: true, dia, texto: `Aberto agora, fecha às ${fecha}` };
      }
      if (minutos < paraMinutos(abre)) {
        return { aberto: false, dia, texto: `Fechado, abre hoje às ${abre}` };
      }
    }
  }

  // Procura o próximo dia com horário
  for (let i = 1; i <= 7; i++) {
    const proximo = horario.find((d) => d.dia === (dia + i) % 7);
    if (proximo && proximo.periodos.length) {
      const quando = i === 1 ? "amanhã" : proximo.nome.toLowerCase();
      return { aberto: false, dia, texto: `Fechado, abre ${quando} às ${proximo.periodos[0][0]}` };
    }
  }
  return { aberto: false, dia, texto: "Fechado" };
}
