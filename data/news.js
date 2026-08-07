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

// ===== Lajmet fillestare =====
const seedArticles = [
    {
        id: 1,
        pos: 'hero-main',
        cat: 'ekonomia',
        category: 'Ekonomi',
        title: 'Kuçova drejt rikthimit si qendër energjetike e vendit',
        excerpt: 'Rigjetja e fushave të naftës dhe investimet e reja ndërkombëtare kthejnë vëmendjen te qyteti i njohur si "qyteti i naftës".',
        seed: 'kucova-nafta',
        date: 'Sot',
        time: '07:30',
        video: SAMPLE_VIDEOS[0],
        videoPoster: VIDEO_POSTERS[0]
    },
    {
        id: 2,
        pos: 'hero-side',
        cat: 'sport',
        category: 'Sport',
        title: 'Naftëtari, në kërkim të ringjalljes në kampionatin rajonal',
        seed: 'kucova-futboll',
        date: 'Sot',
        time: '08:15',
        video: SAMPLE_VIDEOS[4],
        videoPoster: VIDEO_POSTERS[1]
    },
    {
        id: 3,
        pos: 'hero-side',
        cat: 'eventi',
        category: 'Evente',
        title: 'Panairi i verës 2026, mbrëmjet e koncerteve nisin të premten',
        seed: 'kucova-festival',
        date: 'Sot',
        time: '09:00',
        video: SAMPLE_VIDEOS[5],
        videoPoster: VIDEO_POSTERS[2]
    },
    {
        id: 4,
        cat: 'latest',
        category: 'Kronikë',
        title: 'Aksident në hyrje të Kuçovës, dy të plagosur dërgohen në spital',
        excerpt: 'Një përplasje midis dy automjeteve pranë hyrjes së qytetit la të plagosur dy persona. Policia po heton shkaqet e aksidentit.',
        seed: 'kucova-aksident',
        date: 'Sot',
        time: '10:24'
    },
    {
        id: 5,
        cat: 'latest',
        category: 'Politikë',
        title: 'Bashkia Kuçovë miraton buxhetin për vitin 2026',
        excerpt: 'Këshilli bashkiak miratoi buxhetin vjetor me fokus infrastrukturën dhe arsimin. Zërat më të mëdhenj shkojnë për rrugët dhe shkollat.',
        seed: 'kucova-bashkia',
        date: 'Sot',
        time: '09:05',
        video: SAMPLE_VIDEOS[2],
        videoPoster: VIDEO_POSTERS[3]
    },
    {
        id: 6,
        cat: 'latest',
        category: 'Sport',
        title: 'Naftëtari mposht rivalin në kohën shtesë, 2-1',
        excerpt: 'Skuadra kuçovare arriti një fitore dramatike në kampionatin rajonal, duke shkënduar entuziazëm te tifozët e pranishëm në stadium.',
        seed: 'kucova-nder',
        date: 'Sot',
        time: '08:40',
        video: SAMPLE_VIDEOS[3],
        videoPoster: VIDEO_POSTERS[0]
    },
    {
        id: 7,
        cat: 'latest',
        category: 'Evente',
        title: 'Festivali i verës 2026, programi i plotë i mbrëmjeve',
        excerpt: 'Qyteti përgatitet për festivalin vjetor me muzikë live, kuzhinë lokale dhe aktivitete për fëmijë në sheshin qendror.',
        seed: 'kucova-skena',
        date: 'Dje',
        time: '18:15',
        video: SAMPLE_VIDEOS[6],
        videoPoster: VIDEO_POSTERS[1]
    },
    {
        id: 8,
        cat: 'kronika',
        category: 'Kronikë',
        title: 'Operacion i policisë kundër karburanteve të paligjshme në zonën e naftës',
        excerpt: 'Forcat e policisë goditën një rrjet që tregtonte karburant pa licencë. U sekuestruan sasi të konsiderueshme malli.',
        seed: 'kucova-policia',
        date: 'Dje',
        time: '16:40'
    },
    {
        id: 9,
        cat: 'kronika',
        category: 'Kronikë',
        title: 'Zjarri në një zonë shkurresh, zjarrfikësit ndërhyjnë me shpejtësi',
        excerpt: 'Zjarrfikësit e Kuçovës arritën të lokalizojnë flakët para se ato të përhapeshin në sipërfaqe më të mëdha.',
        seed: 'kucova-zjarr',
        date: 'Dje',
        time: '14:10',
        video: SAMPLE_VIDEOS[1],
        videoPoster: VIDEO_POSTERS[2]
    },
    {
        id: 10,
        cat: 'kronika',
        category: 'Kronikë',
        title: 'Nis rimodelimi i sheshit qendror, banorët kërkojnë edhe më shumë gjelbërim',
        excerpt: 'Punimet për rikualifikimin e sheshit të qytetit kanë nisur. Projekti parashikon trotuare të reja dhe hapësira të gjelbra.',
        seed: 'kucova-sheshi',
        date: 'Dje',
        time: '11:55'
    },
    {
        id: 11,
        cat: 'sport',
        category: 'Sport',
        title: 'Naftëtari zyrtarizon trajnerin e ri për sezonin e ardhshëm',
        excerpt: 'Drejtuesit e klubit kuçovar konfirmuan emrin e trajnerit që do të udhëheqë skuadrën në kampionatin e ri.',
        seed: 'kucova-trajner',
        date: 'Dje',
        time: '19:20'
    },
    {
        id: 12,
        cat: 'sport',
        category: 'Sport',
        title: 'Kuçova pret ndeshjen vendimtare të kampionatit rajonal',
        excerpt: 'Stadiumi i qytetit do të presë javën e ardhshme sfidën që mund të vendosë fatin e grupit. Biletat po shiten me shpejtësi.',
        seed: 'kucova-stadium',
        date: 'Dje',
        time: '13:30',
        video: SAMPLE_VIDEOS[7],
        videoPoster: VIDEO_POSTERS[3]
    },
    {
        id: 13,
        cat: 'sport',
        category: 'Sport',
        title: 'Gara e çiklizmit kalon nëpër kodrat e fushës së naftës',
        excerpt: 'Mbi 120 çiklistë nga i gjithë vendi u mblodhën për garën tradicionale që kalon nëpër peizazhin e njohur të Kuçovës.',
        seed: 'kucova-cikli',
        date: 'Dje',
        time: '10:00'
    },
    {
        id: 14,
        cat: 'politika',
        category: 'Politikë',
        title: 'Kryetari takohet me qytetarët, në fokus rrugët dhe ndriçimi',
        excerpt: 'Në takimin publik të zhvilluar në lagjen e re, banorët ngritën shqetësimet për infrastrukturën rrugore dhe ndriçimin publik.',
        seed: 'kucova-takim',
        date: 'Dje',
        time: '12:45'
    },
    {
        id: 15,
        cat: 'politika',
        category: 'Politikë',
        title: 'Investim 40 milionë lekë për rrjetin e ujësjellësit',
        excerpt: 'Bashkia nënshkroi kontratën për rehabilitimin e rrjetit të ujësjellësit, që do të prekë mbi 2 mijë familje.',
        seed: 'kucova-uje',
        date: 'Dje',
        time: '09:50',
        video: SAMPLE_VIDEOS[0],
        videoPoster: VIDEO_POSTERS[0]
    },
    {
        id: 16,
        cat: 'politika',
        category: 'Politikë',
        title: 'Muzeu i naftës, bashkia kërkon statusin e monumentit',
        excerpt: 'Propozohet që objekti i parë i nxjerrjes së naftës në vend të mbrohet si trashëgimi industriale dhe turistike.',
        seed: 'kucova-muze',
        date: 'Dje',
        time: '08:20'
    },
    {
        id: 17,
        cat: 'ekonomia',
        category: 'Ekonomi',
        title: 'Rigjetja e fushave të naftës, investitorët nënshkruajnë marrëveshje të re',
        excerpt: 'Kompania ndërkombëtare do të rihapë një pjesë të fushave të vjetra, duke premtuar vende pune për vendasit.',
        seed: 'kucova-rigjetja',
        date: 'Dje',
        time: '15:05',
        video: SAMPLE_VIDEOS[5],
        videoPoster: VIDEO_POSTERS[1]
    },
    {
        id: 18,
        cat: 'ekonomia',
        category: 'Ekonomi',
        title: 'Rafineria e vjetër e Kuçovës, një simbol që pret të ringjallet',
        excerpt: 'E ndërtuar në vitet \'70, rafineria mbetet një nga simbolet e qytetit. Ekspertët diskutojnë për të ardhmen e saj.',
        seed: 'kucova-rafineri',
        date: 'Dje',
        time: '13:15'
    },
    {
        id: 19,
        cat: 'ekonomia',
        category: 'Ekonomi',
        title: 'Bizneset lokale kërkojnë lehtësira fiskale dhe mbështetje',
        excerpt: 'Dhomët e tregtisë i paraqitën qeverisë kërkesat për paketat mbështetëse të ndërmarrjeve të vogla e të mesme.',
        seed: 'kucova-biznes',
        date: 'Dje',
        time: '11:10'
    },
    {
        id: 20,
        cat: 'eventi',
        category: 'Evente',
        title: 'Panairi i verës mbledh prodhuesit dhe zejtarët e zonës',
        excerpt: 'Dhjetëra stenda u ngritën në shesh për të promovuar produktet bujqësore dhe punimet artizanale të Kuçovës.',
        seed: 'kucova-panair',
        date: 'Dje',
        time: '17:00'
    },
    {
        id: 21,
        cat: 'eventi',
        category: 'Evente',
        title: 'Nata e muzikës në sheshin e qytetit, koncert për të gjitha moshat',
        excerpt: 'Bandat lokale dhe artistët e ftuar do të performojnë deri vonë natën, në mbyllje të festivalit të verës.',
        seed: 'kucova-koncert',
        date: 'Dje',
        time: '20:30',
        video: SAMPLE_VIDEOS[3],
        videoPoster: VIDEO_POSTERS[2]
    },
    {
        id: 22,
        cat: 'eventi',
        category: 'Evente',
        title: 'Ekspozita kushtuar historisë 100-vjeçare të naftës në Kuçovë',
        excerpt: 'Arkivi i qytetit hap ekspozitën me fotografi dhe dokumente nga fillimet e industrisë së naftës në vitin 1928.',
        seed: 'kucova-ekspozite',
        date: 'Dje',
        time: '12:00'
    },
    {
        id: 23,
        cat: 'altre',
        category: 'Arsim',
        title: 'Shkolla e mesme "Naftëtari" rinovohet, investim në laboratorë të rinj',
        excerpt: 'Hapësirat e reja do të shërbejnë për lëndët shkencore dhe informatike për qindra nxënës të qytetit.',
        seed: 'kucova-shkolle',
        date: 'Dje',
        time: '10:45'
    },
    {
        id: 24,
        cat: 'altre',
        category: 'Turizëm',
        title: 'Turizmi rural në rritje, vizitorët zbulojnë fshatrat përreth Kuçovës',
        excerpt: 'Gjithnjë e më shumë vizitorë zgjedhin të njohin natyrën, kuzhinën dhe mikpritjen e fshatrave të zonës.',
        seed: 'kucova-turizem',
        date: 'Dje',
        time: '09:30'
    },
    {
        id: 25,
        cat: 'altre',
        category: 'Shërbime',
        title: 'Një ditë me ndërprerje uji, bashkia: "Rrjeti i ri do ta zgjidhë problemin"',
        excerpt: 'Punimet e planifikuara shkaktuan ndërprerje të përkohshme, ndërsa bashkia kërkon mirëkuptim nga qytetarët.',
        seed: 'kucova-pune',
        date: 'Dje',
        time: '08:00'
    },
    {
        id: 26,
        cat: 'latest',
        category: 'Lajm i fundit',
        title: 'Kuçova në fokus: punimet e reja dhe zhvillimet e ditës',
        excerpt: 'Redaksia po ndjek nga afër punimet e nisura në qytet dhe do t\'ju mbajë të informuar në vazhdimësi.',
        seed: 'latest-start-1',
        date: 'Sot',
        time: '09:00',
        live: true
    },
    {
        id: 27,
        cat: 'latest',
        category: 'Lajm i fundit',
        title: 'Takim i rëndësishëm në bashkinë e Kuçovës, priten njoftime të reja',
        excerpt: 'Autoritetet lokale pritet të dalin me një qëndrim zyrtar pas takimit të sotëm.',
        seed: 'latest-start-2',
        date: 'Sot',
        time: '11:30',
        live: true
    },
    {
        id: 28,
        cat: 'latest',
        category: 'Lajm i fundit',
        title: 'Lajm i shpejtë: situata në qendër të qytetit, po ndiqet nga afër',
        excerpt: 'KuçovaToday sjell detajet e reja sapo ato konfirmohen. Qëndroni të sintonizuar për përditësimet.',
        seed: 'latest-start-3',
        date: 'Sot',
        time: '13:45',
        live: true
    }
];

// ===== Gjenerator i lajmeve në kohë reale (simuluar) =====
const templates = [
    { cat: 'kronika', category: 'Kronikë', title: (p) => `${p.focus} në vëmendje: forcat e rendit zhvillojnë një operacion të befasishëm në qytet`, excerpt: (p) => `Një aksion i koordinuar u zhvillua gjatë orëve të mëngjesit. Zyrtarët pritet të japin detaje të reja gjatë ditës.` },
    { cat: 'kronika', category: 'Kronikë', title: (p) => `Zjarri në një banesë në ${p.zone}, zjarrfikësit ndërhyjnë menjëherë`, excerpt: (p) => `Forcat e zjarrfikësve të Kuçovës u mobilizuan me shpejtësi. Nuk raportohen të lënduar.` },
    { cat: 'sport', category: 'Sport', title: (p) => `Naftëtari përgatitet për sfidën kundër ${p.rival}, mungon një titullar`, excerpt: (p) => `Stafi teknik ka përcaktuar planin e ndeshjes së fundit të vitit. Tifozët pritet të mbushin stadiumin.` },
    { cat: 'sport', category: 'Sport', title: (p) => `Fitorja historike e ${p.rival2}, festa në qytetin e naftës`, excerpt: (p) => `Një rezultat i papritur emocionoi sportdashësit vendas. Delegacioni u prit në shesh me nderime.` },
    { cat: 'politika', category: 'Politikë', title: (p) => `Bashkia njofton projektin e ri për ${p.zone}, vlera investimit rritet`, excerpt: (p) => `Autoritetet lokale paraqitën planin final, që pritet të nisë punimet brenda muajit të ardhshëm.` },
    { cat: 'politika', category: 'Politikë', title: (p) => `Këshilli bashkiak diskuton paketën e re të ndihmave për ${p.focus}`, excerpt: (p) => `Në seancën e sotme u shqyrtuan masat mbështetëse dhe prioritetet për buxhetin e vitit të ardhshëm.` },
    { cat: 'ekonomia', category: 'Ekonomi', title: (p) => `Çmimet e produkteve bazë në ${p.zone}, çka thonë tregtarët`, excerpt: (p) => `Tregjet lokale pasqyrojnë lëvizjet e fundit të çmimeve. Konsumatorët kërkojnë stabilitet.` },
    { cat: 'ekonomia', category: 'Ekonomi', title: (p) => `Investim i ri në ${p.focus}, do të hapen vende të reja pune në Kuçovë`, excerpt: (p) => `Kompania private njoftoi zgjerimin e aktivitetit, duke premtuar mbështetje për fuqinë punëtore vendase.` },
    { cat: 'eventi', category: 'Evente', title: (p) => `Koncerti i fundjavës mbledh mijëra njerëz në sheshin e ${p.zone}`, excerpt: (p) => `Mbrëmja muzikore vijoi deri në orët e vona me artistë të njohur të skenës shqiptare.` },
    { cat: 'eventi', category: 'Evente', title: (p) => `Kuzhina e ${p.zone}, festivali i shijeve tërheq vizitorë nga i gjithë vendi`, excerpt: (p) => `Prodhuesit lokalë ekspozuan produktet tradicionale në një atmosferë festive pranverore.` },
    { cat: 'altre', category: 'Arsim', title: (p) => `Nxënësit e ${p.zone} fitojnë garën kombëtare, bashkia i nderon`, excerpt: (p) => `Një sukses i madh për shkollat e qytetit, që u prit me entuziazëm nga e gjithë komuniteti.` },
    { cat: 'altre', category: 'Shërbime', title: (p) => `Njoftim për ${p.focus}: punime të planifikuara gjatë ditës së nesërme`, excerpt: (p) => `Bashkia kërkon mirëkuptim nga qytetarët për ndërprerjet e përkohshme të shërbimeve.` }
];

const categories = ['Kronikë', 'Sport', 'Politikë', 'Ekonomi', 'Evente'];
const places = ['qendrës së qytetit', 'zonës së naftës', 'lagjes së re', 'periferisë', 'stadiumit', 'sheshit qendror', 'parkut të qytetit'];
const topics = ['infrastrukturën', 'transportin publik', 'ndriçimin', 'shërbimet e ujit', 'turizmin', 'arsimin', 'shëndetësinë'];
const rivals = ['Pobedit', 'Sopotit', 'Ballshi', 'Lushnjës', 'Gramshit', 'Cërrikut'];

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
        zone: pick(places),
        focus: pick(topics),
        rival: pick(rivals),
        rival2: pick(rivals)
    };
    const hasVideo = Math.random() < 0.4;
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
        ...(hasVideo ? { video: pick(SAMPLE_VIDEOS), videoPoster: pick(VIDEO_POSTERS) } : {})
    };
}

// ===== Lajmet e fundit (azhornohen çdo 5 minuta) =====
const latestTitles = (p) => [
    `Kuçova në fokus: ${p.focus}, zhvillimet më të fundit`,
    `Përditësim: situata në ${p.zone} sa më vonë gjatë ditës`,
    `Tik-tak në ${p.zone}, çfarë po ndodh tani në qytetin e naftës`,
    `Lajm i shpejtë nga ${p.zone}: reagimi i parë i bashkisë`,
    `Në vijim: ecuria e ${p.focus} në Kuçovë`,
    `Flash: takim i rëndësishëm në bashkinë e Kuçovës për ${p.focus}`
];

const latestExcerpts = (p) => [
    `Redaksia po ndjek nga afër zhvillimet e fundit në lidhje me ${p.focus} dhe do t'ju mbajë të informuar në vazhdimësi.`,
    `KuçovaToday sjell detajet e reja sapo ato konfirmohen. Qëndroni të sintonizuar për përditësimet në vijim.`,
    `Të dhënat e fundit tregojnë një interes në rritje për ${p.focus} në të gjithë qytetin. Më shumë informacion së shpejti.`,
    `Një zhvillim i ri pritet gjatë orëve të ardhshme. Redaksia jonë është në terren për të mbledhur detajet e plota.`,
    `Bashkia e Kuçovës njofton se do të dalë me një qëndrim zyrtar pas përfundimit të takimit të sotëm.`
];

function generateLatestArticle(articles) {
    const p = {
        zone: pick(places),
        focus: pick(topics)
    };
    return {
        id: newId(articles),
        cat: 'latest',
        category: 'Lajm i fundit',
        title: pick(latestTitles(p)),
        excerpt: pick(latestExcerpts(p)),
        seed: `latest-${Date.now()}-${Math.floor(Math.random() * 9999)}`,
        date: 'Sot',
        time: nowTime(),
        live: true
    };
}

module.exports = { seedArticles, SAMPLE_VIDEOS, VIDEO_POSTERS, generateArticle, generateLatestArticle };
