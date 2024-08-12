"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[93321],{83686:(e,o,t)=>{t.r(o),t.d(o,{comp:()=>g,data:()=>b});var a=t(37711);const d=(0,a.Lk)("h1",{id:"danfoss-014g2461",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#danfoss-014g2461"},[(0,a.Lk)("span",null,"Danfoss 014G2461")])],-1),i=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1),n=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"014G2461")],-1),c=(0,a.Lk)("td",null,"Vendor",-1),r=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"Ally thermostat")],-1),s=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"linkquality, battery, keypad_lockout, programming_operation_mode, mounted_mode_active, mounted_mode_control, thermostat_vertical_orientation, viewing_direction, heat_available, heat_required, setpoint_change_source, climate (occupied_heating_setpoint, local_temperature, pi_heating_demand, system_mode, running_state), occupied_heating_setpoint_scheduled, external_measured_room_sensor, radiator_covered, window_open_feature, window_open_internal, window_open_external, day_of_week, trigger_time, algorithm_scale_factor, load_balancing_enable, load_room_mean, load_estimate, preheat_status, adaptation_run_status, adaptation_run_settings, adaptation_run_control, regulation_setpoint_offset")],-1),l=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/014G2461.png",alt:"Danfoss 014G2461"})])],-1),u=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"White-label"),(0,a.Lk)("td",null,"Danfoss 014G2463")],-1),h=(0,a.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><ul><li>Install the device on the valve. Insert the batteries (and M will display).</li><li>Push the &quot;o&quot; button for 5 seconds to calibrate the valve motor.</li><li>Push the &quot;o&quot; button for briefly to enter Pairing mode (can take upto 60 seconds).</li></ul><p>To factory reset:</p><ol><li>Remove the cover of the Ally™ Radiator Thermostat</li><li>Remove one of the two batteries</li><li>Press and hold the black button next to the digital display/screen while replacing the battery</li><li>Insert the battery and release the button after 10 seconds</li><li>The Ally™ Radiator Thermostat is now reset</li><li>Place the cover of the Ally™ Radiator Thermostat back</li></ol><h2 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates"><span>OTA updates</span></a></h2>',6),p=(0,a.Fv)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="keypad-lockout-enum" tabindex="-1"><a class="header-anchor" href="#keypad-lockout-enum"><span>Keypad lockout (enum)</span></a></h3><p>Enables/disables physical input on the device. Value can be found in the published state on the <code>keypad_lockout</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;keypad_lockout&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;keypad_lockout&quot;: NEW_VALUE}</code>. The possible values are: <code>unlock</code>, <code>lock1</code>, <code>lock2</code>.</p><h3 id="programming-operation-mode-enum" tabindex="-1"><a class="header-anchor" href="#programming-operation-mode-enum"><span>Programming operation mode (enum)</span></a></h3><p>Controls how programming affects the thermostat. Possible values: setpoint (only use specified setpoint), schedule (follow programmed setpoint schedule), schedule_with_preheat (follow programmed setpoint schedule with pre-heating). Changing this value does not clear programmed schedules.. Value can be found in the published state on the <code>programming_operation_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;programming_operation_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;programming_operation_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>setpoint</code>, <code>schedule</code>, <code>schedule_with_preheat</code>, <code>eco</code>.</p><h3 id="mounted-mode-active-binary" tabindex="-1"><a class="header-anchor" href="#mounted-mode-active-binary"><span>Mounted mode active (binary)</span></a></h3><p>Is the unit in mounting mode. This is set to <code>false</code> for mounted (already on the radiator) or <code>true</code> for not mounted (after factory reset). Value can be found in the published state on the <code>mounted_mode_active</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;mounted_mode_active&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. If value equals <code>true</code> mounted mode active is ON, if <code>false</code> OFF.</p><h3 id="mounted-mode-control-binary" tabindex="-1"><a class="header-anchor" href="#mounted-mode-control-binary"><span>Mounted mode control (binary)</span></a></h3><p>Set the unit mounting mode. <code>false</code> Go to Mounted Mode or <code>true</code> Go to Mounting Mode. Value can be found in the published state on the <code>mounted_mode_control</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;mounted_mode_control&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;mounted_mode_control&quot;: NEW_VALUE}</code>. If value equals <code>true</code> mounted mode control is ON, if <code>false</code> OFF.</p><h3 id="thermostat-vertical-orientation-binary" tabindex="-1"><a class="header-anchor" href="#thermostat-vertical-orientation-binary"><span>Thermostat vertical orientation (binary)</span></a></h3><p>Thermostat Orientation. This is important for the PID in how it assesses temperature. <code>false</code> Horizontal or <code>true</code> Vertical. Value can be found in the published state on the <code>thermostat_vertical_orientation</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;thermostat_vertical_orientation&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;thermostat_vertical_orientation&quot;: NEW_VALUE}</code>. If value equals <code>true</code> thermostat vertical orientation is ON, if <code>false</code> OFF.</p><h3 id="viewing-direction-binary" tabindex="-1"><a class="header-anchor" href="#viewing-direction-binary"><span>Viewing direction (binary)</span></a></h3><p>Viewing/display direction, <code>false</code> normal or <code>true</code> upside-down. Value can be found in the published state on the <code>viewing_direction</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;viewing_direction&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;viewing_direction&quot;: NEW_VALUE}</code>. If value equals <code>true</code> viewing direction is ON, if <code>false</code> OFF.</p><h3 id="heat-available-binary" tabindex="-1"><a class="header-anchor" href="#heat-available-binary"><span>Heat available (binary)</span></a></h3><p>Not clear how this affects operation. However, it would appear that the device does not execute any motor functions if this is set to false. This may be a means to conserve battery during periods that the heating system is not energized (e.g. during summer). <code>false</code> No Heat Available or <code>true</code> Heat Available. Value can be found in the published state on the <code>heat_available</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;heat_available&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;heat_available&quot;: NEW_VALUE}</code>. If value equals <code>true</code> heat available is ON, if <code>false</code> OFF.</p><h3 id="heat-required-binary" tabindex="-1"><a class="header-anchor" href="#heat-required-binary"><span>Heat required (binary)</span></a></h3><p>Whether or not the unit needs warm water. <code>false</code> No Heat Request or <code>true</code> Heat Request. Value can be found in the published state on the <code>heat_required</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;heat_required&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. If value equals <code>true</code> heat required is ON, if <code>false</code> OFF.</p><h3 id="setpoint-change-source-enum" tabindex="-1"><a class="header-anchor" href="#setpoint-change-source-enum"><span>Setpoint change source (enum)</span></a></h3><p>Values observed are <code>0</code> (manual), <code>1</code> (schedule) or <code>2</code> (externally). Value can be found in the published state on the <code>setpoint_change_source</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>manual</code>, <code>schedule</code>, <code>externally</code>.</p><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate"><span>Climate</span></a></h3><p>This climate device supports the following features: <code>occupied_heating_setpoint</code>, <code>local_temperature</code>, <code>pi_heating_demand</code>, <code>system_mode</code>, <code>running_state</code>.</p><ul><li><code>occupied_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>5</code> and <code>35</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: &quot;&quot;}</code>.</li><li><code>pi_heating_demand</code>: Position of the valve (= demanded heat) where 0% is fully closed and 100% is fully open. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;pi_heating_demand&quot;: VALUE}</code> where <code>VALUE</code> is the % between <code>0</code> and <code>100</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;local_temperature&quot;: &quot;&quot;}</code>.</li><li><code>system_mode</code>: Mode of this device. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>heat</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;system_mode&quot;: &quot;&quot;}</code>.</li><li><code>running_state</code>: The current running state. Possible values are: <code>idle</code>, <code>heat</code>. Reading (<code>/get</code>) this attribute is not possible.</li></ul><h3 id="occupied-heating-setpoint-scheduled-numeric" tabindex="-1"><a class="header-anchor" href="#occupied-heating-setpoint-scheduled-numeric"><span>Occupied heating setpoint scheduled (numeric)</span></a></h3><p>Scheduled change of the setpoint. Alternative method for changing the setpoint. In the opposite to occupied_heating_setpoint it does not trigger an aggressive response from the actuator. (more suitable for scheduled changes). Value can be found in the published state on the <code>occupied_heating_setpoint_scheduled</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupied_heating_setpoint_scheduled&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;occupied_heating_setpoint_scheduled&quot;: NEW_VALUE}</code>. The minimal value is <code>5</code> and the maximum value is <code>35</code>. The unit of this value is <code>°C</code>.</p><h3 id="external-measured-room-sensor-numeric" tabindex="-1"><a class="header-anchor" href="#external-measured-room-sensor-numeric"><span>External measured room sensor (numeric)</span></a></h3><p>The temperature sensor of the TRV is — due to its design — relatively close to the heat source (i.e. the hot water in the radiator). Thus there are situations where the <code>local_temperature</code> measured by the TRV is not accurate enough: If the radiator is covered behind curtains or furniture, if the room is rather big, or if the radiator itself is big and the flow temperature is high, then the temperature in the room may easily diverge from the <code>local_temperature</code> measured by the TRV by 5°C to 8°C. In this case you might choose to use an external room sensor and send the measured value of the external room sensor to the <code>External_measured_room_sensor</code> property.The way the TRV operates on the <code>External_measured_room_sensor</code> depends on the setting of the <code>Radiator_covered</code> property: If <code>Radiator_covered</code> is <code>false</code> (Auto Offset Mode): You <em>must</em> set the <code>External_measured_room_sensor</code> property <em>at least</em> every 3 hours. After 3 hours the TRV disables this function and resets the value of the <code>External_measured_room_sensor</code> property to -8000 (disabled). You <em>should</em> set the <code>External_measured_room_sensor</code> property <em>at most</em> every 30 minutes or every 0.1K change in measured room temperature.If <code>Radiator_covered</code> is <code>true</code> (Room Sensor Mode): You <em>must</em> set the <code>External_measured_room_sensor</code> property <em>at least</em> every 30 minutes. After 35 minutes the TRV disables this function and resets the value of the <code>External_measured_room_sensor</code> property to -8000 (disabled). You <em>should</em> set the <code>External_measured_room_sensor</code> property <em>at most</em> every 5 minutes or every 0.1K change in measured room temperature.. Value can be found in the published state on the <code>external_measured_room_sensor</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;external_measured_room_sensor&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;external_measured_room_sensor&quot;: NEW_VALUE}</code>. The minimal value is <code>-8000</code> and the maximum value is <code>3500</code>.</p><h3 id="radiator-covered-binary" tabindex="-1"><a class="header-anchor" href="#radiator-covered-binary"><span>Radiator covered (binary)</span></a></h3><p>Controls whether the TRV should solely rely on an external room sensor or operate in offset mode. <code>false</code> = Auto Offset Mode (use this e.g. for exposed radiators) or <code>true</code> = Room Sensor Mode (use this e.g. for covered radiators). Please note that this flag only controls how the TRV operates on the value of <code>External_measured_room_sensor</code>; only setting this flag without setting the <code>External_measured_room_sensor</code> has no (noticeable?) effect.. Value can be found in the published state on the <code>radiator_covered</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;radiator_covered&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;radiator_covered&quot;: NEW_VALUE}</code>. If value equals <code>true</code> radiator covered is ON, if <code>false</code> OFF.</p><h3 id="window-open-feature-binary" tabindex="-1"><a class="header-anchor" href="#window-open-feature-binary"><span>Window open feature (binary)</span></a></h3><p>Whether or not the window open feature is enabled. Value can be found in the published state on the <code>window_open_feature</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;window_open_feature&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;window_open_feature&quot;: NEW_VALUE}</code>. If value equals <code>true</code> window open feature is ON, if <code>false</code> OFF.</p><h3 id="window-open-internal-enum" tabindex="-1"><a class="header-anchor" href="#window-open-internal-enum"><span>Window open internal (enum)</span></a></h3><p>0=Quarantine, 1=Windows are closed, 2=Hold - Windows are maybe about to open, 3=Open window detected, 4=In window open state from external but detected closed locally. Value can be found in the published state on the <code>window_open_internal</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;window_open_internal&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The possible values are: <code>quarantine</code>, <code>closed</code>, <code>hold</code>, <code>open</code>, <code>external_open</code>.</p><h3 id="window-open-external-binary" tabindex="-1"><a class="header-anchor" href="#window-open-external-binary"><span>Window open external (binary)</span></a></h3><p>Set if the window is open or close. This setting will trigger a change in the internal window and heating demand. <code>false</code> (windows are closed) or <code>true</code> (windows are open). Value can be found in the published state on the <code>window_open_external</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;window_open_external&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;window_open_external&quot;: NEW_VALUE}</code>. If value equals <code>true</code> window open external is ON, if <code>false</code> OFF.</p><h3 id="day-of-week-enum" tabindex="-1"><a class="header-anchor" href="#day-of-week-enum"><span>Day of week (enum)</span></a></h3><p>Exercise day of week: 0=Sun...6=Sat, 7=undefined. Value can be found in the published state on the <code>day_of_week</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;day_of_week&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;day_of_week&quot;: NEW_VALUE}</code>. The possible values are: <code>sunday</code>, <code>monday</code>, <code>tuesday</code>, <code>wednesday</code>, <code>thursday</code>, <code>friday</code>, <code>saturday</code>, <code>away_or_vacation</code>.</p><h3 id="trigger-time-numeric" tabindex="-1"><a class="header-anchor" href="#trigger-time-numeric"><span>Trigger time (numeric)</span></a></h3><p>Exercise trigger time. Minutes since midnight (65535=undefined). Range 0 to 1439. Value can be found in the published state on the <code>trigger_time</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;trigger_time&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;trigger_time&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>65535</code>.</p><h3 id="algorithm-scale-factor-numeric" tabindex="-1"><a class="header-anchor" href="#algorithm-scale-factor-numeric"><span>Algorithm scale factor (numeric)</span></a></h3><p>Scale factor of setpoint filter timeconstant (&quot;aggressiveness&quot; of control algorithm) 1= Quick ... 5=Moderate ... 10=Slow. Value can be found in the published state on the <code>algorithm_scale_factor</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;algorithm_scale_factor&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;algorithm_scale_factor&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>10</code>.</p><h3 id="load-balancing-enable-binary" tabindex="-1"><a class="header-anchor" href="#load-balancing-enable-binary"><span>Load balancing enable (binary)</span></a></h3><p>Whether or not the thermostat acts as standalone thermostat or shares load with other thermostats in the room. The gateway must update load_room_mean if enabled.. Value can be found in the published state on the <code>load_balancing_enable</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;load_balancing_enable&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;load_balancing_enable&quot;: NEW_VALUE}</code>. If value equals <code>true</code> load balancing enable is ON, if <code>false</code> OFF.</p><h3 id="load-room-mean-numeric" tabindex="-1"><a class="header-anchor" href="#load-room-mean-numeric"><span>Load room mean (numeric)</span></a></h3><p>Mean radiator load for room calculated by gateway for load balancing purposes (-8000=undefined). Value can be found in the published state on the <code>load_room_mean</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;load_room_mean&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;load_room_mean&quot;: NEW_VALUE}</code>. The minimal value is <code>-8000</code> and the maximum value is <code>3600</code>.</p><h3 id="load-estimate-numeric" tabindex="-1"><a class="header-anchor" href="#load-estimate-numeric"><span>Load estimate (numeric)</span></a></h3><p>Load estimate on this radiator. Value can be found in the published state on the <code>load_estimate</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;load_estimate&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The minimal value is <code>-8000</code> and the maximum value is <code>3600</code>.</p><h3 id="preheat-status-binary" tabindex="-1"><a class="header-anchor" href="#preheat-status-binary"><span>Preheat status (binary)</span></a></h3><p>Specific for pre-heat running in Zigbee Weekly Schedule mode. Value can be found in the published state on the <code>preheat_status</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;preheat_status&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. If value equals <code>true</code> preheat status is ON, if <code>false</code> OFF.</p><h3 id="adaptation-run-status-enum" tabindex="-1"><a class="header-anchor" href="#adaptation-run-status-enum"><span>Adaptation run status (enum)</span></a></h3><p>Status of adaptation run: None (before first run), In Progress, Valve Characteristic Found, Valve Characteristic Lost. Value can be found in the published state on the <code>adaptation_run_status</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;adaptation_run_status&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The possible values are: <code>none</code>, <code>in_progress</code>, <code>found</code>, <code>lost</code>.</p><h3 id="adaptation-run-settings-binary" tabindex="-1"><a class="header-anchor" href="#adaptation-run-settings-binary"><span>Adaptation run settings (binary)</span></a></h3><p>Automatic adaptation run enabled (the one during the night). Value can be found in the published state on the <code>adaptation_run_settings</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;adaptation_run_settings&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;adaptation_run_settings&quot;: NEW_VALUE}</code>. If value equals <code>true</code> adaptation run settings is ON, if <code>false</code> OFF.</p><h3 id="adaptation-run-control-enum" tabindex="-1"><a class="header-anchor" href="#adaptation-run-control-enum"><span>Adaptation run control (enum)</span></a></h3><p>Adaptation run control: Initiate Adaptation Run or Cancel Adaptation Run. Value can be found in the published state on the <code>adaptation_run_control</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;adaptation_run_control&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;adaptation_run_control&quot;: NEW_VALUE}</code>. The possible values are: <code>none</code>, <code>initiate_adaptation</code>, <code>cancel_adaptation</code>.</p><h3 id="regulation-setpoint-offset-numeric" tabindex="-1"><a class="header-anchor" href="#regulation-setpoint-offset-numeric"><span>Regulation setpoint offset (numeric)</span></a></h3><p>Regulation SetPoint Offset in range -2.5°C to 2.5°C in steps of 0.1°C. Value 2.5°C = 25.. Value can be found in the published state on the <code>regulation_setpoint_offset</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;regulation_setpoint_offset&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;regulation_setpoint_offset&quot;: NEW_VALUE}</code>. The minimal value is <code>-25</code> and the maximum value is <code>25</code>.</p>',60),m={},g=(0,t(3790).A)(m,[["render",function(e,o){const t=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[d,(0,a.Lk)("table",null,[i,(0,a.Lk)("tbody",null,[n,(0,a.Lk)("tr",null,[c,(0,a.Lk)("td",null,[(0,a.bF)(t,{to:"/supported-devices/#v=Danfoss"},{default:(0,a.k6)((()=>[(0,a.eW)("Danfoss")])),_:1})])]),r,s,l,u])]),h,(0,a.Lk)("p",null,[(0,a.eW)("This device supports OTA updates, for more information see "),(0,a.bF)(t,{to:"/guide/usage/ota_updates.html"},{default:(0,a.k6)((()=>[(0,a.eW)("OTA updates")])),_:1}),(0,a.eW)(".")]),p])}]]),b=JSON.parse('{"path":"/devices/014G2461.html","title":"Danfoss 014G2461 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Danfoss 014G2461 control via MQTT","description":"Integrate your Danfoss 014G2461 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2020-12-01T19:02:25.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]}]},{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Keypad lockout (enum)","slug":"keypad-lockout-enum","link":"#keypad-lockout-enum","children":[]},{"level":3,"title":"Programming operation mode (enum)","slug":"programming-operation-mode-enum","link":"#programming-operation-mode-enum","children":[]},{"level":3,"title":"Mounted mode active (binary)","slug":"mounted-mode-active-binary","link":"#mounted-mode-active-binary","children":[]},{"level":3,"title":"Mounted mode control (binary)","slug":"mounted-mode-control-binary","link":"#mounted-mode-control-binary","children":[]},{"level":3,"title":"Thermostat vertical orientation (binary)","slug":"thermostat-vertical-orientation-binary","link":"#thermostat-vertical-orientation-binary","children":[]},{"level":3,"title":"Viewing direction (binary)","slug":"viewing-direction-binary","link":"#viewing-direction-binary","children":[]},{"level":3,"title":"Heat available (binary)","slug":"heat-available-binary","link":"#heat-available-binary","children":[]},{"level":3,"title":"Heat required (binary)","slug":"heat-required-binary","link":"#heat-required-binary","children":[]},{"level":3,"title":"Setpoint change source (enum)","slug":"setpoint-change-source-enum","link":"#setpoint-change-source-enum","children":[]},{"level":3,"title":"Climate","slug":"climate","link":"#climate","children":[]},{"level":3,"title":"Occupied heating setpoint scheduled (numeric)","slug":"occupied-heating-setpoint-scheduled-numeric","link":"#occupied-heating-setpoint-scheduled-numeric","children":[]},{"level":3,"title":"External measured room sensor (numeric)","slug":"external-measured-room-sensor-numeric","link":"#external-measured-room-sensor-numeric","children":[]},{"level":3,"title":"Radiator covered (binary)","slug":"radiator-covered-binary","link":"#radiator-covered-binary","children":[]},{"level":3,"title":"Window open feature (binary)","slug":"window-open-feature-binary","link":"#window-open-feature-binary","children":[]},{"level":3,"title":"Window open internal (enum)","slug":"window-open-internal-enum","link":"#window-open-internal-enum","children":[]},{"level":3,"title":"Window open external (binary)","slug":"window-open-external-binary","link":"#window-open-external-binary","children":[]},{"level":3,"title":"Day of week (enum)","slug":"day-of-week-enum","link":"#day-of-week-enum","children":[]},{"level":3,"title":"Trigger time (numeric)","slug":"trigger-time-numeric","link":"#trigger-time-numeric","children":[]},{"level":3,"title":"Algorithm scale factor (numeric)","slug":"algorithm-scale-factor-numeric","link":"#algorithm-scale-factor-numeric","children":[]},{"level":3,"title":"Load balancing enable (binary)","slug":"load-balancing-enable-binary","link":"#load-balancing-enable-binary","children":[]},{"level":3,"title":"Load room mean (numeric)","slug":"load-room-mean-numeric","link":"#load-room-mean-numeric","children":[]},{"level":3,"title":"Load estimate (numeric)","slug":"load-estimate-numeric","link":"#load-estimate-numeric","children":[]},{"level":3,"title":"Preheat status (binary)","slug":"preheat-status-binary","link":"#preheat-status-binary","children":[]},{"level":3,"title":"Adaptation run status (enum)","slug":"adaptation-run-status-enum","link":"#adaptation-run-status-enum","children":[]},{"level":3,"title":"Adaptation run settings (binary)","slug":"adaptation-run-settings-binary","link":"#adaptation-run-settings-binary","children":[]},{"level":3,"title":"Adaptation run control (enum)","slug":"adaptation-run-control-enum","link":"#adaptation-run-control-enum","children":[]},{"level":3,"title":"Regulation setpoint offset (numeric)","slug":"regulation-setpoint-offset-numeric","link":"#regulation-setpoint-offset-numeric","children":[]}]}],"git":{"updatedTime":1723464921000},"filePathRelative":"devices/014G2461.md"}')}}]);