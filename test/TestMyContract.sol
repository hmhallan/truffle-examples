pragma solidity ^0.4.16;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/MyContract.sol";

contract TestMyContract {

    constructor() public payable {
    }

    function testaSeContratoPossuiValorPadrao() public {
    
        //instancia do my contract no endereço publicado na blockchain de testes
        MyContract my = MyContract(DeployedAddresses.MyContract());


        Assert.equal(my.getCounter(), 5, "Valor incial do contador deve ser 5");
    }

    function testaSeContratoPossuiValorPadraoInstanciado() public {
        MyContract my = new MyContract();

        Assert.equal(my.getCounter(), 5, "Valor incial do contador deve ser 5");
    }

    function testaSeContratoAtualizaContador() public {
        MyContract my = MyContract(DeployedAddresses.MyContract());
        my.setCounter(10);

        Assert.equal(my.getCounter(), 10, "Valor incial do contador após atualizar deve ser 10");
    }

}
