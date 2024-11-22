"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[42225],{96123:(e,t,a)=>{a.r(t),a.d(t,{comp:()=>s,data:()=>i});var n=a(6254);const o={},s=(0,a(35459).A)(o,[["render",function(e,t){const a=(0,n.g2)("RouteLink");return(0,n.uX)(),(0,n.CE)("div",null,[t[15]||(t[15]=(0,n.Lk)("h1",{id:"hive-slr2b",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#hive-slr2b"},[(0,n.Lk)("span",null,"Hive SLR2b")])],-1)),(0,n.Lk)("table",null,[t[6]||(t[6]=(0,n.Lk)("thead",null,[(0,n.Lk)("tr",null,[(0,n.Lk)("th"),(0,n.Lk)("th")])],-1)),(0,n.Lk)("tbody",null,[t[2]||(t[2]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Model"),(0,n.Lk)("td",null,"SLR2b")],-1)),(0,n.Lk)("tr",null,[t[1]||(t[1]=(0,n.Lk)("td",null,"Vendor",-1)),(0,n.Lk)("td",null,[(0,n.bF)(a,{to:"/supported-devices/#v=Hive"},{default:(0,n.k6)((()=>t[0]||(t[0]=[(0,n.eW)("Hive")]))),_:1})])]),t[3]||(t[3]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Description"),(0,n.Lk)("td",null,"Dual channel heating and hot water thermostat")],-1)),t[4]||(t[4]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Exposes"),(0,n.Lk)("td",null,"climate (occupied_heating_setpoint, local_temperature, system_mode, running_state), temperature_setpoint_hold, temperature_setpoint_hold_duration, linkquality")],-1)),t[5]||(t[5]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Picture"),(0,n.Lk)("td",null,[(0,n.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/SLR2b.png",alt:"Hive SLR2b"})])],-1))])]),t[16]||(t[16]=(0,n.Lk)("h2",{id:"notes",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#notes"},[(0,n.Lk)("span",null,"Notes")])],-1)),t[17]||(t[17]=(0,n.Lk)("h3",{id:"pairing",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#pairing"},[(0,n.Lk)("span",null,"Pairing")])],-1)),t[18]||(t[18]=(0,n.Lk)("p",null,"To pair the thermostat with Zigbee2MQTT, follow these steps:",-1)),(0,n.Lk)("ol",null,[t[10]||(t[10]=(0,n.Lk)("li",null,"Temporarily disconnect any thermostat controllers connected to the thermostat by remove a battery from them.",-1)),t[11]||(t[11]=(0,n.Lk)("li",null,"Turn the thermostat and boiler off, then on again to ensure it is not trying to connect to any thermostat controllers.",-1)),t[12]||(t[12]=(0,n.Lk)("li",null,"Once the thermostat and boiler are on, hold down the Central heating button on the device until the Central heating'light turns white/ pink, then release the button. This will enable stand-alone mode on the thermostat.",-1)),t[13]||(t[13]=(0,n.Lk)("li",null,"Hold down the central heating button again until the Central heating light begins to flash amber. The device is now in pairing mode and should be found by Zigbee2MQTT.",-1)),(0,n.Lk)("li",null,[t[8]||(t[8]=(0,n.eW)("You can now re-insert the battery back into any thermostat controllers disconnected in step 1 and pair them to the boiler (and optionally Zigbee2MQTT). For information on pairing the thermostat controllers see the pairing instructions for the ")),(0,n.bF)(a,{to:"/devices/SLT3.html"},{default:(0,n.k6)((()=>t[7]||(t[7]=[(0,n.eW)("Hive SLT3B")]))),_:1}),t[9]||(t[9]=(0,n.eW)(". Note that the thermostat's Central heating light will remain amber until a controller is paired with the thermostat, however the thermostat will still function correctly."))])]),t[19]||(t[19]=(0,n.Fv)('<h3 id="sending-payloads-on-dual-channel-receivers" tabindex="-1"><a class="header-anchor" href="#sending-payloads-on-dual-channel-receivers"><span>Sending payloads on dual channel receivers</span></a></h3><p>As the receiver makes use of two endpoints, <code>water</code> and <code>heat</code> there are two methods of sending payloads, both equally valid. For example, the <code>heat</code> endpoint:</p><p>Topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code></p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token punctuation">{</span></span>\n<span class="line">    <span class="token string-property property">&quot;system_mode_heat&quot;</span><span class="token operator">:</span><span class="token string">&quot;heat&quot;</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Topic <code>zigbee2mqtt/FRIENDLY_NAME/heat/set</code></p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>\n<span class="line">    <span class="token property">&quot;system_mode&quot;</span><span class="token operator">:</span><span class="token string">&quot;heat&quot;</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Notice that <code>heat</code> must be part of either the topic or the attribute. With that in mind, adjust the commands in this documentation based on your preferred style.</p><h3 id="how-to-start-edit-native-boost-heat-endpoint" tabindex="-1"><a class="header-anchor" href="#how-to-start-edit-native-boost-heat-endpoint"><span>How to start/edit native boost (heat endpoint)</span></a></h3><p>The receiver has support for native Boost, which will allow to display the remaining time on a compatible remote.</p><p>To start one, or modify an already active one, send the following payload to the topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code>:</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token punctuation">{</span></span>\n<span class="line">   <span class="token string-property property">&quot;system_mode_heat&quot;</span><span class="token operator">:</span><span class="token string">&quot;emergency_heating&quot;</span><span class="token punctuation">,</span></span>\n<span class="line">   <span class="token string-property property">&quot;temperature_setpoint_hold_duration_heat&quot;</span><span class="token operator">:</span><span class="token number">30</span><span class="token punctuation">,</span>  <span class="token comment">// Replace with desired duration in minutes. Max 360. 0 to stop</span></span>\n<span class="line">   <span class="token string-property property">&quot;temperature_setpoint_hold_heat&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span></span>\n<span class="line">   <span class="token string-property property">&quot;occupied_heating_setpoint_heat&quot;</span><span class="token operator">:</span><span class="token number">18</span>  <span class="token comment">// Replace with desired temperature. Between 5 and 32 C</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Note: For device timing reasons, the payload needs to be sent as one single command. Sending individual commands or settings attributes manually using the Frontend will not work.</p><p>Also, the native boost can be used as a method to pause the heating too. To do so, set the temperature to a low value.</p><h3 id="set-heating-mode-to-on-heat-endpoint" tabindex="-1"><a class="header-anchor" href="#set-heating-mode-to-on-heat-endpoint"><span>Set heating mode to ON (heat endpoint)</span></a></h3><p>Send the following payload to the topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code>:</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token punctuation">{</span></span>\n<span class="line">   <span class="token string-property property">&quot;system_mode_heat&quot;</span><span class="token operator">:</span><span class="token string">&quot;heat&quot;</span><span class="token punctuation">,</span></span>\n<span class="line">   <span class="token string-property property">&quot;temperature_setpoint_hold_heat&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span></span>\n<span class="line">   <span class="token string-property property">&quot;occupied_heating_setpoint_heat&quot;</span><span class="token operator">:</span><span class="token number">20</span> <span class="token comment">// Replace with desired temperature. Between 5 and 32 C</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Note: You will also notice that <code>temperature_setpoint_hold_duration_heat</code> automatically changes to <code>65535</code> which means <code>undefined</code> (indefinite).</p><p>This will also stop any native boosts that are currently active.</p><h3 id="set-heating-mode-to-off-heat-endpoint" tabindex="-1"><a class="header-anchor" href="#set-heating-mode-to-off-heat-endpoint"><span>Set heating mode to OFF (heat endpoint)</span></a></h3><p>Send the following payload to the topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code>:</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token punctuation">{</span></span>\n<span class="line">   <span class="token string-property property">&quot;system_mode_heat&quot;</span><span class="token operator">:</span><span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span></span>\n<span class="line">   <span class="token string-property property">&quot;temperature_setpoint_hold_heat&quot;</span><span class="token operator">:</span><span class="token number">0</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Note: You will also notice that <code>temperature_setpoint_hold_duration_heat</code> automatically changes to <code>0</code> which means <code>not set</code>. <code>occupied_heating_setpoint_heat</code> automatically changes to <code>1</code> degree C.</p><p>This will also stop any native boosts that are currently active.</p><h3 id="how-to-start-edit-native-boost-water-endpoint" tabindex="-1"><a class="header-anchor" href="#how-to-start-edit-native-boost-water-endpoint"><span>How to start/edit native boost (water endpoint)</span></a></h3><p>The receiver has support for native Boost, which will allow to display the remaining time on a compatible remote.</p><p>To start one, or modify an already active one, send the following payload to the topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code>:</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token punctuation">{</span></span>\n<span class="line">   <span class="token string-property property">&quot;system_mode_water&quot;</span><span class="token operator">:</span><span class="token string">&quot;emergency_heating&quot;</span><span class="token punctuation">,</span></span>\n<span class="line">   <span class="token string-property property">&quot;temperature_setpoint_hold_duration_water&quot;</span><span class="token operator">:</span><span class="token number">30</span><span class="token punctuation">,</span>  <span class="token comment">// Replace with desired duration in minutes. Max 360. 0 to stop</span></span>\n<span class="line">   <span class="token string-property property">&quot;temperature_setpoint_hold_water&quot;</span><span class="token operator">:</span><span class="token number">1</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Note: For device timing reasons, the payload needs to be sent as one single command. Sending individual commands or settings attributes manually using the Frontend will not work.</p><h3 id="set-heating-mode-to-on-water-endpoint" tabindex="-1"><a class="header-anchor" href="#set-heating-mode-to-on-water-endpoint"><span>Set heating mode to ON (water endpoint)</span></a></h3><p>Send the following payload to the topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code>:</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token punctuation">{</span></span>\n<span class="line">   <span class="token string-property property">&quot;system_mode_water&quot;</span><span class="token operator">:</span><span class="token string">&quot;heat&quot;</span><span class="token punctuation">,</span></span>\n<span class="line">   <span class="token string-property property">&quot;temperature_setpoint_hold_water&quot;</span><span class="token operator">:</span><span class="token number">1</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Note: You will also notice that <code>temperature_setpoint_hold_duration_heat</code> automatically changes to <code>65535</code> which means <code>undefined</code> (indefinite).</p><p>This will also stop any native boosts that are currently active.</p><h3 id="set-heating-mode-to-off-water-endpoint" tabindex="-1"><a class="header-anchor" href="#set-heating-mode-to-off-water-endpoint"><span>Set heating mode to OFF (water endpoint)</span></a></h3><p>Send the following payload to the topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code>:</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token punctuation">{</span></span>\n<span class="line">   <span class="token string-property property">&quot;system_mode_water&quot;</span><span class="token operator">:</span><span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span></span>\n<span class="line">   <span class="token string-property property">&quot;temperature_setpoint_hold_water&quot;</span><span class="token operator">:</span><span class="token number">0</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Note: You will also notice that <code>temperature_setpoint_hold_duration_heat</code> automatically changes to <code>0</code> which means <code>not set</code>.</p><p>This will also stop any native boosts that are currently active.</p><h3 id="local-and-occupied-temperature-water-endpoint" tabindex="-1"><a class="header-anchor" href="#local-and-occupied-temperature-water-endpoint"><span>Local and occupied temperature (water endpoint)</span></a></h3><p>The water endpoint functions as what could be considered an on/off switch based on <code>system_mode_water</code>. Because of that, the device uses fixed values for temperature. <code>local_temperature_water</code> is always 21 and <code>occupied_heating_setpoint_water</code> is always 22.</p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>',41)),(0,n.Lk)("p",null,[(0,n.Lk)("em",null,[(0,n.bF)(a,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,n.k6)((()=>t[14]||(t[14]=[(0,n.eW)("How to use device type specific configuration")]))),_:1})])]),t[20]||(t[20]=(0,n.Fv)('<ul><li><code>thermostat_unit</code>: Controls the temperature unit of the thermostat (default celsius). The value must be one of <code>celsius</code>, <code>fahrenheit</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="climate-heat-endpoint" tabindex="-1"><a class="header-anchor" href="#climate-heat-endpoint"><span>Climate (heat endpoint)</span></a></h3><p>This climate device supports the following features: <code>occupied_heating_setpoint</code>, <code>local_temperature</code>, <code>system_mode</code>, <code>running_state</code>.</p><ul><li><code>occupied_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;occupied_heating_setpoint_heat&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>5</code> and <code>32</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupied_heating_setpoint_heat&quot;: &quot;&quot;}</code>.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;local_temperature_heat&quot;: &quot;&quot;}</code>.</li><li><code>system_mode</code>: Mode of this device. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode_heat&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>off</code>, <code>auto</code>, <code>heat</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;system_mode_heat&quot;: &quot;&quot;}</code>.</li><li><code>running_state</code>: The current running state. Possible values are: <code>idle</code>, <code>heat</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;running_state_heat&quot;: &quot;&quot;}</code>.</li></ul><h3 id="temperature-setpoint-hold-binary-heat-endpoint" tabindex="-1"><a class="header-anchor" href="#temperature-setpoint-hold-binary-heat-endpoint"><span>Temperature setpoint hold (binary, heat endpoint)</span></a></h3><p>Prevent changes. <code>false</code> = run normally. <code>true</code> = prevent from making changes. Must be set to <code>false</code> when system_mode = off or <code>true</code> for heat. Value can be found in the published state on the <code>temperature_setpoint_hold_heat</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;temperature_setpoint_hold_heat&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_setpoint_hold_heat&quot;: NEW_VALUE}</code>. If value equals <code>true</code> temperature setpoint hold is ON, if <code>false</code> OFF.</p><h3 id="temperature-setpoint-hold-duration-numeric-heat-endpoint" tabindex="-1"><a class="header-anchor" href="#temperature-setpoint-hold-duration-numeric-heat-endpoint"><span>Temperature setpoint hold duration (numeric, heat endpoint)</span></a></h3><p>Period in minutes for which the setpoint hold will be active. 65535 = attribute not used. 0 to 360 to match the remote display. Value can be found in the published state on the <code>temperature_setpoint_hold_duration_heat</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;temperature_setpoint_hold_duration_heat&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_setpoint_hold_duration_heat&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>65535</code>.</p><h3 id="climate-water-endpoint" tabindex="-1"><a class="header-anchor" href="#climate-water-endpoint"><span>Climate (water endpoint)</span></a></h3><p>This climate device supports the following features: <code>occupied_heating_setpoint</code>, <code>local_temperature</code>, <code>system_mode</code>, <code>running_state</code>.</p><ul><li><code>occupied_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;occupied_heating_setpoint_water&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>22</code> and <code>22</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupied_heating_setpoint_water&quot;: &quot;&quot;}</code>.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;local_temperature_water&quot;: &quot;&quot;}</code>.</li><li><code>system_mode</code>: Mode of this device. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode_water&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>off</code>, <code>auto</code>, <code>heat</code>, <code>emergency_heating</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;system_mode_water&quot;: &quot;&quot;}</code>.</li><li><code>running_state</code>: The current running state. Possible values are: <code>idle</code>, <code>heat</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;running_state_water&quot;: &quot;&quot;}</code>.</li></ul><h3 id="temperature-setpoint-hold-binary-water-endpoint" tabindex="-1"><a class="header-anchor" href="#temperature-setpoint-hold-binary-water-endpoint"><span>Temperature setpoint hold (binary, water endpoint)</span></a></h3><p>Prevent changes. <code>false</code> = run normally. <code>true</code> = prevent from making changes. Must be set to <code>false</code> when system_mode = off or <code>true</code> for heat. Value can be found in the published state on the <code>temperature_setpoint_hold_water</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;temperature_setpoint_hold_water&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_setpoint_hold_water&quot;: NEW_VALUE}</code>. If value equals <code>true</code> temperature setpoint hold is ON, if <code>false</code> OFF.</p><h3 id="temperature-setpoint-hold-duration-numeric-water-endpoint" tabindex="-1"><a class="header-anchor" href="#temperature-setpoint-hold-duration-numeric-water-endpoint"><span>Temperature setpoint hold duration (numeric, water endpoint)</span></a></h3><p>Period in minutes for which the setpoint hold will be active. 65535 = attribute not used. 0 to 360 to match the remote display. Value can be found in the published state on the <code>temperature_setpoint_hold_duration_water</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;temperature_setpoint_hold_duration_water&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_setpoint_hold_duration_water&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>65535</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',18))])}]]),i=JSON.parse('{"path":"/devices/SLR2b.html","title":"Hive SLR2b control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Hive SLR2b control via MQTT","description":"Integrate your Hive SLR2b via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-03-30T20:29:35.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Sending payloads on dual channel receivers","slug":"sending-payloads-on-dual-channel-receivers","link":"#sending-payloads-on-dual-channel-receivers","children":[]},{"level":3,"title":"How to start/edit native boost (heat endpoint)","slug":"how-to-start-edit-native-boost-heat-endpoint","link":"#how-to-start-edit-native-boost-heat-endpoint","children":[]},{"level":3,"title":"Set heating mode to ON (heat endpoint)","slug":"set-heating-mode-to-on-heat-endpoint","link":"#set-heating-mode-to-on-heat-endpoint","children":[]},{"level":3,"title":"Set heating mode to OFF (heat endpoint)","slug":"set-heating-mode-to-off-heat-endpoint","link":"#set-heating-mode-to-off-heat-endpoint","children":[]},{"level":3,"title":"How to start/edit native boost (water endpoint)","slug":"how-to-start-edit-native-boost-water-endpoint","link":"#how-to-start-edit-native-boost-water-endpoint","children":[]},{"level":3,"title":"Set heating mode to ON (water endpoint)","slug":"set-heating-mode-to-on-water-endpoint","link":"#set-heating-mode-to-on-water-endpoint","children":[]},{"level":3,"title":"Set heating mode to OFF (water endpoint)","slug":"set-heating-mode-to-off-water-endpoint","link":"#set-heating-mode-to-off-water-endpoint","children":[]},{"level":3,"title":"Local and occupied temperature (water endpoint)","slug":"local-and-occupied-temperature-water-endpoint","link":"#local-and-occupied-temperature-water-endpoint","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Climate (heat endpoint)","slug":"climate-heat-endpoint","link":"#climate-heat-endpoint","children":[]},{"level":3,"title":"Temperature setpoint hold (binary, heat endpoint)","slug":"temperature-setpoint-hold-binary-heat-endpoint","link":"#temperature-setpoint-hold-binary-heat-endpoint","children":[]},{"level":3,"title":"Temperature setpoint hold duration (numeric, heat endpoint)","slug":"temperature-setpoint-hold-duration-numeric-heat-endpoint","link":"#temperature-setpoint-hold-duration-numeric-heat-endpoint","children":[]},{"level":3,"title":"Climate (water endpoint)","slug":"climate-water-endpoint","link":"#climate-water-endpoint","children":[]},{"level":3,"title":"Temperature setpoint hold (binary, water endpoint)","slug":"temperature-setpoint-hold-binary-water-endpoint","link":"#temperature-setpoint-hold-binary-water-endpoint","children":[]},{"level":3,"title":"Temperature setpoint hold duration (numeric, water endpoint)","slug":"temperature-setpoint-hold-duration-numeric-water-endpoint","link":"#temperature-setpoint-hold-duration-numeric-water-endpoint","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1732307599000},"filePathRelative":"devices/SLR2b.md"}')}}]);