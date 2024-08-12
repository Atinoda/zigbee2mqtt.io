"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[30977],{35231:(e,i,t)=>{t.r(i),t.d(i,{comp:()=>m,data:()=>p});var a=t(37711);const n=(0,a.Lk)("h1",{id:"giex-gx02",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#giex-gx02"},[(0,a.Lk)("span",null,"GiEX GX02")])],-1),r=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1),o=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"GX02")],-1),c=(0,a.Lk)("td",null,"Vendor",-1),d=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"Water valve")],-1),s=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"battery, state, mode, cycle_irrigation_num_times, irrigation_start_time, irrigation_end_time, last_irrigation_duration, water_consumed, irrigation_target, cycle_irrigation_interval, linkquality")],-1),l=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/GX02.png",alt:"GiEX GX02"})])],-1),u=(0,a.Fv)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="state-binary" tabindex="-1"><a class="header-anchor" href="#state-binary"><span>State (binary)</span></a></h3><p>State. Value can be found in the published state on the <code>state</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> state is ON, if <code>OFF</code> OFF.</p><h3 id="mode-enum" tabindex="-1"><a class="header-anchor" href="#mode-enum"><span>Mode (enum)</span></a></h3><p>Irrigation mode. Value can be found in the published state on the <code>mode</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;mode&quot;: NEW_VALUE}</code>. The possible values are: <code>duration</code>, <code>capacity</code>.</p><h3 id="cycle-irrigation-num-times-numeric" tabindex="-1"><a class="header-anchor" href="#cycle-irrigation-num-times-numeric"><span>Cycle irrigation num times (numeric)</span></a></h3><p>Number of cycle irrigation times, set to 0 for single cycle. Value can be found in the published state on the <code>cycle_irrigation_num_times</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;cycle_irrigation_num_times&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>100</code>.</p><h3 id="irrigation-start-time-numeric" tabindex="-1"><a class="header-anchor" href="#irrigation-start-time-numeric"><span>Irrigation start time (numeric)</span></a></h3><p>Last irrigation start time. Value can be found in the published state on the <code>irrigation_start_time</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="irrigation-end-time-numeric" tabindex="-1"><a class="header-anchor" href="#irrigation-end-time-numeric"><span>Irrigation end time (numeric)</span></a></h3><p>Last irrigation end time. Value can be found in the published state on the <code>irrigation_end_time</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="last-irrigation-duration-numeric" tabindex="-1"><a class="header-anchor" href="#last-irrigation-duration-numeric"><span>Last irrigation duration (numeric)</span></a></h3><p>Last irrigation duration. Value can be found in the published state on the <code>last_irrigation_duration</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="water-consumed-numeric" tabindex="-1"><a class="header-anchor" href="#water-consumed-numeric"><span>Water consumed (numeric)</span></a></h3><p>Last irrigation water consumption. Value can be found in the published state on the <code>water_consumed</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>L</code>.</p><h3 id="irrigation-target-numeric" tabindex="-1"><a class="header-anchor" href="#irrigation-target-numeric"><span>Irrigation target (numeric)</span></a></h3><p>Irrigation target, duration in seconds or capacity in litres (depending on mode), set to 0 to leave the valve on indefinitely, for safety reasons the target will be forced to a minimum of 10 seconds in duration mode. Value can be found in the published state on the <code>irrigation_target</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;irrigation_target&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>43200</code>. The unit of this value is <code>seconds or litres</code>.</p><h3 id="cycle-irrigation-interval-numeric" tabindex="-1"><a class="header-anchor" href="#cycle-irrigation-interval-numeric"><span>Cycle irrigation interval (numeric)</span></a></h3><p>Cycle irrigation interval. Value can be found in the published state on the <code>cycle_irrigation_interval</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;cycle_irrigation_interval&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>43200</code>. The unit of this value is <code>sec</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',23),h={},m=(0,t(3790).A)(h,[["render",function(e,i){const t=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[n,(0,a.Lk)("table",null,[r,(0,a.Lk)("tbody",null,[o,(0,a.Lk)("tr",null,[c,(0,a.Lk)("td",null,[(0,a.bF)(t,{to:"/supported-devices/#v=GiEX"},{default:(0,a.k6)((()=>[(0,a.eW)("GiEX")])),_:1})])]),d,s,l])]),u])}]]),p=JSON.parse('{"path":"/devices/GX02.html","title":"GiEX GX02 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"GiEX GX02 control via MQTT","description":"Integrate your GiEX GX02 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-03-31T18:43:56.000Z"},"headers":[{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"State (binary)","slug":"state-binary","link":"#state-binary","children":[]},{"level":3,"title":"Mode (enum)","slug":"mode-enum","link":"#mode-enum","children":[]},{"level":3,"title":"Cycle irrigation num times (numeric)","slug":"cycle-irrigation-num-times-numeric","link":"#cycle-irrigation-num-times-numeric","children":[]},{"level":3,"title":"Irrigation start time (numeric)","slug":"irrigation-start-time-numeric","link":"#irrigation-start-time-numeric","children":[]},{"level":3,"title":"Irrigation end time (numeric)","slug":"irrigation-end-time-numeric","link":"#irrigation-end-time-numeric","children":[]},{"level":3,"title":"Last irrigation duration (numeric)","slug":"last-irrigation-duration-numeric","link":"#last-irrigation-duration-numeric","children":[]},{"level":3,"title":"Water consumed (numeric)","slug":"water-consumed-numeric","link":"#water-consumed-numeric","children":[]},{"level":3,"title":"Irrigation target (numeric)","slug":"irrigation-target-numeric","link":"#irrigation-target-numeric","children":[]},{"level":3,"title":"Cycle irrigation interval (numeric)","slug":"cycle-irrigation-interval-numeric","link":"#cycle-irrigation-interval-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1723464921000},"filePathRelative":"devices/GX02.md"}')}}]);