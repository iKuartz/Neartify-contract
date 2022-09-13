This is an immunization tracking app that sends a person's immunization data to the blockchain allowing government officials and public health authorities to check the vaccination history of a person in a verifiable and secure manner.

Fundamentally, this app allows a certification authority, let's say, a country's ministry of health, to provide a certificate of vaccination to a person (that will have an unique blockchain wallet address) in a secure manner.

This has both a local and a global application, as the certifying authority could be either a hospital in a country or city, or a country's ministry of health in case a person needs to provide proof to a foreign authority.

vaccine id is a string and presently, it has to be input in the model personswallet|vaccinename|dose personswallet is the wallet address of the person without .near, vaccinename is the name of the vaccine and dose the number of the dose, in arabic numbers, 1, 2, 3... The id assignment could be automated in the future.

This contract is deployed to vaccine.ikuartz.testnet . Feel free to test it. In order to create vaccines in the CLI, please install near CLI, login to yor wallet and use a command similar to this:

near call vaccine.ikuartz.testnet setVaccine '{"vaccine": {"id": "jmeloney.testnet|Astrazeneca/Oxford|1", "vaccine": "Astrazeneca/Oxford", "person": "Johnny Meloney", "date": "2022-01-23T09:04:45.904Z", "dose": 1}}' --accountId=youraccount.testnet

remember to substitute youraccount for your actual account.



A front end interface is still under construction in this repo: https://github.com/iKuartz/NEARtify-front-end .

near view vaccine.ikuartz.testnet getVaccine '{"id":"1"}'