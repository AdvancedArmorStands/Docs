---
id: lang-en
title: English
sidebar_position: 3
---

This is the default language support for AdvancedArmorStands, the file can be found in `~/AdvancedArmorStand/languages/messages-en.yml`, don't edit the original language file because it resets to default at startup, you can change the language by editing the `language` value in config to the language iso of you choice; for example this one's iso is `en`

```yml
menu_format: "&7as &8\xbb &7%section%"
actions_menu_title: actions
actions_menu_item_lore: "&7This means if you\n&7click this armor\n&7stand, command\
  \ will\n&7be run: %command%\n\n&6\xbb &eClick to edit\n&6\xbb &eShift click to remove"
actions_menu_create_name: '&eCreate an action'
actions_menu_create_lore: |-
  &7Select this to create
  &7an action that runs
  &7commands on clicks

  &eClick to create
actions_creation_message: '&aType the command to set (no ''/''), Type ''exit'' to
  cancel.'
actions_settings_menu_title: action Settings
actions_settings_trigger_name: '&eTrigger Type'
actions_settings_trigger_lore: |-
  &7Select how the command
  &7will be triggered when
  &7the player interacts with
  &7the ArmorStand.

  %trigger_list%

  &eClick to change
actions_settings_sender_name: '&eSender'
actions_settings_sender_lore: |-
  &7Select the sender of the
  &7command. This affects how
  &7permissions and execution work.

  %sender_list%

  &eClick to change
ai_menu_title: ai settings
ai_command_description: Ask the ai to assist you
ai_command_thinking: '&7Thinking...'
ai_option_name: '&eAI Options'
ai_option_enabled_lore: |-
  &7Options related to the
  &7artificial intelligence
  &7of this ArmorStand.

  &eClick to open
ai_option_disabled_lore: "&7Enable AI for ArmorStands\n&7by setting your API key\n\
  &7in the config.\n\n&4\u2718 &cNot Enabled"
ai_settings_memory_lore: "&7Add custom instructions\n&7for this ArmorStand's AI\n\
  to follow when replying.\n\n%current%\n\n&6\xbb &eShift-click to reset\n&6\xbb &eClick\
  \ to change"
ai_settings_toggle_lore: |-
  &7Enable or disable AI
  &7for this ArmorStand

  %ai_status%
ai_memory_exit_success: '&aSuccessfully exited memory set session.'
ai_memory_update_success: '&aSuccessfully updated ArmorStand''s instructions'
ai_prefix: "&7[&6\xbb&7] &6"
ai_response_format: "&7[&6\xbb&7] &6%response%"
ai_response_not_found: 'AI error: couldn''t find assistant text in response'
ai_error: '&cAI error: %error%'
ai_error_http: '&cAI error: HTTP %code%, make sure you are connected to internet'
ai_http_error: 'AI error: HTTP {code}'
ai_http_error_with_internet: 'AI error: HTTP {code}, make sure you are connected to
  internet'
ai_parse_error: 'AI parse error: {error}'
animation_command_description: Show animation commands
animation_command_header: '&6&lAdvanced &e&lArmorStands &7&lanimation commands'
animation_add_success: '&aSuccessfully set the animation %animation% to ArmorStand
  %armorstand%'
animation_clear_description: Clear &7animations of an as
animation_clear_success: '&aSuccessfully cleared %armorstand%''s animations'
animation_create_description: '&7Create/edit an &7animation with an as'
animation_remove_description: '&7Completely remove an animation'
animation_remove_success: '&aSuccessfully removed animation ''%animation%'''
animation_invalid: '&cInvalid animation'
animation_invalid_with_suggestion: '&cInvalid animation ''%animation%''. Did you mean
  ''%suggestion%''?'
animation_invalid_name: '&cInvalid animation name'
animation_editor_already_has_animation: '&cCan''t open the editor on an ArmorStand
  that has animation'
animation_editor_gamemode_changed: '&aYour GameMode has been temporarily switched
  to CREATIVE, because edit sessions do not support ADVENTURE mode. It will be restored
  automatically when you exit.'
animation_editor_entered: '&aSuccessfully entered the animation edit/create session'
animations_menu_successful_creation: '&aAnimation saved successfully, click to add
  to this ArmorStand'
keyframe_menu_title: keyframe editor
keyframe_option_lore: |-
  &eRIGHT CLICK &7Add a keyframe
  &eSHIFT RIGHT CLICK &7Open keyframe menu

  &8&lAdvancedArmorStands Editor Item
keyframe_created: '&aAdded keyframe!'
keyframe_step_lore: |-
  &7This is the %step%%suffix% step
  &7for %animation% animation that
  &7will turn ArmorStand's position to this
  &7on its turn

  &eClick to remove
keyframe_interval_name: '&eInterval: %interval%'
keyframe_interval_lore: "&7Sets the delay\n&7between animation frames.\n&7Lower value\
  \ means\n&7faster animation speed.\n\n&6\xbb&e Left-click to increase\n&6\xbb&e\
  \ Right-click to decrease.\n&6\xbb&e Hold Shift to change\n&6\xbb&e by increments\
  \ of 10.\n\n&eClick to change"
keyframe_loop_name: '&eLoop: %loop%'
keyframe_loop_lore: |-
  &7Defines whether the animation
  &7should loop repeat from
  &7the start infinitely

  &eClick to change
save_menu_title: save menu
save_menu_create_message: '&aType the name of the type you want to create and copy
  this ArmorStand''s properties to, Type ''exit'' to exit'
save_menu_type_lore: |-
  &7Selecting this will override
  &7your old %type% config to
  &7the current config you made

  &eClick to save
save_menu_type_saved: '&aSaved ArmorStand''s properties to ''%type%'''
save_menu_create_type_name: '&eCreate a type'
save_menu_create_type_lore: |-
  &7Select this to create
  &7a type with this armor
  &7stand's properties

  &eClick to create
armor_stand_menu_title: settings
armor_stand_not_loaded: '&cThis ArmorStand is not loaded'
armor_stand_invalid: '&cInvalid ArmorStand'
armor_stand_invalid_with_suggestion: '&cInvalid ArmorStand ''%armorstand%''. Did you
  mean ''%suggestion%''?'
armorstand_not_found: '&cArmorStand not found!'
world_not_found: '&cWorld not found!'
teleported_to_armorstand: '&aTeleported to %name%'
armorstand_updated_success: '&aArmorStand updated successfully!'
armorstand_updated_failed: '&cFailed to update ArmorStand!'
armorstand_unavailable: '&cThe ArmorStand is no longer available!'
armorstand_unavailable_title: '&cArmorStand is not available'
armorstand_move_success: '&aSuccessfully moved the ArmorStand.'
armorstands_not_loaded: '&cIt looks like %amount% ArmorStands haven''t been loaded
  by the world generator. To fix this, enable ''auto-load-armor-stands'' in the config
  to automatically load all ArmorStands.'
issues_found_on_join: '&eAdvancedArmorStands has encountered %amount% error(s) and
  warning(s) this session. Check the log file for details.'
armorstand_save_confirm: '&aDo this %amount% more time%plural% to save this ArmorStand.'
armorstand_saved_success: '&eArmorStand saved as %name%!'
armorstand_delete_confirm: '&cDo this %amount% more time%plural% to delete this ArmorStand.'
armorstand_deleted_success: '&aArmorStand has been deleted, but it can be restored
  using the restored command and it will be fully deleted with server restart'
command_no_permission: '&cYou don''t have permission to use this command!'
command_unknown: '&cCommand ''%command%'' is not a valid subcommand.'
command_unknown_with_suggestion: '&cCommand ''%command%'' is not a valid subcommand.
  Did you mean ''%suggestion%''?'
command_help_invalid_page_number: '&cPlease enter a valid page number.'
command_help_invalid_page: '&cInvalid Page, Please choose a page between 1 and %pages%.'
command_usage_hover: '&eClick to suggest'
command_examples: '&7Examples:'
command_click_to_use: '&e&lClick to use this command'
command_label: '&7Command: &e%command%'
command_description_label: '&7Description: &f%description%'
create_description: Create an &7ArmorStand
create_custom_usage: '&cUsage: /as create custom <name> <part> <x> <y> <z> [<part>
  <x> <y> <z> ...]'
create_invalid_part_number: '&cInvalid number for part %part%. Usage: <part> <x> <y>
  <z>'
create_unknown_part: '&cUnknown part: %part%'
delete_description: Delete an &7ArmorStand
delete_all_success: '&aSuccessfully deleted all ArmorStands'
delete_success: '&aFully deleted ArmorStand'
debug_description: Shows debug information
head_description: Get a player's head
head_success: '&aSuccessfully gave you %player%''s head'
list_description: Shows a list of ArmorStands
list_empty_title: '&c&l     No Saved ArmorStands Found '
list_empty_hint: '&7Use &e/as create <type> <name>&7 to create your first ArmorStand!'
load_description: Loads an ArmorStand
load_no_unloaded: '&eNo unloaded ArmorStands found.'
load_failed: '&cFailed: %failed%'
move_description: Moves an ArmorStand to your &7location
options_description: Opens the options menu
reload_description: Reloads plugin's configs
reload_success: '&aSuccessfully reloaded AdvancedArmorStand''s config'
reload_error: '&cError while reloading plugin check the console for more details'
rename_description: Rename an &7as's name
rename_success: '&aRenamed ArmorStand from ''%old_name%'' to ''%new_name%'''
restore_description: Restore a deleted ArmorStand
restore_not_deleted: '&cThis ArmorStand is not deleted or its too late'
restore_unknown_error: '&cUnknown error, check the console for more info'
restore_success: '&aSuccessfully restored the ArmorStand'
teleport_not_on_ground: '&cThis ArmorStand is not on the ground. Are you sure you
  want to teleport to it?'
teleport_force_hint: '&cUse ''/as teleport %armorstand% --force'' to force teleport'
tell_description: Ask an ArmorStand AI a question
tell_ai_disabled: '&cThis ArmorStand doesn''t have AI enabled'
inventory_exit_name: "&7\xbb &cEXIT&7 (Right Click)"
inventory_exit_lore: |2-

  &8&oAdvancedArmorStands Editor Item
inventory_enter_session: '&aEntered edit session, click the EXIT item to get back
  and restore your items'
editor_exit_name: "&7\xbb &cEXIT &7(Right Click)"
editor_exit_lore: |2-

  &8AdvancedArmorStands Editor Item
head_item_lore: "&eRIGHT CLICK &8\xbb &7Rotate head to right\n&eLEFT CLICK &8\xbb\
  \ &7Rotate head hand to left\n&eSHIFT + RIGHT CLICK &8\xbb &7Move head up\n&eSHIFT\
  \ + LEFT CLICK &8\xbb &7Move head down\n\n&8&oAdvancedArmorStands Editor Item"
left_hand_item_lore: "&eRIGHT CLICK &8\xbb &7Rotate left hand to right\n&eLEFT CLICK\
  \ &8\xbb &7Rotate left hand to left\n&eSHIFT + RIGHT CLICK &8\xbb &7Move left arm\
  \ up\n&eSHIFT + LEFT CLICK &8\xbb &7Move left arm down\n\n&8&oAdvancedArmorStands\
  \ Editor Item"
right_hand_item_lore: "&eRIGHT CLICK &8\xbb &7Rotate right hand to right\n&eLEFT CLICK\
  \ &8\xbb &7Rotate right hand to left\n&eSHIFT + RIGHT CLICK &8\xbb &7Move right\
  \ arm up\n&eSHIFT + LEFT CLICK &8\xbb &7Move left arm down\n\n&8&oAdvancedArmorStands\
  \ Editor Item"
left_leg_item_lore: "&eRIGHT CLICK &8\xbb &7Rotate left leg to right\n&eLEFT CLICK\
  \ &8\xbb &7Rotate left leg to left\n&eSHIFT + RIGHT CLICK &8\xbb &7Move left leg\
  \ up\n&eSHIFT + LEFT CLICK &8\xbb &7Move left leg down\n\n&8&oAdvancedArmorStands\
  \ Editor Item"
right_leg_item_lore: "&eRIGHT CLICK &8\xbb &7Rotate right leg to right\n&eLEFT CLICK\
  \ &8\xbb &7Rotate right leg to left\n&eSHIFT + RIGHT CLICK &8\xbb &7Move right leg\
  \ up\n&eSHIFT + LEFT CLICK &8\xbb &7Move right leg down\n\n&8&oAdvancedArmorStands\
  \ Editor Item"
rotate_item_lore: "&eRIGHT CLICK &8\xbb &7Rotate to right\n&eLEFT CLICK &8\xbb &7Rotate\
  \ to left\n&eSHIFT + RIGHT CLICK (Block) &8\xbb &7Rove body up\n&eSHIFT + LEFT CLICK\
  \ (Block) &8\xbb &7Move body down\n&eSHIFT + RIGHT CLICK (Air) &8\xbb &7Move body\
  \ right\n&eSHIFT + LEFT CLICK (Air) &8\xbb &7Move body left\n\n&8&oAdvancedArmorStands\
  \ Editor Item"
save_item_lore: |-
  &7Click to save the ArmorStand setting
  &7as a type, that you can use it later

  &8&oAdvancedArmorStands Editor Item
edit_session_block_break: '&cYou cannot break blocks in edit session.'
memory_session_block_break: '&cYou cannot break blocks here.'
custom_name_session_start: '&aType the name you want to set in the chat, To exit type
  ''exit'''
custom_name_session_already: '&cYou are already in a name set session'
custom_name_exit_success: '&aSuccessfully quit the name set session'
custom_name_set_success: '&aSuccessfully set ArmorStand''s custom name to ''%name%'''
type_create_exit_success: '&aSuccessfully quit the type create session'
type_already_exists: '&cThis type already exists, Either chose another name or select
  the type in the save menu'
type_created_success: '&aCreated type ''%type%'' with this ArmorStand''s properties'
creation_cancelled: '&cCreation cancelled due to inactivity'
deletion_cancelled_due_to_inactivity: '&cDeletion cancelled due to inactivity.'
arms_option_name: '&eArms'
arms_option_lore: "&7Enable and disable\n&7arms for this ArmorStand \n\n%status%"
base_plate_option_name: '&eBase Plate'
base_plate_option_lore: "&7Enable and disable\n&7base plate for this ArmorStand \n\
  \n%status%"
custom_name_option_name: '&eCustom name'
custom_name_option_lore: |-
  &7Set a custom name for
  &7this ArmorStand
custom_name_option_current_name: "&eCurrent&6 \xbb &e"
custom_name_option_no_name: "&eCurrent name&6 \xbb &eNone"
custom_name_option_enter_name: '&aType the name you want to set in the chat, To exit
  type ''exit'''
custom_name_option_already_editing: '&cYou are already in a name set session'
custom_name_visible_option_name: '&eCustom name visible'
custom_name_visible_option_lore: |-
  &7Enable and disable
  &7custom name for this ArmorStand

  %status%
glowing_option_name: '&eGlowing'
glowing_option_lore: |-
  &7Enable and disable
  &7glowing this ArmorStand

  %status%
glowing_option_enabled: "&6\u2714&e Is glowing"
glowing_option_disabled: "&4\u2718&c Isn't glowing"
small_option_name: '&eSmall'
small_option_lore: |-
  &7Enable and disable
  &7small size for this ArmorStand

  %status%
small_option_enabled: "&6\u2714&e Is small"
small_option_disabled: "&4\u2718&c Isn't small"
visible_option_name: '&eVisibility'
visible_option_lore: |-
  &7Enable and disable
  &7visibility for this ArmorStand

  %status%
visible_option_enabled: "&6\u2714&e Is visible"
visible_option_disabled: "&4\u2718&c Isn't visible"
delete_tool_name: '&eDelete'
delete_tool_lore: |-
  &7Delete this ArmorStand
  &7this action cannot be undone

  &eClick to delete
delete_tool_message: '&aArmorStand has been deleted, but it can be restored using
  the restored command and it will be fully deleted with server restart'
delete_tool_deleted: '&aArmorStand has been deleted, but it can be restored using
  the restored command and it will be fully deleted with server restart'
move_tool_name: '&eMove'
move_tool_lore: |-
  &7Move the ArmorStand
  &7to where you want it

  &7Recommended: use /as move
  &7command instead

  &eClick to move
move_tool_already_moving: '&cYou are already in the move session'
move_tool_start_message: '&aBreak the block you want the ArmorStand to be on'
move_tool_already: '&cYou are already in the move session'
move_tool_start: '&aBreak the block you want the ArmorStand to be on'
teleport_tool_name: '&eTeleport'
teleport_tool_lore: |-
  &7Teleport to the
  &7ArmorStand's location

  &eClick to teleport
preview_accepted: '&aAccepted this position for this ArmorStand.'
preview_denied: '&aSuccessfully denied the new position.'
```
