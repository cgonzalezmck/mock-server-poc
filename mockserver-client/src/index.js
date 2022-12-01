var mockServerClient = require('mockserver-client').mockServerClient;
const host = "ac456d7a4c20f4c9d9561ad611cdf928-1150027820.us-east-1.elb.amazonaws.com";
const port = 80;

mockServerClient(host, port).reset();

mockServerClient(host, port ).mockAnyResponse({
    "httpRequest": {
        "method": "POST",
        "path": "/wsTokenVirtual/wsTokenVirtual.asmx",
        "body": `<soapenv:Envelope
                    xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
                    xmlns:tem="http://tempuri.org/">
                    <soapenv:Header/>
                    <soapenv:Body>
                        <tem:app_Login_banca_en_Linea_con_factor>
                            <!--Optional:-->
                            <tem:XML_Mensaje>
                                <![CDATA[<mensaje><encabezado><usr_ws>usrmobile</usr_ws><password_ws>52667433CF6631339D660433</password_ws><utiliza_token>0</utiliza_token><codigo_usr_banca>\${xmlunit.ignore}</codigo_usr_banca><usr_banca>\${xmlunit.ignore}</usr_banca></encabezado><Informacion><Password>\${xmlunit.ignore}</Password><transaction_id>0</transaction_id><transaction_amount>0</transaction_amount><transaction_value>0</transaction_value><ip>\${xmlunit.ignore}</ip><datetime>\${xmlunit.ignore}</datetime></Informacion></mensaje>]]>
                            </tem:XML_Mensaje>
                        </tem:app_Login_banca_en_Linea_con_factor>
                    </soapenv:Body>
                </soapenv:Envelope>`
    },
    "httpResponse": {
        "statusCode": 200,
        "body": `<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema"><soap:Body><app_Login_banca_en_Linea_con_factorResponse xmlns="http://tempuri.org/"><app_Login_banca_en_Linea_con_factorResult><?xml version='1.0' encoding='utf-8'?><mensaje><encabezado><codigo_retorno>3</codigo_retorno><mensaje_usuario>TU INFORMACIÓN NO ES CORRECTA, POR FAVOR VERIFICA</mensaje_usuario><mensaje_tecnico></mensaje_tecnico><utiliza_token>0</utiliza_token><pns_usuariocreado>False</pns_usuariocreado><pns_dispositivos>0</pns_dispositivos><UsuarioHuella_Creado>False</UsuarioHuella_Creado><TokenBI_Afiliado>False</TokenBI_Afiliado><ReconocimientoFacial_Estado>False</ReconocimientoFacial_Estado><TokenBI_Obligatorio>False</TokenBI_Obligatorio></encabezado></mensaje></app_Login_banca_en_Linea_con_factorResult></app_Login_banca_en_Linea_con_factorResponse></soap:Body></soap:Envelope>`,
    }
}).then(
    function () {
        console.log("Successful Login expectation created");
    },
    function (error) {
        console.log(error);
    }
).catch(err => console.error(err));