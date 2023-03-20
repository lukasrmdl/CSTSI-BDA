import db from "../../database/database.js";
import { ref, set } from "firebase/database";

const newProductId = "-MwSzyJMlNDToTGtPuhc";
const refNode = ref(db, `produtos/${newProductId}`);
const newProductData = {
  descricao: "Samsung A5 2017 4GB Exynos 8Core",
  id_prod: 111,
  importado: 0,
  nome: "Samsumg A5-2017",
  preco: 4500,
  qtd_estoque:2
};
set(refNode, newProductData)
  .then(() => console.log("Inserido!!!"))
  .catch(() => console.log("Erro ao inserir!!"))
  .finally(() => process.exit());
