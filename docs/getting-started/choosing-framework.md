# Choosing a Framework

Choosing a framework depends on your goals, server setup, and preferred workflow. Here's a quick overview:

| Feature                  | [**Carbon**](https://docs.carbonmod.gg/docs)                         | [**Oxide (uMod)**](https://docs.oxidemod.com)                          |
|:--------------------------|:-------------------------------|:-------------------------------|
| **License**               | GPL-3.0 license              | MIT license       |
| **Primary Focus**         | Advanced Features, Performance   | Multigame Support   |
| **Installation**          | QuickStart Repo Available      | Manual setup required          |
| **Patch Management**      | Automatic Harmony patching and DLL handling | Minimal patching, manual updates |
| **Discord Size**        | Large (~3000)       | Large (~4000)  |
| **Active Servers**        | 1,100+       | 9,000+  |
| **Compatibility**         | Oxide Backwards Compatibility         | Oxide Support Only |
| **Customization**         | Built-in Common Plugins and Server Modules | Customization Through 3rd Party Plugins |

:::danger Carbon Specific Plugins
Plugins written for **Carbon** that use Carbon-specific features (such as modules or unique API) will **not** work on Oxide servers. However, most Oxide plugins work on both frameworks without changes.
:::

## Pros and Cons of Each Framework

### [Carbon](https://docs.carbonmod.gg/docs)

**Pros**
- Modern backend with performance optimizations.
- Automatic patch management and DLL handling.
- Built-in common server features through **Modules** (gather manager, vanish, autowipe, stack manager, and more).
- Custom UI creation methods.
- Built-in client-sided entity creation.
- Built-in Profiler to test the performance of your code.
- Improved error handling and debugging tools (including enhanced stack trace information with line numbers).

**Cons**
- Still a newer project; while most plugins work, some edge cases may require adjustments.
- Smaller community size compared to Oxide.

---

### [Oxide (uMod)](https://docs.oxidemod.com)

**Pros**
- Very mature and battle-tested.
- Huge plugin library built over many years.
- Large, active support community.
- Multigame support (experience can apply across multiple games).

**Cons**
- Manual server setup and updates.


## Final Thoughts

Both frameworks are excellent choices depending on your needs.

It’s very common for developers to **create Oxide-compatible plugins using a Carbon development server**, taking advantage of Carbon's debugging and performance tools during development while still having access to Oxides large community.

Ultimately, the best choice is the one that matches your goals, server setup, and development style.

