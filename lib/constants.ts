export const SESSION_COOKIE_NAME = "pendolo_session";

export const PUBLIC_PATHS = [
  "/",
  "/login",
  "/cadastro",
  "/convite",
  "/recuperar-senha",
] as const;

export const APP_PATHS = {
  ponto: "/ponto",
  cartaoPonto: "/cartao-ponto",
  solicitacoes: "/solicitacoes",
  painel: "/painel",
  fechamento: "/fechamento",
  configuracoes: "/configuracoes",
} as const;
