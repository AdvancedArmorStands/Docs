---
id: plugin-usage
title: Plugin Usage
sidebar_position: 9
---

<!-- # Installing the plugin

just download the latest version from the [release page ](https://github.com/Parsa3323/AdvancedArmorStands/releases)

and install it in your plugins folder -->

# Commands

This plugin has so many commands that i can't list there's some examples

`/as create <type> <name>`

the type should be `Default` or `Custom` if set to custom you have to give the properties of the armor stand you want but if you choose any other like default you can just give the name and done.

# How to add a type

to add a type open the `types.yml` config file and copy the default config, if you don't have it, here you are: 

```yaml
default: # <====== Name of the type
  Arms: true # <====== Has arms?
  Gravity: false # <====== Has gravity?
  BasePlate: false # <====== Does it have a baseplate?
  CustomName: '&cMade with aas' # <====== Custom name for the entity
  isCustomNameVisible: false # <====== Should the custom name be visible?
  itemInHandMaterial: WOOD_SWORD # <====== Item held in the hand
  HeadPos: {} # <====== Head position (empty by default)
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

and then you can copy it and paste it again and rename the name of the config (`Default`) to whatever you want and reload the plugin now you have 2 types its that easy