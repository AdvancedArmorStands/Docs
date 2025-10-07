---
id: development
title: Development Guide
sidebar_position: 9
---

# Development Guide

This guide is for developers who want to contribute to our plugin or build extensions using our API.

## Setting Up the Development Environment

### Prerequisites

Before you begin, make sure you have:

- Java Development Kit (JDK) 8 or higher
- Git
- Maven or Gradle
- An IDE (IntelliJ IDEA, Eclipse, or VS Code)

### Getting Started

1. Clone the repository:

```bash
git clone https://github.com/Parsa3323/AdvancedArmorStands.git
cd AdvancedArmorStands
```

2. Set up the project in your IDE:

**IntelliJ IDEA:**
- Open IntelliJ IDEA
- Select "Open"
- Navigate to the cloned repository
- Select the `pom.xml` file and open as project

**Eclipse:**
- Open Eclipse
- Select "Import"
- Choose "Existing Maven Projects"
- Navigate to the cloned repository
- Select the `pom.xml` file

3. Build the project:

**Maven:**
```bash
mvn clean package
```

**Gradle:**
```bash
./gradlew clean build
```

The compiled JAR file will be in the `target/` directory (Maven) or `build/libs/` directory (Gradle).

## Project Structure

```
AdvancedArmorStands/
├── .github/
│   ├── CODE_OF_CONDUCT.md
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug_report.yml
│   │   └── config.yml
│   └── workflows/
│       └── test.yml
├── .gitignore
├── armorstand-api/
│   ├── pom.xml
│   └── src/
│       └── main/
│           ├── java/
│           │   └── com/
│           │       └── parsa3323/
│           │           └── aas/
│           │               └── api/
│           │                   ├── actions/
│           │                   │   ├── SenderType.java
│           │                   │   └── TriggerType.java
│           │                   ├── ArmorstandApi.java
│           │                   ├── events/
│           │                   │   ├── ActionTriggerEvent.java
│           │                   │   ├── ArmorStandCreateEvent.java
│           │                   │   ├── ArmorStandDeleteEvent.java
│           │                   │   ├── ArmorStandOptionChangeEvent.java
│           │                   │   ├── ArmorStandRenameEvent.java
│           │                   │   ├── ArmorStandStateChangeEvent.java
│           │                   │   └── PlayerMoveArmorStandEvent.java
│           │                   ├── exeption/
│           │                   │   ├── ArmorStandNotFoundException.java
│           │                   │   ├── ConfigException.java
│           │                   │   └── ReloadException.java
│           │                   ├── player/
│           │                   │   └── IPlayer.java
│           │                   └── versionSupport/
│           │                       └── IVersionSupport.java
│           └── resources/
│               └── plugin.yml
├── armorstand-plugin/
│   ├── pom.xml
│   └── src/
│       └── main/
│           ├── java/
│           │   └── com/
│           │       └── parsa3323/
│           │           └── aas/
│           │               ├── actions/
│           │               │   ├── manager/
│           │               │   │   ├── ActionItem.java
│           │               │   │   └── ActionManager.java
│           │               │   ├── SenderItem.java
│           │               │   └── TriggerItem.java
│           │               ├── AdvancedArmorStands.java
│           │               ├── API.java
│           │               ├── commands/
│           │               │   ├── AnimAddCommand.java
│           │               │   ├── AnimClearCommand.java
│           │               │   ├── CreateCommand.java
│           │               │   ├── DeleteCommand.java
│           │               │   ├── HeadCommand.java
│           │               │   ├── ListCommand.java
│           │               │   ├── manager/
│           │               │   │   ├── CommandManager.java
│           │               │   │   ├── SubCommand.java
│           │               │   │   └── TabComp.java
│           │               │   ├── MoveCommand.java
│           │               │   ├── OptionsCommand.java
│           │               │   ├── ReloadCommand.java
│           │               │   ├── RenameCommand.java
│           │               │   ├── SettingsCommand.java
│           │               │   └── TeleportCommand.java
│           │               ├── config/
│           │               │   ├── ActionConfig.java
│           │               │   ├── AnimationConfig.java
│           │               │   ├── ArmorStandsConfig.java
│           │               │   └── TypesConfig.java
│           │               ├── inventory/
│           │               │   ├── HeadItem.java
│           │               │   ├── LeftHandItem.java
│           │               │   ├── LeftLegItem.java
│           │               │   ├── manager/
│           │               │   │   ├── InventoryItem.java
│           │               │   │   └── InventoryManager.java
│           │               │   ├── RightHandItem.java
│           │               │   ├── RightLegItem.java
│           │               │   ├── RotateItem.java
│           │               │   └── SaveItem.java
│           │               ├── listener/
│           │               │   ├── ChatListener.java
│           │               │   ├── ItemDropListener.java
│           │               │   ├── PlayerDieListener.java
│           │               │   ├── PlayerIntractListener.java
│           │               │   ├── PlayerJoin.java
│           │               │   ├── PlayerLeaveEvent.java
│           │               │   └── StateListener.java
│           │               ├── menus/
│           │               │   ├── ActionMenu.java
│           │               │   ├── ArmorStandMenu.java
│           │               │   ├── manager/
│           │               │   │   ├── Menu.java
│           │               │   │   ├── MenuListener.java
│           │               │   │   └── PaginatedMenu.java
│           │               │   └── SaveMenu.java
│           │               ├── options/
│           │               │   ├── ArmsOptions.java
│           │               │   ├── BasePlateOption.java
│           │               │   ├── CustomNameOption.java
│           │               │   ├── CustomNameVisibleOption.java
│           │               │   ├── GlowingOption.java
│           │               │   ├── GravityOption.java
│           │               │   ├── manager/
│           │               │   │   ├── SettingsManager.java
│           │               │   │   └── SettingsOption.java
│           │               │   ├── SmallOption.java
│           │               │   └── VisibleOption.java
│           │               ├── placeholderapi/
│           │               │   └── PapiExpansion.java
│           │               ├── player/
│           │               │   ├── CustomPlayer.java
│           │               │   └── PlayerManager.java
│           │               └── utils/
│           │                   ├── ActionUtils.java
│           │                   ├── AnimationUtils.java
│           │                   ├── ArmorStandSelectionCache.java
│           │                   ├── ArmorStandUtils.java
│           │                   ├── ColorUtils.java
│           │                   ├── InventoryUtils.java
│           │                   ├── PlayerMenuUtility.java
│           │                   ├── PlayerUtils.java
│           │                   ├── TextUtils.java
│           │                   ├── TypeUtils.java
│           │                   └── VersionSupportUtil.java
│           └── resources/
│               ├── config.yml
│               └── plugin.yml
├── COMMIT_TEMPLATES.md
├── CONTRIBUTING.md
├── LICENCE.txt
├── pom.xml
├── README.md
├── SECURITY.md
├── TERMS_OF_SERVICE.md
├── versionsupport_1_12/
│   ├── pom.xml
│   └── src/
│       └── main/
│           └── java/
│               └── com/
│                   └── parsa3323/
│                       └── versionsupport_1_12/
│                           └── VersionSupport_1_12.java
├── versionsupport_1_16_5/
│   ├── pom.xml
│   └── src/
│       └── main/
│           └── java/
│               └── com/
│                   └── parsa3323/
│                       └── aas/
│                           └── VersionSupport_1_16_5.java
├── versionsupport_1_20_1/
│   ├── pom.xml
│   └── src/
│       └── main/
│           └── java/
│               └── com/
│                   └── parsa3323/
│                       └── versionSupport_1_20_1/
│                           └── VersionSupport_1_20_1.java
├── versionsupport_1_8/
│   ├── pom.xml
│   └── src/
│       └── main/
│           └── java/
│               └── com/
│                   └── parsa3323/
│                       └── aas/
│                           └── VersionSupport_1_8.java
├── versionsupport_v1_17/
│   ├── pom.xml
│   └── src/
│       └── main/
│           └── java/
│               └── com/
│                   └── parsa3323/
│                       └── versionsupport_v1_17/
│                           └── Versionsupport_v1_17.java
├── versionsupport_v1_18/
│   ├── pom.xml
│   └── src/
│       └── main/
│           └── java/
│               └── com/
│                   └── parsa3323/
│                       └── versionsupport_v1_18/
│                           └── Versionsupport_v1_18.java
└── versionsupport_v1_19/
    ├── pom.xml
    └── src/
        └── main/
            └── java/
                └── com/
                    └── parsa3323/
                        └── versionsupport_v1_19/
                            └── Versionsupport_v1_19.java


```

## Making Changes

1. Create a new branch for your feature or bugfix:

```bash
git checkout -b feature/your-feature-name
```

2. Make your changes and write tests

3. Make sure all tests pass:

```bash
mvn test
```

4. Commit your changes:

```bash
git commit -m "Add your detailed commit message here"
```

5. Push your branch:

```bash
git push origin feature/your-feature-name
```

6. Create a pull request on GitHub

## Building Addons

To build extensions for our plugin, use our API as described in the [API documentation](/api-introduction).


## Getting Help

If you need help with development:

- Check the [API documentation](/api-introduction)
- Create an issue on GitHub

## Code of Conduct

Please note that this project is released with a [Contributor Code of Conduct](https://github.com/Parsa3323/AdvancedArmorStands/blob/master/.github/CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.