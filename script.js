document.addEventListener('DOMContentLoaded', () => {
    // Data stored as a single string, each pair separated by a newline
    const rawData = `Alice:https://example.com/alice
Pestily:https://www.twitch.tv/pestily
RTAinJapan:https://www.twitch.tv/rtainjapan
k4sen:https://www.twitch.tv/k4sen
fps_shaka:https://www.twitch.tv/fps_shaka
BattlestateGames:https://www.twitch.tv/battlestategames
elxokas:https://www.twitch.tv/elxokas
Papaplatte:https://www.twitch.tv/papaplatte
らっだぁ (raderaderader):https://www.twitch.tv/raderaderader
Nmplol:https://www.twitch.tv/nmplol
dawad11784:https://www.twitch.tv/dawad11784
랄로 (aba4647):https://www.twitch.tv/aba4647
叶ちゃんねる (kanae_2434):https://www.twitch.tv/kanae_2434
NoWay4u_Sir:https://www.twitch.tv/noway4u_sir
Shlorox:https://www.twitch.tv/shlorox
eliasn97:https://www.twitch.tv/eliasn97
Thebausffs:https://www.twitch.tv/thebausffs
Gaules:https://www.twitch.tv/gaules
Jasper7se:https://www.twitch.tv/jasper7se
Nix:https://www.twitch.tv/nix
Danila_Gorilla:https://www.twitch.tv/danila_gorilla
羅傑 (roger9527):https://www.twitch.tv/roger9527
maumauzk_ofc:https://www.twitch.tv/maumauzk_ofc
Gorgc:https://www.twitch.tv/gorgc
Quin69:https://www.twitch.tv/quin69
ow_uruca:https://www.twitch.tv/ow_uruca
Elajjaz:https://www.twitch.tv/elajjaz
아야츠노_유니 (ayatsunoyuni_stellive):https://www.twitch.tv/ayatsunoyuni_stellive
PirateSoftware:https://www.twitch.tv/piratesoftware
sweetdreams:https://www.twitch.tv/sweetdreams
Kamito_JP:https://www.twitch.tv/kamito_jp
arivumani8:https://www.twitch.tv/arivumani8
GUACAMOLEMOLLY:https://www.twitch.tv/guacamolemolly
LetsHugoTV:https://www.twitch.tv/letshugotv
lngliveofficial:https://www.twitch.tv/lngliveofficial
Caedrel:https://www.twitch.tv/caedrel
mazellovvv:https://www.twitch.tv/mazellovvv
s0mcs:https://www.twitch.tv/s0mcs
shadowkekw:https://www.twitch.tv/shadowkekw
KmSenKangoo:https://www.twitch.tv/kmsenkangoo
Axel_tv:https://www.twitch.tv/axel_tv
skywhywalker:https://www.twitch.tv/skywhywalker
PurpleBixi:https://www.twitch.tv/purplebixi
B_KOMHATE:https://www.twitch.tv/b_komhate
Jolygolf:https://www.twitch.tv/jolygolf
QuickyBaby:https://www.twitch.tv/quickybaby
서새봄냥 (saddummy):https://www.twitch.tv/saddummy
ohnePixel:https://www.twitch.tv/ohnepixel
괴물쥐123 (tmxk319):https://www.twitch.tv/tmxk319
HortyUnderscore:https://www.twitch.tv/hortyunderscore
VEGETTA777:https://www.twitch.tv/vegetta777
赤見かるび (akamikarubi):https://www.twitch.tv/akamikarubi
AnnaCramling:https://www.twitch.tv/annacramling
vedal987:https://www.twitch.tv/vedal987
YoDa:https://www.twitch.tv/yoda
setsuko:https://www.twitch.tv/setsuko
CasinoSalih:https://www.twitch.tv/casinosalih
Xari:https://www.twitch.tv/xari
2okos:https://www.twitch.tv/2okos
sasavot:https://www.twitch.tv/sasavot
ラプラスダークネス総帥 (laplusdarknesss_hololive):https://www.twitch.tv/laplusdarknesss_hololive
풍월량 (hanryang1125):https://www.twitch.tv/hanryang1125
qojqva:https://www.twitch.tv/qojqva
TeePee:https://www.twitch.tv/teepee
YassEncore:https://www.twitch.tv/yassencore
AdmiralBahroo:https://www.twitch.tv/admiralbahroo
DragonBallZTV0:https://www.twitch.tv/dragonballztv0
Recrent:https://www.twitch.tv/recrent
Stintik:https://www.twitch.tv/stintik
Levo:https://www.twitch.tv/levo
Mortdog:https://www.twitch.tv/mortdog
skill4ltu:https://www.twitch.tv/skill4ltu
RduLIVE:https://www.twitch.tv/rdulive
fifakillvizualz:https://www.twitch.tv/fifakillvizualz
wtcN:https://www.twitch.tv/wtcn
Nissaxter:https://www.twitch.tv/nissaxter
WELOVEGAMES:https://www.twitch.tv/welovegames
bysTaXx:https://www.twitch.tv/bystaxx
Tigz:https://www.twitch.tv/tigz
Popo:https://www.twitch.tv/popo
艾怡 (irissiri129):https://www.twitch.tv/irissiri129
mondo2244:https://www.twitch.tv/mondo2244
Tectone:https://www.twitch.tv/tectone
restiafps:https://www.twitch.tv/restiafps
parisplatynov:https://www.twitch.tv/parisplatynov
melina:https://www.twitch.tv/melina
Aenot:https://www.twitch.tv/aenot
AuzioMF:https://www.twitch.tv/auziomf
Drututt:https://www.twitch.tv/drututt
Faide:https://www.twitch.tv/faide
KSPKSP:https://www.twitch.tv/kspksp
柊ツルギ (hiiragitsurugi):https://www.twitch.tv/hiiragitsurugi
Waolol1:https://www.twitch.tv/waolol1
世誠 (bbbb87):https://www.twitch.tv/bbbb87
씨랙 (crackbabe):https://www.twitch.tv/crackbabe
dahmien7:https://www.twitch.tv/dahmien7
Dhalucard:https://www.twitch.tv/dhalucard
JokerdTV:https://www.twitch.tv/jokerdtv
BlackUFA:https://www.twitch.tv/blackufa
elBokeron:https://www.twitch.tv/elbokeron
Kyle:https://www.twitch.tv/kyle
湯米 (chen810830):https://www.twitch.tv/chen810830
dakotaz:https://www.twitch.tv/dakotaz
Zentreya:https://www.twitch.tv/zentreya
MissMikkaa:https://www.twitch.tv/missmikkaa
Lysium:https://www.twitch.tv/lysium
alexelcapo:https://www.twitch.tv/alexelcapo
Taylor_Jevaux:https://www.twitch.tv/taylor_jevaux
dannyaarons:https://www.twitch.tv/dannyaarons
김도 (kimdoe):https://www.twitch.tv/kimdoe
ElZeein:https://www.twitch.tv/elzeein
dasMEHDI:https://www.twitch.tv/dasmehdi
Trey24k:https://www.twitch.tv/trey24k
Otzdarva:https://www.twitch.tv/otzdarva
4HEAD:https://www.twitch.tv/4head
singsing:https://www.twitch.tv/singsing
mrbluwu:https://www.twitch.tv/mrbluwu
Guzu:https://www.twitch.tv/guzu
Mande:https://www.twitch.tv/mande
cacho01:https://www.twitch.tv/cacho01
fnmoneymaker:https://www.twitch.tv/fnmoneymaker
踢虧 (takesipon):https://www.twitch.tv/takesipon
Trafficante:https://www.twitch.tv/trafficante
RealzBlueWater:https://www.twitch.tv/realzbluewater
Lazvell:https://www.twitch.tv/lazvell
Mylonzete:https://www.twitch.tv/mylonzete
Steelmage:https://www.twitch.tv/steelmage
REVENANT:https://www.twitch.tv/revenant
dishsoaptft:https://www.twitch.tv/dishsoaptft
melharucos:https://www.twitch.tv/melharucos
cs_high_:https://www.twitch.tv/cs_high_
Glorious_E:https://www.twitch.tv/glorious_e
Beardageddon:https://www.twitch.tv/beardageddon
deepins02:https://www.twitch.tv/deepins02
Cohh:https://www.twitch.tv/cohh
是喬希啊 (josie5297):https://www.twitch.tv/josie5297
HisWattson:https://www.twitch.tv/hiswattson
GernaderJake:https://www.twitch.tv/gernaderjake
Dakillzor:https://www.twitch.tv/dakillzor
pizfn:https://www.twitch.tv/pizfn
BarbarousKing:https://www.twitch.tv/barbarousking
스틸로 (steelohs):https://www.twitch.tv/steelohs
chessbrah:https://www.twitch.tv/chessbrah
Uzra:https://www.twitch.tv/uzra
Vicens:https://www.twitch.tv/vicens
TheGuill84:https://www.twitch.tv/theguill84
ImSoFresh:https://www.twitch.tv/imsofresh
Dantes:https://www.twitch.tv/dantes
島ゴリ (gorirashima):https://www.twitch.tv/gorirashima
WillerZ:https://www.twitch.tv/willerz
세아스토리 (sea_vtuber):https://www.twitch.tv/sea_vtuber
烟花蹦蹦蹦 (hennie2001):https://www.twitch.tv/hennie2001
Wardiii:https://www.twitch.tv/wardiii
HutchMF:https://www.twitch.tv/hutchmf
Welyn:https://www.twitch.tv/welyn
Pelegrino1993:https://www.twitch.tv/pelegrino1993
clutch_fii:https://www.twitch.tv/clutch_fii
西南69 (kr1stw):https://www.twitch.tv/kr1stw
Subroza:https://www.twitch.tv/subroza
天鬼ぷるる (amakipururu):https://www.twitch.tv/amakipururu
Willyrex:https://www.twitch.tv/willyrex
caradechiste:https://www.twitch.tv/caradechiste
HellYeahPlay:https://www.twitch.tv/hellyeahplay
ungespielt:https://www.twitch.tv/ungespielt
Jinnytty:https://www.twitch.tv/jinnytty
DansGaming:https://www.twitch.tv/dansgaming
kinapoppo:https://www.twitch.tv/kinapoppo
たここちゃん (takoko_vtuber):https://www.twitch.tv/takoko_vtuber
Sintica:https://www.twitch.tv/sintica
ojwhd:https://www.twitch.tv/ojwhd
阿津 (kamiyu666):https://www.twitch.tv/kamiyu666
renatko:https://www.twitch.tv/renatko
Skuuii:https://www.twitch.tv/skuuii
pathofexilebota:https://www.twitch.tv/pathofexilebota
SirMaza:https://www.twitch.tv/sirmaza
VALORANT_TUR:https://www.twitch.tv/valorant_tur
Olesha:https://www.twitch.tv/olesha
Juice:https://www.twitch.tv/juice
バル子 (barukodayo):https://www.twitch.tv/barukodayo
benjyfishy:https://www.twitch.tv/benjyfishy
RybsonLoL_:https://www.twitch.tv/rybsonlol_
Zizaran:https://www.twitch.tv/zizaran
SpartanTV:https://www.twitch.tv/spartantv
Mixwell:https://www.twitch.tv/mixwell
Vader:https://www.twitch.tv/vader
FifaTargrean:https://www.twitch.tv/fifatargrean
番田長助 (banda_chosuke):https://www.twitch.tv/banda_chosuke
Onutrem:https://www.twitch.tv/onutrem
KDRkitten:https://www.twitch.tv/kdrkitten
shanks_ttv:https://www.twitch.tv/shanks_ttv
HeatoNcs:https://www.twitch.tv/heatoncs
HaiseT:https://www.twitch.tv/haiset
Dunduk:https://www.twitch.tv/dunduk
Shotz:https://www.twitch.tv/shotz
boomboom_325:https://www.twitch.tv/boomboom_325
Tolkin:https://www.twitch.tv/tolkin
Lyasyaa:https://www.twitch.tv/lyasyaa
견자희 (wkgml):https://www.twitch.tv/wkgml
にしのん (2_nsnn_4):https://www.twitch.tv/2_nsnn_4
Aiekillu:https://www.twitch.tv/aiekillu
蝦愛橘子 (shuteye_orange):https://www.twitch.tv/shuteye_orange
yeTz:https://www.twitch.tv/yetz
Klean:https://www.twitch.tv/klean
JenNyan:https://www.twitch.tv/jennyan
머독 (ajehr):https://www.twitch.tv/ajehr
kyliebitkin:https://www.twitch.tv/kyliebitkin
Mouzakrobat:https://www.twitch.tv/mouzakrobat
Skyyart:https://www.twitch.tv/skyyart
casobesie:https://www.twitch.tv/casobesie
Florryworry:https://www.twitch.tv/florryworry
Deansocool:https://www.twitch.tv/deansocool
DeraJN:https://www.twitch.tv/derajn
MrXavito:https://www.twitch.tv/mrxavito
Sekiam:https://www.twitch.tv/sekiam
피닉스박1 (xkwhd):https://www.twitch.tv/xkwhd
moneymaniaaaa:https://www.twitch.tv/moneymaniaaaa
ZealsAmbitions:https://www.twitch.tv/zealsambitions
takera0628:https://www.twitch.tv/takera0628
ボドカさん (vodkavdk):https://www.twitch.tv/vodkavdk
PSP1G:https://www.twitch.tv/psp1g
DMITRY_BALE:https://www.twitch.tv/dmitry_bale
PapazCasinoTV:https://www.twitch.tv/papazcasinotv
BorasLegend:https://www.twitch.tv/boraslegend
Ayellol:https://www.twitch.tv/ayellol
Meowko:https://www.twitch.tv/meowko
coscu:https://www.twitch.tv/coscu
iLame:https://www.twitch.tv/ilame
sips_:https://www.twitch.tv/sips_
녹두로 (nokduro):https://www.twitch.tv/nokduro
agurin:https://www.twitch.tv/agurin
BranOnline:https://www.twitch.tv/branonline
Gemita:https://www.twitch.tv/gemita
TySlotFatha:https://www.twitch.tv/tyslotfatha
VasSilly:https://www.twitch.tv/vassilly
hJune:https://www.twitch.tv/hjune
Emongg:https://www.twitch.tv/emongg
CasinoDaddy:https://www.twitch.tv/casinodaddy
웁_게임방송 (alenenwooptv):https://www.twitch.tv/alenenwooptv
B0aty:https://www.twitch.tv/b0aty
coldman92:https://www.twitch.tv/coldman92
tamatthi:https://www.twitch.tv/tamatthi
DanucD:https://www.twitch.tv/danucd
Jaxstyle:https://www.twitch.tv/jaxstyle
GronkhTV:https://www.twitch.tv/gronkhtv
kamikpro:https://www.twitch.tv/kamikpro
Sequisha:https://www.twitch.tv/sequisha
GuDDummit:https://www.twitch.tv/guddummit
Pressea:https://www.twitch.tv/pressea
V1nKub:https://www.twitch.tv/v1nkub
SUJAGG:https://www.twitch.tv/sujagg
MarweX:https://www.twitch.tv/marwex
KennyStream:https://www.twitch.tv/kennystream
AlinaRinRin:https://www.twitch.tv/alinarinrin
Sir_Thomas_:https://www.twitch.tv/sir_thomas_
magical:https://www.twitch.tv/magical
김뚜띠_ (kimdduddi):https://www.twitch.tv/kimdduddi
Fandy:https://www.twitch.tv/fandy
mira:https://www.twitch.tv/mira
SoLOVEi_wot:https://www.twitch.tv/solovei_wot
LadyDima:https://www.twitch.tv/ladydima
六希夫 (qttsix):https://www.twitch.tv/qttsix
KnebelTV:https://www.twitch.tv/knebeltv
Ko0416:https://www.twitch.tv/ko0416
FURL3X:https://www.twitch.tv/furl3x
Nidas:https://www.twitch.tv/nidas
SaudieLeagues:https://www.twitch.tv/saudieleagues
gabbidoto:https://www.twitch.tv/gabbidoto
chibidoki:https://www.twitch.tv/chibidoki
AsunaWEEB:https://www.twitch.tv/asunaweeb
연두는말안드뤄 (rudbeckia7):https://www.twitch.tv/rudbeckia7
PUDGAERO:https://www.twitch.tv/pudgaero
TheKller:https://www.twitch.tv/thekller
rainbrain:https://www.twitch.tv/rainbrain
Graycen:https://www.twitch.tv/graycen
Xop0:https://www.twitch.tv/xop0
camila:https://www.twitch.tv/camila
MembTV:https://www.twitch.tv/membtv
Ren0809k:https://www.twitch.tv/ren0809k
ReventXz:https://www.twitch.tv/reventxz
katoo:https://www.twitch.tv/katoo
orkpod:https://www.twitch.tv/orkpod
MykeTV:https://www.twitch.tv/myketv
anarabdullaev:https://www.twitch.tv/anarabdullaev
jeensoff:https://www.twitch.tv/jeensoff
Knut:https://www.twitch.tv/knut
Oilrats:https://www.twitch.tv/oilrats
silizvlive:https://www.twitch.tv/silizvlive
rhobalas_lol:https://www.twitch.tv/rhobalas_lol
NoctisAK47:https://www.twitch.tv/noctisak47
Wolfabelle:https://www.twitch.tv/wolfabelle
evaanna:https://www.twitch.tv/evaanna
perrababy:https://www.twitch.tv/perrababy
SolaryHS:https://www.twitch.tv/solaryhs
meduska:https://www.twitch.tv/meduska
spicyuuu:https://www.twitch.tv/spicyuuu
Slayproxx:https://www.twitch.tv/slayproxx
渋谷ハル (shibuyahal):https://www.twitch.tv/shibuyahal
SmexysYT:https://www.twitch.tv/smexysyt
Sologesang:https://www.twitch.tv/sologesang
AnnieFuchsia:https://www.twitch.tv/anniefuchsia
MOTHER3rd:https://www.twitch.tv/mother3rd
CombatRy:https://www.twitch.tv/combatry
Ralisco:https://www.twitch.tv/ralisco
T2x2:https://www.twitch.tv/t2x2
HobbitEmo:https://www.twitch.tv/hobbitemo
SondergaardLol:https://www.twitch.tv/sondergaardlol
mamabenjyfishy1:https://www.twitch.tv/mamabenjyfishy1
ThatFriendlyGuy:https://www.twitch.tv/thatfriendlyguy
FaroooYT:https://www.twitch.tv/faroooyt
pzzzang3:https://www.twitch.tv/pzzzang3
mesh4444:https://www.twitch.tv/mesh4444
幕末志士 (bakumatsu_shishi):https://www.twitch.tv/bakumatsu_shishi
tarzaned:https://www.twitch.tv/tarzaned
Diables:https://www.twitch.tv/diables
aimbotcalvin:https://www.twitch.tv/aimbotcalvin
CyberRulzTv:https://www.twitch.tv/cyberrulztv
絕世拿鐵 (jazlatte):https://www.twitch.tv/jazlatte
Farfa:https://www.twitch.tv/farfa
LeBouseuh:https://www.twitch.tv/lebouseuh
SieurPC:https://www.twitch.tv/sieurpc
AMUR_GAME:https://www.twitch.tv/amur_game
Saintone:https://www.twitch.tv/saintone
Denims:https://www.twitch.tv/denims
MsTrash:https://www.twitch.tv/mstrash
케인 (kanetv8):https://www.twitch.tv/kanetv8
HeyarTV:https://www.twitch.tv/heyartv
BobRoss:https://www.twitch.tv/bobross
哈瓜哈瓜 (jongie):https://www.twitch.tv/jongie
zarbex:https://www.twitch.tv/zarbex
Zajef77:https://www.twitch.tv/zajef77
fqnta7:https://www.twitch.tv/fqnta7
jarnoopmeer:https://www.twitch.tv/jarnoopmeer
w33haa:https://www.twitch.tv/w33haa
PWGood:https://www.twitch.tv/pwgood
NepentheZ:https://www.twitch.tv/nepenthez
MAZA4KST:https://www.twitch.tv/maza4kst
LAGTVMaximusBlack:https://www.twitch.tv/lagtvmaximusblack
goodoq:https://www.twitch.tv/goodoq
고차비 (kumikomii):https://www.twitch.tv/kumikomii
viviendoenlacalle:https://www.twitch.tv/viviendoenlacalle
10000DAYS:https://www.twitch.tv/10000days
chistor_:https://www.twitch.tv/chistor_
lyric:https://www.twitch.tv/lyric
천양 (chunyangkr):https://www.twitch.tv/chunyangkr
axoskillLIVE:https://www.twitch.tv/axoskilllive
이춘향 (leechunhyang):https://www.twitch.tv/leechunhyang
keyeren:https://www.twitch.tv/keyeren
CYR:https://www.twitch.tv/cyr
allangello:https://www.twitch.tv/allangello
RadiKa1fa:https://www.twitch.tv/radika1fa
IsVolcano:https://www.twitch.tv/isvolcano
m0xyy:https://www.twitch.tv/m0xyy
Savii:https://www.twitch.tv/savii
Spammiej:https://www.twitch.tv/spammiej
CasinoZEBERUS:https://www.twitch.tv/casinozeberus
QAVIVI:https://www.twitch.tv/qavivi
Timmac:https://www.twitch.tv/timmac
knueppelpaste:https://www.twitch.tv/knueppelpaste
tiliaoficial:https://www.twitch.tv/tiliaoficial
MuhanJan:https://www.twitch.tv/muhanjan
BULLSEYE:https://www.twitch.tv/bullseye
Loserfruit:https://www.twitch.tv/loserfruit
Lethalfrag:https://www.twitch.tv/lethalfrag
Crystalst:https://www.twitch.tv/crystalst
littleragergirl:https://www.twitch.tv/littleragergirl
PodaSai:https://www.twitch.tv/podasai
JapanJordi:https://www.twitch.tv/japanjordi
Naguura:https://www.twitch.tv/naguura
whymars7:https://www.twitch.tv/whymars7
eo58:https://www.twitch.tv/eo58
懶貓 (failverde):https://www.twitch.tv/failverde
MAXIMAL_SCHRADIN:https://www.twitch.tv/maximal_schradin
QuattroAce:https://www.twitch.tv/quattroace
MisMagpie:https://www.twitch.tv/mismagpie
M1kyx:https://www.twitch.tv/m1kyx
Zmok:https://www.twitch.tv/zmok
TFToddy:https://www.twitch.tv/tftoddy
Milan926_:https://www.twitch.tv/milan926_
NanniTwitch:https://www.twitch.tv/nannitwitch
Mickalow:https://www.twitch.tv/mickalow
Testree:https://www.twitch.tv/testree
hitsquadgodfather:https://www.twitch.tv/hitsquadgodfather
noahreyli:https://www.twitch.tv/noahreyli
MST3K:https://www.twitch.tv/mst3k
Trixie_Vox:https://www.twitch.tv/trixie_vox
Tanizen:https://www.twitch.tv/tanizen
krnoah7:https://www.twitch.tv/krnoah7
Hens333:https://www.twitch.tv/hens333
Gigz:https://www.twitch.tv/gigz
sunshineliveradio:https://www.twitch.tv/sunshineliveradio
AsianGuyStream:https://www.twitch.tv/asianguystream
13KHANS:https://www.twitch.tv/13khans
Hayz:https://www.twitch.tv/hayz
SmashLunatic:https://www.twitch.tv/smashlunatic
アマル (amal_3rd):https://www.twitch.tv/amal_3rd
IJenz:https://www.twitch.tv/ijenz
Acie:https://www.twitch.tv/acie
AlexCampu4:https://www.twitch.tv/alexcampu4
Punkill:https://www.twitch.tv/punkill
JeelTV:https://www.twitch.tv/jeeltv
JRA10_:https://www.twitch.tv/jra10_
Katie:https://www.twitch.tv/katie
DeMu:https://www.twitch.tv/demu
Jabroni_Mike:https://www.twitch.tv/jabroni_mike
MeYeR:https://www.twitch.tv/meyer
Rumathra:https://www.twitch.tv/rumathra
spicysushi_poe:https://www.twitch.tv/spicysushi_poe
CaptainMyko:https://www.twitch.tv/captainmyko
花芽なずな (nazunakaga):https://www.twitch.tv/nazunakaga
Linkus7:https://www.twitch.tv/linkus7
FiRaMiR_TV:https://www.twitch.tv/firamir_tv
느와르님 (noir1113):https://www.twitch.tv/noir1113
HUNTPremier:https://www.twitch.tv/huntpremier
im_mittiii:https://www.twitch.tv/im_mittiii
POW3R:https://www.twitch.tv/pow3r
lagoda1337:https://www.twitch.tv/lagoda1337
Cinkrofwest:https://www.twitch.tv/cinkrofwest
Arabian_Finesse:https://www.twitch.tv/arabian_finesse
Empyriangaming:https://www.twitch.tv/empyriangaming
kosstochka:https://www.twitch.tv/kosstochka
bekyamon:https://www.twitch.tv/bekyamon
Spraggy:https://www.twitch.tv/spraggy
Viper:https://www.twitch.tv/viper
Linca:https://www.twitch.tv/linca
立花はる (hutoon):https://www.twitch.tv/hutoon
BangballSoybad:https://www.twitch.tv/bangballsoybad
Divi:https://www.twitch.tv/divi
schrodingerLee:https://www.twitch.tv/schrodingerlee
Opat04:https://www.twitch.tv/opat04
Marex:https://www.twitch.tv/marex
JonBams:https://www.twitch.tv/jonbams
yololaryy:https://www.twitch.tv/yololaryy
SheefGG:https://www.twitch.tv/sheefgg
Yann:https://www.twitch.tv/yann
ded1ce:https://www.twitch.tv/ded1ce
Shobek:https://www.twitch.tv/shobek
dasha228play:https://www.twitch.tv/dasha228play
smeefymain:https://www.twitch.tv/smeefymain
しょぼすけ (shobosuke):https://www.twitch.tv/shobosuke
BarbieGirl:https://www.twitch.tv/barbiegirl
FlyGunCZ:https://www.twitch.tv/flyguncz
Letshe:https://www.twitch.tv/letshe
micromads:https://www.twitch.tv/micromads
RaizQT:https://www.twitch.tv/raizqt
BenFruit:https://www.twitch.tv/benfruit
JuicyJohns:https://www.twitch.tv/juicyjohns
Kurolily:https://www.twitch.tv/kurolily
mago2dgod:https://www.twitch.tv/mago2dgod
Camy:https://www.twitch.tv/camy
Laeppa:https://www.twitch.tv/laeppa
Takuu_:https://www.twitch.tv/takuu_
Zeldathon:https://www.twitch.tv/zeldathon
ReneKreher:https://www.twitch.tv/renekreher
Gutfoxx:https://www.twitch.tv/gutfoxx
F1ashko:https://www.twitch.tv/f1ashko
HyperRatTV:https://www.twitch.tv/hyperrattv
Spear_Shot:https://www.twitch.tv/spear_shot
RoyalPhunk:https://www.twitch.tv/royalphunk
RachtaZ:https://www.twitch.tv/rachtaz
日ノ隈らん (ran_hinokuma):https://www.twitch.tv/ran_hinokuma
chowh1:https://www.twitch.tv/chowh1
MrLlamaSC:https://www.twitch.tv/mrllamasc
해기님 (he0901):https://www.twitch.tv/he0901
BairogHaan:https://www.twitch.tv/bairoghaan
itsRyanHiga:https://www.twitch.tv/itsryanhiga
Karni:https://www.twitch.tv/karni
Kage:https://www.twitch.tv/kage
aspiringspike:https://www.twitch.tv/aspiringspike
Coreano:https://www.twitch.tv/coreano
JeremyFrieser:https://www.twitch.tv/jeremyfrieser
D1rectorXGod1:https://www.twitch.tv/d1rectorxgod1
StreamerHouse:https://www.twitch.tv/streamerhouse
Payo:https://www.twitch.tv/payo
Brizz94:https://www.twitch.tv/brizz94
mehdi_scc:https://www.twitch.tv/mehdi_scc
MoMaN:https://www.twitch.tv/moman
Fhlwy:https://www.twitch.tv/fhlwy
김나성 (naseongkim):https://www.twitch.tv/naseongkim
김갠지_ (genzi0315):https://www.twitch.tv/genzi0315
Ecdycis:https://www.twitch.tv/ecdycis
Sereja_GL1n:https://www.twitch.tv/sereja_gl1n
蛇足 (dasoku_aniki):https://www.twitch.tv/dasoku_aniki
虧皮 (krapycoco):https://www.twitch.tv/krapycoco
pinqeu:https://www.twitch.tv/pinqeu
키로1 (tofhdnsakdmatotlwkr3):https://www.twitch.tv/tofhdnsakdmatotlwkr3
Sabaku_no_Sutoriimaa:https://www.twitch.tv/sabaku_no_sutoriimaa
S7ORMyTv:https://www.twitch.tv/s7ormytv
BushCampDad:https://www.twitch.tv/bushcampdad
OficialBarcelloS:https://www.twitch.tv/oficialbarcellos
白波らむね (ramuneshiranami):https://www.twitch.tv/ramuneshiranami
Videoyun:https://www.twitch.tv/videoyun
Toniki:https://www.twitch.tv/toniki
MattEU:https://www.twitch.tv/matteu
Shibuya_Kaho:https://www.twitch.tv/shibuya_kaho
colourhex:https://www.twitch.tv/colourhex
夏色まつりホロライブ (natsuiromatsuri_hololive):https://www.twitch.tv/natsuiromatsuri_hololive
Lexiav:https://www.twitch.tv/lexiav
Westham:https://www.twitch.tv/westham
Ausrastenistmeinhobby:https://www.twitch.tv/ausrastenistmeinhobby
BeamTwitch:https://www.twitch.tv/beamtwitch
Rengawr:https://www.twitch.tv/rengawr
fumimochi:https://www.twitch.tv/fumimochi
JohnBBeta:https://www.twitch.tv/johnbbeta
こるぺん (kolu_pen):https://www.twitch.tv/kolu_pen
Dasnerth:https://www.twitch.tv/dasnerth
Tobii:https://www.twitch.tv/tobii
Bonkol:https://www.twitch.tv/bonkol
Horcus:https://www.twitch.tv/horcus
Llobeti4:https://www.twitch.tv/llobeti4
dinossindgeil:https://www.twitch.tv/dinossindgeil
Leopard:https://www.twitch.tv/leopard
ばるとかいと (baruto_1201):https://www.twitch.tv/baruto_1201
TheNicoleT:https://www.twitch.tv/thenicolet
ColtHavok:https://www.twitch.tv/colthavok
haynetv:https://www.twitch.tv/haynetv
testergerplayercasino:https://www.twitch.tv/testergerplayercasino
YoMax:https://www.twitch.tv/yomax
Westmage:https://www.twitch.tv/westmage
Kalei:https://www.twitch.tv/kalei
PENKO_CHANNEL:https://www.twitch.tv/penko_channel
At0m:https://www.twitch.tv/at0m
playercasinogerslots:https://www.twitch.tv/playercasinogerslots
稻乙緹 (iitifox):https://www.twitch.tv/iitifox
SleDuck:https://www.twitch.tv/sleduck
Raxxanterax:https://www.twitch.tv/raxxanterax
shoozki:https://www.twitch.tv/shoozki
네브짱 (ldy818):https://www.twitch.tv/ldy818
Lege:https://www.twitch.tv/lege
끠끼 (kuiki771):https://www.twitch.tv/kuiki771
Repaz:https://www.twitch.tv/repaz
とおこ (urs_toko):https://www.twitch.tv/urs_toko
Fragnance:https://www.twitch.tv/fragnance
Mictia00:https://www.twitch.tv/mictia00
chigre:https://www.twitch.tv/chigre
Charlie:https://example.com/charlie`; // Add more "name:link" pairs separated by newlines

    // Split the rawData into an array of "name:link" pairs
    const data = rawData.split('\n');

    const searchBox = document.getElementById('search-box');
    const resultsContainer = document.getElementById('results-container');

    searchBox.addEventListener('input', () => {
        const searchText = searchBox.value.toLowerCase();
        const filteredData = data.filter(item => item.toLowerCase().includes(searchText));
        displayResults(filteredData);
    });

    function displayResults(results) {
        resultsContainer.innerHTML = '';
        results.forEach(item => {
            const [name, link] = item.split(':'); // Split the string into name and link
            const linkElement = document.createElement('a');
            linkElement.href = link;
            linkElement.textContent = name;
            linkElement.target = "_blank";
            resultsContainer.appendChild(linkElement);
            resultsContainer.appendChild(document.createElement('br'));
        });
    }

    displayResults(data); // Display all data initially
});
