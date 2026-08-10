---
id: configuration
title: Configuration
sidebar_position: 3
---

## Main Configuration

The `config.yml` file is the plugin's main configuration file:




```yaml
# Main configuration

config-version: 1.0.2 # <========== Config version (don't touch)

language: en # <========== Language

debug: false # <========== Enable & Disable debug

shift-right-click-to-add: true # <========== Enable & Disable shift-right-click to add ArmorStand

shift-click-to-delete: false # <========== Enable & Disable shift-right-click to delete ArmorStand

auto-load-armor-stands: false # <========== Automatically reload armor stands on server restart

ai:
  token: 'PLACE_YOUR_TOKEN_HERE' # <========== Token for AI integration (place your actual token here)

  allow-players: true # <========== Allow players to interact with the AI system
```

## Types Configuration

The `types.yml` file is the configuration for types:

```yaml
default: # <====== Name of the type
  arms: true # <====== Has arms?
  basePlate: false # <====== Does it have a baseplate?
  customName: '&cMade with aas' # <====== Custom name for the entity
  isCustomNameVisible: false # <====== Should the custom name be visible?
  isVisible: true # <====== Is visible?
  isSmall: false # <====== Is small?
  itemInHandMaterial: WOOD_SWORD # <====== Item held in the hand
  headPos: {} # <====== Head position (empty by default)
  rightArmPose: # <====== Right arm pose
    x: -45
    y: 0
    z: 0
  leftArmPose: # <====== Left arm pose
    x: 45
    y: 0
    z: 0
  rightLegPose: # <====== Right leg pose
    x: 45
    y: 0
    z: 0
  leftLegPose: # <====== Left leg pose
    x: -45
    y: 0
    z: 0
```
:::note  
Modify `itemInHandMaterial` to any valid Minecraft material.
:::

:::note
Players can create as many types as they want, but they must change the names and each type can be used in the game using the `create` command
:::

## Animations Configuration

The `animations.yml` file is the configuration for animations:

```yaml
animations:
  wave: # <====== Animation name or type
    interval: 10 # <====== Interval between each animation frame (in ticks)
    loop: true # <====== Should the animation loop? (true or false)
    steps: # <====== List of animation steps
      - head: # <====== Head pose for this step
          x: 0   # <====== Head X rotation
          y: 0   # <====== Head Y rotation
          z: 0   # <====== Head Z rotation
        left_arm: # <====== Left arm pose for this step
          x: -30 # <====== Left arm X rotation
          y: 0   # <====== Left arm Y rotation
          z: -10 # <====== Left arm Z rotation
        right_arm: # <====== Right arm pose for this step
          x: -30 # <====== Right arm X rotation
          y: 0   # <====== Right arm Y rotation
          z: 10  # <====== Right arm Z rotation
        left_leg: # <====== Left leg pose for this step
          x: 10  # <====== Left leg X rotation
          y: 0   # <====== Left leg Y rotation
          z: 0   # <====== Left leg Z rotation
        right_leg: # <====== Right leg pose for this step
          x: -10 # <====== Right leg X rotation
          y: 0   # <====== Right leg Y rotation
          z: 0   # <====== Right leg Z rotation
      - head:
          x: 0   # <====== Head X rotation
          y: 0   # <====== Head Y rotation
          z: 0   # <====== Head Z rotation
        left_arm:
          x: -10 # <====== Left arm X rotation
          y: 0   # <====== Left arm Y rotation
          z: 30  # <====== Left arm Z rotation
        right_arm:
          x: -10 # <====== Right arm X rotation
          y: 0   # <====== Right arm Y rotation
          z: -30 # <====== Right arm Z rotation
        left_leg:
          x: -10 # <====== Left leg X rotation
          y: 0   # <====== Left leg Y rotation
          z: 0   # <====== Left leg Z rotation
        right_leg:
          x: 10  # <====== Right leg X rotation
          y: 0   # <====== Right leg Y rotation
          z: 0   # <====== Right leg Z rotation
```
:::tip
Or you can use the [in-game animation creator](/animations) or the [online editor](https://advancedarmorstands.ir/animate)
:::


## Actions Configuration

The `actions.yml` file is the configuration for actions:

```yaml
armorstand:
  SavedStand101: # <====== Name of the armor stand
    say-its-working: # <====== Command name (use '-' instead of spaces)
      type: player # <====== Command executor ('player' or 'server')
      trigger: all # <====== Interaction that triggers the action
```
:::tip
Use the Armor Stand menu to create or delete actions easily.
:::

:::warning
Don't touch cache `.aas` files.
:::