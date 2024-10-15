---
sidebar_position: 3
---

# Timecode

![Timecode List](\img\user-manual\5-play\play-tc-media\time-code.png)

The Timecode Tab allows users to synchronise media playback with external timecode signals. It offers precise control over media timing, integrating with a variety of timecode sources for events that require frame-accurate playback.

---

## Activating the Timecode List

To activate the timecode playlist, select the checkbox on the top left next to **"Use Layer 1"**. To use the second layer, select the **"Use Layer 2"** checkbox. Both layers can be used simultaneously, allowing for more complex control.

- **Overlay Settings**: Control the overlay display on the timecode interface, choosing between different positions (e.g., top, centre, bottom) and rotations (0°, 90°, 180°, 270°).

---

## Layer 1 and Layer 2 Use

In the timecode playlists, there are two layers:

- **Layer 1** is always above **Layer 2**, meaning alpha content will show through.
- To add content to the second layer, select the tab that says **"Layer 1"** and change it to **"Layer 2"**.

---

## Adding Content to the Timecode List

To add content to the timecode playlist, select the **Add** button on the bottom right of the page. This will load a list of all the available folders on the device.

---

## Setting Timecode Triggers on Content

Once media is added to the timecode playlist, you need to assign timecode triggers to determine when each piece of content is activated. Follow these steps to set a trigger:

1. Select the media in the timecode list.
2. Define the trigger time by specifying when the content should begin based on the external timecode signal.
3. Add additional triggers as necessary to adjust how the playlist transitions between media.

Make sure to specify how the content behaves if it finishes before the next timecode trigger, and choose whether it is locked to the timecode signal or should continue in **Free Run** mode.

---

## Timecode Clock Source

Hive players can use a variety of input sources to trigger assets in the timecode cue list. To select a timecode clock, use the **Timecode Clock** dropdown menu. Supported sources include:

- **USB MTC**: Allows for external timecode from an external USB timecode device, like the MIF4 or a timecode generator.
- **Internal**: Runs the timecode signal from within the Hive player itself, allowing for local control.
- **Artnet TC**: Uses the Artnet TC signal on the specified IP address for precise synchronisation of assets.
- **LTC on XLR**: An XLR-based input for timecode signal reception, useful for professional studio setups.

---

## Timecode Offsets

You can set offsets for your triggers by selecting the dropdown box next to **Timecode Offsets**. You can choose from:

- **Cue List**: The offset will be chosen from the external timecode page.
- **Layer Parameter**: The offset will be chosen from the layer parameter page.

---

## Ignore Audio Function

Determine how audio should be treated in relation to timecode:

- **Yes**: The video will play based on the timecode clock, disregarding the audio clock.
- **No**: The video will trigger at the specified time, but the audio clock will take precedence, which may cause audio drift but avoid playback issues like crackles or pops.

---

## Global Adjustments

The **Global Adjustments** feature lets the user adjust the content triggered by a selected number of frames. This is handy if you want to trigger content a few frames before or after the source timecode. The adjustment range is between -30 and +30 frames.

---

## Timecode Range Filter

The timecode range filter allows you to filter out timecode sections that are not needed. By selecting "Yes," a list of available times is produced based on the timecode signal. Disabling the filter removes the range.

When active, a timecode bar appears with the active range, allowing users to precisely control when the playlist is engaged.

---

## Source Addressing

If there are multiple Artnet timecode clocks on the network, you can specify the IP address of the timecode device you need to connect to by using the **Source IP Address** field.

---

## Smoothing Timecode Range Filter

Clip smoothing allows you to adjust the playback speed of timecode sections, creating smooth transitions between frames.

---

## Exporting and Importing Playlists

Playlists can be imported and exported from the device. To import or export a timecode playlist, use the **Import** and **Export** buttons on the right of the page.

- **Import**: Load an existing timecode playlist into the current project.
- **Export**: Save your timecode playlist for reuse or transfer to another Hive player.

---

## Send Enabled/Disabled

Just like in playlist mode, you can enable seamless collaboration across users in a Queen Worker configuration. The Hive playlist sharing feature can be managed through the **Send Enabled** dropdown menu. This function determines whether the playlist is visible and accessible to other connected Hive Players on the network.

---

## Manage Function

The **Manage** dropdown box provides a list of command options for ordering assets in the list:

- **Command**: Opens the Command Editor for the current media.
- **Replace**: Select a new asset to replace the current one.
- **Remove**: Removes the content from the list.
- **Move Up / Move Down**: Moves the content up or down. The timestamp is set to the new number and will carry along with the move command.

---

## Timecode List Tab in Queen and Worker Mode

The **Timecode List Tab** functions similarly in Queen and Worker Mode. The Queen device manages timecode playback, and all Workers synchronise their playback based on the Queen’s timecode. This ensures frame-accurate playback across all devices.

### Artnet Timecode

When using **Artnet timecode**, the Worker devices can also receive timecode from the timecode source. This means that the Worker is receiving timecode independently from the timecode source.

### Send Enabled/Disabled

When **Send** is enabled, any media added to the timecode list will also be added to any connected Workers. If the Worker already has media in certain rows, any new media added by the Queen will follow on from the already populated rows.

---