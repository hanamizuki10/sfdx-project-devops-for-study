public with sharing class Sample {
  @AuraEnabled(cacheable=true)
  public static String getNow(String message) {
    return message + String.valueOf(Datetime.now());
  }
}