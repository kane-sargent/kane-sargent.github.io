---
sidebar_position: 6
---


# The Adjust Page: Queen and Worker Mode

In Queen and Worker Mode, the **Adjust Page** operates differently from standard usage. The Queen has control over most of the configuration settings, while the Workers follow the Queen’s lead for adjustments. However, certain adjustments must still be made independently on each Worker device for precise control over their specific output.

---

## Settings Tab: Queen and Worker Mode

In Queen and Worker mode, the **Settings Tab** presents a mix of options. Some settings are controlled by the Queen and automatically synchronized to the Workers, while other settings require independent management on each Worker.

### Settings with a Chevron

These are settings that can be expanded for additional configuration options. They are typically synchronized from the Queen to the Workers, ensuring uniformity across the system:

- **Bee-Sync Settings**: Ensures synchronization across all devices. The Queen acts as the leader, while Workers follow.
- **Network Configuration**: The Queen manages the IP addresses and synchronization settings for all Workers.
- **Device Clock**: The Queen sets the system time for Workers, ensuring time consistency across devices.

### Settings Without a Chevron

These settings are typically specific to each Worker device and do not require synchronization from the Queen. Adjustments here must be made independently on each Worker:

- **Audio Output Settings**: Each Worker manages its own audio configuration, selecting output channels and sample rates.
- **Video Output Settings**: Workers adjust their own display settings, such as resolution and HDMI range, without affecting the Queen or other Workers.

---

## Parameters Tab: Queen and Worker Mode

The **Parameters Tab** in Queen and Worker Mode allows for fine-tuning specific playback settings. However, parameters may behave differently in this mode:

- **Parameter Control**: The Queen can set parameters that Workers will follow, but in some cases, Workers may need to adjust certain parameters independently, especially for output-related settings such as resolution or bit depth.
- **Layer Control**: Parameters related to media layers are typically controlled by the Queen, ensuring consistent media playback across the system.
  
Workers retain some control over parameters for their specific output needs, but overall playback settings are governed by the Queen.

---

## Effects Tab: Queen and Worker Mode

In Queen and Worker Mode, the **Effects Tab** allows for media effects synchronization. The Queen sets global effects that the Workers follow:

- **Global Effects**: The Queen manages global effects such as color grading, blend modes, and opacity, which are applied across all Workers.
- **Worker-Specific Effects**: Certain visual effects related to display characteristics may need to be configured individually on each Worker. This allows for customization based on the specific display hardware connected to the Worker.

---