---
sidebar_position: 3
description: Writing clean, readable code isn't just about functionality—it's about how easily others (and future you) can understand it.
---

# C# Naming Conventions  

Writing clean, readable code isn't just about functionality—it's about **how easily others (and future you) can understand it**. Following **consistent naming conventions** makes your plugins more readable, easier to maintain, and less prone to errors. While the information outlined below is useful, every developer is different. Find what works best for you and go with it.

## General Rules  

- **Be descriptive, but concise** - Names should clearly indicate what something does without being unnecessarily long.  
- **Use PascalCase for most things** - except local variables and parameters.  
- **Avoid abbreviations** - Unless they are widely recognized (`config` is fine, `cfg` is not).  
- **Stick to one naming style** - mixing conventions makes code harder to read.  

## Classes 

Class names should be **nouns** in **PascalCase**, describing what the class represents.  
```csharp
public class PlayerStatsManager { }
public class BaseBuildingHelper { }
```

## Methods
Method names should use PascalCase and be verbs or verb phrases that describe what the method does.

```csharp
public void SavePlayerData() { }
public int GetTotalKills() { return 0; }
public bool IsPlayerAdmin() { return false; }
```
## Variables & Fields
Use camelCase for local variables and method parameters.  
Use _camelCase for private fields.  
Use PascalCase for public fields (but prefer properties instead).  

```csharp
private int _playerCount;
public int MaxPlayers;
void UpdateScore(int newScore) { }
```
## Properties
Properties should be PascalCase like methods, but represent data, not actions.

```csharp
public int Health { get; set; }
public string PlayerName { get; private set; }
```
## Constants & Readonly Fields
Constants should be PascalCase and describe unchanging values.

```csharp
public const int MaxInventorySlots = 30;
public static readonly string DefaultWelcomeMessage = "Welcome to the server!";
```
### Enum Values
Enums should be PascalCase, with meaningful values.

```csharp
public enum DamageType
{
    Bullet,
    Explosion,
    Fire
}
```

## File Naming
File names should match the class name exactly as well as your plugin name in the metadata.

✅ PlayerStatsManager.cs  
❌ playerStats.cs  
❌ Playerstatsmanager.cs  

Following these conventions keeps your code clean, readable, and professional—which means fewer headaches when you come back to it later! 🚀  

This keeps it **concise, easy to follow, and practical for Rust plugin development**. Let me know if you'd like any changes! 🔥