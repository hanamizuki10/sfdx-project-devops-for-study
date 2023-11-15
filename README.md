# sfdx-project-devops-for-study
`sf project generate --name sfdx-project-devops-for-study`のコマンドを実行して開始したSalesforce DX Projectです。

このリポジトリは、DevOps Center勉強用に作成したリポジトリです。

# 想定シーン

もともと変更セットを活用して、本番組織に機能リリースしていたけれど、DevOps Centerがリリースされ切り替えることを想定
git checkout -b feature/1-ad-apex-class

# DevHub認証
```
sf org login web --set-default-dev-hub --alias devops-devhub
```

# スクラッチ組織の作成（事前DevHub認証必須)
```
npm run create:scratch
```
# スクラッチ組織の作成のログインパスワード作成
```
npm run password:scratch
```
# スクラッチ組織の削除
スクラッチ組織を作り直したい時に。
```
npm run delete:scratch
```
# デプロイ（事前DevHub認証必須)
```
npm run deploy:scratch
```
# スクラッチ組織を開く
```
npm run open:scratch
```