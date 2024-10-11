---
sidebar_position: 2
---

# Playlists

![Playlist tab](/img/user-manual/5-play/play-pl-media/play-pl-1.jpeg)

The **Playlists Tab** helps users manage and organise media files for playback. Upon navigating to the Play page, the Playlist tab is the first view displayed, providing a comprehensive layout of all media files currently in your playlist. This visual interface simplifies content management, keeping you informed about what media is queued for playback. The Playlists tab offers flexibility and control, allowing users to add media content and manage follow-on actions for custom playback sequences.

---

## Activating the Playlist

To control playback, activate the playlist by checking the **Use Playlist** option located in the top left corner. Once activated, you can use the **Play Next** button (next to the **Add Entire Media Folder** button) to move to the next item in your playlist.

---

## Playlist Progress Bar

The **Playlist Progress Bar** graphically displays the media files in the playlist, with time indications for both the currently playing media and the total playlist duration.

---

## Adding Content to the Playlist

To add media files to the playlist from your existing media folders:

1. Select the **Add** button at the bottom of the playlist page.
2. A dialog box will appear, showing all available media on the device.
3. Select the desired media files for your playlist.

You can also add an entire folder by clicking the **Add Folder to List** button, which includes all media from the selected folder. After adding media, adjust the playback sequence and customise settings, such as follow-on actions and markers, to ensure seamless playback.

---

### Follow-on Actions

The **Follow-on Actions** feature controls how media playback proceeds after each file or at specific markers. It allows you to create dynamic playlists and customise the flow of media.

#### How to Select Playback Actions

Choose an action from the **Follow-on Action** drop-down list to determine what happens when a media file finishes or when a marker is reached. Popular options include:

- **Play Next in List**: Automatically move to the next media file.
- **Go to Marker Number**: Jump directly to a specified marker.
- **Go to Last Marker**: Navigate to the last marker in the playlist.

By configuring these actions, you can create a smooth, dynamic media experience.

---

### Available Follow-on Actions

| **Action**                   | **Description**                                                                       |
|------------------------------|---------------------------------------------------------------------------------------|
| **Play Next in List**         | Moves to the next media file.                                                         |
| **Play Previous in List**     | Reverts to the previous media file.                                                   |
| **Play Random in List**       | Selects a random media file from the playlist.                                        |
| **Play First in List**        | Returns to the first file in the playlist.                                            |
| **Play Last in List**         | Jumps to the last file in the playlist.                                               |
| **Play in List at Row Number**| Starts playback from a specific row number.                                           |
| **Stop**                      | Halts playback at the current point.                                                  |
| **Pause**                     | Pauses playback.                                                                     |
| **Next After X Seconds**      | Moves to the next file after a custom delay.                                          |
| **Previous After X Seconds**  | Reverts to the previous file after a delay.                                           |
| **Random After X Seconds**    | Plays a random file after a delay.                                                    |
| **First After X Seconds**     | Returns to the first file after a delay.                                              |
| **Last After X Seconds**      | Jumps to the last file after a delay.                                                 |
| **Pause After X Seconds**     | Pauses playback after a set time.                                                     |
| **Loop Forever**              | Repeats the current media file indefinitely.                                          |

By selecting these actions, you can create a dynamic playlist that enhances the viewer’s experience with tailored playback sequences.

---

## Markers

Markers serve as specific points within the playlist where user-defined actions can be executed. The **Marker** drop-down menu provides several options for managing these markers, allowing users to customise media flow.

#### Managing Markers

- **Adding Markers**: Select the **Add Marker** option to insert a new marker at a desired point in the playlist.
- **Removing Markers**: Choose the **Remove Marker** function to delete the selected marker.
- **Renaming Markers**: Use the **Rename Marker** feature to change the name of an existing marker for better clarity and organisation.
- **Renumbering Markers**: Select the **Renumber Markers** option to reorganise markers numerically if the sequence needs adjustment.
- **Deselecting Markers**: Use the **Deselect Marker** option to unhighlight a marker without deleting it.
- **Removing All Markers**: To remove all markers, select the **Remove All Markers** option.

---

### Available Marker Actions

| **Action**              | **Description**                                                        |
|-------------------------|------------------------------------------------------------------------|
| **Go to Marker Number**  | Jump to a specific marker in the playlist.                             |
| **Go to Next Marker**    | Move to the next marker.                                               |
| **Go to Previous Marker**| Move to the previous marker.                                           |
| **Go to First Marker**   | Jump to the first marker in the playlist.                              |
| **Go to Last Marker**    | Jump to the last marker in the playlist.                               |
| **Go to Random Marker**  | Randomly jump to any marker in the playlist.                           |

---

## Playlist Transitions

To activate transitions between media files, select the desired transition length from the dropdown box. Once activated, the timeline bar will split into two, and transitions will appear on the second bar. Note that all transitions occur on layer 2 of the player interface.

---

## Manage Functions

The **Manage** function allows you to easily control the placement and order of media files in your playlist. It offers a variety of options for organising content:

- **Move Up**: Shifts the selected media file up one position in the playlist.
- **Move Down**: Moves the selected media file down one position.
- **Move To**: Allows you to specify the exact position to move a media file within the playlist.
- **Replace**: Replaces the selected media file with a new file.
- **Remove**: Deletes the selected media file from the playlist.

These options provide flexibility to adjust the order and composition of your media content, ensuring a smooth and tailored playback experience.

---

## Importing and Exporting Playlists

For streamlined playlist management across multiple devices, use the **Export** and **Import** buttons at the top right of the playlist page.

- **Import**: Load an existing playlist configuration from a file, making it easy to set up a new device or restore a previous playlist.
- **Export**: Save your playlist configuration to a file, allowing you to replicate or share it across different Hive players.

This functionality is especially useful in multi-device setups, ensuring consistent media playback across your system.

---

## Playlist Tab in Queen and Worker Mode

In **Queen and Worker Mode**, playlists on the Queen control the sequence of media playback. Worker devices follow the Queen’s playlist, playing the same playlist row number in sync. Any changes made to the Queen's playlist are reflected across all Worker devices.

### Send Enabled/Disabled

When **Send** is enabled, any media added to the Queen's playlist will also be added to any connected Worker devices. If a Worker already has media occupying certain rows, any new media added by the Queen will follow on from the already populated rows.

### Follow-on Commands and Markers

Any **Follow-on Commands** set on the Queen will also be sent to connected Workers if **Send** is enabled on the Queen Hive player. To modify these markers on the Worker devices, disable the **Send** button and make the changes directly on the Worker Hive players.
