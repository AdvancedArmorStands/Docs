---
id: lang-add
title: Add Your Own
sidebar_position: 6
---

You can create your own language file by copying one of the existing language files and modifying its messages

### 1. Choose an existing language

Start by finding the language file you want to use as a base, language files are located in the plugin's language directory and follow the `messages_<iso>.yml` naming format

For example:

```text
messages_en.yml
messages_de.yml
messages_fr.yml
```

### 2. Copy the language file

Make a copy of the language file you want to customize, using an existing language file as a template ensures that all required message keys are already present

For example:

```text
messages_en.yml
```

can be copied to:

```text
messages_custom.yml
```

### 3. Choose your language ISO

Replace `custom` with the ISO code you want to use for your language

For example, if your custom language uses the ISO code `tr`:

```text
messages_tr.yml
```

The filename must follow this format:

```text
messages_<iso>.yml
```

### 4. Customize the messages

Open the new language file and modify the messages to your preferred translations or wording

Keep the existing YAML structure and message keys unchanged

### 5. Set the language in the configuration

After creating your custom language file, open the plugin configuration and set the language value to the same ISO code used in the filename

For example:

```yaml
language: tr
```

The value must match the `<iso>` part of the language filename

### 6. Apply the changes

Save the language file and configuration, then restart the server

Your custom language will now be used by the plugin
