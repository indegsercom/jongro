#!/bin/sh

# Decrypt the file
mkdir $HOME/secrets
# --batch to prevent interactive command --yes to assume "yes" for questions
gpg --quiet --batch --yes --decrypt --passphrase="$GPG_PASSPHRASE" \
--output $PWD/secrets/mfirebase-admin-account.json $PWD/secrets/mfirebase-admin-account.json.gpg