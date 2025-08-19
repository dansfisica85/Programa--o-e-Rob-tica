# 🚀 Instruções de Instalação e Uso

## 📋 Pré-requisitos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Conexão com a internet (apenas para carregar os ícones do Font Awesome)

## 💻 Como Usar

### Opção 1: Uso Local (Recomendado)

1. **Baixe todos os arquivos** do projeto para uma pasta em seu computador
2. **Abra o arquivo `index.html`** em qualquer navegador web
3. **Pronto!** O site estará funcionando localmente

### Opção 2: Publicação na Web

1. **Faça upload** de todos os arquivos para um servidor web
2. **Configure** o domínio apontando para o arquivo `index.html`
3. **Teste** o acesso pelo navegador

## 📁 Estrutura de Arquivos Necessários

```
Programação e Robótica/
├── index.html          ✅ Arquivo principal (obrigatório)
├── styles.css          ✅ Estilos (obrigatório)
├── script.js           ✅ JavaScript (obrigatório)
├── manifest.json       📱 PWA (opcional)
├── config.json         ⚙️ Configurações (opcional)
├── README.md           📖 Documentação (opcional)
├── .gitignore          🚫 Git ignore (opcional)
└── Recursos/           📚 Pasta com materiais (obrigatório)
    ├── Start - Alura/
    ├── Robótica/
    │   └── Batalha de Robôs/
    └── Currículo SP - BNCC/
```

## 🔧 Configurações Personalizadas

### Alterando Informações do Professor

1. **Abra o arquivo `index.html`**
2. **Localize as seções** com informações do professor
3. **Substitua** conforme necessário:
   - Nome do professor
   - Cidade/escola
   - Contatos

### Adicionando Novos Recursos

1. **Adicione os arquivos** na pasta `Recursos/`
2. **Edite o arquivo `index.html`**
3. **Adicione um novo card** na seção apropriada:

```html
<div class="resource-card">
    <div class="card-icon">
        <i class="fas fa-[ÍCONE]"></i>
    </div>
    <h3>[TÍTULO]</h3>
    <p>[DESCRIÇÃO]</p>
    <div class="card-links">
        <a href="Recursos/[CAMINHO]/[ARQUIVO]" target="_blank" class="btn btn-sm">[TEXTO DO BOTÃO]</a>
    </div>
</div>
```

## 🎨 Personalizando o Design

### Cores

No arquivo `styles.css`, localize as variáveis de cor:

```css
/* Cores principais */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
--primary-color: #667eea;
--secondary-color: #ffd700;
```

### Fontes

Altere a fonte no início do `styles.css`:

```css
body {
    font-family: 'Sua Fonte', Tahoma, Geneva, Verdana, sans-serif;
}
```

## 📱 Recursos PWA (Progressive Web App)

O site pode ser instalado como um aplicativo:

1. **Chrome/Edge**: Clique em "Instalar" na barra de endereços
2. **Safari**: Compartilhar > Adicionar à Tela Inicial
3. **Firefox**: Menu > Instalar

## 🔍 SEO e Otimizações

### Meta Tags Incluídas

- ✅ Description e Keywords
- ✅ Open Graph (Facebook)
- ✅ Twitter Cards
- ✅ Viewport responsivo
- ✅ Charset UTF-8

### Performance

- ✅ CSS e JS minificados internamente
- ✅ Imagens otimizadas
- ✅ Font Awesome via CDN
- ✅ Lazy loading nas animações

## 🛠️ Resolução de Problemas

### Site não carrega completamente

1. **Verifique** se todos os arquivos estão na mesma pasta
2. **Confirme** se a pasta `Recursos/` está presente
3. **Teste** em um navegador diferente

### Ícones não aparecem

1. **Verifique** a conexão com a internet
2. **Confirme** se o CDN do Font Awesome está acessível
3. **Teste** em modo anônimo/privado

### Links não funcionam

1. **Verifique** se os caminhos dos arquivos estão corretos
2. **Confirme** se os arquivos existem na pasta `Recursos/`
3. **Teste** os links individualmente

### Menu mobile não funciona

1. **Verifique** se o arquivo `script.js` está carregando
2. **Abra** o console do navegador (F12) para ver erros
3. **Teste** em dispositivo móvel real

## 📞 Suporte

Para dúvidas ou problemas:

1. **Verifique** se seguiu todas as instruções
2. **Teste** em navegador atualizado
3. **Consulte** a documentação no `README.md`

## 🎯 Dicas Importantes

- ⚠️ **Sempre faça backup** antes de fazer alterações
- 🔄 **Teste em diferentes dispositivos** (desktop, tablet, mobile)
- 🌐 **Verifique em diferentes navegadores**
- 📝 **Mantenha o arquivo `config.json`** atualizado
- 🔒 **Não compartilhe informações pessoais** sem necessidade

---

**Desenvolvido por Davi Antonino Nunes da Silva - Sertãozinho, SP - 2025**
