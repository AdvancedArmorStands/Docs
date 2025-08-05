---
id: animations
title: Animations
sidebar_position: 6
---

# Animations

The **Animations** system in **Advanced Armor Stands** allows you to create and apply custom animated movements to your armor stands using an intuitive in-game editor.

## Creating an Animation

To start creating an animation, use the command:

```
/as animation create <animation-name> <armorstand-name>
```

- `<animation-name>` – The unique name for your animation.
- `<armorstand-name>` – The name of the armor stand you want to animate (must already exist).

This command will:
- Replace your inventory with special editor items.
- Let you interact with the armor stand and add keyframes.

## Animation Editor Tools

When you're in animation edit mode, your inventory is filled with tools. Hover over each item to see what it does. The key ones are:

- **Keyframe Tool**:
  - **Right-click** to add a keyframe using the armor stand's current pose and position.
  - **Shift + Right-click** to open the Keyframe Menu, where you can manage all your keyframes and edit intervals.

## Editing Keyframes

When you open the Keyframe Menu:
- You can **set the interval** (in ticks) between keyframes.
- You can **remove** specific keyframes.
- All transformations are saved per keyframe.

Make sure to add keyframes at different moments with the desired pose/movement.

## Saving & Applying the Animation

Once you've created all the keyframes you want, you can **quit the animation editor** using the **Quit** item in your inventory.

After quitting, you can apply the animation to any armor stand with:

```
/animation add <animation-name> <armorstand-name>
```

- This binds the animation to the given armor stand.
- The armor stand will now animate according to the keyframes and intervals you've defined.

---

## Notes

- You can create multiple animations and reuse them on different armor stands.
- Animations are saved and persistent across server restarts.

:::tip
Use animations to bring your builds to life, create dancing statues, rotating guards, and more.
:::

