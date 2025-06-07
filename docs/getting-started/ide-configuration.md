# Configuring Your IDE

Setting up your development environment properly is a crucial first step to creating efficient and reliable plugins for both Carbon and Oxide. This guide will walk you through preparing your workspace, installing the necessary files, and configuring your IDE. Whether you're just getting started or optimizing an existing setup, following these steps will help ensure a smoother development experience across both frameworks.

# IDE Comparison: Visual Studio, VSCode, and Rider

Choosing the right IDE depends on your workflow, system resources, and personal preferences. Here’s a quick breakdown:

| Feature | Visual Studio | VSCode | Rider |
|:-------|:--------------|:-------|:------|
| **Type** | Full IDE | Lightweight Editor | Full IDE |
| **Performance** | Heavy, slower on low-end PCs | Very lightweight, fast startup | Mid-weight, optimized for performance |
| **Plugin Development** | Excellent (native .NET support) | Good (with extensions) | Excellent (especially for C#) |
| **Cost** | Free (Community Edition) | Free | Free (Community Edition) |

### Summary

- **Visual Studio (VS):**  
  The industry standard for C# development. Ideal if you want a robust, feature-complete environment, especially for debugging and managing larger projects.

- **Visual Studio Code (VSCode):**  
  Lightweight and flexible. Requires some extensions (like C# Dev Kit and Ionide) to match the capabilities of full IDEs. Great for smaller projects or quick edits.

- **JetBrains Rider:**  
  A strong alternative to Visual Studio with excellent C# and Unity support. Rider is cross-platform (Windows, macOS, Linux).

## Carbon IDE Configuraton

:::tip NOTE:
This guide follows Carbon's official documentation, which should always be your primary reference.
:::

:::details 📉 Quick Outline
1. Create Folder Structure: `F:\RustModding\{Carbon Server, Plugin Dev}`
2. Download QuickStart: From Carbon GitHub → place in Carbon Server
3. Update Carbon: Run `update_edge.bat`
4. Configure Server: Edit `run.bat`
5. Boot Server: Run `run.bat`
6. Enable Developer Mode: Set `"DeveloperMode": true` in config.json
7. **New Project:**
    - Type: Class Library (.NET Framework)
    - Framework: 4.8
    - Location: `Plugin Dev`
8. Edit .csproj: Add `<Import Project="F:\Carbon Server\Carbon\server\Carbon.targets" />`
9. Restart IDE: Apply project settings
:::

### Step 1: Pick Your Drive Location
Windows limits filepath lengths, so it's best to create your project at the root of a drive (e.g., `F:\`).

### Step 2: Set Up Directory Structure
Create a base folder (e.g., `F:\RustModding\`) with two subfolders:
- `Carbon Server` — for the server files.
- `Plugin Dev` — for your plugin projects.

### Step 3: Download Carbon QuickStart Files
Get the QuickStart files from the [Carbon QuickStart Repository](https://github.com/CarbonCommunity/Carbon.QuickStart/tree/main/win) and place them in your Carbon Server folder.

### Step 4: Update Carbon
Run `update_edge.bat` in the `Carbon Server` folder to download the latest files. (Or run another `update_*.bat` file for a different branch.)

### Step 5: Configure and Start Your Server
Edit `run.bat` to adjust server settings like name and port.  
Run `run.bat` and wait for it to fully boot.

### Step 6: Enable Developer Mode
Open `/server/carbon/config.json`.  
Set `"DeveloperMode": true`.

This saves patched DLLs to `/server/carbon/developer/patched_assemblies/`, which are required for plugin development.

### Step 7: Create Your Project
Open Visual Studio.  
Create a new project under `Plugin Dev`.  
Choose **Class Library (.NET Framework)**.  
Target **.NET Framework 4.8**.

### Step 8: Link Carbon Assemblies
Open your project’s `.csproj` file.  
Add this after the first line:

```cs
<Import Project="F:\Carbon Server\Carbon\server\Carbon.targets" />
```

- Save and close.

### Step 9: Restart Your IDE
Close and reopen Visual Studio to apply changes.

## Oxide IDE Configuraton

:::tip NOTE:
This guide assumes Windows and Visual Studio are being used. Oxides own documentation was heavily used when creating this guide.
:::

Unlike Carbon, Oxide does not have a QuickStart repository. You will need to manually set up your environment and scripts.

:::details 📉 Quick Outline
1. Create Folder Structure: `F:\RustModding\{Oxide Server, Plugin Dev}`
2. Install SteamCMD
3. Use SteamCMD to install/update Rust Dedicated Server
4. Download and install Oxide from uMod.org
5. Create a server start batch file
6. **New Project:**
    - Type: Class Library (.NET Framework)
    - Framework: 4.8
    - Location: `Plugin Dev`
7. Reference Oxide DLLs in your project
8. Restart IDE: Apply project settings
:::

### Step 1: Pick Your Drive Location
Create your project at the root of a drive to avoid Windows filepath length limits (e.g., `F:\`).

### Step 2: Set Up Directory Structure
Create a base folder (e.g., `F:\RustModding\`) with two subfolders:
- `Oxide Server` — for the server files.
- `Plugin Dev` — for your plugin projects.

### Step 3: Install SteamCMD
Download and extract SteamCMD from [SteamCMD](https://developer.valvesoftware.com/wiki/SteamCMD).

### Step 4: Install Rust Dedicated Server
Create a batch file (e.g., `update_server.bat`) inside the `RustModding` folder:

```bat
@echo off

set root=%cd%
set server=%root%\server
set steam=%root%\steam
set url=https://github.com/OxideMod/Oxide.Rust/releases/latest/download/Oxide-Rust.zip
set steamCmd=https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip

if not exist "%server%" mkdir "%server%"

if not exist "%steam%" (
    mkdir "%steam%"
    cd "%steam%"
    echo Downloading SteamCMD...
    powershell -Command "(New-Object Net.WebClient).DownloadFile('%steamCmd%', '%root%\steam.zip')"
    echo Extracting SteamCMD...
    powershell -Command "Expand-Archive -Path '%root%\steam.zip' -DestinationPath '%steam%' -Force"
    del "%root%\steam.zip"
)

cd "%steam%"
steamcmd.exe +force_install_dir "%server%" +login anonymous +app_update 258550 validate +quit

cd "%server%"
echo Downloading Oxide...
powershell -Command "(New-Object Net.WebClient).DownloadFile('%url%', '%root%\oxide.zip')"
echo Extracting Oxide...
powershell -Command "Expand-Archive -Path '%root%\oxide.zip' -DestinationPath '%server%' -Force"
del "%root%\oxide.zip"

pause
```

### Step 5: Create Server Start Script
Create a `start_server.bat` inside the `RustModding` folder:

```bat
@echo off

set root=%cd%
set server=%root%\server

cd "%server%"
RustDedicated.exe -batchmode -nographics -server.hostname "My Oxide Server" -server.port 28015 -server.identity "oxide_dev" -server.level "Procedural Map" -server.worldsize 4000 -server.seed 12345 -server.maxplayers 10 +oxide.load

pause
```

### Step 6: Create Your Project
Open Visual Studio.  
Create a new project under `Plugin Dev`.  
Choose **Class Library (.NET Framework)**.  
Target **.NET Framework 4.8**.

### Step 7: Reference Oxide DLLs
- Right-click your project > Add Reference.
- Browse to `RustModding/server/RustDedicated_Data/Managed`.
- Add references to:
  - `Oxide.Core.dll`
  - `Oxide.Ext.Rust.dll`

### Step 8: Restart Your IDE
Close and reopen Visual Studio to apply changes.

