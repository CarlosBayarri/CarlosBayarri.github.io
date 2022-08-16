
echo "Updateing repo to prod";
read -p  "What's the commit? " commit;
git checkout dev;
git checkout master -- docs/*
echo "commit: $commit issue: $issue";
if [ "$issue" != "" ]; then
    if [ "$condition" != "" ]; then
        sudo git commit -m "$commit" -m "$condition $issue";
    else
        sudo git commit -m "$commit" -m "$issue";
    fi
else
        sudo git commit -m "$commit";
fi

sudo git push origin master;

echo "Updated!";