# 云雀导航项目

## 技术方案

- 前端采用 vue3 + element plus 方案
- 后端采用 python FastAPI SQLite 方案
- 项目部署在服务器或者 docker 上

## 项目想法

- 前端
   - 导航页
      - 显示时间、天气
      - 搜索框 百度、必应、谷歌等
      - 主要图标区域
         - 小部件
         - 主要图标
         - 一般图标
         - 新增按钮
            - 将图标数据保存到数据库并保存页面布局
   - 图床页
      - 图片上传到 tg 图床
         - 生成 url、markdown、论坛链接
         - 将链接保存到数据库
      - 图片管理
         - 读取数据库中的图床url进行展示
         - 可对图片url进行删除、实际图片还存在
- 后端
   - API
      - 使用FastAPI
      - 数据保存SQLite3
         - 数据库设计
            - User
               - id
               - name
               - password
               - role
            - Icon
               - id
               - name
               - class_name
               - url
               - website
               - discription
               - order
            - Class
               - id
               - name
               - icon_id
               - discription
            - Picture
               - id
               - class
               - name
               - url
            - Settings
               - id
               - background_picture
               - language
               - address
               - owner
