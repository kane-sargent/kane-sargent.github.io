"use strict";(self.webpackChunkhive_knowledge_base=self.webpackChunkhive_knowledge_base||[]).push([[2431],{9774:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>c,frontMatter:()=>t,metadata:()=>l,toc:()=>d});var r=s(4848),i=s(8453);const t={sidebar_position:5},a="Sensors",l={id:"the-adjust-page/sensors",title:"Sensors",description:"Sensors Image 1",source:"@site/docs/8-the-adjust-page/4-sensors.md",sourceDirName:"8-the-adjust-page",slug:"/the-adjust-page/sensors",permalink:"/docs/the-adjust-page/sensors",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Effects",permalink:"/docs/the-adjust-page/effects"},next:{title:"Cloud",permalink:"/docs/the-adjust-page/cloud"}},o={},d=[{value:"Sensor Quantity",id:"sensor-quantity",level:2},{value:"Sensor Type",id:"sensor-type",level:2},{value:"Active State",id:"active-state",level:2},{value:"Serial Number",id:"serial-number",level:2},{value:"Port Number",id:"port-number",level:2},{value:"Channel Number",id:"channel-number",level:2},{value:"Phidget Device",id:"phidget-device",level:2},{value:"Raw Value",id:"raw-value",level:2},{value:"Minimum, Maximum, and Normalised Properties",id:"minimum-maximum-and-normalised-properties",level:2},{value:"Multiplier",id:"multiplier",level:2},{value:"Offset",id:"offset",level:2},{value:"Decimal Places",id:"decimal-places",level:2},{value:"Final Value",id:"final-value",level:2},{value:"Parameter",id:"parameter",level:2}];function h(e){const n={h1:"h1",h2:"h2",header:"header",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"sensors",children:"Sensors"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Sensors Image 1",src:s(5599).A+"",width:"2048",height:"1280"})}),"\n",(0,r.jsx)(n.p,{children:"The Sensors tab allows for the integration and configuration of physical sensor inputs with the Hive Player. This feature is particularly useful for enhancing interactive installations, such as museum exhibits, by enabling real-world triggers to control media playback and other settings."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"sensor-quantity",children:"Sensor Quantity"}),"\n",(0,r.jsx)(n.p,{children:"The Sensor Quantity box enables the selection of the number of sensors to use. By default, a maximum of four sensors can be configured. For additional sensors beyond this limit, please contact the Hive support team."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"sensor-type",children:"Sensor Type"}),"\n",(0,r.jsx)(n.p,{children:"The Sensor Type dropdown allows for the selection of the sensor brand to be used in your setup. Currently, Hive supports only Phidget sensors; however, additional brands may be offered in the future."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"active-state",children:"Active State"}),"\n",(0,r.jsx)(n.p,{children:"The Active State dropdown allows for enabling or disabling the selected sensor."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"serial-number",children:"Serial Number"}),"\n",(0,r.jsx)(n.p,{children:"The Serial Number box must be filled in with the Phidget serial number to ensure proper functionality alongside Hive."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"port-number",children:"Port Number"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"Port Number"})," must correspond to the network port where the Phidget system is configured."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"channel-number",children:"Channel Number"}),"\n",(0,r.jsx)(n.p,{children:"The Channel Number box must be filled in with the specific channel of the Phidget device you wish to connect. The channel number varies based on the type and model of your device, as well as the number of inputs or outputs it supports."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"A 4-input voltage sensor has channels 0 to 3."}),"\n",(0,r.jsx)(n.li,{children:"A 16-output relay board has channels 0 to 15."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Find the correct channel number in the Phidget Control Panel or the user guide."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"phidget-device",children:"Phidget Device"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"Phidget Device"})," dropdown lets users specify which Phidget device they are using in their setup."]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Device Type"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Description"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Switch"})}),(0,r.jsx)(n.td,{children:"A basic on/off switch for triggering actions based on user input."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Distance Sensor"})}),(0,r.jsx)(n.td,{children:"Measures the distance to an object using ultrasonic waves."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Temperature Sensor"})}),(0,r.jsx)(n.td,{children:"Monitors ambient temperature for environmental control."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Sound Sensor"})}),(0,r.jsx)(n.td,{children:"Detects sound levels in the environment, useful for sound-sensitive applications."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Humidity Sensor"})}),(0,r.jsx)(n.td,{children:"Measures the humidity level in the air, aiding climate control."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Pressure Sensor"})}),(0,r.jsx)(n.td,{children:"Monitors atmospheric pressure, often used in weather stations."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Linear Encoder"})}),(0,r.jsx)(n.td,{children:"Tracks linear movement and position changes, useful for precise measurements."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Rotary Encoder"})}),(0,r.jsx)(n.td,{children:"Measures rotational position and movement, ideal for robotics and automation."})]})]})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"raw-value",children:"Raw Value"}),"\n",(0,r.jsx)(n.p,{children:"The Raw Value displays the unprocessed data received from the sensor. This data is typically represented as a raw number, often in the form of a floating-point value."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"minimum-maximum-and-normalised-properties",children:"Minimum, Maximum, and Normalised Properties"}),"\n",(0,r.jsx)(n.p,{children:"These settings define the range for incoming sensor values. The system normalises the raw value within this specified range, producing a normalised value that falls between 0 and 1."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"multiplier",children:"Multiplier"}),"\n",(0,r.jsx)(n.p,{children:"The Multiplier adjusts the normalised value by a specified factor, allowing for scaling of the input to a suitable range for the parameter it controls."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"offset",children:"Offset"}),"\n",(0,r.jsx)(n.p,{children:"The Offset applies an additional fixed value to the scaled input, allowing for fine-tuning of its range or establishing a baseline value."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"decimal-places",children:"Decimal Places"}),"\n",(0,r.jsx)(n.p,{children:"The Decimal Places box allows for determining the precision of the final value by specifying the number of decimal places."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"final-value",children:"Final Value"}),"\n",(0,r.jsx)(n.p,{children:"This section displays the current reading from the sensor."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"parameter",children:"Parameter"}),"\n",(0,r.jsx)(n.p,{children:"The Parameter dropdown allows for selecting the action to be performed by the sensor when triggered. All parameters from the Parameters and Effects pages are available for selection in this dropdown."}),"\n",(0,r.jsx)(n.hr,{})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},5599:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/image1-fbbd02ef521b5980338810aa49fbb93c.jpeg"},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>l});var r=s(6540);const i={},t=r.createContext(i);function a(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);