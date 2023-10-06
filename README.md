Jag har gjort en CRUD-API för musikobjekt. Den tar emot musikpryl och typ. Så i JSON-bodyn på Create/Add så kan man skriva följande:

{
	"gear": "Gibson Les Paul",
	"type": "Guitar"
}


API Endpoint: https://xjqfwdy5gc.execute-api.eu-north-1.amazonaws.com/api/music-items

Denna fungerar för all Create, Read, Update och Delete.

Om man ska använda Update eller Delete så måste man hämta ID genom Get-funktionen och kopiera ID från objektet, man lägger till det i ändelsen som /gearID. T.ex:

https://xjqfwdy5gc.execute-api.eu-north-1.amazonaws.com/api/music-items/IdFörPrylDuVillÄndra

Ifall du stöter på några problem, har jag i värsta fall laddat upp en video som går igenom funktionaliteten:
https://www.youtube.com/watch?v=4OY194IJW1U

Jag har lagt till authorization genom IAM Auth på API Gateway, nycklarna du behöver för tillgång till Lambdafunktiorna hittar du i kommentaren på inlämningen.

