import { LightningElement, wire } from 'lwc';
import LightningAlert from 'lightning/alert';
import getNow from '@salesforce/apex/Sample.getNow';
export default class SampleCooperation extends LightningElement {
  displayMessage;
  
  @wire(getNow, { message: '⭐️ページ表示時刻: ' })
  wiredGetNow({ error, data }) {
    if (data) {
      this.displayMessage = data;
      this.error = undefined;
    } else if (error) {
      this.displayMessage = undefined;
      LightningAlert.open({
        message: 'ApexクラスメソッドgetNowコール時に予期せぬエラーが発生しました。' + error.body.message,
        theme: 'error',
        label: '更新エラー',
      });
    }
  }

}