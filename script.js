var john = {
     fulname : 'Mohammad Al-Mamun',
     bills : [124,48,268,180,42],
     calcTips : function(){
          this.tips =[]
          this.tipsWithBills =[]
         for(var i=0;i<this.bills.length;i++){
              var parcentage
              var bill = this.bills[i]

              if(bill<50){parcentage = .2}
              else if(bill>=50 && bill>200){parcentage = .15 }
              else{parcentage = .1 }
              
              this.tips[i] = bill * parcentage
              this.tipsWithBills[i] = bill + ( bill * parcentage)
         } 
     }
}
john.calcTips();

//  AVerage Tips CalCulate KE koto tk tips er beshi diboh

var mark = {
     fulname : 'Mark Miller',
     bills : [77,475,110,45],
     calcTips : function(){
          this.tips = []
          this.tipsWithBills = []
      for(var i=0;i<this.bills.length;i++){
               var parcentage
               bill = this.bills[i]

               if(bill<100){parcentage = .2}
               else if(bill>=100 && bill<300){parcentage = .1}
               else{parcentage = .25}

               this.tips[i]= bill*parcentage
               this.tipsWithBills[i]= bill + (bill*parcentage)
          }
     }
}
mark.calcTips()
console.log(john,mark)
// AVERAGE VALU IS HERE

function calcAverage(tips){
     var sum = 0
     for(var i = 0; i<tips.length;i++){
           sum = sum + tips[i]
     }
     return sum/tips.length
}
john.averageTips = calcAverage(john.tips)
mark.averageTips = calcAverage(mark.tips)
console.log(john,mark)

// COmapare With 2 Family who only Big Tipper
if(john.averageTips>mark.averageTips){console.log(john.fulname + '\'S Higher Tips,With an Average $ ' + john.averageTips)}
else if(mark.averageTips>john.averageTips){console.log(mark.fulname +  '\'S Higher Tips,With an Average $' + mark.averageTips)}
// console.log(john,mark)
