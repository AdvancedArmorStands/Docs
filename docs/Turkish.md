---
id: lang-tr
title: Turkish
sidebar_position: 3
---

This is the Turkish language support for AdvancedArmorStands, the file can be found in `~/AdvancedArmorStand/languages/messages-tr.yml`, don't edit the original language file because it resets to default at startup, you can change the language by editing the `language` value in config to the language iso of you choice; for example this one's iso is `tr`


```yml
menu_format: "&7as &8\xbb &7%section%"
actions_menu_title: eylemler
actions_menu_item_lore: "&7Bu, bu armor stand'a\n&7t\u0131klad\u0131\u011f\u0131nda\n\
  &7\u015fu komutun \xe7al\u0131\u015faca\u011f\u0131\n&7anlam\u0131na gelir: %command%\n\
  \n&6\xbb &eD\xfczenlemek i\xe7in t\u0131kla\n&6\xbb &eSilmek i\xe7in Shift + t\u0131\
  kla"
actions_menu_create_name: "&eBir eylem olu\u015ftur"
actions_menu_create_lore: "&7T\u0131kland\u0131\u011f\u0131nda\n&7komut \xe7al\u0131\
  \u015ft\u0131ran bir\n&7eylem olu\u015fturmak i\xe7in bunu se\xe7\n\n&eOlu\u015f\
  turmak i\xe7in t\u0131kla"
actions_creation_message: "&aAyarlamak istedi\u011fin komutu yaz ('/' olmadan). \u0130\
  ptal etmek i\xe7in 'exit' yaz."
actions_settings_menu_title: "eylem ayarlar\u0131"
actions_settings_trigger_name: "&eTetikleme T\xfcr\xfc"
actions_settings_trigger_lore: "&7Oyuncu ArmorStand ile\n&7etkile\u015fime girdi\u011f\
  inde\n&7komutun nas\u0131l tetiklenece\u011fini\n&7se\xe7.\n\n%trigger_list%\n\n\
  &eDe\u011fi\u015ftirmek i\xe7in t\u0131kla"
actions_settings_sender_name: "&eG\xf6nderen"
actions_settings_sender_lore: "&7Komutu kimin g\xf6nderece\u011fini\n&7se\xe7. Bu,\
  \ izinlerin ve\n&7\xe7al\u0131\u015ft\u0131rman\u0131n nas\u0131l i\u015fledi\u011f\
  ini etkiler.\n\n%sender_list%\n\n&eDe\u011fi\u015ftirmek i\xe7in t\u0131kla"
ai_menu_title: "yapay zeka ayarlar\u0131"
ai_command_description: "Yapay zekadan sana yard\u0131m etmesini iste"
ai_command_thinking: "&7D\xfc\u015f\xfcn\xfcyor..."
ai_option_name: "&eYapay Zeka Se\xe7enekleri"
ai_option_enabled_lore: "&7Bu ArmorStand'\u0131n\n&7yapay zekas\u0131yla ilgili\n\
  &7se\xe7enekler.\n\n&eA\xe7mak i\xe7in t\u0131kla"
ai_option_disabled_lore: "&7Yapay zekay\u0131 ArmorStand'lar i\xe7in\n&7API anahtar\u0131\
  n\u0131\n&7config'e girerek etkinle\u015ftir.\n\n&4\u2718 &cEtkin De\u011fil"
ai_settings_memory_lore: "&7Bu ArmorStand'\u0131n yapay zekas\u0131n\u0131n\n&7yan\u0131\
  t verirken uyaca\u011f\u0131\n&7\xf6zel talimatlar ekle.\n\n%current%\n\n&6\xbb\
  \ &eS\u0131f\u0131rlamak i\xe7in Shift + t\u0131kla\n&6\xbb &eDe\u011fi\u015ftirmek\
  \ i\xe7in t\u0131kla"
ai_settings_toggle_lore: "&7Bu ArmorStand i\xe7in\n&7yapay zekay\u0131 a\xe7 veya\
  \ kapat\n\n%ai_status%"
ai_memory_exit_success: "&aHaf\u0131za ayarlama oturumundan ba\u015far\u0131yla \xe7\
  \u0131kt\u0131n."
ai_memory_update_success: "&aArmorStand'\u0131n talimatlar\u0131 ba\u015far\u0131\
  yla g\xfcncellendi"
ai_prefix: "&7[&6\xbb&7] &6"
ai_response_format: "&7[&6\xbb&7] &6%response%"
ai_response_not_found: "Yapay zeka hatas\u0131: yan\u0131tta asistan metni bulunamad\u0131"
ai_error: "&cYapay zeka hatas\u0131: %error%"
ai_error_http: "&cYapay zeka hatas\u0131: HTTP %code%, internete ba\u011fl\u0131 oldu\u011f\
  undan emin ol"
ai_http_error: "Yapay zeka hatas\u0131: HTTP {code}"
ai_http_error_with_internet: "Yapay zeka hatas\u0131: HTTP {code}, internete ba\u011f\
  l\u0131 oldu\u011fundan emin ol"
ai_parse_error: "Yapay zeka ayr\u0131\u015ft\u0131rma hatas\u0131: {error}"
animation_command_description: "Animasyon komutlar\u0131n\u0131 g\xf6sterir"
animation_command_header: "&6&lAdvanced &e&lArmorStands &7&lanimasyon komutlar\u0131"
animation_add_success: "&a%animation% animasyonu ArmorStand %armorstand%'a ba\u015f\
  ar\u0131yla ayarland\u0131"
animation_clear_description: "Bir as'\u0131n &7animasyonlar\u0131n\u0131 temizler"
animation_clear_success: "&a%armorstand%'\u0131n animasyonlar\u0131 ba\u015far\u0131\
  yla temizlendi"
animation_create_description: "&7Bir as ile &7animasyon olu\u015ftur/d\xfczenle"
animation_remove_description: "&7Bir animasyonu tamamen kald\u0131r\u0131r"
animation_remove_success: "&a'%animation%' animasyonu ba\u015far\u0131yla kald\u0131\
  r\u0131ld\u0131"
animation_invalid: "&cGe\xe7ersiz animasyon"
animation_invalid_with_suggestion: "&c'%animation%' ge\xe7ersiz animasyon. '%suggestion%'i\
  \ mi demek istedin?"
animation_invalid_name: "&cGe\xe7ersiz animasyon ad\u0131"
animation_editor_already_has_animation: "&cZaten animasyonu olan bir ArmorStand'da\
  \ edit\xf6r a\xe7\u0131lamaz"
animation_editor_gamemode_changed: "&aD\xfczenleme oturumlar\u0131 ADVENTURE modunu\
  \ desteklemedi\u011fi i\xe7in oyun modun ge\xe7ici olarak CREATIVE'e de\u011fi\u015f\
  tirildi. \xc7\u0131kt\u0131\u011f\u0131nda otomatik olarak eski haline d\xf6necek."
animation_editor_entered: "&aAnimasyon olu\u015fturma/d\xfczenleme oturumuna ba\u015f\
  ar\u0131yla girdin"
animations_menu_successful_creation: "&aAnimasyon ba\u015far\u0131yla kaydedildi,\
  \ bu ArmorStand'a eklemek i\xe7in t\u0131kla"
keyframe_menu_title: "keyframe edit\xf6r\xfc"
keyframe_option_lore: "&eSA\u011e TIK &7Bir keyframe ekle\n&eSHIFT + SA\u011e TIK\
  \ &7Keyframe men\xfcs\xfcn\xfc a\xe7\n\n&8&lAdvancedArmorStands Editor Item"
keyframe_created: '&aKeyframe eklendi!'
keyframe_step_lore: "&7Bu, %animation% animasyonunun\n&7%step%%suffix% ad\u0131m\u0131\
  , s\u0131ras\u0131\n&7geldi\u011finde ArmorStand'\u0131\n&7bu konuma getirecek\n\
  \n&eKald\u0131rmak i\xe7in t\u0131kla"
keyframe_interval_name: "&eAral\u0131k: %interval%"
keyframe_interval_lore: "&7Animasyon kareleri aras\u0131ndaki\n&7gecikmeyi ayarlar.\n\
  &7De\u011fer ne kadar d\xfc\u015f\xfckse\n&7animasyon o kadar h\u0131zl\u0131 olur.\n\
  \n&6\xbb&e Art\u0131rmak i\xe7in sol t\u0131k\n&6\xbb&e Azaltmak i\xe7in sa\u011f\
  \ t\u0131k.\n&6\xbb&e 10'ar 10'ar de\u011fi\u015ftirmek\n&6\xbb&e i\xe7in Shift'e\
  \ bas\u0131l\u0131 tut.\n\n&eDe\u011fi\u015ftirmek i\xe7in t\u0131kla"
keyframe_loop_name: "&eD\xf6ng\xfc: %loop%"
keyframe_loop_lore: "&7Animasyonun ba\u015ftan itibaren\n&7sonsuz d\xf6ng\xfcde tekrarlan\u0131\
  p\n&7tekrarlanmayaca\u011f\u0131n\u0131 belirler\n\n&eDe\u011fi\u015ftirmek i\xe7\
  in t\u0131kla"
save_menu_title: "kay\u0131t men\xfcs\xfc"
save_menu_create_message: "&aOlu\u015fturmak istedi\u011fin t\xfcr\xfcn ad\u0131n\u0131\
  \ yaz, bu ArmorStand'\u0131n \xf6zellikleri oraya kopyalanacak. \xc7\u0131kmak i\xe7\
  in 'exit' yaz"
save_menu_type_lore: "&7Bunu se\xe7mek, eski %type%\n&7config'ini az \xf6nce yapt\u0131\
  \u011f\u0131n\n&7g\xfcncel config ile de\u011fi\u015ftirir\n\n&eKaydetmek i\xe7\
  in t\u0131kla"
save_menu_type_saved: "&aArmorStand'\u0131n \xf6zellikleri '%type%'a kaydedildi"
save_menu_create_type_name: "&eBir t\xfcr olu\u015ftur"
save_menu_create_type_lore: "&7Bu armor stand'\u0131n\n&7\xf6zellikleriyle bir t\xfc\
  r\n&7olu\u015fturmak i\xe7in bunu se\xe7\n\n&eOlu\u015fturmak i\xe7in t\u0131kla"
armor_stand_menu_title: ayarlar
armor_stand_not_loaded: "&cBu ArmorStand y\xfckl\xfc de\u011fil"
armor_stand_invalid: "&cGe\xe7ersiz ArmorStand"
armor_stand_invalid_with_suggestion: "&c'%armorstand%' ge\xe7ersiz ArmorStand. '%suggestion%'\u0131\
  \ mi demek istedin?"
armorstand_not_found: "&cArmorStand bulunamad\u0131!"
world_not_found: "&cD\xfcnya bulunamad\u0131!"
teleported_to_armorstand: "&a%name%'e \u0131\u015f\u0131nland\u0131n"
armorstand_updated_success: "&aArmorStand ba\u015far\u0131yla g\xfcncellendi!"
armorstand_updated_failed: "&cArmorStand g\xfcncellenemedi!"
armorstand_unavailable: "&cArmorStand art\u0131k mevcut de\u011fil!"
armorstand_unavailable_title: "&cArmorStand mevcut de\u011fil"
armorstand_move_success: "&aArmorStand ba\u015far\u0131yla ta\u015f\u0131nd\u0131."
armorstands_not_loaded: "&c%amount% ArmorStand'\u0131n d\xfcnya olu\u015fturucu taraf\u0131\
  ndan y\xfcklenmedi\u011fi g\xf6r\xfcn\xfcyor. Bunu d\xfczeltmek i\xe7in, hepsinin\
  \ otomatik y\xfcklenmesi ad\u0131na config'te 'auto-load-armor-stands'i etkinle\u015f\
  tir."
issues_found_on_join: "&eAdvancedArmorStands bu oturumda %amount% hata/uyar\u0131\
  yla kar\u015f\u0131la\u015ft\u0131. Detaylar i\xe7in log dosyas\u0131n\u0131 kontrol\
  \ et."
armorstand_save_confirm: "&aBu ArmorStand'\u0131 kaydetmek i\xe7in bunu %amount% kez\
  \ daha yap."
armorstand_saved_success: '&eArmorStand %name% olarak kaydedildi!'
armorstand_delete_confirm: "&cBu ArmorStand'\u0131 silmek i\xe7in bunu %amount% kez\
  \ daha yap."
armorstand_deleted_success: "&aArmorStand silindi, ancak restore komutuyla geri getirebilirsin\
  \ ve sunucu yeniden ba\u015flad\u0131\u011f\u0131nda tamamen silinecek"
command_no_permission: '&cBu komutu kullanma iznin yok!'
command_unknown: "&c'%command%' komutu ge\xe7erli bir alt komut de\u011fil."
command_unknown_with_suggestion: "&c'%command%' komutu ge\xe7erli bir alt komut de\u011f\
  il. '%suggestion%'\u0131 mi demek istedin?"
command_help_invalid_page_number: "&cL\xfctfen ge\xe7erli bir sayfa numaras\u0131\
  \ gir."
command_help_invalid_page: "&cGe\xe7ersiz sayfa. L\xfctfen 1 ile %pages% aras\u0131\
  nda bir sayfa se\xe7."
command_usage_hover: "&e\xd6nerilen komutu kullanmak i\xe7in t\u0131kla"
command_examples: "&7\xd6rnekler:"
command_click_to_use: "&e&lBu komutu kullanmak i\xe7in t\u0131kla"
command_label: '&7Komut: &e%command%'
command_description_label: "&7A\xe7\u0131klama: &f%description%"
create_description: "Bir &7ArmorStand olu\u015fturur"
create_custom_usage: "&cKullan\u0131m: /as create custom <name> <part> <x> <y> <z>\
  \ [<part> <x> <y> <z> ...]"
create_invalid_part_number: "&c%part% par\xe7as\u0131 i\xe7in ge\xe7ersiz say\u0131\
  . Kullan\u0131m: <part> <x> <y> <z>"
create_unknown_part: "&cBilinmeyen par\xe7a: %part%"
delete_description: Bir &7ArmorStand siler
delete_all_success: "&aT\xfcm ArmorStand'lar ba\u015far\u0131yla silindi"
delete_success: '&aArmorStand tamamen silindi'
debug_description: "Debug bilgilerini g\xf6sterir"
head_description: "Bir oyuncunun kafas\u0131n\u0131 al"
head_success: "&aSana %player%'\u0131n kafas\u0131 verildi"
list_description: "ArmorStand'lar\u0131n listesini g\xf6sterir"
list_empty_title: "&c&l     Kay\u0131tl\u0131 ArmorStand Bulunamad\u0131 "
list_empty_hint: "&7\u0130lk ArmorStand'\u0131n\u0131 olu\u015fturmak i\xe7in &e/as\
  \ create <type> <name>&7 komutunu kullan!"
load_description: "Bir ArmorStand y\xfckler"
load_no_unloaded: "&eY\xfcklenmemi\u015f ArmorStand bulunamad\u0131."
load_failed: "&cBa\u015far\u0131s\u0131z: %failed%"
move_description: "Bir ArmorStand'\u0131 senin &7konumuna ta\u015f\u0131r"
options_description: "Se\xe7enekler men\xfcs\xfcn\xfc a\xe7ar"
reload_description: "Eklentinin config'lerini yeniden y\xfckler"
reload_success: "&aAdvancedArmorStand'\u0131n config'i ba\u015far\u0131yla yeniden\
  \ y\xfcklendi"
reload_error: "&cEklenti yeniden y\xfcklenirken hata olu\u015ftu, detaylar i\xe7in\
  \ konsolu kontrol et"
rename_description: "Bir &7as'\u0131n ad\u0131n\u0131 de\u011fi\u015ftirir"
rename_success: "&aArmorStand '%old_name%'den '%new_name%'e yeniden adland\u0131r\u0131\
  ld\u0131"
restore_description: "Silinmi\u015f bir ArmorStand'\u0131 geri getirir"
restore_not_deleted: "&cBu ArmorStand silinmemi\u015f ya da \xe7ok ge\xe7 kal\u0131\
  nd\u0131"
restore_unknown_error: "&cBilinmeyen hata, daha fazla bilgi i\xe7in konsolu kontrol\
  \ et"
restore_success: "&aArmorStand ba\u015far\u0131yla geri getirildi"
teleport_not_on_ground: "&cBu ArmorStand yerde durmuyor. Yine de ona \u0131\u015f\u0131\
  nlanmak istedi\u011finden emin misin?"
teleport_force_hint: "&cZorla \u0131\u015f\u0131nlanmak i\xe7in '/as teleport %armorstand%\
  \ --force' komutunu kullan"
tell_description: "Bir ArmorStand'\u0131n yapay zekas\u0131na soru sor"
tell_ai_disabled: "&cBu ArmorStand'\u0131n yapay zekas\u0131 etkin de\u011fil"
inventory_exit_name: "&7\xbb &c\xc7IKI\u015e&7 (Sa\u011f T\u0131k)"
inventory_exit_lore: |2-

  &8&oAdvancedArmorStands Editor Item
inventory_enter_session: "&aD\xfczenleme oturumuna girdin, geri d\xf6nmek ve e\u015f\
  yalar\u0131n\u0131 geri almak i\xe7in \xc7IKI\u015e e\u015fyas\u0131na t\u0131kla"
editor_exit_name: "&7\xbb &c\xc7IKI\u015e &7(Sa\u011f T\u0131k)"
editor_exit_lore: |2-

  &8AdvancedArmorStands Editor Item
head_item_lore: "&eSA\u011e TIK &8\xbb &7Kafay\u0131 sa\u011fa d\xf6nd\xfcr\n&eSOL\
  \ TIK &8\xbb &7Kafay\u0131 sola d\xf6nd\xfcr\n&eSHIFT + SA\u011e TIK &8\xbb &7Kafay\u0131\
  \ yukar\u0131 kald\u0131r\n&eSHIFT + SOL TIK &8\xbb &7Kafay\u0131 a\u015fa\u011f\
  \u0131 indir\n\n&8&oAdvancedArmorStands Editor Item"
left_hand_item_lore: "&eSA\u011e TIK &8\xbb &7Sol eli sa\u011fa d\xf6nd\xfcr\n&eSOL\
  \ TIK &8\xbb &7Sol eli sola d\xf6nd\xfcr\n&eSHIFT + SA\u011e TIK &8\xbb &7Sol kolu\
  \ yukar\u0131 kald\u0131r\n&eSHIFT + SOL TIK &8\xbb &7Sol kolu a\u015fa\u011f\u0131\
  \ indir\n\n&8&oAdvancedArmorStands Editor Item"
right_hand_item_lore: "&eSA\u011e TIK &8\xbb &7Sa\u011f eli sa\u011fa d\xf6nd\xfc\
  r\n&eSOL TIK &8\xbb &7Sa\u011f eli sola d\xf6nd\xfcr\n&eSHIFT + SA\u011e TIK &8\xbb\
  \ &7Sa\u011f kolu yukar\u0131 kald\u0131r\n&eSHIFT + SOL TIK &8\xbb &7Sol kolu a\u015f\
  a\u011f\u0131 indir\n\n&8&oAdvancedArmorStands Editor Item"
left_leg_item_lore: "&eSA\u011e TIK &8\xbb &7Sol baca\u011f\u0131 sa\u011fa d\xf6\
  nd\xfcr\n&eSOL TIK &8\xbb &7Sol baca\u011f\u0131 sola d\xf6nd\xfcr\n&eSHIFT + SA\u011e\
  \ TIK &8\xbb &7Sol baca\u011f\u0131 yukar\u0131 kald\u0131r\n&eSHIFT + SOL TIK &8\xbb\
  \ &7Sol baca\u011f\u0131 a\u015fa\u011f\u0131 indir\n\n&8&oAdvancedArmorStands Editor\
  \ Item"
right_leg_item_lore: "&eSA\u011e TIK &8\xbb &7Sa\u011f baca\u011f\u0131 sa\u011fa\
  \ d\xf6nd\xfcr\n&eSOL TIK &8\xbb &7Sa\u011f baca\u011f\u0131 sola d\xf6nd\xfcr\n\
  &eSHIFT + SA\u011e TIK &8\xbb &7Sa\u011f baca\u011f\u0131 yukar\u0131 kald\u0131\
  r\n&eSHIFT + SOL TIK &8\xbb &7Sa\u011f baca\u011f\u0131 a\u015fa\u011f\u0131 indir\n\
  \n&8&oAdvancedArmorStands Editor Item"
rotate_item_lore: "&eSA\u011e TIK &8\xbb &7Sa\u011fa d\xf6nd\xfcr\n&eSOL TIK &8\xbb\
  \ &7Sola d\xf6nd\xfcr\n&eSHIFT + SA\u011e TIK (Blok) &8\xbb &7V\xfccudu yukar\u0131\
  \ kald\u0131r\n&eSHIFT + SOL TIK (Blok) &8\xbb &7V\xfccudu a\u015fa\u011f\u0131\
  \ indir\n&eSHIFT + SA\u011e TIK (Hava) &8\xbb &7V\xfccudu sa\u011fa ta\u015f\u0131\
  \n&eSHIFT + SOL TIK (Hava) &8\xbb &7V\xfccudu sola ta\u015f\u0131\n\n&8&oAdvancedArmorStands\
  \ Editor Item"
save_item_lore: "&7ArmorStand ayar\u0131n\u0131 daha sonra\n&7kullanabilece\u011f\
  in bir t\xfcr olarak\n&7kaydetmek i\xe7in t\u0131kla\n\n&8&oAdvancedArmorStands\
  \ Editor Item"
edit_session_block_break: "&cD\xfczenleme oturumunda blok k\u0131ramazs\u0131n."
memory_session_block_break: "&cBurada blok k\u0131ramazs\u0131n."
custom_name_session_start: "&aBelirlemek istedi\u011fin ismi sohbete yaz. \xc7\u0131\
  kmak i\xe7in 'exit' yaz"
custom_name_session_already: "&cZaten bir isim ayarlama oturumundas\u0131n"
custom_name_exit_success: "&a\u0130sim ayarlama oturumundan ba\u015far\u0131yla \xe7\
  \u0131kt\u0131n"
custom_name_set_success: "&aArmorStand'\u0131n \xf6zel ad\u0131 ba\u015far\u0131yla\
  \ '%name%' olarak ayarland\u0131"
type_create_exit_success: "&aT\xfcr olu\u015fturma oturumundan ba\u015far\u0131yla\
  \ \xe7\u0131kt\u0131n"
type_already_exists: "&cBu t\xfcr zaten mevcut. Ba\u015fka bir isim se\xe7 ya da kay\u0131\
  t men\xfcs\xfcnden bu t\xfcr\xfc se\xe7"
type_created_success: "&a'%type%' t\xfcr\xfc bu ArmorStand'\u0131n \xf6zellikleriyle\
  \ olu\u015fturuldu"
creation_cancelled: "&cHareketsizlik nedeniyle olu\u015fturma iptal edildi"
deletion_cancelled_due_to_inactivity: '&cHareketsizlik nedeniyle silme iptal edildi.'
arms_option_name: '&eKollar'
arms_option_lore: "&7Bu ArmorStand'\u0131n\n&7kollar\u0131n\u0131 a\xe7 veya kapat\
  \ \n\n%status%"
base_plate_option_name: '&eTaban'
base_plate_option_lore: "&7Bu ArmorStand'\u0131n\n&7taban\u0131n\u0131 a\xe7 veya\
  \ kapat \n\n%status%"
custom_name_option_name: "&e\xd6zel isim"
custom_name_option_lore: "&7Bu ArmorStand i\xe7in\n&7\xf6zel bir isim belirle"
custom_name_option_current_name: "&e\u015eu anki&6 \xbb &e"
custom_name_option_no_name: "&e\u015eu anki isim&6 \xbb &eYok"
custom_name_option_enter_name: "&aBelirlemek istedi\u011fin ismi sohbete yaz. \xc7\
  \u0131kmak i\xe7in 'exit' yaz"
custom_name_option_already_editing: "&cZaten bir isim ayarlama oturumundas\u0131n"
custom_name_visible_option_name: "&e\xd6zel isim g\xf6r\xfcn\xfcr"
custom_name_visible_option_lore: "&7Bu ArmorStand'\u0131n\n&7\xf6zel isminin g\xf6\
  r\xfcn\xfcrl\xfc\u011f\xfcn\xfc a\xe7 veya kapat\n\n%status%"
glowing_option_name: '&eParlama'
glowing_option_lore: "&7Bu ArmorStand'\u0131n\n&7parlamas\u0131n\u0131 a\xe7 veya\
  \ kapat\n\n%status%"
glowing_option_enabled: "&6\u2714&e Parl\u0131yor"
glowing_option_disabled: "&4\u2718&c Parlam\u0131yor"
small_option_name: "&eK\xfc\xe7\xfck"
small_option_lore: "&7Bu ArmorStand'\u0131n\n&7k\xfc\xe7\xfck boyutunu a\xe7 veya\
  \ kapat\n\n%status%"
small_option_enabled: "&6\u2714&e K\xfc\xe7\xfck"
small_option_disabled: "&4\u2718&c K\xfc\xe7\xfck De\u011fil"
visible_option_name: "&eG\xf6r\xfcn\xfcrl\xfck"
visible_option_lore: "&7Bu ArmorStand'\u0131n\n&7g\xf6r\xfcn\xfcrl\xfc\u011f\xfcn\xfc\
  \ a\xe7 veya kapat\n\n%status%"
visible_option_enabled: "&6\u2714&e G\xf6r\xfcn\xfcr"
visible_option_disabled: "&4\u2718&c G\xf6r\xfcn\xfcr De\u011fil"
delete_tool_name: '&eSil'
delete_tool_lore: "&7Bu ArmorStand'\u0131 siler\n&7bu i\u015flem geri al\u0131namaz\n\
  \n&eSilmek i\xe7in t\u0131kla"
delete_tool_message: "&aArmorStand silindi, ancak restore komutuyla geri getirebilirsin\
  \ ve sunucu yeniden ba\u015flad\u0131\u011f\u0131nda tamamen silinecek"
delete_tool_deleted: "&aArmorStand silindi, ancak restore komutuyla geri getirebilirsin\
  \ ve sunucu yeniden ba\u015flad\u0131\u011f\u0131nda tamamen silinecek"
move_tool_name: "&eTa\u015f\u0131"
move_tool_lore: "&7ArmorStand'\u0131 istedi\u011fin\n&7yere ta\u015f\u0131r\n\n&7\xd6\
  nerilen: bunun yerine\n&7/as move komutunu kullan\n\n&eTa\u015f\u0131mak i\xe7in\
  \ t\u0131kla"
move_tool_already_moving: "&cZaten ta\u015f\u0131ma oturumundas\u0131n"
move_tool_start_message: "&aArmorStand'\u0131n \xfczerinde durmas\u0131n\u0131 istedi\u011f\
  in blo\u011fu k\u0131r"
move_tool_already: "&cZaten ta\u015f\u0131ma oturumundas\u0131n"
move_tool_start: "&aArmorStand'\u0131n \xfczerinde durmas\u0131n\u0131 istedi\u011f\
  in blo\u011fu k\u0131r"
teleport_tool_name: "&eI\u015f\u0131nlan"
teleport_tool_lore: "&7ArmorStand'\u0131n\n&7konumuna \u0131\u015f\u0131nlan\u0131\
  r\n\n&eI\u015f\u0131nlanmak i\xe7in t\u0131kla"
preview_accepted: "&aBu ArmorStand i\xe7in bu konum kabul edildi."
preview_denied: "&aYeni konum ba\u015far\u0131yla reddedildi."
```

:::note
This language is translated and generated by AI
:::