(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{159:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},92:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(159)),i={},c={unversionedId:"framework/datatesting/data_driven_testing_4.2.0",id:"framework/datatesting/data_driven_testing_4.2.0",isDocsHomePage:!1,title:"data_driven_testing_4.2.0",description:"To test your code with different parameter combinations, you can use a table of values as input for your test",source:"@site/docs/framework/datatesting/data_driven_testing_4.2.0.md",slug:"/framework/datatesting/data_driven_testing_4.2.0",permalink:"/docs/framework/datatesting/data_driven_testing_4.2.0",editUrl:"https://github.com/kotest/kotest/blob/master/documentation/docs/framework/datatesting/data_driven_testing_4.2.0.md",version:"current"},l=[],s={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"To test your code with different parameter combinations, you can use a table of values as input for your test\ncases. This is called ",Object(o.b)("em",{parentName:"p"},"data driven testing")," also known as ",Object(o.b)("em",{parentName:"p"},"table driven testing"),"."),Object(o.b)("p",null,"Invoke the ",Object(o.b)("inlineCode",{parentName:"p"},"forAll")," or ",Object(o.b)("inlineCode",{parentName:"p"},"forNone")," function, passing in one or more ",Object(o.b)("inlineCode",{parentName:"p"},"row")," objects, where each row object contains\nthe values to be used be a single invocation of the test. After the ",Object(o.b)("inlineCode",{parentName:"p"},"forAll")," or ",Object(o.b)("inlineCode",{parentName:"p"},"forNone")," function, setup your\nactual test function to accept the values of each row as parameters."),Object(o.b)("p",null,"The row object accepts any set of types, and the type checker will ensure your types are consistent with the parameter\ntypes in the test function."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-kotlin"}),'"square roots" {\n  forAll(\n      row(2, 4),\n      row(3, 9),\n      row(4, 16),\n      row(5, 25)\n  ) { root, square ->\n    root * root shouldBe square\n  }\n}\n')),Object(o.b)("p",null,"In the above example, the ",Object(o.b)("inlineCode",{parentName:"p"},"root")," and ",Object(o.b)("inlineCode",{parentName:"p"},"square")," parameters are automatically inferred to be integers."),Object(o.b)("p",null,"If there is an error for any particular input row, then the test will fail and KotlinTest will automatically\nmatch up each input to the corresponding parameter names. For example, if we change the previous example to include the row ",Object(o.b)("inlineCode",{parentName:"p"},"row(5,55)"),"\nthen the test will be marked as a failure with the following error message."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"Test failed for (root, 5), (square, 55) with error expected: 55 but was: 25\n")),Object(o.b)("p",null,"Table testing can be used within any spec. Here is an example using ",Object(o.b)("inlineCode",{parentName:"p"},"StringSpec"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-kotlin"}),'class StringSpecExample : StringSpec({\n  "string concat" {\n    forAll(\n      row("a", "b", "c", "abc"),\n      row("hel", "lo wo", "rld", "hello world"),\n      row("", "z", "", "z")\n    ) { a, b, c, d ->\n      a + b + c shouldBe d\n    }\n  }\n})\n')),Object(o.b)("p",null,"It may be desirable to have each row of data parameters as an individual test. To generating such individual tests follow a similar pattern for each spec style. An example in the ",Object(o.b)("inlineCode",{parentName:"p"},"FreeSpec")," is below."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-kotlin"}),'class IntegerMathSpec : FreeSpec({\n    "Addition" - {\n        listOf(\n            row("1 + 0", 1) { 1 + 0 },\n            row("1 + 1", 2) { 1 + 1 }\n        ).map { (description: String, expected: Int, math: () -> Int) ->\n            description {\n                math() shouldBe expected\n            }\n        }\n    }\n    // ...\n    "Complex Math" - {\n        listOf(\n            row("8/2(2+2)", 16) { 8 / 2 * (2 + 2) },\n            row("5/5 + 1*1 + 3-2", 3) { 5 / 5 + 1 * 1 + 3 - 2 }\n        ).map { (description: String, expected: Int, math: () -> Int) ->\n            description {\n                math() shouldBe expected\n            }\n        }\n    }\n})\n')),Object(o.b)("p",null,"Produces 4 tests and 2 parent descriptions:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-txt"}),"IntegerMathSpec\n  \u2713 Addition\n    \u2713 1 + 0\n    \u2713 1 + 1\n  \u2713 Complex Math\n    \u2713 8/2(2+2)\n    \u2713 5/5 + 1*1 + 3-2\n")))}p.isMDXComponent=!0}}]);