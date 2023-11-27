import{s as i,j as s}from"./index-e91a5d2e.js";const o=i.main`
  outline: 1px solid yellow;
  padding: 70px 70px;
  &.homePage {
    display: flex;
    flex-direction: column;
    gap: 70px;
  }
`,l=i.section`
  outline: 1px solid green;
  display: flex;
  flex-direction: column;

  &.skills{
    flex-direction: column;
  }

  @media (min-width: 744px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`,n=i.div`
  outline: 1px solid red;
  width: 100%;
  max-width: 298px;

  @media (min-width: 744px) {
    max-width: 500px;
  }
`,a=i.div`
  outline: 1px solid red;
  position: relative;
  width: 100%;
  max-width: 298px;
  height: 295px;
  display: flex;

  @media (min-width: 744px) {
    max-width: 412px;
    height: 495px;
  }
`,g=i.div`
  width: 320px;
  height: 390px;
  margin: auto;
  overflow: hidden;
  border-radius: 28px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* object-fit: contain; */
    /* object-position: 0% 0%; */
  }
`,e=i.div`
  position: absolute;
  &.zigZag {
    top: 30px;
    width: 38px;
    height: 98px;
  }
  &.plus {
    left: 130px;
    width: 27px;
    height: 28px;
  }
  &.cube {    
    right: 0px;
    width: 41px;
    height: 41px;
  }
  &.ellipse {    
    left: 20px;
    bottom: 20px;
    width: 22px;
    height: 22px;
  }
  &.circles {    
    right: 0px;
    bottom: 0px;
    width: 120px;
    height: 76px;
  }  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,c="/portfolio/assets/foto-portfolioW-ea9265ab.webp",m=()=>s.jsxs(l,{children:[s.jsxs(n,{children:[s.jsx("h1",{children:"Hi👋, I’m a full-stack developer"}),s.jsx("h3",{children:"I’m Konstantin Goncharenko, a developer dedicated to making the world a better place one line of code at a time."}),s.jsx("a",{href:"mailto:goncharenko.k.mail@gmail.com",children:"Contact me"})]}),s.jsxs(a,{children:[s.jsx(g,{children:s.jsx("img",{src:c,alt:"foto Goncharenko"})}),s.jsx(e,{className:"zigZag",children:s.jsx("img",{src:"../../../../imgs/zigzags.svg",alt:"ZigZag"})}),s.jsx(e,{className:"plus",children:s.jsx("img",{src:"../../../../imgs/plus.svg",alt:"plus"})}),s.jsx(e,{className:"cube",children:s.jsx("img",{src:"../../../../imgs/cube.svg",alt:"cube"})}),s.jsx(e,{className:"ellipse",children:s.jsx("img",{src:"../../../../imgs/Ellipse 11.svg",alt:"ellipse"})}),s.jsx(e,{className:"circles",children:s.jsx("img",{src:"../../../../imgs/circles.svg",alt:"circles"})})]})]}),x=[{name:"HTML 5",svg:"../../../imgs/skills/html-5.svg"},{name:"CSS 3",svg:"../../../imgs/skills/css3.svg"},{name:"Node.js",svg:"../../../imgs/skills/nodejs.svg"},{name:"React",svg:"../../../imgs/skills/react.svg"},{name:"JavaScript",svg:"../../../imgs/skills/js-official.svg"},{name:"Redux",svg:"../../../imgs/skills/redux.svg"},{name:"ReactNative",svg:"../../../imgs/skills/brand-react-native.svg"},{name:"Vite",svg:"../../../imgs/skills/vitejs.svg"},{name:"NextJS",svg:"../../../imgs/skills/nextjs.svg"},{name:"JSON",svg:"../../../imgs/skills/json.svg"},{name:"MongoDB",svg:"../../../imgs/skills/mongodb.svg"},{name:"Postman",svg:"../../../imgs/skills/postman.svg"},{name:"MaterialUI",svg:"../../../imgs/skills/materialui.svg"},{name:"StyledComp-s",svg:"../../../imgs/skills/styledcomponents.svg"},{name:"GitHub",svg:"../../../imgs/skills/github.svg"},{name:"Axios",svg:"../../../imgs/skills/axios.svg"},{name:"ResponsiveWeb",svg:"../../../imgs/skills/responsive.svg"},{name:"VSCode",svg:"../../../imgs/skills/vscode.svg"},{name:"Bootstrap",svg:"../../../imgs/skills/bootstrap.svg"},{name:"Figma",svg:"../../../imgs/skills/figma.svg"}],r=i.h2`
  margin: auto;
  color: var(--text-color-red);
  margin-bottom: 30px;
  font-size: 20px;
  font-weight: bold;
`,d=i.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`,p=i.div`
  outline: 1px solid green;
  width: 100%;
  max-width: 500px;
  p {
    color: var(--text-color-navy);
    margin-bottom: 40px;
  }
`,h=i.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;  
  row-gap: 20px;
  column-gap: 13px;
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    img {
      width: 50px;
      height: 50px;
    }
    p {
      margin-bottom: 0px;
      font-size: 14px;
      
    }
  }
`,v=i.div`
  outline: 1px solid green;
  width: 511px;
  height: 414px;
`,j=()=>s.jsxs(l,{className:"skills",id:"skills",children:[s.jsx(r,{children:"Skills"}),s.jsxs(d,{children:[s.jsxs(p,{children:[s.jsx("p",{children:"I have an experience in the following web technologies:"}),s.jsx(h,{children:x.map(t=>s.jsxs("li",{children:[s.jsx("div",{children:s.jsx("img",{src:t.svg})}),s.jsx("p",{children:t.name})]},t.name))})]}),s.jsx(v,{children:s.jsx("img",{src:"../../../../imgs/skills/skills-svg.svg",alt:"skills image"})})]})]}),u=()=>s.jsx(l,{id:"projects",children:"SectionProjects"}),k=()=>s.jsxs(o,{className:"homePage",children:[s.jsx(m,{}),s.jsx(j,{}),s.jsx(u,{})]});export{k as default};
