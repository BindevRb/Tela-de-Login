
        // Função reutilizável para alternar visibilidade da senha
        function toggleSenha(iconId, inputId) {

        let Eye = document.querySelector(iconId);
        let campo = document.querySelector(inputId);

        //Adicionando a função do clique
        Eye.addEventListener("click", function() {
             if (campo.type === "password") {
                campo.type = "text" 
                Eye.classList.add('bi-eye-slash-fill')
                Eye.classList.remove('bi-eye-fill')
             }
             else {
                campo.type = "password"
                 Eye.classList.remove('bi-eye-slash-fill')
                 Eye.classList.add('bi-eye-fill')
             }
            });
        }

             
      //Aplicando para os dois campos
      toggleSenha('#toggleSenha', '#senha');
      toggleSenha('#toggleConfirmSenha', '#confirmSenha');




       // Alternando de Login para Cadastro
       let login_mode = document.getElementById('login-bt')
       let cadastro_mode = document.getElementById('cadastro-bt')
       let campoCadastro = document.getElementById('camposCadastro')

       //Variavel que controla o Estado
       let iscadastro = false;

       //adicionando a função de clicar e alternar
       cadastro_mode.addEventListener("click", function() {

        iscadastro = !iscadastro //Inverte o estado
        
        if (iscadastro) {
            //Modo para cadastrar o usuario
            cadastro_mode.innerText = "Entrar";
            login_mode.innerText = "Criar Conta";

            campoCadastro.style.display =  "block";
        }
        else {
            //Modo Padrão
            cadastro_mode.innerText = "Criar Conta";
            login_mode.innerText = "Entrar";


            campoCadastro.style.display =  "none";       
        
        }        
       })

            


       function  cadastrar(){
        //Cadastro de Novos usuários no banco de dados
        let var_usercd = document.querySelector('#user').value;
        let var_emailcd = document.querySelector('#email').value;
        let var_senhacd = document.querySelector('#senha').value;
        let var_confirmsenha = document.querySelector('#confirmSenha').value;
        let usuarioExistente = usuarios.find(item => {
            return item.var_user === var_usercd
        })
           let emailExistente = usuarios.find(item => {
            return item.var_email === var_emailcd
        })


        if (var_usercd  == '') {
            alert("O Campo Usuário é obrigatório!")
            return
        }

         if (var_senhacd  == '') {
            alert("O Campo Senha é obrigatório!")
            return
        }

         if (var_emailcd  == '') {
            alert("O Campo Email é obrigatório!")
            return
        }

         if (var_senhacd.length < 8 ) {
            alert("A senha deve ter no mínimo 8 caracteres!")
            return
        }
    
        if (var_senhacd != var_confirmsenha) {
            alert ("As Senhas precisam ser iguais.")
            return
        }


        if (usuarioExistente) {
            alert("Usuario já existe.")
            return
        }
        
        if (emailExistente) {
            alert("Email já cadastrado.")
            return
        }

        let novoUsuario = {
            var_user: var_usercd,
            var_email: var_emailcd,
            var_senha: var_senhacd
        }

        usuarios.push(novoUsuario)
        alert("Novo usuario cadastrado com sucesso!")
        document.querySelector('#user').value = '';
        document.querySelector('#email').value = '';
        document.querySelector('#senha').value = '';
        document.querySelector('#confirmSenha').value = '';



    }




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

            
            if (UsuarioEncontrado)  {
                //bloqueando quando o modo de cadasatro é ativo
                if (iscadastro){
                    return; //bloqueia
                }
                else {
                //alert ("Usuario Logado com Sucesso!");
                window.location.href = "../home/home.html";
                }
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

login_mode.addEventListener("click", function() {
    if (iscadastro) {
        cadastrar();
    } else {
        logar();
    }
})

        
