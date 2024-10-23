---
sidebar_position: 4
---

# Warp and Blend

The **Warp and Blend Tab** allows you to configure complex projection setups using third-party calibration systems such as **Vioso** and **Screenberry**. This tab provides advanced tools for mapping, blending, and warping media to create immersive projection environments. By leveraging these external systems, users can ensure precise calibration for multi-projector setups, seamless edge blending, and warping of projections to fit unique surfaces.

![Map Warp 1](\img\user-manual\map\map-warp-media\map-warp-1.jpeg)

---

## Using Vioso

The **Vioso** integration offers advanced calibration for multi-projector setups, ensuring smooth projection blending and accurate warping.

![Vioso UI](\img\user-manual\map\map-warp-media\map-warp-2.jpeg)

### Calibrations

The **calibrations list** displays all the available Vioso mapping files that have been uploaded to the Hive player. Simply check the box next to the desired calibration file to activate it. This will align the projection based on the specific calibration settings.

![Vioso Calibrations](\img\user-manual\map\map-warp-media\map-warp-3.png)

### Vioso Settings

Vioso Settings allow for precise control over the calibration and mapping process when using the Vioso system. These settings help ensure accurate projector alignment and blending, enabling seamless projection across multiple surfaces or displays.

![Vioso Settings](\img\user-manual\map\map-warp-media\map-warp-4.jpeg)

| **Setting**           | **Description**                                                                                                                                                                  |
|-----------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Calibration Mode**   | Tick the checkbox to enable NDI calibration for Vioso, allowing the device to sync with the Vioso camera server and utilise the configured settings.                             |
| **Overlay Regions**    | Outputs the mapping file from the advanced tab over the Vioso calibration. This is useful for applying custom masks or overlays.                                                  |
| **Server Name**        | Enter the NDI server name used in the Vioso calibration system. Typically, this will be the machine name of the calibration server (e.g., in Windows or macOS).                 |
| **NDI Name**           | Enter the NDI stream name from the Vioso calibration server. This establishes the NDI connection for the mapped projection.                                                      |
| **Output Select**      | Choose the desired output from the Vioso calibration file for display.                                                                                                          |
| **Process Resolution (X / Y)** | Set the horizontal (X) and vertical (Y) resolution for the selected Vioso mapping file. This resolution should match the output device.                                      |
| **Gamma Adjust**       | Adjust the gamma levels for the Vioso-calibrated projection. This can help balance brightness and contrast across the entire display.                                              |

---

## Using Screenberry

The **Screenberry** system allows for automatic multi-projector alignment, blending, and warping using camera-based calibration. The Hive player integrates seamlessly with Screenberry to ensure that projections are correctly aligned and displayed.

![Screenberry UI](\img\user-manual\map\map-warp-media\map-warp-5.jpeg)

### Calibrations

Similar to Vioso, the **calibrations list** shows all uploaded Screenberry mapping files. Select the checkbox next to the file you wish to activate. The calibration process will adjust the projection based on the settings in this file.

![Screenberry Calibrations](\img\user-manual\map\map-warp-media\map-warp-3.png)

### Screenberry Settings

The **Screenberry settings** allow for more detailed control over the calibration and projection process. These settings are specific to the Screenberry system and allow for accurate projection warping and blending.

![Screenberry Settings](\img\user-manual\map\map-warp-media\map-warp-6.png)

| **Setting**           | **Description**                                                                                                                                                                  |
|-----------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Calibration Mode**   | Activates Screenberry’s calibration mode, allowing the Hive player to sync with the Screenberry system for precise projector alignment.                                           |
| **Overlay Regions**    | Outputs advanced mapping regions over the calibrated Screenberry projection, useful for multi-layered media displays.                                                            |
| **H Flip / V Flip**    | Flip the image output horizontally (H Flip) or vertically (V Flip) to match the orientation of your projection setup.                                                           |
| **Output Tiling (X / Y)** | Specify the number of projectors across (X) and down (Y) to ensure the calibration aligns with the projector grid configuration.                                                 |
| **Index**              | Enter the projector index assigned by Screenberry to ensure that each projector displays the correct image from the calibration.                                                 |
| **Server Name**        | Input the NDI server name used in the calibration system. This field identifies the calibration server.                                                                          |
| **NDI Name**           | Enter the NDI stream name from the Screenberry calibration server to establish the connection.                                                                                  |
| **Mask Path**          | Specify the path to the mask file used in the calibration. Masks can be applied to control the projection output and mask out specific areas.                                     |
| **Mask Mode**          | Choose the mask mode to define how the mask is applied to the projection. This could be full, partial, or other options based on your needs.                                      |
| **Process Resolution (X / Y)** | Set the horizontal (X) and vertical (Y) resolution for processing the Screenberry mapping file, ensuring it matches the output resolution.                                  |
| **Gamma Adjust**       | Adjust gamma levels for the Screenberry projection to fine-tune brightness and contrast.                                                                                         |
| **Clamp Pixels**       | Modify the pixel clamping settings to adjust the blending of pixels at the edges of the projection. This helps with seamless blending between projectors.                        |

---

## Warp and Blend While in Queen and Worker Mode

In a Queen and Worker setup, the **Warp and Blend** functionality allows you to upload mapping files to Worker devices and enable calibration mode simultaneously across both the Queen and Workers. This ensures that all devices are properly aligned and calibrated for consistent, high-quality projection or display output.

---

## Importing Calibration Files

Both Vioso and Screenberry setups rely on calibration files to function. You can easily **import** these files using the **Import** button located on the Warp and Blend page.

1. Click the **Import** button.
2. Select the appropriate calibration file from your computer.
3. Once imported, the calibration file will appear in the calibrations list, and you can activate it by checking the relevant box.

---
