document.addEventListener("DOMContentLoaded", function () {
    const cadastrarBtn = document.getElementById("cadastrarBtn");
    const excluirBtn = document.getElementById("ExcluirBtn");
    const voltarBtn = document.getElementById("voltarBtn");
    const campos = document.querySelectorAll("input[type=text], input[type=email],input[type=tel], input[type=password]");
    const camposArray = Array.from(campos); // Converte NodeList em Array

    cadastrarBtn.addEventListener("click", function() {
        if (validarCamposPreenchidos() && validarSenhasIguais()) {
            const novaUrl = "telaDois.html";
            window.location.href = novaUrl;
        } else {
            alert("Preencha todos os campos e verifique se as senhas são iguais antes de cadastrar.");
        }
    });

    excluirBtn.addEventListener("click", function () {
        campos.forEach(function (campo) {
            campo.value = "";
        });
    });

    voltarBtn.addEventListener("click", function () {
        window.location.href = document.referrer; // Redireciona para a página anterior usando o referenciador
    });

    function validarSenhasIguais() {
        const senha = document.getElementById("senha").value;
        const confirmaSenha = document.getElementById("confirmaSenha").value;
        return senha === confirmaSenha;
    }

    function validarCamposPreenchidos() {
        for (const campo of campos) {
            if (campo.value.trim() === "") {
                return false; // Pelo menos um campo está vazio
            }
        }
        return true; // Todos os campos estão preenchidos
    }
});
