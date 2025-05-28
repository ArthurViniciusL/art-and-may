#!/bin/bash

# Diretório raiz do projeto
ROOT_DIR="src"

# Lista de diretórios a serem criados
DIRS=(
  "$ROOT_DIR/assets"
  "$ROOT_DIR/assets/pictures"
  "$ROOT_DIR/assets/fonts"
  "$ROOT_DIR/config"
  "$ROOT_DIR/core/api"
  "$ROOT_DIR/core/utils"
  "$ROOT_DIR/core/services"
  "$ROOT_DIR/models"
  "$ROOT_DIR/app/Home"
  "$ROOT_DIR/styles"
  "$ROOT_DIR/components/ui"
  "$ROOT_DIR/components/layout"
  "$ROOT_DIR/components/app"
  "$ROOT_DIR/context"
  "$ROOT_DIR/hooks"
  "$ROOT_DIR/types"
)

echo "Criando estrutura de diretórios MVVM + Atomic Design..."

for dir in "${DIRS[@]}"; do
  mkdir -p "$dir"
  echo "📁 Criado: $dir"
done

touch src/styles/global.css

echo "✅ Estrutura criada com sucesso!"

