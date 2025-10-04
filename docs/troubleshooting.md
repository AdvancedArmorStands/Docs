---
id: troubleshooting
title: Troubleshooting
sidebar_position: 8
---

# Troubleshooting

This guide will help you solve common issues with our Minecraft plugin.

## Common Issues

### Plugin Won't Load

**Symptoms:**
- Plugin doesn't appear in the `/plugins` list
- Error messages in the console during server startup

**Possible Causes and Solutions:**

1. **Incompatible Minecraft Version**
   
   **Solution:** Ensure you're using a supported Minecraft version (1.8.x - 1.21.x).

2. **Incompatible Server Software**
   
   **Solution:** Verify you're using Spigot, Paper, or a compatible fork.

3. **Outdated Java Version**
   
   **Solution:** Update to Java 8 or higher.

4. **Corrupted JAR File**
   
   **Solution:** Re-download the plugin and verify the file integrity.

5. **Missing Dependencies**
   
   **Solution:** Make sure that you have the [dependencies](http://docs.advancedarmorstands.ir/installation#prerequisites) installed.

### Configuration Errors

**Symptoms:**
- Plugin loads but doesn't work correctly
- Error messages about configuration in the console

**Possible Causes and Solutions:**

1. **YAML Syntax Errors**
   
   **Solution:** Use a YAML validator to check your configuration files.

2. **Missing Configuration Sections**
   
   **Solution:** Compare your configuration with the default one and add any missing sections.

3. **Invalid Values**
   
   **Solution:** Make sure all values are of the correct type (string, number, boolean, etc.).

## Advanced Troubleshooting

### Enabling Debug Mode

To get more detailed information about issues:

1. Open `config.yml`
2. Set `debug: true`
3. Restart the server or reload the plugin
4. Check the console for detailed debug messages

### Checking Logs

Server logs can provide valuable information:

1. Check `logs/latest.log` for error messages
2. Look for lines containing advanced armor stands
3. Pay attention to errors that occur when using specific commands or features

## Getting Help

If you've tried the solutions above and still have issues:

1. Check our [GitHub Issues](https://github.com/Parsa3323/AdvancedArmorStands/issues) to see if your problem has been reported
2. Create a new issue with detailed information:
   - Plugin version
   - Server software and version
   - Java version
   - Error messages (if any)
   - Steps to reproduce the issue
   - Any relevant configuration files (with sensitive information removed)

## Reporting Bugs

When reporting bugs, please include:

1. A clear description of the issue
2. Steps to reproduce the problem
3. Expected behavior
4. Actual behavior
5. Server logs or error messages
6. Plugin version and server details

This helps us identify and fix issues more quickly.