// =============================================================
//  CONFIGURAÇÃO DO CLIENTE
//  Quase tudo o que muda de cliente para cliente está aqui.
//  Cores e fontes: src/styles/global.css
//  Fotos: src/assets/
// =============================================================

export const site = {
  // URL final do site (usado no SEO, sitemap e partilhas)
  url: "https://cafecentral.pt",
  idioma: "pt-PT",

  nome: "Café Central",
  // Tipo para o Google (schema.org): CafeOrCoffeeShop, Restaurant, Bakery,
  // HairSalon, AutoRepair, Dentist, Store, LocalBusiness...
  tipoSchema: "CafeOrCoffeeShop",

  titulo: "Café Central — café e pastelaria na Rua Direita, Viseu",
  descricao:
    "Café e pastelaria de bairro na Rua Direita, em Viseu. Pastéis de nata feitos de manhã, pequenos-almoços e almoços leves. Aberto todos os dias exceto domingo.",

  hero: {
    titulo: "O café da Rua Direita desde 1987.",
    texto:
      "Pastéis de nata acabados de sair do forno às 7h30, torradas de pão de forma caseiro e um galão como deve ser.",
    botaoPrincipal: { texto: "Ver o menu", link: "#menu" },
    botaoSecundario: { texto: "Como chegar", link: "#contactos" },
  },

  sobre: {
    titulo: "Uma casa de bairro",
    paragrafos: [
      "O Café Central abriu em 1987 pela mão do Sr. António e da D. Lurdes. Hoje é a filha, a Marta, que está ao balcão, com as mesmas receitas e o mesmo forno.",
      "Fazemos a pastelaria toda aqui, todos os dias. O que não se vende ao fim da tarde não volta à montra no dia seguinte.",
    ],
  },
} as const;

export const contactos = {
  telefone: "+351 232 000 000",
  telefoneVisivel: "232 000 000",
  // Número para o botão de WhatsApp (só dígitos, com indicativo). Deixa "" para esconder.
  whatsapp: "351910000000",
  mensagemWhatsapp: "Olá! Gostava de fazer uma encomenda.",
  email: "geral@cafecentral.pt",

  morada: {
    rua: "Rua Direita, 42",
    codigoPostal: "3500-000",
    localidade: "Viseu",
    pais: "PT",
  },
  // Coordenadas (Google Maps → clicar com o botão direito no local → copiar)
  geo: { lat: 40.6566, lng: -7.9125 },
  // Google Maps → Partilhar → Incorporar um mapa → copiar só o URL do src="..."
  mapaEmbed:
    "https://www.google.com/maps?q=Rua+Direita+42+Viseu&output=embed",
  mapaLink: "https://maps.google.com/?q=Rua+Direita+42+Viseu",
};

export const redes = {
  instagram: "https://instagram.com/cafecentral",
  facebook: "https://facebook.com/cafecentral",
  // Link do perfil no Google (para os clientes deixarem avaliações)
  google: "",
};

// Horário — 0 = domingo, 1 = segunda ... 6 = sábado
// Cada dia pode ter vários períodos (ex.: fechar ao almoço). Lista vazia = fechado.
export const horario: { dia: number; nome: string; periodos: [string, string][] }[] = [
  { dia: 1, nome: "Segunda", periodos: [["07:30", "19:30"]] },
  { dia: 2, nome: "Terça", periodos: [["07:30", "19:30"]] },
  { dia: 3, nome: "Quarta", periodos: [["07:30", "19:30"]] },
  { dia: 4, nome: "Quinta", periodos: [["07:30", "19:30"]] },
  { dia: 5, nome: "Sexta", periodos: [["07:30", "20:00"]] },
  { dia: 6, nome: "Sábado", periodos: [["08:00", "13:00"]] },
  { dia: 0, nome: "Domingo", periodos: [] },
];
// Fuso horário usado para mostrar "Aberto agora"
export const fusoHorario = "Europe/Lisbon";
// Nota opcional por baixo do horário (feriados, férias...)
export const notaHorario = "Fechado nos feriados nacionais e na primeira quinzena de agosto.";

// Menu / serviços / tabela de preços.
// Para outros negócios: "Cortes", "Serviços", "Revisões"...
export const menu = {
  titulo: "Menu",
  intro: "Preços com IVA incluído. A pastelaria varia conforme o dia — pergunte ao balcão.",
  categorias: [
    {
      nome: "Pastelaria",
      itens: [
        { nome: "Pastel de nata", preco: "1,30 €", descricao: "Sai do forno às 7h30 e às 15h" },
        { nome: "Bola de Berlim", preco: "1,60 €" },
        { nome: "Queque de laranja", preco: "1,40 €" },
        { nome: "Croissant simples", preco: "1,20 €", descricao: "Com fiambre e queijo, 2,40 €" },
      ],
    },
    {
      nome: "Cafetaria",
      itens: [
        { nome: "Café", preco: "0,80 €" },
        { nome: "Galão", preco: "1,40 €" },
        { nome: "Meia de leite", preco: "1,20 €" },
        { nome: "Chá", preco: "1,10 €", descricao: "Camomila, cidreira ou preto" },
      ],
    },
    {
      nome: "Almoço",
      itens: [
        { nome: "Sopa do dia", preco: "2,20 €" },
        { nome: "Tosta mista", preco: "3,20 €", descricao: "Pão de forma caseiro" },
        { nome: "Prato do dia", preco: "8,50 €", descricao: "De segunda a sexta, com bebida e café" },
      ],
    },
  ],
};

// Galeria — os ficheiros ficam em src/assets/galeria/
// Escreve sempre um "alt" que descreva a foto (acessibilidade e SEO).
export const galeria: { ficheiro: string; alt: string }[] = [
  { ficheiro: "galeria-1.jpg", alt: "Montra com pastéis de nata acabados de fazer" },
  { ficheiro: "galeria-2.jpg", alt: "Balcão do café com a máquina de café" },
  { ficheiro: "galeria-3.jpg", alt: "Galão e torrada numa mesa junto à janela" },
  { ficheiro: "galeria-4.jpg", alt: "Esplanada na Rua Direita" },
  { ficheiro: "galeria-5.jpg", alt: "A Marta a preparar a massa folhada" },
  { ficheiro: "galeria-6.jpg", alt: "Sala interior com azulejos antigos" },
];

// Formulário de contacto (Web3Forms — https://web3forms.com, grátis)
// Cria uma chave com o email do cliente e cola-a aqui.
export const formulario = {
  ativo: true,
  chaveWeb3Forms: "COLOCAR-CHAVE-AQUI",
  assunto: "Nova mensagem do site Café Central",
};

// Dados legais (rodapé e política de privacidade)
export const legal = {
  nomeLegal: "Café Central, Lda.",
  nif: "500 000 000",
  // Obrigatório em Portugal para negócios com site
  livroReclamacoes: "https://www.livroreclamacoes.pt/Inicio/",
  dataPolitica: "25 de novembro de 2026",
};

// Navegação do topo
export const navegacao = [
  { texto: "Menu", link: "/#menu" },
  { texto: "Horário", link: "/#horario" },
  { texto: "Galeria", link: "/#galeria" },
  { texto: "Contactos", link: "/#contactos" },
];
