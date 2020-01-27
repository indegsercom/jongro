#!/bin/sh

# Decrypt the file
mkdir $HOME/secrets
# --batch to prevent interactive command --yes to assume "yes" for questions
gpg --quiet --batch --yes --decrypt --passphrase="$GPG_PASSPHRASE" \
--output $PWD/secrets/firebase-admin-account.json $PWD/secrets/firebase-admin-account.json.gpg