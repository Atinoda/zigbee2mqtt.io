"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[71438],{81454:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>g,data:()=>m});var i=o(37711);const a=(0,i.Lk)("h1",{id:"schneider-electric-wv704r0a0902",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#schneider-electric-wv704r0a0902"},[(0,i.Lk)("span",null,"Schneider Electric WV704R0A0902")])],-1),l=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th"),(0,i.Lk)("th")])],-1),n=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Model"),(0,i.Lk)("td",null,"WV704R0A0902")],-1),s=(0,i.Lk)("td",null,"Vendor",-1),d=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Description"),(0,i.Lk)("td",null,"Wiser radiator thermostat")],-1),r=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Exposes"),(0,i.Lk)("td",null,"climate (occupied_heating_setpoint, local_temperature, running_state, pi_heating_demand), battery, voltage, keypad_lockout, linkquality")],-1),c=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Picture"),(0,i.Lk)("td",null,[(0,i.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/WV704R0A0902.png",alt:"Schneider Electric WV704R0A0902"})])],-1),h=(0,i.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="device-pairing-installation" tabindex="-1"><a class="header-anchor" href="#device-pairing-installation"><span>Device pairing/installation</span></a></h3><p>To put the TRV in installation mode twist and hold the cap in the <strong>+</strong> direction until the central LED flashes green. The device is ready for joining when:</p><ul><li>left/right LEDs flash red/blue</li><li>central LED shows a solid orange</li></ul><p>If central light shows a solid green, your TRV has been paired and is connected to the zigbee network.</p><p>If blinking with yellow, then your TRV is not paired or can&#39;t connect to the zigbee network. If Zigbee2MQTT is running and accepting new devices the valve should join the network. Sometimes you may need to twist and hold the cap in the <strong>+</strong> direction for 3 seconds before it will try to join.</p><p><strong>Note:</strong> Zigbee2MQTT might not be able to correctly configure the TRV until you have calibrated it.</p><p>If the valve is not recognized, you can turn the boost button to positive and hold it; the red light starts to blink slowly. Release the button once the red light stops blinking.</p><p>If the device fails to pair/join the network (<code>red:yellow:blue</code> on pairing mode) or you changed the network id/channel, connect to another network, bought the TRV second hand, you can perform a factory reset to start fresh.</p><h3 id="radiator-thermostat-reset" tabindex="-1"><a class="header-anchor" href="#radiator-thermostat-reset"><span>Radiator Thermostat Reset</span></a></h3><p>In order to factory reset a radiator thermostat, please perform the following;</p><ol><li>Twist and hold the cap of the radiator thermostat in the &#39;-&#39; direction until the centre LED begins to flash Red.</li><li>Keep holding the cap in the ‘-‘ direction until all 3 LEDs flash once to indicate the device is resetting.</li><li>Wait for the reset to complete, this may take 20 seconds.</li><li>Once the device returns to [flashing ~ solid amber ~ flashing], the device has now completed its reset.</li></ol><h3 id="radiator-thermostat-recalibration" tabindex="-1"><a class="header-anchor" href="#radiator-thermostat-recalibration"><span>Radiator Thermostat Recalibration</span></a></h3><p>In order to recalibrate a radiator thermostat, please perform the following;</p><ol><li>First, please ensure that the radiator thermostat is firmly screwed onto the radiator.</li><li>Then, twist the cap in the &#39;+&#39; direction for 8 seconds until the valve fully opens, and the red light comes on.</li><li>Release the cap.</li><li>Then please twist the cap in the &#39;-&#39; direction for 2 seconds until the blue light comes on and the valve closes.</li><li>This ensures that the radiator thermostat is applying suitable pressure to the radiator pin when it is supposed to be closed.</li></ol><h2 id="general-usage" tabindex="-1"><a class="header-anchor" href="#general-usage"><span>General usage</span></a></h2><p>Valve sometimes fails to respond/acknowledge a setting, just send the command again.</p><p><code>pi_heating_demand</code>: Varies the valve position dynamically as <code>local_temperature</code> approaches <code>occupied_heating_setpoint</code> to mitigate against heating overshoot.</p><p>A value &gt;0 indicates the TRV is demanding heat, therefore your application should monitor this value, and supply heat when greater than 0.</p><p><code>battery</code>: The level corresponds voltages in the range 2.2 V (0%) to 3.0 V (100%). The levels where chosen so a 0% indicates that batteries must be replaced, but the valve will still work.</p><h2 id="additional-reported-state-properties" tabindex="-1"><a class="header-anchor" href="#additional-reported-state-properties"><span>Additional reported state properties</span></a></h2><h3 id="mot-string" tabindex="-1"><a class="header-anchor" href="#mot-string"><span>MOT (string)</span></a></h3><p>Motor state.</p><ul><li>Value can be found in the published state on the <code>MOT</code> property.</li><li>Possible values are: <code>Stall</code>, <code>CloseValue</code>, other values are possible but unknown at time of writing. Seems to change when the motor is moving.</li><li>It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</li></ul><h3 id="boost-string" tabindex="-1"><a class="header-anchor" href="#boost-string"><span>boost (string)</span></a></h3><p>The last known twist-top boost state.</p><ul><li>Note that the valve will not automatically toggle the value to 0 after some time, i.e. configuration/automation logic is needed to use the value. E.g. in Home Assistant the <code>expire_after</code> setting can be used to handle this.</li><li>Value can be found in the published state on the <code>boost</code> property.</li><li>Possible values are: <code>Up</code>, <code>Down</code>.</li><li>It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</li></ul><h3 id="keypad-lockout" tabindex="-1"><a class="header-anchor" href="#keypad-lockout"><span>keypad_lockout</span></a></h3><p>Keypad lock, i.e. enable/disable twist-top boost.</p><ul><li><p>Setting the keypad to lock (i.e. <code>lock1</code>) disables the twist-top boost button which prevents booting and installation mode. The deivce can still be reset, but it appears the keypad remains locked after reset (?).</p></li><li><p>Value can be found in the published state on the <code>keypad_lockout</code> property.</p></li><li><p>Possible values are: <code>unlock</code>, <code>lock1</code>.</p></li><li><p>To write:</p><ul><li>publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;keypad_lockout&quot;: &quot;VALUE&quot;}</code> where <code>VALUE</code> is <code>unlock</code> or <code>lock1</code>.</li></ul></li><li><p>To read:</p><ul><li>publish a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;keypad_lockout&quot;: &quot;&quot;}</code>.</li></ul></li></ul><h3 id="adc" tabindex="-1"><a class="header-anchor" href="#adc"><span>ADC</span></a></h3><p>Unknown - appears to be device parameter values as a comma-seperated list.</p><h3 id="alg" tabindex="-1"><a class="header-anchor" href="#alg"><span>ALG</span></a></h3><p>Unknown - appears to be device parameter values as a comma-seperated list.</p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>',35),p=(0,i.Fv)('<ul><li><p><code>thermostat_unit</code>: Controls the temperature unit of the thermostat (default celsius). The value must be one of <code>celsius</code>, <code>fahrenheit</code></p></li><li><p><code>legacy</code>: Set to false to disable the legacy integration (highly recommended), will change structure of the published payload (default true). The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate"><span>Climate</span></a></h3><p>This climate device supports the following features: <code>occupied_heating_setpoint</code>, <code>local_temperature</code>, <code>running_state</code>, <code>pi_heating_demand</code>.</p><ul><li><code>occupied_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>5</code> and <code>30</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: &quot;&quot;}</code>.</li><li><code>pi_heating_demand</code>: Position of the valve (= demanded heat) where 0% is fully closed and 100% is fully open. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;pi_heating_demand&quot;: VALUE}</code> where <code>VALUE</code> is the % between <code>0</code> and <code>100</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). Reading (<code>/get</code>) this attribute is not possible.</li><li><code>running_state</code>: The current running state. Possible values are: <code>idle</code>, <code>heat</code>. Reading (<code>/get</code>) this attribute is not possible.</li></ul><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric"><span>Voltage (numeric)</span></a></h3><p>Voltage of the battery in millivolts. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="keypad-lockout-enum" tabindex="-1"><a class="header-anchor" href="#keypad-lockout-enum"><span>Keypad lockout (enum)</span></a></h3><p>Enables/disables physical input on the device. Value can be found in the published state on the <code>keypad_lockout</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;keypad_lockout&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;keypad_lockout&quot;: NEW_VALUE}</code>. The possible values are: <code>unlock</code>, <code>lock1</code>, <code>lock2</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',13),u={},g=(0,o(3790).A)(u,[["render",function(e,t){const o=(0,i.g2)("RouteLink");return(0,i.uX)(),(0,i.CE)("div",null,[a,(0,i.Lk)("table",null,[l,(0,i.Lk)("tbody",null,[n,(0,i.Lk)("tr",null,[s,(0,i.Lk)("td",null,[(0,i.bF)(o,{to:"/supported-devices/#v=Schneider%20Electric"},{default:(0,i.k6)((()=>[(0,i.eW)("Schneider Electric")])),_:1})])]),d,r,c])]),h,(0,i.Lk)("p",null,[(0,i.Lk)("em",null,[(0,i.bF)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.k6)((()=>[(0,i.eW)("How to use device type specific configuration")])),_:1})])]),p])}]]),m=JSON.parse('{"path":"/devices/WV704R0A0902.html","title":"Schneider Electric WV704R0A0902 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Schneider Electric WV704R0A0902 control via MQTT","description":"Integrate your Schneider Electric WV704R0A0902 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2020-01-07T20:09:53.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Device pairing/installation","slug":"device-pairing-installation","link":"#device-pairing-installation","children":[]},{"level":3,"title":"Radiator Thermostat Reset","slug":"radiator-thermostat-reset","link":"#radiator-thermostat-reset","children":[]},{"level":3,"title":"Radiator Thermostat Recalibration","slug":"radiator-thermostat-recalibration","link":"#radiator-thermostat-recalibration","children":[]}]},{"level":2,"title":"General usage","slug":"general-usage","link":"#general-usage","children":[]},{"level":2,"title":"Additional reported state properties","slug":"additional-reported-state-properties","link":"#additional-reported-state-properties","children":[{"level":3,"title":"MOT (string)","slug":"mot-string","link":"#mot-string","children":[]},{"level":3,"title":"boost (string)","slug":"boost-string","link":"#boost-string","children":[]},{"level":3,"title":"keypad_lockout","slug":"keypad-lockout","link":"#keypad-lockout","children":[]},{"level":3,"title":"ADC","slug":"adc","link":"#adc","children":[]},{"level":3,"title":"ALG","slug":"alg","link":"#alg","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Climate","slug":"climate","link":"#climate","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Voltage (numeric)","slug":"voltage-numeric","link":"#voltage-numeric","children":[]},{"level":3,"title":"Keypad lockout (enum)","slug":"keypad-lockout-enum","link":"#keypad-lockout-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1723464921000},"filePathRelative":"devices/WV704R0A0902.md"}')}}]);