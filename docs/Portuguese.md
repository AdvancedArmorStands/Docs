---
id: lang-pt
title: Portuguese
sidebar_position: 3
---

This is the Portuguese language support for AdvancedArmorStands, the file can be found in `~/AdvancedArmorStand/languages/messages-pt.yml`, don't edit the original language file because it resets to default at startup, you can change the language by editing the `language` value in config to the language iso of you choice; for example this one's iso is `pt`


```yml
menu_format: "&7as &8\xbb &7%section%"
actions_menu_title: "a\xe7\xf5es"
actions_menu_item_lore: "&7Isso significa que se\n&7voc\xea clicar nesse armor\n&7stand,\
  \ o comando\n&7ser\xe1 executado: %command%\n\n&6\xbb &eClique para editar\n&6\xbb\
  \ &eShift + clique para remover"
actions_menu_create_name: "&eCriar uma a\xe7\xe3o"
actions_menu_create_lore: "&7Selecione isso para criar\n&7uma a\xe7\xe3o que executa\n\
  &7comandos ao clicar\n\n&eClique para criar"
actions_creation_message: "&aDigite o comando que voc\xea quer definir (sem '/').\
  \ Digite 'exit' para cancelar."
actions_settings_menu_title: "configura\xe7\xf5es da a\xe7\xe3o"
actions_settings_trigger_name: '&eTipo de Gatilho'
actions_settings_trigger_lore: "&7Escolha como o comando\n&7ser\xe1 acionado quando\n\
  &7o jogador interagir com\n&7o ArmorStand.\n\n%trigger_list%\n\n&eClique para mudar"
actions_settings_sender_name: '&eRemetente'
actions_settings_sender_lore: "&7Escolha quem vai enviar\n&7o comando. Isso afeta\
  \ como\n&7as permiss\xf5es e a execu\xe7\xe3o funcionam.\n\n%sender_list%\n\n&eClique\
  \ para mudar"
ai_menu_title: "configura\xe7\xf5es de ia"
ai_command_description: "Pe\xe7a ajuda para a IA"
ai_command_thinking: '&7Pensando...'
ai_option_name: "&eOp\xe7\xf5es de IA"
ai_option_enabled_lore: "&7Op\xe7\xf5es relacionadas \xe0\n&7intelig\xeancia artificial\n\
  &7deste ArmorStand.\n\n&eClique para abrir"
ai_option_disabled_lore: "&7Ative a IA para os ArmorStands\n&7colocando sua chave\
  \ de API\n&7na configura\xe7\xe3o.\n\n&4\u2718 &cN\xe3o ativada"
ai_settings_memory_lore: "&7Adicione instru\xe7\xf5es personalizadas\n&7para a IA\
  \ deste ArmorStand\nseguir ao responder.\n\n%current%\n\n&6\xbb &eShift + clique\
  \ para redefinir\n&6\xbb &eClique para mudar"
ai_settings_toggle_lore: |-
  &7Ative ou desative a IA
  &7deste ArmorStand

  %ai_status%
ai_memory_exit_success: "&aVoc\xea saiu da sess\xe3o de mem\xf3ria com sucesso."
ai_memory_update_success: "&aInstru\xe7\xf5es do ArmorStand atualizadas com sucesso"
ai_prefix: "&7[&6\xbb&7] &6"
ai_response_format: "&7[&6\xbb&7] &6%response%"
ai_response_not_found: "Erro de IA: n\xe3o foi poss\xedvel encontrar o texto do assistente\
  \ na resposta"
ai_error: '&cErro de IA: %error%'
ai_error_http: "&cErro de IA: HTTP %code%, certifique-se de estar conectado \xe0 internet"
ai_http_error: 'Erro de IA: HTTP {code}'
ai_http_error_with_internet: "Erro de IA: HTTP {code}, certifique-se de estar conectado\
  \ \xe0 internet"
ai_parse_error: 'Erro ao processar a resposta da IA: {error}'
animation_command_description: "Mostra os comandos de anima\xe7\xe3o"
animation_command_header: "&6&lAdvanced &e&lArmorStands &7&lcomandos de anima\xe7\xe3\
  o"
animation_add_success: "&aAnima\xe7\xe3o %animation% atribu\xedda ao ArmorStand %armorstand%\
  \ com sucesso"
animation_clear_description: "Remove as &7anima\xe7\xf5es de um as"
animation_clear_success: "&aAnima\xe7\xf5es de %armorstand% removidas com sucesso"
animation_create_description: "&7Crie ou edite uma &7anima\xe7\xe3o com um as"
animation_remove_description: "&7Remove uma anima\xe7\xe3o por completo"
animation_remove_success: "&aAnima\xe7\xe3o '%animation%' removida com sucesso"
animation_invalid: "&cAnima\xe7\xe3o inv\xe1lida"
animation_invalid_with_suggestion: "&cAnima\xe7\xe3o '%animation%' inv\xe1lida. Voc\xea\
  \ quis dizer '%suggestion%'?"
animation_invalid_name: "&cNome de anima\xe7\xe3o inv\xe1lido"
animation_editor_already_has_animation: "&cN\xe3o \xe9 poss\xedvel abrir o editor\
  \ em um ArmorStand que j\xe1 tem anima\xe7\xe3o"
animation_editor_gamemode_changed: "&aSeu modo de jogo foi temporariamente alterado\
  \ para CRIATIVO, pois sess\xf5es de edi\xe7\xe3o n\xe3o funcionam no modo AVENTURA.\
  \ Ele ser\xe1 restaurado automaticamente quando voc\xea sair."
animation_editor_entered: "&aVoc\xea entrou na sess\xe3o de cria\xe7\xe3o/edi\xe7\xe3\
  o de anima\xe7\xe3o com sucesso"
animations_menu_successful_creation: "&aAnima\xe7\xe3o salva com sucesso, clique para\
  \ adicion\xe1-la a este ArmorStand"
keyframe_menu_title: editor de keyframes
keyframe_option_lore: |-
  &eCLIQUE DIREITO &7Adiciona um keyframe
  &eSHIFT + CLIQUE DIREITO &7Abre o menu de keyframes

  &8&lAdvancedArmorStands Editor Item
keyframe_created: '&aKeyframe adicionado!'
keyframe_step_lore: "&7Este \xe9 o %step%%suffix% passo\n&7da anima\xe7\xe3o %animation%,\
  \ que\n&7vai colocar o ArmorStand nessa\n&7posi\xe7\xe3o na sua vez\n\n&eClique\
  \ para remover"
keyframe_interval_name: '&eIntervalo: %interval%'
keyframe_interval_lore: "&7Define o atraso\n&7entre os quadros da anima\xe7\xe3o.\n\
  &7Quanto menor o valor,\n&7mais r\xe1pida a anima\xe7\xe3o.\n\n&6\xbb&e Clique esquerdo\
  \ para aumentar\n&6\xbb&e Clique direito para diminuir.\n&6\xbb&e Segure Shift para\
  \ mudar\n&6\xbb&e de 10 em 10.\n\n&eClique para mudar"
keyframe_loop_name: '&eRepetir: %loop%'
keyframe_loop_lore: "&7Define se a anima\xe7\xe3o\n&7deve se repetir em loop\n&7infinitamente\
  \ desde o in\xedcio\n\n&eClique para mudar"
save_menu_title: menu de salvamento
save_menu_create_message: "&aDigite o nome do tipo que voc\xea quer criar (as propriedades\
  \ deste ArmorStand ser\xe3o copiadas). Digite 'exit' para sair"
save_menu_type_lore: "&7Selecionar isso vai sobrescrever\n&7a configura\xe7\xe3o antiga\
  \ de %type% com\n&7a configura\xe7\xe3o atual que voc\xea fez\n\n&eClique para salvar"
save_menu_type_saved: '&aPropriedades do ArmorStand salvas em ''%type%'''
save_menu_create_type_name: '&eCriar um tipo'
save_menu_create_type_lore: |-
  &7Selecione isso para criar
  &7um tipo com as propriedades
  &7deste armor stand

  &eClique para criar
armor_stand_menu_title: "configura\xe7\xf5es"
armor_stand_not_loaded: "&cEste ArmorStand n\xe3o est\xe1 carregado"
armor_stand_invalid: "&cArmorStand inv\xe1lido"
armor_stand_invalid_with_suggestion: "&cArmorStand '%armorstand%' inv\xe1lido. Voc\xea\
  \ quis dizer '%suggestion%'?"
armorstand_not_found: "&cArmorStand n\xe3o encontrado!"
world_not_found: "&cMundo n\xe3o encontrado!"
teleported_to_armorstand: '&aTeleportado para %name%'
armorstand_updated_success: '&aArmorStand atualizado com sucesso!'
armorstand_updated_failed: '&cFalha ao atualizar o ArmorStand!'
armorstand_unavailable: "&cO ArmorStand n\xe3o est\xe1 mais dispon\xedvel!"
armorstand_unavailable_title: "&cArmorStand n\xe3o est\xe1 dispon\xedvel"
armorstand_move_success: '&aArmorStand movido com sucesso.'
armorstands_not_loaded: "&cParece que %amount% ArmorStands n\xe3o foram carregados\
  \ pelo gerador de mundo. Para corrigir isso, ative 'auto-load-armor-stands' na configura\xe7\
  \xe3o para carregar todos automaticamente."
issues_found_on_join: "&eAdvancedArmorStands encontrou %amount% erro(s) e aviso(s)\
  \ nesta sess\xe3o. Verifique o arquivo de log para mais detalhes."
armorstand_save_confirm: "&aFa\xe7a isso mais %amount% vez%plural% para salvar este\
  \ ArmorStand."
armorstand_saved_success: '&eArmorStand salvo como %name%!'
armorstand_delete_confirm: "&cFa\xe7a isso mais %amount% vez%plural% para excluir\
  \ este ArmorStand."
armorstand_deleted_success: "&aO ArmorStand foi exclu\xeddo, mas pode ser restaurado\
  \ usando o comando restore. Ele ser\xe1 exclu\xeddo completamente quando o servidor\
  \ reiniciar"
command_no_permission: "&cVoc\xea n\xe3o tem permiss\xe3o para usar este comando!"
command_unknown: "&cO comando '%command%' n\xe3o \xe9 um subcomando v\xe1lido."
command_unknown_with_suggestion: "&cO comando '%command%' n\xe3o \xe9 um subcomando\
  \ v\xe1lido. Voc\xea quis dizer '%suggestion%'?"
command_help_invalid_page_number: "&cPor favor, digite um n\xfamero de p\xe1gina v\xe1\
  lido."
command_help_invalid_page: "&cP\xe1gina inv\xe1lida. Escolha uma p\xe1gina entre 1\
  \ e %pages%."
command_usage_hover: "&eClique para usar a sugest\xe3o"
command_examples: '&7Exemplos:'
command_click_to_use: '&e&lClique para usar este comando'
command_label: '&7Comando: &e%command%'
command_description_label: "&7Descri\xe7\xe3o: &f%description%"
create_description: Cria um &7ArmorStand
create_custom_usage: '&cUso: /as create custom <name> <part> <x> <y> <z> [<part> <x>
  <y> <z> ...]'
create_invalid_part_number: "&cN\xfamero inv\xe1lido para a parte %part%. Uso: <part>\
  \ <x> <y> <z>"
create_unknown_part: '&cParte desconhecida: %part%'
delete_description: Exclui um &7ArmorStand
delete_all_success: "&aTodos os ArmorStands exclu\xeddos com sucesso"
delete_success: "&aArmorStand exclu\xeddo por completo"
debug_description: "Mostra informa\xe7\xf5es de depura\xe7\xe3o"
head_description: "Pega a cabe\xe7a de um jogador"
head_success: "&aVoc\xea recebeu a cabe\xe7a de %player%"
list_description: Mostra uma lista de ArmorStands
list_empty_title: '&c&l     Nenhum ArmorStand Salvo Encontrado '
list_empty_hint: '&7Use &e/as create <type> <name>&7 para criar seu primeiro ArmorStand!'
load_description: Carrega um ArmorStand
load_no_unloaded: '&eNenhum ArmorStand descarregado encontrado.'
load_failed: '&cFalhou: %failed%'
move_description: "Move um ArmorStand para a sua &7localiza\xe7\xe3o"
options_description: "Abre o menu de op\xe7\xf5es"
reload_description: "Recarrega as configura\xe7\xf5es do plugin"
reload_success: "&aConfigura\xe7\xe3o do AdvancedArmorStand recarregada com sucesso"
reload_error: '&cErro ao recarregar o plugin, verifique o console para mais detalhes'
rename_description: Renomeia um &7as
rename_success: '&aArmorStand renomeado de ''%old_name%'' para ''%new_name%'''
restore_description: "Restaura um ArmorStand exclu\xeddo"
restore_not_deleted: "&cEste ArmorStand n\xe3o est\xe1 exclu\xeddo ou j\xe1 \xe9 tarde\
  \ demais"
restore_unknown_error: "&cErro desconhecido, verifique o console para mais informa\xe7\
  \xf5es"
restore_success: '&aArmorStand restaurado com sucesso'
teleport_not_on_ground: "&cEste ArmorStand n\xe3o est\xe1 no ch\xe3o. Tem certeza\
  \ de que quer se teleportar at\xe9 ele?"
teleport_force_hint: "&cUse '/as teleport %armorstand% --force' para for\xe7ar o teleporte"
tell_description: "Fa\xe7a uma pergunta para a IA de um ArmorStand"
tell_ai_disabled: "&cEste ArmorStand n\xe3o tem a IA ativada"
inventory_exit_name: "&7\xbb &cSAIR&7 (Clique Direito)"
inventory_exit_lore: |2-

  &8&oAdvancedArmorStands Editor Item
inventory_enter_session: "&aVoc\xea entrou na sess\xe3o de edi\xe7\xe3o, clique no\
  \ item SAIR para voltar e recuperar seus itens"
editor_exit_name: "&7\xbb &cSAIR &7(Clique Direito)"
editor_exit_lore: |2-

  &8AdvancedArmorStands Editor Item
head_item_lore: "&eCLIQUE DIREITO &8\xbb &7Gira a cabe\xe7a para a direita\n&eCLIQUE\
  \ ESQUERDO &8\xbb &7Gira a cabe\xe7a para a esquerda\n&eSHIFT + CLIQUE DIREITO &8\xbb\
  \ &7Levanta a cabe\xe7a\n&eSHIFT + CLIQUE ESQUERDO &8\xbb &7Abaixa a cabe\xe7a\n\
  \n&8&oAdvancedArmorStands Editor Item"
left_hand_item_lore: "&eCLIQUE DIREITO &8\xbb &7Gira a m\xe3o esquerda para a direita\n\
  &eCLIQUE ESQUERDO &8\xbb &7Gira a m\xe3o esquerda para a esquerda\n&eSHIFT + CLIQUE\
  \ DIREITO &8\xbb &7Levanta o bra\xe7o esquerdo\n&eSHIFT + CLIQUE ESQUERDO &8\xbb\
  \ &7Abaixa o bra\xe7o esquerdo\n\n&8&oAdvancedArmorStands Editor Item"
right_hand_item_lore: "&eCLIQUE DIREITO &8\xbb &7Gira a m\xe3o direita para a direita\n\
  &eCLIQUE ESQUERDO &8\xbb &7Gira a m\xe3o direita para a esquerda\n&eSHIFT + CLIQUE\
  \ DIREITO &8\xbb &7Levanta o bra\xe7o direito\n&eSHIFT + CLIQUE ESQUERDO &8\xbb\
  \ &7Abaixa o bra\xe7o esquerdo\n\n&8&oAdvancedArmorStands Editor Item"
left_leg_item_lore: "&eCLIQUE DIREITO &8\xbb &7Gira a perna esquerda para a direita\n\
  &eCLIQUE ESQUERDO &8\xbb &7Gira a perna esquerda para a esquerda\n&eSHIFT + CLIQUE\
  \ DIREITO &8\xbb &7Levanta a perna esquerda\n&eSHIFT + CLIQUE ESQUERDO &8\xbb &7Abaixa\
  \ a perna esquerda\n\n&8&oAdvancedArmorStands Editor Item"
right_leg_item_lore: "&eCLIQUE DIREITO &8\xbb &7Gira a perna direita para a direita\n\
  &eCLIQUE ESQUERDO &8\xbb &7Gira a perna direita para a esquerda\n&eSHIFT + CLIQUE\
  \ DIREITO &8\xbb &7Levanta a perna direita\n&eSHIFT + CLIQUE ESQUERDO &8\xbb &7Abaixa\
  \ a perna direita\n\n&8&oAdvancedArmorStands Editor Item"
rotate_item_lore: "&eCLIQUE DIREITO &8\xbb &7Gira para a direita\n&eCLIQUE ESQUERDO\
  \ &8\xbb &7Gira para a esquerda\n&eSHIFT + CLIQUE DIREITO (Bloco) &8\xbb &7Levanta\
  \ o corpo\n&eSHIFT + CLIQUE ESQUERDO (Bloco) &8\xbb &7Abaixa o corpo\n&eSHIFT +\
  \ CLIQUE DIREITO (Ar) &8\xbb &7Move o corpo para a direita\n&eSHIFT + CLIQUE ESQUERDO\
  \ (Ar) &8\xbb &7Move o corpo para a esquerda\n\n&8&oAdvancedArmorStands Editor Item"
save_item_lore: "&7Clique para salvar a configura\xe7\xe3o\n&7do ArmorStand como um\
  \ tipo, para usar depois\n\n&8&oAdvancedArmorStands Editor Item"
edit_session_block_break: "&cVoc\xea n\xe3o pode quebrar blocos na sess\xe3o de edi\xe7\
  \xe3o."
memory_session_block_break: "&cVoc\xea n\xe3o pode quebrar blocos aqui."
custom_name_session_start: "&aDigite no chat o nome que voc\xea quer definir. Para\
  \ sair digite 'exit'"
custom_name_session_already: "&cVoc\xea j\xe1 est\xe1 em uma sess\xe3o de defini\xe7\
  \xe3o de nome"
custom_name_exit_success: "&aVoc\xea saiu da sess\xe3o de defini\xe7\xe3o de nome\
  \ com sucesso"
custom_name_set_success: '&aNome personalizado do ArmorStand definido como ''%name%''
  com sucesso'
type_create_exit_success: "&aVoc\xea saiu da sess\xe3o de cria\xe7\xe3o de tipo com\
  \ sucesso"
type_already_exists: "&cEsse tipo j\xe1 existe. Escolha outro nome ou selecione o\
  \ tipo no menu de salvamento"
type_created_success: '&aTipo ''%type%'' criado com as propriedades deste ArmorStand'
creation_cancelled: "&cCria\xe7\xe3o cancelada por inatividade"
deletion_cancelled_due_to_inactivity: "&cExclus\xe3o cancelada por inatividade."
arms_option_name: "&eBra\xe7os"
arms_option_lore: "&7Ative ou desative\n&7os bra\xe7os deste ArmorStand \n\n%status%"
base_plate_option_name: '&eBase'
base_plate_option_lore: "&7Ative ou desative\n&7a base deste ArmorStand \n\n%status%"
custom_name_option_name: '&eNome personalizado'
custom_name_option_lore: |-
  &7Defina um nome personalizado
  &7para este ArmorStand
custom_name_option_current_name: "&eAtual&6 \xbb &e"
custom_name_option_no_name: "&eNome atual&6 \xbb &eNenhum"
custom_name_option_enter_name: "&aDigite no chat o nome que voc\xea quer definir.\
  \ Para sair digite 'exit'"
custom_name_option_already_editing: "&cVoc\xea j\xe1 est\xe1 em uma sess\xe3o de defini\xe7\
  \xe3o de nome"
custom_name_visible_option_name: "&eNome personalizado vis\xedvel"
custom_name_visible_option_lore: |-
  &7Ative ou desative
  &7o nome personalizado deste ArmorStand

  %status%
glowing_option_name: '&eBrilho'
glowing_option_lore: |-
  &7Ative ou desative
  &7o brilho deste ArmorStand

  %status%
glowing_option_enabled: "&6\u2714&e Est\xe1 brilhando"
glowing_option_disabled: "&4\u2718&c N\xe3o est\xe1 brilhando"
small_option_name: '&ePequeno'
small_option_lore: |-
  &7Ative ou desative
  &7o tamanho pequeno deste ArmorStand

  %status%
small_option_enabled: "&6\u2714&e \xc9 pequeno"
small_option_disabled: "&4\u2718&c N\xe3o \xe9 pequeno"
visible_option_name: '&eVisibilidade'
visible_option_lore: |-
  &7Ative ou desative
  &7a visibilidade deste ArmorStand

  %status%
visible_option_enabled: "&6\u2714&e Est\xe1 vis\xedvel"
visible_option_disabled: "&4\u2718&c N\xe3o est\xe1 vis\xedvel"
delete_tool_name: '&eExcluir'
delete_tool_lore: "&7Exclui este ArmorStand\n&7essa a\xe7\xe3o n\xe3o pode ser desfeita\n\
  \n&eClique para excluir"
delete_tool_message: "&aO ArmorStand foi exclu\xeddo, mas pode ser restaurado usando\
  \ o comando restore. Ele ser\xe1 exclu\xeddo completamente quando o servidor reiniciar"
delete_tool_deleted: "&aO ArmorStand foi exclu\xeddo, mas pode ser restaurado usando\
  \ o comando restore. Ele ser\xe1 exclu\xeddo completamente quando o servidor reiniciar"
move_tool_name: '&eMover'
move_tool_lore: "&7Move o ArmorStand\n&7para onde voc\xea quiser\n\n&7Recomendado:\
  \ use o comando\n&7/as move em vez disso\n\n&eClique para mover"
move_tool_already_moving: "&cVoc\xea j\xe1 est\xe1 na sess\xe3o de movimento"
move_tool_start_message: "&aQuebre o bloco onde voc\xea quer que o ArmorStand fique"
move_tool_already: "&cVoc\xea j\xe1 est\xe1 na sess\xe3o de movimento"
move_tool_start: "&aQuebre o bloco onde voc\xea quer que o ArmorStand fique"
teleport_tool_name: '&eTeleportar'
teleport_tool_lore: "&7Teleporta voc\xea para\n&7a localiza\xe7\xe3o do ArmorStand\n\
  \n&eClique para se teleportar"
preview_accepted: "&aEssa posi\xe7\xe3o foi aceita para este ArmorStand."
preview_denied: "&aNova posi\xe7\xe3o rejeitada com sucesso."
```

:::note
This language is translated and generated by AI
:::