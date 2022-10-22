// See https://aka.ms/new-console-template for more information
using BE7_FS4_UC9;
using BE7_FS4_UC9.Classes;


Console.WriteLine(@$"
=================================================================================
*                                                                               *
*                              Seja Bem Vindo !                                 *
*               Sistema de Cadastro de Pessoas Físicas e Jurídicas              *
*                                                                               *
=================================================================================
");


BarraCarregamento("Carregando",200);

string? opcao;

do
{
    Console.Clear();
    Console.WriteLine(@$"
=================================================================================
*                                                                               *
*                            Escolha uma das Opções:                            *
___________________________
*                                                                               *
*                              1 - Pessoa Física                                *
*                              2 - Pessoa Jurídica                              *
*                                                                               *
*                              0  - Sair                                        *
*                                                                               *
=================================================================================
");

    opcao = Console.ReadLine();

    switch (opcao)
    {
        case "1":
            PessoaFisica novaPf = new PessoaFisica();
            Endereco novoEnd = new Endereco();
            PessoaFisica metodoPf = new PessoaFisica();
            novaPf.nome = "Gerald De Rivia";
            novaPf.dataNascimento = "01/01/1000";
            novaPf.cpf = "001.001.111.11";
            novaPf.rendimento = 1000.0f;
            novoEnd.logradouro = "Carniceiro de Blaviken";
            novoEnd.numero = 11;
            novoEnd.complemento = "Castelo de Kaermor";
            novoEnd.endComercial = true;
            novaPf.endereco = novoEnd;

            Console.WriteLine(@$"
            Nome: {novaPf.nome}
            Endereço: {novaPf.endereco.logradouro}, {novaPf.endereco.numero}
            Maior de idade: {metodoPf.ValidarDataNascimento(novaPf.dataNascimento)}");
            Console.WriteLine($"Digite Enter para sair");
            Console.ReadLine();

            break;


        case "2":
            PessoaJuridica metodoPj = new PessoaJuridica();
            PessoaJuridica novaPj = new PessoaJuridica();
            Endereco novoEndpj = new Endereco();

            novaPj.nome = "SENAI";
            novaPj.cnpj = "10.123.456/0001.12";
            novaPj.razaoSocial = "Senai Informatica";
            novaPj.rendimento = 6000;

            novoEndpj.logradouro = "Avenida nao lembro";
            novoEndpj.numero = 537;
            novoEndpj.complemento = "casa 01";
            novoEndpj.endComercial = true;


            Console.WriteLine($@"
            Nome: {novaPj.nome}
            Razão Social: {novaPj.razaoSocial}
            CNPJ: {novaPj.cnpj}
            CNPJ é valido: {metodoPj.ValidarCnpj(novaPj.cnpj)}");

            Console.WriteLine($"Digite Enter para sair");
            Console.ReadLine();
            break;

        case "0":
            Console.WriteLine($"Obrigada por utilizar nosso Sistema");
            BarraCarregamento("Finalizando", 300);

            break;

        default:
            Console.Clear();
            Console.WriteLine($"Opção Inválida - Digite outra Opção");
            Thread.Sleep(3000);
            break;
    }

} while (opcao != "0");

static void BarraCarregamento(string texto, int tempo)
{
    Console.BackgroundColor = ConsoleColor.Yellow;
    Console.ForegroundColor = ConsoleColor.DarkBlue;

    Console.Write($"{texto}");

    for (var contador = 0; contador < 35; contador++)
    {
        Console.Write(". ");
        Thread.Sleep(250);
    }

    Console.ResetColor();
}