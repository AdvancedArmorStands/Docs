---
id: lang-es
title: Spanish
sidebar_position: 3
---

This is the Spanish language support for AdvancedArmorStands, the file can be found in `~/AdvancedArmorStand/languages/messages-es.yml`, don't edit the original language file because it resets to default at startup, you can change the language by editing the `language` value in config to the language iso of you choice; for example this one's iso is `es`


```yml
menu_format: "&7as &8\xbb &7%section%"
actions_menu_title: acciones
actions_menu_item_lore: "&7Esto significa que si\n&7haces clic en este armor\n&7stand,\
  \ se ejecutar\xe1\n&7el comando: %command%\n\n&6\xbb &eClic para editar\n&6\xbb\
  \ &eShift + clic para eliminar"
actions_menu_create_name: "&eCrear una acci\xf3n"
actions_menu_create_lore: "&7Selecciona esto para crear\n&7una acci\xf3n que ejecute\n\
  &7comandos al hacer clic\n\n&eClic para crear"
actions_creation_message: '&aEscribe el comando que quieres poner (sin ''/''). Escribe
  ''exit'' para cancelar.'
actions_settings_menu_title: "ajustes de la acci\xf3n"
actions_settings_trigger_name: '&eTipo de activador'
actions_settings_trigger_lore: "&7Elige c\xf3mo se activar\xe1\n&7el comando cuando\n\
  &7el jugador interact\xfae con\n&7el ArmorStand.\n\n%trigger_list%\n\n&eClic para\
  \ cambiar"
actions_settings_sender_name: '&eRemitente'
actions_settings_sender_lore: "&7Elige qui\xe9n enviar\xe1\n&7el comando. Esto afecta\
  \ a\n&7c\xf3mo funcionan los permisos y la ejecuci\xf3n.\n\n%sender_list%\n\n&eClic\
  \ para cambiar"
ai_menu_title: ajustes de ia
ai_command_description: Pide ayuda a la IA
ai_command_thinking: '&7Pensando...'
ai_option_name: '&eOpciones de IA'
ai_option_enabled_lore: |-
  &7Opciones relacionadas con
  &7la inteligencia artificial
  &7de este ArmorStand.

  &eClic para abrir
ai_option_disabled_lore: "&7Activa la IA para los ArmorStands\n&7poniendo tu clave\
  \ de API\n&7en la configuraci\xf3n.\n\n&4\u2718 &cNo activada"
ai_settings_memory_lore: "&7A\xf1ade instrucciones propias\n&7para que la IA de este\
  \ ArmorStand\nlas siga al responder.\n\n%current%\n\n&6\xbb &eShift + clic para\
  \ restablecer\n&6\xbb &eClic para cambiar"
ai_settings_toggle_lore: |-
  &7Activa o desactiva la IA
  &7de este ArmorStand

  %ai_status%
ai_memory_exit_success: "&aHas salido de la sesi\xf3n de memoria correctamente."
ai_memory_update_success: '&aInstrucciones del ArmorStand actualizadas correctamente'
ai_prefix: "&7[&6\xbb&7] &6"
ai_response_format: "&7[&6\xbb&7] &6%response%"
ai_response_not_found: "Error de IA: no se encontr\xf3 texto del asistente en la respuesta"
ai_error: '&cError de IA: %error%'
ai_error_http: "&cError de IA: HTTP %code%, aseg\xfarate de estar conectado a internet"
ai_http_error: 'Error de IA: HTTP {code}'
ai_http_error_with_internet: "Error de IA: HTTP {code}, aseg\xfarate de estar conectado\
  \ a internet"
ai_parse_error: 'Error al procesar la IA: {error}'
animation_command_description: "Muestra los comandos de animaci\xf3n"
animation_command_header: "&6&lAdvanced &e&lArmorStands &7&lcomandos de animaci\xf3\
  n"
animation_add_success: "&aAnimaci\xf3n %animation% asignada al ArmorStand %armorstand%"
animation_clear_description: Elimina las &7animaciones de un as
animation_clear_success: '&aAnimaciones de %armorstand% eliminadas correctamente'
animation_create_description: "&7Crea o edita una &7animaci\xf3n con un as"
animation_remove_description: "&7Elimina una animaci\xf3n por completo"
animation_remove_success: "&aAnimaci\xf3n '%animation%' eliminada correctamente"
animation_invalid: "&cAnimaci\xf3n no v\xe1lida"
animation_invalid_with_suggestion: "&cAnimaci\xf3n '%animation%' no v\xe1lida. \xbf\
  Quisiste decir '%suggestion%'?"
animation_invalid_name: "&cNombre de animaci\xf3n no v\xe1lido"
animation_editor_already_has_animation: "&cNo puedes abrir el editor en un ArmorStand\
  \ que ya tiene animaci\xf3n"
animation_editor_gamemode_changed: "&aTu modo de juego ha cambiado temporalmente a\
  \ CREATIVO, porque las sesiones de edici\xf3n no funcionan en modo AVENTURA. Se\
  \ restaurar\xe1 autom\xe1ticamente al salir."
animation_editor_entered: "&aHas entrado correctamente en la sesi\xf3n de creaci\xf3\
  n/edici\xf3n de animaci\xf3n"
animations_menu_successful_creation: "&aAnimaci\xf3n guardada correctamente, haz clic\
  \ para a\xf1adirla a este ArmorStand"
keyframe_menu_title: editor de fotogramas clave
keyframe_option_lore: "&eCLIC DERECHO &7A\xf1ade un fotograma clave\n&eSHIFT + CLIC\
  \ DERECHO &7Abre el men\xfa de fotogramas clave\n\n&8&lAdvancedArmorStands Editor\
  \ Item"
keyframe_created: "&a\xa1Fotograma clave a\xf1adido!"
keyframe_step_lore: "&7Este es el paso %step%%suffix%\n&7de la animaci\xf3n %animation%,\
  \ que\n&7pondr\xe1 al ArmorStand en esta posici\xf3n\n&7en su turno\n\n&eClic para\
  \ eliminar"
keyframe_interval_name: '&eIntervalo: %interval%'
keyframe_interval_lore: "&7Define el retraso\n&7entre fotogramas de la animaci\xf3\
  n.\n&7Cuanto m\xe1s bajo el valor,\n&7m\xe1s r\xe1pida ser\xe1 la animaci\xf3n.\n\
  \n&6\xbb&e Clic izquierdo para aumentar\n&6\xbb&e Clic derecho para disminuir.\n\
  &6\xbb&e Mant\xe9n Shift para cambiar\n&6\xbb&e de 10 en 10.\n\n&eClic para cambiar"
keyframe_loop_name: '&eBucle: %loop%'
keyframe_loop_lore: "&7Define si la animaci\xf3n\n&7debe repetirse en bucle\n&7desde\
  \ el inicio infinitamente\n\n&eClic para cambiar"
save_menu_title: "men\xfa de guardado"
save_menu_create_message: "&aEscribe el nombre del tipo que quieres crear (se copiar\xe1\
  n las propiedades de este ArmorStand). Escribe 'exit' para salir"
save_menu_type_lore: "&7Al seleccionar esto sobrescribir\xe1s\n&7tu antigua configuraci\xf3\
  n de %type% con\n&7la configuraci\xf3n actual que has hecho\n\n&eClic para guardar"
save_menu_type_saved: '&aPropiedades del ArmorStand guardadas en ''%type%'''
save_menu_create_type_name: '&eCrear un tipo'
save_menu_create_type_lore: |-
  &7Selecciona esto para crear
  &7un tipo con las propiedades
  &7de este armor stand

  &eClic para crear
armor_stand_menu_title: ajustes
armor_stand_not_loaded: "&cEste ArmorStand no est\xe1 cargado"
armor_stand_invalid: "&cArmorStand no v\xe1lido"
armor_stand_invalid_with_suggestion: "&cArmorStand '%armorstand%' no v\xe1lido. \xbf\
  Quisiste decir '%suggestion%'?"
armorstand_not_found: "&c\xa1ArmorStand no encontrado!"
world_not_found: "&c\xa1Mundo no encontrado!"
teleported_to_armorstand: '&aTeletransportado a %name%'
armorstand_updated_success: "&a\xa1ArmorStand actualizado correctamente!"
armorstand_updated_failed: "&c\xa1No se pudo actualizar el ArmorStand!"
armorstand_unavailable: "&c\xa1El ArmorStand ya no est\xe1 disponible!"
armorstand_unavailable_title: "&cEl ArmorStand no est\xe1 disponible"
armorstand_move_success: '&aArmorStand movido correctamente.'
armorstands_not_loaded: "&cParece que %amount% ArmorStands no han sido cargados por\
  \ el generador del mundo. Para solucionarlo, activa 'auto-load-armor-stands' en\
  \ la configuraci\xf3n para cargarlos todos autom\xe1ticamente."
issues_found_on_join: "&eAdvancedArmorStands ha encontrado %amount% error(es) y advertencia(s)\
  \ en esta sesi\xf3n. Revisa el archivo de registro para m\xe1s detalles."
armorstand_save_confirm: "&aHaz esto %amount% vez%plural% m\xe1s para guardar este\
  \ ArmorStand."
armorstand_saved_success: "&e\xa1ArmorStand guardado como %name%!"
armorstand_delete_confirm: "&cHaz esto %amount% vez%plural% m\xe1s para eliminar este\
  \ ArmorStand."
armorstand_deleted_success: "&aEl ArmorStand ha sido eliminado, pero puedes restaurarlo\
  \ con el comando restore. Se eliminar\xe1 por completo al reiniciar el servidor"
command_no_permission: "&c\xa1No tienes permiso para usar este comando!"
command_unknown: "&cEl comando '%command%' no es un subcomando v\xe1lido."
command_unknown_with_suggestion: "&cEl comando '%command%' no es un subcomando v\xe1\
  lido. \xbfQuisiste decir '%suggestion%'?"
command_help_invalid_page_number: "&cPor favor, introduce un n\xfamero de p\xe1gina\
  \ v\xe1lido."
command_help_invalid_page: "&cP\xe1gina no v\xe1lida. Elige una p\xe1gina entre 1\
  \ y %pages%."
command_usage_hover: '&eClic para autocompletar'
command_examples: '&7Ejemplos:'
command_click_to_use: '&e&lClic para usar este comando'
command_label: '&7Comando: &e%command%'
command_description_label: "&7Descripci\xf3n: &f%description%"
create_description: Crea un &7ArmorStand
create_custom_usage: '&cUso: /as create custom <name> <part> <x> <y> <z> [<part> <x>
  <y> <z> ...]'
create_invalid_part_number: "&cN\xfamero no v\xe1lido para la parte %part%. Uso: <part>\
  \ <x> <y> <z>"
create_unknown_part: '&cParte desconocida: %part%'
delete_description: Elimina un &7ArmorStand
delete_all_success: '&aTodos los ArmorStands eliminados correctamente'
delete_success: '&aArmorStand eliminado por completo'
debug_description: "Muestra informaci\xf3n de depuraci\xf3n"
head_description: "Obt\xe9n la cabeza de un jugador"
head_success: '&aTe han dado la cabeza de %player%'
list_description: Muestra una lista de ArmorStands
list_empty_title: '&c&l     No se encontraron ArmorStands guardados '
list_empty_hint: '&7Usa &e/as create <type> <name>&7 para crear tu primer ArmorStand!'
load_description: Carga un ArmorStand
load_no_unloaded: '&eNo se encontraron ArmorStands sin cargar.'
load_failed: "&cFall\xf3: %failed%"
move_description: "Mueve un ArmorStand a tu &7ubicaci\xf3n"
options_description: "Abre el men\xfa de opciones"
reload_description: "Recarga la configuraci\xf3n del plugin"
reload_success: "&aConfiguraci\xf3n de AdvancedArmorStand recargada correctamente"
reload_error: "&cError al recargar el plugin, revisa la consola para m\xe1s detalles"
rename_description: Cambia el nombre de un &7as
rename_success: '&aArmorStand renombrado de ''%old_name%'' a ''%new_name%'''
restore_description: Restaura un ArmorStand eliminado
restore_not_deleted: "&cEste ArmorStand no est\xe1 eliminado o ya es demasiado tarde"
restore_unknown_error: "&cError desconocido, revisa la consola para m\xe1s informaci\xf3\
  n"
restore_success: '&aArmorStand restaurado correctamente'
teleport_not_on_ground: "&cEste ArmorStand no est\xe1 en el suelo. \xbfSeguro que\
  \ quieres teletransportarte a \xe9l?"
teleport_force_hint: '&cUsa ''/as teleport %armorstand% --force'' para forzar el teletransporte'
tell_description: Hazle una pregunta a la IA de un ArmorStand
tell_ai_disabled: '&cEste ArmorStand no tiene la IA activada'
inventory_exit_name: "&7\xbb &cSALIR&7 (Clic derecho)"
inventory_exit_lore: |2-

  &8&oAdvancedArmorStands Editor Item
inventory_enter_session: "&aHas entrado en la sesi\xf3n de edici\xf3n. Haz clic en\
  \ el objeto SALIR para volver y recuperar tus objetos"
editor_exit_name: "&7\xbb &cSALIR &7(Clic derecho)"
editor_exit_lore: |2-

  &8AdvancedArmorStands Editor Item
head_item_lore: "&eCLIC DERECHO &8\xbb &7Gira la cabeza a la derecha\n&eCLIC IZQUIERDO\
  \ &8\xbb &7Gira la cabeza a la izquierda\n&eSHIFT + CLIC DERECHO &8\xbb &7Sube la\
  \ cabeza\n&eSHIFT + CLIC IZQUIERDO &8\xbb &7Baja la cabeza\n\n&8&oAdvancedArmorStands\
  \ Editor Item"
left_hand_item_lore: "&eCLIC DERECHO &8\xbb &7Gira la mano izquierda a la derecha\n\
  &eCLIC IZQUIERDO &8\xbb &7Gira la mano izquierda a la izquierda\n&eSHIFT + CLIC\
  \ DERECHO &8\xbb &7Sube el brazo izquierdo\n&eSHIFT + CLIC IZQUIERDO &8\xbb &7Baja\
  \ el brazo izquierdo\n\n&8&oAdvancedArmorStands Editor Item"
right_hand_item_lore: "&eCLIC DERECHO &8\xbb &7Gira la mano derecha a la derecha\n\
  &eCLIC IZQUIERDO &8\xbb &7Gira la mano derecha a la izquierda\n&eSHIFT + CLIC DERECHO\
  \ &8\xbb &7Sube el brazo derecho\n&eSHIFT + CLIC IZQUIERDO &8\xbb &7Baja el brazo\
  \ izquierdo\n\n&8&oAdvancedArmorStands Editor Item"
left_leg_item_lore: "&eCLIC DERECHO &8\xbb &7Gira la pierna izquierda a la derecha\n\
  &eCLIC IZQUIERDO &8\xbb &7Gira la pierna izquierda a la izquierda\n&eSHIFT + CLIC\
  \ DERECHO &8\xbb &7Sube la pierna izquierda\n&eSHIFT + CLIC IZQUIERDO &8\xbb &7Baja\
  \ la pierna izquierda\n\n&8&oAdvancedArmorStands Editor Item"
right_leg_item_lore: "&eCLIC DERECHO &8\xbb &7Gira la pierna derecha a la derecha\n\
  &eCLIC IZQUIERDO &8\xbb &7Gira la pierna derecha a la izquierda\n&eSHIFT + CLIC\
  \ DERECHO &8\xbb &7Sube la pierna derecha\n&eSHIFT + CLIC IZQUIERDO &8\xbb &7Baja\
  \ la pierna derecha\n\n&8&oAdvancedArmorStands Editor Item"
rotate_item_lore: "&eCLIC DERECHO &8\xbb &7Gira a la derecha\n&eCLIC IZQUIERDO &8\xbb\
  \ &7Gira a la izquierda\n&eSHIFT + CLIC DERECHO (Bloque) &8\xbb &7Sube el cuerpo\n\
  &eSHIFT + CLIC IZQUIERDO (Bloque) &8\xbb &7Baja el cuerpo\n&eSHIFT + CLIC DERECHO\
  \ (Aire) &8\xbb &7Mueve el cuerpo a la derecha\n&eSHIFT + CLIC IZQUIERDO (Aire)\
  \ &8\xbb &7Mueve el cuerpo a la izquierda\n\n&8&oAdvancedArmorStands Editor Item"
save_item_lore: "&7Haz clic para guardar la configuraci\xf3n\n&7del ArmorStand como\
  \ un tipo que podr\xe1s usar despu\xe9s\n\n&8&oAdvancedArmorStands Editor Item"
edit_session_block_break: "&cNo puedes romper bloques en la sesi\xf3n de edici\xf3\
  n."
memory_session_block_break: "&cNo puedes romper bloques aqu\xed."
custom_name_session_start: '&aEscribe en el chat el nombre que quieres poner. Para
  salir escribe ''exit'''
custom_name_session_already: "&cYa est\xe1s en una sesi\xf3n para poner un nombre"
custom_name_exit_success: "&aHas salido correctamente de la sesi\xf3n de nombre"
custom_name_set_success: '&aNombre del ArmorStand puesto correctamente como ''%name%'''
type_create_exit_success: "&aHas salido correctamente de la sesi\xf3n de creaci\xf3\
  n de tipo"
type_already_exists: "&cEste tipo ya existe. Elige otro nombre o selecciona el tipo\
  \ en el men\xfa de guardado"
type_created_success: '&aTipo ''%type%'' creado con las propiedades de este ArmorStand'
creation_cancelled: "&cCreaci\xf3n cancelada por inactividad"
deletion_cancelled_due_to_inactivity: "&cEliminaci\xf3n cancelada por inactividad."
arms_option_name: '&eBrazos'
arms_option_lore: "&7Activa o desactiva\n&7los brazos de este ArmorStand \n\n%status%"
base_plate_option_name: '&ePlaca base'
base_plate_option_lore: "&7Activa o desactiva\n&7la placa base de este ArmorStand\
  \ \n\n%status%"
custom_name_option_name: '&eNombre personalizado'
custom_name_option_lore: |-
  &7Pon un nombre personalizado
  &7para este ArmorStand
custom_name_option_current_name: "&eActual&6 \xbb &e"
custom_name_option_no_name: "&eNombre actual&6 \xbb &eNinguno"
custom_name_option_enter_name: '&aEscribe en el chat el nombre que quieres poner.
  Para salir escribe ''exit'''
custom_name_option_already_editing: "&cYa est\xe1s en una sesi\xf3n para poner un\
  \ nombre"
custom_name_visible_option_name: '&eNombre personalizado visible'
custom_name_visible_option_lore: |-
  &7Activa o desactiva
  &7el nombre personalizado de este ArmorStand

  %status%
glowing_option_name: '&eBrillo'
glowing_option_lore: |-
  &7Activa o desactiva
  &7el brillo de este ArmorStand

  %status%
glowing_option_enabled: "&6\u2714&e Brilla"
glowing_option_disabled: "&4\u2718&c No brilla"
small_option_name: "&ePeque\xf1o"
small_option_lore: "&7Activa o desactiva\n&7el tama\xf1o peque\xf1o de este ArmorStand\n\
  \n%status%"
small_option_enabled: "&6\u2714&e Es peque\xf1o"
small_option_disabled: "&4\u2718&c No es peque\xf1o"
visible_option_name: '&eVisibilidad'
visible_option_lore: |-
  &7Activa o desactiva
  &7la visibilidad de este ArmorStand

  %status%
visible_option_enabled: "&6\u2714&e Es visible"
visible_option_disabled: "&4\u2718&c No es visible"
delete_tool_name: '&eEliminar'
delete_tool_lore: "&7Elimina este ArmorStand\n&7esta acci\xf3n no se puede deshacer\n\
  \n&eClic para eliminar"
delete_tool_message: "&aEl ArmorStand ha sido eliminado, pero puedes restaurarlo con\
  \ el comando restore. Se eliminar\xe1 por completo al reiniciar el servidor"
delete_tool_deleted: "&aEl ArmorStand ha sido eliminado, pero puedes restaurarlo con\
  \ el comando restore. Se eliminar\xe1 por completo al reiniciar el servidor"
move_tool_name: '&eMover'
move_tool_lore: |-
  &7Mueve el ArmorStand
  &7a donde quieras

  &7Recomendado: usa el
  &7comando /as move en su lugar

  &eClic para mover
move_tool_already_moving: "&cYa est\xe1s en la sesi\xf3n de movimiento"
move_tool_start_message: "&aRompe el bloque sobre el que quieres que est\xe9 el ArmorStand"
move_tool_already: "&cYa est\xe1s en la sesi\xf3n de movimiento"
move_tool_start: "&aRompe el bloque sobre el que quieres que est\xe9 el ArmorStand"
teleport_tool_name: '&eTeletransportar'
teleport_tool_lore: "&7Teletransp\xf3rtate a\n&7la ubicaci\xf3n del ArmorStand\n\n\
  &eClic para teletransportarte"
preview_accepted: "&aPosici\xf3n aceptada para este ArmorStand."
preview_denied: "&aNueva posici\xf3n rechazada correctamente."
```

:::note
This language is translated and generated by AI
:::