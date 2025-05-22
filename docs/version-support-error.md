---
id: version-support-error
title: VersionSupport Error
sidebar_position: 9
---


# Why Does the Server Version Sometimes Show as "Unknown" or Cause Errors?

Sometimes when you run the plugin, you might see messages about the server version being unknown, null, or unsupported. This happens because:

* **Some server software or environments don’t provide version info properly** — the plugin can’t detect the Minecraft server version automatically.
* **The plugin doesn’t support the server’s Minecraft version** — if you’re running a very old or very new Minecraft version, it might not be recognized.
* **Custom server setups or class loaders may hide version details** that the plugin needs to work correctly.

## What Does This Mean for You?

* The plugin might not work as expected.
* Certain features (like custom player skulls or sounds) might be missing or broken.
* The plugin may disable itself to avoid causing problems on your server.

## What Can You Do?

* Make sure you are running a supported Minecraft server version.
* Keep your plugin updated to the latest release.
* If problems persist, check the plugin’s official documentation or support channels for compatibility info.
* Use [this](https://github.com/Parsa3323/AdvancedArmorStands/releases/tag/v1.0.0-beta.15) version _(not recommended)_.

---

If you see an error message about skull features or version support, it usually means your server version is not fully supported by the plugin, and you might want to update or contact support.

---

