export const consultaSaldoExpectations = [
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
                        <Operation>ConsultaSaldos</Operation>
                        <Version>1.2</Version>
                        <Transaction_Id>\${xmlunit.isNumber}</Transaction_Id>
                        <Consumer>APPMOBILE</Consumer>
                    </esb:esbHdr>
                </Header>
                <Body>
                    <CuentaConsultaSaldos_Req
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
                            <TotPags></TotPags>
                        </InfoTrx>
                        <Datos
                            xmlns="">
                            <Productos>
                                <Reg_Producto>
                                    <Producto>1</Producto>
                                    <SubProducto></SubProducto>
                                    <NumProducto>\${xmlunit.ignore}</NumProducto>
                                    <PaisProducto>320</PaisProducto>
                                    <BancoProducto>1</BancoProducto>
                                    <Moneda>GTQ</Moneda>
                                    <DiaAportacion></DiaAportacion>
                                </Reg_Producto>
                            </Productos>
                        </Datos>
                    </CuentaConsultaSaldos_Req>
                </Body>
            </Envelope>`
            }
        },
        "httpResponse": {
            "statusCode": 200,
            "body": {
                "type": "XML",
                "xml" : `<NS1:Envelope xmlns:NS1="http://www.w3.org/2003/05/soap-envelope"><NS1:Header><esb:esbHdr xmlns="" xmlns:esb="http://www.cysce.com/esb/esbcore/v2/header"><Service>Cuenta</Service><Operation>ConsultaSaldos</Operation><Version>1.2</Version><Transaction_Id>1662760806908</Transaction_Id><Consumer>APPMOBILE</Consumer><Code xmlns="">0</Code><Reason xmlns=""/></esb:esbHdr></NS1:Header><NS1:Body><NS2:CuentaConsultaSaldos_Resp xmlns:NS2="http://www.bi.com.gt/esb/services/Cuenta"><InfoTrx xmlns=""><IdTrx>1662760806908</IdTrx><Canal>11</Canal><PaisOperacion>320</PaisOperacion><BancoOperacion>1</BancoOperacion><PaisOrigen>320</PaisOrigen><BancoOrigen>1</BancoOrigen><PaisDestino>320</PaisDestino><BancoDestino>1</BancoDestino><FechaTrx>20220909</FechaTrx><HoraTrx>220006</HoraTrx><NumPag>0</NumPag><TotPags/><CodRetorno>00</CodRetorno><DescripcionRetorno> </DescripcionRetorno></InfoTrx><Datos><Productos><Reg_Producto><Producto>1</Producto><SubProducto/><NumProducto>0000000919</NumProducto><Moneda>GTQ</Moneda><NombreProducto>QUEZADA MAZARIEGOS  OSCAR ARMANDO</NombreProducto><SaldoDisp>11437.15</SaldoDisp><SaldoDispUSD/><Estado>00100101</Estado><DiaAportacion/><PagoMinimo>0.00</PagoMinimo><DiaCorte/><PagoContado>0.00</PagoContado></Reg_Producto></Productos></Datos></NS2:CuentaConsultaSaldos_Resp></NS1:Body></NS1:Envelope>`
            }
        }
    }
]