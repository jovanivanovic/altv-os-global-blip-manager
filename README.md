# Open Source - Global Blip Manager for alt:V

Created by Dzeknjak (Jovan Ivanovic)

❤️ Please support my open source work by donating. I'm here to provide general context for complicated procedures for you new developers. ❤️

https://www.buymeacoffee.com/dzeknjak

⭐ This repository if you found it useful!

---

![](https://i.imgur.com/gFcZ3AC.png)

# Description

This is a basic global blip manager resource. It allows you to create/destroy blips from the server-side for all players.

# Usage

There's couple of events to get you started with this resource:

```javascript
// Notice: these events are serverside only.
```

---

## Creating a blip

```javascript
alt.emit('blips:Create', identifier, label, position, sprite, color, scale, shortRange);
```

| Argument               | Description                                                                                                                  |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `identifier`           | Unique identifier for the blip, can be anything as long as it is unique.                                                     |
| `label`                | Text to show for the blip.                                                                                                   |
| `position { x, y, z }` | Location of the blip.                                                                                                        |
| `sprite`               | Sprite of the blip.                                                                                                          |
| `color`                | Color of the blip.                                                                                                           |
| `scale`                | Scale of the blip.                                                                                                           |
| `shortRange`           | `[optional]` Is the blip visible on the radar only when you are close to it (`true`) or always (`false`). Default is `true`. |

For sprites and colors take a look here: [alt:V Wiki - Blips](https://wiki.altv.mp/HUD:Blips)

---

## Deleting a blip

```javascript
alt.emit('blips:Delete', identifier);
```

| Argument     | Description                                                      |
| ------------ | ---------------------------------------------------------------- |
| `identifier` | Previously set unique identifier of the blip you wish to delete. |

## Syncing the blips with a player

```javascript
// Notice: you should probably call this event on player connect.
```

---

```javascript
alt.emit('blips:Sync', player);
```

| Argument | Description                                    |
| -------- | ---------------------------------------------- |
| `player` | Player handle you wish to sync the blips with. |

# Other alt:V Open Source Resources

-   [Authentication by Stuyk](https://github.com/Stuyk/altv-os-auth)
-   [Global Marker Manager by Dzeknjak](https://github.com/jovanivanovic/altv-os-global-marker-manager)
