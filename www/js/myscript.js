function genday()
{
    
    var year1 = document.getElementById("year").value;
    var date1 = document.getElementById("date").value;
    var month1 = document.getElementById("month").value;
    var year = parseInt(year1);
    var date = parseInt(date1);
    var month = parseInt(month1);
    var yodd=null;
    var modd=null;
    var totodd;
    var rem=null;
    var lpyr;
    var odyr;
    var x;
    
    year=year-1;
        if(year%400==0)
            {
                yodd=0;
                rem=0;
            }
            else
            {
                if(year>=2000)
                {
                    rem=year-2000;
                    yodd=0;
                }
                else if(year>=1600)
                {
                    rem=year-1600;
                    yodd=0;
                }
     
            }
            if(rem>0)
            {
                if(rem>=300)
                {
                    rem=rem-300;
                    yodd=yodd+1;
                }
                else if(rem>=200)
                {
                    rem=rem-200;
                    yodd=yodd+3;
                }
                else if(rem>=100)
                {
                    rem=rem-100;
                    yodd=yodd+5;
                }    
                else
                {
                    rem=rem+0;
                }
                lpyr=rem/4;
                odyr=rem-lpyr;
                x=(lpyr*2)+(odyr*1);
                if(x>7)
                {
                    x=x%7;
                }
                yodd=yodd+x;
            }
            else
            {
                yodd=0;
            }
            var leap=false;
            if((year+1)%4==0)
            {
                if((year+1)%100==0)
                {
                    if((year+1)%400==0)
                    {
                        leap=true;
                    }
                    else
                        leap=false;
                }
                else
                    leap=true;
            }
            else
                leap=false;
            if(leap == true)
            {
                switch(month)
                {
                    case 1: 
                        modd=date%7;
                        break;
                    case 2: 
                        modd=(31+date)%7;
                        break;
                    case 3: 
                        modd=(31+29+date)%7;
                        break;
                    case 4: 
                        modd=(31+29+31+date)%7;
                        break;
                    case 5: 
                        modd=(31+29+31+30+date)%7;
                        break;
                    case 6:
                        modd=(31+29+31+30+31+date)%7;
                        break;
                    case 7: 
                        modd=(31+29+31+30+31+30+date)%7;
                        break;
                    case 8:
                        modd=(31+29+31+30+31+30+31+date)%7;
                        break;
                    case 9: 
                        modd=(31+29+31+30+31+30+31+31+date)%7;    
                        break;
                    case 10:
                        modd=(31+29+31+30+31+30+31+31+30+date)%7;    
                        break;
                    case 11:
                        modd=(31+29+31+30+31+30+31+31+30+31+date)%7;
                        break;
                    case 12:
                        modd=(31+29+31+30+31+30+31+31+30+31+30+date)%7;
                        break;
                    default:
                        modd=0;
                        break;
                }            
                
            }
            else
            {
                switch(month)
                {
                    case 1: 
                        modd=date%7;
                            
                        break;
                    case 2:
                        modd=(31+date)%7;
                            
                        break;
                    case 3:
                        modd=(31+28+date)%7;
                            
                        break;
                    case 4:
                        modd=(31+28+31+date)%7;
                        
                        break;
                    case 5:
                        modd=(31+28+31+30+date)%7;
                        
                        break;
                    case 6:
                        modd=(31+28+31+30+31+date)%7;
                        
                        break;
                    case 7:
                        modd=(31+28+31+30+31+30+date)%7;
                        
                        break;
                    case 8:
                        modd=(31+28+31+30+31+30+31+date)%7;
                        
                        break;
                    case 9:
                        modd=(31+28+31+30+31+30+31+31+date)%7;
                        
                        break;
                    case 10:
                        modd=(31+28+31+30+31+30+31+31+30+date)%7;
                        
                        break;
                    case 11:
                        modd=(31+28+31+30+31+30+31+31+30+31+date)%7;
                        
                        break;
                    case 12:
                        modd=(31+28+31+30+31+30+31+31+30+31+30+date)%7;
                        
                        break;
                    default:
                        modd=0;
                        break;
                }
            }    
        totodd=yodd+modd;
        if(totodd>7)
        {
            totodd=totodd%7;
        }
        switch(totodd)
        {
            case 0:
                    swal("You freaking born in Sunday");
                    break;
            case 1: 
                    swal("You freaking born in Monday");
                    break;
            case 2: 
                    swal("You freaking born in Tuesday"); 
                    break;
            case 3: 
                    swal("You freaking born in wednesday");
                    break;
            case 4: 
                    swal("You freaking born in Thursday");
                    break;
            case 5: 
                    swal("You freaking born in Friday");
                    break;
            case 6: 
                    swal("You freaking born in Saturday"); 
                    break;
            default:
                    swal("Try again");
                     break;
        }
    
    }