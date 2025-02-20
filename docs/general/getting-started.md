---
sidebar_position: 1
---

# Getting Started

## Getting Started with Rust Modding

Looking to create your first Rust plugin? Already making plugins but want to refine your skills and improve performance? You're in the right place!

Rust modding is primarily done using one of two frameworks: **Carbon** or **Oxide**. These frameworks provide the tools and API access needed to extend and modify the game.

***

### Choosing a Framework

* [**Oxide (uMod)**](https://docs.oxidemod.com) – The most widely used modding framework, with extensive documentation and a vast library of existing plugins to learn from.
* [**Carbon**](https://docs.carbonmod.gg/docs) – A newer framework that offers a fresh approach to modding, featuring alternative tools and optimizations.

In most cases, plugins written for **Oxide** will work on both **Oxide** and **Carbon** servers. However, **Carbon-specific plugins** will **not** run on **Oxide** servers.

#### Best Practice: Use Oxide for Compatibility

Unless you're developing a **private plugin** exclusively for a **Carbon** server, it's recommended to write your plugins using **Oxide** to maximize compatibility across different servers.

That said, **Carbon** provides additional tools for developers, such as a profiler, improved error logging, and pre-made target files for IDEs. Many developers use **Carbon** for its enhanced development environment while still ensuring their plugins remain compatible with **Oxide**.

***

### First Steps

To get started with creating a plugin, you need an **IDE (Integrated Development Environment)**, such as **Visual Studio 2022**. Simple text editors like **Visual Studio Code** or **Notepad++** may work for viewing or making minor edits, but they lack essential tools like **IntelliSense, debugging, and project management features** that make development easier.

#### Setting Up Your Development Environment

Before you start coding, you'll need to set up your environment based on the modding framework you're using:

* **Oxide/uMod Setup Guide**
* **Carbon Setup Guide** _(Includes information on enabling Developer Mode and importing the required targets file.)_

***

### Writing Your First Plugin

Here's a simple **Hello World** plugin that logs a message to RCon/Console when the plugin initializes.

```csharp
namespace Oxide.Plugins;

[Info("HelloWorld", "YourName", "1.0.0")]
[Description("A simple hello world plugin.")]
public class HelloWorld : RustPlugin
{
    private void Init()
    {
        Puts("Hello, world!");
    }
}
```

#### Installing the Plugin

1. Save this plugin as **`HelloWorld.cs`**.
2. Place it in the appropriate plugins folder based on your framework:
   * **For Carbon:** `/carbon/plugins/`
   * **For Oxide:** `/oxide/plugins/`
3. Restart your server or use the appropriate command to reload plugins.

***

### Next Steps

* Learn about **hooks**, **commands**, and **permissions**.
* Explore the official [**Oxide API**](https://docs.oxidemod.com) or [**Carbon API**](https://docs.carbonmod.gg/docs).
* Join the **Rust Modding Community** to ask questions and collaborate.
