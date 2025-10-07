---
id: api-events
title: Events
sidebar_position: 6
---

## Overview

All events are part of the `com.parsa3323.aas.api.events` package.  
They can be listened to like any other Bukkit event:

```java
@EventHandler
public void onCreate(ArmorStandCreateEvent event) {
    Bukkit.getLogger().info("Armor stand created: " + event.getArmorStand().getName());
}
````

Make sure your plugin declares a dependency or soft-dependency on `AdvancedArmorStands` in your `plugin.yml` so the API is loaded before your plugin.

---

## Event List

### `ArmorStandCreateEvent`

Triggered when a user **creates a new armor stand** using the plugin.
You can access the creator, the armor stand’s name, and its data.

---

### `ArmorStandDeleteEvent`

Triggered when a user **deletes an armor stand**.

---

### `PlayerMoveArmorStandEvent`

Triggered when a player **moves** an armor stand.

---

### `ArmorStandRenameEvent`

Triggered when a user **renames** an armor stand.

---

### `ArmorStandStateChangeEvent`

Triggered when an armor stand’s **state** changes (for example, visibility, size, or gravity).

---

### `ActionTriggerEvent`

Triggered whenever an **action** linked to an armor stand is called.

---

### `ArmorStandOptionChangeEvent`

Triggered when a user **changes an armor stand’s option**, such as toggling arms, base plate, or visibility.

---

