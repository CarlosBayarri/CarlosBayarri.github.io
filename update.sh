
echo "Updateing repo";
read -p  "What's the commit? " commit;
sudo ng build --prod;
sudo git add *;
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

sudo git push origin dev;

echo "Updated!";