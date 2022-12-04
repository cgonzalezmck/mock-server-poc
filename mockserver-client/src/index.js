import { mockServerClient } from 'mockserver-client';
import { consultaCuentaExpectations, consultaSaldoExpectations, datosClienteExpectations, loginExpectations, transferenciasExpectations } from './banco-industrial-expectations'

const host = "ac456d7a4c20f4c9d9561ad611cdf928-1150027820.us-east-1.elb.amazonaws.com";
const port = 80;

(async () => {
    await mockServerClient(host, port).reset();

    mockServerClient(host, port ).mockAnyResponse([
        ...consultaCuentaExpectations,
        ...consultaSaldoExpectations,
        ...datosClienteExpectations,
        ...loginExpectations,
        ...transferenciasExpectations
    ]).then(
        function () {
            console.log("Expectations created");
        },
        function (error) {
            console.log(error);
        }
    ).catch(err => console.error(err));
}
)();