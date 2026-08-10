---
id: lang-pl
title: Polish
sidebar_position: 3
---

This is the Polish language support for AdvancedArmorStands, the file can be found in `~/AdvancedArmorStand/languages/messages-pl.yml`, don't edit the original language file because it resets to default at startup, you can change the language by editing the `language` value in config to the language iso of you choice; for example this one's iso is `pl`

```yml
menu_format: "&7as &8\xbb &7%section%"
actions_menu_title: akcje
actions_menu_item_lore: "&7Oznacza to, \u017ce je\u015bli\n&7klikniesz ten armor\n\
  &7stand, wykona si\u0119\n&7komenda: %command%\n\n&6\xbb &eKliknij, aby edytowa\u0107\
  \n&6\xbb &eShift + klik, aby usun\u0105\u0107"
actions_menu_create_name: "&eStw\xf3rz akcj\u0119"
actions_menu_create_lore: "&7Wybierz to, aby stworzy\u0107\n&7akcj\u0119, kt\xf3ra\
  \ wykonuje\n&7komendy po klikni\u0119ciu\n\n&eKliknij, aby stworzy\u0107"
actions_creation_message: "&aWpisz komend\u0119, kt\xf3r\u0105 chcesz ustawi\u0107\
  \ (bez '/'). Wpisz 'exit', aby anulowa\u0107."
actions_settings_menu_title: ustawienia akcji
actions_settings_trigger_name: '&eTyp Wyzwalacza'
actions_settings_trigger_lore: "&7Wybierz, jak komenda\n&7b\u0119dzie si\u0119 uruchamia\u0107\
  , gdy\n&7gracz wejdzie w interakcj\u0119\n&7z ArmorStandem.\n\n%trigger_list%\n\n\
  &eKliknij, aby zmieni\u0107"
actions_settings_sender_name: '&eNadawca'
actions_settings_sender_lore: "&7Wybierz, kto wy\u015ble\n&7komend\u0119. Wp\u0142\
  ywa to na\n&7dzia\u0142anie uprawnie\u0144 i wykonania.\n\n%sender_list%\n\n&eKliknij,\
  \ aby zmieni\u0107"
ai_menu_title: ustawienia ai
ai_command_description: "Popro\u015b AI o pomoc"
ai_command_thinking: "&7My\u015bli..."
ai_option_name: '&eOpcje AI'
ai_option_enabled_lore: "&7Opcje zwi\u0105zane ze\n&7sztuczn\u0105 inteligencj\u0105\
  \n&7tego ArmorStanda.\n\n&eKliknij, aby otworzy\u0107"
ai_option_disabled_lore: "&7W\u0142\u0105cz AI dla ArmorStand\xf3w,\n&7ustawiaj\u0105\
  c sw\xf3j klucz API\n&7w konfiguracji.\n\n&4\u2718 &cNie w\u0142\u0105czone"
ai_settings_memory_lore: "&7Dodaj w\u0142asne instrukcje,\n&7kt\xf3rych AI tego ArmorStanda\n\
  b\u0119dzie si\u0119 trzyma\u0107 podczas odpowiadania.\n\n%current%\n\n&6\xbb &eShift\
  \ + klik, aby zresetowa\u0107\n&6\xbb &eKliknij, aby zmieni\u0107"
ai_settings_toggle_lore: "&7W\u0142\u0105cz lub wy\u0142\u0105cz AI\n&7dla tego ArmorStanda\n\
  \n%ai_status%"
ai_memory_exit_success: "&aPomy\u015blnie opu\u015bci\u0142e\u015b sesj\u0119 ustawiania\
  \ pami\u0119ci."
ai_memory_update_success: "&aInstrukcje ArmorStanda zosta\u0142y zaktualizowane"
ai_prefix: "&7[&6\xbb&7] &6"
ai_response_format: "&7[&6\xbb&7] &6%response%"
ai_response_not_found: "B\u0142\u0105d AI: nie znaleziono tekstu asystenta w odpowiedzi"
ai_error: "&cB\u0142\u0105d AI: %error%"
ai_error_http: "&cB\u0142\u0105d AI: HTTP %code%, upewnij si\u0119, \u017ce masz po\u0142\
  \u0105czenie z internetem"
ai_http_error: "B\u0142\u0105d AI: HTTP {code}"
ai_http_error_with_internet: "B\u0142\u0105d AI: HTTP {code}, upewnij si\u0119, \u017c\
  e masz po\u0142\u0105czenie z internetem"
ai_parse_error: "B\u0142\u0105d przetwarzania odpowiedzi AI: {error}"
animation_command_description: Pokazuje komendy animacji
animation_command_header: '&6&lAdvanced &e&lArmorStands &7&lkomendy animacji'
animation_add_success: "&aAnimacja %animation% zosta\u0142a przypisana do ArmorStanda\
  \ %armorstand%"
animation_clear_description: Usuwa &7animacje danego as
animation_clear_success: "&aAnimacje %armorstand% zosta\u0142y usuni\u0119te"
animation_create_description: "&7Stw\xf3rz lub edytuj &7animacj\u0119 za pomoc\u0105\
  \ as"
animation_remove_description: "&7Ca\u0142kowicie usuwa animacj\u0119"
animation_remove_success: "&aAnimacja '%animation%' zosta\u0142a usuni\u0119ta"
animation_invalid: "&cNieprawid\u0142owa animacja"
animation_invalid_with_suggestion: "&cNieprawid\u0142owa animacja '%animation%'. Czy\
  \ chodzi\u0142o Ci o '%suggestion%'?"
animation_invalid_name: "&cNieprawid\u0142owa nazwa animacji"
animation_editor_already_has_animation: "&cNie mo\u017cna otworzy\u0107 edytora na\
  \ ArmorStandzie, kt\xf3ry ma ju\u017c animacj\u0119"
animation_editor_gamemode_changed: "&aTw\xf3j tryb gry zosta\u0142 tymczasowo zmieniony\
  \ na CREATIVE, poniewa\u017c sesje edycji nie obs\u0142uguj\u0105 trybu ADVENTURE.\
  \ Zostanie przywr\xf3cony automatycznie, gdy wyjdziesz."
animation_editor_entered: "&aPomy\u015blnie wszed\u0142e\u015b do sesji tworzenia/edycji\
  \ animacji"
animations_menu_successful_creation: "&aAnimacja zosta\u0142a zapisana, kliknij, aby\
  \ doda\u0107 j\u0105 do tego ArmorStanda"
keyframe_menu_title: edytor klatek kluczowych
keyframe_option_lore: "&ePRAWY PRZYCISK &7Dodaje klatk\u0119 kluczow\u0105\n&eSHIFT\
  \ + PRAWY PRZYCISK &7Otwiera menu klatek kluczowych\n\n&8&lAdvancedArmorStands Editor\
  \ Item"
keyframe_created: "&aDodano klatk\u0119 kluczow\u0105!"
keyframe_step_lore: "&7To jest %step%%suffix% krok\n&7animacji %animation%, kt\xf3\
  ry\n&7ustawi ArmorStanda w tej pozycji\n&7w swojej kolejce\n\n&eKliknij, aby usun\u0105\
  \u0107"
keyframe_interval_name: "&eOdst\u0119p: %interval%"
keyframe_interval_lore: "&7Ustawia op\xf3\u017anienie\n&7mi\u0119dzy klatkami animacji.\n\
  &7Im ni\u017csza warto\u015b\u0107,\n&7tym szybsza animacja.\n\n&6\xbb&e Lewy klik,\
  \ aby zwi\u0119kszy\u0107\n&6\xbb&e Prawy klik, aby zmniejszy\u0107.\n&6\xbb&e Przytrzymaj\
  \ Shift, aby zmienia\u0107\n&6\xbb&e co 10.\n\n&eKliknij, aby zmieni\u0107"
keyframe_loop_name: "&eP\u0119tla: %loop%"
keyframe_loop_lore: "&7Okre\u015bla, czy animacja\n&7ma si\u0119 powtarza\u0107\n\
  &7od pocz\u0105tku w niesko\u0144czono\u015b\u0107\n\n&eKliknij, aby zmieni\u0107"
save_menu_title: menu zapisu
save_menu_create_message: "&aWpisz nazw\u0119 typu, kt\xf3ry chcesz stworzy\u0107\
  \ (zostan\u0105 skopiowane w\u0142a\u015bciwo\u015bci tego ArmorStanda). Wpisz 'exit',\
  \ aby wyj\u015b\u0107"
save_menu_type_lore: "&7Wybranie tego nadpisze\n&7star\u0105 konfiguracj\u0119 %type%\
  \ obecn\u0105\n&7konfiguracj\u0105, kt\xf3r\u0105 w\u0142a\u015bnie stworzy\u0142\
  e\u015b\n\n&eKliknij, aby zapisa\u0107"
save_menu_type_saved: "&aW\u0142a\u015bciwo\u015bci ArmorStanda zapisano jako '%type%'"
save_menu_create_type_name: "&eStw\xf3rz typ"
save_menu_create_type_lore: "&7Wybierz to, aby stworzy\u0107\n&7typ z w\u0142a\u015b\
  ciwo\u015bciami\n&7tego armor standa\n\n&eKliknij, aby stworzy\u0107"
armor_stand_menu_title: ustawienia
armor_stand_not_loaded: "&cTen ArmorStand nie jest za\u0142adowany"
armor_stand_invalid: "&cNieprawid\u0142owy ArmorStand"
armor_stand_invalid_with_suggestion: "&cNieprawid\u0142owy ArmorStand '%armorstand%'.\
  \ Czy chodzi\u0142o Ci o '%suggestion%'?"
armorstand_not_found: '&cNie znaleziono ArmorStanda!'
world_not_found: "&cNie znaleziono \u015bwiata!"
teleported_to_armorstand: '&aTeleportowano do %name%'
armorstand_updated_success: "&aArmorStand zaktualizowany pomy\u015blnie!"
armorstand_updated_failed: "&cNie uda\u0142o si\u0119 zaktualizowa\u0107 ArmorStanda!"
armorstand_unavailable: "&cArmorStand nie jest ju\u017c dost\u0119pny!"
armorstand_unavailable_title: "&cArmorStand jest niedost\u0119pny"
armorstand_move_success: "&aArmorStand przeniesiono pomy\u015blnie."
armorstands_not_loaded: "&cWygl\u0105da na to, \u017ce %amount% ArmorStand\xf3w nie\
  \ zosta\u0142o za\u0142adowanych przez generator \u015bwiata. Aby to naprawi\u0107\
  , w\u0142\u0105cz 'auto-load-armor-stands' w konfiguracji, \u017ceby wszystkie \u0142\
  adowa\u0142y si\u0119 automatycznie."
issues_found_on_join: "&eAdvancedArmorStands napotka\u0142 %amount% b\u0142\u0105\
  d(\xf3w)/ostrze\u017cenie(\u0144) w tej sesji. Sprawd\u017a plik log\xf3w, aby pozna\u0107\
  \ szczeg\xf3\u0142y."
armorstand_save_confirm: "&aZr\xf3b to jeszcze %amount% raz%plural%, aby zapisa\u0107\
  \ tego ArmorStanda."
armorstand_saved_success: '&eArmorStand zapisano jako %name%!'
armorstand_delete_confirm: "&cZr\xf3b to jeszcze %amount% raz%plural%, aby usun\u0105\
  \u0107 tego ArmorStanda."
armorstand_deleted_success: "&aArmorStand zosta\u0142 usuni\u0119ty, ale mo\u017c\
  na go przywr\xf3ci\u0107 komend\u0105 restore. Zostanie usuni\u0119ty ca\u0142kowicie\
  \ po restarcie serwera"
command_no_permission: "&cNie masz uprawnie\u0144, aby u\u017cy\u0107 tej komendy!"
command_unknown: "&cKomenda '%command%' nie jest prawid\u0142ow\u0105 podkomend\u0105\
  ."
command_unknown_with_suggestion: "&cKomenda '%command%' nie jest prawid\u0142ow\u0105\
  \ podkomend\u0105. Czy chodzi\u0142o Ci o '%suggestion%'?"
command_help_invalid_page_number: "&cProsz\u0119 wpisa\u0107 prawid\u0142owy numer\
  \ strony."
command_help_invalid_page: "&cNieprawid\u0142owa strona. Wybierz stron\u0119 pomi\u0119\
  dzy 1 a %pages%."
command_usage_hover: "&eKliknij, aby u\u017cy\u0107 podpowiedzi"
command_examples: "&7Przyk\u0142ady:"
command_click_to_use: "&e&lKliknij, aby u\u017cy\u0107 tej komendy"
command_label: '&7Komenda: &e%command%'
command_description_label: '&7Opis: &f%description%'
create_description: Tworzy &7ArmorStanda
create_custom_usage: "&cU\u017cycie: /as create custom <name> <part> <x> <y> <z> [<part>\
  \ <x> <y> <z> ...]"
create_invalid_part_number: "&cNieprawid\u0142owa liczba dla cz\u0119\u015bci %part%.\
  \ U\u017cycie: <part> <x> <y> <z>"
create_unknown_part: "&cNieznana cz\u0119\u015b\u0107: %part%"
delete_description: Usuwa &7ArmorStanda
delete_all_success: "&aWszystkie ArmorStandy zosta\u0142y usuni\u0119te"
delete_success: "&aArmorStand w pe\u0142ni usuni\u0119ty"
debug_description: Pokazuje informacje debugowania
head_description: "Pobierz g\u0142ow\u0119 gracza"
head_success: "&aOtrzyma\u0142e\u015b g\u0142ow\u0119 gracza %player%"
list_description: "Pokazuje list\u0119 ArmorStand\xf3w"
list_empty_title: "&c&l     Nie znaleziono zapisanych ArmorStand\xf3w "
list_empty_hint: "&7U\u017cyj &e/as create <type> <name>&7, aby stworzy\u0107 swojego\
  \ pierwszego ArmorStanda!"
load_description: "\u0141aduje ArmorStanda"
load_no_unloaded: "&eNie znaleziono nieza\u0142adowanych ArmorStand\xf3w."
load_failed: "&cNie uda\u0142o si\u0119: %failed%"
move_description: Przenosi ArmorStanda do Twojej &7lokalizacji
options_description: Otwiera menu opcji
reload_description: "Prze\u0142adowuje konfiguracje pluginu"
reload_success: "&aKonfiguracja AdvancedArmorStand zosta\u0142a prze\u0142adowana"
reload_error: "&cB\u0142\u0105d podczas prze\u0142adowywania pluginu, sprawd\u017a\
  \ konsol\u0119, aby pozna\u0107 szczeg\xf3\u0142y"
rename_description: "Zmienia nazw\u0119 &7as"
rename_success: "&aZmieniono nazw\u0119 ArmorStanda z '%old_name%' na '%new_name%'"
restore_description: "Przywraca usuni\u0119tego ArmorStanda"
restore_not_deleted: "&cTen ArmorStand nie jest usuni\u0119ty lub jest ju\u017c za\
  \ p\xf3\u017ano"
restore_unknown_error: "&cNieznany b\u0142\u0105d, sprawd\u017a konsol\u0119, aby\
  \ uzyska\u0107 wi\u0119cej informacji"
restore_success: "&aArmorStand zosta\u0142 przywr\xf3cony"
teleport_not_on_ground: "&cTen ArmorStand nie stoi na ziemi. Na pewno chcesz si\u0119\
  \ do niego teleportowa\u0107?"
teleport_force_hint: "&cU\u017cyj '/as teleport %armorstand% --force', aby wymusi\u0107\
  \ teleportacj\u0119"
tell_description: Zadaj pytanie AI ArmorStanda
tell_ai_disabled: "&cTen ArmorStand nie ma w\u0142\u0105czonego AI"
inventory_exit_name: "&7\xbb &cWYJ\u015aCIE&7 (Prawy przycisk)"
inventory_exit_lore: |2-

  &8&oAdvancedArmorStands Editor Item
inventory_enter_session: "&aWszed\u0142e\u015b do sesji edycji, kliknij przedmiot\
  \ WYJ\u015aCIE, aby wr\xf3ci\u0107 i odzyska\u0107 swoje przedmioty"
editor_exit_name: "&7\xbb &cWYJ\u015aCIE &7(Prawy przycisk)"
editor_exit_lore: |2-

  &8AdvancedArmorStands Editor Item
head_item_lore: "&ePRAWY PRZYCISK &8\xbb &7Obraca g\u0142ow\u0119 w prawo\n&eLEWY\
  \ PRZYCISK &8\xbb &7Obraca g\u0142ow\u0119 w lewo\n&eSHIFT + PRAWY PRZYCISK &8\xbb\
  \ &7Podnosi g\u0142ow\u0119\n&eSHIFT + LEWY PRZYCISK &8\xbb &7Opuszcza g\u0142ow\u0119\
  \n\n&8&oAdvancedArmorStands Editor Item"
left_hand_item_lore: "&ePRAWY PRZYCISK &8\xbb &7Obraca lew\u0105 r\u0119k\u0119 w\
  \ prawo\n&eLEWY PRZYCISK &8\xbb &7Obraca lew\u0105 r\u0119k\u0119 w lewo\n&eSHIFT\
  \ + PRAWY PRZYCISK &8\xbb &7Podnosi lewe rami\u0119\n&eSHIFT + LEWY PRZYCISK &8\xbb\
  \ &7Opuszcza lewe rami\u0119\n\n&8&oAdvancedArmorStands Editor Item"
right_hand_item_lore: "&ePRAWY PRZYCISK &8\xbb &7Obraca praw\u0105 r\u0119k\u0119\
  \ w prawo\n&eLEWY PRZYCISK &8\xbb &7Obraca praw\u0105 r\u0119k\u0119 w lewo\n&eSHIFT\
  \ + PRAWY PRZYCISK &8\xbb &7Podnosi prawe rami\u0119\n&eSHIFT + LEWY PRZYCISK &8\xbb\
  \ &7Opuszcza lewe rami\u0119\n\n&8&oAdvancedArmorStands Editor Item"
left_leg_item_lore: "&ePRAWY PRZYCISK &8\xbb &7Obraca lew\u0105 nog\u0119 w prawo\n\
  &eLEWY PRZYCISK &8\xbb &7Obraca lew\u0105 nog\u0119 w lewo\n&eSHIFT + PRAWY PRZYCISK\
  \ &8\xbb &7Podnosi lew\u0105 nog\u0119\n&eSHIFT + LEWY PRZYCISK &8\xbb &7Opuszcza\
  \ lew\u0105 nog\u0119\n\n&8&oAdvancedArmorStands Editor Item"
right_leg_item_lore: "&ePRAWY PRZYCISK &8\xbb &7Obraca praw\u0105 nog\u0119 w prawo\n\
  &eLEWY PRZYCISK &8\xbb &7Obraca praw\u0105 nog\u0119 w lewo\n&eSHIFT + PRAWY PRZYCISK\
  \ &8\xbb &7Podnosi praw\u0105 nog\u0119\n&eSHIFT + LEWY PRZYCISK &8\xbb &7Opuszcza\
  \ praw\u0105 nog\u0119\n\n&8&oAdvancedArmorStands Editor Item"
rotate_item_lore: "&ePRAWY PRZYCISK &8\xbb &7Obraca w prawo\n&eLEWY PRZYCISK &8\xbb\
  \ &7Obraca w lewo\n&eSHIFT + PRAWY PRZYCISK (Blok) &8\xbb &7Podnosi cia\u0142o\n\
  &eSHIFT + LEWY PRZYCISK (Blok) &8\xbb &7Opuszcza cia\u0142o\n&eSHIFT + PRAWY PRZYCISK\
  \ (Powietrze) &8\xbb &7Przesuwa cia\u0142o w prawo\n&eSHIFT + LEWY PRZYCISK (Powietrze)\
  \ &8\xbb &7Przesuwa cia\u0142o w lewo\n\n&8&oAdvancedArmorStands Editor Item"
save_item_lore: "&7Kliknij, aby zapisa\u0107 ustawienia\n&7ArmorStanda jako typ, kt\xf3\
  rego b\u0119dziesz m\xf3g\u0142 u\u017cy\u0107 p\xf3\u017aniej\n\n&8&oAdvancedArmorStands\
  \ Editor Item"
edit_session_block_break: "&cNie mo\u017cesz niszczy\u0107 blok\xf3w w sesji edycji."
memory_session_block_break: "&cNie mo\u017cesz tu niszczy\u0107 blok\xf3w."
custom_name_session_start: "&aWpisz na czacie nazw\u0119, kt\xf3r\u0105 chcesz ustawi\u0107\
  . Aby wyj\u015b\u0107, wpisz 'exit'"
custom_name_session_already: "&cJeste\u015b ju\u017c w sesji ustawiania nazwy"
custom_name_exit_success: "&aPomy\u015blnie opu\u015bci\u0142e\u015b sesj\u0119 ustawiania\
  \ nazwy"
custom_name_set_success: "&aNazwa w\u0142asna ArmorStanda zosta\u0142a ustawiona na\
  \ '%name%'"
type_create_exit_success: "&aPomy\u015blnie opu\u015bci\u0142e\u015b sesj\u0119 tworzenia\
  \ typu"
type_already_exists: "&cTen typ ju\u017c istnieje. Wybierz inn\u0105 nazw\u0119 albo\
  \ wybierz ten typ w menu zapisu"
type_created_success: "&aStworzono typ '%type%' z w\u0142a\u015bciwo\u015bciami tego\
  \ ArmorStanda"
creation_cancelled: "&cTworzenie anulowane z powodu bezczynno\u015bci"
deletion_cancelled_due_to_inactivity: "&cUsuwanie anulowane z powodu bezczynno\u015b\
  ci."
arms_option_name: '&eRamiona'
arms_option_lore: "&7W\u0142\u0105cz lub wy\u0142\u0105cz\n&7ramiona tego ArmorStanda\
  \ \n\n%status%"
base_plate_option_name: '&ePodstawa'
base_plate_option_lore: "&7W\u0142\u0105cz lub wy\u0142\u0105cz\n&7podstaw\u0119 tego\
  \ ArmorStanda \n\n%status%"
custom_name_option_name: "&eW\u0142asna nazwa"
custom_name_option_lore: "&7Ustaw w\u0142asn\u0105 nazw\u0119\n&7dla tego ArmorStanda"
custom_name_option_current_name: "&eObecna&6 \xbb &e"
custom_name_option_no_name: "&eObecna nazwa&6 \xbb &eBrak"
custom_name_option_enter_name: "&aWpisz na czacie nazw\u0119, kt\xf3r\u0105 chcesz\
  \ ustawi\u0107. Aby wyj\u015b\u0107, wpisz 'exit'"
custom_name_option_already_editing: "&cJeste\u015b ju\u017c w sesji ustawiania nazwy"
custom_name_visible_option_name: "&eWidoczno\u015b\u0107 w\u0142asnej nazwy"
custom_name_visible_option_lore: "&7W\u0142\u0105cz lub wy\u0142\u0105cz\n&7widoczno\u015b\
  \u0107 nazwy tego ArmorStanda\n\n%status%"
glowing_option_name: "&e\u015awiecenie"
glowing_option_lore: "&7W\u0142\u0105cz lub wy\u0142\u0105cz\n&7\u015bwiecenie tego\
  \ ArmorStanda\n\n%status%"
glowing_option_enabled: "&6\u2714&e \u015awieci"
glowing_option_disabled: "&4\u2718&c Nie \u015bwieci"
small_option_name: "&eMa\u0142y"
small_option_lore: "&7W\u0142\u0105cz lub wy\u0142\u0105cz\n&7ma\u0142y rozmiar tego\
  \ ArmorStanda\n\n%status%"
small_option_enabled: "&6\u2714&e Jest ma\u0142y"
small_option_disabled: "&4\u2718&c Nie jest ma\u0142y"
visible_option_name: "&eWidoczno\u015b\u0107"
visible_option_lore: "&7W\u0142\u0105cz lub wy\u0142\u0105cz\n&7widoczno\u015b\u0107\
  \ tego ArmorStanda\n\n%status%"
visible_option_enabled: "&6\u2714&e Jest widoczny"
visible_option_disabled: "&4\u2718&c Nie jest widoczny"
delete_tool_name: "&eUsu\u0144"
delete_tool_lore: "&7Usuwa tego ArmorStanda\n&7tej akcji nie mo\u017cna cofn\u0105\
  \u0107\n\n&eKliknij, aby usun\u0105\u0107"
delete_tool_message: "&aArmorStand zosta\u0142 usuni\u0119ty, ale mo\u017cna go przywr\xf3\
  ci\u0107 komend\u0105 restore. Zostanie usuni\u0119ty ca\u0142kowicie po restarcie\
  \ serwera"
delete_tool_deleted: "&aArmorStand zosta\u0142 usuni\u0119ty, ale mo\u017cna go przywr\xf3\
  ci\u0107 komend\u0105 restore. Zostanie usuni\u0119ty ca\u0142kowicie po restarcie\
  \ serwera"
move_tool_name: "&ePrzenie\u015b"
move_tool_lore: "&7Przenosi ArmorStanda\n&7tam, gdzie chcesz\n\n&7Zalecane: u\u017c\
  yj zamiast tego\n&7komendy /as move\n\n&eKliknij, aby przenie\u015b\u0107"
move_tool_already_moving: "&cJeste\u015b ju\u017c w sesji przenoszenia"
move_tool_start_message: "&aZniszcz blok, na kt\xf3rym ma stan\u0105\u0107 ArmorStand"
move_tool_already: "&cJeste\u015b ju\u017c w sesji przenoszenia"
move_tool_start: "&aZniszcz blok, na kt\xf3rym ma stan\u0105\u0107 ArmorStand"
teleport_tool_name: '&eTeleportuj'
teleport_tool_lore: "&7Teleportuje Ci\u0119 do\n&7lokalizacji ArmorStanda\n\n&eKliknij,\
  \ aby si\u0119 teleportowa\u0107"
preview_accepted: "&aTa pozycja zosta\u0142a zaakceptowana dla tego ArmorStanda."
preview_denied: "&aNowa pozycja zosta\u0142a odrzucona."
```

:::note
This language is translated and generated by AI
:::