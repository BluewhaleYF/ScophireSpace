---
title: Solian 客户端下载完整教程
published: 2026-04-19
description: 本文章会指导你如何下载并安装使用 Solar Network 的官方客户端 Solian
tags: 
  - Solian
  - Solar Network
category: 教程
draft: true
pinned: false
---

# 概述

**Solian** ( *HyperNet.Surface* )是开源社交平台 Solar Network 的官方前端应用程序，由于使用 Flutter 编写，因此用有了强大的跨平台兼容性。

## Solian 目前支持以下平台并分为以下版本：

不同的版本支持不同的操作系统，安装方式即更新及时性也略有不同

*加粗的为推荐使用的版本*

- 网页端
- Windows
  - **安装程序**
  - 压缩包版
- Linux
  - AppImage 版本
  - **压缩包版**
  - 社区维护的 AUR 版本
- **macOS**
- **iOS / iPadOS**
- **Android**

# 网页端

网址为 [https://web.solian.app/](https://web.solian.app)

## 优势

由于网页端无需安装且由官方维护，因此访问最为便捷，兼容性最强。可以随时体验到最新的 Solian 而无需在设备上更新。

## 劣势

- 由于网页端的 Solian 托管于 Cloudflare ，因此在中国内地的访问速度可能受限，如果遇到长时间无法访问的问题，请尝试使用客户端，其使用的 api.solian.app 访问速度绝对优于网页端
- 由于一些性能调度问题，Solian 网页版可能占用较大的内存（ 160MB 至 2GB 不等），在内存不足的机器上可能会遇到卡顿现象

## 浏览器兼容性

根据 Flutter 官网的[说明](https://docs.flutter.dev/platform-integration/web/faq#which-web-browsers-are-supported-by-flutter)，Solian 基本可以在大多数现代浏览器上运行，包含：

- Chromium
  - Google Chrome
  - Microsoft Edge
- FireFox
- Safari

只需确认您的浏览器和操作系统版本为近两年内发布的，一般不会有任何问题

# Windows

## 下载源

### Github Actions

#### 优势


