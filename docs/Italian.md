---
id: lang-it
title: Italian
sidebar_position: 3
---

This is the Italian language support for AdvancedArmorStands, the file can be found in `~/AdvancedArmorStand/languages/messages-it.yml`, don't edit the original language file because it resets to default at startup, you can change the language by editing the `language` value in config to the language iso of you choice; for example this one's iso is `it`

```yml
menu_format: "&7as &8\xbb &7%section%"
actions_menu_title: azioni
actions_menu_item_lore: "&7Questo significa che se\n&7clicchi su questo armor\n&7stand,\
  \ verr\xe0 eseguito\n&7il comando: %command%\n\n&6\xbb &eClicca per modificare\n\
  &6\xbb &eShift + clic per rimuovere"
actions_menu_create_name: '&eCrea un''azione'
actions_menu_create_lore: |-
  &7Seleziona questo per creare
  &7un'azione che esegue
  &7comandi al clic

  &eClicca per creare
actions_creation_message: '&aScrivi il comando che vuoi impostare (senza ''/''). Scrivi
  ''exit'' per annullare.'
actions_settings_menu_title: impostazioni azione
actions_settings_trigger_name: '&eTipo di attivazione'
actions_settings_trigger_lore: "&7Scegli come verr\xe0\n&7attivato il comando quando\n\
  &7il giocatore interagisce con\n&7l'ArmorStand.\n\n%trigger_list%\n\n&eClicca per\
  \ cambiare"
actions_settings_sender_name: '&eMittente'
actions_settings_sender_lore: "&7Scegli chi invier\xe0\n&7il comando. Questo influisce\
  \ su\n&7come funzionano i permessi e l'esecuzione.\n\n%sender_list%\n\n&eClicca\
  \ per cambiare"
ai_menu_title: impostazioni ia
ai_command_description: Chiedi aiuto all'IA
ai_command_thinking: '&7Sta pensando...'
ai_option_name: '&eOpzioni IA'
ai_option_enabled_lore: |-
  &7Opzioni relative
  &7all'intelligenza artificiale
  &7di questo ArmorStand.

  &eClicca per aprire
ai_option_disabled_lore: "&7Attiva l'IA per gli ArmorStand\n&7impostando la tua chiave\
  \ API\n&7nella configurazione.\n\n&4\u2718 &cNon attivata"
ai_settings_memory_lore: "&7Aggiungi istruzioni personalizzate\n&7che l'IA di questo\
  \ ArmorStand\nseguir\xe0 quando risponde.\n\n%current%\n\n&6\xbb &eShift + clic\
  \ per ripristinare\n&6\xbb &eClicca per cambiare"
ai_settings_toggle_lore: |-
  &7Attiva o disattiva l'IA
  &7di questo ArmorStand

  %ai_status%
ai_memory_exit_success: '&aSei uscito correttamente dalla sessione di memoria.'
ai_memory_update_success: '&aIstruzioni dell''ArmorStand aggiornate correttamente'
ai_prefix: "&7[&6\xbb&7] &6"
ai_response_format: "&7[&6\xbb&7] &6%response%"
ai_response_not_found: "Errore IA: non \xe8 stato trovato il testo dell'assistente\
  \ nella risposta"
ai_error: '&cErrore IA: %error%'
ai_error_http: '&cErrore IA: HTTP %code%, assicurati di essere connesso a internet'
ai_http_error: 'Errore IA: HTTP {code}'
ai_http_error_with_internet: 'Errore IA: HTTP {code}, assicurati di essere connesso
  a internet'
ai_parse_error: 'Errore di elaborazione IA: {error}'
animation_command_description: Mostra i comandi di animazione
animation_command_header: '&6&lAdvanced &e&lArmorStands &7&lcomandi di animazione'
animation_add_success: '&aAnimazione %animation% assegnata all''ArmorStand %armorstand%'
animation_clear_description: Rimuove le &7animazioni di un as
animation_clear_success: '&aAnimazioni di %armorstand% rimosse correttamente'
animation_create_description: '&7Crea o modifica un''&7animazione con un as'
animation_remove_description: '&7Rimuove completamente un''animazione'
animation_remove_success: '&aAnimazione ''%animation%'' rimossa correttamente'
animation_invalid: '&cAnimazione non valida'
animation_invalid_with_suggestion: '&cAnimazione ''%animation%'' non valida. Intendevi
  ''%suggestion%''?'
animation_invalid_name: '&cNome animazione non valido'
animation_editor_already_has_animation: "&cNon puoi aprire l'editor su un ArmorStand\
  \ che ha gi\xe0 un'animazione"
animation_editor_gamemode_changed: "&aLa tua modalit\xe0 di gioco \xe8 stata temporaneamente\
  \ cambiata in CREATIVA, perch\xe9 le sessioni di modifica non supportano la modalit\xe0\
  \ AVVENTURA. Verr\xe0 ripristinata automaticamente quando uscirai."
animation_editor_entered: '&aSei entrato correttamente nella sessione di creazione/modifica
  animazione'
animations_menu_successful_creation: '&aAnimazione salvata correttamente, clicca per
  aggiungerla a questo ArmorStand'
keyframe_menu_title: editor fotogrammi chiave
keyframe_option_lore: |-
  &eCLIC DESTRO &7Aggiungi un fotogramma chiave
  &eSHIFT + CLIC DESTRO &7Apri il menu dei fotogrammi chiave

  &8&lAdvancedArmorStands Editor Item
keyframe_created: '&aFotogramma chiave aggiunto!'
keyframe_step_lore: "&7Questo \xe8 il passo %step%%suffix%\n&7dell'animazione %animation%,\
  \ che\n&7metter\xe0 l'ArmorStand in questa posizione\n&7al suo turno\n\n&eClicca\
  \ per rimuovere"
keyframe_interval_name: '&eIntervallo: %interval%'
keyframe_interval_lore: "&7Imposta il ritardo\n&7tra i fotogrammi dell'animazione.\n\
  &7Pi\xf9 basso \xe8 il valore,\n&7pi\xf9 veloce sar\xe0 l'animazione.\n\n&6\xbb\
  &e Clic sinistro per aumentare\n&6\xbb&e Clic destro per diminuire.\n&6\xbb&e Tieni\
  \ premuto Shift per cambiare\n&6\xbb&e a incrementi di 10.\n\n&eClicca per cambiare"
keyframe_loop_name: '&eLoop: %loop%'
keyframe_loop_lore: |-
  &7Stabilisce se l'animazione
  &7deve ripetersi in loop
  &7dall'inizio all'infinito

  &eClicca per cambiare
save_menu_title: menu di salvataggio
save_menu_create_message: "&aScrivi il nome del tipo che vuoi creare (verranno copiate\
  \ le propriet\xe0 di questo ArmorStand). Scrivi 'exit' per uscire"
save_menu_type_lore: |-
  &7Selezionando questo sovrascriverai
  &7la vecchia configurazione di %type% con
  &7quella attuale che hai appena creato

  &eClicca per salvare
save_menu_type_saved: "&aPropriet\xe0 dell'ArmorStand salvate in '%type%'"
save_menu_create_type_name: '&eCrea un tipo'
save_menu_create_type_lore: "&7Seleziona questo per creare\n&7un tipo con le propriet\xe0\
  \n&7di questo armor stand\n\n&eClicca per creare"
armor_stand_menu_title: impostazioni
armor_stand_not_loaded: "&cQuesto ArmorStand non \xe8 caricato"
armor_stand_invalid: '&cArmorStand non valido'
armor_stand_invalid_with_suggestion: '&cArmorStand ''%armorstand%'' non valido. Intendevi
  ''%suggestion%''?'
armorstand_not_found: '&cArmorStand non trovato!'
world_not_found: '&cMondo non trovato!'
teleported_to_armorstand: '&aTeletrasportato a %name%'
armorstand_updated_success: '&aArmorStand aggiornato correttamente!'
armorstand_updated_failed: '&cImpossibile aggiornare l''ArmorStand!'
armorstand_unavailable: "&cL'ArmorStand non \xe8 pi\xf9 disponibile!"
armorstand_unavailable_title: "&cL'ArmorStand non \xe8 disponibile"
armorstand_move_success: '&aArmorStand spostato correttamente.'
armorstands_not_loaded: '&cSembra che %amount% ArmorStand non siano stati caricati
  dal generatore del mondo. Per risolvere, attiva ''auto-load-armor-stands'' nella
  configurazione per caricarli tutti automaticamente.'
issues_found_on_join: '&eAdvancedArmorStands ha riscontrato %amount% errore/i e avviso/i
  in questa sessione. Controlla il file di log per i dettagli.'
armorstand_save_confirm: '&aFallo ancora %amount% volta%plural% per salvare questo
  ArmorStand.'
armorstand_saved_success: '&eArmorStand salvato come %name%!'
armorstand_delete_confirm: '&cFallo ancora %amount% volta%plural% per eliminare questo
  ArmorStand.'
armorstand_deleted_success: "&aL'ArmorStand \xe8 stato eliminato, ma puoi ripristinarlo\
  \ con il comando restore. Verr\xe0 eliminato definitivamente al riavvio del server"
command_no_permission: '&cNon hai il permesso di usare questo comando!'
command_unknown: "&cIl comando '%command%' non \xe8 un sottocomando valido."
command_unknown_with_suggestion: "&cIl comando '%command%' non \xe8 un sottocomando\
  \ valido. Intendevi '%suggestion%'?"
command_help_invalid_page_number: '&cPer favore, inserisci un numero di pagina valido.'
command_help_invalid_page: '&cPagina non valida. Scegli una pagina tra 1 e %pages%.'
command_usage_hover: '&eClicca per usare il suggerimento'
command_examples: '&7Esempi:'
command_click_to_use: '&e&lClicca per usare questo comando'
command_label: '&7Comando: &e%command%'
command_description_label: '&7Descrizione: &f%description%'
create_description: Crea un &7ArmorStand
create_custom_usage: '&cUso: /as create custom <name> <part> <x> <y> <z> [<part> <x>
  <y> <z> ...]'
create_invalid_part_number: '&cNumero non valido per la parte %part%. Uso: <part>
  <x> <y> <z>'
create_unknown_part: '&cParte sconosciuta: %part%'
delete_description: Elimina un &7ArmorStand
delete_all_success: '&aTutti gli ArmorStand eliminati correttamente'
delete_success: '&aArmorStand eliminato completamente'
debug_description: Mostra informazioni di debug
head_description: Ottieni la testa di un giocatore
head_success: "&aTi \xe8 stata data la testa di %player%"
list_description: Mostra un elenco di ArmorStand
list_empty_title: '&c&l     Nessun ArmorStand salvato trovato '
list_empty_hint: '&7Usa &e/as create <type> <name>&7 per creare il tuo primo ArmorStand!'
load_description: Carica un ArmorStand
load_no_unloaded: '&eNessun ArmorStand non caricato trovato.'
load_failed: '&cFallito: %failed%'
move_description: Sposta un ArmorStand nella tua &7posizione
options_description: Apre il menu delle opzioni
reload_description: Ricarica le configurazioni del plugin
reload_success: '&aConfigurazione di AdvancedArmorStand ricaricata correttamente'
reload_error: '&cErrore durante il ricaricamento del plugin, controlla la console
  per maggiori dettagli'
rename_description: Cambia il nome di un &7as
rename_success: '&aArmorStand rinominato da ''%old_name%'' a ''%new_name%'''
restore_description: Ripristina un ArmorStand eliminato
restore_not_deleted: "&cQuesto ArmorStand non \xe8 eliminato o \xe8 troppo tardi"
restore_unknown_error: '&cErrore sconosciuto, controlla la console per maggiori informazioni'
restore_success: '&aArmorStand ripristinato correttamente'
teleport_not_on_ground: "&cQuesto ArmorStand non \xe8 sul terreno. Sei sicuro di volerti\
  \ teletrasportare l\xec?"
teleport_force_hint: '&cUsa ''/as teleport %armorstand% --force'' per forzare il teletrasporto'
tell_description: Fai una domanda all'IA di un ArmorStand
tell_ai_disabled: '&cQuesto ArmorStand non ha l''IA attivata'
inventory_exit_name: "&7\xbb &cUSCITA&7 (Clic destro)"
inventory_exit_lore: |2-

  &8&oAdvancedArmorStands Editor Item
inventory_enter_session: '&aSei entrato nella sessione di modifica, clicca sull''oggetto
  USCITA per tornare indietro e recuperare i tuoi oggetti'
editor_exit_name: "&7\xbb &cUSCITA &7(Clic destro)"
editor_exit_lore: |2-

  &8AdvancedArmorStands Editor Item
head_item_lore: "&eCLIC DESTRO &8\xbb &7Ruota la testa verso destra\n&eCLIC SINISTRO\
  \ &8\xbb &7Ruota la testa verso sinistra\n&eSHIFT + CLIC DESTRO &8\xbb &7Alza la\
  \ testa\n&eSHIFT + CLIC SINISTRO &8\xbb &7Abbassa la testa\n\n&8&oAdvancedArmorStands\
  \ Editor Item"
left_hand_item_lore: "&eCLIC DESTRO &8\xbb &7Ruota la mano sinistra verso destra\n\
  &eCLIC SINISTRO &8\xbb &7Ruota la mano sinistra verso sinistra\n&eSHIFT + CLIC DESTRO\
  \ &8\xbb &7Alza il braccio sinistro\n&eSHIFT + CLIC SINISTRO &8\xbb &7Abbassa il\
  \ braccio sinistro\n\n&8&oAdvancedArmorStands Editor Item"
right_hand_item_lore: "&eCLIC DESTRO &8\xbb &7Ruota la mano destra verso destra\n\
  &eCLIC SINISTRO &8\xbb &7Ruota la mano destra verso sinistra\n&eSHIFT + CLIC DESTRO\
  \ &8\xbb &7Alza il braccio destro\n&eSHIFT + CLIC SINISTRO &8\xbb &7Abbassa il braccio\
  \ sinistro\n\n&8&oAdvancedArmorStands Editor Item"
left_leg_item_lore: "&eCLIC DESTRO &8\xbb &7Ruota la gamba sinistra verso destra\n\
  &eCLIC SINISTRO &8\xbb &7Ruota la gamba sinistra verso sinistra\n&eSHIFT + CLIC\
  \ DESTRO &8\xbb &7Alza la gamba sinistra\n&eSHIFT + CLIC SINISTRO &8\xbb &7Abbassa\
  \ la gamba sinistra\n\n&8&oAdvancedArmorStands Editor Item"
right_leg_item_lore: "&eCLIC DESTRO &8\xbb &7Ruota la gamba destra verso destra\n\
  &eCLIC SINISTRO &8\xbb &7Ruota la gamba destra verso sinistra\n&eSHIFT + CLIC DESTRO\
  \ &8\xbb &7Alza la gamba destra\n&eSHIFT + CLIC SINISTRO &8\xbb &7Abbassa la gamba\
  \ destra\n\n&8&oAdvancedArmorStands Editor Item"
rotate_item_lore: "&eCLIC DESTRO &8\xbb &7Ruota verso destra\n&eCLIC SINISTRO &8\xbb\
  \ &7Ruota verso sinistra\n&eSHIFT + CLIC DESTRO (Blocco) &8\xbb &7Alza il corpo\n\
  &eSHIFT + CLIC SINISTRO (Blocco) &8\xbb &7Abbassa il corpo\n&eSHIFT + CLIC DESTRO\
  \ (Aria) &8\xbb &7Sposta il corpo a destra\n&eSHIFT + CLIC SINISTRO (Aria) &8\xbb\
  \ &7Sposta il corpo a sinistra\n\n&8&oAdvancedArmorStands Editor Item"
save_item_lore: "&7Clicca per salvare la configurazione\n&7dell'ArmorStand come tipo,\
  \ cos\xec potrai usarla in seguito\n\n&8&oAdvancedArmorStands Editor Item"
edit_session_block_break: '&cNon puoi rompere blocchi nella sessione di modifica.'
memory_session_block_break: '&cNon puoi rompere blocchi qui.'
custom_name_session_start: '&aScrivi in chat il nome che vuoi impostare. Per uscire
  scrivi ''exit'''
custom_name_session_already: "&cSei gi\xe0 in una sessione di impostazione nome"
custom_name_exit_success: '&aSei uscito correttamente dalla sessione di impostazione
  nome'
custom_name_set_success: '&aNome personalizzato dell''ArmorStand impostato correttamente
  su ''%name%'''
type_create_exit_success: '&aSei uscito correttamente dalla sessione di creazione
  tipo'
type_already_exists: "&cQuesto tipo esiste gi\xe0. Scegli un altro nome oppure seleziona\
  \ il tipo nel menu di salvataggio"
type_created_success: "&aTipo '%type%' creato con le propriet\xe0 di questo ArmorStand"
creation_cancelled: "&cCreazione annullata per inattivit\xe0"
deletion_cancelled_due_to_inactivity: "&cEliminazione annullata per inattivit\xe0."
arms_option_name: '&eBraccia'
arms_option_lore: "&7Attiva o disattiva\n&7le braccia di questo ArmorStand \n\n%status%"
base_plate_option_name: '&eBase'
base_plate_option_lore: "&7Attiva o disattiva\n&7la base di questo ArmorStand \n\n\
  %status%"
custom_name_option_name: '&eNome personalizzato'
custom_name_option_lore: |-
  &7Imposta un nome personalizzato
  &7per questo ArmorStand
custom_name_option_current_name: "&eAttuale&6 \xbb &e"
custom_name_option_no_name: "&eNome attuale&6 \xbb &eNessuno"
custom_name_option_enter_name: '&aScrivi in chat il nome che vuoi impostare. Per uscire
  scrivi ''exit'''
custom_name_option_already_editing: "&cSei gi\xe0 in una sessione di impostazione\
  \ nome"
custom_name_visible_option_name: '&eNome personalizzato visibile'
custom_name_visible_option_lore: |-
  &7Attiva o disattiva
  &7il nome personalizzato di questo ArmorStand

  %status%
glowing_option_name: '&eBagliore'
glowing_option_lore: |-
  &7Attiva o disattiva
  &7il bagliore di questo ArmorStand

  %status%
glowing_option_enabled: "&6\u2714&e \xc8 luminoso"
glowing_option_disabled: "&4\u2718&c Non \xe8 luminoso"
small_option_name: '&ePiccolo'
small_option_lore: |-
  &7Attiva o disattiva
  &7la dimensione piccola di questo ArmorStand

  %status%
small_option_enabled: "&6\u2714&e \xc8 piccolo"
small_option_disabled: "&4\u2718&c Non \xe8 piccolo"
visible_option_name: "&eVisibilit\xe0"
visible_option_lore: "&7Attiva o disattiva\n&7la visibilit\xe0 di questo ArmorStand\n\
  \n%status%"
visible_option_enabled: "&6\u2714&e \xc8 visibile"
visible_option_disabled: "&4\u2718&c Non \xe8 visibile"
delete_tool_name: '&eElimina'
delete_tool_lore: "&7Elimina questo ArmorStand\n&7questa azione non pu\xf2 essere\
  \ annullata\n\n&eClicca per eliminare"
delete_tool_message: "&aL'ArmorStand \xe8 stato eliminato, ma puoi ripristinarlo con\
  \ il comando restore. Verr\xe0 eliminato definitivamente al riavvio del server"
delete_tool_deleted: "&aL'ArmorStand \xe8 stato eliminato, ma puoi ripristinarlo con\
  \ il comando restore. Verr\xe0 eliminato definitivamente al riavvio del server"
move_tool_name: '&eSposta'
move_tool_lore: |-
  &7Sposta l'ArmorStand
  &7dove preferisci

  &7Consigliato: usa invece
  &7il comando /as move

  &eClicca per spostare
move_tool_already_moving: "&cSei gi\xe0 nella sessione di spostamento"
move_tool_start_message: '&aRompi il blocco su cui vuoi che si trovi l''ArmorStand'
move_tool_already: "&cSei gi\xe0 nella sessione di spostamento"
move_tool_start: '&aRompi il blocco su cui vuoi che si trovi l''ArmorStand'
teleport_tool_name: '&eTeletrasporto'
teleport_tool_lore: |-
  &7Teletrasportati
  &7nella posizione dell'ArmorStand

  &eClicca per teletrasportarti
preview_accepted: '&aPosizione accettata per questo ArmorStand.'
preview_denied: '&aNuova posizione rifiutata correttamente.'
```

:::note
This language is translated and generated by AI
:::