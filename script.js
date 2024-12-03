function mostrarTela(tela) {
    // Oculta todas as telas
    document.querySelectorAll('.tela').forEach(section => section.style.display = 'none');
    
    // Mostra a tela selecionada
    document.getElementById(tela).style.display = 'block';
}

function adicionarCliente() {
    const nome = document.getElementById("nomeCliente").value.trim();
    const email = document.getElementById("emailCliente").value.trim();
    const telefone = document.getElementById("telefoneCliente").value.trim();

    if (!nome || !email || !telefone) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    const listaClientes = document.getElementById("listaClientes");
    const item = document.createElement("li");
    item.textContent = `Nome: ${nome}, E-mail: ${email}, Telefone: ${telefone}`;
    listaClientes.appendChild(item);

    document.getElementById("formClientes").reset();
}

function adicionarProduto() {
    const nome = document.getElementById("nomeProduto").value.trim();
    const categoria = document.getElementById("categoriaProduto").value.trim();
    const preco = document.getElementById("precoProduto").value.trim();

    if (!nome || !categoria || !preco) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    const listaProdutos = document.getElementById("listaProdutos");
    const item = document.createElement("li");
    item.textContent = `Produto: ${nome}, Categoria: ${categoria}, Preço: R$ ${parseFloat(preco).toFixed(2)}`;
    listaProdutos.appendChild(item);

    document.getElementById("formProdutos").reset();
}

function adicionarFornecedor() {
    const nome = document.getElementById("nomeFornecedor").value.trim();
    const email = document.getElementById("emailFornecedor").value.trim();
    const telefone = document.getElementById("telefoneFornecedor").value.trim();

    if (!nome || !email || !telefone) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    const listaFornecedores = document.getElementById("listaFornecedores");
    const item = document.createElement("li");
    item.textContent = `Fornecedor: ${nome}, E-mail: ${email}, Telefone: ${telefone}`;
    listaFornecedores.appendChild(item);

    document.getElementById("formFornecedores").reset();
}

function adicionarFuncionario() {
    const nome = document.getElementById("nomeFuncionario").value.trim();
    const cargo = document.getElementById("cargoFuncionario").value.trim();
    const telefone = document.getElementById("telefoneFuncionario").value.trim();

    if (!nome || !cargo || !telefone) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    const listaFuncionarios = document.getElementById("listaFuncionarios");
    const item = document.createElement("li");
    item.textContent = `Funcionário: ${nome}, Cargo: ${cargo}, Telefone: ${telefone}`;
    listaFuncionarios.appendChild(item);

    document.getElementById("formFuncionarios").reset();
}

function adicionarBanco() {
    const nome = document.getElementById("nomeBanco").value.trim();
    const agencia = document.getElementById("agenciaBanco").value.trim();
    const conta = document.getElementById("contaBanco").value.trim();

    if (!nome || !agencia || !conta) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    const listaBancos = document.getElementById("listaBancos");
    const item = document.createElement("li");
    item.textContent = `Banco: ${nome}, Agência: ${agencia}, Conta: ${conta}`;
    listaBancos.appendChild(item);

    document.getElementById("formBancos").reset();
}