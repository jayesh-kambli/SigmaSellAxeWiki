---
layout: default
title: Integrations
nav_order: 7
---

# Integrations

SigmaSellAxe integrates with various plugins to provide a complete solution.

## Shop Plugins

### ExcellentShop

**Status:** ✅ Fully Supported

**Features:**
- Automatic shop detection
- Real-time price fetching
- Reflection-based integration (no compile dependency)
- Multi-shop support
- Permission-based pricing

**Configuration:**
```yaml
economy:
  shop-plugin: 'ExcellentShop'  # or 'auto'
```

**Detection:**
The plugin automatically detects ExcellentShop on startup and generates shop configurations.

### EconomyShopGUI

**Status:** ✅ Fully Supported

**Features:**
- Full API integration
- Multi-economy type support
- Shop section detection
- Dynamic pricing with limits
- Permission checks

**Configuration:**
```yaml
economy:
  shop-plugin: 'EconomyShopGUI'  # or 'auto'
```

**Detection:**
The plugin automatically detects EconomyShopGUI on startup and generates shop configurations.

### Shop Plugin Selection

The plugin supports automatic shop plugin detection:

```yaml
economy:
  shop-plugin: 'auto'  # Automatically detects available shop plugin
```

**Priority:**
1. ExcellentShop (if available)
2. EconomyShopGUI (if available)
3. Fallback prices (if no shop plugin)

## Protection Plugins

### Lands

**Status:** ✅ Fully Supported

**Features:**
- Area trust checking
- Permission-based selling restrictions
- Seamless integration

**Configuration:**
```yaml
integrations:
  lands:
    enabled: true
```

**How it works:**
- Checks if player has trust in the area
- Prevents selling if player doesn't have permission
- Respects Lands trust levels

### GriefPrevention

**Status:** ✅ Fully Supported

**Features:**
- Claim boundary detection
- Permission-based selling restrictions
- Full claim protection

**Configuration:**
```yaml
integrations:
  griefprevention:
    enabled: true
```

**How it works:**
- Checks if player is in a claim
- Verifies player has permission to sell in the claim
- Prevents selling in protected claims without permission

### WorldGuard

**Status:** ✅ Fully Supported

**Features:**
- Region flag support
- Multi-region detection
- Integration with other protection plugins

**Configuration:**
```yaml
integrations:
  worldguard:
    enabled: true
```

**How it works:**
- Checks WorldGuard regions
- Respects region flags
- Works alongside Lands and GriefPrevention

## Economy Plugins

### Vault

**Status:** ✅ Required

**Features:**
- Economy integration
- Multi-economy support
- Standard economy API

**Required:**
Vault is required for the plugin to function. It provides the economy API used by SigmaSellAxe.

## Integration Priority

When multiple protection plugins are installed:

1. **Lands** - Checked first
2. **GriefPrevention** - Checked if Lands doesn't apply
3. **WorldGuard** - Checked if neither Lands nor GriefPrevention apply

All checks must pass for selling to be allowed.

## Troubleshooting Integrations

### Shop Plugin Not Detected

1. Verify the shop plugin is installed and enabled
2. Check server console for detection messages
3. Run `/sigmasellaxe verifyConfig` to check detection
4. Try `/sigmasellaxe regenerate` to re-detect shops

### Protection Plugin Not Working

1. Verify the protection plugin is installed and enabled
2. Check integration is enabled in config:
   ```yaml
   integrations:
     lands:
       enabled: true
   ```
3. Check server console for integration messages
4. Verify player has proper permissions in the protection plugin

### Price Issues

1. Verify shop plugin is working correctly
2. Check shop configuration files
3. Run `/sigmasellaxe verifyConfig` to check for issues
4. Check debug logs for price fetching errors

