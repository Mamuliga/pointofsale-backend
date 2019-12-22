# echo "Installing Node..."
# sudo apt-get update
# sudo apt-get install nodejs
# sudo apt-get install npm

echo "Installing Node_modules..."
npm i

echo "Compiling typescript files..."
npm run build

# echo "archive the build folder..."
# zip -r dist.zip dist

echo "Installing heroku CLI..."
sudo snap install --classic heroku

echo "Adding heroku CLI remote url..."
heroku git:remote -a eit-pos-api

git config remote.heroku.push +HEAD:refs/heads/master
git config user.name "Bitrise Deployment"
git config user.name "br.dep@brise.com"

mv dist build

git add .
git commit -m "release for version $VERSION_NO"

git push heroku