const descriptions = {
  // Hambúrgueres
  burger:     "Blend artesanal grelhado na chapa com ingredientes frescos.",
  hamburguer: "Blend artesanal grelhado na chapa com ingredientes frescos.",
  smash:      "Smash burger crocante com queijo derretido e molho especial.",
  bacon:      "Suculento com fatias crocantes de bacon defumado.",
  frango:     "Peito de frango grelhado temperado na hora, super macio.",
  chicken:    "Frango crocante empanado com tempero especial da casa.",
  vegano:     "100% plant-based, saboroso e feito com ingredientes naturais.",
  vegetariano:"Feito com ingredientes frescos e muito sabor, sem carne.",
  cheddar:    "Generosa quantidade de cheddar cremoso em cada mordida.",
  duplo:      "Dobro de sabor com dois blends artesanais na chapa.",
  triplo:     "Três blends suculentos para os verdadeiros apreciadores.",

  // Bebidas
  suco:       "Feito com frutas frescas selecionadas, natural e gelado.",
  bebida:     "Refrescante e gelada, perfeita para acompanhar seu pedido.",
  refrigerante:"Gelado e refrescante, o acompanhamento perfeito.",
  água:       "Água mineral gelada e refrescante.",
  milk:       "Milkshake cremoso batido na hora com muito sabor.",
  shake:      "Cremoso e gelado, batido na hora com ingredientes premium.",
  chá:        "Chá selecionado, servido quente ou gelado.",
  café:       "Café especial torrado artesanalmente, aroma inconfundível.",
  láctea:     "Bebida láctea cremosa com sabor irresistível.",
  lactea:     "Bebida láctea cremosa com sabor irresistível.",
  vitamina:   "Vitamina cremosa feita com frutas frescas selecionadas.",

  // Sobremesas
  bolo:       "Bolo fofinho feito com receita artesanal e muito amor.",
  torta:      "Torta cremosa com ingredientes selecionados e sabor único.",
  brownie:    "Brownie quentinho, crocante por fora e cremoso por dentro.",
  sorvete:    "Sorvete cremoso em sabores irresistíveis.",
  pudim:      "Pudim caseiro com calda de caramelo na medida certa.",
  chocolate:  "Irresistível, com chocolate belga de alta qualidade.",
  doce:       "Sobremesa artesanal feita com ingredientes premium.",

  // Entradas
  batata:     "Batatas crocantes douradas na temperatura perfeita.",
  frita:      "Crocante por fora e macia por dentro, temperada na hora.",
  onion:      "Anéis de cebola crocantes com molho especial da casa.",
  fritas:     "Crocantes por fora e macias por dentro, temperadas na hora.",
  nugget:     "Nuggets crocantes com frango 100% natural.",
  asa:        "Asas de frango suculentas marinadas e grelhadas.",
  tábua:      "Seleção especial servida em tábua rústica para compartilhar.",
  bruschetta: "Pão italiano tostado com tomate fresco e azeite extra virgem.",
  pastel:     "Pastel crocante com recheio generoso feito na hora.",

  // Acompanhamentos
  salada:     "Salada fresca com folhas selecionadas e molho da casa.",
  arroz:      "Arroz soltinho temperado com ervas frescas.",
  feijão:     "Feijão cremoso temperado no estilo caseiro.",
};

export function generateDescription(productName) {
  if (!productName) return "Preparado com ingredientes frescos e muito sabor.";

  const nameLower = productName.toLowerCase();

  for (const [keyword, description] of Object.entries(descriptions)) {
    if (nameLower.includes(keyword)) {
      return description;
    }
  }

  return "Preparado com ingredientes frescos e muito sabor.";
}