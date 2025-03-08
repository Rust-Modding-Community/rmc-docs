---
sidebar_position: 2
description: A well-structured plugin follows a logical order, making it easier to read, maintain, and extend.
tags:
  - guide
---

# Plugin Structure  

## General Layout    

1. **Metadata** (`[Info]`, `[Description]`)  - REQUIRED BEFORE CLASS
2. **Configuration** (Settings, Default Values)  
3. **Data Storage** (Saving/Loading)  
4. **Hooks** (Rust & Oxide/Carbon Events)  
5. **Commands** (Chat & Console Commands)  
6. **Helper Methods** (Utility Functions)  

:::note

This order is only a suggestion! Everyone has preferences that help them read their own code.

:::


---

## Example Plugin Structure

```csharp
namespace Oxide.Plugins;

[Info("PluginName", "Author", "1.0.0")]
[Description("Short description of what the plugin does.")]
public class PluginName : RustPlugin
{
    #region Configuration
    private void LoadDefaultConfig() { }
    #endregion

    #region Data Storage
    private Dictionary<string, int> playerScores = new();
    private void SaveData() { }
    private void LoadData() { }
    #endregion

    #region Hooks
    private void OnPlayerConnected(BasePlayer player) { }
    private void OnEntityDeath(BaseEntity entity, HitInfo info) { }
    #endregion

    #region Commands
    [ChatCommand("score")]
    private void CmdShowScore(BasePlayer player, string command, string[] args) { }
    #endregion

    #region Helper Methods
    private void LogMessage(string message) => Puts($"[PluginName] {message}");
    #endregion
}
```
# Why This Order?
- Metadata comes first for easy identification.
- Configuration & Data should load early.
- Hooks & Commands define plugin behavior.
- Helper Methods stay at the bottom for reusability.
Following this structure keeps your plugin organized, readable, and easy to modify.