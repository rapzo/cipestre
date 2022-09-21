# Cipestre End-to-end

## Open Cypress Dashboard

```shell
yarn start
```

## Run tests in the command line

```shell
yarn test
```

```shell
git pull <remote> <branch> => git fetch <remote> <branch> && git merge <remote>/<branch>
git pull <remote> <branch> --rebase => git fetch <remote> <branch> && git rebase <remote>/<branch>

// test
----X-----
   / /
--X-Y <- Eu!!

// fetch & merge (aka git pull)
X+Y -> Y vai ser misturado com X, tendo X precedencia

// fetch & rebase (git pull --rebase)
```
