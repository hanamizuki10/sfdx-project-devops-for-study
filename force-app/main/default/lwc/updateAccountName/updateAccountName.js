import { LightningElement, track, wire, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import LightningAlert from 'lightning/alert';
import { getRecord,updateRecord } from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import ID_FIELD from '@salesforce/schema/Account.Id';
export default class UpdateAccountName extends LightningElement {
  @api recordId;
  @track error;

  @wire(getRecord,{recordId: '$recordId',fields: [NAME_FIELD]})
  account;

  // バリデーション
  isValid() {
    return [...this.template.querySelectorAll('lightning-input')]
    .reduce((validSoFar, inputFields) => {
        inputFields.reportValidity();
        return validSoFar && inputFields.checkValidity();
    }, true);
  }

  // 更新ボタン押下時の処理
  handleClickUpdate() {
    if (!this.isValid()) {
      LightningAlert.open({
        message: '入力内容に問題があります。',
        theme: 'error',
        label: '入力エラー',
      });
      return;
    }

    // 更新処理
    const fields = {};
    fields[ID_FIELD.fieldApiName] = this.recordId;
    fields[NAME_FIELD.fieldApiName] = this.template.querySelector("[data-field='Name']").value;
    const recordInput = { fields };
    updateRecord(recordInput)
    .then(() => {
      LightningAlert.open({
        message: '取引先のNameを更新しました。' ,
        theme: 'success',
        label: '更新成功',
      });
    })
    .catch(error => {
      LightningAlert.open({
        message: '取引先の更新時に予期せぬエラーが発生しました。' + error.body.message,
        theme: 'error',
        label: '更新エラー',
      });
    });
  }
}