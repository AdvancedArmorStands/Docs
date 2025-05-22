---
id: api
title: Developer API
sidebar_position: 6
---

# Developer API

This page provides information for developers who want to integrate with aas.

## Getting Started with the API

Aas provides a comprehensive API that allows other plugins to interact with its features. This guide will show you how to use it in your own plugins.

### Adding as a Dependency

First, add aas as a dependency in your `plugin.yml`:

```yaml
name: YourPlugin
version: 1.0.0
main: com.yourname.yourplugin.YourPlugin
soft-depend: [AdvancedArmorStands]  # Add aas as a dependency
```

:::note
or now we don't have a maven repo so you have to download the api file from the releases page and add it as a maven dependency
:::

For Maven projects, you can add aas as a dependency:

```xml
<dependency>
    <groupId>com.parsa3323</groupId>
    <artifactId>armorstand-api</artifactId>
    <version>{Version}</version>
    <scope>system</scope>
    <systemPath>${project.basedir}/lib/{PluginjarName}</systemPath>
</dependency>
```

## Accessing the API

To access the API in your plugin:

```java
import com.parsa3323.aas.api.ArmorstandApi;

public class YourPlugin extends JavaPlugin {
    private ArmorstandApi api;
    
    @Override
    public void onEnable() {
        // Get the API instance
        Plugin plugin = Bukkit.getPluginManager().getPlugin("AdvancedArmorStands");
        
        if (plugin == null) {
            getLogger().severe("Failed to find AdvancedArmorStands! Disabling...");
            Bukkit.getPluginManager().disablePlugin(this);
            return;
        }
        
        api = Bukkit.getServicesManager().getRegistration(ArmorstandApi.class).getProvider();
        
        getLogger().info("Successfully hooked into AdvancedArmorStands API!");
    }
}
```


## Events

### `ArmorStandCreateEvent`: Triggers when a user creates an armor stand

### `ArmorStandDeleteEvent`: Triggers when a user deletes an armor stand

### `PlayerMoveArmorStandEvent`: Triggers when a user moves an armor stand

### `ArmorStandRenameEvent`: Triggers when a user renames an armor stand

### `ArmorStandStateChangeEvent`: Triggers when a user changes state of an armor stand

## Javadoc

For complete documentation of all API classes and methods, see our [Javadoc](https://docs.example.com/javadoc).

## Support

If you have any questions about using our API, please:

- Check our [GitHub](https://github.com/your-github-username/minecraft-plugin) for examples
- Join our [Discord](https://discord.gg/your-discord) for developer support
- Create an [issue](https://github.com/your-github-username/minecraft-plugin/issues) for bug reports or feature requests