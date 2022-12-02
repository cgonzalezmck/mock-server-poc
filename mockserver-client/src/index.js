import { mockServerClient } from 'mockserver-client'

const host = "ac456d7a4c20f4c9d9561ad611cdf928-1150027820.us-east-1.elb.amazonaws.com";
const port = 80;

(async () => {
    await mockServerClient(host, port).reset();

    mockServerClient(host, port ).mockAnyResponse([
        {
            "httpRequest": {
                "method": "POST",
                "path": "/wsTokenVirtual/wsTokenVirtual.asmx",
                "body": {
                    "type" : "XML",
                    "xml" : `<bookstore>
                        <book nationality="ITALIAN" category="COOKING">
                            <title lang="en">Everyday Italian</title>
                            <author>\${xmlunit.ignore}</author>
                            <year>\${xmlunit.isNumber}</year>
                            <price>30.00</price>
                        </book>
                    </bookstore>`
                }
            },
            "httpResponse": {
                "statusCode": 200,
                "body": {
                    "type": "XML",
                    "xml" : `<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema"><soap:Body><app_Login_banca_en_Linea_con_factorResponse xmlns="http://tempuri.org/"><app_Login_banca_en_Linea_con_factorResult><?xml version='1.0' encoding='utf-8'?><mensaje><encabezado><codigo_retorno>3</codigo_retorno><mensaje_usuario>TU INFORMACIÓN NO ES CORRECTA, POR FAVOR VERIFICA</mensaje_usuario><mensaje_tecnico></mensaje_tecnico><utiliza_token>0</utiliza_token><pns_usuariocreado>False</pns_usuariocreado><pns_dispositivos>0</pns_dispositivos><UsuarioHuella_Creado>False</UsuarioHuella_Creado><TokenBI_Afiliado>False</TokenBI_Afiliado><ReconocimientoFacial_Estado>False</ReconocimientoFacial_Estado><TokenBI_Obligatorio>False</TokenBI_Obligatorio></encabezado></mensaje></app_Login_banca_en_Linea_con_factorResult></app_Login_banca_en_Linea_con_factorResponse></soap:Body></soap:Envelope>`
                },
            }
        },
        {
            "httpRequest": {
                "method": "POST",
                "path": "/wsTokenVirtual/wsTokenVirtual.asmx",
                "body": {
                    "type" : "XML",
                    "xml": `<soapenv:Envelope
                    xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
                    xmlns:tem="http://tempuri.org/">
                    <soapenv:Header/>
                    <soapenv:Body>
                        <tem:app_Login_banca_en_Linea_con_factor>
                            <tem:XML_Mensaje>
                                <![CDATA[<mensaje><encabezado><usr_ws>usrmobile</usr_ws><password_ws>52667433CF6631339D660433</password_ws><utiliza_token>0</utiliza_token><codigo_usr_banca>1781871</codigo_usr_banca><usr_banca>\${xmlunit.ignore}</usr_banca></encabezado><Informacion><Password>1234567</Password><transaction_id>0</transaction_id><transaction_amount>0</transaction_amount><transaction_value>0</transaction_value><ip>10.128.2.1</ip><datetime>2022-10-18 14:41:14 PM</datetime></Informacion></mensaje>]]>
                            </tem:XML_Mensaje>
                        </tem:app_Login_banca_en_Linea_con_factor>
                    </soapenv:Body>
                </soapenv:Envelope>`
                }
            },
            "httpResponse": {
                "statusCode": 200,
                "body": {
                    "type": "XML",
                    "xml" : `<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema"><soap:Body><app_Login_banca_en_Linea_con_factorResponse xmlns="http://tempuri.org/"><app_Login_banca_en_Linea_con_factorResult><?xml version='1.0' encoding='utf-8'?><mensaje><encabezado><codigo_retorno>3</codigo_retorno><mensaje_usuario>TU INFORMACIÓN NO ES CORRECTA, POR FAVOR VERIFICA</mensaje_usuario><mensaje_tecnico></mensaje_tecnico><utiliza_token>0</utiliza_token><pns_usuariocreado>False</pns_usuariocreado><pns_dispositivos>0</pns_dispositivos><UsuarioHuella_Creado>False</UsuarioHuella_Creado><TokenBI_Afiliado>False</TokenBI_Afiliado><ReconocimientoFacial_Estado>False</ReconocimientoFacial_Estado><TokenBI_Obligatorio>False</TokenBI_Obligatorio></encabezado></mensaje></app_Login_banca_en_Linea_con_factorResult></app_Login_banca_en_Linea_con_factorResponse></soap:Body></soap:Envelope>`
                },
            }
        }
    ]).then(
        function () {
            console.log("Successful Login expectation created");
        },
        function (error) {
            console.log(error);
        }
    ).catch(err => console.error(err));
}
)();
