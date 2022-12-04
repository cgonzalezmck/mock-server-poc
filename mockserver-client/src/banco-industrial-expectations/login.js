export const loginExpectations = [
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
                            <![CDATA[\${xmlunit.ignore}]]>      
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
                "xml" : `<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema"><soap:Body><app_Login_banca_en_Linea_con_factorResponse xmlns="http://tempuri.org/"><app_Login_banca_en_Linea_con_factorResult>&lt;?xml version='1.0' encoding='utf-8'?&gt;&lt;mensaje&gt;&lt;encabezado&gt;&lt;codigo_retorno&gt;0&lt;/codigo_retorno&gt;&lt;mensaje_usuario&gt;USUARIO AUTENTICADO DE MANERA EXITOSA&lt;/mensaje_usuario&gt;&lt;mensaje_tecnico&gt;&lt;/mensaje_tecnico&gt;&lt;utiliza_token&gt;1&lt;/utiliza_token&gt;&lt;pns_usuariocreado&gt;False&lt;/pns_usuariocreado&gt;&lt;pns_dispositivos&gt;0&lt;/pns_dispositivos&gt;&lt;UsuarioHuella_Creado&gt;False&lt;/UsuarioHuella_Creado&gt;&lt;TokenBI_Afiliado&gt;False&lt;/TokenBI_Afiliado&gt;&lt;ReconocimientoFacial_Estado&gt;False&lt;/ReconocimientoFacial_Estado&gt;&lt;TokenBI_Obligatorio&gt;False&lt;/TokenBI_Obligatorio&gt;&lt;autenticacion&gt;&lt;TipoAcceso&gt;LIGHT&lt;/TipoAcceso&gt;&lt;BiPerfilConfigurado&gt;1&lt;/BiPerfilConfigurado&gt;&lt;SolicitarTokenEnLogin&gt;0&lt;/SolicitarTokenEnLogin&gt;&lt;factores&gt;&lt;factor&gt;&lt;Codigo&gt;1&lt;/Codigo&gt;&lt;Nombre&gt;Mensaje de texto&lt;/Nombre&gt;&lt;Descripcion&gt;Token enviado por SMS&lt;/Descripcion&gt;&lt;EsMetodoPrincipal&gt;1&lt;/EsMetodoPrincipal&gt;&lt;EmpresaCelular&gt;C&lt;/EmpresaCelular&gt;&lt;Celular&gt;56523273&lt;/Celular&gt;&lt;/factor&gt;&lt;factor&gt;&lt;Codigo&gt;2&lt;/Codigo&gt;&lt;Nombre&gt;Correo electrónico&lt;/Nombre&gt;&lt;Descripcion&gt;Token enviado a correo electrónico&lt;/Descripcion&gt;&lt;EsMetodoPrincipal&gt;0&lt;/EsMetodoPrincipal&gt;&lt;CorreoElectronico&gt;feavila@bi.com.gt&lt;/CorreoElectronico&gt;&lt;/factor&gt;&lt;/factores&gt;&lt;/autenticacion&gt;&lt;/encabezado&gt;&lt;/mensaje&gt;</app_Login_banca_en_Linea_con_factorResult></app_Login_banca_en_Linea_con_factorResponse></soap:Body></soap:Envelope>`
            },
        }
    },
    {
        "httpRequest": {
            "method": "POST",
            "path": "/wsTokenVirtual/wsTokenVirtual.asmx",
            "body": {
                "type" : "XML",
                "xml": `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
                <soapenv:Envelope
                    xmlns:soapenv="http://www.w3.org/2003/05/soap-envelope">  
                    <soapenv:Header/>  
                    <soapenv:Body>    
                        <ns1:app_Login_banca_en_Linea_con_factor
                            xmlns:ns1="http://tempuri.org/">      
                            <ns1:XML_Mensaje>        
                                <![CDATA[\${xmlunit.ignore}]]>      
                            </ns1:XML_Mensaje>    
                        </ns1:app_Login_banca_en_Linea_con_factor>  
                    </soapenv:Body>
                </soapenv:Envelope>`
            }
        },
        "httpResponse": {
            "statusCode": 200,
            "body": {
                "type": "XML",
                "xml" : `<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema"><soap:Body><app_Login_banca_en_Linea_con_factorResponse xmlns="http://tempuri.org/"><app_Login_banca_en_Linea_con_factorResult>&lt;?xml version='1.0' encoding='utf-8'?&gt;&lt;mensaje&gt;&lt;encabezado&gt;&lt;codigo_retorno&gt;0&lt;/codigo_retorno&gt;&lt;mensaje_usuario&gt;USUARIO AUTENTICADO DE MANERA EXITOSA&lt;/mensaje_usuario&gt;&lt;mensaje_tecnico&gt;&lt;/mensaje_tecnico&gt;&lt;utiliza_token&gt;1&lt;/utiliza_token&gt;&lt;pns_usuariocreado&gt;False&lt;/pns_usuariocreado&gt;&lt;pns_dispositivos&gt;0&lt;/pns_dispositivos&gt;&lt;UsuarioHuella_Creado&gt;False&lt;/UsuarioHuella_Creado&gt;&lt;TokenBI_Afiliado&gt;False&lt;/TokenBI_Afiliado&gt;&lt;ReconocimientoFacial_Estado&gt;False&lt;/ReconocimientoFacial_Estado&gt;&lt;TokenBI_Obligatorio&gt;False&lt;/TokenBI_Obligatorio&gt;&lt;autenticacion&gt;&lt;TipoAcceso&gt;LIGHT&lt;/TipoAcceso&gt;&lt;BiPerfilConfigurado&gt;1&lt;/BiPerfilConfigurado&gt;&lt;SolicitarTokenEnLogin&gt;0&lt;/SolicitarTokenEnLogin&gt;&lt;factores&gt;&lt;factor&gt;&lt;Codigo&gt;1&lt;/Codigo&gt;&lt;Nombre&gt;Mensaje de texto&lt;/Nombre&gt;&lt;Descripcion&gt;Token enviado por SMS&lt;/Descripcion&gt;&lt;EsMetodoPrincipal&gt;1&lt;/EsMetodoPrincipal&gt;&lt;EmpresaCelular&gt;C&lt;/EmpresaCelular&gt;&lt;Celular&gt;56523273&lt;/Celular&gt;&lt;/factor&gt;&lt;factor&gt;&lt;Codigo&gt;2&lt;/Codigo&gt;&lt;Nombre&gt;Correo electrónico&lt;/Nombre&gt;&lt;Descripcion&gt;Token enviado a correo electrónico&lt;/Descripcion&gt;&lt;EsMetodoPrincipal&gt;0&lt;/EsMetodoPrincipal&gt;&lt;CorreoElectronico&gt;feavila@bi.com.gt&lt;/CorreoElectronico&gt;&lt;/factor&gt;&lt;/factores&gt;&lt;/autenticacion&gt;&lt;/encabezado&gt;&lt;/mensaje&gt;</app_Login_banca_en_Linea_con_factorResult></app_Login_banca_en_Linea_con_factorResponse></soap:Body></soap:Envelope>`
            },
        }
    }
]