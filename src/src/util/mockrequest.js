
/**
使用原型继承XmlHttpRequest对象时，调用会出以下错误
TypeError: Illegal invocation at XMLHttpRequest.remoteFunction
因此采用原始的方式实现。
 */
var MockRequest={
    rules:[],
    create:function (){
        var self=this;
        function matchRules(url){
            var r=self.rules;
            var result=[];
            for(var i=0;i<r.length;i++){
                if(r[i] && url.indexOf(r[i].url)>=0){
                    result.push(r[i]);
                }
            }
            if(result.length>0){
                result.sort(function (a,b){
                    return b.url.length-a.url.length;
                });
                return result[0]
            }
            
        }
        var returnObj={
            onreadystatechange:null,
            open:function (method,url,async){
                this.url=url;
                this.xhr.open(method,url,async);
            },
            send:function (data){
                var self=this;
                //delay to wait onreadystatechange is setted
                // console.log("mock url:",this.url);
                // console.log("mode data:",data);
                setTimeout(function() {
                    var rule=matchRules(self.url);
                    if(rule){
                        self.readyState=4;
                        self.status=200;
                        if(typeof rule.responseText =="string"){
                            self.responseText=rule.responseText;
                        }else if(typeof rule.responseText =="function"){
                            var ret=rule.responseText(self.url,data);
                            if(typeof ret =="object"){
                                ret=JSON.stringify(ret);
                            }
                            self.responseText=ret;
                        }else if(typeof rule.responseText =="object"){
                            self.responseText=JSON.stringify(rule.responseText);
                        }
                        
                        self.onreadystatechange && self.onreadystatechange();
                        
                       
                    }else{
                        self.xhr.send(data);
                    }
                }, 0);
            }
        }

        Object.defineProperty(returnObj,"onreadystatechange", {
            get:function (){
                return this.xhr.onreadystatechange;
            },
            set:function (func){
                var obj=this;
                this.xhr.onreadystatechange=function (arg){
                    returnObj.readyState=obj.xhr.readyState;
                    returnObj.status=obj.xhr.status;
                    returnObj.responseText=obj.xhr.responseText;
                    returnObj.responseXML=obj.xhr.responseXML;
                    func();
                };
            }
        })
   
        function copyMethod(orign,obj,arr){
            arr.forEach(function(item) {
                obj[item]=function (){
                    //native function do not support apply
                    if(arguments.length==0){
                        return orign[item]();
                    }else if(arguments.length==1){
                        return orign[item](arguments[0]);
                    }else if(arguments.length==2){
                        return orign[item](arguments[0],arguments[1]);
                    }else if(arguments.length==3){
                        return orign[item](arguments[0],arguments[1],arguments[2]);
                    }
                    
                }
            });
        }
        var _XMLHttpRequest=window.XMLHttpRequest;
        var MockRequestContructor=function (){
            this.xhr=new _XMLHttpRequest();
            copyMethod(this.xhr,returnObj,["setRequestHeader","getAllResponseHeaders","getResponseHeader"]);
        };
        MockRequestContructor.prototype=returnObj;
        window.XMLHttpRequest=MockRequestContructor;
        return this;
        
    },
    addRules:function(rule){
        // 添加规则，判断是否为数组
        if(Object.prototype.toString.call(rule)=="[object Array]"){
            // 如果为数组则拼接
            this.rules=this.rules.concat(rule);
        }else{
            if(rule){
                // 如果不为数组则推进去
                this.rules.push(rule);
            }
        }
        // console.log(this.rules,'this rules')
    }
}



  export default MockRequest
  
