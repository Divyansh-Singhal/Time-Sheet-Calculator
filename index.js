function getsval(){
    var mshv= document.getElementById("msh").value;
    var sap= document.getElementById("msap").value;
    var msmv= document.getElementById("msm").value;
    var eap= document.getElementById("meap").value;
    var mehv= document.getElementById("meh").value;
    var memv= document.getElementById("mem").value;
    var mbhv= document.getElementById("mbh").value;
    var mbmv= document.getElementById("mbm").value;
    var mbttime=parseInt(mbhv*60)+parseInt(mbmv);
    var ttime;
    if(sap==1 && eap==1){
        ttime= (parseInt(mehv*60)+parseInt(memv))-(parseInt(mshv*60)+parseInt(msmv));
        if(mbttime>ttime){
            alert("You have entered wrong time");
        }else{
            var ttime1=ttime-mbttime;
        var temp= ttime1%60;
        var mtemp=ttime1;
        ttime1= parseInt(ttime1/60)+":"+temp;
        document.getElementById("mth").innerHTML=ttime1;
    }
    } 
    else if(sap==1 && eap==2){
        mehv=parseInt(mehv)+12;
        ttime= (parseInt(mehv*60)+parseInt(memv))-(parseInt(mshv*60)+parseInt(msmv));
        
        if(mbttime>ttime){
            alert("You have entered wrong time");
        }else{
            var ttime1=ttime-mbttime;
        var temp= ttime1%60;
        var mtemp=ttime1;
        ttime1= parseInt(ttime1/60)+":"+temp;
        document.getElementById("mth").innerHTML=ttime1;
        }
    }
    else if(sap==2 && eap==1){
        var time1=parseInt(720-(parseInt(mshv*60)+parseInt(msmv)));
        ttime= (parseInt(mehv*60)+parseInt(memv))+time1;
        if(mbttime>ttime){
            alert("You have entered wrong time");
        }else{
            var ttime1=ttime-mbttime;
        var temp= ttime1%60;
        var mtemp=ttime1;
        ttime1= parseInt(ttime1/60)+":"+temp;
        document.getElementById("mth").innerHTML=ttime1;
        }
    }
    else if(sap==2 && eap==2){
        ttime= (parseInt(mehv*60)+parseInt(memv))-(parseInt(mshv*60)+parseInt(msmv));
        if(mbttime>ttime){
            alert("You have entered wrong time");
        }else{
            var ttime1=ttime-mbttime;
        var temp= ttime1%60;
        var mtemp=ttime1;
        ttime1= parseInt(ttime1/60)+":"+temp;
        document.getElementById("mth").innerHTML=ttime1;
    }
    }
    var tshv= document.getElementById("tsh").value;
    var tsap= document.getElementById("tsap").value;
    var tsmv= document.getElementById("tsm").value;
    var teap= document.getElementById("teap").value;
    var tehv= document.getElementById("teh").value;
    var temv= document.getElementById("tem").value;
    var tbhv= document.getElementById("tbh").value;
    var tbmv= document.getElementById("tbm").value;
    var tbttime=parseInt(tbhv*60)+parseInt(tbmv);
    var tttime1;
    var ttime;
    if(tsap==1 && teap==1){
        ttime= (parseInt(tehv*60)+parseInt(temv))-(parseInt(tshv*60)+parseInt(tsmv));
        if(tbttime>ttime){
            alert("You have entered wrong time");
        }else{
            var tttime1=ttime-tbttime;
        var temp= tttime1%60;
        var ttemp=tttime1;
        tttime1= parseInt(tttime1/60)+":"+temp;
        document.getElementById("tth").innerHTML=tttime1;
    }
    }
    else if(tsap==1 && teap==2){
        tehv=parseInt(tehv)+12;
        ttime= (parseInt(tehv*60)+parseInt(temv))-(parseInt(tshv*60)+parseInt(tsmv));
        if(tbttime>ttime){
            alert("You have entered wrong time");
        }else{
            var tttime1=ttime-tbttime;
        var temp= tttime1%60;
        var ttemp=tttime1;
        tttime1= parseInt(tttime1/60)+":"+temp;
        document.getElementById("tth").innerHTML=tttime1;
        }
    }
    else if(tsap==2 && teap==1){
        var time1=parseInt(720-(parseInt(tshv*60)+parseInt(tsmv)));
        ttime= (parseInt(tehv*60)+parseInt(temv))+time1;
        if(tbttime>ttime){
            alert("You have entered wrong time");
        }else{
            var tttime1=ttime-tbttime;
        var temp= tttime1%60;
        var ttemp=tttime1;
        tttime1= parseInt(tttime1/60)+":"+temp;
        document.getElementById("tth").innerHTML=tttime1;
        }
    }
    else if(tsap==2 && teap==2){
        ttime= (parseInt(tehv*60)+parseInt(temv))-(parseInt(tshv*60)+parseInt(tsmv));
        if(tbttime>ttime){
            alert("You have entered wrong time");
        }else{
            var tttime1=ttime-tbttime;
        var temp= ttime1%60;
        var ttemp=tttime1;
        tttime1= parseInt(tttime1/60)+":"+temp;
        document.getElementById("tth").innerHTML=tttime1;
    }
    }
    var wshv= document.getElementById("wsh").value;
    var wsap= document.getElementById("wsap").value;
    var wsmv= document.getElementById("wsm").value;
    var weap= document.getElementById("weap").value;
    var wehv= document.getElementById("weh").value;
    var wemv= document.getElementById("wem").value;
    var wbhv= document.getElementById("wbh").value;
    var wbmv= document.getElementById("wbm").value;
    var wbttime=parseInt(wbhv*60)+parseInt(wbmv);
    var wtime;
    if(wsap==1 && weap==1){
        wtime= (parseInt(wehv*60)+parseInt(wemv))-(parseInt(wshv*60)+parseInt(wsmv));
        if(wbttime>wtime){
            alert("You have entered wrong time");
        }else{
            var wtime1=wtime-wbttime;
        var temp= wtime1%60;
        var wtemp=wtime1;
        wtime1= parseInt(wtime1/60)+":"+temp;
        document.getElementById("wth").innerHTML=wtime1;
    }
    }
    else if(wsap==1 && weap==2){
        wehv=parseInt(wehv)+12;
        wtime= (parseInt(wehv*60)+parseInt(wemv))-(parseInt(wshv*60)+parseInt(wsmv));
        if(wbttime>wtime){
            alert("You have entered wrong time");
        }else{
            var wtime1=wtime-wbttime;
        var temp= wtime1%60;
        var wtemp=wtime1;
        wtime1= parseInt(wtime1/60)+":"+temp;
        document.getElementById("wth").innerHTML=wtime1;
        }
    }
    else if(wsap==2 && weap==1){
        var time1=parseInt(720-(parseInt(wshv*60)+parseInt(wsmv)));
        wtime= (parseInt(wehv*60)+parseInt(wemv))+time1;
        if(wbttime>wtime){
            alert("You have entered wrong time");
        }else{
            var wtime1=wtime-wbttime;
        var temp= wtime1%60;
        var wtemp=wtime1;
        wtime1= parseInt(wtime1/60)+":"+temp;
        document.getElementById("wth").innerHTML=wtime1;
        }
    }
    else if(wsap==2 && weap==2){
        wtime= (parseInt(wehv*60)+parseInt(wemv))-(parseInt(wshv*60)+parseInt(wsmv));
        if(wbttime>wtime){
            alert("You have entered wrong time");
        }else{
            var wtime1=wtime-wbttime;
        var temp= wtime1%60;
        var wtemp=wtime1;
        wtime1= parseInt(wtime1/60)+":"+temp;
        document.getElementById("wth").innerHTML=wtime1;
    }
    }
    var thshv= document.getElementById("thsh").value;
    var thsap= document.getElementById("thsap").value;
    var thsmv= document.getElementById("thsm").value;
    var theap= document.getElementById("theap").value;
    var thehv= document.getElementById("theh").value;
    var themv= document.getElementById("them").value;
    var thbhv= document.getElementById("thbh").value;
    var thbmv= document.getElementById("thbm").value;
    var thbttime=parseInt(thbhv*60)+parseInt(thbmv);
    var thtime;
    if(thsap==1 && theap==1){
        thtime= (parseInt(thehv*60)+parseInt(themv))-(parseInt(thshv*60)+parseInt(thsmv));
        if(thbttime>thtime){
            alert("You have entered wrong time");
        }else{
            var thtime1=thtime-thbttime;
        var temp= thtime1%60;
        var thtemp=thtime1;
        thtime1= parseInt(thtime1/60)+":"+temp;
        document.getElementById("thth").innerHTML=thtime1;
    }
    }
    else if(thsap==1 && theap==2){
        thehv=parseInt(thehv)+12;
        thtime= (parseInt(thehv*60)+parseInt(themv))-(parseInt(thshv*60)+parseInt(thsmv));
        if(thbttime>thtime){
            alert("You have entered wrong time");
        }else{
            var thtime1=thtime-thbttime;
        var temp= thtime1%60;
        var thtemp=thtime1;
        thtime1= parseInt(thtime1/60)+":"+temp;
        document.getElementById("thth").innerHTML=thtime1;
        }
    }
    else if(thsap==2 && theap==1){
        var time1=parseInt(720-(parseInt(thshv*60)+parseInt(thsmv)));
        thtime= (parseInt(thehv*60)+parseInt(themv))+time1;
        if(thbttime>thtime){
            alert("You have entered wrong time");
        }else{
            var thtime1=thtime-thbttime;
        var temp= thtime1%60;
        var thtemp=thtime1;
        thtime1= parseInt(thtime1/60)+":"+temp;
        document.getElementById("thth").innerHTML=thtime1;
        }
    }
    else if(thsap==2 && theap==2){
        thtime= (parseInt(thehv*60)+parseInt(themv))-(parseInt(thshv*60)+parseInt(thsmv));
        if(thbttime>thtime){
            alert("You have entered wrong time");
        }else{
            var thtime1=thtime-thbttime;
        var temp= thtime1%60;
        var thtemp=thtime1;
        thtime1= parseInt(thtime1/60)+":"+temp;
        document.getElementById("thth").innerHTML=thtime1;
    }
    }
    var frshv= document.getElementById("frsh").value;
    var frsap= document.getElementById("frsap").value;
    var frsmv= document.getElementById("frsm").value;
    var freap= document.getElementById("freap").value;
    var frehv= document.getElementById("freh").value;
    var fremv= document.getElementById("frem").value;
    var frbhv= document.getElementById("frbh").value;
    var frbmv= document.getElementById("frbm").value;
    var frbttime=parseInt(frbhv*60)+parseInt(frbmv);
    var frtime;
    if(frsap==1 && freap==1){
        frtime= (parseInt(frehv*60)+parseInt(fremv))-(parseInt(frshv*60)+parseInt(frsmv));
        if(frbttime>frtime){
            alert("You have entered wrong time");
        }else{
            var frtime1=frtime-frbttime;
        var temp= frtime1%60;
        var frtemp=frtime1;
        frtime1= parseInt(frtime1/60)+":"+temp;
        document.getElementById("frth").innerHTML=frtime1;
    }
    }
    else if(frsap==1 && freap==2){
        frehv=parseInt(frehv)+12;
        frtime= (parseInt(frehv*60)+parseInt(fremv))-(parseInt(frshv*60)+parseInt(frsmv));
        if(frbttime>frtime){
            alert("You have entered wrong time");
        }else{
            var frtime1=frtime-frbttime;
        var temp= frtime1%60;
        var frtemp=frtime1;
        frtime1= parseInt(frtime1/60)+":"+temp;
        document.getElementById("frth").innerHTML=frtime1;
        }
    }
    else if(frsap==2 && freap==1){
        var time1=parseInt(720-(parseInt(frshv*60)+parseInt(frsmv)));
        frtime= (parseInt(frehv*60)+parseInt(fremv))+time1;
        if(frbttime>frtime){
            alert("You have entered wrong time");
        }else{
            var frtime1=frtime-frbttime;
        var temp= frtime1%60;
        var frtemp=frtime1;
        frtime1= parseInt(frtime1/60)+":"+temp;
        document.getElementById("frth").innerHTML=frtime1;
        }
    }
    else if(frsap==2 && freap==2){
        frtime= (parseInt(frehv*60)+parseInt(fremv))-(parseInt(frshv*60)+parseInt(frsmv));
        if(frbttime>frtime){
            alert("You have entered wrong time");
        }else{
            var frtime1=frtime-frbttime;
        var temp= frtime1%60;
        var frtemp=frtime1;
        frtime1= parseInt(frtime1/60)+":"+temp;
        document.getElementById("frth").innerHTML=frtime1;
    }
    }
    var sshv= document.getElementById("ssh").value;
    var ssap= document.getElementById("ssap").value;
    var ssmv= document.getElementById("ssm").value;
    var seap= document.getElementById("seap").value;
    var sehv= document.getElementById("seh").value;
    var semv= document.getElementById("sem").value;
    var sbhv= document.getElementById("sbh").value;
    var sbmv= document.getElementById("sbm").value;
    var sbttime=parseInt(sbhv*60)+parseInt(sbmv);
    var stime;
    if(ssap==1 && seap==1){
        stime= (parseInt(sehv*60)+parseInt(semv))-(parseInt(sshv*60)+parseInt(ssmv));
        if(sbttime>stime){
            alert("You have entered wrong time");
        }else{
            var stime1=stime-sbttime;
        var temp= stime1%60;
        var stemp=stime1;
        stime1= parseInt(stime1/60)+":"+temp;
        document.getElementById("stth").innerHTML=stime1;
    }
    }
    else if(ssap==1 && seap==2){
        sehv=parseInt(sehv)+12;
        stime= (parseInt(sehv*60)+parseInt(semv))-(parseInt(sshv*60)+parseInt(ssmv));
        if(sbttime>stime){
            alert("You have entered wrong time");
        }else{
            var stime1=stime-sbttime;
        var temp= stime1%60;
        var stemp=stime1;
        stime1= parseInt(stime1/60)+":"+temp;
        document.getElementById("stth").innerHTML=stime1;
        }
    }
    else if(ssap==2 && seap==1){
        var time1=parseInt(720-(parseInt(sshv*60)+parseInt(ssmv)));
        stime= (parseInt(sehv*60)+parseInt(semv))+time1;
        if(sbttime>stime){
            alert("You have entered wrong time");
        }else{
            var stime1=stime-sbttime;
        var temp= stime1%60;
        var stemp=stime1;
        stime1= parseInt(stime1/60)+":"+temp;
        document.getElementById("stth").innerHTML=stime1;
        }
    }
    else if(ssap==2 && seap==2){
        stime= (parseInt(sehv*60)+parseInt(semv))-(parseInt(sshv*60)+parseInt(ssmv));
        if(sbttime>stime){
            alert("You have entered wrong time");
        }else{
            var stime1=stime-sbttime;
        var temp= stime1%60;
        var stemp=stime1;
        stime1= parseInt(stime1/60)+":"+temp;
        document.getElementById("stth").innerHTML=stime1;
    }
    }
    var sushv= document.getElementById("sush").value;
    var susap= document.getElementById("susap").value;
    var susmv= document.getElementById("susm").value;
    var sueap= document.getElementById("sueap").value;
    var suehv= document.getElementById("sueh").value;
    var suemv= document.getElementById("suem").value;
    var subhv= document.getElementById("subh").value;
    var submv= document.getElementById("subm").value;
    var subttime=parseInt(subhv*60)+parseInt(submv);
    var sutime;
    if(susap==1 && sueap==1){
        sutime= (parseInt(suehv*60)+parseInt(suemv))-(parseInt(sushv*60)+parseInt(susmv));
        if(subttime>sutime){
            alert("You have entered wrong time");
        }else{
            var sutime1=sutime-subttime;
        var temp= sutime1%60;
        var sutemp=sutime1;
        sutime1= parseInt(sutime1/60)+":"+temp;
        document.getElementById("sutth").innerHTML=sutime1;
    }
    }
    else if(susap==1 && sueap==2){
        suehv=parseInt(suehv)+12;
        sutime= (parseInt(suehv*60)+parseInt(suemv))-(parseInt(sushv*60)+parseInt(susmv));
        if(subttime>sutime){
            alert("You have entered wrong time");
        }else{
            var sutime1=sutime-subttime;
        var temp= sutime1%60;
        var sutemp=sutime1;
        sutime1= parseInt(sutime1/60)+":"+temp;
        document.getElementById("sutth").innerHTML=sutime1;
        }
    }
    else if(susap==2 && sueap==1){
        var time1=parseInt(720-(parseInt(sushv*60)+parseInt(susmv)));
        sutime= (parseInt(suehv*60)+parseInt(suemv))+time1;
        if(subttime>sutime){
            alert("You have entered wrong time");
        }else{
            var sutime1=sutime-subttime;
        var temp= sutime1%60;
        var sutemp=sutime1;
        sutime1= parseInt(sutime1/60)+":"+temp;
        document.getElementById("sutth").innerHTML=sutime1;
            
        }
    }
    else if(susap==2 && sueap==2){
        sutime= (parseInt(suehv*60)+parseInt(suemv))-(parseInt(sushv*60)+parseInt(susmv));
        if(subttime>sutime){
            alert("You have entered wrong time");
        }else{
            var sutime1=sutime-subttime;
        var temp= sutime1%60;
        var sutemp=sutime1;
        sutime1= parseInt(sutime1/60)+":"+temp;
        document.getElementById("sutth").innerHTML=sutime1;
    }
    }

    
    var totalthv=parseInt(mtemp)+parseInt(ttemp)+parseInt(wtemp)+parseInt(thtemp)+parseInt(frtemp)+parseInt(stemp)+parseInt(sutemp);
    var totaltm= totalthv%60;
    var totalth= parseInt(totalthv/60)+":"+totaltm;
    document.getElementById("totalth").innerHTML=totalth;
}
function clearall(){
    document.getElementById("msh").value="";
    document.getElementById("msm").value="";
    document.getElementById("meh").value="";
    document.getElementById("mem").value="";
    document.getElementById("mbh").value="0";
    document.getElementById("mbm").value="0";
    document.getElementById("tsh").value="";
    document.getElementById("tsm").value="";
    document.getElementById("teh").value="";
    document.getElementById("tem").value="";
    document.getElementById("tbh").value="0";
    document.getElementById("tbm").value="0";
    document.getElementById("wsh").value="";
    document.getElementById("wsm").value="";
    document.getElementById("weh").value="";
    document.getElementById("wem").value="";
    document.getElementById("wbh").value="0";
    document.getElementById("wbm").value="0";
    document.getElementById("thsh").value="";
    document.getElementById("thsm").value="";
    document.getElementById("theh").value="";
    document.getElementById("them").value="";
    document.getElementById("thbh").value="0";
    document.getElementById("thbm").value="0";
    document.getElementById("frsh").value="";
    document.getElementById("frsm").value="";
    document.getElementById("freh").value="";
    document.getElementById("frem").value="";
    document.getElementById("frbh").value="0";
    document.getElementById("frbm").value="0";
    document.getElementById("ssh").value="";
    document.getElementById("ssm").value="";
    document.getElementById("seh").value="";
    document.getElementById("sem").value="";
    document.getElementById("sbh").value="0";
    document.getElementById("sbm").value="0";
    document.getElementById("sush").value="";
    document.getElementById("susm").value="";
    document.getElementById("sueh").value="";
    document.getElementById("suem").value="";
    document.getElementById("subh").value="0";
    document.getElementById("subm").value="0";
    document.getElementById("totalth").innerHTML="0:0";
    document.getElementById("mth").innerHTML="0:0";
    document.getElementById("tth").innerHTML="0:0";
    document.getElementById("wth").innerHTML="0:0";
    document.getElementById("thth").innerHTML="0:0";
    document.getElementById("frth").innerHTML="0:0";
    document.getElementById("stth").innerHTML="0:0";
    document.getElementById("sutth").innerHTML="0:0";

}