---
layout: default
title: API
nav_order: 10
---

# API Documentation

Developer documentation for integrating with SigmaSellAxe.

## Getting the Plugin Instance

```java
SigmaSellAxe plugin = (SigmaSellAxe) Bukkit.getPluginManager().getPlugin("SigmaSellAxe");
if (plugin == null || !plugin.isEnabled()) {
    // Plugin not loaded
    return;
}
```

## Main Classes

### SigmaSellAxe

Main plugin class.

**Methods:**
- `getConfigManager()` - Get configuration manager
- `getEconomyHook()` - Get economy hook
- `getShopPluginManager()` - Get shop plugin manager

### ConfigManager

Manages plugin configuration.

**Methods:**
- `getShopConfig(String shopId)` - Get shop-specific configuration
- `getItemBoost(String shopId, String material)` - Get item boost multiplier
- `getShopGlobalBoost(String shopId)` - Get global boost for shop
- `getFallbackPrice(String material)` - Get fallback price for material

### EconomyHook

Handles economy operations.

**Methods:**
- `getShopPrice(Player player, Material material)` - Get sell price for material
- `getShopPluginManager()` - Get shop plugin manager

### ShopPluginManager

Manages shop plugin integrations.

**Methods:**
- `getActiveShopPlugin()` - Get currently active shop plugin
- `getPrice(Player player, Material material)` - Get sell price
- `getBuyPrice(Player player, Material material)` - Get buy price
- `getPriceForGUI(Material material)` - Get price for GUI display

## Examples

### Getting Sell Price

```java
SigmaSellAxe plugin = (SigmaSellAxe) Bukkit.getPluginManager().getPlugin("SigmaSellAxe");
EconomyHook economyHook = plugin.getEconomyHook();
double price = economyHook.getShopPrice(player, Material.DIAMOND_ORE);
```

### Getting Item Boost

```java
ConfigManager configManager = plugin.getConfigManager();
double boost = configManager.getItemBoost("farming", "PUMPKIN");
```

### Checking Shop Plugin

```java
ShopPluginManager shopManager = economyHook.getShopPluginManager();
ShopPluginInterface activePlugin = shopManager.getActiveShopPlugin();
if (activePlugin != null) {
    String pluginName = activePlugin.getPluginName();
    // ExcellentShop or EconomyShopGUI
}
```

## Events

Currently, SigmaSellAxe does not fire custom events. This may be added in future versions.

## Thread Safety

All API methods are thread-safe and can be called from any thread.

## Version Compatibility

API methods may change between major versions. Check the changelog for breaking changes.

## Support

For API questions or feature requests:
- Open an issue on [GitHub](https://github.com/jayesh-kambli/SigmaSellAxe/issues)
- Join our [Discord Server](https://discord.com/invite/JqWR9zc2cK)

