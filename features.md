---
layout: default
title: Features
nav_order: 6
---

# Features

Complete overview of all SigmaSellAxe features.

## Container Selling

### How It Works

1. Admin gives players a special Diamond Axe (the Sell Axe)
2. Players right-click containers (chests, barrels, shulkers) while holding the Sell Axe
3. Plugin checks permissions, area trust, and validates items
4. Items are sold using shop plugin prices (or fallback prices)
5. Money is deposited to player's account via Vault
6. Transaction is logged for record-keeping

### Supported Containers

- **Chests** - Single and double chests
- **Barrels** - All barrel types
- **Shulker Boxes** - All shulker box variants
- **Hoppers** - Hopper inventories
- **Other Containers** - Any container that implements `InventoryHolder`

### Transaction Limits

- **Max Items**: 5,000 items per transaction
- **Performance**: Optimized for large transactions
- **Thread Safety**: Fully thread-safe operations

## GUI Features

### Sellable Items GUI

Accessible via `/sigmasellaxe items` or left-clicking with the Sell Axe.

**Features:**
- Shows all sellable items
- Displays prices from shop plugins
- Shows boost multipliers
- Color-coded item display
- Pagination support

### Sorting System

**4 Sort Types:**
1. **Alphabetically A-Z** - Sort items alphabetically (A to Z)
2. **Alphabetically Z-A** - Sort items alphabetically (Z to A)
3. **Price High→Low** - Sort by price (highest first)
4. **Price Low→High** - Sort by price (lowest first)

**Features:**
- Single hopper icon cycles through all sort types
- Active sort type highlighted in lore
- Player-specific preferences (persists across sessions)
- Smooth transitions between sort types

### Dupe Items GUI

Shows potential money duplication exploits.

**Features:**
- Lists items where boosted sell price > buy price
- Shows buy price, sell price, and boosted sell price
- Color-coded warnings
- Pagination support

## Durability System

### Configuration

```yaml
sell-axe:
  durability:
    enabled: true
    lose-per-sell: 1
```

**Options:**
- `enabled` - Enable/disable durability loss
- `lose-per-sell` - Amount of durability lost per sell operation

### Behavior

- Durability is lost only when items are successfully sold
- If selling fails (no items, no permission, etc.), no durability is lost
- When durability reaches 0, the Sell Axe breaks normally
- Players can repair the Sell Axe using an anvil

## Boost System

### Global Boost

Set a global boost for all items in a shop:

```yaml
shop:
  id: 'farming'
global-boost: 0.5  # 50% boost
```

### Item-Specific Boost

Set boost for specific items:

```yaml
items:
  PUMPKIN:
    boost: 1.0  # 100% boost
    enabled: true
  MELON:
    boost: 0.5  # 50% boost
    enabled: true
```

### Boost Calculation

Final price = Base price × (1 + global boost + item boost)

**Example:**
- Base price: 100
- Global boost: 0.5 (50%)
- Item boost: 1.0 (100%)
- Final price: 100 × (1 + 0.5 + 1.0) = 250

## Transaction Logging

### Console Logging

All transactions are logged to console:

```
[SigmaSellAxe] Player sold 64 DIAMOND_ORE for $9,600.00
```

### File Logging

Enable file logging in config:

```yaml
logging:
  enabled: true
  file-logging: true
  log-rotation: true
```

**Features:**
- Logs to `plugins/SigmaSellAxe/logs/`
- Automatic log rotation
- Timestamp tracking
- Detailed transaction information

## Debug System

### Debug Levels

```yaml
debug:
  enabled: false
  level: BASIC  # BASIC, DETAILED, or VERBOSE
```

**Levels:**
- **BASIC** - Essential debug information
- **DETAILED** - More detailed debugging
- **VERBOSE** - Maximum verbosity for troubleshooting

### What Gets Logged

- Shop plugin detection
- Price fetching operations
- Configuration loading
- Error details
- Performance metrics

## Protection Plugin Integration

See [Integrations](integrations) for details on protection plugin support.

## Performance Features

- **Thread Safety** - Fully thread-safe operations
- **Efficient Caching** - Optimized price lookups
- **Resource Limits** - Prevents server overload
- **Folia Support** - Multi-threaded server support

