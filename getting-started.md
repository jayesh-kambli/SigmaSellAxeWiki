---
layout: default
title: Getting Started
nav_order: 2
---

# Getting Started

This guide will help you get SigmaSellAxe up and running on your server.

## Installation

### Step 1: Download

Download the latest JAR file from:
- [GitHub Releases](https://github.com/jayesh-kambli/SigmaSellAxe/releases)
- [BuiltByBit](https://builtbybit.com/resources/sigmasellaxe)

### Step 2: Install Dependencies

**Required:**
- **Vault** - For economy integration

**Optional (but recommended):**
- **ExcellentShop** or **EconomyShopGUI** - For shop integration
- **Lands**, **GriefPrevention**, or **WorldGuard** - For protection plugin support

### Step 3: Place the Plugin

1. Stop your server
2. Place `SigmaSellAxe-2.0.7.jar` in your `plugins/` folder
3. Start your server

### Step 4: First Startup

On first startup, the plugin will:
- Create the configuration folder structure
- Detect any installed shop plugins
- Generate shop configuration files automatically
- Create default configuration files

## First Time Setup

### 1. Configure Main Settings

Edit `plugins/SigmaSellAxe/config.yml`:

```yaml
sell-axe:
  name: '&6&lSigma Sell Axe'
  lore:
    - '➤ Right-click chests, barrels, or shulkers to sell contents.'
    - '➤ Left-click to view all sellable items.'
  durability:
    enabled: true
    lose-per-sell: 1
```

### 2. Configure Shop Integration

If you have ExcellentShop or EconomyShopGUI installed, the plugin will automatically detect and configure shops. You can verify this by running:

```
/sigmasellaxe verifyConfig
```

### 3. Give Players the Sell Axe

Give players the Sell Axe using:

```
/sigmasellaxe give <player>
```

Or use the server-side command:

```
/sigmasellaxe commands
```

## Basic Configuration

### Sell Axe Settings

```yaml
sell-axe:
  name: '&6&lSigma Sell Axe'  # Display name (supports color codes)
  lore:                        # Lore lines
    - 'Line 1'
    - 'Line 2'
  durability:
    enabled: true              # Enable durability loss
    lose-per-sell: 1          # Durability lost per sell operation
```

### Features

```yaml
features:
  left-click-gui: true        # Open GUI on left-click
  prevent-enchanting: true     # Prevent enchanting the Sell Axe
```

### Logging

```yaml
logging:
  enabled: true                # Enable transaction logging
  file-logging: true          # Log to file
  log-rotation: true          # Rotate log files
```

### Debug System

```yaml
debug:
  enabled: false               # Enable debug logging
  level: BASIC                 # BASIC, DETAILED, or VERBOSE
```

## Next Steps

- [Configuration Guide](configuration) - Detailed configuration options
- [Commands](commands) - All available commands
- [Permissions](permissions) - Setting up permissions
- [Features](features) - Learn about all features

