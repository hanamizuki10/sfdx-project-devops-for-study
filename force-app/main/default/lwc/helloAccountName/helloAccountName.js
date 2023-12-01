import { LightningElement, track, wire, api } from 'lwc';
import LightningAlert from 'lightning/alert';
import { getRecord } from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import sayHello from '@salesforce/apex/HelloWorld.sayHello';

export default class HelloAccountName extends LightningElement {
  @api recordId;
  @track error;
  greeting;
  @wire(getRecord,{recordId: '$recordId',fields: [NAME_FIELD]})
  account;
  
  @wire(sayHello, { name: '$account.data.fields.Name.value' }) 
  wiredSayHello({ error, data }) {
    if (data) {
      this.greeting = data;
      this.error = undefined;
    } else if (error) {
      this.greeting = undefined;
      LightningAlert.open({
        message: '取引先の更新時に予期せぬエラーが発生しました。' + error.body.message,
        theme: 'error',
        label: '更新エラー',
      });
    }
  }
}