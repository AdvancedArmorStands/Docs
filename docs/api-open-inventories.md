---
id: api-open-inventories
title: Open Inventories
sidebar_position: 6
---

## Inventory Manager

You can access it using:
```java
InventoryManager manager = armorStandApi.getInventoryManager();
````

### Available Methods

#### `openToolsMenu(Player player, ArmorStand armorStand)`

Opens the **Tools Menu**

```java
try {
    armorStandApi.getInventoryManager().openToolsMenu(player, armorStand);
} catch (InventoryException e) {
    e.printStackTrace();
}
```

#### `openActionsMenu(Player player, ArmorStand armorStand)`

Opens the **Actions Menu**

```java
try {
    armorStandApi.getInventoryManager().openActionsMenu(player, armorStand);
} catch (InventoryException e) {
    e.printStackTrace();
}
```

#### `openEditMenu(Player player, ArmorStand armorStand)`

Opens the **Edit Menu**

```java
try {
    armorStandApi.getInventoryManager().openEditMenu(player, armorStand);
} catch (InventoryException e) {
    e.printStackTrace();
}
```

#### `openOptionsMenu(Player player, ArmorStand armorStand, boolean isFromSettings)`

Opens the **Options Menu**

```java
try {
    armorStandApi.getInventoryManager().openOptionsMenu(player, armorStand, false);
} catch (InventoryException e) {
    e.printStackTrace();
}
```

#### `openSaveMenu(Player player, ArmorStand armorStand)`

Opens the **Save Menu**

```java
try {
    armorStandApi.getInventoryManager().openSaveMenu(player, armorStand);
} catch (InventoryException e) {
    e.printStackTrace();
}
```


