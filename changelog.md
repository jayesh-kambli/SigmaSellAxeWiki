---
layout: default
title: Changelog
nav_order: 9
---

# Changelog

All notable changes to SigmaSellAxe are documented here.

For the complete changelog, see [CHANGELOG.md](../CHANGELOG.md) in the repository.

## [2.0.7] - 2024-11-06

### Improvements
- **Buy Price Retrieval Refactor**: Unified interface for buy prices
  - Added `getBuyPrice()` method to `ShopPluginInterface` for extensibility
  - Implemented buy price retrieval in ExcellentShopHook and EconomyShopGUIHook
  - Updated DupeDetector to use unified interface instead of hardcoded shop plugin checks
  - Makes buy price retrieval work for any shop plugin implementing the interface

### Bug Fixes
- Fixed buy price retrieval not working correctly for all shop plugins
- Improved error handling in buy price detection
- Better logging for buy price retrieval failures

## [2.0.6] - 2024-11-06

### Major Features

#### Protection Plugin Integrations
- **GriefPrevention Integration**: Full support for GriefPrevention claim protection
- **WorldGuard Integration**: Complete WorldGuard region support
- Works seamlessly with existing Lands integration

#### Shop Plugin System Overhaul
- **Unified Shop Plugin Interface**: Complete refactor of shop plugin integration
- **ExcellentShop Integration**: Full reflection-based support
- **EconomyShopGUI Integration**: Complete API integration
- Automatic shop plugin detection and switching

#### Duplication Exploit Detection
- **DupeDetector System**: Advanced money duplication detection
- `/sigmasellaxe verifydupe` command for admin verification
- Visual DupeItemsGUI to display potential issues

#### GUI Enhancements
- **Sellable Items GUI Sorting**: 4 sort types with single hopper icon
- Player-specific sort preferences
- Active sort type highlighted in lore

### New Features
- File-based transaction logging
- Debug logging system (BASIC, DETAILED, VERBOSE)
- Smart configuration migration
- Version update notifications

### Improvements
- Better error handling
- Improved performance optimizations
- Cleaner initialization logging

### Configuration Changes
- Config version updated to `3`
- New debug section
- New integrations section

## Previous Versions

For older versions, see the [full changelog](../CHANGELOG.md).

---

**Note**: Configuration automatically migrates between versions. All user customizations are preserved.

