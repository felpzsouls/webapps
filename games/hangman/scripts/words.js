const wordList = [
    {
        word: "guitarra",
        hint: "Um instrumento musical de cordas."
    },
    {
        word: "oxigenio",
        hint: "gas incolor, inodor, essencial para a vida."
    },
    {
        word: "montanha",
        hint: "Uma grande elevancao natural feita na superfice da terra."
    },
    {
        word: "pintar",
        hint: "uma forma de arte usando cores em uma superficie para criar imagens ou expressao."
    },
    {
        word: "astronomia",
        hint: "O estudo cientifico que estuda os corpos celestes."
    },
    {
        word: "futebol",
        hint: "Esporte popular jogado utilizando uma bola."
    },
    {
        word: "chocolate",
        hint: "Doce feito de cacau."
    },
    {
        word: "borboleta",
        hint: "Um inseto de asas coloridas e um longo corpo."
    },
    {
        word: "historia",
        hint: "Estudo de eventos passados e dacivilizacao humana."
    },
    {
        word: "pizza",
        hint: "Um prato saboroso composto por uma base redonda e achatada com coberturas."
    },
    {
        word: "jazz",
        hint: "Gênero musical caracterizado pela improvisação e síncope."
    },
    {
        word: "camera",
        hint: "Um dispositivo usado para capturar e gravar imagens ou vídeos."
    },
    {
        word: "diamante",
        hint: "Uma pedra preciosa conhecida por seu brilho e dureza."
    },
    {
        word: "aventura",
        hint: "Uma experiência emocionante ou ousada."
    },
    {
        word: "ciencia",
        hint: "O estudo sistemático da estrutura e comportamento do mundo físico e natural."
    },
    {
        word: "bicicleta",
        hint: "Um veículo movido a energia humana com duas rodas."
    },
    {
        word: "cafe",
        hint: "Uma popular bebida com cafeína feita de grãos de café torrados."
    },
    {
        word: "dança",
        hint: "Um movimento rítmico do corpo frequentemente executado com música."
    },
    {
        word: "galaxia",
        hint: "Um vasto sistema de estrelas, gás e poeira mantidos juntos pela gravidade."
    },
    {
        word: "orquestra",
        hint: "Um grande conjunto de músicos tocando vários instrumentos."
    },
    {
        word: "vulcao",
        hint: "Uma montanha ou colina com uma abertura através da qual lava, fragmentos de rocha, vapor quente e gás são ejetados."
    },
    {
        word: "novela",
        hint: "Uma longa obra de ficção, normalmente com enredo e personagens complexos."
    },
    {
        word: "escultura",
        hint: "Uma forma de arte tridimensional criada pela modelagem ou combinação de materiais."
    },
    {
        word: "sinfonia",
        hint: "Uma longa composição musical para uma orquestra completa, normalmente em múltiplos movimentos."
    },
    {
        word: "arquitetura",
        hint: "A arte e a ciência de projetar e construir edifícios."
    },
    {
        word: "bale",
        hint: "Uma forma de dança clássica caracterizada por movimentos precisos e graciosos."
    },
    {
        word: "astronalta",
        hint: "Uma pessoa treinada para viajar e trabalhar no espaço."
    },
    {
        word: "cachoeira",
        hint: "Uma cascata de água caindo de uma altura."
    },
    {
        word: "tecnologia",
        hint: "A aplicação do conhecimento científico para fins práticos."
    },
    {
        word: "universo",
        hint: "Toda a matéria, espaço e tempo existentes como um todo."
    },
    {
        word: "piano",
        hint: "Um instrumento musical tocado pressionando teclas que fazem com que os martelos batam nas cordas."
    },
    {
        word: "ferias",
        hint: "Um período de tempo dedicado ao prazer, descanso ou relaxamento."
    },
    {
        word: "teatro",
        hint: "Um edifício ou área externa onde são encenadas peças de teatro, filmes ou outras apresentações."
    },
    {
        word: "telefone",
        hint: "Um dispositivo usado para transmitir som a longas distâncias."
    },
    {
        word: "idioma",
        hint: "Um sistema de comunicação que consiste em palavras, gestos e sintaxe."
    },
    {
        word: "deserto",
        hint: "Uma terra estéril ou árida com pouca ou nenhuma precipitação."
    },
    {
        word: "fantasia",
        hint: "Um gênero de ficção imaginativa envolvendo elementos mágicos e sobrenaturais."
    },
    {
        word: "telescopio",
        hint: "Um instrumento óptico usado para visualizar objetos distantes no espaço."
    },
    {
        word: "briza",
        hint: "Um vento suave."
    },
    {
        word: "oasis",
        hint: "Um local fértil no deserto onde se encontra água."
    },
    {
        word: "fotografia",
        hint: "A arte, processo ou prática de criar imagens através da gravação de luz ou outra radiação eletromagnética."
    },
    {
        word: "safari",
        hint: "Uma expedição ou viagem, normalmente para observar a vida selvagem no seu habitat natural."
    },
    {
        word: "planeta",
        hint: "Um corpo celeste que orbita uma estrela e não produz luz própria."
    },
    {
        word: "rio",
        hint: "Um grande fluxo natural de água fluindo em um canal para o mar, um lago ou outro riacho."
    },
    {
        word: "tropical",
        hint: "Relativo ou situado na região entre o Trópico de Câncer e o Trópico de Capricórnio."
    },
    {
        word: "misterioso",
        hint: "Difícil ou impossível de entender, explicar ou identificar."
    },
    {
        word: "enigma",
        hint: "Algo misterioso, intrigante ou difícil de entender."
    },
    {
        word: "paradoxo",
        hint: "Uma afirmação ou situação que se contradiz ou desafia a intuição."
    },
    {
        word: "sussurrar",
        hint: "Falar muito baixo ou baixo, muitas vezes de maneira secreta."
    },
    {
        word: "sombra",
        hint: "Uma área ou forma escura produzida por um objeto bloqueando a luz."
    },
    {
        word: "segredo",
        hint: "Algo mantido oculto ou desconhecido para os outros."
    },
    {
        word: "curiositdade",
        hint: "Uma forte vontade de saber algo."
    },
    {
        word: "imprevisível",
        hint: "Não pode ser previsto ou conhecido de antemão; incerto."
    },
    {
        word: "ofuscar",
        hint: "Para confundir ou desnortear alguém; para tornar algo obscuro ou difícil de entender."
    },
    {
        word: "revelar",
        hint: "Dar a conhecer ou revelar algo anteriormente secreto ou desconhecido."
    },
    {
        word: "ilusao",
        hint: "Uma falsa percepção ou crença; uma aparência ou impressão enganosa."
    },
    {
        word: "luar",
        hint: "A luz da lua."
    },
    {
        word: "vibrante",
        hint: "Cheio de energia, brilho e vida."
    },
    {
        word: "nostalgia",
        hint: "Um desejo sentimental ou uma afeição melancólica pelo passado."
    },
    {
        word: "brilhante",
        hint: "Excepcionalmente inteligente, talentoso ou impressionante."
    },
];