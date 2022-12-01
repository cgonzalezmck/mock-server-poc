var mockServerClient = require('mockserver-client').mockServerClient;
mockServerClient("ac456d7a4c20f4c9d9561ad611cdf928-1150027820.us-east-1.elb.amazonaws.com", 80 ).mockAnyResponse({
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
        "body": `<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema"><soap:Body><app_Login_banca_en_Linea_con_factorResponse xmlns="http://tempuri.org/"><app_Login_banca_en_Linea_con_factorResult>&lt;?xml version='1.0' encoding='utf-8'?&gt;&lt;mensaje&gt;&lt;encabezado&gt;&lt;codigo_retorno&gt;3&lt;/codigo_retorno&gt;&lt;mensaje_usuario&gt;TU INFORMACIÓN NO ES CORRECTA, POR FAVOR VERIFICA&lt;/mensaje_usuario&gt;&lt;mensaje_tecnico&gt;&lt;/mensaje_tecnico&gt;&lt;utiliza_token&gt;0&lt;/utiliza_token&gt;&lt;pns_usuariocreado&gt;False&lt;/pns_usuariocreado&gt;&lt;pns_dispositivos&gt;0&lt;/pns_dispositivos&gt;&lt;UsuarioHuella_Creado&gt;False&lt;/UsuarioHuella_Creado&gt;&lt;TokenBI_Afiliado&gt;False&lt;/TokenBI_Afiliado&gt;&lt;ReconocimientoFacial_Estado&gt;False&lt;/ReconocimientoFacial_Estado&gt;&lt;TokenBI_Obligatorio&gt;False&lt;/TokenBI_Obligatorio&gt;&lt;/encabezado&gt;&lt;/mensaje&gt;</app_Login_banca_en_Linea_con_factorResult></app_Login_banca_en_Linea_con_factorResponse></soap:Body></soap:Envelope>`,
    }
}).then(
    function () {
        console.log("Successful Login expectation created");
    },
    function (error) {
        console.log(error);
    }
).catch(err => console.error(err));