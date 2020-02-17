
        (function(para) {
            var p = para.sdk_url, n = para.name, w = window, d = document, s = 'script',x = null,y = null;
            if(typeof(w['sensorsDataAnalytic201505']) !== 'undefined') {
                return false;
            }
            w['sensorsDataAnalytic201505'] = n;//'sensors'
            w[n] = w[n] || function(a) {return function() {(w[n]._q = w[n]._q || []).push([a, arguments]);}};
            var ifs = ['track','quick','register','registerPage','registerOnce','trackSignup', 'trackAbtest', 'setProfile','setOnceProfile','appendProfile', 'incrementProfile', 'deleteProfile', 'unsetProfile', 'identify','login','logout','trackLink','clearAllRegister','getAppStatus'];
            for (var i = 0; i < ifs.length; i++) {
            w[n][ifs[i]] = w[n].call(null, ifs[i]);
            }
            // var obtn = document.getElementById('test');
            // console.log(obtn);
            // obtn.onclick = function(){
            //     x = d.createElement(s), y = d.getElementsByTagName(s)[0];
            //     x.async = 1;
            //     x.src = p;
            //     x.setAttribute('charset','UTF-8');
            //     w[n].para = para;
            //     y.parentNode.insertBefore(x, y);
            // };
            if (!w[n]._t) {
                x = d.createElement(s), y = d.getElementsByTagName(s)[0];
                x.async = 1;
                x.src = p;
                x.setAttribute('charset','UTF-8');
                w[n].para = para;
                y.parentNode.insertBefore(x, y);
            }
        })({
            // sdk_url: './sa.simple.js',
            sdk_url:'https://cdn.jsdelivr.net/npm/sa-sdk-javascript@1.14.13/sensorsdata.min.js',
            heatmap_url: 'https://cdn.jsdelivr.net/npm/sa-sdk-javascript@1.14.13/heatmap.min.js',
            // sdk_url: './sdk-919/sensorsdata.full.js',
            // heatmap_url: './sensors/heatmap.js',
            name: 'sensors',
            is_track_device_id:true,
            source_channel:['bd_vid'],
            source_type:{
                utm:['ls']
            },
            // server_url:'',
            server_url: 'https://sdktest.datasink.sensorsdata.cn/sa?project=zhangzhankai&token=21f2e56df73988c7',
            // server_url: ['https://test-syg.datasink.sensorsdata.cn/sa?project=liangshuang&token=27f1e21b78daf376','https://test-syg.datasink.sensorsdata.cn/sa?project=lixiang&token=27f1e21b78daf376'],
            debug_mode: false, 
            debug_mode_upload:false,
            // send_type:'ajax',
            use_app_track: true,
            use_client_time: true,
            cross_subdomain:false,
            // batch_send:{
            //     datasend_timeout: 6000,  //一次请求超过多少秒的话自动取消，防止请求无响应。
            //     send_interval: 12000,    //间隔几秒发一次数据。
            //     one_send_max_length: 6  //一次请求最大发送几条数据，防止数据太大
            // },
            is_track_single_page:false,
            // heatmap:{},
            heatmap:{
                // clickmap:'not_collect',
                // scroll_notice_map:'not_collect',
                loadTimeout:  3000,
                // collect_url: function(){
                //     //如果只采集首页
                //     if(location.href === 'http://www.ls.com:8080/index.html'){
                //         return false;
                //     }else{
                //         return true;
                //     }
                // },
                collect_element: function(element_target){
                    // 如果这个元素有属性sensors-disable=true时候，不采集
                    if(element_target.getAttribute('sensors-disable') === 'true'){
                        return false;
                    }else{
                        return true;
                    }
                },
                custom_property:function( element_target ){
                    return{
                        timepppp:new Date()
                    }
                },
                collect_input:function(element_target){
                    //例如如果元素的 id 是a，就采集这个元素里的内容
                    if(element_target.id === 'loginid'){
                        return true;
                    }
                },
                // element_selector:'not_use_id',
                renderRefreshTime:1000,
                scroll_delay_time: 4000,
                useCapture: false
            },
            // preset_properties:{
            //     title:false
            // }
            });
            // sensors.quick('autoTrackWithoutProfile');
            sensors.quick('autoTrack');
            sensors.track('im889',{});
            // sensors.quick('isReady',function(){
            //     var pro = sensors.getPresetProperties();
            //     console.log(pro);
            // })
            // sensors.setProfile()
