var MyContract = artifacts.require("./MyContract.sol");

contract('MyContract', function(accounts) {

  it("contador deve ser 5 ao inciar o contrato", function() {

    return MyContract.deployed().then(function(instance) {
      return instance.getCounter();
    }).then(function(contador) {
      assert.equal(contador, 5, "contador não está em 5");
    });
  });



  it("contador deve ser atualizado ao chamar a transação", function() {

        var expected = 10;
    
        return MyContract.deployed().then(function(instance) {
            my = instance;
            return my.setCounter( expected );
        }).then(function() {
            return my.getCounter();
        }).then(function(contador) {
            assert.equal(contador.toNumber(), expected, "contador não está em " + expected );
          });
      });

});
