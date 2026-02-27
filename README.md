# Power Flow Live

A custom [Home Assistant](https://home-assistant.io/) Lovelace card that visualises live power flow with animated dots, inspired by the official Energy Distribution card.

<img width="454" alt="Screenshot 2023-02-17 at 1 46 52 AM" src="https://user-images.githubusercontent.com/14035884/219596902-40d68252-fa60-49ef-a354-f14d8a89b1a3.png">

## Installation

### HACS (recommended)

1. Open HACS in your Home Assistant instance
2. Search for "Power Flow Live"
3. Click **Install**
4. Restart Home Assistant

### Manual install

1. Download and copy `power-flow-live.js` from the [latest release](https://github.com/mathewgreen/power-flow-live/releases/latest) into your `config/www` directory.

2. Add the resource reference as decribed below.

### Add resource reference

If you configure Dashboards via YAML, add a reference to `power-flow-live.js` inside your `configuration.yaml`:

```yaml
resources:
  - url: /local/power-flow-live.js
    type: module
```

Else, if you prefer the graphical editor, use the menu to add the resource:

1. Make sure, advanced mode is enabled in your user profile (click on your user name to get there)
2. Navigate to Settings -> Dashboards
3. Click three dot icon
4. Select Resources
5. Hit (+ ADD RESOURCE) icon
6. Enter URL `/local/power-flow-live.js` and select type "JavaScript Module".
   (Use `/hacsfiles/power-flow-live/power-flow-live.js` and select "JavaScript Module" for HACS install if HACS didn't do it already)

## Using the card

I recommend looking at the [Example usage section](#example-usage) to understand the basics to configure this card.
(also) pay attention to the **required** options mentioned below.

### Options

#### Card options

| Name              | Type     |    Default    | Description |
| ----------------- | -------- | :-----------: | ------------|
| type              | `string` | **required**  | `custom:power-flow-live`.
| title             | `string` |               | Shows a title at the top of the card.
| system            | `object` |               | Define parameters of the central `System` element, see [system object](#system-object) for additional system element options.
| elements          | `object` | **required**  | One or more sensor entities, see [element object](#element-object) for additional entity options.
| speed             | `number` | `5`           | Average time (s) for dots to travel.
| boxSize           | `number` | `80`          | Size (px) of each element box.
| iconSize          | `number` | `24`          | Size (px) of icons inside element boxes.
| valueFontSize     | `number` | `12`          | Font size (px) for the main value text in element boxes.
| extraFontSize     | `number` | `10`          | Font size (px) for the extra main sensor text.
| sideExtraFontSize | `number` | `10`          | Font size (px) for the left/right extra sensor text.
| extraRowFontSize  | `number` | `10`          | Font size (px) for the extra row label/value text.

#### System object
The system is essentially an [element object](#element-object). The `value` is calculated from the difference in providers and consumers in the system (a positive value shows net unaccounted for production). This element has a central position.

| Name           | Type        |    Default    | Description |
| -------------- | ----------- | :-----------: | ----------- |
| unit           | `string`    | entity unit   | Display unit for the element value
| icon           | `string`    |               | Display icon for the element
| color          | `string`    |               | Hex color for the element box
| invert         | `boolean`   | false         | Invert the calculated system value (useful if your net calculation results in a negative number).
| override       | `boolean`   | false         | **New:** Set to `true` to display a specific sensor value instead of the calculated result.
| value          | `string`    |               | **New:** If `override` is true, this Entity ID will be displayed in the center (e.g., `sensor.total_grid`).
| extra          | `object`    |               | Extra sensor values to display within the element box. See [element extra object](#element-extra-object) for additional extra options.

#### Element object

| Name           | Type        |    Default    | Description |
| -------------- | ----------- | :-----------: | ----------- |
| value          | `string` / `object` | **required** | Entity ID of a sensor providing a state value, (positive values for element consumption) (unless the `inverted` option is set to true) **or** a split value object. See [element value object](#element-value-object) for split value options.
| unit           | `string`    | `entity.unit` | Display unit for the element value
| position       | `string`    | **required**  | Placement of entity box. Must be either `top` `left` `bottom` or `right`
| type           | `string`    | `standard`    | Box type. `standard`: default square box. `wide`: double-width box, useful for displaying extra rows.
| icon           | `string`    |               | Display icon for the element
| color          | `string`    |               | Hex color for the element box
| fill           | `string`    |               | Entity ID of a sensor providing a state of 0 - 100 (%) fill of the element box
| invert         | `boolean`   | false         | Invert element value for the system flow calculation
| exclude        | `boolean`   | false         | Exclude element value from the system flow calculation
| fade           | `string`    | `never`       | Controls when the element fades out. `never`: never fade. `no-flow`: fade when power flow is zero. `unavailable`: fade only when the entity is unavailable/unknown.
| extra          | `object`    |               | Extra sensor values to display within the element box. See [element extra object](#element-extra-object) for additional extra options.

#### Element value object

| Name           | Type     | Description |
| -------------- | -------- | ----------- |
| fromSystem     | `string` | Entity ID of a sensor providing a state value for consumption
| toSystem       | `string` | Entity ID of a sensor providing a state value for production

#### Element extra object

| Name           | Type     | Description |
| -------------- | -------- | ----------- |
| main           | `string` | Entity ID of a sensor providing a state value to display. The sensor's `entity.unit` will be displayed.
| left           | `string` | Entity ID of a sensor providing a state value to display. The sensor's `entity.unit` will be displayed.
| right          | `string` | Entity ID of a sensor providing a state value to display. The sensor's `entity.unit` will be displayed.
| rows           | `array`  | Array of labeled extra rows. Each row is an object with `label` (display text) and `value` (Entity ID). Best used with `type: wide` elements. See [element extra rows](#element-extra-rows).

#### Element extra rows

Each entry in the `rows` array is an object:

| Name           | Type     | Description |
| -------------- | -------- | ----------- |
| label          | `string` | Display label for the row (shown on the left side)
| value          | `string` | Entity ID of a sensor providing a state value to display (shown on the right side with unit)

### Display precision

The card respects each entity's `display_precision` setting from the Home Assistant entity registry. If you set an entity's display precision to 0 in HA, the card will show whole numbers. If no display precision is configured, the raw value is shown without rounding.

### Example usage

#### My Latest Example

For those testing, here is my current config:

```yaml
type: custom:power-flow-live
speed: 3
boxSize: 90
iconSize: 28
valueFontSize: 14
extraFontSize: 11
system:
  unit: W
  icon: mdi:rv-truck
  extra: sensor.indoor_govee_temperature
  color: '#0089b6'
elements:
  - value: sensor.victron_multiplus_activein_l1_power_238
    icon: mdi:power-socket-au
    position: left
    color: '#B62D00'
    fade: no-flow
    extra:
      main: sensor.victron_multiplus_state_238
      left: sensor.victron_multiplus_activein_l1_voltage_238
      right: sensor.victron_multiplus_activein_l1_current_238
  - value: sensor.victron_alternator_power
    icon: mdi:engine
    position: left
    color: '#f67828'
    fade: no-flow
    extra:
      left: sensor.victron_alternator_battery_voltage
      right: sensor.victron_alternator_battery_current
  - value: sensor.victron_battery_power
    invert: true
    icon: mdi:car-battery
    fade: unavailable
    type: wide
    extra:
      main: sensor.victron_system_battery_soc
      left: sensor.victron_system_battery_voltage
      right: sensor.victron_system_battery_current
      rows:
        - label: Temp
          value: sensor.victron_battery_temperature
        - label: TTG
          value: sensor.victron_battery_time_to_go
    fill: sensor.victron_system_battery_soc
    position: bottom
    color: '#3FF628'
  - value: sensor.victron_solar_pv_power
    icon: mdi:solar-power-variant
    fade: no-flow
    extra:
      main: sensor.victron_solar_yield_today
      left: sensor.victron_solar_pv_voltage
      right: sensor.victron_solar_pv_current
    position: top
    color: '#F6DF28'
    fill: sensor.solar_effectiveness_today
  - value: sensor.victron_ac_consumption
    icon: mdi:power-plug
    position: right
    color: '#B62D00'
    invert: true
    extra:
      main: sensor.victron_multiplus_state_238
      left: sensor.victron_multiplus_out_l1_voltage_238
      right: sensor.victron_multiplus_out_l1_current_238
  - value: sensor.victron_dc_system_power
    invert: true
    icon: mdi:lightning-bolt-circle
    position: right
    color: '#0089b6'
```


## Credits

This project is a fork of [samuelolteanu/system-flow-card](https://github.com/samuelolteanu/system-flow-card), which was itself forked from [flyrmyr/system-flow-card](https://github.com/flyrmyr/system-flow-card).

- [flyrmyr](https://github.com/flyrmyr/system-flow-card) — original System Flow Card
- [samuelolteanu](https://github.com/samuelolteanu/system-flow-card) — intermediate fork
- [ulic75/power-flow-card](https://github.com/ulic75/power-flow-card) — inspiration
- [HA Energy Distribution Card](https://www.home-assistant.io/dashboards/energy/#energy-distribution) — official HA card that inspired the design
- [@angular/cdk](https://github.com/angular/components/tree/main/src/cdk)
- [Jack Moore](https://www.jacklmoore.com/notes/rounding-in-javascript/)
