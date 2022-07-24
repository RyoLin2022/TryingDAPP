var contracts={
	hello:{
		address:'0xaC47859aDDbEF2F30b398751D1484C9b02D5D12B'
		abi=[{
			"inputs": [
			{
				"internalType": "string",
				"name": "text",
				"type": "string"
			}
		],
		"name": "setContent",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getContent",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
	}
}
function loadData(callback){
	//通过合约编译后的元数据，加载对应的abi设置到contracts中
	$.getJSON("service/contracts/artifacts/Hello_metadata.json", function (result){
		contracts.hello.abi=result.output.abi;
		callback();
	});
}