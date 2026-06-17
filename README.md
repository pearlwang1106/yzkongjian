# yzkongjian

Astro 静态站点项目。

线上地址：https://pearlwang1106.github.io/yzkongjian/

## 开发命令

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm install`     | 安装依赖                                    |
| `npm run dev`     | 本地开发，默认 `localhost:4321`             |
| `npm run build`   | 构建生产版本到 `./dist/`                    |
| `npm run preview` | 本地预览构建结果                            |

## GitHub Pages 部署

本项目通过 GitHub Actions 自动部署，**不能直接推送源码让 Pages 渲染**（Astro 需要先 `npm run build` 生成静态 HTML）。

首次部署前，在 GitHub 仓库 **Settings → Pages** 中：

1. **Build and deployment → Source** 选择 **GitHub Actions**
2. 推送代码到 `main` 分支后，Actions 会自动构建并发布

本地预览生产构建效果：

```bash
npm run build
npm run preview -- --base /yzkongjian
```
