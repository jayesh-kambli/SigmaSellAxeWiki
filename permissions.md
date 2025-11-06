---
layout: default
title: Permissions
nav_order: 5
---

# Permissions

Complete permission reference for SigmaSellAxe.

## Permission Nodes

### `sigmasellaxe.use`
Allows players to use the Sell Axe tool.

**Default:** `true` (all players)

**What it allows:**
- Right-click containers with Sell Axe to sell items
- Use the Sell Axe tool

**Example:**
```yaml
permissions:
  sigmasellaxe.use:
    default: true
```

### `sigmasellaxe.items`
Allows players to open the sellable items GUI.

**Default:** `true` (all players)

**What it allows:**
- Open GUI with `/sigmasellaxe items`
- Left-click with Sell Axe to open GUI (if enabled)

**Example:**
```yaml
permissions:
  sigmasellaxe.items:
    default: true
```

### `sigmasellaxe.give`
Allows giving the Sell Axe to players.

**Default:** `op` (operators only)

**What it allows:**
- Use `/sigmasellaxe give` command
- View server-side give commands

**Example:**
```yaml
permissions:
  sigmasellaxe.give:
    default: op
```

### `sigmasellaxe.reload`
Allows reloading plugin configurations.

**Default:** `op` (operators only)

**What it allows:**
- Use `/sigmasellaxe reload` command

**Example:**
```yaml
permissions:
  sigmasellaxe.reload:
    default: op
```

### `sigmasellaxe.regenerate`
Allows regenerating shop configurations.

**Default:** `op` (operators only)

**What it allows:**
- Use `/sigmasellaxe regenerate` command

**Example:**
```yaml
permissions:
  sigmasellaxe.regenerate:
    default: op
```

### `sigmasellaxe.verify`
Allows verifying configurations and checking for exploits.

**Default:** `op` (operators only)

**What it allows:**
- Use `/sigmasellaxe verifyConfig` command
- Use `/sigmasellaxe verifyDupe` command

**Example:**
```yaml
permissions:
  sigmasellaxe.verify:
    default: op
```

### `sigmasellaxe.*`
Grants all permissions above.

**Default:** `op` (operators only)

**Example:**
```yaml
permissions:
  sigmasellaxe.*:
    default: op
```

## Permission Setup Examples

### Using LuckPerms

```yaml
# Give all players access to use Sell Axe
groups:
  default:
    permissions:
      - sigmasellaxe.use
      - sigmasellaxe.items

# Give admins all permissions
  admin:
    permissions:
      - sigmasellaxe.*
```

### Using PermissionsEx

```
# Default group
default:
  permissions:
    - sigmasellaxe.use
    - sigmasellaxe.items

# Admin group
admin:
  permissions:
    - sigmasellaxe.*
```

### Using GroupManager

```yaml
groups:
  default:
    permissions:
      - sigmasellaxe.use
      - sigmasellaxe.items
  admin:
    permissions:
      - sigmasellaxe.*
```

## Permission Best Practices

1. **Default Access**: Keep `sigmasellaxe.use` and `sigmasellaxe.items` as default `true` for normal gameplay
2. **Admin Only**: Keep admin commands (`reload`, `regenerate`, `verify`) as `op` only
3. **Selective Access**: Use permission groups to give Sell Axe to specific groups only
4. **Security**: Never give `sigmasellaxe.*` to regular players

## Troubleshooting Permissions

### Player can't use Sell Axe
- Check if they have `sigmasellaxe.use` permission
- Verify permission plugin is working
- Check server console for permission errors

### Player can't open GUI
- Check if they have `sigmasellaxe.items` permission
- Verify GUI feature is enabled in config

### Admin commands not working
- Check if they have `op` status or specific permission
- Verify permission plugin recognizes the permission node

