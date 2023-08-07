
export class BatteryAlarmNotificationsVM{
    note : string | number | readonly string[]= undefined;
    showTempAlarmModal:boolean = false;
    handleOnchange(event){
        this.note =  event.target.value;
    }
    handleShowTempAlarmModal(){
        this.showTempAlarmModal=true
    }
    handleOnClick(){
        this.showTempAlarmModal=true
    }

}