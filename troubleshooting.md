---
layout: default
title: Troubleshooting
nav_order: 8
---

# Troubleshooting

Common issues and their solutions.

## Installation Issues

### Plugin Won't Load

**Symptoms:**
- Plugin doesn't appear in `/plugins`
- Error in console on startup

**Solutions:**
1. Verify you're using the correct Minecraft version (1.21+)
2. Check that Vault is installed (required dependency)
3. Verify the JAR file isn't corrupted
4. Check server console for specific error messages

### Missing Dependencies

**Symptoms:**
- Plugin loads but doesn't function
- Errors about missing dependencies

**Solutions:**
1. Install **Vault** (required)
2. Install shop plugin (ExcellentShop or EconomyShopGUI) for full functionality
3. Check server console for missing dependency warnings

## Configuration Issues

### Shop Plugin Not Detected

**Symptoms:**
- No shops detected on startup
- Prices not working

**Solutions:**
1. Verify shop plugin is installed and enabled
2. Check shop plugin is working correctly
3. Run `/sigmasellaxe regenerate` to re-detect shops
4. Check debug logs:
   ```yaml
   debug:
     enabled: true
     level: DETAILED
   ```

### Configuration Not Saving

**Symptoms:**
- Changes to config don't persist
- Config reverts on restart

**Solutions:**
1. Check file permissions
2. Verify config file isn't read-only
3. Check server console for save errors
4. Try `/sigmasellaxe reload` after making changes

## Permission Issues

### Player Can't Use Sell Axe

**Symptoms:**
- Player can't sell items
- No error message

**Solutions:**
1. Check player has `sigmasellaxe.use` permission
2. Verify permission plugin is working
3. Check server console for permission errors
4. Try giving player `sigmasellaxe.*` temporarily to test

### Admin Commands Not Working

**Symptoms:**
- Admin can't use `/sigmasellaxe reload`
- Commands return "no permission"

**Solutions:**
1. Verify admin has `op` status or specific permission
2. Check permission plugin recognizes the permission node
3. Try using `sigmasellaxe.*` permission

## Selling Issues

### Items Not Selling

**Symptoms:**
- Right-click does nothing
- No items sold

**Solutions:**
1. Verify player is holding the Sell Axe
2. Check container has sellable items
3. Verify player has permission in protection plugin (Lands/GriefPrevention/WorldGuard)
4. Check debug logs for specific errors

### Wrong Prices

**Symptoms:**
- Items selling for wrong prices
- Prices not matching shop plugin

**Solutions:**
1. Run `/sigmasellaxe verifyConfig` to check configuration
2. Verify shop plugin prices are correct
3. Check for boost multipliers in shop configs
4. Regenerate shop configs: `/sigmasellaxe regenerate`

### Durability Not Working

**Symptoms:**
- Sell Axe doesn't lose durability
- Durability loss too high/low

**Solutions:**
1. Check durability is enabled in config:
   ```yaml
   sell-axe:
     durability:
       enabled: true
       lose-per-sell: 1
   ```
2. Verify the Sell Axe is the correct item (identified by NBT, not name)
3. Check if durability loss is set too high

## Performance Issues

### Server Lag When Selling

**Symptoms:**
- Server freezes when selling large amounts
- TPS drops during transactions

**Solutions:**
1. Check transaction limits in config
2. Reduce max items per transaction
3. Enable debug logging to identify bottlenecks
4. Consider using Folia for better performance

### High Memory Usage

**Symptoms:**
- Server using too much memory
- Out of memory errors

**Solutions:**
1. Check log file rotation is enabled
2. Limit transaction sizes
3. Review debug logging level (VERBOSE uses more memory)
4. Check for memory leaks in other plugins

## Integration Issues

### Protection Plugin Not Working

**Symptoms:**
- Players can sell in protected areas
- Protection checks not working

**Solutions:**
1. Verify protection plugin is installed and enabled
2. Check integration is enabled in config:
   ```yaml
   integrations:
     lands:
       enabled: true
   ```
3. Check server console for integration messages
4. Verify protection plugin is working correctly

### Shop Plugin Integration Issues

**Symptoms:**
- Prices not updating
- Shops not detected

**Solutions:**
1. Verify shop plugin is installed and enabled
2. Check shop plugin is working correctly
3. Run `/sigmasellaxe regenerate` to re-detect shops
4. Check debug logs for integration errors

## Debug Information

### Enabling Debug Logging

```yaml
debug:
  enabled: true
  level: DETAILED  # BASIC, DETAILED, or VERBOSE
```

### Getting Help

When reporting issues, provide:

1. **Server Version** - e.g., Paper 1.21.6
2. **Plugin Version** - e.g., SigmaSellAxe 2.0.7
3. **Error Messages** - From console/logs
4. **Steps to Reproduce** - What you did to cause the issue
5. **Installed Plugins** - List of all plugins
6. **Configuration** - Relevant config sections (remove sensitive data)

### Useful Commands

- `/sigmasellaxe verifyConfig` - Check configuration
- `/sigmasellaxe verifyDupe` - Check for dupe exploits
- `/sigmasellaxe reload` - Reload configuration
- `/sigmasellaxe regenerate` - Regenerate shop configs

## Performance Tips

1. **Use Folia** - Better performance on multi-threaded servers
2. **Limit Transaction Size** - Keep transactions reasonable
3. **Enable Log Rotation** - Prevents log files from growing too large
4. **Disable Verbose Debug** - Only enable when troubleshooting
5. **Regular Maintenance** - Clean up old log files

## Still Need Help?

- Check the [GitHub Issues](https://github.com/jayesh-kambli/SigmaSellAxe/issues)
- Join our [Discord Server](https://discord.com/invite/JqWR9zc2cK)
- Review the [Configuration Guide](configuration)

