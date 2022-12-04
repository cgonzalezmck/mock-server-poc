export const transferenciasExpectations = [
    {
        "httpRequest": {
            "method": "POST",
            "path": "/esb/services/ws/WSCuenta",
            "body": {
                "type" : "XML",
                "xml": `<Envelope
                            xmlns="http://www.w3.org/2003/05/soap-envelope">
                            <Header>
                                <esb:esbHdr
                                    xmlns=""
                                    xmlns:esb="http://www.cysce.com/esb/esbcore/v2/header">
                                    <Service>Cuenta</Service>
                                    <Operation>Transferencia</Operation>
                                    <Version>1.0</Version>
                                    <Transaction_Id>\${xmlunit.isNumber}</Transaction_Id>
                                    <Consumer>APPMOBILE</Consumer>
                                    <Consumer_Id></Consumer_Id>
                                </esb:esbHdr>
                            </Header>
                            <Body>
                                <CuentaTransferencia_Req
                                    xmlns="http://www.bi.com.gt/esb/services/Cuenta">
                                    <InfoTrx
                                        xmlns="">
                                        <IdTrx>\${xmlunit.isNumber}</IdTrx>
                                        <Canal>11</Canal>
                                        <PaisOperacion>320</PaisOperacion>
                                        <BancoOperacion>1</BancoOperacion>
                                        <PaisOrigen>320</PaisOrigen>
                                        <BancoOrigen>1</BancoOrigen>
                                        <PaisDestino>320</PaisDestino>
                                        <BancoDestino>1</BancoDestino>
                                        <FechaTrx>\${xmlunit.isNumber}</FechaTrx>
                                        <HoraTrx>\${xmlunit.isNumber}</HoraTrx>
                                        <NumPag>0</NumPag>
                                        <TotPags>0</TotPags>
                                    </InfoTrx>
                                    <Datos
                                        xmlns="">
                                        <TipoCtaDeb>\${xmlunit.isNumber}</TipoCtaDeb>
                                        <SubtipoCtaDeb>\${xmlunit.isNumber}</SubtipoCtaDeb>
                                        <NumCtaDeb>\${xmlunit.ignore}</NumCtaDeb>
                                        <NombreCtaDeb></NombreCtaDeb>
                                        <MontoDeb>\${xmlunit.ignore}</MontoDeb>
                                        <MonedaCtaDeb>GTQ</MonedaCtaDeb>
                                        <TipoCtaCred>\${xmlunit.isNumber}</TipoCtaCred>
                                        <SubtipoCtaCred>0</SubtipoCtaCred>
                                        <NumCtaCred>\${xmlunit.ignore}</NumCtaCred>
                                        <NombreCtaCred></NombreCtaCred>
                                        <MontoCred>\${xmlunit.ignore}</MontoCred>
                                        <MonedaCtaCred>GTQ</MonedaCtaCred>
                                        <Comentario></Comentario>
                                        <TipoCambioBase></TipoCambioBase>
                                        <TipoCambioDest></TipoCambioDest>
                                        <MontoPivote>\${xmlunit.ignore}</MontoPivote>
                                    </Datos>
                                </CuentaTransferencia_Req>
                            </Body>
                        </Envelope>`
            }
        },
        "httpResponse": {
            "statusCode": 200,
            "body": {
                "type": "XML",
                "xml" : `<NS1:Envelope xmlns:NS1="http://www.w3.org/2003/05/soap-envelope"><NS1:Header><NS2:esbHdr xmlns:NS2="http://www.cysce.com/esb/esbcore/v2/header"><Service>Cuenta</Service><Operation>Transferencia</Operation><Version>1.0</Version><Service_Id>414D51204D5153492E43432020202020636DE8BE254EF59D</Service_Id><Consumer>APPMOBILE</Consumer><Consumer_Id/><Transaction_Id>5091666991333265</Transaction_Id><Code xmlns="">0</Code><Reason xmlns=""/></NS2:esbHdr></NS1:Header><NS1:Body><NS2:CuentaTransferencia_Resp xmlns:NS2="http://www.bi.com.gt/esb/services/Cuenta"><InfoTrx><IdTrx>5091666991333265</IdTrx><Canal>11</Canal><PaisOperacion>320</PaisOperacion><BancoOperacion>1</BancoOperacion><PaisOrigen>320</PaisOrigen><BancoOrigen>1</BancoOrigen><PaisDestino>320</PaisDestino><BancoDestino>1</BancoDestino><FechaTrx>20221115</FechaTrx><HoraTrx>105000</HoraTrx><CodAutorizacion>1104139936</CodAutorizacion><NumPag>0</NumPag><TotPags>001</TotPags><CodRetorno>000</CodRetorno><DescripcionRetorno>       TRANSFERENCIA PROCESADA EXITOSAMENTE</DescripcionRetorno></InfoTrx><Datos><TipoCtaDeb>1</TipoCtaDeb><NumCtaDeb>0420011502</NumCtaDeb><NombreCtaDeb>CARCAMO PALMA MELIDA EUGENIA</NombreCtaDeb><MontoDeb>5.00</MontoDeb><MonedaCtaDeb>GTQ</MonedaCtaDeb><NumAutDeb>4139936</NumAutDeb><NumRefDeb>4139936</NumRefDeb><TipoCtaCred>2</TipoCtaCred><NumCtaCred>0000160887</NumCtaCred><NombreCtaCred>SANTOS AJANEL ADOLFO</NombreCtaCred><MontoCred>5.00</MontoCred><MonedaCtaCred>GTQ</MonedaCtaCred><NumAutCred>4139936</NumAutCred><NumRefCred>4139936</NumRefCred><Comentario/><TipoCambioBase/><TipoCambioDest/><NumNegBase/><NumNegDest/><MontoPivote>5.00</MontoPivote></Datos></NS2:CuentaTransferencia_Resp></NS1:Body></NS1:Envelope>`
            }
        }
    }
]