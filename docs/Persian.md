---
id: lang-fa
title: Persian
sidebar_position: 3
---

This is the Persian language support for AdvancedArmorStands, the file can be found in `~/AdvancedArmorStand/languages/messages-fa.yml`, don't edit the original language file because it resets to default at startup, you can change the language by editing the `language` value in config to the language iso of you choice; for example this one's iso is `fa`


```yml
menu_format: "&7as &8\xbb &7%section%"
actions_menu_title: actionha
actions_menu_item_lore: "&7yani age ru in armor stand\n&7click koni, in command\n\
  &7ejra mishe: %command%\n\n&6\xbb &eBezan click baraye edit\n&6\xbb &eShift click\
  \ baraye hazf"
actions_menu_create_name: '&eYek action besaz'
actions_menu_create_lore: |-
  &7in ro bezan ta yek
  &7action besazi ke ba
  &7click ha command run mikone

  &eBezan baraye sakht
actions_creation_message: '&aCommandi ke mikhay bezari ro benevis (bedune ''/''),
  baraye cancel ''exit'' benevis.'
actions_settings_menu_title: tanzimate action
actions_settings_trigger_name: '&eNoe Trigger'
actions_settings_trigger_lore: |-
  &7Entekhab kon command chetori
  &7ejra beshe vaghti
  &7player ba ArmorStand
  &7interact mikone.

  %trigger_list%

  &eBezan baraye avaz kardan
actions_settings_sender_name: '&eFerestande'
actions_settings_sender_lore: |-
  &7Ferestande command ro
  &7entekhab kon. In ru tarze
  &7karkarde permission ha tasir mizare.

  %sender_list%

  &eBezan baraye avaz kardan
ai_menu_title: tanzimate ai
ai_command_description: Az ai bekhah komaket kone
ai_command_thinking: '&7dare fekr mikone...'
ai_option_name: '&eTanzimate AI'
ai_option_enabled_lore: |-
  &7Tanzimate marbut be
  &7hoshe masnooi
  &7in ArmorStand.

  &eBezan baraye baz kardan
ai_option_disabled_lore: "&7AI ro baraye ArmorStand ha\n&7ba gozashtane API key\n\
  &7too config faal kon.\n\n&4\u2718 &cFaal Nist"
ai_settings_memory_lore: "&7Dastoolamale khodeto\n&7baraye AI in ArmorStand\nezafe\
  \ kon ta vaghte javab dadan donbal kone.\n\n%current%\n\n&6\xbb &eShift-click baraye\
  \ reset\n&6\xbb &eClick baraye avaz kardan"
ai_settings_toggle_lore: |-
  &7AI ro baraye in ArmorStand
  &7faal ya gheyre faal kon

  %ai_status%
ai_memory_exit_success: '&aBa movafaghiat az session tanzime memory kharej shodi.'
ai_memory_update_success: '&aDastoolamalhaye ArmorStand ba movafaghiat update shod'
ai_prefix: "&7[&6\xbb&7] &6"
ai_response_format: "&7[&6\xbb&7] &6%response%"
ai_response_not_found: 'Khataye AI: matne assistant too response peida nashod'
ai_error: '&cKhataye AI: %error%'
ai_error_http: '&cKhataye AI: HTTP %code%, motmaen sho be internet vasli'
ai_http_error: 'Khataye AI: HTTP {code}'
ai_http_error_with_internet: 'Khataye AI: HTTP {code}, motmaen sho be internet vasli'
ai_parse_error: 'Khataye parse AI: {error}'
animation_command_description: Commandhaye animation ro neshun bede
animation_command_header: '&6&lAdvanced &e&lArmorStands &7&lcommandhaye animation'
animation_add_success: '&aAnimation %animation% ro ru ArmorStand %armorstand% ba movafaghiat
  gozashti'
animation_clear_description: Animation haye ye as ro &7pak kon
animation_clear_success: '&aAnimation haye %armorstand% ba movafaghiat pak shod'
animation_create_description: '&7Ba ye as, animation &7besaz ya edit kon'
animation_remove_description: '&7Ye animation ro kamelan pak kon'
animation_remove_success: '&aAnimation ''%animation%'' ba movafaghiat pak shod'
animation_invalid: '&cAnimation nadorost'
animation_invalid_with_suggestion: '&cAnimation ''%animation%'' nadorost. Manzuret
  ''%suggestion%'' bud?'
animation_invalid_name: '&cEsme animation nadorost'
animation_editor_already_has_animation: '&cNemitoni editor ro ru ArmorStandi ke animation
  dare baz koni'
animation_editor_gamemode_changed: '&aGameModet movaghatan be CREATIVE avaz shod,
  chon session haye edit az ADVENTURE poshtibani nemikonan. Vaghti biroon biai khodkar
  bar migarde.'
animation_editor_entered: '&aBa movafaghiat vared session sakht/edite animation shodi'
animations_menu_successful_creation: '&aAnimation ba movafaghiat save shod, bezan
  ta be in ArmorStand ezafash koni'
keyframe_menu_title: editore keyframe
keyframe_option_lore: |-
  &eRIGHT CLICK &7Ye keyframe ezafe kon
  &eSHIFT RIGHT CLICK &7Menuye keyframe ro baz kon

  &8&lAdvancedArmorStands Editor Item
keyframe_created: '&aKeyframe ezafe shod!'
keyframe_step_lore: |-
  &7In step %step%%suffix% baraye
  &7animation %animation% e ke
  &7position ArmorStand ro too
  &7navbatesh be in bar migardune

  &eBezan baraye hazf
keyframe_interval_name: '&eFasele: %interval%'
keyframe_interval_lore: "&7Fasele beyne\n&7frame haye animation ro tanzim mikone.\n\
  &7Har che adad kamtar\n&7animation sari-tar mishe.\n\n&6\xbb&e Left-click baraye\
  \ ziyad kardan\n&6\xbb&e Right-click baraye kam kardan.\n&6\xbb&e Shift ro negah\
  \ dar ta\n&6\xbb&e 10 ta 10 avaz beshe.\n\n&eBezan baraye avaz kardan"
keyframe_loop_name: '&eTekrar: %loop%'
keyframe_loop_lore: |-
  &7Moshakhas mikone ke animation
  &7bayad az aval bi nahayat
  &7tekrar beshe ya na

  &eBezan baraye avaz kardan
save_menu_title: menuye save
save_menu_create_message: '&aEsme typei ke mikhay besazi va propertie in ArmorStand
  ro behesh copy koni benevis, baraye kharoj ''exit'' benevis'
save_menu_type_lore: |-
  &7In ro entekhab koni config
  &7ghadimie %type% ba
  &7config alanit override mishe

  &eBezan baraye save
save_menu_type_saved: '&aPropertie haye ArmorStand ru ''%type%'' save shod'
save_menu_create_type_name: '&eYe type besaz'
save_menu_create_type_lore: |-
  &7In ro bezan ta ye type
  &7ba propertie in armor
  &7stand besazi

  &eBezan baraye sakht
armor_stand_menu_title: tanzimat
armor_stand_not_loaded: '&cIn ArmorStand load nashode'
armor_stand_invalid: '&cArmorStand nadorost'
armor_stand_invalid_with_suggestion: '&cArmorStand ''%armorstand%'' nadorost. Manzuret
  ''%suggestion%'' bud?'
armorstand_not_found: '&cArmorStand peida nashod!'
world_not_found: '&cWorld peida nashod!'
teleported_to_armorstand: '&aBe %name% teleport shodi'
armorstand_updated_success: '&aArmorStand ba movafaghiat update shod!'
armorstand_updated_failed: '&cUpdate ArmorStand shekast khord!'
armorstand_unavailable: '&cIn ArmorStand digge mojud nist!'
armorstand_unavailable_title: '&cArmorStand mojud nist'
armorstand_move_success: '&aArmorStand ba movafaghiat jabeja shod.'
armorstands_not_loaded: '&cBe nazar mirese %amount% ta ArmorStand tavassote world
  generator load nashodan. Baraye dorost kardanesh, ''auto-load-armor-stands'' ro
  too config faal kon ta hamashun khodkar load beshan.'
issues_found_on_join: '&eAdvancedArmorStands too in session be %amount% ta error ya
  warning barkhord karde. Baraye jozeiyat log file ro check kon.'
armorstand_save_confirm: '&aIn karo %amount% bar%plural% dige anjam bede ta in ArmorStand
  save beshe.'
armorstand_saved_success: '&eArmorStand ba esme %name% save shod!'
armorstand_delete_confirm: '&cIn karo %amount% bar%plural% dige anjam bede ta in ArmorStand
  hazf beshe.'
armorstand_deleted_success: '&aArmorStand hazf shod, vali mitoni ba command restore
  bargardunish, va ba restart shodane server kamelan pak mishe'
command_no_permission: '&cToo permission nadari in commando estefade koni!'
command_unknown: '&cCommand ''%command%'' ye subcommande dorost nist.'
command_unknown_with_suggestion: '&cCommand ''%command%'' ye subcommande dorost nist.
  Manzuret ''%suggestion%'' bud?'
command_help_invalid_page_number: '&cLotfan ye shomare safhe dorost vared kon.'
command_help_invalid_page: '&cSafhe nadorost, lotfan ye safhe beyne 1 ta %pages% entekhab
  kon.'
command_usage_hover: '&eBezan baraye pishnahad'
command_examples: '&7Mesalha:'
command_click_to_use: '&e&lBezan ta in command ejra beshe'
command_label: '&7Dastoor: &e%command%'
command_description_label: '&7Tozihat: &f%description%'
create_description: Ye &7ArmorStand besaz
create_custom_usage: '&cTarze estefade: /as create custom <name> <part> <x> <y> <z>
  [<part> <x> <y> <z> ...]'
create_invalid_part_number: '&cAdad baraye part %part% nadoroste. Tarze estefade:
  <part> <x> <y> <z>'
create_unknown_part: '&cParte nashenakhte: %part%'
delete_description: Ye &7ArmorStand hazf kon
delete_all_success: '&aHame ArmorStand ha ba movafaghiat hazf shodan'
delete_success: '&aArmorStand kamelan hazf shod'
debug_description: Etelaate debug ro neshun mide
head_description: Kalleye ye player ro begir
head_success: '&aKalleye %player% behet dade shod'
list_description: Listeye ArmorStand ha ro neshun mide
list_empty_title: '&c&l     Hich ArmorStande Save shodei Peida Nashod '
list_empty_hint: '&7Az &e/as create <type> <name>&7 estefade kon ta avvalin ArmorStandeto
  besazi!'
load_description: Ye ArmorStand ro load mikone
load_no_unloaded: '&eHich ArmorStande load-nashodei peida nashod.'
load_failed: '&cShekast khord: %failed%'
move_description: Ye ArmorStand ro be &7mokanet montaghel mikone
options_description: Menuye tanzimat ro baz mikone
reload_description: Confighaye plugino reload mikone
reload_success: '&aConfige AdvancedArmorStand ba movafaghiat reload shod'
reload_error: '&cToo reload plugin error oftad, baraye jozeiyat console ro check kon'
rename_description: Esme ye &7as ro avaz kon
rename_success: '&aEsme ArmorStand az ''%old_name%'' be ''%new_name%'' avaz shod'
restore_description: Ye ArmorStande hazf shode ro bargardun
restore_not_deleted: '&cIn ArmorStand hazf nashode ya dige dire'
restore_unknown_error: '&cError nashenakhte, baraye etelaate bishtar console ro check
  kon'
restore_success: '&aArmorStand ba movafaghiat bargardande shod'
teleport_not_on_ground: '&cIn ArmorStand ru zamin nist. Motmaeni mikhay behesh teleport
  koni?'
teleport_force_hint: '&cAz ''/as teleport %armorstand% --force'' estefade kon ta be
  zoor teleport koni'
tell_description: Az AI ye ArmorStand ye soal bepors
tell_ai_disabled: '&cIn ArmorStand AI faal nadare'
inventory_exit_name: "&7\xbb &cKHOROJ&7 (Right Click)"
inventory_exit_lore: |2-

  &8&oAdvancedArmorStands Editor Item
inventory_enter_session: '&aVarede session edit shodi, ru item EXIT click kon ta bargardi
  va itemhat bargarde'
editor_exit_name: "&7\xbb &cKHOROJ &7(Right Click)"
editor_exit_lore: |2-

  &8AdvancedArmorStands Editor Item
head_item_lore: "&eRIGHT CLICK &8\xbb &7Kalle ro bechargun be rast\n&eLEFT CLICK &8\xbb\
  \ &7Kalle ro bechargun be chap\n&eSHIFT + RIGHT CLICK &8\xbb &7Kalle ro bebar bala\n\
  &eSHIFT + LEFT CLICK &8\xbb &7Kalle ro bebar paeen\n\n&8&oAdvancedArmorStands Editor\
  \ Item"
left_hand_item_lore: "&eRIGHT CLICK &8\xbb &7Daste chap ro bechargun be rast\n&eLEFT\
  \ CLICK &8\xbb &7Daste chap ro bechargun be chap\n&eSHIFT + RIGHT CLICK &8\xbb &7Baazu\
  \ chap ro bebar bala\n&eSHIFT + LEFT CLICK &8\xbb &7Baazu chap ro bebar paeen\n\n\
  &8&oAdvancedArmorStands Editor Item"
right_hand_item_lore: "&eRIGHT CLICK &8\xbb &7Daste rast ro bechargun be rast\n&eLEFT\
  \ CLICK &8\xbb &7Daste rast ro bechargun be chap\n&eSHIFT + RIGHT CLICK &8\xbb &7Baazu\
  \ rast ro bebar bala\n&eSHIFT + LEFT CLICK &8\xbb &7Baazu chap ro bebar paeen\n\n\
  &8&oAdvancedArmorStands Editor Item"
left_leg_item_lore: "&eRIGHT CLICK &8\xbb &7Paye chap ro bechargun be rast\n&eLEFT\
  \ CLICK &8\xbb &7Paye chap ro bechargun be chap\n&eSHIFT + RIGHT CLICK &8\xbb &7Paye\
  \ chap ro bebar bala\n&eSHIFT + LEFT CLICK &8\xbb &7Paye chap ro bebar paeen\n\n\
  &8&oAdvancedArmorStands Editor Item"
right_leg_item_lore: "&eRIGHT CLICK &8\xbb &7Paye rast ro bechargun be rast\n&eLEFT\
  \ CLICK &8\xbb &7Paye rast ro bechargun be chap\n&eSHIFT + RIGHT CLICK &8\xbb &7Paye\
  \ rast ro bebar bala\n&eSHIFT + LEFT CLICK &8\xbb &7Paye rast ro bebar paeen\n\n\
  &8&oAdvancedArmorStands Editor Item"
rotate_item_lore: "&eRIGHT CLICK &8\xbb &7Bechargun be rast\n&eLEFT CLICK &8\xbb &7Bechargun\
  \ be chap\n&eSHIFT + RIGHT CLICK (Block) &8\xbb &7Badan ro bebar bala\n&eSHIFT +\
  \ LEFT CLICK (Block) &8\xbb &7Badan ro bebar paeen\n&eSHIFT + RIGHT CLICK (Air)\
  \ &8\xbb &7Badan ro bebar rast\n&eSHIFT + LEFT CLICK (Air) &8\xbb &7Badan ro bebar\
  \ chap\n\n&8&oAdvancedArmorStands Editor Item"
save_item_lore: |-
  &7Bezan ta tanzimate ArmorStand
  &7ro be onvane ye type save koni, ta badan estefadash koni

  &8&oAdvancedArmorStands Editor Item
edit_session_block_break: '&cToo session edit nemitoni block ha ro bekoni.'
memory_session_block_break: '&cInja nemitoni block ha ro bekoni.'
custom_name_session_start: '&aEsmi ke mikhay bezari too chat benevis, baraye khoroj
  ''exit'' benevis'
custom_name_session_already: '&cToo alan too ye session tanzime esm hasti'
custom_name_exit_success: '&aBa movafaghiat az session tanzime esm khareej shodi'
custom_name_set_success: '&aEsme ArmorStand ba movafaghiat ru ''%name%'' tanzim shod'
type_create_exit_success: '&aBa movafaghiat az session sakhte type khareej shodi'
type_already_exists: '&cIn type az ghabl vojud dare, ya ye esme dige entekhab kon
  ya too menuye save khode typero entekhab kon'
type_created_success: '&aType ''%type%'' ba propertie haye in ArmorStand sakhte shod'
creation_cancelled: '&cSakht be dalile bi harekati cancel shod'
deletion_cancelled_due_to_inactivity: '&cHazf be dalile bi harekati cancel shod.'
arms_option_name: '&eDastha'
arms_option_lore: "&7Dastaye in ArmorStand ro\n&7faal ya gheyre faal kon \n\n%status%"
base_plate_option_name: '&eSafhe Paeen'
base_plate_option_lore: "&7Safhe paeene in ArmorStand ro\n&7faal ya gheyre faal kon\
  \ \n\n%status%"
custom_name_option_name: '&eEsme delkhah'
custom_name_option_lore: |-
  &7Baraye in ArmorStand
  &7ye esme delkhah bezar
custom_name_option_current_name: "&eFeli&6 \xbb &e"
custom_name_option_no_name: "&eEsme feli&6 \xbb &eHich"
custom_name_option_enter_name: '&aEsmi ke mikhay bezari too chat benevis, baraye khoroj
  ''exit'' benevis'
custom_name_option_already_editing: '&cToo alan too ye session tanzime esm hasti'
custom_name_visible_option_name: '&eNemayeshe esme delkhah'
custom_name_visible_option_lore: |-
  &7Nemayeshe esme delkhahe in ArmorStand ro
  &7faal ya gheyre faal kon

  %status%
glowing_option_name: '&eDorakhshesh'
glowing_option_lore: |-
  &7Dorakhshane in ArmorStand ro
  &7faal ya gheyre faal kon

  %status%
glowing_option_enabled: "&6\u2714&e Dorakhshan e"
glowing_option_disabled: "&4\u2718&c Dorakhshan nist"
small_option_name: '&eKoochik'
small_option_lore: |-
  &7Andazeye koochike in ArmorStand ro
  &7faal ya gheyre faal kon

  %status%
small_option_enabled: "&6\u2714&e Koochike"
small_option_disabled: "&4\u2718&c Koochik Nist"
visible_option_name: '&eNemayan Budan'
visible_option_lore: |-
  &7Nemayan budane in ArmorStand ro
  &7faal ya gheyre faal kon

  %status%
visible_option_enabled: "&6\u2714&e Nemayane"
visible_option_disabled: "&4\u2718&c Nemayan Nist"
delete_tool_name: '&eHazf'
delete_tool_lore: |-
  &7In ArmorStand ro hazf kon
  &7in kar ghabele bargasht nist

  &eBezan baraye hazf
delete_tool_message: '&aArmorStand hazf shod, vali mitoni ba command restore bargardunish,
  va ba restart shodane server kamelan pak mishe'
delete_tool_deleted: '&aArmorStand hazf shod, vali mitoni ba command restore bargardunish,
  va ba restart shodane server kamelan pak mishe'
move_tool_name: '&eJabeja Kon'
move_tool_lore: |-
  &7ArmorStand ro be jayi
  &7ke mikhay javebeja koni

  &7Pishnahad: az command
  &7/as move estefade kon

  &eBezan baraye jabeja kardan
move_tool_already_moving: '&cToo alan too session jabejai hasti'
move_tool_start_message: '&aBlocki ke mikhay ArmorStand ruye un bashe ro bekon'
move_tool_already: '&cToo alan too session jabejai hasti'
move_tool_start: '&aBlocki ke mikhay ArmorStand ruye un bashe ro bekon'
teleport_tool_name: '&eTeleport'
teleport_tool_lore: |-
  &7Be mokane
  &7in ArmorStand teleport kon

  &eBezan baraye teleport
preview_accepted: '&aIn mokan baraye in ArmorStand ghabul shod.'
preview_denied: '&aMokane jadid ba movafaghiat rad shod.'
```

:::note
This language is translated and generated by AI
:::