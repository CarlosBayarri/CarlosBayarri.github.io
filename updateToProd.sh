
echo "Updateing repo to prod";
read -p  "What's the commit? " commit;
sudo git checkout master;
sudo rm -R *;
sudo git checkout dev -- docs;
sudo cp -R docs/* ./;
sudo git add --all;
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

sudo git checkout dev;

echo "Return to dev";