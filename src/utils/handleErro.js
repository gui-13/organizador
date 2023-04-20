const erros = [
  { codigo: "auth/wrong-password", mensagem: "Senha incorreta" },
  { codigo: "auth/user-not-found", mensagem: "Usuário não encontrado" },
  { codigo: "auth/weak-password", mensagem: "Senha fraca, deve ter no mínimo 6 dígitos" },
  { codigo: "auth/email-already-in-use", mensagem: "E-mail já cadastrado" },
  { codigo: "auth/too-many-requests", mensagem: "Houve muitas tentativas de login, tente novamnete mais tarde" },
  { codigo: "auth/invalid-email", mensagem: "E-mail inválido" },
  { codigo: "auth/missing-email", mensagem: "E-mail ausente" },
];

export function verificaErro (code) {
  const erroEncontrado = erros.find((erro) => erro.codigo === code)
  if (erroEncontrado) {
    return erroEncontrado.mensagem
  }
 }