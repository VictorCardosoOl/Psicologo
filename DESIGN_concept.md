# Técnica de Design: Editorial Accordion (Lista Expansiva Editorial)

Este documento descreve a técnica de interface utilizada na seção "O que sua mente diz?" (CommonDisorders), inspirada em layouts de revistas digitais premium e sites premiados como o da *Kettmeir*.

## 1. O Conceito

O **Editorial Accordion** é uma fusão entre uma lista de dados (data list) e um componente de acordeão (accordion). Diferente de acordeões utilitários padrão (frequentemente usados em FAQs), o foco aqui é a **tipografia**, o **espaço negativo** e a **hierarquia visual**.

O objetivo não é apenas esconder conteúdo para economizar espaço, mas criar uma experiência de leitura cadenciada, onde o usuário escolhe o que quer consumir ("Progressive Disclosure").

## 2. Comportamento Esperado

### Estado Inicial (Minimizado)
*   **Visibilidade:** Apenas o cabeçalho de cada item é visível.
*   **Elementos:** 
    *   Um identificador discreto (Número `01`, `02`...).
    *   A frase principal (Gatilho) em destaque tipográfico.
    *   Um indicador de interação (Seta ou ícone `+`).
*   **Interação:** O cursor muda para `pointer`. Ao passar o mouse (hover), pode haver mudanças sutis de cor ou animação na seta, indicando interatividade.

### Estado Ativo (Expandido)
*   **Ação:** Ao clicar (onClick), o container se expande verticalmente.
*   **Animação:** A transição de altura (`height`) deve ser fluida. Utilizamos curvas de animação "ease-out" ou "spring" para parecer natural, não mecânico.
*   **Layout Interno:** O conteúdo revelado geralmente quebra a linha visual do cabeçalho. No nosso caso, cria-se um grid interno com texto à esquerda e um elemento visual (ícone/imagem) à direita.
*   **Exclusividade (Opcional):** Em muitos designs premium, ao abrir um item, os outros se fecham automaticamente. Implementamos isso definindo o estado como `string | null` (apenas um ID ativo por vez).

## 3. Detalhes Técnicos de Implementação

### Estrutura (JSX/HTML)
Utilizamos uma abordagem de lista plana. As bordas (`border-top`, `border-bottom`) são aplicadas aos containers para criar as linhas "de ponta a ponta" (full-width).

```jsx
<Container>
  {items.map(item => (
     <Wrapper className="border-b">
        <HeaderButton onClick={toggle}> ... </HeaderButton>
        <AnimatePresence>
           {isOpen && <Content> ... </Content>}
        </AnimatePresence>
     </Wrapper>
  ))}
</Container>
```

### Animação (Framer Motion)
Para evitar o "pulo" visual quando o conteúdo aparece, animamos a altura de `0` para `auto`.

```javascript
initial={{ height: 0, opacity: 0 }}
animate={{ height: 'auto', opacity: 1 }}
exit={{ height: 0, opacity: 0 }}
transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
```
*A curva bezier `[0.16, 1, 0.3, 1]` cria um efeito sofisticado onde a animação começa rápida e desacelera suavemente no final.*

## 4. Por que usar essa técnica?

1.  **Redução de Carga Cognitiva:** O usuário não é bombardeado com textos longos sobre ansiedade, depressão e pânico simultaneamente. Ele vê apenas frases com as quais pode se identificar.
2.  **Escaneabilidade:** As linhas divisórias fortes guiam o olho horizontalmente, facilitando a leitura rápida dos tópicos.
3.  **Elegância Visual:** O uso de muito espaço em branco (whitespace) e fontes serifadas grandes transmite autoridade, calma e profissionalismo — atributos essenciais para um site de psicologia.
4.  **Engajamento:** O ato de clicar para revelar cria um micro-compromisso do usuário com o conteúdo.

## 5. Dicas de Design Visual

*   **Bordas:** Use cores sutis (ex: `border-stone-300`). Bordas pretas puras podem pesar demais.
*   **Alinhamento:** Mantenha o texto do conteúdo expandido alinhado com o texto do título (indentação), criando um eixo vertical imaginário limpo.
*   **Contraste:** O título deve ser significativamente maior ou mais pesado que o texto descritivo.

---
*Documento gerado para auxiliar no desenvolvimento e manutenção do padrão visual do projeto Mente Serena.*
