export interface Email {
  id: number;
  cliente: string;
  pedido: string;
  assunto: string;
  status: "novo" | "respondido";
}

export const emails = [
  {
    id: 1,
    client: "John Doe",
    subject: {
      en: "Order delay",
      pt: "Atraso no pedido",
    },
    message: {
      en: "Hello, I would like to know the status of my order.",
      pt: "Olá, gostaria de saber o status do meu pedido.",
    },
    status: "novo",
  },
  {
    id: 2,
    client: "Jane Smith",
    subject:{
      en: "Product inquiry",
      pt: "Consulta sobre o produto",
    },
    message: {
      en: "Can you provide more details about product X?",
      pt: "Você pode fornecer mais detalhes sobre o produto X?"
    }
  }

];
