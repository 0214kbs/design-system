"use strict";(self.webpackChunkdesign_system=self.webpackChunkdesign_system||[]).push([[677],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty})},"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}__webpack_require__.d(__webpack_exports__,{Z:()=>_taggedTemplateLiteral})},"./src/components/input/Input.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BasicInput:()=>BasicInput,DisableInput:()=>DisableInput,ErrorInput:()=>ErrorInput,SuccessInput:()=>SuccessInput,WarnInput:()=>WarnInput,default:()=>Input_stories});var _templateObject,_templateObject2,defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),StyledInput=styled_components_browser_esm.ZP.input.attrs((function(props){return{placeholder:props.placeholder,name:props.name||"Basic Input"}}))(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n","\n\n"])),(function(props){var use=props.use||"basic";return(0,styled_components_browser_esm.iv)(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n      border-radius: 5px;\n      padding: 5px;\n      background-color: white;\n     ","\n      "])),{basic:"\n        border: solid 1.3px black;\n        &:focus {\n          outline: none;\n          border: solid 2px black;\n        } \n      ",warn:"\n        border: solid 1.3px #ecff3c;\n        &:focus {\n          outline: none;\n          border: solid 2px #ecff3c;\n        } \n      ",success:"\n        border: solid 1.3px #33ef04;\n        &:focus {\n          outline: none;\n          border: solid 2px #33ef04;\n        } \n      ",error:"\n        border: solid 1.3px #ff0000;\n        &:focus {\n          outline: none;\n          border: solid 2px #ff0000;\n        } \n      ",disable:"\n        border: solid 1.3px #a1a1a1;\n        background-color: #c3c3c3;\n      "}[use])})),__jsx=react.createElement,Input=function Input(props){return __jsx(StyledInput,props)};Input.displayName="Input",Input.__docgenInfo={description:"",methods:[],displayName:"Input"};const input_Input=Input;try{Input.displayName="Input",Input.__docgenInfo={description:"",displayName:"Input",props:{placeholder:{defaultValue:null,description:"",name:"placeholder",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},use:{defaultValue:null,description:"",name:"use",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/Input.tsx#Input"]={docgenInfo:Input.__docgenInfo,name:"Input",path:"src/components/input/Input.tsx#Input"})}catch(__react_docgen_typescript_loader_error){}var _BasicInput$parameter,_BasicInput$parameter2,_WarnInput$parameters,_WarnInput$parameters2,_ErrorInput$parameter,_ErrorInput$parameter2,_SuccessInput$paramet,_SuccessInput$paramet2,_DisableInput$paramet,_DisableInput$paramet2;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const Input_stories={title:"Components/Input",component:input_Input,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{placeholder:{description:"입력 필드에 표시되는 텍스트"},name:{defaultValue:{summary:"Basic Input"},description:"입력 필드의 이름(식별자)"},use:{options:["basic","error","warn","success","disable"],defaultValue:{summary:"basic"},control:{type:"radio"},description:"각 상황에 따라 표시할 유형"}},args:{use:"basic",placeholder:"Input box"}};var BasicInput={args:{use:"basic"}},WarnInput={args:{use:"warn"}},ErrorInput={args:{use:"error"}},SuccessInput={args:{use:"success"}},DisableInput={args:{use:"disable"}};BasicInput.parameters=_objectSpread(_objectSpread({},BasicInput.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_BasicInput$parameter=BasicInput.parameters)||void 0===_BasicInput$parameter?void 0:_BasicInput$parameter.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    use: "basic"\n  }\n}'},null===(_BasicInput$parameter2=BasicInput.parameters)||void 0===_BasicInput$parameter2||null===(_BasicInput$parameter2=_BasicInput$parameter2.docs)||void 0===_BasicInput$parameter2?void 0:_BasicInput$parameter2.source)})}),WarnInput.parameters=_objectSpread(_objectSpread({},WarnInput.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_WarnInput$parameters=WarnInput.parameters)||void 0===_WarnInput$parameters?void 0:_WarnInput$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    use: "warn"\n  }\n}'},null===(_WarnInput$parameters2=WarnInput.parameters)||void 0===_WarnInput$parameters2||null===(_WarnInput$parameters2=_WarnInput$parameters2.docs)||void 0===_WarnInput$parameters2?void 0:_WarnInput$parameters2.source)})}),ErrorInput.parameters=_objectSpread(_objectSpread({},ErrorInput.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_ErrorInput$parameter=ErrorInput.parameters)||void 0===_ErrorInput$parameter?void 0:_ErrorInput$parameter.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    use: "error"\n  }\n}'},null===(_ErrorInput$parameter2=ErrorInput.parameters)||void 0===_ErrorInput$parameter2||null===(_ErrorInput$parameter2=_ErrorInput$parameter2.docs)||void 0===_ErrorInput$parameter2?void 0:_ErrorInput$parameter2.source)})}),SuccessInput.parameters=_objectSpread(_objectSpread({},SuccessInput.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_SuccessInput$paramet=SuccessInput.parameters)||void 0===_SuccessInput$paramet?void 0:_SuccessInput$paramet.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    use: "success"\n  }\n}'},null===(_SuccessInput$paramet2=SuccessInput.parameters)||void 0===_SuccessInput$paramet2||null===(_SuccessInput$paramet2=_SuccessInput$paramet2.docs)||void 0===_SuccessInput$paramet2?void 0:_SuccessInput$paramet2.source)})}),DisableInput.parameters=_objectSpread(_objectSpread({},DisableInput.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_DisableInput$paramet=DisableInput.parameters)||void 0===_DisableInput$paramet?void 0:_DisableInput$paramet.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    use: "disable"\n  }\n}'},null===(_DisableInput$paramet2=DisableInput.parameters)||void 0===_DisableInput$paramet2||null===(_DisableInput$paramet2=_DisableInput$paramet2.docs)||void 0===_DisableInput$paramet2?void 0:_DisableInput$paramet2.source)})})}}]);