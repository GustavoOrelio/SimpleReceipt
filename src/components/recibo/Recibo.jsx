import './Recibo.css'

function App() {
    return (
        <div>
            <div className="box">
                <form onSubmit="resultado()" method="post" id="form1">
                    <label>
                        <div className="valor">
                            <h2>Valor:</h2>
                            <input type="number" className="input_valor" name="valor" id="valor" autoFocus="true"
                                   placeholder="00,00" required/><br/>
                            <p>Valor Recebido</p>
                        </div>
                    </label>

                    <label>
                        <div className="nome_pagador">
                            <h2>Nome do Pagador:</h2>
                            <input type="text" name="nome-pagador" className="input-nomePagador" id="nome-pagador"
                                   autoFocus="true" required/><br/>
                        </div>
                    </label>

                    <label>
                        <div className="cpfCnpjPagador">
                            <h2>CPF ou CNPJ (opicional):</h2>
                            <input type="text" name="cpfCnpjPagador" id="cpfCnpjPagador" autoFocus="true"
                                   onkeypress="$(this).mask(CpfCnpjMask, cpfCnpjpOpcao)"/><br/>
                            <p>Somente números</p>
                        </div>
                    </label>

                    <label>
                        <div className="referencia">
                            <h2>Referente à:</h2>
                            <input type="text" name="referencia" className="input_referencia" id="referencia"
                                   autoFocus="true" required/><br/>
                        </div>
                    </label>

                    <label>
                        <div className="row">
                            <div className="column">
                                <div className="cidade">
                                    <h2>Cidade:</h2>
                                    <input type="text" name="cidade" id="cidade" autoFocus="true" required/><br/>
                                </div>
                            </div>
                            <div className="column">
                                <div className="data">
                                    <h2>Data:</h2>
                                    <input type="date" name="data" id="data" autoFocus="true" required
                                           pattern="[0-9]{2}\/[0-9]{2}\/[0-9]{4}$"/><br/>
                                </div>
                            </div>
                        </div>
                    </label>

                    <label>
                        <div className="nome-emissor">
                            <h2>Nome do Emissor:</h2>
                            <input type="text" name="nome-emissor" className="input-nomeEmissor" id="nome-emissor"
                                   autoFocus="true" required/><br/>
                        </div>
                    </label>
                    <label>
                        <div className="row">
                            <div className="column">
                                <div className="telefone">
                                    <div>
                                        <h2>Telefone (opicional): </h2>
                                        <input type="text" name="telefone" id="telefone" keyboardType="numeric"/>
                                        <br/>
                                    </div>
                                </div>
                            </div>
                            <div className="column">
                                <div className="cpfCnpjEmissor">
                                    <div>
                                        <h2>CPF ou CNPJ (opicional):</h2>
                                        <input type="text" name="cpfCnpjEmissor" id="cpfCnpjEmissor"
                                               autoFocus="true"
                                               onkeypress="$(this).mask(CpfCnpjMask, cpfCnpjpOpcao)"/><br/>
                                        <p>Somente números</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </label>
                    <br/>
                    <label>
                        <div className="FormaPagamento" className="formaPagamento">
                            <h2>Forma de Pagamento:</h2>
                            <div className="control">
                                <label className="radio">
                                    <input type="radio" name="pagamento" value="dinheiro" id="btn-pagamento-dinheiro"
                                           onChange="menuPagamentoPix()" checked/>
                                    Dinheiro
                                </label>
                                <label className="radio">
                                    <input type="radio" name="pagamento" value="pix" id="btn-pagamento-pix"
                                           onChange="menuPagamentoPix()"/>
                                    Pix
                                </label>
                                <label className="radio">
                                    <input type="radio" name="pagamento" value="cheque" id="btn-pagamento-cheque"
                                           onChange="menuPagamentoPix()"/>
                                    Cheque
                                </label>
                                <label className="radio">
                                    <input type="radio" name="pagamento" value="transferencia"
                                           id="btn-pagamento-transferencia-deposito"
                                           onChange="menuPagamentoPix()"/>
                                    Transferência/Depósito
                                </label>
                                <label className="radio">
                                    <input type="radio" name="pagamento" value="cartao" id="btn-pagamento-cartao"
                                           onChange="menuPagamentoPix()"/>
                                    Cartão de Crédito/Débito
                                </label>
                            </div>
                        </div>
                    </label>
                    <br/>
                    <label>
                        <div className="GerarRecibo" className="gerarRecibo">
                            <head>
                                <script src="https://kit.fontawesome.com/5c632ebf55.js"
                                        crossOrigin="anonymous"></script>
                            </head>
                            <label className="radio">

                                <button type="submit" name="botao" className="Botao-GerarRecibo">
                                    <i className="fa-regular fa-file-lines"></i>
                                    <b className="b"> Gerar Recibo</b>
                                </button>
                            </label>
                        </div>
                    </label>
                </form>
            </div>
            <div id="reciboImprimir">
                <div id="button">
                    <p>
                        <input type="hidden" name="gerarRecibo"/>
                        <button type="submit" className="submit" onClick="voltar()">
                            <span>Voltar</span>
                        </button>
                    </p>
                    <div id="reciboPraImprimir" className="bordaRecibo">
                        <h1 className="titulo">Recibo do pagamento</h1>
                        <div>
                            <label className="displayDiv" id="labelPrimeiraVia">
                                <h3>1º Via</h3>
                            </label>
                            <label id="labelPreco"><b className="displayDiv" id="valorPago"></b></label>
                        </div>
                        <div>
                            <p id="menssagem1" className="menssagem"></p>
                            <p id="menssagem2" className="menssagem">Para maior clareza frimamos o presente recibo para
                                que produza os seus efeitos, dando plena, rasa e irrevogável
                                quitação, pelo valor recebido.</p>
                        </div>
                        <div>
                            <p id="dataImpressao"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default App;