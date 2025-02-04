# Readability



## Key Principles of Readable Code

### Group Related Code Together

Keep similar functionality in the same section of your file. For example, group all **event hooks**, **commands**, and **helper methods** separately to avoid confusion. For small plugins, comments can be more than enough to help you keep your sections straight.

❌ **Bad Example:**

```csharp
private void OnPlayerConnected(BasePlayer player)
{
    Puts($"{player.displayName} joined.");
}

[ChatCommand("goodbye")]
private void GoodbyeCommand(BasePlayer player, string command, string[] args)
{
    player.ChatMessage("Goodbye, " + player.displayName + "!");
}

private void MyHelperFunction() // Unrelated function placed randomly
{
    Puts("Helper function running.");
}

[ChatCommand("hello")]
private void HelloCommand(BasePlayer player, string command, string[] args)
{
    player.ChatMessage("Hello, " + player.displayName + "!");
}
```

✅ **Good Example:**

```csharp
// Hooks
private void OnPlayerConnected(BasePlayer player)
{
    Puts($"{player.displayName} joined.");
}

// Chat Commands
[ChatCommand("hello")]
private void HelloCommand(BasePlayer player, string command, string[] args)
{
    player.ChatMessage("Hello, " + player.displayName + "!");
}

[ChatCommand("goodbye")]
private void GoodbyeCommand(BasePlayer player, string command, string[] args)
{
    player.ChatMessage("Goodbye, " + player.displayName + "!");
}

// Helper Functions
private void MyHelperFunction()
{
    Puts("Helper function running.");
}
```

***

### **Use `#region` to Organize Large Files**

For larger plugins, use `#region` and `#endregion` to separate different sections and improve navigation.

✅ **Example:**

```csharp
#region Hooks
private void OnPlayerInit(BasePlayer player)
{
    Puts($"{player.displayName} joined.");
}
#endregion

#region Commands
[ChatCommand("hello")]
private void HelloCommand(BasePlayer player, string command, string[] args)
{
    player.ChatMessage("Hello, " + player.displayName + "!");
}
#endregion

#region Helpers
<strong>private void SendMessage(BasePlayer player, string message)
</strong>{
    player.ChatMessage(message);
}
#endregion
```

Most modern IDEs allow you to **collapse/expand regions**, making it easier to navigate large code files.

***

### Avoid Unnecessary Nesting

Excessive nesting makes code harder to read and debug. Flatten your code when possible.

❌ **Bad Example:**

```csharp
private void CheckPlayerActive(BasePlayer player)
{
    if (player != null)
    {
        if (player.IsAlive())
        {
            if (!player.IsSleeping())
            {
                Puts($"{player.displayName} is active.");
            }
        }
    }
}
```

✅ **Good Example:**

```csharp
private void CheckPlayerActive(BasePlayer player)
{
    if (player == null) return;
    if (!player.IsAlive() || player.IsSleeping()) return;

    Puts($"{player.displayName} is active.");
}
```

Reducing unnecessary nesting makes the logic **clearer and easier to follow**.

***

### **Use Descriptive Names for Variables and Methods**

Names should describe **what the function or variable does**, not just its type or purpose.

❌ **Bad Example:**

```csharp
private void DoStuff()
{
    var p = "Test";
    var x = GetData();
}
```

✅ **Good Example:**

```csharp
private void SendWelcomeMessage()
{
    string welcomeText = "Welcome to the server!";
    string playerData = GetPlayerData();
}
```

This makes it much easier to understand **what the code does at a glance**.

***

### **Keep Functions Short and Focused**

Each function should do **one thing well**. If a function is too long or hard to read, break it into smaller helper functions. This will allow you to keep your code readable while not losing functionality.

❌ **Bad Example:**

```csharp
private void HandlePlayerJoin(BasePlayer player)
{
    if (player == null) return;
    Puts($"{player.displayName} joined.");
    File.AppendAllText("logs.txt", $"{DateTime.UtcNow}: {player.UserIDString}\n");
    player.ChatMessage("Welcome!");
    if (!player.HasPermission("vip")) player.ChatMessage("Upgrade to VIP!");
    foreach (var admin in BasePlayer.activePlayerList)
        if (admin.IsAdmin) admin.ChatMessage($"[Admin Alert] {player.displayName} joined.");
    if (player.displayName.Contains("admin")) player.Kick("Suspicious name.");
}
```

✅ **Good Example:**

```csharp
private void HandlePlayerJoin(BasePlayer player)
{
    if (player == null) return;
    LogPlayerJoin(player);
    SendWelcomeMessage(player);
    NotifyAdmins(player);
    CheckForSuspiciousNames(player);
}

private void LogPlayerJoin(BasePlayer player)
{
    File.AppendAllText("logs.txt", $"{DateTime.UtcNow}: {player.UserIDString}\n");
}

private void SendWelcomeMessage(BasePlayer player)
{
    player.ChatMessage("Welcome!");
}

private void NotifyAdmins(BasePlayer player)
{
    foreach (var admin in BasePlayer.activePlayerList)
    {
        if (!admin.IsAdmin) continue;
        admin.ChatMessage($"[Admin] {player.displayName}");
    }
}

private void CheckForSuspiciousNames(BasePlayer player)
{
    if (player.displayName.Contains("admin")) player.Kick("Suspicious name.");
}
```

Each function now **has a clear responsibility**, making the code easier to maintain.

***

### Summary

✔️ **Group similar functions together** (e.g., hooks, commands, helpers).\
✔️ **Use `#region` to separate sections** in larger plugins.\
✔️ **Avoid deep nesting** by using early returns.\
✔️ **Use descriptive variable and function names** to improve clarity.\
✔️ **Keep functions short and focused** for better maintainability.

By following these best practices, your code will be **easier to read, debug, and extend!** 🚀
