!function(){Polymer("input-password",{visible:!1,toggleText:"Toggle",visibleClass:"visible",ready:function(){this._bindEvents(),this.showText=this.getShowText(),this.hideText=this.getHideText(),this.visible=this.visible===!0||"visible"===this.visible||this.visible,this.visibleChanged(this.show,this.show)},visibleChanged:function(){this.visible?this.showValue():this.hideValue()},nameChanged:function(a,b){this.id=this.id||b},getShowText:function(){return this.toggleText.split("/")[0]},getHideText:function(){return this.toggleText.split("/")[1]||this.showText},showValue:function(){this.$[this.id].type="text",this.classList.add(this.visibleClass),this.$.visbilityButton.innerHTML=this.hideText,this.fire("showValue")},hideValue:function(){this.$[this.id].type="password",this.classList.remove(this.visibleClass),this.$.visbilityButton.innerHTML=this.showText,this.fire("hideValue")},toggle:function(){this.visible=!this.visible},_bindEvents:function(){this.$.visbilityButton.addEventListener("tap",this.toggle.bind(this),!1)}})}();