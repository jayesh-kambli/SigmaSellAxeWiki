---
layout: default
title: Commands
nav_order: 4
---

# Commands

Complete list of all SigmaSellAxe commands.

## Player Commands

### `/sigmasellaxe`
Shows the command help menu.

**Permission:** `sigmasellaxe.use` (default: true)

**Usage:**
```
/sigmasellaxe
```

### `/sigmasellaxe items`
Opens the sellable items GUI showing all sellable items with prices and boost information.

**Permission:** `sigmasellaxe.items` (default: true)

**Usage:**
```
/sigmasellaxe items
```

**Features:**
- Shows all sellable items
- Displays prices from shop plugins
- Shows boost multipliers
- 4 sorting types (A-Z, Z-A, Price High→Low, Price Low→High)
- Pagination support

## Admin Commands

### `/sigmasellaxe give [player]`
Gives the Sell Axe to a player.

**Permission:** `sigmasellaxe.give` (default: op)

**Usage:**
```
/sigmasellaxe give PlayerName
/sigmasellaxe give @p  # Give to nearest player
```

### `/sigmasellaxe reload`
Reloads all plugin configurations without restarting the server.

**Permission:** `sigmasellaxe.reload` (default: op)

**Usage:**
```
/sigmasellaxe reload
```

**What it reloads:**
- Main configuration (`config.yml`)
- All shop configurations
- Protection plugin integrations
- Shop plugin integrations

### `/sigmasellaxe regenerate`
Regenerates shop configuration files from your shop plugin.

**Permission:** `sigmasellaxe.regenerate` (default: op)

**Usage:**
```
/sigmasellaxe regenerate
```

**When to use:**
- After adding/removing shops in ExcellentShop or EconomyShopGUI
- After changing shop items
- If shop detection seems incorrect

**Note:** This preserves your custom boosts and settings.

### `/sigmasellaxe verifyConfig`
Verifies shop configuration and checks for issues.

**Permission:** `sigmasellaxe.verify` (default: op)

**Usage:**
```
/sigmasellaxe verifyConfig
```

**Checks:**
- Shop plugin detection
- Shop configuration validity
- Missing items
- Configuration errors

### `/sigmasellaxe verifyDupe`
Checks for potential money duplication exploits.

**Permission:** `sigmasellaxe.verify` (default: op)

**Usage:**
```
/sigmasellaxe verifyDupe
```

**What it does:**
- Compares boosted sell prices with buy prices
- Identifies items where selling (with boost) is more profitable than buying
- Opens GUI showing potential dupe items

### `/sigmasellaxe commands`
Shows server-side give commands for automation.

**Permission:** `sigmasellaxe.give` (default: op)

**Usage:**
```
/sigmasellaxe commands
```

**Output example:**
```
Server-side commands:
give PlayerName minecraft:diamond_axe{display:{Name:'{"text":"Sigma Sell Axe"}'},...}
```

Useful for:
- Server automation scripts
- Custom give commands
- Integration with other plugins

## Command Aliases

Currently, there are no command aliases. All commands use `/sigmasellaxe` as the base.

## Tab Completion

Tab completion is available for:
- Player names in `/sigmasellaxe give`
- Command subcommands

## Examples

### Basic Usage
```
# Give Sell Axe to a player
/sigmasellaxe give Steve

# Open items GUI
/sigmasellaxe items

# Reload config
/sigmasellaxe reload
```

### Advanced Usage
```
# Regenerate shop configs after adding new shop
/sigmasellaxe regenerate

# Verify configuration
/sigmasellaxe verifyConfig

# Check for dupe exploits
/sigmasellaxe verifyDupe
```

