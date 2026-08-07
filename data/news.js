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
        image: 'https://loremflickr.com/640/400/home,workout',
        body: [
            'Një stërvitje efektive nuk kërkon domosdoshmërisht palestër apo pajisje. Me trupin tënd dhe 15 minuta në ditë mund të ndërtosh forcë, durim dhe energji, thjesht duke ndjekur këtë rutinë të organizuar.',
            '### Ngrohja (2 minuta)',
            'Filloni me ngrohje të lehtë: marshimi në vend për 1 minutë, më pas rrotullime të krahëve përpara dhe prapa. Kjo rrit temperaturën e trupit dhe përgatit muskujt, duke parandaluar lëndimet.',
            '### Squat (3 seri x 12 përsëritje)',
            'Qëndroni me këmbët sa gjerësia e shpatullave, uleni sikur të uleshit në një karrige imagjinare, duke e mbajtur shpinën drejt. Shtyni gjunjët nga jashtë dhe kthehuni lart duke i shtrënguar vithet. Squati aktivizon këmbët dhe muskujt e kofshëve.',
            '### Pikë shtytjeje (3 seri x 8-10 përsëritje)',
            'Vendosni duart pak më të gjera se shpatullat, trupi në vijë të drejtë nga koka te këmbët. Uluni duke përkulur bërrylat derisa gjoksi t\'i afrohet dyshemesë, pastaj shtyjeni lart. Nëse është shumë e vështirë, mbështetni gjunjët në dysheme.',
            '### Lunge (3 seri x 10 për këmbë)',
            'Bëni një hap të madh përpara, uleni gjurin e pasmë drejt dyshemesë dhe kthehuni në pozicionin fillestar. Mbani gjurin e përparmë mbi kyçin e këmbës. Lungjet forcojnë këmbët, vithet dhe ekuilibrin.',
            '### Plank (3 x 30 sekonda)',
            'Mbështetni bërrylat në dysheme dhe trupin në vijë të drejtë, duke i shtrënguar barkun dhe vithet. Mbajeni pozicionin pa e ngritur ijet. Plank forcon muskujt e barkut dhe shpinës.',
            '### Ftohja (1 minutë)',
            'Përfundoni me shtrirje të lehta: përkuluni përpara drejt këmbëve dhe mbajeni 20 sekonda, pastaj shtrini krahët mbi kokë. Kjo ndihmon muskujt të rikuperohen dhe qetëson rrahjet e zemrës.',
            'Kjo rutinë mund të përsëritet 4-5 herë në javë. Rritni ngadalë numrin e përsëritjeve ose kohën e plank-ut sapo ndjeheni më të fortë.'
        ],
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
        image: 'https://loremflickr.com/640/400/walking,nature',
        body: [
            'Ecja është ushtrimi më i thjeshtë, i lirë dhe më i sigurt që ekziston, por shpesh e nënvlerësojmë. Një ecje e shpejtë prej 30 minutash në ditë përmirëson zemrën, djeg kalori dhe qetëson mendjen.',
            '### Si të ecësh si duhet',
            'Mbani shpinën drejt, shpatullat të relaksuara dhe kokën lart. Lëvizni krahët natyrshëm përgjatë trupit dhe bëni hapa të gjatë por të rehatshëm. Toka me qetësi fillimisht, duke u siguruar që mund të flisni pa e këputur frymën.',
            '### Sa shpejt duhet të ecësh',
            'Për të djegur kalori dhe përmirësuar zemrën, synoni një temp të shpejtë — rreth 5-6 km/h. Nëse e filloni, filloni më ngadalë dhe rriteni gradualisht gjatë dy javëve të para.',
            '### Çfarë të bësh në natyrë',
            'Zgjidhni një park, pyll ose bregdet. Ecja mbi bar, dhe apo terrene të pabarabarta aktivizon më shumë muskuj sesa trotuari i sheshtë, duke përmirësuar edhe ekuilibrin.',
            '### Si ta bësh zakon',
            'Lini orar fiks — mëngjes, mesdite ose pasdite — dhe shoqërojeni me muzikë ose podcast. Edhe 3 ecje të shkurtra 10-minutëshe në ditë llogariten njësoj si një ecje e gjatë.'
        ],
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
        image: 'https://loremflickr.com/640/400/stretching,morning',
        body: [
            'Shtrirja e mëngjesit është si të thuash "zgjohu" trupit. Ajo liron tensionin e grumbulluar gjatë natës, përmirëson qarkullimin dhe e përgatit trupin për ditën, duke reduktuar rrezikun e lëndimeve.',
            '### Shtrirje për qafën (5 përsëritje secila anë)',
            'Uleni ngadalë kokën drejt shpatullës së djathtë, mbajeni 15 sekonda dhe kthehuni. Përsëriteni në anën tjetër. Ky ushtrim çliron tensionin e qafës pas orëve me telefon ose kompjuter.',
            '### Shtrirje për shpatullat (5 përsëritje)',
            'Vendosni njërën krah horizontalisht përpara gjoksit dhe tërhiqeni butësisht me krahun tjetër për 20 sekonda. Përsëriteni me krahun tjetër. Hap shpatullat dhe përmirëson qëndrimin.',
            '### Shtrirje për shpinën (5 përsëritje)',
            'Qëndroni në të katërta, alternoni midis harkimit të shpinës lart (si maceja) dhe uljes së barkut poshtë (si lopa). Kjo lëvizje e butë zgjon shtyllën kurrizore dhe lehtëson ngurtësinë e mëngjesit.',
            '### Shtrirje për këmbët (10 sekonda secila)',
            'Uluni, shtrini njërën këmbë përpara dhe përkuluni drejt gishtave, duke e mbajtur shpinën drejt. Përsëriteni me këmbën tjetër. Kjo zgjon muskujt e kofshëve dhe përmirëson qarkullimin.',
            'Bëjini këto shtrirje çdo mëngjes para se të nisesh për drekë ose punë. Nuk kërkojnë më shumë se 5 minuta dhe ndryshimi ndihet që në ditën e parë.'
        ],
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
    },
    {
        id: 29,
        cat: 'ushtrime',
        category: 'Ushtrime',
        title: 'Ushtrime në natyrë: rutina 30-minutëshe për ajër të pastër',
        excerpt: 'Stërvitja jashtë shtëpisë djeg më shumë kalori dhe përmirëson humorin. Ja një rutinë e plotë për parkun.',
        image: 'https://loremflickr.com/640/400/outdoor,exercise,park',
        body: [
            'Ushtrimet në natyrë kanë një përfitim shtesë që s\'e jep asnjë palestër: ajri i pastër dhe drita e diellit. Ato përmirësojnë disponimin, forcojnë zemrën dhe djegin më shumë kalori, sepse terreni i pabarabartë punon më shumë muskuj.',
            '### Ngrohja (3 minuta)',
            'Filloni me ecje të shpejtë në vend ose në një shteg të sheshtë. Shtoni rrotullime krahësh dhe rrathë me ijët për të përgatitur trupin.',
            '### Intervale vrapimi (10 minuta)',
            'Alternoni 1 minutë vrapim të lehtë me 1 minutë ecje, duke e përsëritur 5 herë. Intervalet rrisin ritmin e zemrës dhe djegin yndyrë më shpejt sesa ushtrimi i qëndrueshëm.',
            '### Squat + lunge në stol (3 seri)',
            'Përdorni një stol parku për lunge të ngritura: vendosni njërën këmbë mbi stol dhe bëni squats të alternuara. Më pas bëni 10 squats të rregullta me duart përpara gjoksit.',
            '### Push-ups mbi stol (3 seri x 10)',
            'Mbështetini duart në anët e stolit dhe bëni pikë shtytjeje të pjerrëta. Ato janë më të lehta se ato në dysheme, por aktivizojnë njësoj gjoksin, krahët dhe barkun.',
            '### Ecje e shpejtë e ftohjes (7 minuta)',
            'Përfundoni me ecje të qetë që të ulni gradualisht ritmin e zemrës. Mbylleni me shtrirje të këmbëve dhe shpatullave.',
            'Provoni këtë rutinë 3-4 herë në javë në park ose në çdo hapësirë të gjelbër. Mëngjesi herët është ideal: ajri është më i freskët dhe parku më i qetë.'
        ],
        seed: 'ushtrime-ne-natyre',
        date: 'Dje',
        time: '09:40'
    },
    {
        id: 30,
        cat: 'ushtrime',
        category: 'Ushtrime',
        title: 'Ushtrime në shtëpi: hiq barkun dhe forco këmbët pa pajisje',
        excerpt: 'Një rutinë 20-minutëshe për forcë dhe tonifikim, e bërë thjesht me peshën e trupit në dhomën e ndenjes.',
        image: 'https://loremflickr.com/640/400/home,workout,exercise',
        body: [
            'Nuk ke nevojë për pajisje për të ndërtuar muskuj të fortë. Pesha e trupit është një nga mjetet më efektive stërvitjeje. Kjo rutinë 20-minutëshe fokusohet te barku dhe këmbët, dy zonat më të kërkuara nga shumica.',
            '### Ngrohje dinamike (2 minuta)',
            'Marshoni në vend duke i ngritur gjunjët lart për 1 minutë, më pas bëni 10 rrethime ijesh secila anë dhe 10 lunge pa peshë për të zgjuar muskujt.',
            '### Squats klasikë (3 seri x 15)',
            'Këmbët sa gjerësia e shpatullave, uluni ngadalë duke mbajtur shpinën drejt dhe gjunjët mbi kyçet. Shtrëngoni vithet kur ngriheni. Për më shumë intensitet, mbani një shishe uji përpara gjoksit.',
            '### Crunches për barkun (3 seri x 15)',
            'Shtrihuni në shpinë, përkulni gjunjët dhe ngrihuni drejt gjunjëve duke shtrënguar muskujt e barkut. Mos tërhiqni kokën me duar — mbështetini gishtat lehtë pas veshëve dhe përdorni barkun për ngritjen.',
            '### Lunge përpara (3 seri x 12 për këmbë)',
            'Bëni një hap të gjatë përpara, uleni gjurin e pasmë drejt dyshemesë dhe kthehuni. Alternoni këmbët. Lungjet tonifikojnë kofshët, vithet dhe përmirësojnë ekuilibrin.',
            '### Plank me ngritje këmbe (3 x 20 sekonda)',
            'Në pozicion plank me bërryla në dysheme, ngrini në mënyrë alternative njërën këmbë dhe mbajeni 2 sekonda. Ky variant i plank-ut djeg më shumë dhe forcon barkun e thellë.',
            '### Ftohja (2 minuta)',
            'Shtrihuni në shpinë, afrojeni njërin gju drejt gjoksit dhe mbajeni 20 sekonda, pastaj përsëriteni me këmbën tjetër. Mbylleni me shtrirje të barkut duke u mbështetur te bërrylat.',
            'Kjo rutinë mund të bëhet çdo ditë tjetër. Kombinojeni me ecje të shpejtë për rezultate më të shpejta në djegien e kalorive.'
        ],
        seed: 'ushtrime-ne-shpi-ab',
        date: 'Dje',
        time: '08:15'
    },
    {
        id: 31,
        cat: 'ushqim',
        category: 'Ushqim i Shëndetshëm',
        title: 'Ushqimet që ndihmojnë rrisë energjinë në mënyrë natyrale',
        excerpt: 'Një listë praktike e ushqimeve që të japin energji të qëndrueshme pa sheqer dhe pa kafeinë të tepërt.',
        image: 'https://loremflickr.com/640/400/healthy,food,energy',
        body: [
            'Kur energjia bie nga mesi i ditës, instinkti na çon te kafeja ose sheqeri. Por këto japin një rritje të shpejtë që zbehet shpejt. Ushqimet e duhura ofrojnë energji të qëndrueshme që zgjat me orë, pa ulje të papritur.',
            '### Tërshëra: karbohidrati i ngadaltë',
            'Tërshëra çliron energji gradualisht falë fibrave dhe karbohidrateve komplekse. Një tas tërshërë me fruta në mëngjes të mban aktiv dhe të përqendruar deri në drekë, duke stabilizuar sheqerin në gjak.',
            '### Bananet: energji e menjëhershme',
            'Banania kombinon karbohidrate të thjeshta dhe komplekse, kalium dhe vitaminë B6. Është ideale para stërvitjes ose kur ndjen rënie energjie — e shpejtë, e lehtë dhe e tretshme.',
            '### Arrat dhe farat: yndyrnat e mira',
            'Bajamet, arrat, farat e kungullit dhe chia ofrojnë proteina, magnez dhe yndyrna të shëndetshme. Një grusht arra pasdite ndalon dëshirën për ëmbëlsira dhe ruan nivelin e energjisë.',
            '### Vezët: proteina e plotë',
            'Vezët përmbajnë proteina cilësore, kolinë dhe vitamina B që ndihmojnë trupin të shndërrojë ushqimin në energji. Një vezë e zier mes vakteve të ngop dhe të ruan fokusin.',
            '### Spinaqi dhe zarzavatet',
            'Perimet me gjethe të errëta janë të pasura me hekur dhe folate, që ndihmojnë qelizat të marrin oksigjen. Mungesa e hekurit është një shkak i zakonshëm i lodhjes, prandaj shtoji në sallata dhe smoothies.',
            '### Uji: energjia që e harrojmë',
            'Edhe një dehidratim i lehtë ul energjinë dhe përqendrimin. Pini ujë rregullisht gjatë ditës, veçanërisht në mëngjes dhe pasdite, për t\'i dhënë trupit karburantin bazë.',
            'Kombinoni këto ushqime me gjumë të rregullt dhe lëvizje të lehtë, dhe do të vini re një ndryshim të qartë në nivelin tuaj të energjisë gjatë gjithë ditës.'
        ],
        seed: 'ushqime-energji',
        date: 'Sot',
        time: '10:30'
    },
    {
        id: 32,
        cat: 'horoskopi',
        category: 'Horoskopi',
        title: 'Horoskopi i sotëm: Dashi (21 Mars – 19 Prill)',
        excerpt: 'Dashi sot ka energji për të marrë vendime të mëdha. Zbulo çfarë të pret në dashuri, punë dhe shëndet.',
        image: '/zodiac/dashi.svg',
        sign: 'dashi',
        symbol: '&#9800;',
        date: 'Sot',
        time: '06:00'
    },
    {
        id: 33,
        cat: 'horoskopi',
        category: 'Horoskopi',
        title: 'Horoskopi i sotëm: Demi (20 Prill – 20 Maj)',
        excerpt: 'Demi sot vë bast mbi stabilitetin. Zbulo si t\'i përdorësh më mirë energjitë e ditës.',
        image: '/zodiac/demi.svg',
        sign: 'demi',
        symbol: '&#9801;',
        date: 'Sot',
        time: '06:05'
    },
    {
        id: 34,
        cat: 'horoskopi',
        category: 'Horoskopi',
        title: 'Horoskopi i sotëm: Binjakët (21 Maj – 20 Qershor)',
        excerpt: 'Binjakët sot komunikojnë më mirë se kurrë. Zbulo çfarë të sjell dita në marrëdhënie dhe karrierë.',
        image: '/zodiac/binjaket.svg',
        sign: 'binjaket',
        symbol: '&#9802;',
        date: 'Sot',
        time: '06:10'
    },
    {
        id: 35,
        cat: 'horoskopi',
        category: 'Horoskopi',
        title: 'Horoskopi i sotëm: Gaforrja (21 Qershor – 22 Korrik)',
        excerpt: 'Gaforrja sot ndien më shumë se zakonisht. Zbulo si t\'i kanalizosh emocionet me forcë.',
        image: '/zodiac/gaforrja.svg',
        sign: 'gaforrja',
        symbol: '&#9803;',
        date: 'Sot',
        time: '06:15'
    },
    {
        id: 36,
        cat: 'horoskopi',
        category: 'Horoskopi',
        title: 'Horoskopi i sotëm: Luani (23 Korrik – 22 Gusht)',
        excerpt: 'Luani sot është në qendër të vëmendjes. Zbulo si ta shfrytëzosh karizmin tënd në maksimum.',
        image: '/zodiac/luani.svg',
        sign: 'luani',
        symbol: '&#9804;',
        date: 'Sot',
        time: '06:20'
    },
    {
        id: 37,
        cat: 'horoskopi',
        category: 'Horoskopi',
        title: 'Horoskopi i sotëm: Virgjëresha (23 Gusht – 22 Shtator)',
        excerpt: 'Virgjëresha sot është e përpiktë dhe e organizuar. Zbulo çfarë detyrash të sjellin përfitim.',
        image: '/zodiac/virgjerresha.svg',
        sign: 'virgjerresha',
        symbol: '&#9805;',
        date: 'Sot',
        time: '06:25'
    },
    {
        id: 38,
        cat: 'horoskopi',
        category: 'Horoskopi',
        title: 'Horoskopi i sotëm: Peshorja (23 Shtator – 22 Tetor)',
        excerpt: 'Peshorja sot kërkon ekuilibër në çdo fushë. Zbulo si të marrësh vendime me drejtësi.',
        image: '/zodiac/peshorja.svg',
        sign: 'peshorja',
        symbol: '&#9806;',
        date: 'Sot',
        time: '06:30'
    },
    {
        id: 39,
        cat: 'horoskopi',
        category: 'Horoskopi',
        title: 'Horoskopi i sotëm: Akrepi (23 Tetor – 21 Nëntor)',
        excerpt: 'Akrepi sot është i vendosur dhe misterioz. Zbulo si t\'i kthesh pasionet në rezultate.',
        image: '/zodiac/akrepi.svg',
        sign: 'akrepi',
        symbol: '&#9807;',
        date: 'Sot',
        time: '06:35'
    },
    {
        id: 40,
        cat: 'horoskopi',
        category: 'Horoskopi',
        title: 'Horoskopi i sotëm: Shigjetari (22 Nëntor – 21 Dhjetor)',
        excerpt: 'Shigjetari sot është aventurier dhe optimist. Zbulo çfarë mundësish të sjell dita.',
        image: '/zodiac/shigjetari.svg',
        sign: 'shigjetari',
        symbol: '&#9808;',
        date: 'Sot',
        time: '06:40'
    },
    {
        id: 41,
        cat: 'horoskopi',
        category: 'Horoskopi',
        title: 'Horoskopi i sotëm: Bricjapi (22 Dhjetor – 19 Janar)',
        excerpt: 'Bricjapi sot fokusohet te qëllimet afatgjata. Zbulo si të përparosh në punë dhe financa.',
        image: '/zodiac/bricjapi.svg',
        sign: 'bricjapi',
        symbol: '&#9809;',
        date: 'Sot',
        time: '06:45'
    },
    {
        id: 42,
        cat: 'horoskopi',
        category: 'Horoskopi',
        title: 'Horoskopi i sotëm: Ujori (20 Janar – 18 Shkurt)',
        excerpt: 'Ujori sot është inovativ dhe i pavarur. Zbulo si t\'i realizosh idetë e tua më të guximshme.',
        image: '/zodiac/ujori.svg',
        sign: 'ujori',
        symbol: '&#9810;',
        date: 'Sot',
        time: '06:50'
    },
    {
        id: 43,
        cat: 'horoskopi',
        category: 'Horoskopi',
        title: 'Horoskopi i sotëm: Peshqit (19 Shkurt – 20 Mars)',
        excerpt: 'Peshqit sot janë intuitivë dhe ëndërrimtarë. Zbulo si ta përdorësh ndjeshmërinë si forcë.',
        image: '/zodiac/peshqit.svg',
        sign: 'peshqit',
        symbol: '&#9811;',
        date: 'Sot',
        time: '06:55'
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
    { cat: 'jete', category: 'Jete e Shëndetshme', title: (p) => `${p.routine} për mëngjes: sekreti i një dite të mirë`, excerpt: (p) => `Fillo ditën me hapin e duhur dhe vëre ndryshimin në produktivitet dhe humor.` }
];

const categories = ['Humbje Peshe', 'Ushqim i Shëndetshëm', 'Receta', 'Ushtrime', 'Jete e Shëndetshme', 'Horoskopi'];
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

// ===== Horoskopi ditor =====
const ZODIAC = {
    dashi: {
        name: 'Dashi',
        element: 'Zjarr',
        ruling: 'Marsi',
        luckNum: [3, 9],
        luckColor: 'E kuqe'
    },
    demi: {
        name: 'Demi',
        element: 'Dhe',
        ruling: 'Venusi',
        luckNum: [2, 6],
        luckColor: 'Jeshile'
    },
    binjaket: {
        name: 'Binjakët',
        element: 'Ajër',
        ruling: 'Merkuri',
        luckNum: [5, 7],
        luckColor: 'E verdhë'
    },
    gaforrja: {
        name: 'Gaforrja',
        element: 'Ujë',
        ruling: 'Hëna',
        luckNum: [2, 7],
        luckColor: 'Argjend'
    },
    luani: {
        name: 'Luani',
        element: 'Zjarr',
        ruling: 'Dielli',
        luckNum: [1, 4],
        luckColor: 'E artë'
    },
    virgjerresha: {
        name: 'Virgjëresha',
        element: 'Dhe',
        ruling: 'Merkuri',
        luckNum: [5, 8],
        luckColor: 'E gjelbër'
    },
    peshorja: {
        name: 'Peshorja',
        element: 'Ajër',
        ruling: 'Venusi',
        luckNum: [6, 9],
        luckColor: 'Rozë'
    },
    akrepi: {
        name: 'Akrepi',
        element: 'Ujë',
        ruling: 'Plutoni',
        luckNum: [8, 9],
        luckColor: 'E zezë'
    },
    shigjetari: {
        name: 'Shigjetari',
        element: 'Zjarr',
        ruling: 'Jupiteri',
        luckNum: [3, 9],
        luckColor: 'Blu'
    },
    bricjapi: {
        name: 'Bricjapi',
        element: 'Dhe',
        ruling: 'Saturni',
        luckNum: [4, 8],
        luckColor: 'Kafe'
    },
    ujori: {
        name: 'Ujori',
        element: 'Ajër',
        ruling: 'Urani',
        luckNum: [1, 7],
        luckColor: 'Elektrike'
    },
    peshqit: {
        name: 'Peshqit',
        element: 'Ujë',
        ruling: 'Neptuni',
        luckNum: [3, 9],
        luckColor: 'E kaltër'
    }
};

const HORO_LOVE = [
    'Në dashuri, dita favorizon komunikimin e hapur. Mos hezito të thuash atë që ndjen — partneri e vlerëson sinqeritetin.',
    'Dita sjell harmoni në çift. Nëse je beqar, një takim i rastësishëm sot mund të kthehet në diçka më serioze.',
    'Pasionet zgjohen sot. Dëgjoje zemrën, por edhe logjikën, përpara se të marrësh vendime të mëdha emocionale.',
    'Marrëdhëniet kërkojnë vëmendje sot. Një gjest i vogël dashamirës mund të forcojë lidhjen me personin e dashur.'
];

const HORO_WORK = [
    'Në punë, iniciativa jote bie në sy. Mos u tremb të marrësh drejtimin — aftësitë e tua po vlerësohen.',
    'Karriera të sjell mundësi të reja. Përqendrohu në detyrat prioritare dhe rezultatet do të flasin vetë.',
    'Një bashkëpunim i papritur mund të të sjellë përfitime. Ji i hapur ndaj sugjerimeve të kolegëve.',
    'Dita favorizon organizimin. Bëj një listë detyrash dhe ndjekja e saj do ta bëjë punën më të lehtë.'
];

const HORO_HEALTH = [
    'Shëndeti kërkon ekuilibër. Fillo ditën me ujë dhe shto lëvizje të lehtë — trupi yt e meriton.',
    'Energjia jote është e lartë sot. Shfrytëzoje për një stërvitje ose një shëtitje në natyrë.',
    'Ji i vëmendshëm me gjumin. Një natë e mirë pushimi do të ndikojë pozitivisht në humor dhe fokus.',
    'Dëgjoji sinjalet e trupit. Pushimi i duhur dhe ushqimi i ekuilibruar janë aleatët e tu më të mirë.'
];

const HORO_ADVICE = [
    'Këshilla e ditës: beso në instinktet e tua dhe vepro me guxim.',
    'Këshilla e ditës: një ndryshim i vogël sot sjell rezultate të mëdha nesër.',
    'Këshilla e ditës: jini të mirë me veten — përparimi kërkon kohë dhe durim.',
    'Këshilla e ditës: ndihma ndaj të tjerëve të kthen forcë të trefishtë.'
];

function daySeed() {
    const d = new Date();
    return d.getFullYear() * 1000 + d.getMonth() * 100 + d.getDate();
}

function dailyHoroscope(signKey, index, baseArticle) {
    const s = ZODIAC[signKey];
    const seed = daySeed() + index;
    const r = (arr) => arr[(seed + index) % arr.length];
    return {
        ...baseArticle,
        date: 'Sot',
        time: '06:00',
        body: [
            `Për shenjën e ${s.name}, dita e sotme vjen e mbushur me energji të veçantë. Elementi i ${s.element} dhe planeti ${s.ruling} ndikojnë në mënyrën si ia del mbanë në çdo fushë të jetës.`,
            '### Dashuria',
            r(HORO_LOVE),
            '### Puna dhe karriera',
            r(HORO_WORK),
            '### Shëndeti',
            r(HORO_HEALTH),
            '### Numrat me fat',
            `Numrat me fat për sot: ${s.luckNum.join(' dhe ')}. Ngjyra që të sjell energji: ${s.luckColor}.`,
            r(HORO_ADVICE)
        ]
    };
}

function generateHoroscopeDaily(articles) {
    return articles
        .filter(a => a.cat === 'horoskopi')
        .map((a, i) => dailyHoroscope(a.sign, i, a));
}

module.exports = { seedArticles, generateArticle, generateLatestArticle, generateHoroscopeDaily };
