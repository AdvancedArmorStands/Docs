---
id: ai-getting-started
title: Getting Started
sidebar_position: 6
---

# Getting Started with AI

The AI system in **Advanced Armor Stands** allows armor stands to respond to prompts, execute actions, and modify themselves using an external LLM provider.

Before using any AI commands, you must configure an API key and enable the system.

---

## 1. Enabling the AI System

Open your plugin’s `config.yml` and locate the **ai** section:

```yml
ai:
  token: 'PLACE_YOUR_TOKEN_HERE' # <========== Token for AI integration (place your actual token here)
  allow-players: true            # <========== Allow players to interact with the AI system
```

### Required Step: Add Your Token

Replace the placeholder with your **Gemini API key**:

```
token: 'YOUR_GEMINI_API_KEY'
```

If this value is missing or invalid, all AI commands will be disabled.

### Optional: Player Access

* `allow-players: true` lets regular players mention armorstands like this `@<name> <text>` in the chat.
* Set to `false` if only admin should interact with the armor stand ai.

After editing `config.yml`, **restart your server** to load the AI integration. 

---

## 2. Ai Commands

Once the server is running with a valid token, two commands become available:

### **/as tell &lt;armorstand-name&gt; &lt;prompt&gt;**

This sends a message *to the AI linked to the selected armor stand*.
It behaves like a conversation:

* The armor stand replies *as itself*.
* Could be used for immersive NPC-style interactions.

**Example:**

```
/as tell Guard1 Hello
```

---

### **/as ai &lt;prompt&gt;**

This AI command is an assistant for the plugin’s capabilities.

You can ask it to:

* Create a new armor stand
* Remove an existing one
* Change positions, rotations, poses
* More soon...

**Example:**

```
/as ai Create a new armorstand named luna.
```

Or:

```
/as ai Set Luna's armor stand pose to running.
```

---

## 3. How the AI Interacts with Armor Stands

When using `/as tell`, the stand is treated as a character.

When using `/as ai`, the AI behaves like an assistant.

