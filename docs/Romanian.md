---
id: lang-ro
title: Romanian
sidebar_position: 3
---

This is the Romanian language support for AdvancedArmorStands, the file can be found in `~/AdvancedArmorStand/languages/messages-ro.yml`, don't edit the original language file because it resets to default at startup, you can change the language by editing the `language` value in config to the language iso of you choice; for example this one's iso is `ro`


```yml
menu_format: "&7as &8\xbb &7%section%"
actions_menu_title: "ac\u021biuni"
actions_menu_item_lore: "&7Asta \xeenseamn\u0103 c\u0103 dac\u0103\n&7dai clic pe\
  \ acest armor\n&7stand, se va executa\n&7comanda: %command%\n\n&6\xbb &eClic pentru\
  \ a edita\n&6\xbb &eShift + clic pentru a elimina"
actions_menu_create_name: "&eCreeaz\u0103 o ac\u021biune"
actions_menu_create_lore: "&7Selecteaz\u0103 asta pentru a crea\n&7o ac\u021biune\
  \ care execut\u0103\n&7comenzi la clic\n\n&eClic pentru a crea"
actions_creation_message: "&aScrie comanda pe care vrei s\u0103 o setezi (f\u0103\
  r\u0103 '/'). Scrie 'exit' ca s\u0103 anulezi."
actions_settings_menu_title: "set\u0103rile ac\u021biunii"
actions_settings_trigger_name: "&eTip de Declan\u0219are"
actions_settings_trigger_lore: "&7Alege cum se va\n&7declan\u0219a comanda c\xe2nd\n\
  &7juc\u0103torul interac\u021bioneaz\u0103 cu\n&7ArmorStand-ul.\n\n%trigger_list%\n\
  \n&eClic pentru a schimba"
actions_settings_sender_name: '&eExpeditor'
actions_settings_sender_lore: "&7Alege cine va trimite\n&7comanda. Asta afecteaz\u0103\
  \n&7cum func\u021bioneaz\u0103 permisiunile \u0219i execu\u021bia.\n\n%sender_list%\n\
  \n&eClic pentru a schimba"
ai_menu_title: "set\u0103ri ai"
ai_command_description: Cere ajutor de la AI
ai_command_thinking: "&7Se g\xe2nde\u0219te..."
ai_option_name: "&eOp\u021biuni AI"
ai_option_enabled_lore: "&7Op\u021biuni legate de\n&7inteligen\u021ba artificial\u0103\
  \n&7a acestui ArmorStand.\n\n&eClic pentru a deschide"
ai_option_disabled_lore: "&7Activeaz\u0103 AI pentru ArmorStand-uri\n&7pun\xe2ndu-\u021b\
  i cheia API\n&7\xeen configura\u021bie.\n\n&4\u2718 &cNu e activat"
ai_settings_memory_lore: "&7Adaug\u0103 instruc\u021biuni personalizate\n&7pe care\
  \ AI-ul acestui ArmorStand\nle va urma c\xe2nd r\u0103spunde.\n\n%current%\n\n&6\xbb\
  \ &eShift + clic pentru a reseta\n&6\xbb &eClic pentru a schimba"
ai_settings_toggle_lore: "&7Activeaz\u0103 sau dezactiveaz\u0103 AI\n&7pentru acest\
  \ ArmorStand\n\n%ai_status%"
ai_memory_exit_success: "&aAi ie\u0219it cu succes din sesiunea de memorie."
ai_memory_update_success: "&aInstruc\u021biunile ArmorStand-ului au fost actualizate\
  \ cu succes"
ai_prefix: "&7[&6\xbb&7] &6"
ai_response_format: "&7[&6\xbb&7] &6%response%"
ai_response_not_found: "Eroare AI: nu s-a g\u0103sit textul asistentului \xeen r\u0103\
  spuns"
ai_error: '&cEroare AI: %error%'
ai_error_http: "&cEroare AI: HTTP %code%, asigur\u0103-te c\u0103 e\u0219ti conectat\
  \ la internet"
ai_http_error: 'Eroare AI: HTTP {code}'
ai_http_error_with_internet: "Eroare AI: HTTP {code}, asigur\u0103-te c\u0103 e\u0219\
  ti conectat la internet"
ai_parse_error: "Eroare la procesarea r\u0103spunsului AI: {error}"
animation_command_description: "Arat\u0103 comenzile de anima\u021bie"
animation_command_header: "&6&lAdvanced &e&lArmorStands &7&lcomenzi de anima\u021b\
  ie"
animation_add_success: "&aAnima\u021bia %animation% a fost atribuit\u0103 cu succes\
  \ ArmorStand-ului %armorstand%"
animation_clear_description: "\u0218terge &7anima\u021biile unui as"
animation_clear_success: "&aAnima\u021biile lui %armorstand% au fost \u0219terse cu\
  \ succes"
animation_create_description: "&7Creeaz\u0103 sau editeaz\u0103 o &7anima\u021bie\
  \ cu un as"
animation_remove_description: "&7Elimin\u0103 complet o anima\u021bie"
animation_remove_success: "&aAnima\u021bia '%animation%' a fost eliminat\u0103 cu\
  \ succes"
animation_invalid: "&cAnima\u021bie invalid\u0103"
animation_invalid_with_suggestion: "&cAnima\u021bia '%animation%' este invalid\u0103\
  . Ai vrut s\u0103 spui '%suggestion%'?"
animation_invalid_name: "&cNume de anima\u021bie invalid"
animation_editor_already_has_animation: "&cNu po\u021bi deschide editorul pe un ArmorStand\
  \ care are deja o anima\u021bie"
animation_editor_gamemode_changed: "&aModul t\u0103u de joc a fost schimbat temporar\
  \ \xeen CREATIVE, deoarece sesiunile de editare nu suport\u0103 modul ADVENTURE.\
  \ Va fi restaurat automat c\xe2nd ie\u0219i."
animation_editor_entered: "&aAi intrat cu succes \xeen sesiunea de creare/editare\
  \ a anima\u021biei"
animations_menu_successful_creation: "&aAnima\u021bia a fost salvat\u0103 cu succes,\
  \ d\u0103 clic pentru a o ad\u0103uga la acest ArmorStand"
keyframe_menu_title: editor de keyframe-uri
keyframe_option_lore: "&eCLIC DREAPTA &7Adaug\u0103 un keyframe\n&eSHIFT + CLIC DREAPTA\
  \ &7Deschide meniul de keyframe-uri\n\n&8&lAdvancedArmorStands Editor Item"
keyframe_created: "&aKeyframe ad\u0103ugat!"
keyframe_step_lore: "&7Acesta este pasul %step%%suffix%\n&7din anima\u021bia %animation%,\
  \ care\n&7va aduce ArmorStand-ul \xeen aceast\u0103\n&7pozi\u021bie la r\xe2ndul\
  \ lui\n\n&eClic pentru a elimina"
keyframe_interval_name: '&eInterval: %interval%'
keyframe_interval_lore: "&7Seteaz\u0103 \xeent\xe2rzierea\n&7dintre cadrele anima\u021b\
  iei.\n&7Cu c\xe2t valoarea e mai mic\u0103,\n&7cu at\xe2t anima\u021bia e mai rapid\u0103\
  .\n\n&6\xbb&e Clic st\xe2nga pentru a cre\u0219te\n&6\xbb&e Clic dreapta pentru\
  \ a sc\u0103dea.\n&6\xbb&e \u021aine ap\u0103sat Shift pentru a schimba\n&6\xbb\
  &e din 10 \xeen 10.\n\n&eClic pentru a schimba"
keyframe_loop_name: '&eRepetare: %loop%'
keyframe_loop_lore: "&7Stabile\u0219te dac\u0103 anima\u021bia\n&7trebuie s\u0103\
  \ se repete \xeen bucl\u0103\n&7de la \xeenceput la infinit\n\n&eClic pentru a schimba"
save_menu_title: meniu de salvare
save_menu_create_message: "&aScrie numele tipului pe care vrei s\u0103-l creezi (propriet\u0103\
  \u021bile acestui ArmorStand vor fi copiate). Scrie 'exit' ca s\u0103 ie\u0219i"
save_menu_type_lore: "&7Select\xe2nd asta vei suprascrie\n&7vechea configura\u021b\
  ie a lui %type% cu\n&7configura\u021bia actual\u0103 pe care ai f\u0103cut-o\n\n\
  &eClic pentru a salva"
save_menu_type_saved: "&aPropriet\u0103\u021bile ArmorStand-ului au fost salvate \xee\
  n '%type%'"
save_menu_create_type_name: "&eCreeaz\u0103 un tip"
save_menu_create_type_lore: "&7Selecteaz\u0103 asta pentru a crea\n&7un tip cu propriet\u0103\
  \u021bile\n&7acestui armor stand\n\n&eClic pentru a crea"
armor_stand_menu_title: "set\u0103ri"
armor_stand_not_loaded: "&cAcest ArmorStand nu este \xeenc\u0103rcat"
armor_stand_invalid: '&cArmorStand invalid'
armor_stand_invalid_with_suggestion: "&cArmorStand '%armorstand%' invalid. Ai vrut\
  \ s\u0103 spui '%suggestion%'?"
armorstand_not_found: "&cArmorStand neg\u0103sit!"
world_not_found: "&cLume neg\u0103sit\u0103!"
teleported_to_armorstand: '&aTeleportat la %name%'
armorstand_updated_success: '&aArmorStand actualizat cu succes!'
armorstand_updated_failed: "&cActualizarea ArmorStand-ului a e\u0219uat!"
armorstand_unavailable: '&cArmorStand-ul nu mai este disponibil!'
armorstand_unavailable_title: '&cArmorStand-ul nu este disponibil'
armorstand_move_success: '&aArmorStand mutat cu succes.'
armorstands_not_loaded: "&cSe pare c\u0103 %amount% ArmorStand-uri nu au fost \xee\
  nc\u0103rcate de generatorul de lume. Pentru a repara asta, activeaz\u0103 'auto-load-armor-stands'\
  \ \xeen configura\u021bie ca s\u0103 se \xeencarce toate automat."
issues_found_on_join: "&eAdvancedArmorStands a \xeent\xe2mpinat %amount% eroare/avertisment\
  \ \xeen aceast\u0103 sesiune. Verific\u0103 fi\u0219ierul de log pentru detalii."
armorstand_save_confirm: "&aF\u0103 asta \xeenc\u0103 %amount% dat\u0103%plural% ca\
  \ s\u0103 salvezi acest ArmorStand."
armorstand_saved_success: '&eArmorStand salvat ca %name%!'
armorstand_delete_confirm: "&cF\u0103 asta \xeenc\u0103 %amount% dat\u0103%plural%\
  \ ca s\u0103 \u0219tergi acest ArmorStand."
armorstand_deleted_success: "&aArmorStand-ul a fost \u0219ters, dar poate fi restaurat\
  \ cu comanda restore \u0219i va fi \u0219ters complet la repornirea serverului"
command_no_permission: "&cNu ai permisiunea s\u0103 folose\u0219ti aceast\u0103 comand\u0103\
  !"
command_unknown: "&cComanda '%command%' nu este o subcomand\u0103 valid\u0103."
command_unknown_with_suggestion: "&cComanda '%command%' nu este o subcomand\u0103\
  \ valid\u0103. Ai vrut s\u0103 spui '%suggestion%'?"
command_help_invalid_page_number: "&cTe rog introdu un num\u0103r de pagin\u0103 valid."
command_help_invalid_page: "&cPagin\u0103 invalid\u0103. Alege o pagin\u0103 \xee\
  ntre 1 \u0219i %pages%."
command_usage_hover: '&eClic pentru a folosi sugestia'
command_examples: '&7Exemple:'
command_click_to_use: "&e&lClic pentru a folosi aceast\u0103 comand\u0103"
command_label: "&7Comand\u0103: &e%command%"
command_description_label: '&7Descriere: &f%description%'
create_description: "Creeaz\u0103 un &7ArmorStand"
create_custom_usage: '&cUtilizare: /as create custom <name> <part> <x> <y> <z> [<part>
  <x> <y> <z> ...]'
create_invalid_part_number: "&cNum\u0103r invalid pentru partea %part%. Utilizare:\
  \ <part> <x> <y> <z>"
create_unknown_part: "&cParte necunoscut\u0103: %part%"
delete_description: "\u0218terge un &7ArmorStand"
delete_all_success: "&aToate ArmorStand-urile au fost \u0219terse cu succes"
delete_success: "&aArmorStand \u0219ters complet"
debug_description: "Arat\u0103 informa\u021bii de depanare"
head_description: "Ob\u021bine capul unui juc\u0103tor"
head_success: "&a\u021ai-a fost dat capul lui %player%"
list_description: "Arat\u0103 o list\u0103 cu ArmorStand-uri"
list_empty_title: "&c&l     Niciun ArmorStand Salvat G\u0103sit "
list_empty_hint: "&7Folose\u0219te &e/as create <type> <name>&7 ca s\u0103 creezi\
  \ primul t\u0103u ArmorStand!"
load_description: "\xcencarc\u0103 un ArmorStand"
load_no_unloaded: "&eNu s-a g\u0103sit niciun ArmorStand ne\xeenc\u0103rcat."
load_failed: "&cA e\u0219uat: %failed%"
move_description: "Mut\u0103 un ArmorStand la &7loca\u021bia ta"
options_description: "Deschide meniul de op\u021biuni"
reload_description: "Re\xeencarc\u0103 configura\u021biile plugin-ului"
reload_success: "&aConfigura\u021bia AdvancedArmorStand a fost re\xeenc\u0103rcat\u0103\
  \ cu succes"
reload_error: "&cEroare la re\xeenc\u0103rcarea plugin-ului, verific\u0103 consola\
  \ pentru mai multe detalii"
rename_description: "Redenume\u0219te un &7as"
rename_success: "&aArmorStand redenumit din '%old_name%' \xeen '%new_name%'"
restore_description: "Restaureaz\u0103 un ArmorStand \u0219ters"
restore_not_deleted: "&cAcest ArmorStand nu este \u0219ters sau e prea t\xe2rziu"
restore_unknown_error: "&cEroare necunoscut\u0103, verific\u0103 consola pentru mai\
  \ multe informa\u021bii"
restore_success: '&aArmorStand restaurat cu succes'
teleport_not_on_ground: "&cAcest ArmorStand nu este pe sol. E\u0219ti sigur c\u0103\
  \ vrei s\u0103 te teleportezi la el?"
teleport_force_hint: "&cFolose\u0219te '/as teleport %armorstand% --force' ca s\u0103\
  \ for\u021bezi teleportarea"
tell_description: "Pune o \xeentrebare AI-ului unui ArmorStand"
tell_ai_disabled: '&cAcest ArmorStand nu are AI activat'
inventory_exit_name: "&7\xbb &cIE\u0218IRE&7 (Clic Dreapta)"
inventory_exit_lore: |2-

  &8&oAdvancedArmorStands Editor Item
inventory_enter_session: "&aAi intrat \xeen sesiunea de editare, d\u0103 clic pe obiectul\
  \ IE\u0218IRE ca s\u0103 te \xeentorci \u0219i s\u0103-\u021bi recuperezi obiectele"
editor_exit_name: "&7\xbb &cIE\u0218IRE &7(Clic Dreapta)"
editor_exit_lore: |2-

  &8AdvancedArmorStands Editor Item
head_item_lore: "&eCLIC DREAPTA &8\xbb &7Rote\u0219te capul spre dreapta\n&eCLIC ST\xc2\
  NGA &8\xbb &7Rote\u0219te capul spre st\xe2nga\n&eSHIFT + CLIC DREAPTA &8\xbb &7Ridic\u0103\
  \ capul\n&eSHIFT + CLIC ST\xc2NGA &8\xbb &7Coboar\u0103 capul\n\n&8&oAdvancedArmorStands\
  \ Editor Item"
left_hand_item_lore: "&eCLIC DREAPTA &8\xbb &7Rote\u0219te m\xe2na st\xe2ng\u0103\
  \ spre dreapta\n&eCLIC ST\xc2NGA &8\xbb &7Rote\u0219te m\xe2na st\xe2ng\u0103 spre\
  \ st\xe2nga\n&eSHIFT + CLIC DREAPTA &8\xbb &7Ridic\u0103 bra\u021bul st\xe2ng\n\
  &eSHIFT + CLIC ST\xc2NGA &8\xbb &7Coboar\u0103 bra\u021bul st\xe2ng\n\n&8&oAdvancedArmorStands\
  \ Editor Item"
right_hand_item_lore: "&eCLIC DREAPTA &8\xbb &7Rote\u0219te m\xe2na dreapt\u0103 spre\
  \ dreapta\n&eCLIC ST\xc2NGA &8\xbb &7Rote\u0219te m\xe2na dreapt\u0103 spre st\xe2\
  nga\n&eSHIFT + CLIC DREAPTA &8\xbb &7Ridic\u0103 bra\u021bul drept\n&eSHIFT + CLIC\
  \ ST\xc2NGA &8\xbb &7Coboar\u0103 bra\u021bul st\xe2ng\n\n&8&oAdvancedArmorStands\
  \ Editor Item"
left_leg_item_lore: "&eCLIC DREAPTA &8\xbb &7Rote\u0219te piciorul st\xe2ng spre dreapta\n\
  &eCLIC ST\xc2NGA &8\xbb &7Rote\u0219te piciorul st\xe2ng spre st\xe2nga\n&eSHIFT\
  \ + CLIC DREAPTA &8\xbb &7Ridic\u0103 piciorul st\xe2ng\n&eSHIFT + CLIC ST\xc2NGA\
  \ &8\xbb &7Coboar\u0103 piciorul st\xe2ng\n\n&8&oAdvancedArmorStands Editor Item"
right_leg_item_lore: "&eCLIC DREAPTA &8\xbb &7Rote\u0219te piciorul drept spre dreapta\n\
  &eCLIC ST\xc2NGA &8\xbb &7Rote\u0219te piciorul drept spre st\xe2nga\n&eSHIFT +\
  \ CLIC DREAPTA &8\xbb &7Ridic\u0103 piciorul drept\n&eSHIFT + CLIC ST\xc2NGA &8\xbb\
  \ &7Coboar\u0103 piciorul drept\n\n&8&oAdvancedArmorStands Editor Item"
rotate_item_lore: "&eCLIC DREAPTA &8\xbb &7Rote\u0219te spre dreapta\n&eCLIC ST\xc2\
  NGA &8\xbb &7Rote\u0219te spre st\xe2nga\n&eSHIFT + CLIC DREAPTA (Bloc) &8\xbb &7Ridic\u0103\
  \ corpul\n&eSHIFT + CLIC ST\xc2NGA (Bloc) &8\xbb &7Coboar\u0103 corpul\n&eSHIFT\
  \ + CLIC DREAPTA (Aer) &8\xbb &7Mut\u0103 corpul la dreapta\n&eSHIFT + CLIC ST\xc2\
  NGA (Aer) &8\xbb &7Mut\u0103 corpul la st\xe2nga\n\n&8&oAdvancedArmorStands Editor\
  \ Item"
save_item_lore: "&7D\u0103 clic pentru a salva configura\u021bia\n&7ArmorStand-ului\
  \ ca un tip, ca s\u0103-l po\u021bi folosi mai t\xe2rziu\n\n&8&oAdvancedArmorStands\
  \ Editor Item"
edit_session_block_break: "&cNu po\u021bi sparge blocuri \xeen sesiunea de editare."
memory_session_block_break: "&cNu po\u021bi sparge blocuri aici."
custom_name_session_start: "&aScrie \xeen chat numele pe care vrei s\u0103-l setezi.\
  \ Ca s\u0103 ie\u0219i scrie 'exit'"
custom_name_session_already: "&cE\u0219ti deja \xeentr-o sesiune de setare a numelui"
custom_name_exit_success: "&aAi ie\u0219it cu succes din sesiunea de setare a numelui"
custom_name_set_success: '&aNumele personalizat al ArmorStand-ului a fost setat cu
  succes la ''%name%'''
type_create_exit_success: "&aAi ie\u0219it cu succes din sesiunea de creare a tipului"
type_already_exists: "&cAcest tip exist\u0103 deja. Alege alt nume sau selecteaz\u0103\
  \ tipul din meniul de salvare"
type_created_success: "&aTipul '%type%' a fost creat cu propriet\u0103\u021bile acestui\
  \ ArmorStand"
creation_cancelled: "&cCreare anulat\u0103 din cauza inactivit\u0103\u021bii"
deletion_cancelled_due_to_inactivity: "&c\u0218tergere anulat\u0103 din cauza inactivit\u0103\
  \u021bii."
arms_option_name: "&eBra\u021be"
arms_option_lore: "&7Activeaz\u0103 sau dezactiveaz\u0103\n&7bra\u021bele acestui\
  \ ArmorStand \n\n%status%"
base_plate_option_name: "&ePlac\u0103 de Baz\u0103"
base_plate_option_lore: "&7Activeaz\u0103 sau dezactiveaz\u0103\n&7placa de baz\u0103\
  \ a acestui ArmorStand \n\n%status%"
custom_name_option_name: '&eNume personalizat'
custom_name_option_lore: "&7Seteaz\u0103 un nume personalizat\n&7pentru acest ArmorStand"
custom_name_option_current_name: "&eActual&6 \xbb &e"
custom_name_option_no_name: "&eNume actual&6 \xbb &eNiciunul"
custom_name_option_enter_name: "&aScrie \xeen chat numele pe care vrei s\u0103-l setezi.\
  \ Ca s\u0103 ie\u0219i scrie 'exit'"
custom_name_option_already_editing: "&cE\u0219ti deja \xeentr-o sesiune de setare\
  \ a numelui"
custom_name_visible_option_name: '&eNume personalizat vizibil'
custom_name_visible_option_lore: "&7Activeaz\u0103 sau dezactiveaz\u0103\n&7numele\
  \ personalizat al acestui ArmorStand\n\n%status%"
glowing_option_name: "&eStr\u0103lucire"
glowing_option_lore: "&7Activeaz\u0103 sau dezactiveaz\u0103\n&7str\u0103lucirea acestui\
  \ ArmorStand\n\n%status%"
glowing_option_enabled: "&6\u2714&e Str\u0103luce\u0219te"
glowing_option_disabled: "&4\u2718&c Nu str\u0103luce\u0219te"
small_option_name: '&eMic'
small_option_lore: "&7Activeaz\u0103 sau dezactiveaz\u0103\n&7dimensiunea mic\u0103\
  \ a acestui ArmorStand\n\n%status%"
small_option_enabled: "&6\u2714&e Este mic"
small_option_disabled: "&4\u2718&c Nu este mic"
visible_option_name: '&eVizibilitate'
visible_option_lore: "&7Activeaz\u0103 sau dezactiveaz\u0103\n&7vizibilitatea acestui\
  \ ArmorStand\n\n%status%"
visible_option_enabled: "&6\u2714&e Este vizibil"
visible_option_disabled: "&4\u2718&c Nu este vizibil"
delete_tool_name: "&e\u0218terge"
delete_tool_lore: "&7\u0218terge acest ArmorStand\n&7aceast\u0103 ac\u021biune nu\
  \ poate fi anulat\u0103\n\n&eClic pentru a \u0219terge"
delete_tool_message: "&aArmorStand-ul a fost \u0219ters, dar poate fi restaurat cu\
  \ comanda restore \u0219i va fi \u0219ters complet la repornirea serverului"
delete_tool_deleted: "&aArmorStand-ul a fost \u0219ters, dar poate fi restaurat cu\
  \ comanda restore \u0219i va fi \u0219ters complet la repornirea serverului"
move_tool_name: "&eMut\u0103"
move_tool_lore: "&7Mut\u0103 ArmorStand-ul\n&7unde vrei tu\n\n&7Recomandat: folose\u0219\
  te\n&7comanda /as move \xeen loc\n\n&eClic pentru a muta"
move_tool_already_moving: "&cE\u0219ti deja \xeen sesiunea de mutare"
move_tool_start_message: "&aSparge blocul pe care vrei s\u0103 stea ArmorStand-ul"
move_tool_already: "&cE\u0219ti deja \xeen sesiunea de mutare"
move_tool_start: "&aSparge blocul pe care vrei s\u0103 stea ArmorStand-ul"
teleport_tool_name: '&eTeleportare'
teleport_tool_lore: "&7Te teleporteaz\u0103 la\n&7loca\u021bia ArmorStand-ului\n\n\
  &eClic pentru a te teleporta"
preview_accepted: "&aAceast\u0103 pozi\u021bie a fost acceptat\u0103 pentru acest\
  \ ArmorStand."
preview_denied: "&aNoua pozi\u021bie a fost respins\u0103 cu succes."
```

:::note
This language is translated and generated by AI
:::