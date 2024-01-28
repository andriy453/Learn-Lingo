import{u as r,h as p,j as e,a as m,b as d,r as g,g as y,c as j}from"./index-499ab82a.js";import{s as v,a as k,b as w,c as C,C as T,T as N,d as x,e as $,n as b,B as L}from"./TeachersFilter-aff08af0.js";const M="#4fa94d",S={"aria-busy":!0,role:"progressbar"},F=r.div`
  display: ${a=>a.$visible?"flex":"none"};
`,B="http://www.w3.org/2000/svg",s=242.776657104492,E=1.6,z=p`
12.5% {
  stroke-dasharray: ${s*.14}px, ${s}px;
  stroke-dashoffset: -${s*.11}px;
}
43.75% {
  stroke-dasharray: ${s*.35}px, ${s}px;
  stroke-dashoffset: -${s*.35}px;
}
100% {
  stroke-dasharray: ${s*.01}px, ${s}px;
  stroke-dashoffset: -${s*.99}px;
}
`;r.path`
  stroke-dasharray: ${s*.01}px, ${s};
  stroke-dashoffset: 0;
  animation: ${z} ${E}s linear infinite;
`;const D=p`
to {
   transform: rotate(360deg);
 }
`;r.svg`
  animation: ${D} 0.75s steps(12, end) infinite;
  animation-duration: 0.75s;
`;r.polyline`
  stroke-width: ${a=>a.width}px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`;const H=({height:a=80,width:o=80,radius:t=9,color:n=M,ariaLabel:l="three-dots-loading",wrapperStyle:i,wrapperClass:c,visible:h=!0})=>e.jsx(F,{style:i,$visible:h,className:c,"data-testid":"three-dots-loading","aria-label":l,...S,children:e.jsxs("svg",{width:o,height:a,viewBox:"0 0 120 30",xmlns:B,fill:n,"data-testid":"three-dots-svg",children:[e.jsxs("circle",{cx:"15",cy:"15",r:Number(t)+6,children:[e.jsx("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),e.jsx("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})]}),e.jsxs("circle",{cx:"60",cy:"15",r:t,attributeName:"fill-opacity",from:"1",to:"0.3",children:[e.jsx("animate",{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}),e.jsx("animate",{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"})]}),e.jsxs("circle",{cx:"105",cy:"15",r:Number(t)+6,children:[e.jsx("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),e.jsx("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})]})]})}),P=p`
to {
   stroke-dashoffset: 136;
 }
`;r.polygon`
  stroke-dasharray: 17;
  animation: ${P} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;r.svg`
  transform-origin: 50% 65%;
`;function R({color:a}){const o=m(),t=d(v),n=d(k),l=d(w),i=d(C),[c,h]=g.useState(""),u=()=>{o(y(n+4)),o(j())};return console.log(t==null?void 0:t.length,n),e.jsx(e.Fragment,{children:e.jsxs(T,{children:[e.jsx(N,{color:a,Level:c,setLevel:h,Teachers:t}),i?e.jsxs(x,{children:[i&&(i==null?void 0:i.map(f=>e.jsx($,{color:a,teacher:f,Level:c},b()))),i.length===0?e.jsx("div",{children:"Teacher not faund"}):void 0]}):e.jsxs(e.Fragment,{children:[e.jsx(x,{children:t&&(t==null?void 0:t.map(f=>e.jsx($,{color:a,teacher:f},b())))}),(t==null?void 0:t.length)>n&&(l?e.jsx(H,{height:"60",width:"80",radius:"9",color:"#000000",ariaLabel:"three-dots-loading",wrapperStyle:{justifyContent:"center"},visible:!0}):e.jsx(L,{color:a,onClick:u,children:"Load more"}))]})]})})}const G=({color:a})=>e.jsx(R,{color:a});export{G as default};
