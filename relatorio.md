<sup>Suas cotas de feedback AI acabaram, o sistema de feedback voltou ao padrão.</sup>

# 🧪 Relatório de Avaliação – Journey Levty Etapa 1 - yasmine204

**Data:** 04/09/2025 14:06

**Nota Final:** `82.98/100`
**Status:** ✅ Aprovado

---
## ✅ Requisitos Obrigatórios
- Foram encontrados `17` problemas nos requisitos obrigatórios. Veja abaixo os testes que falharam:
  - ⚠️ **Falhou no teste**: `AGENTS: Lista todos os agente corretamente com status code 200 e todos os dados de cada agente listados corretamente`
    - **Melhoria sugerida**: Nenhuma sugestão de melhoria disponível.
  - ⚠️ **Falhou no teste**: `AGENTS: Recebe status code 401 ao tentar criar agente corretamente mas sem header de autorização com token JWT`
    - **Melhoria sugerida**: Nenhuma sugestão de melhoria disponível.
  - ⚠️ **Falhou no teste**: `AGENTS: Recebe status 404 ao tentar buscar um agente com ID em formato inválido`
    - **Melhoria sugerida**: Nenhuma sugestão de melhoria disponível.
  - ⚠️ **Falhou no teste**: `AGENTS: Recebe status code 401 ao tentar buscar agente corretamente mas sem header de autorização com token JWT`
    - **Melhoria sugerida**: Nenhuma sugestão de melhoria disponível.
  - ⚠️ **Falhou no teste**: `AGENTS: Recebe status code 404 ao tentar atualizar agente por completo com método PUT de agente de ID em formato incorreto`
    - **Melhoria sugerida**: Nenhuma sugestão de melhoria disponível.
  - ⚠️ **Falhou no teste**: `AGENTS: Recebe status code 401 ao tentar atualizar agente corretamente com PUT mas sem header de autorização com token JWT`
    - **Melhoria sugerida**: Nenhuma sugestão de melhoria disponível.
  - ⚠️ **Falhou no teste**: `AGENTS: Recebe status code 401 ao tentar atualizar agente corretamente com PATCH mas sem header de autorização com token JWT`
    - **Melhoria sugerida**: Nenhuma sugestão de melhoria disponível.
  - ⚠️ **Falhou no teste**: `AGENTS: Recebe status code 404 ao tentar deletar agente com ID inválido`
    - **Melhoria sugerida**: Nenhuma sugestão de melhoria disponível.
  - ⚠️ **Falhou no teste**: `AGENTS: Recebe status code 401 ao tentar deletar agente corretamente mas sem header de autorização com token JWT`
    - **Melhoria sugerida**: Nenhuma sugestão de melhoria disponível.
  - ⚠️ **Falhou no teste**: `CASES: Recebe status code 404 ao tentar buscar um caso por ID inválido`
    - **Melhoria sugerida**: Nenhuma sugestão de melhoria disponível.
  - ⚠️ **Falhou no teste**: `CASES: Recebe status code 401 ao tentar buscar caso sem header de autorização com JWT`
    - **Melhoria sugerida**: Nenhuma sugestão de melhoria disponível.
  - ⚠️ **Falhou no teste**: `CASES: Recebe status code 401 ao tentar listar todos os casos sem header de autorização com JWT`
    - **Melhoria sugerida**: Nenhuma sugestão de melhoria disponível.
  - ⚠️ **Falhou no teste**: `CASES: Recebe status code 404 ao tentar atualizar um caso por completo com método PUT de um caso com ID inválido`
    - **Melhoria sugerida**: Nenhuma sugestão de melhoria disponível.
  - ⚠️ **Falhou no teste**: `CASES: Recebe status code 401 ao tentar criar caso sem header de autorização com JWT`
    - **Melhoria sugerida**: Nenhuma sugestão de melhoria disponível.
  - ⚠️ **Falhou no teste**: `CASES: Recebe status code 404 ao tentar atualizar um caso parcialmente com método PATCH de um caso com ID inválido`
    - **Melhoria sugerida**: Nenhuma sugestão de melhoria disponível.
  - ⚠️ **Falhou no teste**: `CASES: Recebe status code 401 ao tentar atualizar caso parcialmente com método PATCH de um caso sem header de autorização com JWT`
    - **Melhoria sugerida**: Nenhuma sugestão de melhoria disponível.
  - ⚠️ **Falhou no teste**: `CASES: Recebe status code 401 ao tentar deletar um caso sem o header de autorização com JWT`
    - **Melhoria sugerida**: Nenhuma sugestão de melhoria disponível.

## ⭐ Itens de Destaque (recupera até 40 pontos)
- Você conquistou `3` bônus! Excelente trabalho nos detalhes adicionais!
  - 🌟 **Testes bônus passados**: `Simple Filtering: Estudante implementou endpoint de filtragem de caso por status corretamente`
    - Parabéns! Você implementou a filtragem de casos por status (`GET /casos?status=...`) corretamente. Isso adiciona uma funcionalidade poderosa à sua API para gerenciar casos.
  - 🌟 **Testes bônus passados**: `Simple Filtering: Estudante implementou endpoint de filtragem de caso por agente corretamente`
    - Ótimo! A filtragem de casos por `agente_id` (`GET /casos?agente_id=...`) está funcionando corretamente. Isso permite listar casos específicos de cada agente.
  - 🌟 **Testes bônus passados**: `Custom Error: Estudante implementou mensagens de erro customizadas para argumentos de agente inválidos corretamente`
    - Uau! Você implementou mensagens de erro customizadas para argumentos inválidos em agentes, com status `400 Bad Request` e detalhes específicos dos campos. Isso é uma excelente prática para APIs, fornecendo feedback claro aos desenvolvedores. Parabéns!

## ❌ Problemas Detectados (Descontos de até 100 pontos)
- Nenhuma infração grave foi detectada. Muito bom nesse aspecto!

---
Continue praticando e caprichando no código. Cada detalhe conta! 💪
Se precisar de ajuda, não hesite em perguntar nos canais da guilda. Estamos aqui para ajudar! 🤝

---
<sup>Made By the Autograder Team.</sup><br>&nbsp;&nbsp;&nbsp;&nbsp;<sup><sup>- [Arthur Carvalho](https://github.com/ArthurCRodrigues)</sup></sup><br>&nbsp;&nbsp;&nbsp;&nbsp;<sup><sup>- [Arthur Drumond](https://github.com/drumondpucminas)</sup></sup><br>&nbsp;&nbsp;&nbsp;&nbsp;<sup><sup>- [Gabriel Resende](https://github.com/gnvr29)</sup></sup>