---
sidebar_position: 4
---

# Live Control

![Live Control Tab](\img\user-manual\5-play\play-livec-media\live-control-mainpage.png)

The **Live Control** tab lets users configure and customise a control interface for Hive players on the fly. Users can create and manage layouts, add controls, and integrate MIDI devices for a streamlined control experience.

## Managing Layouts

The **Live Control** page is divided into **layouts** and **pages**. Users can create pages with different layouts and save them to a single layout list.

### Available Layouts

We offer a selection of pre-designed templates to help users get started:

- **4_Faders**: Provides 4 faders for controlling parameters like intensity, opacity, or other values that need sliding scales.
- **4x2_Strip**: Features two rows of four buttons, perfect for quickly toggling effects or parameters.
- **Alias_8**: Offers a combination of rotary dials and buttons, ideal for controlling multiple parameters at once.
- **APC40_MKII**: Modeled after the APC40 MKII MIDI controller, designed for users familiar with this device.

**_Insert screenshot of layout template dropdown_**

### Save a Layout

Saving a layout allows the user to store a customised interface for future use:

1. Navigate to the 'Manage Layouts' dropdown menu.
2. Click the 'Save Layout' option.
3. A prompt will appear asking for a layout name.
4. Type a unique name for easy identification and click 'Save'.

**_Insert screenshot of Manage Layouts dropdown for saving a layout_**

### Remove a Layout

To delete a layout from the device:

1. Access the 'Manage Layouts' dropdown.
2. Select the layout you wish to delete from the list.
3. Click 'Remove Layout'.

**_Insert screenshot of Manage Layouts dropdown for removing a layout_**

### Import and Export Layouts

Users can import and export layouts to and from the connected control device.

- **To import a layout**:
  1. Click on the 'Manage Layouts' dropdown.
  2. Select the 'Import Layout' option.
  3. Choose a layout file (typically in JSON format) from your device.

- **To export a layout**:
  1. Click on the 'Manage Layouts' dropdown.
  2. Select the 'Export Layout' option.
  3. Save the layout file to your device.

**_Insert screenshot of Import and Export options_**

### Selecting and Naming Layouts

1. Open the **Select Layout** dropdown to view available layouts.
2. Choose a layout from the list, and it will load onto the Live Control page.
3. To rename the selected layout, click the 'Set Name' button and enter a new name.

**_Insert screenshot of 'Select Layout' dropdown and 'Set Name' options_**

## Customising Live Control Pages

Once a layout is selected, users can further customise the page by adding controls like buttons, faders, knobs, images, and text. Hive players support up to 16 layout pages, each with different layouts.

**_Insert screenshot of the UI when starting to customise the layout page_**

### Creating a New Layout Page

1. Select a pre-designed layout or start with a blank grid.
2. Enter **Edit Controls** mode to begin customising.

![Empty Live Control Page](\img\user-manual\5-play\play-livec-media\live-crontrol-edit.png)

## Edit Controls Function

The **Edit Controls** function enables users to switch the live control interface into edit mode. In this mode, users can add, move, or delete buttons, faders, knobs, and other UI elements.

To add controls:
1. Click the **Commands** dropdown and select a control type.
2. Drag and drop the control element onto the grid.

![Live Control Commands List](\img\user-manual\5-play\play-livec-media\commands.png)

## Control Types

1. **Buttons**: Can be used to trigger specific commands or toggle parameters.
   - Button Types: Button_1, Button_2, Button_3.

   - ![Button 1](\img\user-manual\5-play\play-livec-media\apc_40_button1_fg.png) 
   - ![Button 2](\img\user-manual\5-play\play-livec-media\apc_40_button2_fg.png) 
   - ![Button 3](\img\user-manual\5-play\play-livec-media\apc_40_button3_fg.png)
   
2. **Cross Faders**: Allows smooth transitions between two different parameters or media sources.
   
   ![Crossfader](\img\user-manual\5-play\play-livec-media\apc_40_cross_fader_bg.jpg)

3. **Faders**: Use sliding scales to control parameters like opacity, volume, or intensity.
   
   ![Fader](\img\user-manual\5-play\play-livec-media\apc_40_fader_bg.jpg)

4. **Rotary Knobs**: Rotational controls to adjust parameters like contrast, hue, saturation, or other effects.
   
   ![Rotary Dial](\img\user-manual\5-play\play-livec-media\apc_40_knob_fg.png)

5. **Images**: Add images to the layout for visual control elements.
   
   ![Image Example](\img\user-manual\5-play\play-livec-media\hive_logo.png)

6. **Text**: Insert text labels or display dynamic information like timecode values.
   
   ![Text](\img\user-manual\5-play\play-livec-media\text.png)

## Control Properties

Each control element has configurable properties:

- **Parameter**: What the control will manipulate (e.g., intensity, hue, blend mode).
- **Command**: The specific command path (e.g., `/INTENSITY/Value`).
- **Layer**: The layer the control will affect.
- **Mode**: Sets whether the control is momentary or toggle.
- **Range Min/Max**: Defines the value range for the control (e.g., from 0 to 1).
- **MIDI Channel/Note/CC/Other**: For assigning MIDI controls. These can be manually set or learned by selecting 'Learn' next to the parameter.
- **Value**: Current value of the control.
- **Control Width/Height**: Defines the size of the control on the grid.

![Control Properties](\img\user-manual\5-play\play-livec-media\control_proerties.png)

Here are some common parameters available when configuring controls:

- Movement Speed
- Blend Mode
- Intensity
- Red, Green, Blue
- Hue
- Saturation
- Contrast
- LUT
- Strobe
- Timecode (TC) Hour, Minute, Second, Frame
- FX1 Select, FX2 Select, etc.
- Position X, Y, Z
- Rotation X, Y, Z

---

## Operating the Controls

Once the layout is ready, switch to **Operate Controls** mode:

1. Select the **Commands** dropdown.
2. Click the **Operate Controls** button. This will hide the grid and make the layout live.

The user can also make this page full screen by selecting the box next to control properties.

## Live Control Tab in Queen and Worker Mode

The **Live Control Tab** remains accessible in Queen and Worker Mode. The Queen handles all live control actions, and Worker devices will follow along with the Queen's commands in real-time, ensuring synchronised control across the system.
