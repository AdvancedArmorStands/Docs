---
id: config-version-outdated
title: Config Version Outdated
sidebar_position: 3
---

# Why Do You See a "Config Version Is Outdated" Warning?

When the plugin detects that your current `config.yml` file is using an outdated format or version, it shows a warning like this:

`
Config version is outdated! Please consider updating config.yml manually.
`

This typically happens when:

* You updated the plugin but kept the old `config.yml`.
* The structure or options in the config file changed between versions.
* The plugin expects a newer version of the config to function properly.

## What Does This Mean for You?

* Some features might not work as intended due to missing or outdated settings.
* You might see warnings in the console.
* The plugin might auto-generate a new config and ignore the old one, depending on your setup.

## What Should You Do?

1. **Back up your old `config.yml`** — always make a copy before making changes.
2. **Delete the old `config.yml` and restart the server** — the plugin will automatically generate a fresh config file with the correct structure.
3. **Manually reapply your settings** — open the new `config.yml`, and carefully copy over your old values (like messages or custom settings).
4. **Avoid copy-pasting entire old config files** — doing so might break things again.

## Need Help?

Check the plugin’s documentation or contact support if you're unsure how to migrate your settings.

---

If you see this message, it's a sign that the plugin has changed internally and your `config.yml` is no longer fully compatible. Recreating the file ensures stability and avoids unexpected behavior.