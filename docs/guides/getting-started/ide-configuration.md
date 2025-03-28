---
sidebar_position: 3
title: Configuring your IDE
draft: false
tags:
    - guide
---


# Configuring Your IDE  

## Carbon  

This guide was created using Carbons own documentation, their docs are the best source of information for anything Carbon related.

### Step 1: Pick Your Drive Location  
Because Windows limits the number of characters in a single filepath, it's highly recommended to create your project in the root of a drive.  


:::tip  
For better organization, you may also want to create a separate partition for development work. If you’re unsure how to do this, you can follow [this guide](https://support.microsoft.com/en-gb/windows/disk-management-in-windows-ad88ba19-f0d3-0809-7889-830f63e94405).   
:::

### Step 2: Create Your Directory Structure  
Choose a location for your files, such as `F:\RustModding\`. Inside this location, create two subfolders:  

- **Carbon Server** – This will contain all the server files needed to run Carbon.  
- **Plugin Dev** – This is where you’ll develop your plugins.  

### Step 3: Download the Carbon QuickStart Files  
Download the Carbon QuickStart files from the [Carbon QuickStart Repository](https://github.com/CarbonCommunity/Carbon.QuickStart/tree/main/win) and place them inside the **Carbon Server** folder.  

### Step 4: Update Carbon  
Run the **update_edge.bat** file inside the Carbon Server folder. This will download the latest files required for Carbon to function.  

If you want to use a specific branch, run the appropriate **update_*.bat** file instead. Wait for the process to finish before continuing.  

### Step 5: Configure the Server  
Open the **run.bat** file in a text editor and adjust the variables to meet your needs. This file controls key settings such as server name and port configurations.  

### Step 6: Start the Server  
Run **run.bat** and wait for the server to fully boot.  

### Step 7: Enable Developer Mode  
Navigate to the **Carbon/server/carbon/** directory and open the **config.json** file. Find the **DeveloperMode** setting and change it to **true**.  

Enabling Developer Mode ensures that Carbon saves the patched DLLs to **Carbon/server/carbon/developer/patched_assemblies/**. These DLLs are used by the **Carbon.targets** file, which is necessary for plugin development.  

### Step 8: Create a New Project in Your IDE  
Open your IDE (Visual Studio is recommended) and create a new project inside the **Plugin Dev** directory. Select **Class Library (.NET Framework)** as the project type.  

When prompted to choose a framework, select **.NET Framework 4.8** and proceed with the project creation.  

### Step 9: Modify the Project File  
Inside your newly created project, locate the **.csproj** file. Open it in a text editor and add the following line on the second line of the file:  

`<Import Project="F:\Carbon Server\Carbon\server\Carbon.targets" />`  

This ensures that your project has access to the necessary Carbon assemblies. Save the file once done.  

### Step 10: Restart Your IDE  
To apply the changes, close and reopen your IDE.  

---

Once you've completed these steps, your development environment will be fully set up, and you’ll have everything needed to start creating plugins for Carbon. 🎉 Happy coding! 🚀  
