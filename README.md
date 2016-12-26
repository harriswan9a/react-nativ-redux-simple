


- 安裝套件
```
npm install redux react-redux --save
```

- 在 root 節點掛上store

- 地雷1：掛上store不能夠自己connect自己.. ex: Root 使用<Provider></Provider>, 不能在同一層Root = connect()(Root)

- container才使用redux  component不使用redux ...coding style先規範後面會比較好debug

