export CONFIG_TMP_FILE=$(echo $TMPDIR)capacitor.config.json.tmp
export CONFIG_FILE=$(echo $TMPDIR)capacitor.config.json
export HOST_IP=$(ifconfig | grep "inet " | grep -v 127.0.0.1 | cut -d\  -f2)
cat capacitor.config.json > $CONFIG_TMP_FILE
cat $CONFIG_TMP_FILE | sed "s/0.0.0.0/$HOST_IP/g" > $CONFIG_FILE
npx nx r ionic:run:ios -c $CONFIG_FILE
# npx nx r www:build
