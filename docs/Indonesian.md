---
id: lang-id
title: Indonesian
sidebar_position: 3
---

This is the Indonesian language support for AdvancedArmorStands, the file can be found in `~/AdvancedArmorStand/languages/messages-id.yml`, don't edit the original language file because it resets to default at startup, you can change the language by editing the `language` value in config to the language iso of you choice; for example this one's iso is `id`

```yml
menu_format: "&7as &8\xbb &7%section%"
actions_menu_title: aksi
actions_menu_item_lore: "&7Ini artinya kalau kamu\n&7klik armor stand ini,\n&7perintah\
  \ berikut\n&7akan dijalankan: %command%\n\n&6\xbb &eKlik untuk edit\n&6\xbb &eShift\
  \ + klik untuk hapus"
actions_menu_create_name: '&eBuat sebuah aksi'
actions_menu_create_lore: |-
  &7Pilih ini untuk membuat
  &7aksi yang menjalankan
  &7perintah saat diklik

  &eKlik untuk membuat
actions_creation_message: '&aKetik perintah yang mau kamu atur (tanpa ''/''). Ketik
  ''exit'' untuk membatalkan.'
actions_settings_menu_title: pengaturan aksi
actions_settings_trigger_name: '&eJenis Pemicu'
actions_settings_trigger_lore: |-
  &7Pilih bagaimana perintah
  &7akan dipicu saat
  &7pemain berinteraksi dengan
  &7ArmorStand ini.

  %trigger_list%

  &eKlik untuk mengubah
actions_settings_sender_name: '&ePengirim'
actions_settings_sender_lore: |-
  &7Pilih siapa yang akan mengirim
  &7perintah ini. Ini memengaruhi
  &7cara kerja izin dan eksekusinya.

  %sender_list%

  &eKlik untuk mengubah
ai_menu_title: pengaturan ai
ai_command_description: Minta bantuan AI
ai_command_thinking: '&7Sedang berpikir...'
ai_option_name: '&eOpsi AI'
ai_option_enabled_lore: |-
  &7Opsi terkait
  &7kecerdasan buatan
  &7ArmorStand ini.

  &eKlik untuk membuka
ai_option_disabled_lore: "&7Aktifkan AI untuk ArmorStand\n&7dengan memasukkan API\
  \ key kamu\n&7di config.\n\n&4\u2718 &cBelum Aktif"
ai_settings_memory_lore: "&7Tambahkan instruksi khusus\n&7yang akan diikuti AI\nArmorStand\
  \ ini saat membalas.\n\n%current%\n\n&6\xbb &eShift + klik untuk reset\n&6\xbb &eKlik\
  \ untuk mengubah"
ai_settings_toggle_lore: |-
  &7Aktifkan atau matikan AI
  &7untuk ArmorStand ini

  %ai_status%
ai_memory_exit_success: '&aKamu berhasil keluar dari sesi pengaturan memori.'
ai_memory_update_success: '&aInstruksi ArmorStand berhasil diperbarui'
ai_prefix: "&7[&6\xbb&7] &6"
ai_response_format: "&7[&6\xbb&7] &6%response%"
ai_response_not_found: 'Error AI: teks asisten tidak ditemukan di respons'
ai_error: '&cError AI: %error%'
ai_error_http: '&cError AI: HTTP %code%, pastikan kamu terhubung ke internet'
ai_http_error: 'Error AI: HTTP {code}'
ai_http_error_with_internet: 'Error AI: HTTP {code}, pastikan kamu terhubung ke internet'
ai_parse_error: 'Error saat memproses respons AI: {error}'
animation_command_description: Menampilkan perintah animasi
animation_command_header: '&6&lAdvanced &e&lArmorStands &7&lperintah animasi'
animation_add_success: '&aAnimasi %animation% berhasil diterapkan ke ArmorStand %armorstand%'
animation_clear_description: Menghapus &7animasi milik sebuah as
animation_clear_success: '&aAnimasi milik %armorstand% berhasil dihapus'
animation_create_description: '&7Buat/edit &7animasi lewat sebuah as'
animation_remove_description: '&7Menghapus animasi sepenuhnya'
animation_remove_success: '&aAnimasi ''%animation%'' berhasil dihapus'
animation_invalid: '&cAnimasi tidak valid'
animation_invalid_with_suggestion: '&cAnimasi ''%animation%'' tidak valid. Maksud
  kamu ''%suggestion%''?'
animation_invalid_name: '&cNama animasi tidak valid'
animation_editor_already_has_animation: '&cTidak bisa membuka editor di ArmorStand
  yang sudah punya animasi'
animation_editor_gamemode_changed: '&aGameMode kamu untuk sementara diubah ke CREATIVE,
  karena sesi edit tidak mendukung mode ADVENTURE. Ini akan kembali otomatis saat
  kamu keluar.'
animation_editor_entered: '&aKamu berhasil masuk ke sesi pembuatan/edit animasi'
animations_menu_successful_creation: '&aAnimasi berhasil disimpan, klik untuk menambahkannya
  ke ArmorStand ini'
keyframe_menu_title: editor keyframe
keyframe_option_lore: |-
  &eKLIK KANAN &7Tambah keyframe
  &eSHIFT + KLIK KANAN &7Buka menu keyframe

  &8&lAdvancedArmorStands Editor Item
keyframe_created: '&aKeyframe ditambahkan!'
keyframe_step_lore: |-
  &7Ini adalah langkah %step%%suffix%
  &7dari animasi %animation%, yang
  &7akan menempatkan ArmorStand di posisi
  &7ini saat gilirannya

  &eKlik untuk menghapus
keyframe_interval_name: '&eInterval: %interval%'
keyframe_interval_lore: "&7Mengatur jeda\n&7antar frame animasi.\n&7Semakin kecil\
  \ nilainya,\n&7semakin cepat animasinya.\n\n&6\xbb&e Klik kiri untuk menambah\n\
  &6\xbb&e Klik kanan untuk mengurangi.\n&6\xbb&e Tahan Shift untuk mengubah\n&6\xbb\
  &e per kelipatan 10.\n\n&eKlik untuk mengubah"
keyframe_loop_name: '&ePengulangan: %loop%'
keyframe_loop_lore: |-
  &7Menentukan apakah animasi
  &7akan diulang terus-menerus
  &7dari awal

  &eKlik untuk mengubah
save_menu_title: menu simpan
save_menu_create_message: '&aKetik nama tipe yang mau kamu buat, properti ArmorStand
  ini akan disalin ke sana. Ketik ''exit'' untuk keluar'
save_menu_type_lore: |-
  &7Memilih ini akan menimpa
  &7config lama %type% dengan
  &7config yang baru saja kamu buat

  &eKlik untuk menyimpan
save_menu_type_saved: '&aProperti ArmorStand disimpan ke ''%type%'''
save_menu_create_type_name: '&eBuat sebuah tipe'
save_menu_create_type_lore: |-
  &7Pilih ini untuk membuat
  &7tipe dengan properti
  &7armor stand ini

  &eKlik untuk membuat
armor_stand_menu_title: pengaturan
armor_stand_not_loaded: '&cArmorStand ini belum dimuat'
armor_stand_invalid: '&cArmorStand tidak valid'
armor_stand_invalid_with_suggestion: '&cArmorStand ''%armorstand%'' tidak valid. Maksud
  kamu ''%suggestion%''?'
armorstand_not_found: '&cArmorStand tidak ditemukan!'
world_not_found: '&cWorld tidak ditemukan!'
teleported_to_armorstand: '&aBerhasil teleport ke %name%'
armorstand_updated_success: '&aArmorStand berhasil diperbarui!'
armorstand_updated_failed: '&cGagal memperbarui ArmorStand!'
armorstand_unavailable: '&cArmorStand ini sudah tidak ada!'
armorstand_unavailable_title: '&cArmorStand tidak tersedia'
armorstand_move_success: '&aArmorStand berhasil dipindahkan.'
armorstands_not_loaded: '&cSepertinya %amount% ArmorStand belum dimuat oleh world
  generator. Untuk memperbaikinya, aktifkan ''auto-load-armor-stands'' di config supaya
  semua ArmorStand dimuat otomatis.'
issues_found_on_join: '&eAdvancedArmorStands menemukan %amount% error/peringatan di
  sesi ini. Cek file log untuk detailnya.'
armorstand_save_confirm: '&aLakukan ini %amount% kali lagi untuk menyimpan ArmorStand
  ini.'
armorstand_saved_success: '&eArmorStand disimpan sebagai %name%!'
armorstand_delete_confirm: '&cLakukan ini %amount% kali lagi untuk menghapus ArmorStand
  ini.'
armorstand_deleted_success: '&aArmorStand telah dihapus, tapi bisa dipulihkan dengan
  perintah restore, dan akan terhapus permanen saat server restart'
command_no_permission: '&cKamu tidak punya izin untuk memakai perintah ini!'
command_unknown: '&cPerintah ''%command%'' bukan subperintah yang valid.'
command_unknown_with_suggestion: '&cPerintah ''%command%'' bukan subperintah yang
  valid. Maksud kamu ''%suggestion%''?'
command_help_invalid_page_number: '&cTolong masukkan nomor halaman yang valid.'
command_help_invalid_page: '&cHalaman tidak valid. Pilih halaman antara 1 dan %pages%.'
command_usage_hover: '&eKlik untuk memakai saran ini'
command_examples: '&7Contoh:'
command_click_to_use: '&e&lKlik untuk memakai perintah ini'
command_label: '&7Perintah: &e%command%'
command_description_label: '&7Deskripsi: &f%description%'
create_description: Membuat &7ArmorStand
create_custom_usage: '&cPenggunaan: /as create custom <name> <part> <x> <y> <z> [<part>
  <x> <y> <z> ...]'
create_invalid_part_number: '&cAngka tidak valid untuk bagian %part%. Penggunaan:
  <part> <x> <y> <z>'
create_unknown_part: '&cBagian tidak dikenal: %part%'
delete_description: Menghapus &7ArmorStand
delete_all_success: '&aSemua ArmorStand berhasil dihapus'
delete_success: '&aArmorStand terhapus sepenuhnya'
debug_description: Menampilkan informasi debug
head_description: Dapatkan kepala seorang pemain
head_success: '&aKamu diberi kepala %player%'
list_description: Menampilkan daftar ArmorStand
list_empty_title: '&c&l     Tidak Ada ArmorStand Tersimpan '
list_empty_hint: '&7Pakai &e/as create <type> <name>&7 untuk membuat ArmorStand pertamamu!'
load_description: Memuat sebuah ArmorStand
load_no_unloaded: '&eTidak ada ArmorStand yang belum dimuat.'
load_failed: '&cGagal: %failed%'
move_description: Memindahkan ArmorStand ke &7lokasimu
options_description: Membuka menu opsi
reload_description: Memuat ulang config plugin
reload_success: '&aConfig AdvancedArmorStand berhasil dimuat ulang'
reload_error: '&cTerjadi error saat memuat ulang plugin, cek console untuk detailnya'
rename_description: Mengubah nama sebuah &7as
rename_success: '&aArmorStand diganti nama dari ''%old_name%'' menjadi ''%new_name%'''
restore_description: Memulihkan ArmorStand yang terhapus
restore_not_deleted: '&cArmorStand ini belum dihapus atau sudah terlalu terlambat'
restore_unknown_error: '&cError tidak diketahui, cek console untuk info lebih lanjut'
restore_success: '&aArmorStand berhasil dipulihkan'
teleport_not_on_ground: '&cArmorStand ini tidak berada di tanah. Kamu yakin mau teleport
  ke sana?'
teleport_force_hint: '&cPakai ''/as teleport %armorstand% --force'' untuk memaksa
  teleport'
tell_description: Tanyakan sesuatu ke AI sebuah ArmorStand
tell_ai_disabled: '&cArmorStand ini belum mengaktifkan AI'
inventory_exit_name: "&7\xbb &cKELUAR&7 (Klik Kanan)"
inventory_exit_lore: |2-

  &8&oAdvancedArmorStands Editor Item
inventory_enter_session: '&aKamu masuk ke sesi edit, klik item KELUAR untuk kembali
  dan mengambil barang-barangmu lagi'
editor_exit_name: "&7\xbb &cKELUAR &7(Klik Kanan)"
editor_exit_lore: |2-

  &8AdvancedArmorStands Editor Item
head_item_lore: "&eKLIK KANAN &8\xbb &7Putar kepala ke kanan\n&eKLIK KIRI &8\xbb &7Putar\
  \ kepala ke kiri\n&eSHIFT + KLIK KANAN &8\xbb &7Angkat kepala\n&eSHIFT + KLIK KIRI\
  \ &8\xbb &7Turunkan kepala\n\n&8&oAdvancedArmorStands Editor Item"
left_hand_item_lore: "&eKLIK KANAN &8\xbb &7Putar tangan kiri ke kanan\n&eKLIK KIRI\
  \ &8\xbb &7Putar tangan kiri ke kiri\n&eSHIFT + KLIK KANAN &8\xbb &7Angkat lengan\
  \ kiri\n&eSHIFT + KLIK KIRI &8\xbb &7Turunkan lengan kiri\n\n&8&oAdvancedArmorStands\
  \ Editor Item"
right_hand_item_lore: "&eKLIK KANAN &8\xbb &7Putar tangan kanan ke kanan\n&eKLIK KIRI\
  \ &8\xbb &7Putar tangan kanan ke kiri\n&eSHIFT + KLIK KANAN &8\xbb &7Angkat lengan\
  \ kanan\n&eSHIFT + KLIK KIRI &8\xbb &7Turunkan lengan kiri\n\n&8&oAdvancedArmorStands\
  \ Editor Item"
left_leg_item_lore: "&eKLIK KANAN &8\xbb &7Putar kaki kiri ke kanan\n&eKLIK KIRI &8\xbb\
  \ &7Putar kaki kiri ke kiri\n&eSHIFT + KLIK KANAN &8\xbb &7Angkat kaki kiri\n&eSHIFT\
  \ + KLIK KIRI &8\xbb &7Turunkan kaki kiri\n\n&8&oAdvancedArmorStands Editor Item"
right_leg_item_lore: "&eKLIK KANAN &8\xbb &7Putar kaki kanan ke kanan\n&eKLIK KIRI\
  \ &8\xbb &7Putar kaki kanan ke kiri\n&eSHIFT + KLIK KANAN &8\xbb &7Angkat kaki kanan\n\
  &eSHIFT + KLIK KIRI &8\xbb &7Turunkan kaki kanan\n\n&8&oAdvancedArmorStands Editor\
  \ Item"
rotate_item_lore: "&eKLIK KANAN &8\xbb &7Putar ke kanan\n&eKLIK KIRI &8\xbb &7Putar\
  \ ke kiri\n&eSHIFT + KLIK KANAN (Block) &8\xbb &7Angkat badan\n&eSHIFT + KLIK KIRI\
  \ (Block) &8\xbb &7Turunkan badan\n&eSHIFT + KLIK KANAN (Udara) &8\xbb &7Geser badan\
  \ ke kanan\n&eSHIFT + KLIK KIRI (Udara) &8\xbb &7Geser badan ke kiri\n\n&8&oAdvancedArmorStands\
  \ Editor Item"
save_item_lore: |-
  &7Klik untuk menyimpan pengaturan
  &7ArmorStand sebagai tipe, supaya bisa kamu pakai lagi nanti

  &8&oAdvancedArmorStands Editor Item
edit_session_block_break: '&cKamu tidak bisa menghancurkan blok di sesi edit.'
memory_session_block_break: '&cKamu tidak bisa menghancurkan blok di sini.'
custom_name_session_start: '&aKetik di chat nama yang mau kamu atur. Untuk keluar
  ketik ''exit'''
custom_name_session_already: '&cKamu sudah berada di sesi pengaturan nama'
custom_name_exit_success: '&aKamu berhasil keluar dari sesi pengaturan nama'
custom_name_set_success: '&aNama kustom ArmorStand berhasil diatur ke ''%name%'''
type_create_exit_success: '&aKamu berhasil keluar dari sesi pembuatan tipe'
type_already_exists: '&cTipe ini sudah ada. Pilih nama lain atau pilih tipe ini di
  menu simpan'
type_created_success: '&aTipe ''%type%'' dibuat dengan properti ArmorStand ini'
creation_cancelled: '&cPembuatan dibatalkan karena tidak ada aktivitas'
deletion_cancelled_due_to_inactivity: '&cPenghapusan dibatalkan karena tidak ada aktivitas.'
arms_option_name: '&eLengan'
arms_option_lore: "&7Aktifkan atau matikan\n&7lengan ArmorStand ini \n\n%status%"
base_plate_option_name: '&eAlas'
base_plate_option_lore: "&7Aktifkan atau matikan\n&7alas ArmorStand ini \n\n%status%"
custom_name_option_name: '&eNama kustom'
custom_name_option_lore: |-
  &7Atur nama kustom
  &7untuk ArmorStand ini
custom_name_option_current_name: "&eSaat ini&6 \xbb &e"
custom_name_option_no_name: "&eNama saat ini&6 \xbb &eTidak Ada"
custom_name_option_enter_name: '&aKetik di chat nama yang mau kamu atur. Untuk keluar
  ketik ''exit'''
custom_name_option_already_editing: '&cKamu sudah berada di sesi pengaturan nama'
custom_name_visible_option_name: '&eNama kustom terlihat'
custom_name_visible_option_lore: |-
  &7Aktifkan atau matikan
  &7nama kustom ArmorStand ini

  %status%
glowing_option_name: '&eBersinar'
glowing_option_lore: |-
  &7Aktifkan atau matikan
  &7efek bersinar ArmorStand ini

  %status%
glowing_option_enabled: "&6\u2714&e Sedang bersinar"
glowing_option_disabled: "&4\u2718&c Tidak bersinar"
small_option_name: '&eKecil'
small_option_lore: |-
  &7Aktifkan atau matikan
  &7ukuran kecil ArmorStand ini

  %status%
small_option_enabled: "&6\u2714&e Berukuran kecil"
small_option_disabled: "&4\u2718&c Tidak kecil"
visible_option_name: '&eVisibilitas'
visible_option_lore: |-
  &7Aktifkan atau matikan
  &7visibilitas ArmorStand ini

  %status%
visible_option_enabled: "&6\u2714&e Terlihat"
visible_option_disabled: "&4\u2718&c Tidak terlihat"
delete_tool_name: '&eHapus'
delete_tool_lore: |-
  &7Menghapus ArmorStand ini
  &7tindakan ini tidak bisa dibatalkan

  &eKlik untuk menghapus
delete_tool_message: '&aArmorStand telah dihapus, tapi bisa dipulihkan dengan perintah
  restore, dan akan terhapus permanen saat server restart'
delete_tool_deleted: '&aArmorStand telah dihapus, tapi bisa dipulihkan dengan perintah
  restore, dan akan terhapus permanen saat server restart'
move_tool_name: '&ePindahkan'
move_tool_lore: |-
  &7Memindahkan ArmorStand
  &7ke tempat yang kamu mau

  &7Disarankan: pakai perintah
  &7/as move sebagai gantinya

  &eKlik untuk memindahkan
move_tool_already_moving: '&cKamu sudah berada di sesi pemindahan'
move_tool_start_message: '&aHancurkan blok tempat kamu mau ArmorStand berdiri'
move_tool_already: '&cKamu sudah berada di sesi pemindahan'
move_tool_start: '&aHancurkan blok tempat kamu mau ArmorStand berdiri'
teleport_tool_name: '&eTeleport'
teleport_tool_lore: |-
  &7Teleport ke
  &7lokasi ArmorStand ini

  &eKlik untuk teleport
preview_accepted: '&aPosisi ini diterima untuk ArmorStand ini.'
preview_denied: '&aPosisi baru berhasil ditolak.'
```

:::note
This language is translated and generated by AI
:::