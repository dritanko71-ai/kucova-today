// ===== Artikujt fillestarë =====
const seedArticles = [
    {
        id: 1,
        pos: 'hero-main',
        cat: 'humbjepeshe',
        category: 'Humbje Peshe',
        title: 'Humbja e shëndetshme e peshës: 7 hapa që vërtet funksionojnë',
        excerpt: 'Pa dieta ekstreme dhe pa uri. Zbulo si të humbësh peshë në mënyrë të qëndrueshme me ndryshime të vogla të përditshme.',
        body: [
            'Humbja e peshës nuk duhet të jetë një mundim. Kur e ndërton në zakone të vogla e të qëndrueshme, rezultatet vijnë pa sakrifikuar shëndetin apo dëshirat. Këtu janë shtatë hapat që funksionojnë vërtet.',
            '### 1. Vendos objektiva realistë',
            'Në vend që të synosh 10 kilogramë në muaj, syno 0.5–1 kg në javë. Objektivat e arsyeshme mbajnë motivimin lart dhe e mbrojnë organizmin nga lodhja dhe mangësitë ushqyese.',
            '### 2. Fillo me mëngjes të pasur me proteina',
            'Një mëngjes me vezë, tërshërë ose kos grek të ngop deri në drekë dhe parandalon ngrënien e tepërt. Proteinat në mëngjes reduktojnë dëshirat për ushqime të ëmbla gjatë ditës.',
            '### 3. Pi ujë përpara ngrënies',
            'Një gotë ujë 30 minuta para çdo vakti të ngop dhe zvogëlon sasinë e ushqimit që konsumon. Dehidratimi ngatërrohet shpesh me urinë, prandaj mbaj një shishe uji pranë.',
            '### 4. Shto fibra në çdo vakt',
            'Perimet, frutat, bishtajoret dhe drithërat e plota ngopin për shumë orë. Fibrat stabilizojnë sheqerin në gjak dhe përmirësojnë tretjen, duke të ndihmuar të hash më pak pa uri.',
            '### 5. Lëviz çdo ditë, edhe pak',
            'Ecja 30 minuta, shkallët në vend të ashensorit dhe një stërvitje e shkurtër në shtëpi mjaftojnë. Konsistenca është më e rëndësishme se intensiteti.',
            '### 6. Fle të paktën 7–8 orë',
            'Gjumi i pamjaftueshëm rrit hormonin e urisë (grelin) dhe ul hormonin e ngopjes (leptin). Pa gjumë të mirë, humbja e peshës bëhet dukshëm më e vështirë.',
            '### 7. Jini i durueshëm me veten',
            'Ditët e dobëta janë normale. Një vakt më i rëndë nuk e shkatërron progresin — e shkatërron vetëm heqja dorë. Kthehu te zakonet e mira në vaktin tjetër dhe vazhdo.'
        ],
        seed: 'humbjepeshe-7hapa',
        date: 'Sot',
        time: '07:30'
    },
    {
        id: 2,
        pos: 'hero-side',
        cat: 'ushqim',
        category: 'Ushqim i Shëndetshëm',
        title: 'Perimet e freskëta që duhet të kesh gjithmonë në frigorifer',
        image: 'https://loremflickr.com/640/400/tomato,cucumber,pepper',
        excerpt: 'Mbajtja e perimeve në frigorifer i mban ato të freskëta, krokante dhe plot vitamina shumë më gjatë. Zbulo cilat perime përfitojnë më shumë nga i ftohti dhe pse duhet t\'i ruash gjithmonë aty.',
        body: [
            'Frigoriferi ngadalëson procesin e kalbëzimit. Temperaturat e ulëta ngadalësojnë enzimat dhe mikroorganizmat që prishin perimet, duke u mbajtur ato të freskëta deri në dy javë më gjatë se temperatura e dhomës.',
            'Perimet me gjethe, si spinaqi, maruleja, lakra dhe zarzavatet, humbasin ujin shpejt. Të ruajtura në frigorifer mbeten krokante dhe ruajnë më shumë vitaminë C dhe folate, që prishen lehtë nga nxehtësia dhe ajri.',
            'Bishtajoret dhe perimet e tjera të freskëta, si brokoli, karfolli, karotat dhe specat, përfitojnë gjithashtu. Ftohtësia ruan ngjyrën, aromën dhe vetitë antioksiduese të tyre, duke i mbajtur ushqyese për ditë të tëra.',
            'Përveç freskisë, mbajtja e perimeve në frigorifer ndihmon në reduktimin e mbetjeve ushqimore. Perimet që qëndrojnë më gjatë nënkuptojnë më pak shpenzime dhe një dietë më të pasur me fibra, vitamina dhe minerale thelbësore për trupin.'
        ],
        seed: 'perimet-frigorifer',
        date: 'Sot',
        time: '08:15'
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
        steps: [
            'Shpëlajeni quinoan me ujë të ftohtë dhe zieni në 2 filxhanë ujë me pak kripë për rreth 15 minuta, derisa të thithet lëngu.',
            'Lëreni quinoan të ftohet në temperaturë dhome.',
            'Prisni domatet, kastravecin, qepën dhe specin në copa të vogla.',
            'Përzieni perimet me quinoan e ftohur dhe djathin feta të thërrmuar.',
            'Përgatisni salcën duke përzier vajin e ullirit, lëngun e limonit, kripën dhe piperin.',
            'Hidheni salcën mbi sallatën, përzieni butësisht dhe shërbejeni të freskët.'
        ],
        seed: 'receta-quinoa',
        date: 'Sot',
        time: '09:00'
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
        time: '09:05'
    },
    {
        id: 6,
        cat: 'latest',
        category: 'Më e reja',
        title: 'Vrapimi i mëngjesit: përfitimet për trupin dhe mendjen',
        excerpt: 'Një vrapim 20-minutësh në mëngjes përmirëson qarkullimin, rrit energjinë dhe ndihmon në djegien e kalorive.',
        seed: 'vrapim-mengjes',
        date: 'Sot',
        time: '08:40'
    },
    {
        id: 7,
        cat: 'latest',
        category: 'Më e reja',
        title: 'Sekreti i darkës së lehtë: çfarë të hash para gjumit',
        excerpt: 'Ushqimi i natës ndikon në cilësinë e gjumit. Mëso cilat ushqime të zgjedhësh për një gjumë të thellë dhe rikthyes.',
        seed: 'darka-e-lehte',
        date: 'Dje',
        time: '18:15'
    },
    {
        id: 8,
        cat: 'humbjepeshe',
        category: 'Humbje Peshe',
        title: 'Deficiti kalorik: si ta llogaritësh pa u bërë obsesiv',
        excerpt: 'Baza e humbjes së peshës është më e thjeshtë seç mendon. Një udhëzues praktik për të krijuar deficit pa anashkaluar ushqimin.',
        body: [
            'Deficiti kalorik është ndryshimi midis energjisë që konsumon dhe asaj që djeg. Kur konsumon më pak seç djeg, trupi merr energjinë që i mungon nga rezervat e yndyrës. Ky është parimi i vetëm shkencor pas çdo diete.',
            '### Çfarë është deficiti kalorik',
            'Çdo person ka një nivel ditor kalorish që e mban peshën të qëndrueshme. Konsumimi i rreth 300–500 kalorive më pak në ditë krijon një deficit të sigurt që sjell humbje të ngadaltë por të qëndrueshme prej 0.5–1 kg në javë.',
            '### Si ta llogaritësh pa u bërë obsesiv',
            'Nuk ke nevojë për llogari të përpikta me gram. Mjafton të shënosh përafërsisht ushqimin kryesor, të zvogëlosh porcionet dhe të zëvendësosh pijet e ëmbla me ujë. Ky nivel i lehtë vëmendjeje mjafton për shumicën e njerëzve.',
            '### Zgjedh ushqime që ngopin',
            'Vëllimi është çelësi. Perimet, frutat, supat dhe proteinat e dobëta japin shumë ushqim me pak kalori. Kështu ndihesh i ngopur pa kaluar kufirin ditor.',
            '### Gabimet që duhen shmangur',
            'Deficitet shumë të thella bëjnë më shumë dëm se dobí: ulin metabolizmin, rrisin urinë dhe shkaktojnë humbje muskulore. Po ashtu, shmang shpërblimin e tepërt gjatë fundjavës, që shpesh anulon të gjithë javën.',
            '### Kur do të shohësh rezultate',
            'Durimi është i nevojshëm. Pesha luhatet natyrisht nga uji, kripa dhe hormpet, prandaj mat progresin në intervale javore, jo ditore, dhe vër re si të rrinë rrobat në vend të peshores.'
        ],
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
        body: [
            'Numri që sheh në peshore mund të të mashtrojë. Një kilogram muskul zë shumë më pak vend se një kilogram yndyrë, ndaj edhe kur rrobat të vijnë më lirshëm, pesha mund të mos ndryshojë fare.',
            '### Muskujt vs yndyra',
            'Muskujt janë më të dendur se yndyra, prandaj peshojnë më shumë për të njëjtin vëllim. Dy persona me të njëjtën peshë mund të kenë pamje shumë të ndryshme nëse njëri ka më shumë muskuj dhe tjetri më shumë yndyrë.',
            '### Si të matësh progresin real',
            'Përdor matje të perimetrit (beli, ijët), vëzhgo si të vijnë rrobat dhe bëj fotografi periodike. Këto shenja tregojnë ndryshimet e përbërjes trupore që peshorja nuk i kap.',
            '### Luhatjet e ujit janë normale',
            'Uji, kripa, karbohidratet dhe cikli hormonal e lëvizin peshën me disa qindra gramë nga dita në ditë. Peshohu në të njëjtën kohë, të njëjtën ditë të javës dhe me të njëjtat kushte.',
            '### Kur duhet të shqetësohesh',
            'Shiko tendencën, jo ditët. Nëse pesha mesatare javore zbret ngadalë, je në rrugë të mbarë. Fokusohu te forca, energjia dhe mënyra si të rrinë rrobat — ato tregojnë shëndetin real.'
        ],
        seed: 'peshorja-mashtron',
        date: 'Dje',
        time: '14:10'
    },
    {
        id: 10,
        cat: 'humbjepeshe',
        category: 'Humbje Peshe',
        title: '5 gabime që pengojnë humbjen e peshës',
        excerpt: 'Edhe me dietë dhe sport, pesha mund të ngecë. Identifiko gabimet e zakonshme që po e sabotojnë progresin tënd.',
        body: [
            'Po bën gjithçka "drejt" por peshorja nuk lëviz? Shpesh fajin e kanë disa gabime të fshehta që i bëjmë të gjithë pa e kuptuar. Ja pesë prej tyre dhe si t\'i korrigjosh.',
            '### 1. Porcionet më të mëdha seç mendon',
            'Një grusht arra, një lugë vaj më shumë ose një copë djathë ekstra — shtohen lehtë në fund të ditës. Përdor enë më të vogla dhe mas me sy vetëm proteinat kryesore.',
            '### 2. Pijet e ëmbla dhe kafeja me shtesa',
            'Lëngjet me sheqer, pijet energjike dhe kafeja me qumësht e sheqer mund të shtojnë qindra kalori që trupi nuk i "ndjen". Zëvendësoji me ujë, çaj pa sheqer ose kafe të zezë.',
            '### 3. Shpërblimi pas stërvitjes',
            'Një orë stërvitje djeg rreth 300 kalori, por një snack "pas sportit" shpesh kalon 500. Konsumo një vakt të vogël me proteina dhe fibra, jo ushqime të përpunuara.',
            '### 4. Gjumi i pakët',
            'Kur fle pak, rritet grelina (hormoni i urisë) dhe ulet leptina (hormoni i ngopjes). Njerëzit e privuar nga gjumi hanë mesatarisht disa qindra kalori më shumë në ditë.',
            '### 5. Mungesa e konsistencës',
            'Dieta perfekte për 4 ditë dhe pushimi për 3 nuk funksionon. Prefero të hash mirë 6 nga 7 ditë në vend të një periudhe strikte e më pas një pushimi të gjatë.'
        ],
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
        time: '13:30'
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
        steps: [
            'Qëroni kungullin, hiqni farat dhe priteni në kubikë të vegjël.',
            'Prisni qepën dhe hudhrën, dhe grisni xhenxhefilin.',
            'Ngrohni vajin e ullirit në një tenxhere të madhe dhe skuqni qepën, hudhrën dhe xhenxhefilin për 2-3 minuta.',
            'Shtoni kungullin dhe lëngun e perimeve, mbulojeni dhe lëreni të ziejë për 20 minuta.',
            'Bluani supën me blender derisa të bëhet krem.',
            'Shtoni qumështin e kokosit, kripën dhe piperin, përzieni dhe shërbejeni të ngrohtë.'
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
        steps: [
            'Ngrohni furrën në 180°C dhe lyeni një tavë të vogël me gjalpë kokosi.',
            'Shtypni bananet me pirun derisa të bëhen pure.',
            'Përzieni vezët, mjaltin, vaniljen dhe gjalpin e kokosit të shkrirë me purenë e bananes.',
            'Shtoni tërshërën, kanellën dhe pluhurin e pjekjes dhe përzieni derisa masa të jetë homogjene.',
            'Hidheni masën në tavë dhe piqeni për 25-30 minuta derisa të marrë ngjyrë të artë.',
            'Lëreni të ftohet pak përpara se ta prisni dhe shërbeni.'
        ],
        excerpt: 'Ëmbëlsirë e shëndetshme që plotëson dëshirën për diçka të ëmbël pa faj. Vetëm tre përbërës dhe gati në 10 minuta.',
        seed: 'receta-torte-tersthere',
        date: 'Dje',
        time: '09:50'
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
        steps: [
            'Ngrohni furrën në 200°C dhe përgatisni një tavë duke e lyer lehtë me vaj ulliri.',
            'Vendosni gjokset e pulës në tavë dhe prisni limonin në feta mbi të.',
            'Shtypni hudhrën dhe shpërndajeni së bashku me rozmarinën mbi pulë.',
            'Shtoni specat e prerë në shirita rreth pulës, hidheni vajin e ullirit dhe rregulloni me kripë dhe piper.',
            'Piqeni për 25-30 minuta derisa pula të marrë ngjyrë të artë dhe të jetë e gatuar plotësisht.',
            'Lëreni të pushojë 5 minuta përpara se ta servirni me specat dhe salcën e formuar në tavë.'
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
        time: '15:05'
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
        time: '20:30'
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

// ===== Detaje për çdo pjatë: përbërës + hapat + foto tematike =====
const RECIPE_DETAILS = {
    'sallatë perimesh': {
        image: 'https://loremflickr.com/640/400/vegetable,salad',
        ingredients: [
            '2 domate', '1 kastravec', '½ qepë e kuqe', '1 spec i ëmbël',
            '100g ullinj të zinj', '100g djathë feta', '2 lugë vaj ulliri',
            '1 lugë uthull balsamike', 'kripë dhe piper'
        ],
        steps: [
            'Lani dhe prisni të gjitha perimet në copa të vogla.',
            'Vendosni perimet në një tas të madh së bashku me ullinjtë.',
            'Shtoni djathin feta të thërrmuar mbi perime.',
            'Përgatisni salcën duke përzier vajin e ullirit, uthullën, kripën dhe piperin.',
            'Hidheni salcën mbi sallatën dhe përzieni butësisht përpara se ta shërbeni.'
        ]
    },
    'supë krem': {
        image: 'https://loremflickr.com/640/400/cream,soup',
        ingredients: [
            '2 kunguj të vegjël', '1 qepë', '2 thelpinj hudhër',
            '1 patate', '1 litër lëng perimesh', '3 lugë vaj ulliri',
            'kripë dhe piper', 'fara kungulli për garniturë'
        ],
        steps: [
            'Qëroni dhe prisni kungujt, qepën dhe pataten në kubikë.',
            'Skuqni qepën dhe hudhrën në vaj ulliri për 2-3 minuta.',
            'Shtoni kungujt, pataten dhe lëngun e perimeve dhe zieni për 20 minuta.',
            'Bluani gjithçka me blender derisa të bëhet krem.',
            'Rregulloni me kripë dhe piper dhe shërbeni me fara kungulli sipër.'
        ]
    },
    'tavë perimesh': {
        image: 'https://loremflickr.com/640/400/vegetable,roast,oven',
        ingredients: [
            '2 kunguj', '2 patate', '1 patllixhan', '2 domate',
            '1 spec i kuq', '2 thelpinj hudhër', '3 lugë vaj ulliri',
            'trumzë, rozmarinë, kripë dhe piper'
        ],
        steps: [
            'Ngrohni furrën në 200°C dhe lyejeni një tavë me vaj ulliri.',
            'Prisni të gjitha perimet në feta të trasha.',
            'Vendosni perimet në tavë dhe shpërndani hudhrën e shtypur sipër.',
            'Hidhni vajin e ullirit dhe rregulloni me trumzë, rozmarinë, kripë dhe piper.',
            'Përzieni me duar që gjithçka të mbulohet me erëza.',
            'Piqeni për 30-35 minuta derisa perimet të zbuten dhe të marrin ngjyrë të artë.'
        ]
    },
    'petulla tërshëre': {
        image: 'https://loremflickr.com/640/400/oatmeal,pancakes',
        ingredients: [
            '2 banane të pjekura', '150g tërshërë', '2 vezë',
            '1 lugë mjaltë', '1 lugë çaji kanellë', '1 lugë çaji pluhur pjekjeje',
            'fruta të freskëta për sipër'
        ],
        steps: [
            'Shtypni bananet me pirun derisa të bëhen pure.',
            'Përzieni purenë e bananes me vezët, mjaltin dhe kanellën.',
            'Shtoni tërshërën dhe pluhurin e pjekjes dhe përzieni derisa të bëhet një masë e dendur.',
            'Ngrohni një tigan të veshur anti-ngjitës dhe hidheni masën në formë petullash të vogla.',
            'Piqni 2-3 minuta për secilën anë derisa të marrin ngjyrë të artë.',
            'Shërbeni me fruta të freskëta sipër dhe pak mjaltë.'
        ]
    },
    'smoothie jeshil': {
        image: 'https://loremflickr.com/640/400/green,smoothie',
        ingredients: [
            '1 banane', '1 grusht spinaq', '½ avokado',
            '1 kivi', '250ml qumësht bajamesh', '1 lugë çaji fara chia',
            '1 lugë mjaltë', 'akull sipas dëshirës'
        ],
        steps: [
            'Lani spinaqin dhe qëroni bananen, avokadon dhe kivin.',
            'Vendosni të gjithë përbërësit në blender.',
            'Shtoni qumështin e bajamesh dhe mjaltin.',
            'Bluani për 60-90 sekonda derisa masa të jetë e lëmuar.',
            'Hidheni në gotë, shtoni farat chia dhe akull, dhe shërbejeni menjëherë.'
        ]
    },
    'tuna në gril': {
        image: 'https://loremflickr.com/640/400/tuna,grill,fish',
        ingredients: [
            '2 bife tuna të freskët', '2 lugë vaj ulliri',
            '1 limon', '2 thelpinj hudhër', '1 lugë rozmarinë',
            'kripë dhe piper', 'sallatë jeshile për shoqërim'
        ],
        steps: [
            'Marinoni bifet e tunës me vaj ulliri, lëng limoni, hudhër të shtypur, rozmarinë, kripë dhe piper për 15 minuta.',
            'Ngrohni mirë grilën ose një tigan grill.',
            'Piqni tunën 2-3 minuta për secilën anë sipas shijes (nuk duhet të piqet shumë).',
            'Lëreni të pushojë 2 minuta përpara se ta prisni.',
            'Shërbeni me sallatë jeshile dhe feta limoni.'
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
        ...(recipe ? { image: recipe.image, ingredients: recipe.ingredients, steps: recipe.steps } : {})
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
        ...(recipe ? { image: recipe.image, ingredients: recipe.ingredients, steps: recipe.steps } : {})
    };
}

module.exports = { seedArticles, generateArticle, generateLatestArticle };
