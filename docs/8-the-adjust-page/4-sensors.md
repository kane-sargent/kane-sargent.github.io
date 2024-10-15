---
sidebar_position: 5
---

# Sensors

![Sensors Image 1](\img\user-manual\adjust\adjust-sensors-media\image1.jpeg)

The Sensors tab allows for the integration and configuration of physical sensor inputs with the Hive Player. This feature is particularly useful for enhancing interactive installations, such as museum exhibits, by enabling real-world triggers to control media playback and other settings.

---

## Sensor Quantity

The Sensor Quantity box enables the selection of the number of sensors to use. By default, a maximum of four sensors can be configured. For additional sensors beyond this limit, please contact the Hive support team.

---

## Sensor Type

The Sensor Type dropdown allows for the selection of the sensor brand to be used in your setup. Currently, Hive supports only Phidget sensors; however, additional brands may be offered in the future.

---

## Active State

The Active State dropdown allows for enabling or disabling the selected sensor.

---

## Serial Number

The Serial Number box must be filled in with the Phidget serial number to ensure proper functionality alongside Hive.

---

## Port Number

The **Port Number** must correspond to the network port where the Phidget system is configured.

---

## Channel Number

The Channel Number box must be filled in with the specific channel of the Phidget device you wish to connect. The channel number varies based on the type and model of your device, as well as the number of inputs or outputs it supports.

- A 4-input voltage sensor has channels 0 to 3.
- A 16-output relay board has channels 0 to 15.

Find the correct channel number in the Phidget Control Panel or the user guide.

---

## Phidget Device

The **Phidget Device** dropdown lets users specify which Phidget device they are using in their setup.

| **Device Type**          | **Description**                                                  |
|--------------------------|------------------------------------------------------------------|
| **Switch**               | A basic on/off switch for triggering actions based on user input. |
| **Distance Sensor**      | Measures the distance to an object using ultrasonic waves.        |
| **Temperature Sensor**   | Monitors ambient temperature for environmental control.          |
| **Sound Sensor**         | Detects sound levels in the environment, useful for sound-sensitive applications. |
| **Humidity Sensor**      | Measures the humidity level in the air, aiding climate control.   |
| **Pressure Sensor**      | Monitors atmospheric pressure, often used in weather stations.   |
| **Linear Encoder**       | Tracks linear movement and position changes, useful for precise measurements. |
| **Rotary Encoder**       | Measures rotational position and movement, ideal for robotics and automation. |

---

## Raw Value

The Raw Value displays the unprocessed data received from the sensor. This data is typically represented as a raw number, often in the form of a floating-point value.

---

## Minimum, Maximum, and Normalised Properties

These settings define the range for incoming sensor values. The system normalises the raw value within this specified range, producing a normalised value that falls between 0 and 1.

---

## Multiplier

The Multiplier adjusts the normalised value by a specified factor, allowing for scaling of the input to a suitable range for the parameter it controls.

---

## Offset

The Offset applies an additional fixed value to the scaled input, allowing for fine-tuning of its range or establishing a baseline value.

---

## Decimal Places

The Decimal Places box allows for determining the precision of the final value by specifying the number of decimal places.

---

## Final Value

This section displays the current reading from the sensor.

---

## Parameter

The Parameter dropdown allows for selecting the action to be performed by the sensor when triggered. All parameters from the Parameters and Effects pages are available for selection in this dropdown.

---
