---
id: api-adding-animation
title: Adding Animations
sidebar_position: 6
---

## Animation Manager

You can access it using:
```java
AnimationManager manager = armorStandApi.getAnimationManager();
````

---

### Creating an Animation

You can define an animation by providing:

* A **name** for the animation.
* A **loop** value to indicate whether it repeats.
* A **tick interval** between frames.
* One or more **`ArmorStandPoseData`** objects that define each frame’s pose.

```java
ArmorStandPoseData frame1 = new ArmorStandPoseData(
    new EulerAngle(0, 0, 0), // right arm
    new EulerAngle(0, 0, 0), // left arm
    new EulerAngle(0, 0, 0), // right leg
    new EulerAngle(0, 0, 0), // left leg
    new EulerAngle(0, 0, 0)  // head
);

ArmorStandPoseData frame2 = new ArmorStandPoseData(
    new EulerAngle(Math.toRadians(20), 0, 0),
    new EulerAngle(Math.toRadians(-20), 0, 0),
    new EulerAngle(0, 0, 0),
    new EulerAngle(0, 0, 0),
    new EulerAngle(0, 0, 0)
);

try {
    manager.setAnimation("MyArmorStand", "wave", true, 5, frame1, frame2);
} catch (AnimationNotFoundException e) {
    e.printStackTrace();
}
```

This will create an animation called `"wave"` for the armor stand named `"MyArmorStand"`, looping every **5 ticks** between the two poses.

---

### Assigning an Existing Animation

You can assign an existing, preconfigured animation by name:

```java
try {
    manager.setAnimation("MyArmorStand", "dance");
} catch (AnimationNotFoundException e) {
    e.printStackTrace();
}
```

---

### Checking for Animations

```java
boolean hasAnim = manager.hasAnimation("MyArmorStand");
boolean exists = manager.hasAnimation("wave");
```

* `hasAnimation(ArmorStand armorStand)` - checks if the given armor stand has an active animation.
* `hasAnimation(String name)` - checks if an animation by that name exists in memory.

---

### Reloading Animations

If you modify animations in your configuration or file system, you can reload them at runtime:

```java
try {
    manager.reload();
} catch (ReloadException e) {
    e.printStackTrace();
}
```

---

### Notes

* Each animation is internally linked to a **unique armor stand name**.
* You can create as many animations as your server can handle — performance depends on tick rate and animation complexity.
* Throws:

  * `AnimationNotFoundException` if the specified animation name does not exist.
  * `ReloadException` if animation reload fails due to configuration issues.

