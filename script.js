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
console.log(john)