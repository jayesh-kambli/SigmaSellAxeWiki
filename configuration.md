---
layout: default
title: Configuration
nav_order: 3
---

# Configuration

Complete guide to configuring SigmaSellAxe.

## Main Configuration

The main configuration file is located at `plugins/SigmaSellAxe/config.yml`.

### Sell Axe Settings

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

**Options:**
- `name` - Display name of the Sell Axe (supports color codes with `&`)
- `lore` - List of lore lines shown on the Sell Axe
- `durability.enabled` - Enable/disable durability loss
- `durability.lose-per-sell` - Amount of durability lost per sell operation

### Features

```yaml
features:
  left-click-gui: true
  prevent-enchanting: true
```

**Options:**
- `left-click-gui` - Open sellable items GUI when left-clicking with Sell Axe
- `prevent-enchanting` - Prevent players from enchanting the Sell Axe

### Logging

```yaml
logging:
  enabled: true
  file-logging: true
  log-rotation: true
```

**Options:**
- `enabled` - Enable transaction logging to console
- `file-logging` - Enable logging to files
- `log-rotation` - Automatically rotate log files

### Debug System

```yaml
debug:
  enabled: false
  level: BASIC
```

**Levels:**
- `BASIC` - Essential debug information
- `DETAILED` - More detailed debugging
- `VERBOSE` - Maximum verbosity for troubleshooting

### Economy Settings

```yaml
economy:
  shop-plugin: 'auto'  # 'auto', 'ExcellentShop', or 'EconomyShopGUI'
  fallback-prices:
    DIAMOND_ORE: 150.0
    EMERALD_ORE: 200.0
    # ... more items
```

**Options:**
- `shop-plugin` - Which shop plugin to use (auto-detects if set to 'auto')
- `fallback-prices` - Prices for items not in shop plugins

### Integrations

```yaml
integrations:
  lands:
    enabled: true
  griefprevention:
    enabled: true
  worldguard:
    enabled: true
```

Enable or disable protection plugin integrations.

## Shop Configuration

Shop-specific configuration files are located in `plugins/SigmaSellAxe/shops/`.

### Shop File Structure

```yaml
shop:
  id: 'farming'
  name: 'Farming Shop'
  enabled: true
  priority: 1

global-boost: 0.0

items:
  PUMPKIN:
    boost: 1.0
    enabled: true
  MELON:
    boost: 0.5
    enabled: true
```

**Options:**
- `shop.id` - Unique shop identifier
- `shop.name` - Display name of the shop
- `shop.enabled` - Enable/disable this shop
- `shop.priority` - Priority when multiple shops have the same item
- `global-boost` - Global boost multiplier for all items in this shop
- `items` - Item-specific settings
  - `boost` - Boost multiplier for this item
  - `enabled` - Enable/disable selling this item

## Config Migration

The plugin automatically migrates your configuration when updating versions. See the [Config Migration Guide](../CONFIG_MIGRATION_GUIDE.md) for details.

### Manual Migration

If you need to manually update your config:

1. Backup your current `config.yml`
2. Delete `config.yml`
3. Restart server (new default config will be created)
4. Copy your custom settings to the new config

## Reloading Configuration

Reload the configuration without restarting:

```
/sigmasellaxe reload
```

This will:
- Reload main config
- Reload all shop configs
- Apply new settings immediately

## Regenerating Shop Configs

If you've changed your shop plugin configuration, regenerate shop configs:

```
/sigmasellaxe regenerate
```

This will:
- Re-detect all shops
- Update shop configuration files
- Preserve your custom boosts and settings

