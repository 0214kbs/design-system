"use strict";(self.webpackChunkdesign_system=self.webpackChunkdesign_system||[]).push([[477],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty})},"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}__webpack_require__.d(__webpack_exports__,{Z:()=>_taggedTemplateLiteral})},"./src/components/dropdown/Dropdown.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BasicDropdown:()=>BasicDropdown,NotShowSelectedDropdown:()=>NotShowSelectedDropdown,ScrollDropdown:()=>ScrollDropdown,default:()=>Dropdown_stories});var _path,defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),Button=__webpack_require__("./src/components/button/Button.tsx"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const check=function SvgCheck(props){return react.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",width:14,height:14,viewBox:"0 0 24 24"},props),_path||(_path=react.createElement("path",{d:"M20.293 5.293 9 16.586l-4.293-4.293-1.414 1.414L9 19.414 21.707 6.707l-1.414-1.414z"})))};var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,StyledDropdownContainer=styled_components_browser_esm.ZP.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  ","\n  border: 1px solid ",";\n  border-radius: 4px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n"])),(function(props){return props.hassizelimit&&(0,styled_components_browser_esm.iv)(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n      max-height: 100px;\n      overflow-y: auto;\n      &::-webkit-scrollbar {\n        display: none;\n      }\n      "])))}),(function(props){return props.theme.colors.gray})),StyledDropdownList=styled_components_browser_esm.ZP.ul(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.Z)(["\n  background-color: #ffffff;\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n\n"]))),StyledDropdownItem=styled_components_browser_esm.ZP.li(_templateObject4||(_templateObject4=(0,taggedTemplateLiteral.Z)(["\n  padding: 8px 12px;\n  cursor: pointer;\n  transition: background-color 0.8s ease;\n  font-size: 14px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  \n  &:hover {\n    background-color: #f0f0f0;\n  }\n  "]))),StyledText=styled_components_browser_esm.ZP.span(_templateObject5||(_templateObject5=(0,taggedTemplateLiteral.Z)(["\ntext-align: left;\n  \n"]))),StyledCheckImage=(0,styled_components_browser_esm.ZP)(check)(_templateObject6||(_templateObject6=(0,taggedTemplateLiteral.Z)(["\n  width: 14px;\n"]))),console=__webpack_require__("./node_modules/console-browserify/index.js"),__jsx=react.createElement,Dropdown=function Dropdown(props){var options=props.options,headercolor=props.headercolor,isShowSelected=props.isshowselected,_useState=(0,react.useState)(!1),isDropdownOpen=_useState[0],setIsDropdownOpen=_useState[1],_useState2=(0,react.useState)("open"),dropdownheader=_useState2[0],setDropdownHeader=_useState2[1],_useState3=(0,react.useState)(""),checked=_useState3[0],setChecked=_useState3[1];return __jsx(react.Fragment,null,__jsx(Button.Z,{bgcolor:headercolor,onClick:function handleDropdownState(){setIsDropdownOpen(!isDropdownOpen)},label:dropdownheader}),isDropdownOpen&&__jsx(StyledDropdownContainer,props,__jsx(StyledDropdownList,props,options.map((function(option){return __jsx(StyledDropdownItem,{onClick:function onClick(){return function handleOptionClick(value){isShowSelected&&setDropdownHeader(value),console.log(value),setIsDropdownOpen(!1),setChecked(value)}(option)},key:Math.random()},__jsx(StyledText,null,option),checked===option&&__jsx(StyledCheckImage,null))})))))};Dropdown.__docgenInfo={description:"",methods:[],displayName:"Dropdown"};const dropdown_Dropdown=Dropdown;try{Dropdown.displayName="Dropdown",Dropdown.__docgenInfo={description:"",displayName:"Dropdown",props:{options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"string[]"}},headercolor:{defaultValue:null,description:"",name:"headercolor",required:!1,type:{name:"string"}},isshowselected:{defaultValue:null,description:"",name:"isshowselected",required:!0,type:{name:"boolean"}},hassizelimit:{defaultValue:null,description:"",name:"hassizelimit",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/dropdown/Dropdown.tsx#Dropdown"]={docgenInfo:Dropdown.__docgenInfo,name:"Dropdown",path:"src/components/dropdown/Dropdown.tsx#Dropdown"})}catch(__react_docgen_typescript_loader_error){}var _BasicDropdown$parame,_BasicDropdown$parame2,_NotShowSelectedDropd,_NotShowSelectedDropd2,_ScrollDropdown$param,_ScrollDropdown$param2;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const Dropdown_stories={title:"Components/Dropdown",component:dropdown_Dropdown,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{options:{description:"Dropdown 내부 목록 옵션들"},headercolor:{defaultValue:{summary:"Button's bgcolor"},description:"Dropdown header 색깔"},isshowselected:{defaultValue:{summary:"true"},description:"Dropdown header에 선택한 옵션 노출 여부"},hassizelimit:{defaultValue:{summary:"false"},description:"Drodown 목록 크기 제한"}}};var BasicDropdown={args:{options:["child 1","child 2","child 3"],isshowselected:!0,hassizelimit:!1}},NotShowSelectedDropdown={args:{options:["child 1","child 2","child 3"],isshowselected:!1,hassizelimit:!1}},ScrollDropdown={args:{options:["child 1","child 2","child 3","child 4","child 5","child 6"],isshowselected:!0,hassizelimit:!0}};BasicDropdown.parameters=_objectSpread(_objectSpread({},BasicDropdown.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_BasicDropdown$parame=BasicDropdown.parameters)||void 0===_BasicDropdown$parame?void 0:_BasicDropdown$parame.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    options: ["child 1", "child 2", "child 3"],\n    isshowselected: true,\n    hassizelimit: false\n  }\n}'},null===(_BasicDropdown$parame2=BasicDropdown.parameters)||void 0===_BasicDropdown$parame2||null===(_BasicDropdown$parame2=_BasicDropdown$parame2.docs)||void 0===_BasicDropdown$parame2?void 0:_BasicDropdown$parame2.source)})}),NotShowSelectedDropdown.parameters=_objectSpread(_objectSpread({},NotShowSelectedDropdown.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_NotShowSelectedDropd=NotShowSelectedDropdown.parameters)||void 0===_NotShowSelectedDropd?void 0:_NotShowSelectedDropd.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    options: ["child 1", "child 2", "child 3"],\n    isshowselected: false,\n    hassizelimit: false\n  }\n}'},null===(_NotShowSelectedDropd2=NotShowSelectedDropdown.parameters)||void 0===_NotShowSelectedDropd2||null===(_NotShowSelectedDropd2=_NotShowSelectedDropd2.docs)||void 0===_NotShowSelectedDropd2?void 0:_NotShowSelectedDropd2.source)})}),ScrollDropdown.parameters=_objectSpread(_objectSpread({},ScrollDropdown.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_ScrollDropdown$param=ScrollDropdown.parameters)||void 0===_ScrollDropdown$param?void 0:_ScrollDropdown$param.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    options: ["child 1", "child 2", "child 3", "child 4", "child 5", "child 6"],\n    isshowselected: true,\n    hassizelimit: true\n  }\n}'},null===(_ScrollDropdown$param2=ScrollDropdown.parameters)||void 0===_ScrollDropdown$param2||null===(_ScrollDropdown$param2=_ScrollDropdown$param2.docs)||void 0===_ScrollDropdown$param2?void 0:_ScrollDropdown$param2.source)})})},"./src/components/button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>button_Button});var _templateObject,_templateObject2,react=__webpack_require__("./node_modules/react/index.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),StyledButton=styled_components_browser_esm.ZP.button.attrs((function(props){return{}}))(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  ",";\n"])),(function(props){var middle=props.theme.colors.middle,gray=props.theme.colors.gray,black=props.theme.colors.black,use=props.use||"basic",bgcolor=props.bgcolor||middle,color=props.color||"white",width=props.width||"100px",UseStyles={basic:"\n        background-color: ".concat(bgcolor,";\n        color: ").concat(color,";\n\n        &:hover{\n          opacity:0.5;\n        }\n\n      "),secondary:"\n        background-color:white;\n        border: 2px solid ".concat(bgcolor,";\n        color: ").concat(black,";\n        &:hover{\n          opacity:0.5;\n          background-color: #dbdada;\n        }\n      "),warn:"\n        background-color: #f4fd6c;\n        color: ".concat(black,";\n      "),error:"\n        background-color: #ff2020c0;\n        color: white;\n      ",disable:"\n        background-color: ".concat(gray,";\n        color: ").concat(black,";\n        cursor: not-allowed;\n      ")};return(0,styled_components_browser_esm.iv)(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n      cursor: pointer;\n      border: 0px;\n      border-radius: 5px;\n      line-height: 1;\n      padding: 10px;\n      width : ",";\n      ",";\n      "])),width,UseStyles[use])})),__jsx=react.createElement,Button=function Button(props){return __jsx(StyledButton,props,props.label||"Button")};Button.displayName="Button",Button.__docgenInfo={description:"",methods:[],displayName:"Button"};const button_Button=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},use:{defaultValue:null,description:"",name:"use",required:!1,type:{name:"string"}},bgcolor:{defaultValue:null,description:"",name:"bgcolor",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e: any) => any)"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"submit"'},{value:'"reset"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}}}]);