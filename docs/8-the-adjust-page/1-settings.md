---
sidebar_position: 2
---

# Settings

The **Settings** page allows you to configure various device options for your Hive player, such as networking, video, audio output, and more. Use this section to adjust your device’s behaviour, manage its connections, and set up synchronisation with other devices.

![Settings Image 1](\img\user-manual\adjust\adjust-settings-media\image1.jpeg)

---

## Device Configuration

On the left side of the Settings tab, you’ll find various options to customise and optimise your device’s configuration, including network settings, device identification, and synchronisation.

### Identify Device

The **Identify Device** button displays a banner on the selected device, making it easy to identify its output. This feature is particularly useful in setups with multiple devices, helping users quickly locate and adjust the correct device.

### Device Name

The **Device Name** allows you to rename the device to fit your setup needs. The device name will also show on your control browser tab for easy identification.

### IP Method

The **IP Method** dropdown provides the option to change the device’s network configuration. By default, Hive players operate in **DHCP** mode and can be switched to **Static IP** addressing for specific network requirements.

- **DHCP**: In this default mode, Hive players automatically request an IP address from a DHCP server. This is recommended for simpler networks.
  - Upon boot, the device’s IP address assigned by the DHCP server will be displayed on the identification banner via HDMI output.
  - The “Find Devices” page, accessible by clicking the Hive logo, allows you to discover other Hive players on the network.
  - **Note**: In DHCP mode, the **IP Address** and **Netmask** fields are not editable.

- **Static Mode**: For networks requiring a fixed IP, select **Static Mode**. A dialog box will prompt you to enter the desired IP address and netmask. Once confirmed, the device will reboot and apply the new static IP settings.

### IP Address and Netmask

The **IP Address** section displays the device’s current IP when the Hive player is in **DHCP** mode. If the device is in **Static IP** mode, clicking the IP address box allows you to modify the assigned IP address.

- **IP Address**: Configure the device's IP address (available only in static mode).
- **Netmask**: Configure the netmask (available only in static mode).

### Hive Model

The **Hive Model** selection is a critical setting that defines the type of player your Hive "BeeBlade" device will function as. This setting is vital for ensuring compatibility and proper functionality. Only adjust this option if you are certain of the change’s impact.

- **Player Options**: The Hive player can be set to one of the following options, depending on the specific device you're using:
  - **Player 1 or BeeBlade**: The standard setting for most Hive players.
  - **Player 2, Player 3, or Player 4**: Available if the device you are using is one of these product types.
  - **Mosaic Option**: A legacy option for a discontinued player type. It should not be used for current models but remains in the settings for older systems.

**Caution**: Adjusting the Hive model setting incorrectly may cause compatibility issues or unexpected device behaviour.

---

## Hive Network and Sync Settings

### Bee Type

The **Bee Type** dropdown allows selection of the operational mode for the Hive player.

- **Queen**: In Queen mode, the Hive player operates independently, managing all settings, including layer parameters, media selection, and optionally playlist management, timecode queue list, timeline, and schedule.
- **Worker**: In Worker mode, the device synchronises with and follows the commands of the designated Queen, mirroring its settings and operations.

### Queen's IP Address

The **Queen's IP Address** field allows you to manually set the IP address of the queen device when the Hive player is operating as a worker. By default, this is set to auto. However, if there are multiple Hive setups on the network, this option must be used to specify which queen the worker should be associated with.

### ArtNet Universe

The **ArtNet Universe** setting is crucial for organising and managing communication between Queen and Worker Hive players within your network. This setting defines the unique identifier for the ArtNet packets that the devices will listen to, ensuring the correct execution of commands in a Queen-Worker setup.

### Lighting Desk Mode

The **Lighting Desk Mode** enables or disables access from lighting control desks.

### Control Protocol

The **Control Protocol** dropdown lets the user decide how they would like to control the Hive player. Currently, only **ArtNet** is supported.

### Bee-Sync Settings

The **Bee-Sync Settings** button allows configuration of synchronisation settings between Hive players for frame-accurate sync. There are three modes:

- **Leader**: The lead queen device.
- **Follower**: Devices that sync to the leader.
- **Auto**: Automatically configures settings based on queen/worker modes.

![Settings Image 2](\img\user-manual\adjust\adjust-settings-media\image2.jpeg)

---

## Output Settings

### Video Output Settings

The **Video Output Settings** button provides access to all the device's output configurations. Clicking the button opens a window displaying a list of adjustable settings, along with a preview box that shows all available resolutions supported by the currently connected display.

- **Output Mode**: The output mode dropdown shows a list of available modes to choose from.
    - **Auto**: Uses the display manufacturer's preferred display settings for the output device.
    - **Manual**: Allows manual selection of the desired display settings.

- **Display Mode**: When in Manual mode, a dropdown list of all supported display modes for the output device is available. A display mode can be selected, and the device will use that mode unless it is unavailable.

- **HDMI Range**: Determines the colour range sent from the Hive player to the output display.
    - **Auto**: Uses the display's preferred colour range.
    - **Limited**: Sends a limited colour range.
    - **Full**: Sends the full colour range.

- **Bit Depth**: The bit depth dropdown allows selection of the colour bit depth to send to the output display.
    - **8bit**: The default setting, sending 8-bit colour information to the output display.
    - **10bit**: If supported by the display, 10-bit mode provides a more detailed colour system to match higher-quality content.

![Settings Image 3](\img\user-manual\adjust\adjust-settings-media\image3.png)

---

### Audio Output Settings

The **Audio Output Settings** button provides access to all the audio output configurations. Clicking the button opens a window displaying a list of adjustable settings, along with a preview box showing all available audio devices currently connected to the Hive player.

- **Audio Device**:  
  The audio device dropdown allows selection of the preferred audio output device.
  
- **Output Channels**:  
  The output channels dropdown allows selection of the number of audio channels to use with the chosen audio output device.
  
- **Sample Rate**:  
  The sample rate dropdown allows selection of the preferred audio sample rate.

![Settings Image 4](\img\user-manual\adjust\adjust-settings-media\image4.png)

---

## Additional Device Settings

### NTP Server

The **NTP Server** button allows input of a custom NTP server address. This option is useful for setups with a dedicated NTP server, rather than using the one provided by the DHCP server.

### Layer 1 Direct Mode

**Layer 1 Direct Mode** is designed to enhance device performance by restricting playback to the first layer only. This mode disables all **Play Page** settings, including playlists and timecode lists. Instead, media will be played directly from the **Media Page** of the device.

### Clock Correction

**Clock Correction** ensures that frame numbers are selected sequentially. When enabled, it detects gaps or repeated frame numbers and smooths them out for more consistent playback.

### Shared MIDI

The **Shared MIDI** function ensures that MIDI signals are sent and received by devices configured for this communication.

- **Disabled**:  
  The device will not receive any MIDI communications.
- **Send**:  
  The Hive player will send MIDI commands to other Hive players on the network.
- **Receive**:  
  The Hive player will receive MIDI commands from other Hive players on the network.

### OS Background Image

The **OS Background Image** feature allows setting a custom background image for the device. This image will be displayed only during the booting process.

### Start-up Data

The **Start-up Data** feature allows configuration of a command to execute when the Hive player boots from power. This can be set in several different modes:

- **Startup data + number of seconds**
- **Testcard + Startup data + number of seconds**
- **Off**

The startup data displays an identification banner at the top of the Hive output, showing key information about the device.

### Service Interval

The **Service Interval** feature allows setting a time interval for automatically restarting the Hive player. The restart can be scheduled either daily or weekly, depending on the desired maintenance routine.

### Beehive Settings

The **Beehive Settings** button provides a list of all configurable attributes for the Hive player when it is inserted into a Beehive.

---

## Device Commands

The **Device Commands** dropdown provides various options to control the Hive player, such as restarting the software, checking logs, or resetting the device.

| **Command**                 | **Description**                                              |
|-----------------------------|--------------------------------------------------------------|
| **Restart Software**         | Restarts Hive software without resetting the device.         |
| **Restart Device**           | Performs a hard reset of the device.                         |
| **Stop Hive Service**        | Manually stops the Hive service.                            |
| **Start Hive Service**       | Manually starts the Hive service.                           |
| **Restart Nectar Service**   | Restarts the Nectar service on the device.                  |
| **Open Hive Log**            | Displays real-time logs for Hive software.                  |
| **Open Nectar Log**          | Displays live logs for the Nectar service.                  |
| **Open Device Log**          | Shows hardware event logs in real-time.                     |
| **Identify Device**          | Displays a banner on the device for identification.         |
| **View Release Notes**       | Opens the release notes for the current software version.    |
| **Get Latest Version File**  | Checks for the latest software version.                     |
| **Update Device from File**  | Uploads and applies a new software update.                  |
| **Factory Reset**            | Resets the device to factory settings.                      |
| **Set Device Clock**         | Syncs the device's clock with the control machine’s time.    |
| **Set Device Password**      | Creates a password to secure the device.                    |
| **Set Device as New Device** | Resets and configures the device as new.                    |

---
