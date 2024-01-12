import { LightningElement, wire } from 'lwc';
import LightningAlert from 'lightning/alert';
import getNow from '@salesforce/apex/Sample.getNow';
export default class SampleCooperation extends LightningElement {
  message;
  
  @wire(getNow)
  wiredGetNow({ error, data }) {
    if (data) {
      this.message = data;
      this.error = undefined;
    } else if (error) {
      this.message = undefined;
      LightningAlert.open({
        message: 'ApexクラスメソッドgetNowコール時に予期せぬエラーが発生しました。' + error.body.message,
        theme: 'error',
        label: '更新エラー',
      });
    }
  }

}