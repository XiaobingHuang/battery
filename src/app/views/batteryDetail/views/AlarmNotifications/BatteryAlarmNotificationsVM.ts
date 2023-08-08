
export class BatteryAlarmNotificationsVM{
    note :any= undefined;
    EditMode:boolean= false;
    showTempAlarmModal:boolean = false;
    handleOnchange(event){
        console.log("handleOnchange: ", event.target.value );
        this.note =  event.target.value;
        console.log("Note: ", this.note );
    }
    handleShowTempAlarmModal(){
        this.showTempAlarmModal=true
    }
    handleOnClick(){
        this.showTempAlarmModal=true
    }
    

}