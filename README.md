# Env Vars Spike

Add the following content to the file ./env/.env.keys file to be able to decrypt the files

```
# place in env/.env.keys
#
#/------------------!DOTENV_PRIVATE_KEYS!-------------------/
#/ private decryption keys. DO NOT commit to source control /
#/     [how it works](https://dotenvx.com/encryption)       /
#/----------------------------------------------------------/

# .env.dev
DOTENV_PRIVATE_KEY_DEV=49dc82999e28ea8b2ca09cbb92ed799f443f2f81a25fa72039d7e417459cb76c

# .env.uat
DOTENV_PRIVATE_KEY_UAT=cc1012d8c6f90a8194190e458b4da92e9e741344f63b4ba5a72f7b9ae7802d67

# .env.prod
DOTENV_PRIVATE_KEY_PROD=a288b86179a4fca7368d0e1d3bb418429cc6e983483e049c3a9e601f2f3b6fde

```
