export const consultaCuentaExpectations = [
    {
        "httpRequest": {
            "method": "POST",
            "path": "/WS_Web_Mobile2/WS_CONSULTA_CUENTAS.asmx",
            "body": {
                "type" : "XML",
                "xml": `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ws="http://tempuri.org/WS_Web_Mobile/WS_CONSULTA_CUENTAS">
                <soapenv:Header />
                <soapenv:Body>
                    <ws:Consulta_Cuentas>
                        <!--Optional:-->
                        <ws:XML_Mensaje>
                            <![CDATA[<mensaje><encabezado><codigo_usr_banca>1781871</codigo_usr_banca><usr_banca>gerardo10</usr_banca><utiliza_token>true</utiliza_token><usr_ws>usrmobile</usr_ws><password_ws>52667433CF6631339D660433</password_ws></encabezado><Informacion><TipoMoneda>1</TipoMoneda><TipoCuenta>1</TipoCuenta><TipoOperacion>1</TipoOperacion><Banco>1</Banco></Informacion></mensaje>]]>
            
                        </ws:XML_Mensaje>
                    </ws:Consulta_Cuentas>
                </soapenv:Body>
            </soapenv:Envelope>`
            }
        },
        "httpResponse": {
            "statusCode": 200,
            "body": {
                "type": "XML",
                "xml" : `<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema"><soap:Body><Consulta_CuentasResponse xmlns="http://tempuri.org/WS_Web_Mobile/WS_CONSULTA_CUENTAS"><Consulta_CuentasResult>&lt;?xml version='1.0' encoding='utf-8'?&gt;&lt;mensaje&gt;&lt;encabezado&gt;&lt;codigo_retorno&gt;0&lt;/codigo_retorno&gt;&lt;mensaje_usuario&gt;CUENTAS CONSULTADAS CON EXITO&lt;/mensaje_usuario&gt;&lt;mensaje_tecnico&gt;&lt;/mensaje_tecnico&gt;&lt;utiliza_token&gt;True&lt;/utiliza_token&gt;&lt;/encabezado&gt;&lt;Informacion&gt;&lt;Cuentas&gt;&lt;Cuenta&gt;0000000919&lt;/Cuenta&gt;&lt;Estado&gt;VIGENTE&lt;/Estado&gt;&lt;TipoMoneda&gt;Q.&lt;/TipoMoneda&gt;&lt;TipoCuenta&gt;1&lt;/TipoCuenta&gt;&lt;CodigoMoneda&gt;1&lt;/CodigoMoneda&gt;&lt;NombreCuenta&gt;&lt;![CDATA[QUEZADA MAZARIEGOS  OSCAR ARMANDO]]&gt;&lt;/NombreCuenta&gt;&lt;Banco&gt;1&lt;/Banco&gt;&lt;/Cuentas&gt;&lt;Cuentas&gt;&lt;Cuenta&gt;0000388249&lt;/Cuenta&gt;&lt;Estado&gt;VIGENTE&lt;/Estado&gt;&lt;TipoMoneda&gt;Q.&lt;/TipoMoneda&gt;&lt;TipoCuenta&gt;1&lt;/TipoCuenta&gt;&lt;CodigoMoneda&gt;1&lt;/CodigoMoneda&gt;&lt;NombreCuenta&gt;&lt;![CDATA[CONTROL DE CALIDAD PROYECTOS BMODERNA]]&gt;&lt;/NombreCuenta&gt;&lt;Banco&gt;1&lt;/Banco&gt;&lt;/Cuentas&gt;&lt;Cuentas&gt;&lt;Cuenta&gt;0140117101&lt;/Cuenta&gt;&lt;Estado&gt;VIGENTE&lt;/Estado&gt;&lt;TipoMoneda&gt;Q.&lt;/TipoMoneda&gt;&lt;TipoCuenta&gt;1&lt;/TipoCuenta&gt;&lt;CodigoMoneda&gt;1&lt;/CodigoMoneda&gt;&lt;NombreCuenta&gt;&lt;![CDATA[SALAZAR PINEDA JUAN FRANCISCO]]&gt;&lt;/NombreCuenta&gt;&lt;Banco&gt;1&lt;/Banco&gt;&lt;/Cuentas&gt;&lt;Cuentas&gt;&lt;Cuenta&gt;0140740340&lt;/Cuenta&gt;&lt;Estado&gt;EMBARGADA&lt;/Estado&gt;&lt;TipoMoneda&gt;Q.&lt;/TipoMoneda&gt;&lt;TipoCuenta&gt;1&lt;/TipoCuenta&gt;&lt;CodigoMoneda&gt;1&lt;/CodigoMoneda&gt;&lt;NombreCuenta&gt;&lt;![CDATA[BONILLA ABRIL JORGE GUSTAVO]]&gt;&lt;/NombreCuenta&gt;&lt;Banco&gt;1&lt;/Banco&gt;&lt;/Cuentas&gt;&lt;Cuentas&gt;&lt;Cuenta&gt;0141165406&lt;/Cuenta&gt;&lt;Estado&gt;VIGENTE&lt;/Estado&gt;&lt;TipoMoneda&gt;Q.&lt;/TipoMoneda&gt;&lt;TipoCuenta&gt;1&lt;/TipoCuenta&gt;&lt;CodigoMoneda&gt;1&lt;/CodigoMoneda&gt;&lt;NombreCuenta&gt;&lt;![CDATA[BROL PALACIOS VIVIAN LISSETTE]]&gt;&lt;/NombreCuenta&gt;&lt;Banco&gt;1&lt;/Banco&gt;&lt;/Cuentas&gt;&lt;Cuentas&gt;&lt;Cuenta&gt;0420011502&lt;/Cuenta&gt;&lt;Estado&gt;VIGENTE&lt;/Estado&gt;&lt;TipoMoneda&gt;Q.&lt;/TipoMoneda&gt;&lt;TipoCuenta&gt;1&lt;/TipoCuenta&gt;&lt;CodigoMoneda&gt;1&lt;/CodigoMoneda&gt;&lt;NombreCuenta&gt;&lt;![CDATA[CARCAMO PALMA DE PENAGOS MELIDA EUGENIA]]&gt;&lt;/NombreCuenta&gt;&lt;Banco&gt;1&lt;/Banco&gt;&lt;/Cuentas&gt;&lt;Cuentas&gt;&lt;Cuenta&gt;0430090167&lt;/Cuenta&gt;&lt;Estado&gt;VIGENTE&lt;/Estado&gt;&lt;TipoMoneda&gt;Q.&lt;/TipoMoneda&gt;&lt;TipoCuenta&gt;1&lt;/TipoCuenta&gt;&lt;CodigoMoneda&gt;1&lt;/CodigoMoneda&gt;&lt;NombreCuenta&gt;&lt;![CDATA[FLORES AMADO THELMA YOLANDA]]&gt;&lt;/NombreCuenta&gt;&lt;Banco&gt;1&lt;/Banco&gt;&lt;/Cuentas&gt;&lt;Cuentas&gt;&lt;Cuenta&gt;4160005629&lt;/Cuenta&gt;&lt;Estado&gt;VIGENTE&lt;/Estado&gt;&lt;TipoMoneda&gt;Q.&lt;/TipoMoneda&gt;&lt;TipoCuenta&gt;1&lt;/TipoCuenta&gt;&lt;CodigoMoneda&gt;1&lt;/CodigoMoneda&gt;&lt;NombreCuenta&gt;&lt;![CDATA[ROSALES MONTENEGRO DE POROJ LESBIA JUDIT]]&gt;&lt;/NombreCuenta&gt;&lt;Banco&gt;1&lt;/Banco&gt;&lt;/Cuentas&gt;&lt;Cuentas&gt;&lt;Cuenta&gt;0000160887&lt;/Cuenta&gt;&lt;Estado&gt;VIGENTE&lt;/Estado&gt;&lt;TipoMoneda&gt;US$&lt;/TipoMoneda&gt;&lt;TipoCuenta&gt;1&lt;/TipoCuenta&gt;&lt;CodigoMoneda&gt;2&lt;/CodigoMoneda&gt;&lt;NombreCuenta&gt;&lt;![CDATA[CORP INDUST CENTRO AMERICA]]&gt;&lt;/NombreCuenta&gt;&lt;Banco&gt;1&lt;/Banco&gt;&lt;/Cuentas&gt;&lt;Cuentas&gt;&lt;Cuenta&gt;0040077166&lt;/Cuenta&gt;&lt;Estado&gt;PENDIENTE&lt;/Estado&gt;&lt;TipoMoneda&gt;US$&lt;/TipoMoneda&gt;&lt;TipoCuenta&gt;1&lt;/TipoCuenta&gt;&lt;CodigoMoneda&gt;2&lt;/CodigoMoneda&gt;&lt;NombreCuenta&gt;&lt;![CDATA[SEMILLAS UNIVERSALES, S.A.]]&gt;&lt;/NombreCuenta&gt;&lt;Banco&gt;1&lt;/Banco&gt;&lt;/Cuentas&gt;&lt;Cuentas&gt;&lt;Cuenta&gt;200025031&lt;/Cuenta&gt;&lt;Estado&gt;ACTIVA&lt;/Estado&gt;&lt;TipoMoneda&gt;US$&lt;/TipoMoneda&gt;&lt;TipoCuenta&gt;1&lt;/TipoCuenta&gt;&lt;CodigoMoneda&gt;2&lt;/CodigoMoneda&gt;&lt;NombreCuenta&gt;&lt;![CDATA[BIRASA, S. A.]]&gt;&lt;/NombreCuenta&gt;&lt;Banco&gt;2&lt;/Banco&gt;&lt;/Cuentas&gt;&lt;Cuentas&gt;&lt;Cuenta&gt;200043005&lt;/Cuenta&gt;&lt;Estado&gt;ACTIVA&lt;/Estado&gt;&lt;TipoMoneda&gt;US$&lt;/TipoMoneda&gt;&lt;TipoCuenta&gt;1&lt;/TipoCuenta&gt;&lt;CodigoMoneda&gt;2&lt;/CodigoMoneda&gt;&lt;NombreCuenta&gt;&lt;![CDATA[JOSE FERNANDO VELEZ CRUZ]]&gt;&lt;/NombreCuenta&gt;&lt;Banco&gt;2&lt;/Banco&gt;&lt;/Cuentas&gt;&lt;/Informacion&gt;&lt;/mensaje&gt;</Consulta_CuentasResult></Consulta_CuentasResponse></soap:Body></soap:Envelope>`
            }
        }
    },
    {
        "httpRequest": {
            "method": "POST",
            "path": "/WS_Web_Mobile2/WS_CONSULTA_CUENTAS.asmx",
            "body": {
                "type" : "XML",
                "xml": `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ws="http://tempuri.org/WS_Web_Mobile/WS_CONSULTA_CUENTAS">
                <soapenv:Header />
                <soapenv:Body>
                    <ws:Consulta_Cuentas>
                        <!--Optional:-->
                        <ws:XML_Mensaje>
                            <![CDATA[<mensaje><encabezado><codigo_usr_banca>1793671</codigo_usr_banca><usr_banca>cavila</usr_banca><utiliza_token>true</utiliza_token><usr_ws>usrmobile</usr_ws><password_ws>52667433CF6631339D660433</password_ws></encabezado><Informacion><TipoMoneda>1</TipoMoneda><TipoCuenta>1</TipoCuenta><TipoOperacion>1</TipoOperacion><Banco>1</Banco></Informacion></mensaje>]]>
            
                        </ws:XML_Mensaje>
                    </ws:Consulta_Cuentas>
                </soapenv:Body>
            </soapenv:Envelope>`
            }
        },
        "httpResponse": {
            "statusCode": 200,
            "body": {
                "type": "XML",
                "xml" : `<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema"><soap:Body><Consulta_CuentasResponse xmlns="http://tempuri.org/WS_Web_Mobile/WS_CONSULTA_CUENTAS"><Consulta_CuentasResult>&lt;?xml version='1.0' encoding='utf-8'?&gt;&lt;mensaje&gt;&lt;encabezado&gt;&lt;codigo_retorno&gt;0&lt;/codigo_retorno&gt;&lt;mensaje_usuario&gt;CUENTAS CONSULTADAS CON EXITO&lt;/mensaje_usuario&gt;&lt;mensaje_tecnico&gt;&lt;/mensaje_tecnico&gt;&lt;utiliza_token&gt;True&lt;/utiliza_token&gt;&lt;/encabezado&gt;&lt;Informacion&gt;&lt;Cuentas&gt;&lt;Cuenta&gt;0000000919&lt;/Cuenta&gt;&lt;Estado&gt;VIGENTE&lt;/Estado&gt;&lt;TipoMoneda&gt;Q.&lt;/TipoMoneda&gt;&lt;TipoCuenta&gt;1&lt;/TipoCuenta&gt;&lt;CodigoMoneda&gt;1&lt;/CodigoMoneda&gt;&lt;NombreCuenta&gt;&lt;![CDATA[QUEZADA MAZARIEGOS  OSCAR ARMANDO]]&gt;&lt;/NombreCuenta&gt;&lt;Banco&gt;1&lt;/Banco&gt;&lt;/Cuentas&gt;&lt;Cuentas&gt;&lt;Cuenta&gt;0050043570&lt;/Cuenta&gt;&lt;Estado&gt;VIGENTE&lt;/Estado&gt;&lt;TipoMoneda&gt;Q.&lt;/TipoMoneda&gt;&lt;TipoCuenta&gt;1&lt;/TipoCuenta&gt;&lt;CodigoMoneda&gt;1&lt;/CodigoMoneda&gt;&lt;NombreCuenta&gt;&lt;![CDATA[CASTELLANOS GONZALEZ SUSANA PATRICIA]]&gt;&lt;/NombreCuenta&gt;&lt;Banco&gt;1&lt;/Banco&gt;&lt;/Cuentas&gt;&lt;Cuentas&gt;&lt;Cuenta&gt;0180080723&lt;/Cuenta&gt;&lt;Estado&gt;VIGENTE&lt;/Estado&gt;&lt;TipoMoneda&gt;Q.&lt;/TipoMoneda&gt;&lt;TipoCuenta&gt;1&lt;/TipoCuenta&gt;&lt;CodigoMoneda&gt;1&lt;/CodigoMoneda&gt;&lt;NombreCuenta&gt;&lt;![CDATA[RAMIREZ SOLORZANO NATALIA]]&gt;&lt;/NombreCuenta&gt;&lt;Banco&gt;1&lt;/Banco&gt;&lt;/Cuentas&gt;&lt;Cuentas&gt;&lt;Cuenta&gt;2110042432&lt;/Cuenta&gt;&lt;Estado&gt;VIGENTE&lt;/Estado&gt;&lt;TipoMoneda&gt;Q.&lt;/TipoMoneda&gt;&lt;TipoCuenta&gt;1&lt;/TipoCuenta&gt;&lt;CodigoMoneda&gt;1&lt;/CodigoMoneda&gt;&lt;NombreCuenta&gt;&lt;![CDATA[GUERRA GARCIA JORGE MARIO]]&gt;&lt;/NombreCuenta&gt;&lt;Banco&gt;1&lt;/Banco&gt;&lt;/Cuentas&gt;&lt;Cuentas&gt;&lt;Cuenta&gt;2450005355&lt;/Cuenta&gt;&lt;Estado&gt;VIGENTE&lt;/Estado&gt;&lt;TipoMoneda&gt;Q.&lt;/TipoMoneda&gt;&lt;TipoCuenta&gt;1&lt;/TipoCuenta&gt;&lt;CodigoMoneda&gt;1&lt;/CodigoMoneda&gt;&lt;NombreCuenta&gt;&lt;![CDATA[PINEDA MENDEZ SONIA ELIZABETH]]&gt;&lt;/NombreCuenta&gt;&lt;Banco&gt;1&lt;/Banco&gt;&lt;/Cuentas&gt;&lt;Cuentas&gt;&lt;Cuenta&gt;6960005731&lt;/Cuenta&gt;&lt;Estado&gt;VIGENTE&lt;/Estado&gt;&lt;TipoMoneda&gt;Q.&lt;/TipoMoneda&gt;&lt;TipoCuenta&gt;1&lt;/TipoCuenta&gt;&lt;CodigoMoneda&gt;1&lt;/CodigoMoneda&gt;&lt;NombreCuenta&gt;&lt;![CDATA[ESQUIVEL GARCIA SALAS NORMAN ESTUARDO]]&gt;&lt;/NombreCuenta&gt;&lt;Banco&gt;1&lt;/Banco&gt;&lt;/Cuentas&gt;&lt;Cuentas&gt;&lt;Cuenta&gt;0000251850&lt;/Cuenta&gt;&lt;Estado&gt;VIGENTE&lt;/Estado&gt;&lt;TipoMoneda&gt;US$&lt;/TipoMoneda&gt;&lt;TipoCuenta&gt;1&lt;/TipoCuenta&gt;&lt;CodigoMoneda&gt;2&lt;/CodigoMoneda&gt;&lt;NombreCuenta&gt;&lt;![CDATA[PORTILLO SOSA DE FLORES IRMA YOLANDA]]&gt;&lt;/NombreCuenta&gt;&lt;Banco&gt;1&lt;/Banco&gt;&lt;/Cuentas&gt;&lt;Cuentas&gt;&lt;Cuenta&gt;200042556&lt;/Cuenta&gt;&lt;Estado&gt;ACTIVA&lt;/Estado&gt;&lt;TipoMoneda&gt;US$&lt;/TipoMoneda&gt;&lt;TipoCuenta&gt;1&lt;/TipoCuenta&gt;&lt;CodigoMoneda&gt;2&lt;/CodigoMoneda&gt;&lt;NombreCuenta&gt;&lt;![CDATA[COMPAÑIA FARMACEUTICA LANQUETIN]]&gt;&lt;/NombreCuenta&gt;&lt;Banco&gt;2&lt;/Banco&gt;&lt;/Cuentas&gt;&lt;/Informacion&gt;&lt;/mensaje&gt;</Consulta_CuentasResult></Consulta_CuentasResponse></soap:Body></soap:Envelope>`
            }
        }
    },
    {
        "httpRequest": {
            "method": "POST",
            "path": "/WS_Web_Mobile2/WS_CONSULTA_CUENTAS.asmx",
            "body": {
                "type" : "XML",
                "xml": `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
                <soapenv:Envelope
                    xmlns:soapenv="http://www.w3.org/2003/05/soap-envelope">  
                    <soapenv:Header/>  
                    <soapenv:Body>    
                        <ns1:Consulta_Cuentas
                            xmlns:ns1="http://tempuri.org/WS_Web_Mobile/WS_CONSULTA_CUENTAS">      
                            <ns1:XML_Mensaje>        
                                <![CDATA[<mensaje><encabezado><codigo_usr_banca>1781871</codigo_usr_banca><usr_banca>gerardo10</usr_banca><utiliza_token>true</utiliza_token><usr_ws>usrmobile</usr_ws><password_ws>52667433CF6631339D660433</password_ws></encabezado><Informacion><TipoMoneda>1</TipoMoneda><TipoCuenta>1</TipoCuenta><TipoOperacion>1</TipoOperacion><Banco>1</Banco></Informacion></mensaje>]]>      
                            </ns1:XML_Mensaje>    
                        </ns1:Consulta_Cuentas>  
                    </soapenv:Body>
                </soapenv:Envelope>`
            }
        },
        "httpResponse": {
            "statusCode": 200,
            "body": {
                "type": "XML",
                "xml" : `<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema"><soap:Body><Consulta_CuentasResponse xmlns="http://tempuri.org/WS_Web_Mobile/WS_CONSULTA_CUENTAS"><Consulta_CuentasResult>&lt;?xml version='1.0' encoding='utf-8'?&gt;&lt;mensaje&gt;&lt;encabezado&gt;&lt;codigo_retorno&gt;0&lt;/codigo_retorno&gt;&lt;mensaje_usuario&gt;CUENTAS CONSULTADAS CON EXITO&lt;/mensaje_usuario&gt;&lt;mensaje_tecnico&gt;&lt;/mensaje_tecnico&gt;&lt;utiliza_token&gt;True&lt;/utiliza_token&gt;&lt;/encabezado&gt;&lt;Informacion&gt;&lt;Cuentas&gt;&lt;Cuenta&gt;0000000919&lt;/Cuenta&gt;&lt;Estado&gt;VIGENTE&lt;/Estado&gt;&lt;TipoMoneda&gt;Q.&lt;/TipoMoneda&gt;&lt;TipoCuenta&gt;1&lt;/TipoCuenta&gt;&lt;CodigoMoneda&gt;1&lt;/CodigoMoneda&gt;&lt;NombreCuenta&gt;&lt;![CDATA[QUEZADA MAZARIEGOS  OSCAR ARMANDO]]&gt;&lt;/NombreCuenta&gt;&lt;Banco&gt;1&lt;/Banco&gt;&lt;/Cuentas&gt;&lt;Cuentas&gt;&lt;Cuenta&gt;0000388249&lt;/Cuenta&gt;&lt;Estado&gt;VIGENTE&lt;/Estado&gt;&lt;TipoMoneda&gt;Q.&lt;/TipoMoneda&gt;&lt;TipoCuenta&gt;1&lt;/TipoCuenta&gt;&lt;CodigoMoneda&gt;1&lt;/CodigoMoneda&gt;&lt;NombreCuenta&gt;&lt;![CDATA[CONTROL DE CALIDAD PROYECTOS BMODERNA]]&gt;&lt;/NombreCuenta&gt;&lt;Banco&gt;1&lt;/Banco&gt;&lt;/Cuentas&gt;&lt;Cuentas&gt;&lt;Cuenta&gt;0140117101&lt;/Cuenta&gt;&lt;Estado&gt;VIGENTE&lt;/Estado&gt;&lt;TipoMoneda&gt;Q.&lt;/TipoMoneda&gt;&lt;TipoCuenta&gt;1&lt;/TipoCuenta&gt;&lt;CodigoMoneda&gt;1&lt;/CodigoMoneda&gt;&lt;NombreCuenta&gt;&lt;![CDATA[SALAZAR PINEDA JUAN FRANCISCO]]&gt;&lt;/NombreCuenta&gt;&lt;Banco&gt;1&lt;/Banco&gt;&lt;/Cuentas&gt;&lt;Cuentas&gt;&lt;Cuenta&gt;0140740340&lt;/Cuenta&gt;&lt;Estado&gt;EMBARGADA&lt;/Estado&gt;&lt;TipoMoneda&gt;Q.&lt;/TipoMoneda&gt;&lt;TipoCuenta&gt;1&lt;/TipoCuenta&gt;&lt;CodigoMoneda&gt;1&lt;/CodigoMoneda&gt;&lt;NombreCuenta&gt;&lt;![CDATA[BONILLA ABRIL JORGE GUSTAVO]]&gt;&lt;/NombreCuenta&gt;&lt;Banco&gt;1&lt;/Banco&gt;&lt;/Cuentas&gt;&lt;Cuentas&gt;&lt;Cuenta&gt;0141165406&lt;/Cuenta&gt;&lt;Estado&gt;VIGENTE&lt;/Estado&gt;&lt;TipoMoneda&gt;Q.&lt;/TipoMoneda&gt;&lt;TipoCuenta&gt;1&lt;/TipoCuenta&gt;&lt;CodigoMoneda&gt;1&lt;/CodigoMoneda&gt;&lt;NombreCuenta&gt;&lt;![CDATA[BROL PALACIOS VIVIAN LISSETTE]]&gt;&lt;/NombreCuenta&gt;&lt;Banco&gt;1&lt;/Banco&gt;&lt;/Cuentas&gt;&lt;Cuentas&gt;&lt;Cuenta&gt;0420011502&lt;/Cuenta&gt;&lt;Estado&gt;VIGENTE&lt;/Estado&gt;&lt;TipoMoneda&gt;Q.&lt;/TipoMoneda&gt;&lt;TipoCuenta&gt;1&lt;/TipoCuenta&gt;&lt;CodigoMoneda&gt;1&lt;/CodigoMoneda&gt;&lt;NombreCuenta&gt;&lt;![CDATA[CARCAMO PALMA DE PENAGOS MELIDA EUGENIA]]&gt;&lt;/NombreCuenta&gt;&lt;Banco&gt;1&lt;/Banco&gt;&lt;/Cuentas&gt;&lt;Cuentas&gt;&lt;Cuenta&gt;0430090167&lt;/Cuenta&gt;&lt;Estado&gt;VIGENTE&lt;/Estado&gt;&lt;TipoMoneda&gt;Q.&lt;/TipoMoneda&gt;&lt;TipoCuenta&gt;1&lt;/TipoCuenta&gt;&lt;CodigoMoneda&gt;1&lt;/CodigoMoneda&gt;&lt;NombreCuenta&gt;&lt;![CDATA[FLORES AMADO THELMA YOLANDA]]&gt;&lt;/NombreCuenta&gt;&lt;Banco&gt;1&lt;/Banco&gt;&lt;/Cuentas&gt;&lt;Cuentas&gt;&lt;Cuenta&gt;4160005629&lt;/Cuenta&gt;&lt;Estado&gt;VIGENTE&lt;/Estado&gt;&lt;TipoMoneda&gt;Q.&lt;/TipoMoneda&gt;&lt;TipoCuenta&gt;1&lt;/TipoCuenta&gt;&lt;CodigoMoneda&gt;1&lt;/CodigoMoneda&gt;&lt;NombreCuenta&gt;&lt;![CDATA[ROSALES MONTENEGRO DE POROJ LESBIA JUDIT]]&gt;&lt;/NombreCuenta&gt;&lt;Banco&gt;1&lt;/Banco&gt;&lt;/Cuentas&gt;&lt;Cuentas&gt;&lt;Cuenta&gt;0000160887&lt;/Cuenta&gt;&lt;Estado&gt;VIGENTE&lt;/Estado&gt;&lt;TipoMoneda&gt;US$&lt;/TipoMoneda&gt;&lt;TipoCuenta&gt;1&lt;/TipoCuenta&gt;&lt;CodigoMoneda&gt;2&lt;/CodigoMoneda&gt;&lt;NombreCuenta&gt;&lt;![CDATA[CORP INDUST CENTRO AMERICA]]&gt;&lt;/NombreCuenta&gt;&lt;Banco&gt;1&lt;/Banco&gt;&lt;/Cuentas&gt;&lt;Cuentas&gt;&lt;Cuenta&gt;0040077166&lt;/Cuenta&gt;&lt;Estado&gt;PENDIENTE&lt;/Estado&gt;&lt;TipoMoneda&gt;US$&lt;/TipoMoneda&gt;&lt;TipoCuenta&gt;1&lt;/TipoCuenta&gt;&lt;CodigoMoneda&gt;2&lt;/CodigoMoneda&gt;&lt;NombreCuenta&gt;&lt;![CDATA[SEMILLAS UNIVERSALES, S.A.]]&gt;&lt;/NombreCuenta&gt;&lt;Banco&gt;1&lt;/Banco&gt;&lt;/Cuentas&gt;&lt;Cuentas&gt;&lt;Cuenta&gt;200025031&lt;/Cuenta&gt;&lt;Estado&gt;ACTIVA&lt;/Estado&gt;&lt;TipoMoneda&gt;US$&lt;/TipoMoneda&gt;&lt;TipoCuenta&gt;1&lt;/TipoCuenta&gt;&lt;CodigoMoneda&gt;2&lt;/CodigoMoneda&gt;&lt;NombreCuenta&gt;&lt;![CDATA[BIRASA, S. A.]]&gt;&lt;/NombreCuenta&gt;&lt;Banco&gt;2&lt;/Banco&gt;&lt;/Cuentas&gt;&lt;Cuentas&gt;&lt;Cuenta&gt;200043005&lt;/Cuenta&gt;&lt;Estado&gt;ACTIVA&lt;/Estado&gt;&lt;TipoMoneda&gt;US$&lt;/TipoMoneda&gt;&lt;TipoCuenta&gt;1&lt;/TipoCuenta&gt;&lt;CodigoMoneda&gt;2&lt;/CodigoMoneda&gt;&lt;NombreCuenta&gt;&lt;![CDATA[JOSE FERNANDO VELEZ CRUZ]]&gt;&lt;/NombreCuenta&gt;&lt;Banco&gt;2&lt;/Banco&gt;&lt;/Cuentas&gt;&lt;/Informacion&gt;&lt;/mensaje&gt;</Consulta_CuentasResult></Consulta_CuentasResponse></soap:Body></soap:Envelope>`
            }
        }
    },
    {
        "httpRequest": {
            "method": "POST",
            "path": "/WS_Web_Mobile2/WS_CONSULTA_CUENTAS.asmx",
            "body": {
                "type" : "XML",
                "xml": `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
                <soapenv:Envelope
                    xmlns:soapenv="http://www.w3.org/2003/05/soap-envelope">  
                    <soapenv:Header/>  
                    <soapenv:Body>    
                        <ns1:Consulta_Cuentas
                            xmlns:ns1="http://tempuri.org/WS_Web_Mobile/WS_CONSULTA_CUENTAS">      
                            <ns1:XML_Mensaje>        
                                <![CDATA[<mensaje><encabezado><codigo_usr_banca>1793671</codigo_usr_banca><usr_banca>cavila</usr_banca><utiliza_token>true</utiliza_token><usr_ws>usrmobile</usr_ws><password_ws>52667433CF6631339D660433</password_ws></encabezado><Informacion><TipoMoneda>1</TipoMoneda><TipoCuenta>1</TipoCuenta><TipoOperacion>1</TipoOperacion><Banco>1</Banco></Informacion></mensaje>]]>
                            </ns1:XML_Mensaje>    
                        </ns1:Consulta_Cuentas>  
                    </soapenv:Body>
                </soapenv:Envelope>`
            }
        },
        "httpResponse": {
            "statusCode": 200,
            "body": {
                "type": "XML",
                "xml" : `<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema"><soap:Body><Consulta_CuentasResponse xmlns="http://tempuri.org/WS_Web_Mobile/WS_CONSULTA_CUENTAS"><Consulta_CuentasResult>&lt;?xml version='1.0' encoding='utf-8'?&gt;&lt;mensaje&gt;&lt;encabezado&gt;&lt;codigo_retorno&gt;0&lt;/codigo_retorno&gt;&lt;mensaje_usuario&gt;CUENTAS CONSULTADAS CON EXITO&lt;/mensaje_usuario&gt;&lt;mensaje_tecnico&gt;&lt;/mensaje_tecnico&gt;&lt;utiliza_token&gt;True&lt;/utiliza_token&gt;&lt;/encabezado&gt;&lt;Informacion&gt;&lt;Cuentas&gt;&lt;Cuenta&gt;0000000919&lt;/Cuenta&gt;&lt;Estado&gt;VIGENTE&lt;/Estado&gt;&lt;TipoMoneda&gt;Q.&lt;/TipoMoneda&gt;&lt;TipoCuenta&gt;1&lt;/TipoCuenta&gt;&lt;CodigoMoneda&gt;1&lt;/CodigoMoneda&gt;&lt;NombreCuenta&gt;&lt;![CDATA[QUEZADA MAZARIEGOS  OSCAR ARMANDO]]&gt;&lt;/NombreCuenta&gt;&lt;Banco&gt;1&lt;/Banco&gt;&lt;/Cuentas&gt;&lt;Cuentas&gt;&lt;Cuenta&gt;0050043570&lt;/Cuenta&gt;&lt;Estado&gt;VIGENTE&lt;/Estado&gt;&lt;TipoMoneda&gt;Q.&lt;/TipoMoneda&gt;&lt;TipoCuenta&gt;1&lt;/TipoCuenta&gt;&lt;CodigoMoneda&gt;1&lt;/CodigoMoneda&gt;&lt;NombreCuenta&gt;&lt;![CDATA[CASTELLANOS GONZALEZ SUSANA PATRICIA]]&gt;&lt;/NombreCuenta&gt;&lt;Banco&gt;1&lt;/Banco&gt;&lt;/Cuentas&gt;&lt;Cuentas&gt;&lt;Cuenta&gt;0180080723&lt;/Cuenta&gt;&lt;Estado&gt;VIGENTE&lt;/Estado&gt;&lt;TipoMoneda&gt;Q.&lt;/TipoMoneda&gt;&lt;TipoCuenta&gt;1&lt;/TipoCuenta&gt;&lt;CodigoMoneda&gt;1&lt;/CodigoMoneda&gt;&lt;NombreCuenta&gt;&lt;![CDATA[RAMIREZ SOLORZANO NATALIA]]&gt;&lt;/NombreCuenta&gt;&lt;Banco&gt;1&lt;/Banco&gt;&lt;/Cuentas&gt;&lt;Cuentas&gt;&lt;Cuenta&gt;2110042432&lt;/Cuenta&gt;&lt;Estado&gt;VIGENTE&lt;/Estado&gt;&lt;TipoMoneda&gt;Q.&lt;/TipoMoneda&gt;&lt;TipoCuenta&gt;1&lt;/TipoCuenta&gt;&lt;CodigoMoneda&gt;1&lt;/CodigoMoneda&gt;&lt;NombreCuenta&gt;&lt;![CDATA[GUERRA GARCIA JORGE MARIO]]&gt;&lt;/NombreCuenta&gt;&lt;Banco&gt;1&lt;/Banco&gt;&lt;/Cuentas&gt;&lt;Cuentas&gt;&lt;Cuenta&gt;2450005355&lt;/Cuenta&gt;&lt;Estado&gt;VIGENTE&lt;/Estado&gt;&lt;TipoMoneda&gt;Q.&lt;/TipoMoneda&gt;&lt;TipoCuenta&gt;1&lt;/TipoCuenta&gt;&lt;CodigoMoneda&gt;1&lt;/CodigoMoneda&gt;&lt;NombreCuenta&gt;&lt;![CDATA[PINEDA MENDEZ SONIA ELIZABETH]]&gt;&lt;/NombreCuenta&gt;&lt;Banco&gt;1&lt;/Banco&gt;&lt;/Cuentas&gt;&lt;Cuentas&gt;&lt;Cuenta&gt;6960005731&lt;/Cuenta&gt;&lt;Estado&gt;VIGENTE&lt;/Estado&gt;&lt;TipoMoneda&gt;Q.&lt;/TipoMoneda&gt;&lt;TipoCuenta&gt;1&lt;/TipoCuenta&gt;&lt;CodigoMoneda&gt;1&lt;/CodigoMoneda&gt;&lt;NombreCuenta&gt;&lt;![CDATA[ESQUIVEL GARCIA SALAS NORMAN ESTUARDO]]&gt;&lt;/NombreCuenta&gt;&lt;Banco&gt;1&lt;/Banco&gt;&lt;/Cuentas&gt;&lt;Cuentas&gt;&lt;Cuenta&gt;0000251850&lt;/Cuenta&gt;&lt;Estado&gt;VIGENTE&lt;/Estado&gt;&lt;TipoMoneda&gt;US$&lt;/TipoMoneda&gt;&lt;TipoCuenta&gt;1&lt;/TipoCuenta&gt;&lt;CodigoMoneda&gt;2&lt;/CodigoMoneda&gt;&lt;NombreCuenta&gt;&lt;![CDATA[PORTILLO SOSA DE FLORES IRMA YOLANDA]]&gt;&lt;/NombreCuenta&gt;&lt;Banco&gt;1&lt;/Banco&gt;&lt;/Cuentas&gt;&lt;Cuentas&gt;&lt;Cuenta&gt;200042556&lt;/Cuenta&gt;&lt;Estado&gt;ACTIVA&lt;/Estado&gt;&lt;TipoMoneda&gt;US$&lt;/TipoMoneda&gt;&lt;TipoCuenta&gt;1&lt;/TipoCuenta&gt;&lt;CodigoMoneda&gt;2&lt;/CodigoMoneda&gt;&lt;NombreCuenta&gt;&lt;![CDATA[COMPAÑIA FARMACEUTICA LANQUETIN]]&gt;&lt;/NombreCuenta&gt;&lt;Banco&gt;2&lt;/Banco&gt;&lt;/Cuentas&gt;&lt;/Informacion&gt;&lt;/mensaje&gt;</Consulta_CuentasResult></Consulta_CuentasResponse></soap:Body></soap:Envelope>`
            }
        }
    },
]