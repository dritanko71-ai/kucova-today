/* ============================================================
   JetoBukur — Horoskopi i Ditës
   Përkthim në shqip i horoskopit ditor (burimi: italisht)
   ============================================================ */
window.HOROSKOPI_DITES = {
  updated: new Date().toLocaleDateString('sq-AL', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }),
  signs: [
    {
      key: 'dashi',
      name: 'Dashi',
      dates: '21 Mars – 19 Prill',
      symbol: '&#9800;',
      img: 'zodiac/dashi.svg',
      intro: 'Dita vjen me të larta dhe të ulëta. Ndërsa Marsi të shtyn drejt veprimit, Saturni të fton të reflektosh. Gjetja e ekuilibrit mes këtyre dy forcave do të jetë sfida e ditës. Mos u lër të të dekurajojnë vështirësitë; shpirti yt luftarak do të të udhëheqë nëpër momentet e pasigurisë. Dëgjo intuitën.',
      love: 'Venusi të buzëqesh dhe sjell një fllad romantizmi në jetën tënde të dashurisë. Shfrytëzoje këtë energji për t\'iu afruar atij që do, ndoshta duke organizuar një mbrëmje të veçantë. Megjithatë, kujdes të mos e mbytësh tjetrin me vëmendje të tepruar. Ekuilibri do të jetë çelësi për të ruajtur harmoninë.',
      health: 'Saturni mund të ndikojë në mirëqenien tënde fizike, duke sjellë pak lodhje. Mos e nënvlerëso nevojën për pushim dhe përpiqu të shkëputesh nga gjithçka. Një aktivitet i qetë, si një shëtitje në natyrë, mund të të ndihmojë të rifitosh energji dhe qetësi. Mos i kalo kufijtë e tu.',
      work: 'Mërkuri në pozicion të favorshëm të dhuron një mendje të mprehtë dhe të gatshme për të kapur çdo mundësi. Është moment i përshtatshëm për të propozuar ide dhe projekte të reja. Komunikimi do të jetë pika jote e fortë, prandaj shfrytëzoje në maksimum për të përparuar në karrierë. Këmbëngulja dhe kreativiteti do të të çojnë larg.',
      eros: 'Nën ndikimin e Marsit, pasioni yt mund të jetë intensiv, por jo gjithmonë i plotë. Përpiqu të dëgjosh partnerin dhe mos u udhëheq vetëm nga impulsi. Një dialog i hapur mund ta shndërrojë një takim të ftohtë në një përvojë të paharrueshme. Shmang të qenit tepër kërkues dhe lejo veten të relaksohesh.'
    },
    {
      key: 'demi',
      name: 'Demi',
      dates: '20 Prill – 20 Maj',
      symbol: '&#9801;',
      img: 'zodiac/demi.svg',
      intro: 'Me Mërkurin retrograd, mund të ndjesh një konfuzion të caktuar në komunikimet e përditshme. Është e rëndësishme të ruash qetësinë dhe të mos tërhiqesh nga keqkuptimet e mundshme. Kjo është një ditë ku durimi do të jetë aleati yt më i mirë. Përpiqu të mos marrësh vendime të nxituara dhe të reflektosh mbi çdo detaj. Me pak vëmendje, do të arrish të kapërcesh çdo pengesë.',
      love: 'Nën qiellin e sotëm, zemra jote rreh me energjinë e Marsit në aspekt të favorshëm. Do të të përshkojë një valë ndjenjash intensive që të afron thellësisht me partnerin. Është momenti ideal për deklarata dashurie ose për të bërë hapa të rëndësishëm në marrëdhënie. Lëre shpirtin tënd të shprehet me gjithë sinqeritet dhe shijoji plotësisht këto momente bashkimi emocional.',
      health: 'Hëna në katror të fton të kujdesesh për shëndetin tënd. Do të ndjesh pak lodhje që mund të ndikojë në humorin tënd. Përpiqu të marrësh kohë për veten, ndoshta duke iu dedikuar një aktiviteti relaksues si yoga ose një shëtitje në natyrë. Mos i shpërfill sinjalet që të dërgon trupi dhe sigurohu se ke pushim të mjaftueshëm për t\'u rigjeneruar.',
      work: 'Jupiteri të buzëqesh nga qielli yt profesional, duke sjellë mundësi të papritura dhe përfitime në projektet e tua. Do të arrish t\'i përballesh sfidave me vendosmëri dhe inteligjencë, duke marrë njohjen që meriton. Megjithatë, kujdes të mos jesh tepër impulsiv në vendimet e rëndësishme. Dëgjo këshillat e kolegëve të besuar për të shmangur gabime vlerësimi.',
      eros: 'Sot Venusi të vëzhgon me sy kureshtar, duke sjellë momente pasioni të alternuara me heshtje të papritura. Përpiqu të dëgjosh partnerin dhe të përkrahësh dëshirat e ndërsjella. Mos i detyro situatat që mund të rezultojnë të sikletshme ose kundërproduktive. Ky është momenti i duhur për të eksploruar fantazi të reja, por gjithmonë duke respektuar kufijtë e të dyve.'
    },
    {
      key: 'binjaket',
      name: 'Binjakët',
      dates: '21 Maj – 20 Qershor',
      symbol: '&#9802;',
      img: 'zodiac/binjaket.svg',
      intro: 'Hëna në katror mund të sjellë pak konfuzion në emocionet e tua. Është një ditë me të larta e të ulëta, por me adaptueshmërinë tënde të lindur do të arrish të lundrosh mes sfidave. Kujto të mbash këmbët në tokë dhe të mos tërhiqesh nga emocionet e çastit. Kërko ekuilibrin mes mendjes dhe zemrës për ta përballuar ditën me qetësi.',
      love: 'Venusi të buzëqesh sot, duke sjellë një valë romantizmi dhe surprizash të ëmbla. Është momenti ideal për të forcuar lidhjet me partnerin ose, nëse je beqar, për të lejuar veten të magjepsesh nga një takim i ri. Mos lejo që plagët e vjetra të cënojnë aftësinë tënde për të dashur. Hapu ndaj dialogut dhe emocioneve autentike.',
      health: 'Me Mërkurin retrograd, energjia jote mund të jetë në rënie. Këshillohet të shmangësh përpjekjet fizike intensive dhe t\'i lejosh vetes momente relaksi. Meditimi ose një shëtitje në natyrë mund të të ndihmojnë të rifitosh ekuilibrin dhe qetësinë. Mos i shpërfill sinjalet e vogla të trupit që mund të kërkojnë vëmendje.',
      work: 'Sot zgjuarsia jote shkëlqen me dritën e saj! Jupiteri të mbështet, duke të lejuar të kapërcesh me lehtësi pengesat e punës. Është momenti për të ndërmarrë iniciativa të guximshme dhe për të propozuar ide novatore. Kolegët dhe eprorët do ta vlerësojnë vizionin dhe vendosmërinë tënde. Shfrytëzoje në maksimum këtë fazë pozitive.',
      eros: 'Pozicioni i Marsit në qiellin tënd mund të sjellë një tension të papritur. Megjithëse pasioni është i gjallë, ekziston rreziku i keqkuptimeve me partnerin. Të dëgjosh më shumë sesa të flasësh do të jetë çelësi për të ruajtur harmoninë. Mos nxito të arrish në përfundime. Eksploro fantazi të reja, por me kujdesin e duhur.'
    },
    {
      key: 'gaforrja',
      name: 'Gaforrja',
      dates: '21 Qershor – 22 Korrik',
      symbol: '&#9803;',
      img: 'zodiac/gaforrja.svg',
      intro: 'Mërkuri retrograd mund të sjellë disa keqkuptime në komunikimin me ata që të rrethojnë. Ji i qartë dhe i durueshëm, duke shmangur përfundimet e nxituara. Dita kërkon vëmendje ndaj detajeve, por mos e humb fokusin nga pamja e përgjithshme. Pak introspeksion do të të ndihmojë të lundrosh nëpër ujërat e trazuara me mençuri.',
      love: 'Venusi kërcen në qiellin tënd, duke rrezatuar energji pozitive në jetën tënde të dashurisë. Do të ndihesh i frymëzuar të shprehësh ndjenjat e tua në mënyrë krijuese dhe pasionante. Një surprizë romantike mund të jetë pas këndit, duke sjellë me vete momente gëzimi të pastër. Mos ki frikë të tregosh anën tënde më të ndjeshme; do të vlerësohet.',
      health: 'Energjia jote mund të jetë në rënie, duke të bërë të ndihesh pak i rraskapitur. Marsi në katror sugjeron të shmangësh përpjekjet e tepruara dhe të marrësh kohë për veten. Një shëtitje në natyrë ose një banjë e ngrohtë mund të ndihmojë për të rifituar ekuilibrin tënd. Dëgjo trupin tënd dhe mos e tepro.',
      work: 'Jupiteri në trigon sjell një erë mundësish në sektorin tënd të punës. Projektet që dukeshin të ndenjura mund të përparojnë papritur, duke të surprizuar pozitivisht. Intuita jote do të jetë aleati yt më i mirë, prandaj besoje instinktin tënd. Megjithatë, kujdes të mos marrësh vendime të nxituara pa marrë parasysh të gjithë faktorët.',
      eros: 'Sot dëshira jote mund të mos jetë në maksimum, por mos e bëj faj për këtë. Hëna në opozitë të fton të reflektosh mbi mirëqenien tënde të brendshme. Përpiqu të lidhesh me partnerin në një nivel më të thellë, ndoshta përmes një bisede të sinqertë. Pak durim do të sjellë momente të mëdha intimiteti në të ardhmen.'
    },
    {
      key: 'luani',
      name: 'Luani',
      dates: '23 Korrik – 22 Gusht',
      symbol: '&#9804;',
      img: 'zodiac/luani.svg',
      intro: 'Dita paraqitet me të larta dhe të ulëta. Dielli të dhuron një energji jetësore që të shtyn të jetosh çdo moment intensivisht, por Saturni retrograd mund të të çojë të reflektosh mbi zakonet e vjetra. Është një moment i mirë për të rishikuar qëllimet e tua dhe për të planifikuar strategji të reja. Qëndro fleksibël dhe i hapur ndaj ndryshimeve.',
      love: 'Me Diellin që shkëlqen në shenjën tënde, dashuria merr një kthesë të ndritshme dhe të gjallë. Qofsh në çift apo beqar, kjo ditë premton momente kompliciteti dhe pasioni. Megjithatë, Hëna në katror mund të sjellë ndonjë keqkuptim të vogël: ji i hapur dhe i sinqertë për të shmangur keqkuptimet.',
      health: 'Pozicioni i Mërkurit sugjeron t\'i kushtosh vëmendje shëndetit tënd mendor. Pak kohë e dedikuar relaksit mund të jetë pikërisht ajo që të nevojitet për të rifituar ekuilibrin. Shmang aktivitetet shumë stresuese dhe përpiqu të shijosh momente paqeje dhe qetësie. Një libër ose një shëtitje në ajër të hapur mund të jenë ideale.',
      work: 'Shpirti yt i guximshëm dhe pozicioni i favorshëm i Jupiterit të shtyjnë të shkëlqesh në punë. Ky është momenti për të treguar aftësitë e tua dhe për të ndërmarrë iniciativa të guximshme. Energjia jote infektive mund të çojë në rezultate të jashtëzakonshme. Megjithatë, mos harro të dëgjosh edhe sugjerimet e kolegëve.',
      eros: 'Sot yjet të sugjerojnë të eksplorosh horizonte të reja në intimitetin tënd, por kujdes të mos e teprosh. Një qasje më e butë mund të çojë në zbulime të papritura. Venusi, në pozicion harmonik, të ofron gjithsesi një atmosferë magnetike, por Marsi të paralajmëron të mos jesh tepër impulsiv.'
    },
    {
      key: 'virgjerresha',
      name: 'Virgjëresha',
      dates: '23 Gusht – 22 Shtator',
      symbol: '&#9805;',
      img: 'zodiac/virgjerresha.svg',
      intro: 'Hëna e plotë në Ujorin të fton të reflektosh mbi pozicionin tënd në botë, duke të shtyrë të eksplorosh ide dhe perspektiva të reja. Është një periudhë rritjeje personale, ku autenticiteti dhe kërkimi i së vërtetës së brendshme ndërthuren për të të dhënë një vizion më të qartë të rrugës sate. Përqafo ndryshimin me guxim dhe besim, dhe lëre universin të të udhëheqë.',
      love: 'Venusi të buzëqesh me një shkëlqim të rrallë, duke sjellë një fllad ëmbëlsie dhe mirëkuptimi në marrëdhënien tënde. Është momenti ideal për të forcuar lidhjet dhe për t\'u dorëzuar para deklaratave të sinqerta. Nëse je beqar, energjia kozmike të bën të papërmbajtshëm; dikush i veçantë mund të hyjë në jetën tënde, duke kapur zemrën tënde me të njëjtën intensitet si një yll që bie.',
      health: 'Bashkimi mes Jupiterit dhe Saturnit të dhuron një vendosmëri të palëkundur. Energjia jote fizike është e lartë, por kujto të mos e teprosh me aktivitetet intensive. Aventurat e reja në ajër të hapur mund të rezultojnë çuditërisht rigjeneruese. Dëgjo trupin tënd dhe mos harro t\'i lejosh vetes momente relaksi dhe introspeksioni për të ruajtur ekuilibrin e brendshëm.',
      work: 'Mërkuri retrograd ndihet në sektorin tënd profesional, duke sjellë me vete një sërë sfidash komunikimi. Mund të hasësh vështirësi për t\'u bërë i kuptuar nga kolegët, ose vonesa në projektet në vazhdim. Mos u dekurajo: është një periudhë perfekte për të rishikuar strategjitë e tua dhe për të planifikuar me kujdes. Durimi do të jetë aleati yt më i mirë për ta kaluar këtë moment.',
      eros: 'Yjet rreshtohen në mënyrë kurioze në qiellin tënd, duke sugjeruar një ritëm të moderuar në sferën seksuale. Megjithëse pasioni është i pranishëm, mund të gjesh disa pengesa në shprehjen e plotë të dëshirave të tua. Katrori i Marsit tregon nevojën për të komunikuar me partnerin. Mos ki frikë të eksplorosh rrugë të reja, por kujdes të mos e teprosh.'
    },
    {
      key: 'peshorja',
      name: 'Peshorja',
      dates: '23 Shtator – 22 Tetor',
      symbol: '&#9806;',
      img: 'zodiac/peshorja.svg',
      intro: 'Universi kërcen në harmoni dhe ti je në qendër të këtij spektakli madhështor. Ndihesh në ekuilibër me veten dhe me botën që të rrethon. Planetët të buzëqeshin, duke të dhuruar një ndjenjë mirëqenieje që përshkon çdo aspekt të ditës sate. Shfrytëzoje këtë energji për të kultivuar ëndrrat e tua dhe për të lulëzuar mundësi të reja.',
      love: 'Dielli fshihet pas një reje pasigurie dhe marrëdhëniet e tua mund të ndjejnë pasojat. Është një ditë ideale për të reflektuar mbi pritshmëritë e tua në dashuri. Mos lejo që hije të vogla t\'i turbullojnë vizionin e çiftit. Komunikimi i hapur do të jetë çelësi për të shmangur keqkuptimet që mund të rëndojnë si plumb.',
      health: 'Marsi të dhuron një vitalitet të pandalshëm dhe trupi yt përgjigjet me mirënjohje. Është momenti perfekt për t\'u zhytur në aktivitete që rigjallërojnë shpirtin. Një shëtitje në natyrë ose një seancë yoga nën një qiell të kthjellët do të të mbushë me paqe të brendshme dhe do të ripërtërijë shpirtin tënd. Shfrytëzoje këtë energji pozitive për t\'u rigjeneruar.',
      work: 'Saturni hedh një hije sfide në rrugën tënde profesionale. Mund ta gjesh veten përballë detyrave komplekse që vënë në provë vendosmërinë tënde. Mos ki frikë të kërkosh mbështetje nga kolegët. Bashkëpunimi do të jetë çelësi për të kapërcyer pengesat që shfaqen. Ji i durueshëm dhe këmbëngul.',
      eros: 'Sot dëshira jote ndizet si një yll që bie në qiellin e natës. Venusi të mbështjell me një hijeshi të papërmbajtshme, duke premtuar takime që shkëlqejnë nga pasioni. Lëre veten të transportohet nga energjia kozmike dhe zbuloni dimensione të reja intimiteti. Por kujdes të mos i konsumosh shumë shpejt energjitë e tua të dashurisë.'
    },
    {
      key: 'akrepi',
      name: 'Akrepi',
      dates: '23 Tetor – 21 Nëntor',
      symbol: '&#9807;',
      img: 'zodiac/akrepi.svg',
      intro: 'Dita paraqitet si një vallëzim mes dritës dhe hijes. Me Jupiterin që zgjeron horizontet e tua dhe Saturnin që të kthen te realiteti, do të jetë thelbësore të gjesh ekuilibrin. Mund të ndihesh i ndarë mes dëshirës për të eksploruar dhe nevojës për të konsoliduar. Dëgjo zemrën tënde, por mos e lër pas dore arsyen.',
      love: 'Venusi retrograd të shtyn të reflektosh mbi marrëdhëniet e tua. Mund të ndjesh nevojën për të qartësuar keqkuptimet e vjetra. Mos ki frikë të përballesh me diskutime të vështira: do të dalësh më i fortë. Megjithatë, kujdes të mos jesh tepër kritik, pasi rreziku për të lënduar është i lartë. Durimi do të jetë aleati yt.',
      health: 'Ndikimi i Saturnit mund të shkaktojë një rënie energjie. Do të ndjesh nevojën të tërhiqesh dhe të rimbushësh bateritë. Mos i injoro sinjalet e trupit tënd: lejo vetes pushimin e nevojshëm. Një aktivitet krijues ose një shëtitje në natyrë mund të sjellë lehtësimin që kërkon, duke ribalancuar shpirtin tënd.',
      work: 'Mërkuri të ndihmon me qartësi mendore dhe komunikuese. Është momenti ideal për të propozuar ide dhe projekte të reja. Intuita jote do të vlerësohet nga eprorët dhe kolegët, duke sjellë njohje të papritura. Megjithatë, mos u lër të të mbizotërojë ambicia: ruaj ekuilibrin mes inovacionit dhe pragmatizmit.',
      eros: 'Energjia e Marsit të ndez me pasion, duke e kthyer çdo takim në një fishekzjarr. Megjithatë, një Hënë në opozitë mund të krijojë disa tensione. Përpiqu të lundrosh në këto ujëra me takt dhe mirëkuptim, duke shmangur konfliktet e kota. Lëre dëshirën të udhëhiqet jo vetëm nga mishi, por edhe nga emocioni i pastër.'
    },
    {
      key: 'shigjetari',
      name: 'Shigjetari',
      dates: '22 Nëntor – 21 Dhjetor',
      symbol: '&#9808;',
      img: 'zodiac/shigjetari.svg',
      intro: 'Saturni të fton të reflektosh mbi prioritetet e tua dhe të vlerësosh zgjedhjet që ke bërë deri tani. Është koha e bilanceve dhe e marrjes së vendimeve që mund të ndikojnë në të ardhmen tënde. Mos u lër të të rrëzojnë dyshimet: introspeksioni do të të udhëheqë drejt qartësisë. Pak kaos fillestar mund të shndërrohet në një rend të ripërtërirë e më të mirë.',
      love: 'Jupiteri zgjeron zemrën tënde dhe të bën më të hapur ndaj dashurisë. Është një ditë e favorshme për të forcuar lidhjet ekzistuese ose për të nisur një histori të re. Sinqeriteti dhe gëzimi yt natyral do të tërheqin vëmendje pozitive. Megjithatë, kujdes të mos e anashkalosh partnerin në kërkim të lirisë: ndaj me të momentet më të bukura.',
      health: 'Energjia jote është e lartë, falë Jupiterit në aspekt të favorshëm. Është momenti ideal për aktivitete në natyrë, sport ose udhëtime të shkurtra që ripërtërijnë trupin dhe mendjen. Kujdes vetëm me teprimet: mbaj një ritëm të qëndrueshëm dhe dëgjo sinjalet e lodhjes përpara se të jetë tepër vonë.',
      work: 'Mërkuri të dhuron ide të reja dhe një mendje të shpejtë. Mund të shfaqen mundësi të papritura udhëtimi ose bashkëpunimi që kërkojnë vendosmëri. Shfrytëzoji me entuziazëm, por pa u shpërndarë. Disiplina do t\'i kthejë ëndrrat e tua në projekte konkrete, ndërsa përpjekjet e tua do të vlerësohen nga ata që kanë rëndësi.',
      eros: 'Pasioni sot merr ngjyra aventureske. Ndihesh i lirë dhe i gatshëm të eksperimentosh, duke sjellë freski në jetën tënde intime. Megjithatë, kujdes të mos i keqkuptosh shenjat e partnerit. Komunikoni hapur dëshirat tuaja dhe shijojeni së bashku këtë energji të veçantë, pa harruar respektin dhe ndjeshmërinë reciproke.'
    },
    {
      key: 'bricjapi',
      name: 'Bricjapi',
      dates: '22 Dhjetor – 19 Janar',
      symbol: '&#9809;',
      img: 'zodiac/bricjapi.svg',
      intro: 'Sot mund të ndihesh si një udhëtar në kërkim të rrugës së tij, me qiellin që të ofron edhe sfida edhe mundësi. Neptuni mund të turbullojë ujërat, por nëse dëgjon zërin tënd të brendshëm do të gjesh drejtimin e duhur. Mbaj një qëndrim pozitiv dhe mos u lër të të dekurajojnë pengesat e vogla. Çdo hap të afron më shumë me qëllimet e tua.',
      love: 'Venusi ndodhet në një pozicion të favorshëm, duke sugjeruar një ditë ngrohtësie dhe kompliciteti me partnerin. Yjet të inkurajojnë t\'i shprehësh ndjenjat e tua në mënyrë të qartë dhe të sinqertë. Nëse je beqar, një takim i rastësishëm mund të ndezë një shkëndijë. Mos ki frikë ta hapësh zemrën tënde dhe lëre veten të udhëhiqet nga intuita.',
      health: 'Dielli, në opozitë, mund të sjellë një rënie energjie. Është e rëndësishme të dëgjosh trupin tënd dhe të mos e mbingarkosh me angazhime. Dedikohu kohë vetes, ndoshta me një shëtitje në ajër të hapur ose një meditim. Kujdes me tepricat ushqimore, stomaku yt mund të vuajë. Moderimi do të jetë çelësi.',
      work: 'Mërkuri të mbështet me energjinë e tij, duke e bërë këtë ditë ideale për t\'u përballur me projekte komplekse ose për të marrë vendime të rëndësishme. Mendja jote do të jetë e shkathët dhe e gatshme të kapërcejë pengesat. Kolegët dhe eprorët do të vënë re përkushtimin dhe aftësitë e tua drejtuese. Mos ki frikë të propozosh ide novatore dhe të marrësh iniciativën.',
      eros: 'Hëna sot mund të ndikojë në sensualitetin tënd, duke sjellë një energji të luhatshme. Ekziston një dëshirë e fshehur që mund të dalë në momente të papritura, por kujdes të mos tërhiqesh tepër nga pasionet. Gjej ekuilibrin e duhur mes dëshirës dhe racionalitetit për të jetuar më mirë momentet intime.'
    },
    {
      key: 'ujori',
      name: 'Ujori',
      dates: '20 Janar – 18 Shkurt',
      symbol: '&#9810;',
      img: 'zodiac/ujori.svg',
      intro: 'Me ndikimin e përbashkët të Saturnit dhe Uranit, ndodhesh në një periudhë transformimi të brendshëm. Horizonte të reja hapen para teje, duke të stimuluar të ndryshosh perspektivë. Është momenti për të përqafuar ndryshimin dhe për t\'u lënë udhëhequr nga intuita, pa frikë nga e panjohura. Megjithatë, mos harro të ankorosh në disa siguri, për të mos humbur në vorbullën e mundësive.',
      love: 'Venusi në opozitë të fton të reflektosh mbi dinamikat e marrëdhënies sate. Mund të ndjesh një distancë emocionale, një mjegull që të turbullon zemrën. Mos ki frikë të përballesh me diskutime të thella me partnerin, por shmang t\'i imponosh vizionin tënd. Dialogu i sinqertë do të jetë çelësi për të kaluar retë e përkohshme. Kujto se era ndryshon shpejt.',
      health: 'Me Jupiterin në trigon, shpirti yt është në harmoni të përsosur me kozmosin. Shfrytëzoje këtë fazë për t\'iu dedikuar një aktiviteti që të bën të ndihesh i gjallë dhe plot energji. Mund të zbulosh një hobi të ri ose të rifitosh gëzimin në pasionet e vjetra. Vitaliteti që ndjen të lejon të përballesh me qetësi çdo sfidë fizike, nga trekingu te disiplinat më kërkuese.',
      work: 'Mendja jote është një vorbull idesh, falë ndikimit të Mërkurit. Megjithatë, jo të gjitha mund të priten mirë nga kolegët. Është momenti ideal për të propozuar projekte novatore, por kujdes të mos dukesh tepër revolucionar. Një qasje më diplomatike do të të lejojë të çosh përpara intuitat e tua pa u përplasur me rezistenca të kota.',
      eros: 'Prania e Marsit në shenjën tënde ndez pasionin, duke të çuar të eksplorosh horizonte të reja intimiteti. Energjia jote duket e pasosur dhe ata që të kanë pranë nuk mund të mos vënë re magnetizmin tënd. Megjithatë, kujdes të mos e teprosh, pasi flaka mund të konsumohet shumë shpejt. Dëgjo trupin tënd dhe gjej ekuilibrin.'
    },
    {
      key: 'peshqit',
      name: 'Peshqit',
      dates: '19 Shkurt – 20 Mars',
      symbol: '&#9811;',
      img: 'zodiac/peshqit.svg',
      intro: 'Sot shpirti yt është si një lumë që rrjedh drejt së panjohurës. Ndikimet planetare të shtyjnë të eksplorosh territore të reja, si të brendshme ashtu edhe të jashtme. Megjithatë, mund të ndihesh pak i humbur mes kaq shumë mundësive. Lëre intuitën të të udhëheqë. Yjet të këshillojnë të përqafosh pasigurinë me guxim, pasi çdo hap të afron me zbulimin e të vërtetave të reja.',
      love: 'Saturni të fton të reflektosh mbi marrëdhëniet e tua. Mund të ndjesh një peshë në zemër, sikur emocionet e tua të ishin të bllokuara në një vorbull dyshimesh. Është një ditë për të komunikuar dhe qartësuar, jo për t\'u fshehur. Dëgjo partnerin tënd me vëmendje dhe kujto se dashuria e vërtetë i kapërcen stuhitë. Yjet këshillojnë durim dhe mirëkuptim reciprok.',
      health: 'Me Jupiterin që të buzëqesh me mirëdashje, do të ndihesh plot energji dhe vitalitet. Është momenti perfekt për t\'iu dedikuar aktiviteteve që të apasionojnë: një shëtitje në natyrë, një hobi i ri ose një mbrëmje me miq të dashur. Shëndeti yt mendor dhe fizik do të përfitojë. Lëre universin të të udhëheqë drejt përvojave që ushqejnë shpirtin dhe trupin.',
      work: 'Mërkuri retrograd mund të sjellë disa pengesa ose keqkuptime në punë. Kujdes me detajet dhe komunikimet, të cilat mund të rezultojnë të paqarta. Nuk është momenti për vendime të nxituara. Bëj një pushim, reflekto dhe përpiqu të shmangësh konfliktet me kolegët. Yjet sugjerojnë të ruash qetësinë dhe t\'i përballesh sfidave me diplomaci.',
      eros: 'Hëna sot të pëshpërit premtime intimiteti të gjallë. Do të jesh si baticat që tërhiqen njëra-tjetrën, duke lundruar në një përqafim kozmik. Magnetizmi yt do të jetë i prekshëm dhe pasioni do të duket se rritet me perëndimin e diellit. Mos ki frikë të eksplorosh dëshirat e fshehura. Lëre veten të udhëhiqet nga yjet drejt një udhëtimi sensual që mund të zbulojë shkëndija të reja.'
    }
  ]
};
