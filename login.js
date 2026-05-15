
        //Criando o Botão do olhinho e Mudando ele
        let Eye = document.querySelector('#toggleSenha');
        let mudando_tipo = document.querySelector("#senha");

        //Adicionando a função do clique
        Eye.addEventListener("click", function() {
             if (mudando_tipo.type === "password") {
                mudando_tipo.type = "text" 
                Eye.classList.add('bi-eye-slash-fill')
                 Eye.classList.remove('bi-eye-fill')
             }
             else {
                mudando_tipo.type = "password"
                 Eye.classList.remove('bi-eye-slash-fill')
                 Eye.classList.add('bi-eye-fill')
             }

             
       if (mudando_tipo.type === "password") {
        Eye.classList.toggle('bi bi-eye-fill')
       } 
       else {
        
       }
    
       });


        

        //Simulação de Banco de Dados com Lista de Objetos
        let usuarios = [
            { var_user: "Fabio", var_email: "fabio@email.com", var_senha: "fa123456" },
            { var_user: "Daniel", var_email: "daniel@email.com", var_senha: "da123456" },
            { var_user: "Barney", var_email: "barney@email.com", var_senha: "ba123456" },
            { var_user: "admin", var_email: "admin@email.com", var_senha: "admin" },     
        ]


        function logar() {
            let var_user = document.querySelector('#user').value;
            let var_senha = document.querySelector('#senha').value;
            let var_termos = document.querySelector('#termodeuso').checked
            
            if ( var_user == '' ) {
                alert("O Campo Usuário é Obrigatório!");
                return
            }

            if (var_senha == '' ) {
                alert("O Campo Senha é Obrigatório!");
                return
            }

            if (var_termos == false) {
                alert("É necessário Ler e Aceitar os termos.")
                return
            } 
            
            
            //Validando se o User e Senha inseridos são iguais aos que estão na simulação de banco de dados...Ao ser verdadeiro, ele retorna. 
            let UsuarioEncontrado = usuarios.find(item => {
               return item.var_user === var_user && item.var_senha === var_senha
            })

            if (UsuarioEncontrado) {
                //alert ("Usuario Logado com Sucesso!");
                window.location.href = "../home/home.html";
            }
            else {
                alert("Usuário e Senha incorretos!");
            }


            //Ocultando o comando pra não gerar conflito. Comando antigo. antes de 19/04/26
            //if (var_user == "admin" && var_senha == "admin" && var_termos == true) {
            //    alert ("Admin Logado com Sucesso!");
            //}
            //else {
            //    alert("Usuário e Senha incorretos!");
            //}

        }
