﻿var layers = activeDocument.layers;var str_list ="";var str_temp;for(var i=0; i<layers.length; i++){    //str_list =layers[i].name+layers[i].boundsNoEffects;    var x =layers[i].boundsNoEffects[0];     var y =layers[i].boundsNoEffects[1];    var width = layers[i].boundsNoEffects[2]-x;    var height = layers[i].boundsNoEffects[3]-y;    str_temp ="{name_parts:'"+layers[i].name+"',x:"+x+",y:"+y+",width:"+width+",height:"+height+",},",    str_list += str_temp;    }alert(str_list);alert("完了");