---
sidebar_position: 4
description: This guide contains common things you will need to do in plugins, from configuration to localization.
---

# Common Examples

This guide will cover the following topics.
- Configuration Generation
- Localization (Lang)
- Data File Creation


## Configuration Generation

Configuration is generally handled using classes. These classes are passed to built-in methods that you override to generate your configuration files.  

In the example below, we will create our main Configuration class, and add our config options to it.

**Example 1:**
```csharp

#region Config

public required Configuration PluginConfig;

// Configuration class for the Rust plugin.
// Defines various options that can be set in the config file.
public class Configuration
{
    [JsonProperty(PropertyName = "Version (DO NOT CHANGE)", Order = int.MaxValue)]
    public VersionNumber Version = new(1, 0, 0);

    [JsonProperty(PropertyName = "Boolean Config Option")]
    public bool BoolOption = true;

    [JsonProperty(PropertyName = "String Config Option")]
    public string StringOption = "You are not whitelisted to join this server.";

    // ObjectCreationHandling = ObjectCreationHandling. Is required for Dictionaries and Lists to allow the user to edit the config and it get saved properly.
    [JsonProperty(PropertyName = "List Config Option", ObjectCreationHandling = ObjectCreationHandling.Replace)]
    public List<string> ListOption = ["Word 1", "Word 2"];

    [JsonProperty(PropertyName = "Dictionary Config Option", ObjectCreationHandling = ObjectCreationHandling.Replace)]
    public Dictionary<string, string> DictionaryOption = new Dictionary<string, string>()
    {
        ["Key 1"] = "Value 1",
        ["Key 2"] = "Value 2",
        ["Key 3"] = "Value 3"
    };

    // Nested subclass for additional configuration settings.
    // Used to group related options together.
    [JsonProperty(PropertyName = "Sub Class Settings")]
    public SubClass SubClassOption = new();

    public class SubClass
    {
        [JsonProperty(PropertyName = "Sub Class Option 1")]
        public bool BoolOption = true;

        [JsonProperty(PropertyName = "Sub Class Option 2")]
        public int IntOption = 100;

        [JsonProperty(PropertyName = "Sub Class Option 3")]
        public float FloatOption = 1.10f;

        [JsonProperty(PropertyName = "Sub Class Option 4")]
        public ulong UlongOption = 76561198071742336;
    }
}

// Loads the configuration from the config file.
// If the file does not exist or is outdated, a new one is generated.
protected override void LoadConfig()
{
    base.LoadConfig();
    PluginConfig = Config.ReadObject<Configuration>();

    if (PluginConfig == null)
    {
        PluginConfig = new Configuration();
        SaveConfig();
        return;
    }

    if (PluginConfig.Version >= Version) return;

    PrintWarning("Outdated configuration file detected. Updating...");
    UpdateConfig();
    SaveConfig();
}

// Updates the configuration file when an outdated version is detected.
// Ensures that missing settings are added without breaking existing ones.
private void UpdateConfig()
{
    if (PluginConfig.Version >= Version) return;

    if (PluginConfig.Version <= new VersionNumber(1, 0, 0))
    {
        PluginConfig.SubClassOption.IntOption = 100; // Ensures a default value is set for the new setting.
    }

    PluginConfig.Version = Version;
}

// Loads the default configuration when none exists.
protected override void LoadDefaultConfig() => new Configuration();

// Saves the current configuration settings to the file.
protected override void SaveConfig() => Config.WriteObject(PluginConfig, true);

#endregion Config
```