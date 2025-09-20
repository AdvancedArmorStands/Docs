---
id: placeholders
title: PlaceHolders
sidebar_position: 10
---

# Placeholder API

This page lists all available placeholders provided by AdvancedArmorStands and how to use them in compatible plugins such as PlaceholderAPI or other text-supporting plugins.

## Usage

Placeholders can be used in compatible plugins like:

- Scoreboards (e.g., FeatherBoard, TAB)
- Chat (e.g., DeluxeChat)
- Holograms (e.g., HolographicDisplays)
- GUIs (e.g., ChestCommands, DeluxeMenus)

The syntax for each placeholder is:
`%aas_<name>%`

## Available Placeholders

| Placeholder | Description |
|------------|-------------|
| `%aas_total%` | Returns the total number of armor stands created by all players |
| `%aas_total_types%` | Returns the total number of types players |
| `%aas_version%` | Returns the current version of the plugin |
| `%aas_total_loaded_armor_stands%` | Returns the total number of **loaded** armor stands created by all players |

:::note
All placeholders are automatically updated and refreshed. If you're using an async-compatible plugin (e.g., Scoreboard plugins), they will work seamlessly without performance impact.
:::

<!-- | `%advancedarmorstands_total_<player>%` | Returns the total number of armor stands created by the given player (replace `<player>` with the player's name) | -->
