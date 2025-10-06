---
id: installation
title: Installation Guide
sidebar_position: 2
---

# Installation Guide

Follow these steps to install our Minecraft plugin on your server.

## Prerequisites

Before installing, make sure you have:

- A Minecraft server running version 1.8.x - 1.21.x
- [PlaceHolderApi](https://www.spigotmc.org/resources/placeholderapi.6245/) plugin _(optional)_
- Server software: Spigot, Paper, or compatible forks
- Java 8 or higher
- Access to your server files
- Server restart privileges

## Download the Plugin

1. Download the latest version of the plugin from one of these sources:
   - [Official Website](https://advancedarmorstands.ir)
   - [Spigot Resource Page](https://www.spigotmc.org/resources/advancedarmorstands.121022/)
   - [GitHub Releases](https://github.com/Parsa3323/AdvancedArmorStands/releases)

2. Make sure you download the correct version for your Minecraft server version.

## Server Installation

1. Stop your Minecraft server if it's running
2. Navigate to your server's `plugins` folder
3. Copy or move the downloaded JAR file into this folder
4. Start your server again

The plugin will automatically generate necessary configuration files on the first startup.

## Verify Installation

You can verify that the plugin has been successfully installed by:

1. Checking the server console during startup for messages from our plugin
2. Running the command `/as` in-game 
3. Looking for the plugin in the output of the `/plugins` command

## Post-Installation

After installation:

1. Go to the `plugins/AdvancedArmorStands/` directory to find the configuration files
2. Edit `config.yml` to customize the plugin settings (see [Configuration](/configuration))
3. Restart the server to apply your changes, or use the reload command if available

## Updating the Plugin

To update to a newer version:

1. Stop your Minecraft server
2. Delete the old plugin JAR from your `plugins` folder
3. Add the new version to the `plugins` folder
4. Start your server again

Your configuration files will be preserved during updates. However, it's always a good idea to make backups before updating.

## Troubleshooting

If you encounter issues during installation:

- Check that your server meets the [requirements](#prerequisites)
- Ensure you downloaded the correct version
- Look for error messages in your server console
- See our [Troubleshooting](/troubleshooting) guide for common issues
