@isTest
private class HelloWorldTest {
  @isTest 
  private static void sayHello() {
    Assert.areEqual('Hello World!', HelloWorld.sayHello('World'), 'Expected Hello World!');
  }
}