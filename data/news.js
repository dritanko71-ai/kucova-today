// ===== Video shembull (burim publik) =====
const SAMPLE_VIDEOS = [
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4'
];

const VIDEO_POSTERS = [
    'https://picsum.photos/seed/video-poster-1/1280/720',
    'https://picsum.photos/seed/video-poster-2/1280/720',
    'https://picsum.photos/seed/video-poster-3/1280/720',
    'https://picsum.photos/seed/video-poster-4/1280/720'
];

// ===== Artikujt fillestarë =====
const seedArticles = [
    {
        id: 1,
        pos: 'hero-main',
        cat: 'humbjepeshe',
        category: 'Humbje Peshe',
        title: 'Humbja e shëndetshme e peshës: 7 hapa që vërtet funksionojnë',
        excerpt: 'Pa dieta ekstreme dhe pa uri. Zbulo si të humbësh peshë në mënyrë të qëndrueshme me ndryshime të vogla të përditshme.',
        seed: 'humbjepeshe-7hapa',
        date: 'Sot',
        time: '07:30',
        video: SAMPLE_VIDEOS[0],
        videoPoster: VIDEO_POSTERS[0]
    },
    {
        id: 2,
        pos: 'hero-side',
        cat: 'ushqim',
        category: 'Ushqim i Shëndetshëm',
        title: 'Ushqimet me proteina që duhet të kesh në frigorifer',
        seed: 'ushqim-proteina',
        date: 'Sot',
        time: '08:15',
        video: SAMPLE_VIDEOS[4],
        videoPoster: VIDEO_POSTERS[1]
    },
    {
        id: 3,
        pos: 'hero-side',
        cat: 'receta',
        category: 'Receta',
        title: 'Sallatë e shëndetshme me quinoa dhe perime sezonale',
        image: 'https://loremflickr.com/640/400/quinoa,salad',
        ingredients: [
            '1 filxhan quinoa',
            '2 domate të pjekura',
            '1 kastravec',
            '½ qepë e kuqe',
            '1 spec të verdhë',
            '100g djathë feta',
            '2 lugë vaj ulliri',
            '1 lugë lëng limoni',
            'kripë dhe piper'
        ],
        seed: 'receta-quinoa',
        date: 'Sot',
        time: '09:00',
        video: SAMPLE_VIDEOS[5],
        videoPoster: VIDEO_POSTERS[2]
    },
    {
        id: 4,
        cat: 'latest',
        category: 'Më e reja',
        title: 'Mëngjesi ideal për të nisur ditën me energji',
        excerpt: 'Ushqimi i parë i ditës vendos tonin për gjithë ditën. Ja çfarë rekomandojnë nutricionistët për një mëngjes të ekuilibruar.',
        seed: 'mengjesi-energji',
        date: 'Sot',
        time: '10:24'
    },
    {
        id: 5,
        cat: 'latest',
        category: 'Më e reja',
        title: 'Hidratimi: sa ujë duhet të pish çdo ditë?',
        excerpt: 'Uji është jetik për trupin, por sa është shuma e duhur ditore? Zbulo shenjat që tregojnë se duhet të pish më shumë.',
        seed: 'hidratimi-uje',
        date: 'Sot',
        time: '09:05',
        video: SAMPLE_VIDEOS[2],
        videoPoster: VIDEO_POSTERS[3]
    },
    {
        id: 6,
        cat: 'latest',
        category: 'Më e reja',
        title: 'Vrapimi i mëngjesit: përfitimet për trupin dhe mendjen',
        excerpt: 'Një vrapim 20-minutësh në mëngjes përmirëson qarkullimin, rrit energjinë dhe ndihmon në djegien e kalorive.',
        seed: 'vrapim-mengjes',
        date: 'Sot',
        time: '08:40',
        video: SAMPLE_VIDEOS[3],
        videoPoster: VIDEO_POSTERS[0]
    },
    {
        id: 7,
        cat: 'latest',
        category: 'Më e reja',
        title: 'Sekreti i darkës së lehtë: çfarë të hash para gjumit',
        excerpt: 'Ushqimi i natës ndikon në cilësinë e gjumit. Mëso cilat ushqime të zgjedhësh për një gjumë të thellë dhe rikthyes.',
        seed: 'darka-e-lehte',
        date: 'Dje',
        time: '18:15',
        video: SAMPLE_VIDEOS[6],
        videoPoster: VIDEO_POSTERS[1]
    },
    {
        id: 8,
        cat: 'humbjepeshe',
        category: 'Humbje Peshe',
        title: 'Deficiti kalorik: si ta llogaritësh pa u bërë obsesiv',
        excerpt: 'Baza e humbjes së peshës është më e thjeshtë seç mendon. Një udhëzues praktik për të krijuar deficit pa anashkaluar ushqimin.',
        seed: 'deficiti-kalorik',
        date: 'Dje',
        time: '16:40'
    },
    {
        id: 9,
        cat: 'humbjepeshe',
        category: 'Humbje Peshe',
        title: 'Pse peshorja mashtron: yndyra kundrejt muskujve',
        excerpt: 'Pesha në peshore nuk tregon gjithçka. Zbulo pse muskujt peshojnë më shumë se yndyra dhe si ta ndjekësh progresin real.',
        seed: 'peshorja-mashtron',
        date: 'Dje',
        time: '14:10',
        video: SAMPLE_VIDEOS[1],
        videoPoster: VIDEO_POSTERS[2]
    },
    {
        id: 10,
        cat: 'humbjepeshe',
        category: 'Humbje Peshe',
        title: '5 gabime që pengojnë humbjen e peshës',
        excerpt: 'Edhe me dietë dhe sport, pesha mund të ngecë. Identifiko gabimet e zakonshme që po e sabotojnë progresin tënd.',
        seed: 'gabimet-pesha',
        date: 'Dje',
        time: '11:55'
    },
    {
        id: 11,
        cat: 'ushqim',
        category: 'Ushqim i Shëndetshëm',
        title: 'Fibra: superushqimi që po e anashkalojmë',
        excerpt: 'Fibrat ndihmojnë tretjen, ngopin dhe stabilizojnë sheqerin në gjak. Zbulo si t\'i shtosh në dietën e përditshme.',
        seed: 'fibrat-ushtrime',
        date: 'Dje',
        time: '19:20'
    },
    {
        id: 12,
        cat: 'ushqim',
        category: 'Ushqim i Shëndetshëm',
        title: 'Superushqimet e vitit: çfarë duhet të shtosh në tryezë',
        excerpt: 'Nga avokado te boronicat, zbulo ushqimet e pasura me antioksidantë që mbështesin shëndetin dhe energjinë.',
        seed: 'superushqime',
        date: 'Dje',
        time: '13:30',
        video: SAMPLE_VIDEOS[7],
        videoPoster: VIDEO_POSTERS[3]
    },
    {
        id: 13,
        cat: 'ushqim',
        category: 'Ushqim i Shëndetshëm',
        title: 'Yndyrnat e mira vs të këqijat: mitet e shkatërruara',
        excerpt: 'Jo të gjitha yndyrnat janë armiq. Mëso të dallosh yndyrnat e shëndetshme nga ato të përpunuara.',
        seed: 'yndyrnat',
        date: 'Dje',
        time: '10:00'
    },
    {
        id: 14,
        cat: 'receta',
        category: 'Receta',
        title: 'Receta: Supë krem me kungull dhe xhenxhefil',
        image: 'https://loremflickr.com/640/400/pumpkin,soup',
        ingredients: [
            '1 kungull i mesëm (rreth 1 kg)',
            '1 qepë',
            '2 thelpinj hudhër',
            '1 copë xhenxhefil (2 cm)',
            '1 lugë vaj ulliri',
            '1 litër lëng perimesh',
            '100ml qumësht kokosi',
            'kripë dhe piper'
        ],
        excerpt: 'Një supë e ngrohtë, e lehtë dhe e plotë me vitamina. Perfekte për ditët e ftohta, gati në vetëm 30 minuta.',
        seed: 'receta-supe-kungull',
        date: 'Dje',
        time: '12:45'
    },
    {
        id: 15,
        cat: 'receta',
        category: 'Receta',
        title: 'Receta: Tortë me tërshërë dhe banane pa sheqer',
        image: 'https://loremflickr.com/640/400/banana,cake,oats',
        ingredients: [
            '2 banane të pjekura',
            '150g tërshërë',
            '2 vezë',
            '2 lugë mjaltë',
            '1 lugë çaji pluhur pjekjeje',
            '1 lugë çaji kanellë',
            '1 lugë ekstrakt vanilje',
            '3 lugë gjalpë kokosi'
        ],
        excerpt: 'Ëmbëlsirë e shëndetshme që plotëson dëshirën për diçka të ëmbël pa faj. Vetëm tre përbërës dhe gati në 10 minuta.',
        seed: 'receta-torte-tersthere',
        date: 'Dje',
        time: '09:50',
        video: SAMPLE_VIDEOS[0],
        videoPoster: VIDEO_POSTERS[0]
    },
    {
        id: 16,
        cat: 'receta',
        category: 'Receta',
        title: 'Receta: Pula me limon dhe hudhër në furrë',
        image: 'https://loremflickr.com/640/400/chicken,lemon,roast',
        ingredients: [
            '4 copë gjoks pule',
            '1 limon organik',
            '4 thelpinj hudhër',
            '2 lugë vaj ulliri',
            '1 lugë rozmarinë',
            '1 lugë çaji kripë deti',
            '½ lugë çaji piper i zi',
            '2 speca të ëmbël'
        ],
        excerpt: 'Një pjatë kryesore e shëndetshme me proteina të larta, aromatike dhe e thjeshtë për t\'u përgatitur.',
        seed: 'receta-pula',
        date: 'Dje',
        time: '08:20'
    },
    {
        id: 17,
        cat: 'ushtrime',
        category: 'Ushtrime',
        title: 'Ushtrime në shtëpi pa pajisje: rutina 15-minutëshe',
        excerpt: 'Nuk ke nevojë për palestër. Një rutinë e thjeshtë me ushtrime me peshë trupore që mund ta bësh kudo.',
        seed: 'ushtrime-ne-shtepi',
        date: 'Dje',
        time: '15:05',
        video: SAMPLE_VIDEOS[5],
        videoPoster: VIDEO_POSTERS[1]
    },
    {
        id: 18,
        cat: 'ushtrime',
        category: 'Ushtrime',
        title: 'Ecja: ushtrimi më i nënvlerësuar për shëndetin',
        excerpt: '30 minuta ecje në ditë ulin stresin, përmirësojnë zemrën dhe ndihmojnë në menaxhimin e peshës.',
        seed: 'ecja-shendeti',
        date: 'Dje',
        time: '13:15'
    },
    {
        id: 19,
        cat: 'ushtrime',
        category: 'Ushtrime',
        title: 'Stretching: pse duhet ta bësh çdo mëngjes',
        excerpt: 'Shtrirja e mëngjesit zgjon muskujt, përmirëson fleksibilitetin dhe parandalon lëndimet gjatë ditës.',
        seed: 'stretching-mengjes',
        date: 'Dje',
        time: '11:10'
    },
    {
        id: 20,
        cat: 'jete',
        category: 'Jete e Shëndetshme',
        title: 'Gjumi 8-orësh: ritualet për një natë rikthyes',
        excerpt: 'Cilësia e gjumit ndikon në peshë, humor dhe energji. Zbulo ritualet që të ndihmojnë të flesh më mirë.',
        seed: 'gjumi-rikthyes',
        date: 'Dje',
        time: '17:00'
    },
    {
        id: 21,
        cat: 'jete',
        category: 'Jete e Shëndetshme',
        title: 'Menaxhimi i stresit: teknika që funksionojnë',
        excerpt: 'Stresi kronik saboton shëndetin dhe peshën. Mëso teknika praktike për t\'u qetësuar dhe rikthyer fokusin.',
        seed: 'stresi-teknika',
        date: 'Dje',
        time: '20:30',
        video: SAMPLE_VIDEOS[3],
        videoPoster: VIDEO_POSTERS[2]
    },
    {
        id: 22,
        cat: 'jete',
        category: 'Jete e Shëndetshme',
        title: 'Rutina e mëngjesit: si ta nisësh ditën produktiv',
        excerpt: 'Një mëngjes i strukturuar përmirëson produktivitetin dhe gjendjen shpirtërore gjatë gjithë ditës.',
        seed: 'rutina-mengjesit',
        date: 'Dje',
        time: '12:00'
    },
    {
        id: 23,
        cat: 'shendet',
        category: 'Shëndet',
        title: 'Uji dhe hidratimi: çfarë ndodh kur pi 2 litra në ditë',
        excerpt: 'Hidratimi i duhur përmirëson tretjen, lëkurën dhe energjinë. Zbulo ndryshimet që ndjen në trupin tënd.',
        seed: 'hidratimi-2litra',
        date: 'Dje',
        time: '10:45'
    },
    {
        id: 24,
        cat: 'shendet',
        category: 'Shëndet',
        title: 'Vitaminat që ju mungojnë në dietën mesdhetare',
        excerpt: 'Edhe me dietën më të mirë, mund të kesh mangësi. Mëso cilat vitamina janë më të zakonshme të mungojnë.',
        seed: 'vitaminat-mangesi',
        date: 'Dje',
        time: '09:30'
    },
    {
        id: 25,
        cat: 'shendet',
        category: 'Shëndet',
        title: 'Sheqeri: si ta njohësh dhe ta reduktosh në dietë',
        excerpt: 'Sheqeri i fshehur gjendet kudo. Mëso të lexosh etiketat dhe ta reduktosh pa hequr dorë nga shija.',
        seed: 'sheqeri-dieta',
        date: 'Dje',
        time: '08:00'
    },
    {
        id: 26,
        cat: 'latest',
        category: 'Më e reja',
        title: 'Receta e shpejtë: omëletë me perime për 5 minuta',
        excerpt: 'Kur nuk ke kohë, kjo omëletë proteinike të shpëton. E shijshme, e plotë dhe gati sa bën një kafe.',
        seed: 'latest-receta-omelete',
        date: 'Sot',
        time: '09:00',
        live: true
    },
    {
        id: 27,
        cat: 'latest',
        category: 'Më e reja',
        title: 'Këshillë: bëj 10 minuta ecje pas drekës',
        excerpt: 'Një shëtitje e shkurtër pas vaktit ndihmon tretjen dhe stabilizon nivelin e sheqerit në gjak.',
        seed: 'latest-ecje-dreka',
        date: 'Sot',
        time: '11:30',
        live: true
    },
    {
        id: 28,
        cat: 'latest',
        category: 'Më e reja',
        title: 'Miti i ditës: të hahet pas orës 20:00 shton peshë?',
        excerpt: 'E vërteta është më e nuancuar seç duket. Zbulo çfarë thonë shkencëtarët për vaktin e natës.',
        seed: 'latest-miti-nata',
        date: 'Sot',
        time: '13:45',
        live: true
    }
];

// ===== Gjenerator i artikujve në kohë reale (simuluar) =====
const templates = [
    { cat: 'humbjepeshe', category: 'Humbje Peshe', title: (p) => `Humbje peshe e qëndrueshme: ${p.focus} në fokus sot`, excerpt: (p) => `Ekspertët e të ushqyerit rekomandojnë një qasje të balancuar. Detajet e plota brenda artikullit.` },
    { cat: 'humbjepeshe', category: 'Humbje Peshe', title: (p) => `Rutina ${p.routine} dhe efekti në humbjen e peshës`, excerpt: (p) => `Aktiviteti fizik i rregullt kombinon më së miri me një dietë të ekuilibruar.` },
    { cat: 'ushqim', category: 'Ushqim i Shëndetshëm', title: (p) => `${p.food}: një superushqim që duhet ta provosh`, excerpt: (p) => `I pasur me vitamina dhe antioksidantë, ky ushqim mbështet shëndetin e përditshëm.` },
    { cat: 'ushqim', category: 'Ushqim i Shëndetshëm', title: (p) => `Ushqimet që ndihmojnë ${p.goal} në mënyrë natyrale`, excerpt: (p) => `Një listë praktike për ta shtuar në shportën jeshile javore.` },
    { cat: 'receta', category: 'Receta', title: (p) => `Receta e sotme: ${p.dish} në vetëm 20 minuta`, excerpt: (p) => `E shpejtë, e shëndetshme dhe me përbërës që ke në kuzhinë.` },
    { cat: 'receta', category: 'Receta', title: (p) => `Si të përgatisësh ${p.dish} pa sakrifikuar shijen`, excerpt: (p) => `Një version më i lehtë i një pjate klasike, me të njëjtin shije të mrekullueshme.` },
    { cat: 'ushtrime', category: 'Ushtrime', title: (p) => `${p.exercise}: ushtrimi që aktivizon gjithë trupin`, excerpt: (p) => `Përfshi në rutinën tënde javore dhe ndje diferencën në energji dhe forcë.` },
    { cat: 'ushtrime', category: 'Ushtrime', title: (p) => `Sesioni i shkurtër ${p.routine}, pse duhet ta provosh`, excerpt: (p) => `Edhe 15 minuta stërvitje e fokusuar japin rezultate të dukshme me kalimin e kohës.` },
    { cat: 'jete', category: 'Jete e Shëndetshme', title: (p) => `Jeta e shëndetshme: ${p.habit} që ndryshon gjithçka`, excerpt: (p) => `Ndryshimet e vogla të përditshme kanë ndikim të madh në mirëqenien tënde.` },
    { cat: 'jete', category: 'Jete e Shëndetshme', title: (p) => `${p.routine} për mëngjes: sekreti i një dite të mirë`, excerpt: (p) => `Fillo ditën me hapin e duhur dhe vëre ndryshimin në produktivitet dhe humor.` },
    { cat: 'shendet', category: 'Shëndet', title: (p) => `Çfarë thonë mjekët për ${p.goal}: mitet dhe faktet`, excerpt: (p) => `Zbërthen mitet e zakonshme dhe merr informacion të bazuar në shkencë.` },
    { cat: 'shendet', category: 'Shëndet', title: (p) => `Shenjat që trupi yt ka nevojë për ${p.focus}`, excerpt: (p) => `Mëso t\'i dëgjosh sinjalet që të dërgon trupi dhe të veprosh në kohë.` }
];

const categories = ['Humbje Peshe', 'Ushqim i Shëndetshëm', 'Receta', 'Ushtrime', 'Jete e Shëndetshme', 'Shëndet'];
const foods = ['avokado', 'boronicat', 'kungulli', 'spinaci', 'thjerrëzat', 'quinoa', 'kale', 'salmoni'];
const dishes = ['sallatë perimesh', 'supë krem', 'tavë perimesh', 'petulla tërshëre', 'smoothie jeshil', 'tuna në gril'];

// ===== Detaje për çdo pjatë: përbërës + foto tematike =====
const RECIPE_DETAILS = {
    'sallatë perimesh': {
        image: 'https://loremflickr.com/640/400/vegetable,salad',
        ingredients: [
            '2 domate', '1 kastravec', '½ qepë e kuqe', '1 spec i ëmbël',
            '100g ullinj të zinj', '100g djathë feta', '2 lugë vaj ulliri',
            '1 lugë uthull balsamike', 'kripë dhe piper'
        ]
    },
    'supë krem': {
        image: 'https://loremflickr.com/640/400/cream,soup',
        ingredients: [
            '2 kunguj të vegjël', '1 qepë', '2 thelpinj hudhër',
            '1 patate', '1 litër lëng perimesh', '3 lugë vaj ulliri',
            'kripë dhe piper', 'fara kungulli për garniturë'
        ]
    },
    'tavë perimesh': {
        image: 'https://loremflickr.com/640/400/vegetable,roast,oven',
        ingredients: [
            '2 kunguj', '2 patate', '1 patllixhan', '2 domate',
            '1 spec i kuq', '2 thelpinj hudhër', '3 lugë vaj ulliri',
            'trumzë, rozmarinë, kripë dhe piper'
        ]
    },
    'petulla tërshëre': {
        image: 'https://loremflickr.com/640/400/oatmeal,pancakes',
        ingredients: [
            '2 banane të pjekura', '150g tërshërë', '2 vezë',
            '1 lugë mjaltë', '1 lugë çaji kanellë', '1 lugë çaji pluhur pjekjeje',
            'fruta të freskëta për sipër'
        ]
    },
    'smoothie jeshil': {
        image: 'https://loremflickr.com/640/400/green,smoothie',
        ingredients: [
            '1 banane', '1 grusht spinaq', '½ avokado',
            '1 kivi', '250ml qumësht bajamesh', '1 lugë çaji fara chia',
            '1 lugë mjaltë', 'akull sipas dëshirës'
        ]
    },
    'tuna në gril': {
        image: 'https://loremflickr.com/640/400/tuna,grill,fish',
        ingredients: [
            '2 bife tuna të freskët', '2 lugë vaj ulliri',
            '1 limon', '2 thelpinj hudhër', '1 lugë rozmarinë',
            'kripë dhe piper', 'sallatë jeshile për shoqërim'
        ]
    }
};
const exercises = ['squat', 'plank', 'push-up', 'lunges', 'burpees', 'deadlift'];
const routines = ['15-minutëshe', 'mëngjesore', 'mbrëmëse', 'pa pajisje', 'me pesha trupore'];
const goals = ['stabilizojë peshën', 'rrisë energjinë', 'përmirësojë tretjen', 'ulë stresin'];
const habits = ['pij më shumë ujë', 'fle 8 orë', 'bëj një shëtitje ditore', 'ha vakte të rregullta', 'medito 5 minuta'];
const focuses = ['më shumë fibra', 'më shumë vitamina', 'pushim të duhur', 'aktivitet fizik'];

function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function newId(articles) {
    return articles.reduce((m, a) => Math.max(m, a.id), 0) + 1;
}

function nowTime() {
    const d = new Date();
    return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
}

function generateArticle(articles) {
    const t = pick(templates);
    const p = {
        food: pick(foods),
        dish: pick(dishes),
        exercise: pick(exercises),
        routine: pick(routines),
        goal: pick(goals),
        habit: pick(habits),
        focus: pick(focuses)
    };
    const hasVideo = Math.random() < 0.4;
    const isRecipe = t.cat === 'receta';
    const recipe = isRecipe ? (RECIPE_DETAILS[p.dish] || null) : null;
    return {
        id: newId(articles),
        cat: t.cat,
        category: t.category,
        title: t.title(p),
        excerpt: t.excerpt(p),
        seed: `live-${Date.now()}-${Math.floor(Math.random() * 9999)}`,
        date: 'Sot',
        time: nowTime(),
        live: true,
        ...(recipe ? { image: recipe.image, ingredients: recipe.ingredients } : {}),
        ...(hasVideo ? { video: pick(SAMPLE_VIDEOS), videoPoster: pick(VIDEO_POSTERS) } : {})
    };
}

// ===== Më të rejat (azhornohen çdo 5 minuta) =====
const latestTitles = (p) => [
    `Këshillë e shpejtë: ${p.habit} sot`,
    `Receta e shpejtë: ${p.dish} me pak kalori`,
    `Flash shëndeti: pse ${p.food} duhet të jetë në dietën tënde`,
    `Në fokus: ${p.goal} në mënyrë natyrale`,
    `E reja e ditës: ushtrimi ${p.exercise} që po bën xhiron`,
    `Përditësim: shenjat që tregojnë se trupi ka nevojë për ${p.focus}`
];

const latestExcerpts = (p) => [
    `Një hap i vogël sot, një ndryshim i madh nesër. JetoBukur të sjell këshillën e ditës.`,
    `Praktiko këtë sugjerim dhe vëre ndryshimin në mirëqenien tënde të përditshme.`,
    `Ekspertët e të ushqyerit e konfirmojnë: kjo zgjedhje e vogël ka ndikim të madh.`,
    `Qëndro i informuar me më të fundit nga bota e shëndetit dhe jetës së shëndetshme.`,
    `Një përkujtesë e shëndetshme për t\'u kujtuar të kujdesesh për veten çdo ditë.`
];

function generateLatestArticle(articles) {
    const p = {
        food: pick(foods),
        dish: pick(dishes),
        exercise: pick(exercises),
        habit: pick(habits),
        goal: pick(goals),
        focus: pick(focuses)
    };
    const recipe = RECIPE_DETAILS[p.dish] || null;
    return {
        id: newId(articles),
        cat: 'latest',
        category: 'Më e reja',
        title: pick(latestTitles(p)),
        excerpt: pick(latestExcerpts(p)),
        seed: `latest-${Date.now()}-${Math.floor(Math.random() * 9999)}`,
        date: 'Sot',
        time: nowTime(),
        live: true,
        ...(recipe ? { image: recipe.image, ingredients: recipe.ingredients } : {})
    };
}

module.exports = { seedArticles, SAMPLE_VIDEOS, VIDEO_POSTERS, generateArticle, generateLatestArticle };
