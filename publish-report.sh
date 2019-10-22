if cp ./.tmp/report.html /c/inetpub/SITES/report/index.html; then
    echo 'HTML report copied to /c/inetpub/SITES/report/index.html'
else
    curl -X POST --data-urlencode "payload={\"text\": \"Something went wrong and the HTML test report was not created. Check the outputs of this pipeline: $CI_PIPELINE_URL\"}" https://hooks.slack.com/services/
    exit 1
fi

