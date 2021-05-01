(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{14:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),n=a(6),r=a.n(n),o=(a(4),a(5)),i=a(2),p=a.p+"static/media/headerlogo.bbe2a6ea.svg",l=a(0);var u=function(){return Object(l.jsx)("header",{className:"header page__container",children:Object(l.jsx)("img",{className:"header__logo",src:p,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u0441\u0430\u0439\u0442\u0430 \u0441 \u043d\u0430\u0434\u043f\u0438\u0441\u044c\u044e \u041c\u0435\u0441\u0442\u043e \u0420\u043e\u0441\u0441\u0438\u044f \u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u0438\u043c\u0438 \u0431\u0443\u043a\u0432\u0430\u043c\u0438"})})},_=a(7),d=a(8),h=new(function(){function e(t){var a=t.baseUrl,s=t.groupId,c=t.token;Object(_.a)(this,e),this._baseUrl=a,this._groupId=s,this._token=c}return Object(d.a)(e,[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status))}},{key:"getUser",value:function(){return fetch("".concat(this._baseUrl,"/").concat(this._groupId,"/users/me"),{headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"getCards",value:function(){return fetch("".concat(this._baseUrl,"/").concat(this._groupId,"/cards"),{headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"patchUserInfo",value:function(e){return fetch("".concat(this._baseUrl,"/").concat(this._groupId,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,about:e.about})}).then(this._checkResponse)}},{key:"postCard",value:function(e){return fetch("".concat(this._baseUrl,"/").concat(this._groupId,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,link:e.link})}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/").concat(this._groupId,"/cards/").concat(e._id),{method:"DELETE",headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"likeCard",value:function(e){return fetch("".concat(this._baseUrl,"/").concat(this._groupId,"/cards/likes/").concat(e._id),{method:"PUT",headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"dislikeCard",value:function(e){return fetch("".concat(this._baseUrl,"/").concat(this._groupId,"/cards/likes/").concat(e._id),{method:"DELETE",headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"getCountsOfLikes",value:function(e){return fetch("".concat(this._baseUrl,"/").concat(this._groupId,"/cards/likes/").concat(e._id),{headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"changeAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/").concat(this._groupId,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:e})}).then(this._checkResponse)}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1",groupId:"cohort-22",token:"a835ebe3-157b-4140-922b-a5f49168fcac"});var j=function(e){var t=e.card,a=e.onCardClick;return Object(l.jsxs)("li",{className:"cards__item",children:[Object(l.jsx)("img",{className:"cards__image",src:"".concat(t.link),alt:"",onClick:function(){a(t)}}),Object(l.jsx)("button",{type:"button","aria-label":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",className:"cards__btn-remove"}),Object(l.jsxs)("div",{className:"cards__description",children:[Object(l.jsx)("h2",{className:"cards__title text-cut",children:t.name}),Object(l.jsxs)("div",{className:"cards__likes-container",children:[Object(l.jsx)("button",{type:"button","aria-label":"\u041d\u0440\u0430\u0432\u0438\u0442\u0441\u044f",className:"cards__btn-like"}),Object(l.jsx)("div",{className:"cards__likes-counter",children:t.likes.length})]})]})]})};var b=function(e){var t=e.onEditProfile,a=e.onAddPlace,s=e.onEditAvatar,n=e.onCardClick,r=e.onError,o=c.a.useState({userName:"",userDescription:"",userAvatar:""}),p=Object(i.a)(o,2),u=p[0],_=p[1],d=c.a.useState([]),b=Object(i.a)(d,2),m=b[0],O=b[1];return c.a.useEffect((function(){Promise.all([h.getUser(),h.getCards()]).then((function(e){var t=Object(i.a)(e,2),a=t[0],s=t[1];_({userName:a.name,userDescription:a.about,userAvatar:a.avatar}),O(s)})).catch((function(e){r(e,!0),setTimeout((function(){return r(e,!1)}),5e3)}))}),[]),Object(l.jsxs)("main",{children:[Object(l.jsxs)("section",{className:"profile page__container",children:[Object(l.jsx)("div",{className:"profile__avatar",style:{backgroundImage:"url(".concat(u.userAvatar,")")},onClick:s}),Object(l.jsxs)("div",{className:"profile__info",children:[Object(l.jsxs)("div",{className:"profile__container",children:[Object(l.jsx)("h1",{className:"profile__name text-cut",children:u.userName}),Object(l.jsx)("button",{type:"button","aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",className:"profile__btn-edit",onClick:t})]}),Object(l.jsx)("p",{className:"profile__about text-cut",children:u.userDescription})]}),Object(l.jsx)("button",{type:"button","aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",className:"profile__btn-add",onClick:a,children:" "})]}),Object(l.jsx)("section",{className:"places page__container",children:Object(l.jsx)("ul",{className:"cards",children:m.map((function(e){return Object(l.jsx)(j,{card:e,onCardClick:n},e._id)}))})})]})};var m=function(){return Object(l.jsx)("footer",{className:"footer page__container",children:Object(l.jsx)("p",{className:"footer__author",children:"\xa9 2021 Mesto Russia"})})};var O=function(e){var t=e.title,a=e.name,s=e.buttonSubmitText,c=e.children,n=e.isOpen,r=e.onClose;return Object(l.jsx)("div",{className:"popup ".concat(n?"popup_opened":""),children:Object(l.jsxs)("div",{className:"popup__container popup__container_form",children:[Object(l.jsx)("h2",{className:"popup__title",children:t}),Object(l.jsx)("button",{type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",className:"popup__btn-close",onClick:r}),Object(l.jsxs)("form",{className:"popup__form",name:"form-edit-".concat(a),noValidate:!0,children:[c,Object(l.jsx)("button",{type:"submit",className:"popup__btn-submit",children:s})]})]})})};var x=function(e){var t=e.card,a=e.onClose;return Object(l.jsx)("div",{className:"popup popup_type_img ".concat(t.link?"popup_opened":""),children:Object(l.jsxs)("div",{className:"popup__container",children:[Object(l.jsx)("button",{type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",className:"popup__btn-close",onClick:a}),Object(l.jsxs)("figure",{className:"popup__figure",children:[Object(l.jsx)("img",{className:"popup__image",src:"".concat(t.link),alt:""}),Object(l.jsx)("figcaption",{className:"popup__caption"})]})]})})};var f=function(e){var t=e.errorText,a=e.isActive;return Object(l.jsxs)("div",{className:"error-popup ".concat(a?"error-popup_opened":""," "),children:[Object(l.jsx)("h2",{className:"error-popup__title",children:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a..."}),Object(l.jsx)("p",{className:"error-popup__text",children:t})]})};var k=function(){var e=c.a.useState(!1),t=Object(i.a)(e,2),a=t[0],s=t[1],n=c.a.useState(!1),r=Object(i.a)(n,2),p=r[0],_=r[1],d=c.a.useState(!1),h=Object(i.a)(d,2),j=h[0],k=h[1],N=c.a.useState({}),v=Object(i.a)(N,2),g=v[0],y=v[1],C=c.a.useState({errorText:"",isActive:!1}),T=Object(i.a)(C,2),S=T[0],U=T[1];function A(){s(!1),_(!1),k(!1),y({})}return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)(u,{}),Object(l.jsx)(b,{onEditProfile:function(){_(!0)},onAddPlace:function(){k(!0)},onEditAvatar:function(){s(!0)},onCardClick:function(e){y(e)},onError:function(e,t){U(Object(o.a)(Object(o.a)({},S),{},{errorText:e,isActive:t}))}}),Object(l.jsx)(m,{}),Object(l.jsx)(O,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"profile",buttonSubmitText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:p,onClose:A,children:Object(l.jsxs)("fieldset",{className:"popup__set",children:[Object(l.jsxs)("label",{className:"popup__field",children:[Object(l.jsx)("input",{type:"text",name:"name",placeholder:"\u0418\u043c\u044f",className:"popup__input popup__input_type_name",required:!0,minLength:"2",maxLength:"40"}),Object(l.jsx)("span",{className:"popup__input-error popup__input-error_type_name"})]}),Object(l.jsxs)("label",{className:"popup__field",children:[Object(l.jsx)("input",{type:"text",name:"about",placeholder:"\u041e \u0441\u0435\u0431\u0435",className:"popup__input popup__input_type_about",required:!0,minLength:"2",maxLength:"200"}),Object(l.jsx)("span",{className:"popup__input-error popup__input-error_type_about"})]})]})}),Object(l.jsx)(O,{title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",name:"card",buttonSubmitText:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:j,onClose:A,children:Object(l.jsxs)("fieldset",{className:"popup__set",children:[Object(l.jsxs)("label",{className:"popup__field",children:[Object(l.jsx)("input",{type:"text",name:"title",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",className:"popup__input popup__input_type_title",required:!0,minLength:"2",maxLength:"30"}),Object(l.jsx)("span",{className:"popup__input-error popup__input-error_type_title"})]}),Object(l.jsxs)("label",{className:"popup__field",children:[Object(l.jsx)("input",{type:"url",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",className:"popup__input popup__input_type_link",required:!0}),Object(l.jsx)("span",{className:"popup__input-error popup__input-error_type_link"})]})]})}),Object(l.jsx)(O,{title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",name:"avatar",buttonSubmitText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:a,onClose:A,children:Object(l.jsx)("fieldset",{className:"popup__set",children:Object(l.jsxs)("label",{className:"popup__field",children:[Object(l.jsx)("input",{type:"url",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",className:"popup__input popup__input_type_link",required:!0}),Object(l.jsx)("span",{className:"popup__input-error popup__input-error_type_link"})]})})}),Object(l.jsx)(O,{title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",name:"remove",buttonSubmitText:"\u0414\u0430"}),Object(l.jsx)(x,{card:g,onClose:A}),Object(l.jsx)(f,{errorText:S.errorText,isActive:S.isActive})]})};r.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(k,{})}),document.querySelector(".root"))},4:function(e,t,a){}},[[14,1,2]]]);
//# sourceMappingURL=main.57993f37.chunk.js.map