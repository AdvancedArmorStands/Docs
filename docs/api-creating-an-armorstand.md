---
id: api-creating-an-armorstand
title: Creating an ArmorStand
sidebar_position: 6
---

## Getting the API Instance

Before creating armor stands, you first need access to the main API instance:

```java
import com.parsa3323.aas.api.ArmorstandApi;
import org.bukkit.Bukkit;
import org.bukkit.plugin.Plugin;

public class ExamplePlugin extends JavaPlugin {
    private ArmorstandApi api;

    @Override
    public void onEnable() {
        Plugin plugin = Bukkit.getPluginManager().getPlugin("AdvancedArmorStands");

        if (plugin == null) {
            getLogger().severe("AdvancedArmorStands not found!");
            Bukkit.getPluginManager().disablePlugin(this);
            return;
        }

        api = Bukkit.getServicesManager().getRegistration(ArmorstandApi.class).getProvider();
    }
}
````

Once you have the `api`, you can access its **ArmorStandManager** for creation and control.

---

## Creating an ArmorStand

Armor stands are created through the `ArmorStandManager` interface:

```java
ArmorStandManager manager = api.getArmorStandManager();

try {
    ArmorStandPoseData pose = new ArmorStandPoseData(
        new EulerAngle(0, 0, 0), // Right Arm
        new EulerAngle(0, 0, 0), // Left Arm
        new EulerAngle(0, 0, 0), // Right Leg
        new EulerAngle(0, 0, 0), // Left Leg
        new EulerAngle(0, 0, 0)  // Head
    );

    manager.createArmorStand("example", pose, player.getLocation(), player);
} catch (ArmorStandAlreadyExistsException e) {
    player.sendMessage(ChatColor.RED + "An armor stand with that name already exists!");
}
```

### Parameters

* **`name`** – A unique name for the armor stand (string-based ID).
* **`poseData`** – The default pose of the armor stand (see below).
* **`location`** – The spawn location for the new armor stand.
* **`player`** – The player creating it (used for event tracking and permissions).

---

## ArmorStandPoseData

The `ArmorStandPoseData` class stores all rotation data for an armor stand’s limbs and head.

```java
ArmorStandPoseData pose = new ArmorStandPoseData(
    new EulerAngle(Math.toRadians(30), 0, 0),  // Right Arm
    new EulerAngle(0, 0, 0),                   // Left Arm
    new EulerAngle(0, 0, 0),                   // Right Leg
    new EulerAngle(0, 0, 0),                   // Left Leg
    new EulerAngle(0, Math.toRadians(45), 0)   // Head
);
```

You can later reuse or modify this pose using `setPose()`.

---

## Updating or Moving an ArmorStand

Once an armor stand is created, you can move or reload it through the same manager:

```java
try {
    manager.moveArmorStand("example", new Location(world, 10, 65, 10));
    manager.setPose("example", pose);
} catch (ArmorStandNotFoundException e) {
    player.sendMessage(ChatColor.RED + "Armor stand not found!");
}
```

These methods throw exceptions if the armor stand doesn’t exist or is not yet loaded.

---

## Error Handling

Not all methods require try/catch — only checked exceptions must be handled.

| Exception                          | Type    | Description                                                    |
| ---------------------------------- | ------- | -------------------------------------------------------------- |
| `ArmorStandAlreadyExistsException` | Checked | Thrown when trying to create an existing armor stand.          |
| `ArmorStandNotFoundException`      | Checked | Thrown when the armor stand name is invalid or not loaded.     |
| `ArmorStandLoadException`          | Checked | Thrown when loading fails due to configuration or file issues. |
| `ConfigException`                  | Runtime | Only occurs in config-related methods.                         |
| `InventoryException`               | Runtime | Only occurs in inventory-related methods.                      |

---

## Example: Full Workflow

```java
try {
    ArmorStandPoseData pose = new ArmorStandPoseData(
        new EulerAngle(0, 0, 0),
        new EulerAngle(0, 0, 0),
        new EulerAngle(0, 0, 0),
        new EulerAngle(0, 0, 0),
        new EulerAngle(0, 0, 0)
    );

    ArmorStandManager manager = api.getArmorStandManager();
    manager.createArmorStand("showcase_1", pose, player.getLocation(), player);

    // Move it after 2 seconds
    Bukkit.getScheduler().runTaskLater(this, () -> {
        try {
            manager.moveArmorStand("showcase_1", player.getLocation().add(0, 0, 3));
        } catch (ArmorStandNotFoundException e) {
            e.printStackTrace();
        }
    }, 40L);

} catch (ArmorStandAlreadyExistsException e) {
    player.sendMessage("Armor stand already exists!");
}
