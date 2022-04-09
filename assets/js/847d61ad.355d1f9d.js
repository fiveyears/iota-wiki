"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[91740],{63375:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),i=["components"],s={description:"Solidity smart contract ERC20.",image:"/img/logo/WASP_logo_dark.png",keywords:["smart contracts","EVM","Solidity","ERC20","eip-20","token creation","mint tokens","how to"]},l="ERC20 Example",c={unversionedId:"guide/evm/examples/ERC20",id:"guide/evm/examples/ERC20",title:"ERC20 Example",description:"Solidity smart contract ERC20.",source:"@site/external/wasp/documentation/docs/guide/evm/examples/ERC20.md",sourceDirName:"guide/evm/examples",slug:"/guide/evm/examples/ERC20",permalink:"/smart-contracts/guide/evm/examples/ERC20",editUrl:"https://github.com/iotaledger/wasp/edit/develop/external/wasp/documentation/docs/guide/evm/examples/ERC20.md",tags:[],version:"current",frontMatter:{description:"Solidity smart contract ERC20.",image:"/img/logo/WASP_logo_dark.png",keywords:["smart contracts","EVM","Solidity","ERC20","eip-20","token creation","mint tokens","how to"]},sidebar:"tutorialSidebar",previous:{title:"Solidity Smart Contract Example",permalink:"/smart-contracts/guide/evm/examples/introduction"},next:{title:"ERC721 Example",permalink:"/smart-contracts/guide/evm/examples/ERC721"}},p={},u=[{value:"1. Create a Smart Contract",id:"1-create-a-smart-contract",level:2},{value:"2. Compile",id:"2-compile",level:2},{value:"3. Deploy",id:"3-deploy",level:2},{value:"4. Add Your Token to MetaMask",id:"4-add-your-token-to-metamask",level:2},{value:"5. Have some Fun!",id:"5-have-some-fun",level:2}],m={toc:u};function d(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"erc20-example"},"ERC20 Example"),(0,o.kt)("p",null,"ERC20 is a standard for fungible tokens and is defined in the ",(0,o.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-20"},"EIP-20 Token Standard")," by Ethereum."),(0,o.kt)("p",null,"With the ERC20 standard you can create your own tokens and transfer them in the EVM on IOTA Smart Contracts without fees."),(0,o.kt)("p",null,"You can use the ",(0,o.kt)("a",{parentName:"p",href:"https://remix.ethereum.org/"},"Remix IDE")," to deploy any regular Solidity Smart Contract."),(0,o.kt)("p",null,"Set the environment to ",(0,o.kt)("inlineCode",{parentName:"p"},"Injected Web3"),", and connect Remix with your MetaMask wallet.\nRead this ",(0,o.kt)("a",{parentName:"p",href:"/smart-contracts/guide/chains_and_nodes/testnet#interact-with-evm"},"how to connect your MetaMask with the public Testnet."),"."),(0,o.kt)("h2",{id:"1-create-a-smart-contract"},"1. Create a Smart Contract"),(0,o.kt)("p",null,"Create a new Solidity file, for example ",(0,o.kt)("inlineCode",{parentName:"p"},"ERC20.sol")," in the contracts folder of your ",(0,o.kt)("a",{parentName:"p",href:"https://remix.ethereum.org/"},"Remix IDE")," and add this code snippet:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},'pragma solidity ^0.8.7;\n\nimport "@openzeppelin/contracts/token/ERC20/ERC20.sol";\n\ncontract ExampleERC20Token is ERC20 {\n    constructor() ERC20("ExampleERC20Token", "EET") {\n        _mint(msg.sender, 1000000 * 10 ** decimals());\n    }\n}\n')),(0,o.kt)("p",null,"This imports all functions from the OpenZeppelin smart contract and creates a new ERC20 token with your name and Symbol. OpenZeppelin provides many audited smart contracts and is a good point to start and learn."),(0,o.kt)("p",null,"You can change the token name ",(0,o.kt)("inlineCode",{parentName:"p"},"ExampleERC20Token")," and the token symbol ",(0,o.kt)("inlineCode",{parentName:"p"},"EET"),"."),(0,o.kt)("h2",{id:"2-compile"},"2. Compile"),(0,o.kt)("p",null,'Go to the second tab and compile your smart contract with the "Compile ERC20.sol" button.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Compile ERC20.sol",src:n(84011).Z,width:"1187",height:"682"})),(0,o.kt)("h2",{id:"3-deploy"},"3. Deploy"),(0,o.kt)("p",null,"Go to the next tab and select ",(0,o.kt)("inlineCode",{parentName:"p"},"Injected Web3")," as your environment. Ensure that your MetaMask is installed and setup correctly."),(0,o.kt)("p",null,"Choose your \xb4ExampleERC20Token\xb4 smart contract in the contract dropdown."),(0,o.kt)("p",null,'Press the "Deploy" button - then your MetaMask will popup and you need to accept the deployment. '),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Deploy ERC20.sol",src:n(89112).Z,width:"1204",height:"793"})),(0,o.kt)("p",null,"Your MetaMask browser extension will open automatically - press confirm.\n",(0,o.kt)("img",{alt:"Confirm in MetaMask",src:n(11363).Z,width:"405",height:"614"})),(0,o.kt)("h2",{id:"4-add-your-token-to-metamask"},"4. Add Your Token to MetaMask"),(0,o.kt)("p",null,"Get the ",(0,o.kt)("inlineCode",{parentName:"p"},"contract address")," from the transaction after successful deployment. You can click on the latest transaction in your MetaMask Activity tab. If your MetaMask is configured correctly, the ",(0,o.kt)("a",{parentName:"p",href:"https://explorer.wasp.sc.iota.org/"},"IOTA EVM Explorer")," opens the transaction. Copy the contract address and import your token into MetaMask."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Copy contract address",src:n(87796).Z,width:"1168",height:"737"})),(0,o.kt)("h2",{id:"5-have-some-fun"},"5. Have some Fun!"),(0,o.kt)("p",null,"Now you should see your token in MetaMask - send them to your friends without any fees or gas costs."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Copy contract address",src:n(74533).Z,width:"351",height:"595"})),(0,o.kt)("p",null,"You also can ask in the ",(0,o.kt)("a",{parentName:"p",href:"https://discord.iota.org"},"Discord Chat Server")," to send them around and discover what the community is building on IOTA Smart Contracts."))}d.isMDXComponent=!0},84011:function(e,t,n){t.Z=n.p+"assets/images/compile-621c7bc25456ec53a8c4f260d303a67e.png"},11363:function(e,t,n){t.Z=n.p+"assets/images/deploy-metamask-fbebb3ebbd7826bc3ffcce6045229305.png"},89112:function(e,t,n){t.Z=n.p+"assets/images/deploy-02062e5b46995f16d172365dd1c06499.png"},74533:function(e,t,n){t.Z=n.p+"assets/images/erc20-balance-9b02bef852bb9198c5a73bcfcc9863fc.png"},87796:function(e,t,n){t.Z=n.p+"assets/images/explorer-contract-address-656644611d0074020963ee130fe0d8ae.png"},3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);