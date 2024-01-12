public with sharing class Sample {
  @AuraEnabled(cacheable=true)
  public static String getNow() {
    return String.valueOf(Datetime.now());
  }
}