import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  //   userModel = new User()
  //   mensagem = " "

  //   receberDados() {
  //     console.log(this.userModel)

  //     // OAuth 2
  //     // Enviar dados para a API
  //     this.loginService.login(this.userModel).subscribe((response) => {
  //       console.log("response:", response)
  //       console.log("O status Code é:", response.status)
  //       console.log("O token de permissão é:", response.body.accessToken)

  //       this.mensagem = "Bem vindo " + response.body.user.nome
  //       console.log(this.mensagem)
  //     }, (responseErro) => {
  //       console.log(responseErro)
  //       this.mensagem = responseErro.error
  //     })
  //   }

  // }


  loginModel = new User();

  mensagem = "";

  onSubmit() {
    console.log("modelo:", this.loginModel)

    const listaPalavras: string[] = ["select ", "from ", "drop ", "or ", "having ", "group ", "by ", "insert ", "exec ", "\"", "\'", "--", "#", "*", ";"]

    listaPalavras.forEach(palavra => {
      if (this.loginModel.email.toLowerCase().includes(palavra)) {
        this.mensagem = "Dados inválidos"

        return;
      }
    });

    this.loginService.login(this.loginModel).subscribe((response) => {
      this.mensagem = "login com sucesso!";
      this.router.navigateByUrl('/');


    }, (erro) => {
      this.mensagem = erro.error;
    })
  }
}
